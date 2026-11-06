# handoff: live
project: freelancer-stack
type: code (Astro static site) + strategy
generated: 2026-11-07 01:08
goal: Honest affiliate comparison site for freelancer software (invoicing/contracts/time/scheduling). SEO + email list. GitHub -> Netlify (https://freelance-stack.netlify.app).

## next-steps  <!-- resume here -->
1. User to approve/edit real-founder bio draft for About "Who's behind it" (Mote, Tarawa, works in health care, builds sites/tools at night). Decide: full name? mention Ministry job? (civil-service outside-business rules -> kept vague).
2. User to decide whether to remove .handoff/ from public repo (c1ab8af pushed it). If yes: git rm --cached .handoff, add to .gitignore, push.
3. Add contact email (contact page placeholder). Privacy page still has review to-do.
4. User applies to HoneyBook + FreshBooks affiliate programs; confirm terms after approval.
5. User runs free trials, supplies notes/screenshots -> fill [VERIFY]/[YOUR NOTES] in article 1, draft:false. Then articles 2-10 per docs/STRATEGY.md.

## state
- origin/main = 7a80708 (About rewrite) <- 3f40e77 (modern dark redesign) <- 8414f42 <- c1ab8af (handoff, public) <- e2cf19f <- 871b105.
- Design: dark + lime (#c8f135) theme, Space Grotesk/Inter via @fontsource (self-hosted), bento grid, marquee, guide cards, mobile menu toggle (JS in Base.astro), favicon.svg. Components: Icon.astro, PageHero.astro.
- Verified via headless google-chrome screenshots (390px + 1440px + menu-open test page). Builds 6 pages.

## decisions
- Dribbble shot (Phenomenon "Krios") could not be fetched (approval unanswered) -> used genre: dark, electric accent, bold grotesk, bento.
- Refused to invent fake author persona/fake experience (fabricated endorser on affiliate site; FTC fake-review rule; trust risk). Gave brand voice + offered real-founder bio instead.
- "Facts" strip = policies (4 categories, 0 paid placements, 100% disclosed) not invented stats. Keep "0 paid placements" true.
- No fake testimonials/stats. Articles stay draft until verified + first-hand notes.
- Disabled only `git push` rule in Sixth Sense hook at user request (backup /tmp/block-dangerous-git.js.bak); may revert on plugin sync.

## gotchas
- Utility class name clash bug fixed: `.volt` text util vs `.tile.volt` -> renamed util to `.hl`.
- `.site-nav a {display:block}` overrides `.btn` -> explicit display:flex on nav btn.
- Bash hooks: <500 chars, <=10 separators, no inline python/node scripts (CLAUDE.md wants user review). Use /tmp files for commit msgs.
- Handoff commits on main get pushed with next push -> public repo.
- Affiliate data conflicts: FreshBooks network/rates unclear; Dubsado = credit not cash; Calendly may lack public program; HoneyBook $50/100 days, $10k cap.

## open-questions
- Bio approval, name, employer mention? Contact email? Custom domain? Remove .handoff from repo?
