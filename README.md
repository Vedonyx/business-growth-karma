# Business Growth Karma

A five-page website for **Business Growth Karma**, founded by **Shweta Shah**. Rebuilt from the original Fobet Media starter using Next.js 16.4.2, React 19 and TypeScript.

## Run locally

```sh
npm ci
npm run dev
```

Production checks and preview:

```sh
npm run build
npm run typecheck
npm start
```

No API keys, database, external font service or runtime source-site image requests are required.

The production script uses Next.js's bundled Webpack build and a small worker pool for Windows workspaces. Production output goes into `.next-production`, separate from the development server's `.next` folder, so an open preview cannot lock production artifacts. Development retains the default Next.js development server.

## Pages

| Route | Content |
| --- | --- |
| `/` | Founder hero, client rail, four pillars, animated organic/paid growth peak, hot/warm leads, industries, purpose, results, plans, video stories and FAQs |
| `/about` | Shweta's background, agency story, purpose, TEDx talk, professional journey and free LinkedIn e-book |
| `/work` | Industry filters, client case studies, video testimonials, searchable image gallery and accessible image lightbox |
| `/services` | Four-pillar service details, Sales Psychology System video, Google/LinkedIn/Meta channels, three plans and implementation process |
| `/contact` | Business enquiry form, phone/email links, Pune office map link, original strategy booking and education resources |

The 15 legacy source-site content URLs redirect to the corresponding new pages or sections. Legal policy links continue to the brand's existing policy pages.

## Content and visual sources

- Brand content and 96 images imported from [shwetashah.in](https://shwetashah.in), covering the homepage, founder and company pages, services, industries, case studies and testimonials.
- Six Wistia videos are preserved: five client stories and the Sales Psychology System explainer. Local thumbnails load before the external player; the player loads only after a visitor chooses to watch.
- `animated website.pptx` supplied the bold typographic direction, moving logo rail, Why/How/What layout, four-pillar framework, service plans, testimonial and FAQ sections, and closing invitation.
- The supplied screenshot set the warm black, antique gold, glowing routes and organic/paid growth peak direction.
- Fonts are hosted in `public/fonts`. Source photos, screenshots, thumbnails, the presentation's two framework illustrations and the social preview live in `public/brand`.

Pricing follows the supplied presentation: **The Setup ₹1,20,000/year**, **DIY + Training ₹2,40,000**, **Done for You ₹4,00,000/month**. Conflicting older source-site fees and schedules are not presented as current. The booking page and direct contact confirm appointment fees, advertising spend, tax, scope and webinar availability.

Historical outcome claims are contextualised as client case-study results. No new clients, testimonials or performance guarantees have been invented.

## Contact behaviour

The enquiry form validates required details, carries a selected plan from the pricing cards, and opens a populated `mailto:` draft addressed to `info@shwetashah.in`. The visitor sends the email from their email app. The site does not claim to store or submit a lead, and does not use a simulated success response. The separate booking button opens the existing `https://shwetashah.in/book-call.html` flow. A server-side enquiry inbox can be added later if required.

## Maintenance

- Brand details, service copy, plans and FAQs: `src/lib/content.ts`
- Imported image provenance and video IDs: `src/data/brand-assets.json`
- Shared presentation and interactions: `src/components`
- Theme, responsive layouts and reduced-motion support: `src/app/globals.css`
- Site metadata, social preview, structured data, robots and sitemap: `src/app`
- Repeatable original asset import: `scripts/import-brand-assets.mjs`
- One-time fonts and supplied-reference preparation: `scripts/prepare-design-assets.mjs` (requires the locally extracted PPT images in ignored `.reference/`)

The founder cutout is an AI-assisted background extraction from the supplied source-site portrait. The original banner remains in the imported gallery. Built-in ImageGen was used with this prompt:

> Extract only Shweta Shah on the right of the supplied banner, wearing the white shirt and pointing upward. Remove background, text, logos and graphics. Preserve face, identity, hairstyle, skin tone, expression, clothing, hand pose and proportions. Keep the complete visible person. Clean natural edges, real alpha transparency, no shadow, text or other objects. Tightly framed tall cutout.

The project asset is `public/brand/shweta-shah-portrait.webp`; the non-destructive original generated output remains in the local Codex generated-images folder. Animations are decorative and disabled for visitors who request reduced motion. Content remains visible without animation JavaScript.

The metadata domain is `https://shwetashah.in`. Update `metadataBase`, structured data, robots and sitemap if deploying to another permanent domain.
