# Delivery checks

The user's explicit recreation brief governs layout, grayscale styling, fictional content, logo, team illustrations, Lucide icons, and reference motion. Generic design preferences yield to that brief. Evidence: [validation report](README.md), [visual specification](../visual-spec.md), [source records](../image-sources.json), and `tests/site.spec.ts`.

## Hard gate

- R-02 PASS: runtime copy contains no decorative em dashes.
- R-03 PASS: all 13 routes fit eight target viewports in Playwright.
- R-17 PASS: displayed counts derive from local project, property, team, and typology data.
- R-18 PASS: no testimonials are fabricated or displayed.
- R-23 PASS: brand marks and fictional illustrated profiles were explicitly requested.
- R-24 PASS: internal links resolve to the route inventory or the existing contact anchor.
- R-25 PASS: solid text/surface colors meet AA; image overlays support readable white text. Active-link and form-label contrast were strengthened.
- R-26 PASS: navigation, cards, menu, FAQs, review/copy/edit controls have implemented behavior.
- R-27 PASS: missing routes, invalid inputs, and clipboard failure have usable states; pages are prerendered.
- R-28 PASS: FAQs explain portfolio content, specifications, photography, enquiry preparation, and availability.
- R-32 PASS: Radix focus handling, Escape closure, visible focus, skip navigation, and labelled form fields are present; focus restoration is tested.
- R-33 PASS: changes are implemented in source files; no runtime DOM/CSS patching ships.
- R-34 PASS: no theme toggle exists.
- R-35 PASS: production build and 20 recorded automated browser checks pass; screenshot comparisons cover every route.
- R-36 PASS: no security, compliance, customer, or performance claims are fabricated.
- R-37 PASS: the supplied reference determines the visual direction; dials are recorded in the visual specification.
- R-38 PASS: fictional locations, specifications, history, and illustrated profiles are explicitly authorized and disclosed in editorial content.

## Purpose gate

- R-01 PASS: gradients darken photographic backgrounds for white-text legibility, following the reference.
- R-04 PASS: Lucide icons identify location, area, rooms, project type, calendar, duration, and menu state; the user requested Lucide.
- R-06 PASS: Clash Grotesk and Cabinet Grotesk match the inspected reference; tracked footer lettering distinguishes the brand descriptor.
- R-07 PASS: no decorative grids or blueprint patterns are added.
- R-08 PASS: no decorative arrows are added to action controls.
- R-09 PASS: no promotional badges are added; capsule action links follow the reference.
- R-10 PASS: blur is confined to the observed mobile navigation panel.
- R-12 PASS: no generic card shadows are added.
- R-13 PASS: no glow effects are added.
- R-14 PASS: listing grids reproduce the requested card pattern; full-bleed imagery and split sections establish the surrounding hierarchy.
- R-19 PASS: reveals, counters, and marquee reproduce observed effects and respect reduced motion.
- R-22 PASS: original SVG portraits represent explicitly fictional team disciplines without assigning real people to the company.

## Liveliness

- Dials PASS: ENERGY 2 / RHYTHM 3 / MOTION 2 recorded before implementation.
- Consistency PASS: split hero, full-bleed introduction, listing grids, results, contact, FAQ, and split footer follow the inspected sequence.
- Focal point PASS: prominent page titles and architectural images establish each template's hierarchy.
- Whitespace PASS: measured section padding, gutters, heading gaps, and gallery spacing define rhythm.
- Accent PASS: architectural imagery supplies the accent within the reference's monochrome interface.
- Identity PASS: the original S monogram repeats in navigation, introduction, footer, favicon, and social image.
- Direction PASS: reference recreation and fictional rebranding are recorded in the visual specification.

## Craftsmanship

- C-1 PASS: font, spacing, image ratios, columns, and motion are grounded in reference inspection.
- C-2 PASS: browser tests exercise navigation, cards, menu, FAQs, and form controls.
- C-3 PASS: section order follows the requested reference; no filler sections are added.
- C-4 PASS: responsive route checks, keyboard focus tests, and error-state tests pass.
- C-5 PASS: no invented commercial achievements or testimonials appear.
- R-05 PASS: varied section rhythm follows the explicit reference, with screenshot evidence.
- R-11 PASS: images remain square-edged; action capsules and form-field corners match their separate roles.
- R-15 PASS: actions name their destination or behavior, including projects, properties, contact, and enquiry review.
- R-16 PASS: no AI marketing buzzwords appear in runtime copy.
- R-20 PASS: the architectural reference composition is preserved, with an original brand and dataset.
- R-21 PASS: light sections and black contact/footer surfaces follow the reference; no unsolicited theme system is added.
- R-29 PASS: interface colors remain grayscale; photographs supply natural color.
- R-30 PASS: recreation is explicitly requested; no unrelated product patterns are introduced.
- R-31 PASS: major decisions and their reference rationale are documented in the visual specification.
