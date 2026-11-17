# Visual and functional validation

Validated 17 November 2026. Reference appears on the left of each comparison; SOLVERRA ESTATES appears on the right. Screenshots compare structure and styling, with intentionally different identity, text, photography, and illustrations.

## Checks

| Check | Result | Evidence |
| --- | --- | --- |
| Production build | PASS | `npm run build`; all 13 content routes prerendered, including nine dynamic details |
| Strict TypeScript | PASS | `npm run typecheck` |
| ESLint | PASS | `npm run lint` |
| Browser suite | PASS | 20 Playwright tests against `next start`, covering all 13 routes |
| Responsive layouts | PASS | Every route tested at 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 430×932, 390×844, 375×812 |
| Images and links | PASS | Loaded image dimensions, internal route inventory, all nine card destinations, related-card exclusions |
| Interactions | PASS | Mobile navigation, Escape/focus restoration, independent FAQs, input errors, enquiry review/edit/copy, clipboard failure, missing-slug 404 |
| Runtime errors | PASS | No browser console errors or uncaught page errors during route checks |
| Asset/identity audit | PASS | 42 local WebP photographs with source/license records; no original runtime branding, detail slugs, or image CDN references |
| Dependencies | PASS | `npm audit`: zero known vulnerabilities |

The responsive assertion polls for layout completion after viewport changes. Diagnostics reproduced stale desktop computed styles during rapid Chromium resizing; these settled within 500ms. Persistent overflow still fails the assertion. No global overflow suppression was added.

## Route comparisons

Desktop: 1440×900. Mobile: 390×844. These viewport captures preserve the sticky detail composition; full-page screenshots would reposition that image.

| Route | Desktop | Mobile |
| --- | --- | --- |
| `/` | [Home](home-desktop-comparison.jpg) | [Home](home-mobile-comparison.jpg) |
| `/about` | [About](about-desktop-comparison.jpg) | [About](about-mobile-comparison.jpg) |
| `/projects` | [Projects](projects-desktop-comparison.jpg) | [Projects](projects-mobile-comparison.jpg) |
| `/properties` | [Properties](properties-desktop-comparison.jpg) | [Properties](properties-mobile-comparison.jpg) |
| `/projects/solis-waterfront-residences` | [Solis](solis-desktop-comparison.jpg) | [Solis](solis-mobile-comparison.jpg) |
| `/projects/the-liora-business-centre` | [Liora](liora-desktop-comparison.jpg) | [Liora](liora-mobile-comparison.jpg) |
| `/projects/veridian-urban-towers` | [Veridian](veridian-desktop-comparison.jpg) | [Veridian](veridian-mobile-comparison.jpg) |
| `/projects/caspia-garden-district` | [Caspia](caspia-desktop-comparison.jpg) | [Caspia](caspia-mobile-comparison.jpg) |
| `/projects/meridian-courtyard` | [Meridian](meridian-desktop-comparison.jpg) | [Meridian](meridian-mobile-comparison.jpg) |
| `/properties/the-arlo-penthouse` | [Arlo](arlo-desktop-comparison.jpg) | [Arlo](arlo-mobile-comparison.jpg) |
| `/properties/sienna-contemporary-villa` | [Sienna](sienna-desktop-comparison.jpg) | [Sienna](sienna-mobile-comparison.jpg) |
| `/properties/the-cove-residence` | [Cove](cove-desktop-comparison.jpg) | [Cove](cove-mobile-comparison.jpg) |
| `/properties/oakline-modern-loft` | [Oakline](oakline-desktop-comparison.jpg) | [Oakline](oakline-mobile-comparison.jpg) |

Detail overview atlases: [desktop](details-desktop-overview.jpg), [mobile](details-mobile-overview.jpg).

## Galleries

All nine detail galleries were inspected after scrolling into view. The reference uses stacked images; no lightbox interaction was observed.

| Gallery | Desktop | Mobile |
| --- | --- | --- |
| Solis | [Compare](gallery-solis-desktop-comparison.jpg) | [Compare](gallery-solis-mobile-comparison.jpg) |
| Liora | [Compare](gallery-liora-desktop-comparison.jpg) | [Compare](gallery-liora-mobile-comparison.jpg) |
| Veridian | [Compare](gallery-veridian-desktop-comparison.jpg) | [Compare](gallery-veridian-mobile-comparison.jpg) |
| Caspia | [Compare](gallery-caspia-desktop-comparison.jpg) | [Compare](gallery-caspia-mobile-comparison.jpg) |
| Meridian | [Compare](gallery-meridian-desktop-comparison.jpg) | [Compare](gallery-meridian-mobile-comparison.jpg) |
| Arlo | [Compare](gallery-arlo-desktop-comparison.jpg) | [Compare](gallery-arlo-mobile-comparison.jpg) |
| Sienna | [Compare](gallery-sienna-desktop-comparison.jpg) | [Compare](gallery-sienna-mobile-comparison.jpg) |
| Cove | [Compare](gallery-cove-desktop-comparison.jpg) | [Compare](gallery-cove-mobile-comparison.jpg) |
| Oakline | [Compare](gallery-oakline-desktop-comparison.jpg) | [Compare](gallery-oakline-mobile-comparison.jpg) |

