# SOLVERRA ESTATES visual specification

Direction: architectural property portfolio for design-conscious buyers. Match the supplied reference composition. ENERGY 2 / RHYTHM 3 / MOTION 2. Reference fidelity determines typography, grayscale palette, varied image layouts, spacing and motion; no independent redesign.

## Reference observations

Inspected all 13 internal pages: home, about, five projects, four properties, and their listings. No additional internal page templates found. Contact is a home anchor. Promotional controls and generic external booking/social links are excluded.

At 1440px: 40px gutters, 64px fixed header, page introduction starts at y=140. Fluid containers, text capped around 720px. Clash Grotesk 400 for headings/body, Cabinet Grotesk 400/500 for card titles and secondary treatments. Fontshare provides these fonts directly.

Hero type: 72/86.4px, -0.01em tracking. Section headings: 48/62.4px. Body: 18/27px, secondary 16/24px, detail headings 24/33.6px. Colors: white, black, #666 secondary, #d1d1d1/#e8e8e8 dividers. Inputs on black use #1e1e1e; improve label contrast to AA. No card borders, shadows or rounded photography. Small action links have an outlined capsule.

## Template measurements

- Home: hero text split 1:1, 80px image gap, image ratio 2.154:1. Introduction image full bleed, 640px tall, dark overlay; large title bottom left, description/button bottom right, monogram upper left. Featured sections: 120px vertical padding, centered heading/description/button, 48px before cards. Three columns with 24px gaps. Project images square; properties 1.1:1. Cards have 24px bottom padding; featured grids add 24px below. Results and FAQ use 40% heading / remaining content with 64px gap. Metrics use 32px grid gaps, 24px bottom padding, 72px numbers with normal line height and 8px before supporting information. Contact: equal image/black form columns, image square at large widths. Marquee 140px tall. Footer: equal black navigation/image panels, 528px tall, 24px vertical padding.
- About: introduction with two paragraphs occupying 60% of the inner width on desktop, 80% on tablet, 100% on mobile; heading gap 32px, paragraph gap 20px. Wide image ratio 2.074:1 above 809px; fixed 280px height below. Founding-year treatment centered above 809px, left aligned below; 80px top/bottom spacing on desktop, 24px bottom spacing on mobile. Story split heading/body; philosophy split square image/text with a 40% text column and 64px gap, retained on tablet. Results; four 4:5 profile images, 64px after the section heading. Keep section order and dividers.
- Listings: top padding 140px, centered 48px title, 16px subtitle gap, 64px before cards. Three columns with 24px gaps and 48px row gaps. Five project cards and four property cards. Bottom padding 120px. Desktop project listing total height: reference 2078px, local 2079px.
- Details: desktop hero 60% wide, sticky at top, viewport height; title width 600px, 72/79.2px, 40px left, title container padding-top 112px. Location uses 16/24px text and 32px bottom margin; heading begins around y=168. Right column has 40px horizontal gutters, overview starts y=120; 24px headings, body 16/24px, specification rows 59px with bottom dividers. Description paragraphs have 20px gaps. Three 4:3 gallery images separated by 48px. Related three-card section uses 80px vertical padding and 64px heading/grid gap, then footer. Full-page captures move the sticky image; compare viewport captures for hero placement.

## Responsive behavior

- >=1200px: desktop.
- 810–1199px: gutters 40px; hero headings 58px, section headings 40px; home hero stacks with a 56px text gap, featured card grids remain three columns; listing grids become two columns. Story/results/FAQ stack. Team remains four columns. Details stack below a 900px hero; detail headings retain 72px type. Footer stays split.
- <=809px: 16px gutters; 46/55.2px hero headings and 32/41.6px section headings; 80px usual section padding. Home hero text gap 56px, image ratio approximately 1.28:1. Home results retain 120px section padding; About results use 80px. All project/property grids stack; team uses two columns. Detail hero height 434px, heading scales from 48px to 56px; overview starts y=474 and gallery gap is 16px. Contact and footer stack; footer information height 480px, image height 400px. Mobile navigation opens a dark translucent panel with backdrop blur and divided links.

## Interaction observations

Reveal begins opacity 0, translateY(100px), approaches completion around 0.8s, ease-out. Elements re-enter on returning to view. No card zoom was observed. FAQ items expand independently with a plus/minus control. Gallery is static stacked imagery, no lightbox observed. Marquee moves linearly left about 100px/s. Counters animate on entering view. Fixed navigation hides while scrolling down and returns at the top/upward scrolling. Respect reduced motion without hiding content.

## Content decisions

Five fictional concept projects, four fictional residences. Editorial introductions/detail prose explain fictional locations/specifications and architectural reference photography. Four illustrated fictional team profiles. Portfolio counts derive from local data rather than unsupported commercial achievements. Contact validates then presents a copyable enquiry; explicitly not sent. Book-a-call links lead to the contact form.

## Validation

Compare all corresponding routes at 1440×900 and 390×844. Inspect template changes at 1024×768 and 768×1024. Check all requested widths: 1920, 1440, 1280, 1024, 768, 430, 390, 375. Capture scrolled sections individually because reveal effects reset offscreen. Branding/images differ intentionally; compare geometry, typography, rhythm and states.
