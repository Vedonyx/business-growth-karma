# Business Growth Karma

Five-page website for Shweta Vallabh Shah and Business Growth Karma: Home, About, Work, Services and Contact.

The interface is restored from the original Fobet Media clone (`a6a7b9f`). Its typography, responsive layouts, hero slider, floating cards, timeline, testimonial carousel, ticket effects and organic/inorganic summit animation are retained and recolored in the supplied golden-brown palette. The hero uses Shweta's actual TEDx stage photograph.

The presentation's Why / How / What, four-pillar framework, service plans, annual sales goal prompt and client logo train extend the original visual style. Content is adapted from [shwetashah.in](https://shwetashah.in). The Work gallery includes all 96 imported source images; five client testimonial videos and the Sales Psychology System explainer are stored locally.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm start
```

Production output uses `.next-production`, separate from the development output. `NEXT_OUTPUT_DIR` can override this for isolated review sessions.

## Content and assets

- `src/lib/content.ts`: brand details, plans, services and source content.
- `src/data/brand-assets.json`: source URLs, local images and video paths.
- `scripts/import-brand-assets.mjs`: refresh source images.
- `scripts/import-brand-videos.mjs`: refresh local video renditions after importing images.
- `scripts/import-clone-fonts.mjs`: restore the clone's exact fonts and icon files locally.
- `scripts/prepare-design-assets.mjs`: regenerate the social cover and framework illustrations from locally extracted presentation media.

Historical case-study results retain their source context. The enquiry modal prepares an email draft for the visitor to send; it also links to Shweta's original strategy-session booking page. There is no simulated server submission.
