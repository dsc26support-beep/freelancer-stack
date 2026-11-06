# Freelancer Stack

Honest software comparisons for freelancers, funded by disclosed affiliate links.

- Strategy and program research: [docs/STRATEGY.md](docs/STRATEGY.md)
- Stack: Astro (static), Markdown articles in `src/content/articles/`
- Articles with `draft: true` are not built into the site

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Deploy (Cloudflare Pages or Netlify, from GitHub)

- Build command: `npm run build`
- Output directory: `dist`
- Set `site` in `astro.config.mjs` to your real domain.

## Before publishing any article

1. Replace every `[VERIFY]` with a fact checked on the vendor's page.
2. Replace every `[YOUR NOTES]` with real first-hand experience.
3. Keep the disclosure and `rel="sponsored"` on affiliate links.
4. Set `draft: false`.
