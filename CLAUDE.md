# Massive Randomness 2

A Massive Darkness 2 board game quest and campaign random generator (fork,
maintained here). It selects a scenario model from its database, randomizes
part of the narrative, generates a matching random dungeon, and can add
challenges, boss fights, and campaigns. Static vanilla-JS web app, no build
step, deployed via GitHub Pages (romasochilov.github.io/massive-randomness-2).

## Layout

- `js/` — engine: `modmanager.js` (tag-driven module loader), `generator.js`,
  `questgenerator.js`, `mapgenerator.js`, `campaigngenerator.js`, renderers,
  `interface.js` (settings UI + URL-hash persistence)
- `modules/` — content database (quests, maps, challenges, bosses, campaigns,
  game modes, difficulty, UI config). Every new module file MUST be registered
  as a `<script>` in `index.html` or it silently never loads.
- `tools/` — `smoke.js` (Playwright e2e), `difficulty-test.js` (Node unit test)
- `docs/superpowers/` — specs, plans, and `reference/russian-glossary.md`
  (RU terminology source of truth)

## Dev commands

- `npm run serve` — static server on 4173 (python3 http.server; its
  ServiceWorker MIME console error is a known ignorable)
- `npm run smoke` / `smoke:ru` / `smoke:en` — Playwright suite, 60 generations
- `npm run test:difficulty` — Node unit test for difficulty modules

## Architecture rules

- Everything is tag-driven: settings entries carry `tags` → `ModManager.load`
  assembles resources. Array-type content concatenates; object-type merges per
  key (last write wins — prefer array content types for cross-module safety).
- Settings hash codes (`code:"X"`) are matched with a global `indexOf` across
  ALL sections — every new code must be unique file-wide. Pre-existing
  duplicates `b` and `y` are known warts; don't add more.
- Campaign page generation filters needs via campaign flags; tags that must
  survive go into `campaignProtectedNeeds` (array content type).
- Languages IT/EN/RU on all player-facing strings; IT uses HTML entities for
  accents, RU uses raw UTF-8. Terminology: match existing texts (Mob=Orda/орда,
  Minions=Gregari/прислужники, Leaders=Comandanti/лидеры etc. — see glossary).

## Conventions

- Branches: `feature/<name>`; conventional commit prefixes (feat/fix/docs/test)
- Never push without the owner's confirmation; no Co-Authored-By lines
- Feature flow: spec in `docs/superpowers/specs/`, plan in
  `docs/superpowers/plans/`, then implementation

## State (2026-07-30)

- Dev line: `feature/russian-localization` (28 commits ahead of `main`;
  RU localization, print/PDF, base-only campaign, quests-extras).
- `feature/difficulty-modes` (branched off the dev line): COMPLETE and
  review-clean — Normal/Hard/Nightmare selector (no Easy by design, Normal is
  the easiest; hash codes 3/4), rule blocks via `modules/difficulty.js` +
  `difficultyRules` hook in `questgenerator.js`, Nightmare auto-enables
  Challenges + Boss fights, campaign-proof via `campaignProtectedNeeds`.
  All local, nothing pushed. Next: owner decides merge/push.
- Known flake: the unseeded 60-generation smoke loop rarely yields one empty
  card; re-run clean. Pre-existing, unrelated to difficulty work.