## Scrolled sections

| Section | Desktop | Mobile |
| --- | --- | --- |
| Home introduction | [Compare](home-introduction-desktop-comparison.jpg) | [Compare](home-introduction-mobile-comparison.jpg) |
| Home projects | [Compare](home-projects-desktop-comparison.jpg) | [Compare](home-projects-mobile-comparison.jpg) |
| Home properties | [Compare](home-properties-desktop-comparison.jpg) | [Compare](home-properties-mobile-comparison.jpg) |
| Home results | [Compare](home-results-desktop-comparison.jpg) | [Compare](home-results-mobile-comparison.jpg) |
| Contact | [Compare](home-contact-desktop-comparison.jpg) | [Compare](home-contact-mobile-comparison.jpg) |
| FAQ | [Compare](home-faq-desktop-comparison.jpg) | [Compare](home-faq-mobile-comparison.jpg) |
| Footer | [Compare](home-footer-desktop-comparison.jpg) | [Compare](home-footer-mobile-comparison.jpg) |
| About story | [Compare](about-story-desktop-comparison.jpg) | [Compare](about-story-mobile-comparison.jpg) |
| About philosophy | [Compare](about-philosophy-desktop-comparison.jpg) | [Compare](about-philosophy-mobile-comparison.jpg) |
| About team | [Compare](about-team-desktop-comparison.jpg) | [Compare](about-team-mobile-comparison.jpg) |

## Tablet comparisons

| Template | 1024×768 | 768×1024 |
| --- | --- | --- |
| Home | [Compare](home-tablet-landscape-comparison.jpg) | [Compare](home-tablet-portrait-comparison.jpg) |
| About | [Compare](about-tablet-landscape-comparison.jpg) | [Compare](about-tablet-portrait-comparison.jpg) |
| Project listing | [Compare](projects-tablet-landscape-comparison.jpg) | [Compare](projects-tablet-portrait-comparison.jpg) |
| Project detail | [Compare](solis-tablet-landscape-comparison.jpg) | [Compare](solis-tablet-portrait-comparison.jpg) |
| Property detail | [Compare](arlo-tablet-landscape-comparison.jpg) | [Compare](arlo-tablet-portrait-comparison.jpg) |

## Measured fidelity

- Header height 64px; desktop gutters 40px; mobile gutters 16px. Home heading starts at y=140 in both implementations.
- Home desktop total height: reference 6490px, local 6492px. Project listing: reference 2078px, local 2079px. About mobile: reference 6356px, local 6354px. Similar total heights support the section-rhythm comparison; they do not establish identical pixels.
- Desktop details use a 60/40 sticky image/content split. Mobile hero height is 434px; overview starts at y=474. Galleries use 4:3 images.
- About hero retains its 2.074:1 ratio on desktop/tablet, then uses a fixed 280px mobile height. Philosophy columns remain split at 1024px and stack below 810px.
- Typography uses the reference font families, with inspected size/line-height changes. Replaced names and prose produce some different line breaks.
- Reveals use a 100px upward entrance over approximately 0.8s; counters, FAQ transitions, header hiding, and marquee follow observed behavior. Reduced motion disables travel and repeated animation.

## Intentional differences

SOLVERRA ESTATES has original brand marks, fictional local datasets, new property/project names, new architectural photographs, and illustrated fictional team profiles. Portfolio counts derive from those datasets. Original promotional controls, creator links, and unconfigured social destinations are removed.

The contact form prepares a copyable enquiry. It validates input, preserves edits, handles clipboard errors, and explicitly states that nothing was sent. Delivery requires a future service integration; no backend or email service is included.

The detail overlay is strengthened for readable white titles over the replacement photographs. Focus outlines, active-link contrast, and touch targets are improved while preserving the reference composition.

Reference screenshots are research evidence only. Runtime assets are entirely local replacements. See [photography sources](../image-sources.json), [asset credits](../asset-credits.md), [visual specification](../visual-spec.md), and [delivery checks](delivery-checks.md).
