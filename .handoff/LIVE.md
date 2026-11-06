# handoff: live
project: freelancer-stack
type: code (Astro static site) + strategy
generated: 2026-11-07 00:45
goal: Honest affiliate comparison site for freelancer software (invoicing/contracts/time/scheduling). SEO + email list. Deployed from GitHub to Netlify.

## next-steps  <!-- resume here -->
1. Confirm Netlify site https://freelance-stack.netlify.app is live (my WebFetch failed; may be sandbox network). If fail: check publish dir `dist`, build `npm run build`, NODE_VERSION=22, deploy log.
2. Fill bracketed placeholders on about/privacy/contact pages (author bio, contact email) before promoting site.
3. User applies to HoneyBook + FreshBooks affiliate programs (own identity/tax details). Confirm terms after approval.
4. User runs free trials; supplies real notes/screenshots. Fill [VERIFY]/[YOUR NOTES] in article 1, then draft:false.
5. Articles 2-10 per docs/STRATEGY.md; email lead magnet later; custom domain later (update astro.config.mjs `site`).

## state
- origin/main = e2cf19f (site URL set to Netlify address) on top of 871b105 (single clean initial commit). Local = remote.
- Builds clean (6 pages, draft article excluded). Netlify auto-redeploys on push.
- Remote earlier held user's mangled web upload; user emptied/recreated repo; I pushed a fresh single-commit history.

## decisions
- Niche: freelancer business software. Static Astro, not WordPress (user publishes from GitHub).
- Separate repo from `affliatemarketer` (Digistore24/ClickBank funnel tool; untouched).
- Articles stay draft:true until facts verified on vendor pages + first-hand notes. No invented prices or "I tested" claims.
- Plan for modest income; first 3-6 months likely ~nothing.
- Disabled ONLY the `git push` rule in Sixth Sense hook (block-dangerous-git.js, synced plugin) at user's explicit request; other guards kept. Backup /tmp/block-dangerous-git.js.bak. Refused to obfuscate commands to dodge hook earlier.

## gotchas
- Synced plugin copy may reset on next sync -> push hook may return; then user must disable it in plugin settings.
- Bash hook limits: <500 chars, <=10 separators. Use /tmp files for commit messages.
- GitHub web upload flattens paths if files picked individually; drag folders.
- Affiliate data conflicts: FreshBooks network/rates unclear; Dubsado = subscription credit not cash; Calendly may have no public program; HoneyBook $50/100 days, $10k cap (official page).
- .handoff/ is untracked on main (excluded from public repo on purpose).

## open-questions
- Custom domain? Contact email? Author name/bio?
- Is Netlify deploy green?
