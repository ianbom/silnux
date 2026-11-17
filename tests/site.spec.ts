import { expect, test } from "@playwright/test";
import { projects } from "../src/data/projects";
import { properties } from "../src/data/properties";
import { validateEnquiry } from "../src/lib/enquiry";

const routes = ["/", "/about", "/projects", "/properties", ...projects.map(p => `/projects/${p.slug}`), ...properties.map(p => `/properties/${p.slug}`)];

test("enquiry rejects empty, malformed, and oversized input", () => {
  expect(Object.keys(validateEnquiry({ name: "  ", email: "not-an-email", message: "" }))).toHaveLength(3);
  expect(validateEnquiry({ name: "Alex", email: " alex@example.com ", message: "A courtyard home" })).toEqual({});
  expect(validateEnquiry({ name: "a".repeat(101), email: "alex@example.com", message: "a".repeat(3001) })).toHaveProperty("message");
});

test("portfolio specifications and image references are consistent", () => {
  expect(new Set([...projects, ...properties].map(item => item.slug)).size).toBe(9);
  for (const property of properties) {
    expect(property.livingArea + property.bedroomArea + property.bathroomArea + property.outsideArea).toBe(property.area);
  }
  for (const item of [...projects, ...properties]) {
    expect(item.gallery).toHaveLength(3);
    for (const image of [item.cover, ...item.gallery]) {
      expect(image.src).toMatch(/^\/images\/.*\.webp$/);
      expect(image.alt.length).toBeGreaterThan(20);
    }
  }
});

for (const route of routes) {
  test(`${route} renders, resolves links, and fits every target viewport`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/SOLVERRA ESTATES/);
    await expect(page.locator("body")).not.toContainText(/Nexus|Framer|Buy a template|Demo Website/i);
    for (const [width, height] of [[1920, 1080], [1440, 900], [1280, 800], [1024, 768], [768, 1024], [430, 932], [390, 844], [375, 812]]) {
      await page.setViewportSize({ width, height });
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), { message: `${route} fits ${width}×${height} after responsive styles settle` }).toBe(true);
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const image of await page.locator("main img, footer img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate(element => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    const links = await page.locator('a[href^="/"]').evaluateAll(elements => [...new Set(elements.map(a => a.getAttribute("href")?.split("#")[0] || "/"))]);
    for (const href of links) expect(routes).toContain(href);
    expect(errors).toEqual([]);
  });
}

test("cards navigate to unique details and related entries exclude the current item", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const kind of ["projects", "properties"] as const) {
    await page.goto(`/${kind}`);
    const cards = page.locator(".listing-card");
    const hrefs = await cards.evaluateAll(elements => elements.map(e => e.getAttribute("href")!));
    expect(hrefs).toHaveLength(kind === "projects" ? 5 : 4);
    for (const href of hrefs) {
      await page.goto(`/${kind}`);
      await page.locator(`.listing-card[href="${href}"]`).click();
      await expect(page).toHaveURL(href);
      await expect(page.locator(`.related-section a[href="${href}"]`)).toHaveCount(0);
      await expect(page.locator(".related-section .listing-card")).toHaveCount(3);
    }
  }
});

test("mobile menu restores focus, closes with Escape, and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("dialog").getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL("/about");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.goto("/");
  await trigger.click();
  await page.getByRole("dialog").getByRole("link", { name: "SOLVERRA ESTATES home" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("clipboard failure keeps the prepared enquiry available", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() => Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("Clipboard unavailable")) } }));
  await page.goto("/#contact");
  await page.getByLabel("Name", { exact: true }).fill("Alex Morgan");
  await page.getByLabel("Email", { exact: true }).fill("alex@example.com");
  await page.getByLabel("Message", { exact: true }).fill("A courtyard residence.");
  await page.getByRole("button", { name: "Review enquiry" }).click();
  await page.getByRole("button", { name: "Copy enquiry", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Your enquiry is selected");
  await expect(page.getByLabel("Prepared enquiry")).toBeFocused();
  expect(await page.getByLabel("Prepared enquiry").evaluate(element => (element as HTMLTextAreaElement).selectionEnd)).toBeGreaterThan(30);
});

test("FAQs expand independently; contact reviews without sending and preserves edits", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const questions = page.locator(".faq-trigger");
  await questions.nth(0).click();
  await questions.nth(1).click();
  await expect(questions.nth(0)).toHaveAttribute("aria-expanded", "true");
  await expect(questions.nth(1)).toHaveAttribute("aria-expanded", "true");
  const external: string[] = [];
  page.on("request", request => { if (request.method() === "POST" && !request.url().includes("127.0.0.1")) external.push(request.url()); });
  await page.getByRole("button", { name: "Review enquiry" }).click();
  await expect(page.getByText("Please enter your name.", { exact: true })).toBeVisible();
  await page.getByLabel("Name", { exact: true }).fill("Alex Morgan");
  await page.getByLabel("Email", { exact: true }).fill("invalid");
  await page.getByLabel("Message", { exact: true }).fill("I'd like to discuss a courtyard residence.");
  await page.getByRole("button", { name: "Review enquiry" }).click();
  await expect(page.getByText("Please enter a valid email address.", { exact: true })).toBeVisible();
  await page.getByLabel("Email", { exact: true }).fill("alex@example.com");
  await page.getByRole("button", { name: "Review enquiry" }).click();
  await expect(page.getByText("Nothing has been sent. Online delivery is currently unavailable.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Copy enquiry", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Enquiry copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("Alex Morgan");
  await page.getByRole("button", { name: "Edit enquiry", exact: true }).click();
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("Alex Morgan");
  expect(external).toEqual([]);
});

test("missing slugs return a useful 404", async ({ page }) => {
  const response = await page.goto("/projects/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("link", { name: "Back to home" })).toBeVisible();
});
