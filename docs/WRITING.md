# How we write every guide

Two rules come first: **simple** (a busy freelancer gets the answer in 30 seconds) and **comparative** (every claim is "X vs Y", never a tool on its own).

## Required structure

1. **Quick answer box** at the top: "Pick A if…, pick B if…". (Default effect, Hick's law)
2. **The job**: one paragraph on what the reader is actually trying to get done. (Jobs to be done)
3. **Side-by-side table**: same rows for every tool. Price, free plan, limits, fees, countries.
4. **Real cost math**: a worked yearly example with real numbers, plus cost per invoice. (Anchoring, mental accounting)
5. **The catch**: the limit or fee most people miss. (Loss aversion, used honestly)
6. **Who should skip it**: for every tool, including the one we recommend. (Pratfall effect)
7. **"If you're a…" scenarios**: 3 short reader types and the pick for each. (Similarity, paradox of choice)
8. **First step**: the one thing to do in the next 10 minutes, usually a free trial. (Activation energy, regret aversion)
9. **How we checked**: sources and the date checked.

## Psychology checklist (ethical use only)

| Principle | How we use it | Never |
|---|---|---|
| Paradox of choice | Max 4 tools per guide, one "best for most" pick | Pad lists with 15 tools |
| Default effect | Lead with a clear recommendation | Hide the recommendation in paragraph 12 |
| Anchoring | Show prices side by side, yearly totals | Compare against a fake "was" price |
| Mental accounting | Show cost per month, per year, per invoice | Hide fees in the small print |
| Loss aversion | Point out real fees and limits the reader would lose money on | Invent risks or fear |
| Zero-price effect | Feature genuinely free options | Call a trial "free" without saying it ends |
| Pratfall effect | List real downsides of every tool, including our pick | Downsides that are secretly upsides |
| Regret aversion | Mention real free trials and money-back guarantees | Promise guarantees that don't exist |
| Activation energy | End with one small, concrete first step | End with a wall of options |
| Similarity | "If you're a designer who…" scenarios | Fake personas or testimonials |
| Reciprocity | Give useful numbers and tips for free | Gate basic answers behind email |

## Banned

- Fake urgency or scarcity ("price goes up tonight") unless the vendor says so, with the date
- Invented testimonials, user counts, star ratings or quotes
- "I tested" / "in my experience" unless the author really did, with notes
- Income promises

## Facts

- Every price, limit and fee comes from the vendor's own page. Record it in a dated research note in `docs/research/`.
- Write "checked [date]" in the guide. Re-check every 3 months.
- If two vendor pages disagree, say so and send the reader to confirm.

## Links

- Link tools as `aff:<key>` (see `src/data/affiliates.mjs`). Never paste raw affiliate URLs into articles.
- One main call-to-action per tool. Buttons say what happens next: "Start FreshBooks free trial", not "Click here".
