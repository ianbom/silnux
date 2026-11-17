# SOLVERRA ESTATES

Architectural real estate frontend built with Next.js App Router, strict TypeScript, Tailwind CSS, shadcn-style Radix primitives, Lucide, Motion, and Next Image.

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npx playwright install chromium
npm test
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin before building so social images resolve correctly. See `.env.example`. No credentials or external services are required.

The 13 pages include home, about, project and property listings, five project details, and four property details. Content lives in `src/data`; shared listing/detail templates live in `src/components`. All portfolio entries, locations, specifications, founding history, and illustrated team profiles are fictional. Photographs are architectural references.

Navigation, mobile dialog, independent FAQ accordions, scroll reveals, counters, marquee, and related cards work locally. Reduced motion is respected. Contact validates inputs, then offers review/copy/edit; nothing is transmitted or booked. A future delivery integration belongs at the form submission boundary in `contact-form.tsx` and must handle actual delivery errors before reporting success.

All 42 photographs are local WebP assets from free Unsplash sources. Photographer, source page, download URL, and license records: [image-sources.json](docs/image-sources.json). Original team illustrations and brand marks are included. Clash Grotesk and Cabinet Grotesk are distributed through Fontshare; complete licenses accompany the font files in `public/fonts`.

Reference measurements: [visual specification](docs/visual-spec.md). Screenshot comparisons and validation results: [validation report](docs/validation/README.md). `scripts/download-assets.py` can reproduce asset downloads; it requires Python and Pillow. Runtime requires neither.
