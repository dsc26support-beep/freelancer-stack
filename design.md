# Design: Freelance Stack

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Ecosystem Index (hero Stage with the verdict card, then the guide index, the four layers, the rule, a closing band, the mast footer)
- Theme: brand (vibe: "green-black paper, one lime signal")
- Axes: dark/geometric-sans/chromatic-lime · posture: Restrained
- Hero per route: Stage (/), Settled (every inner page: title, one line, optional date)

## Tokens
`src/styles/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(15% 0.012 140);  --color-paper-2: oklch(19% 0.014 140);  --color-paper-3: oklch(23% 0.016 140);
  --color-ink: oklch(95% 0.012 120);  --color-ink-2: oklch(84% 0.014 125);  --color-muted: oklch(70% 0.016 135);  --color-rule: oklch(32% 0.016 140);
  --color-accent: oklch(89% 0.2 124);  --color-accent-ink: oklch(18% 0.03 130);  --color-focus: oklch(88% 0.21 124);
  --font-display: "Plus Jakarta Sans Variable", ui-sans-serif, system-ui, sans-serif;  --font-body: "Inter Variable", ui-sans-serif, system-ui, sans-serif;  --font-outlier: var(--font-body);
  --radius-card: 14px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Display weight 800, tracking -0.035em.

## Brand
- The F logo mark (`public/brand/logo-mark.png`) and the lime are the brand. Keep both.
- Lime is a signal, not a surface: the primary button, the focus ring, the current page, the "Pick X" lead-ins in guides. Nothing else.

## Controls
- Primary: lime fill, accent-ink text · pill · 48px
- Secondary: hairline outline in the rule colour, ink text · pill · 48px
- No arrows or icons inside buttons.

## Content blocks (guides)
- Quick answer box (`.answer`), picks (`.picks`/`.pick` with a sentence-case `.label`), the catch (`.catch`), first step (`.first-step`), checked line (`.checked`).
- No eyebrows, no tracked capitals, no side stripes, no glows.

## Motion
- Character: still. Hover changes colour only; under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request.
