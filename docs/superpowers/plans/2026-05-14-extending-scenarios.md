# Extending Scenarios — Runbook

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to deliver each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add more different missions to Massive Randomness 2 without breaking the existing pool. The plan covers six effort tiers, from "add a 4th flavor variant inside an existing quest" to "introduce a new quest engine type". Pick the smallest tier that fits the idea.

**Tech stack:** Static HTML, vanilla JavaScript, inline module data in `modules/*.js`, runtime loaded by `js/modmanager.js`, content rendered by `js/questrenderer.js`. There is no build step.

---

## File map (where things live)

| Concern | File |
| --- | --- |
| Engine entry points | `index.html`, `tools/tests.html` (one `<script>` per module file — load order matters for `provides`/`needs`) |
| Module loader / resolution | `js/modmanager.js` |
| One-shot generation pipeline | `js/generator.js`, `js/questgenerator.js`, `js/mapgenerator.js` |
| Campaign generation pipeline | `js/campaigngenerator.js` |
| Quest rendering | `js/questrenderer.js`, `js/labels.js` |
| Shared engine quest types (the `type:"..."` enum) | `js/questgenerator.js` (search `case "X"`) |
| Per-expansion tiles | `modules/md1-base.js`, `modules/md2-*.js`, `modules/zc-*.js` |
| Shared one-shot mechanics | `modules/quests-default.js`, `modules/challenges-default.js`, `modules/gamemodes.js` |
| One-shot quest modules | `modules/quests-{hellscape,hellscapewq,upgradepack,internet,ravaged,rainbowcrossing,darkbringerpack,mr,siege,bossrush}.js` |
| Maps | `modules/maps-default.js` |
| Boss data | `modules/boss.js` |
| Campaign types | `modules/campaign.js` (engine + full/mini/2shots), `modules/campaign-upgradepack.js`, `modules/campaign-baseonly.js` |
| UI shell (settings menu, labels) | `modules/interface.js` (config), `js/interface.js` (runtime) |
| Browser-based data checker | `tools/tests.html` + `js/tools.js` |
| Playwright smoke test | `tools/smoke.js` |

## Existing engine quest types

These are the `type:"X"` values the engine knows how to render and generate maps for. Pick one of these when introducing new content unless you really need a new mechanic — adding a new type means touching `js/questgenerator.js` and possibly `js/mapgenerator.js`.

```
armorToBoss, capture, cleanBuffBoss, collect, collectAndBoss, collectBossAndExit,
collectDebuffAndBoss, collecttimed, corruption, defuse, eliminateBuffBoss, escort,
fallingDungeon, finalBoss, grind, hunt, investigation, keyToBoss, massiveRandomness,
mirrors, nestBossStealExit, poisonousEnemies, relay, shards, towerDefense, tyrant,
xpAndDeliver
```

Useful starting points when you don't know which to use:
- Collect-and-fight: `collectAndBoss` (e.g., rainbowcrossing Bear Hugs)
- Survive in place: `towerDefense` (e.g., upgradepack Maze of Darkness, our new siege)
- Sequential boss fights: `finalBoss` (our new bossrush)
- Escort an objective: `escort` (hellscape Passage)
- Open-ended boss kill: `eliminateBuffBoss` / `cleanBuffBoss`

---

## The six effort tiers

### Tier 1 — New flavor variant inside an existing quest

**When to use:** You want the same mission mechanic with a different theme (e.g., a 4th guardian for rainbowcrossing). No new file. No new engine work.

**Where:** The label arrays inside a quest's `versions[].labels[][]`. Each top-level label key (`guardian`, `spell`, `effect`, …) holds an array of *variants* the engine picks from at runtime.

**Steps:**
- [ ] Open the target quest module. Find the `labels:[[ ... ]]` block.
- [ ] Each variant is an object: `{ EN:[...], RU:[...], IT:[...] }`. The position-indexed strings must line up across variants — slot 4 in variant 1 must mean the same thing as slot 4 in variant 3, because the story template references it as `{label.X@4}`.
- [ ] Add a new variant in every label group (don't add to one group without adding to the others, or the runtime will index past the end).
- [ ] Keep the array length identical across languages within a variant.

**Risk:** Low. Existing engine handles it.

**Test:** `node tools/smoke.js RU` (re-roll many times until the new variant appears).

### Tier 2 — New `version` inside an existing quest

**When to use:** Same flavor, different game rules — e.g., bossrush has 3 versions for 2/3/4 bosses. The engine's `pickRandomElementValue(questModel.versions)` picks one per playthrough.

**Where:** `versions:[ ... ]` array on the quest entry.

**Steps:**
- [ ] Clone an existing version object inside the same quest.
- [ ] Adjust per-version content: `title`, `story`, `rules`, `map`, `boss`, `labels`.
- [ ] Keep `forCampaign` / `forActs` / `forMaps` at the quest level unchanged (they're not per-version).

**Risk:** Low. Be sure the rule text matches the version's actual mechanic (count of enemies, boss spawn timing, etc.).

**Test:** Re-roll until the new version appears; verify the rules text reads correctly.

### Tier 3 — New quest inside an existing module

**When to use:** New mission, same expansion. E.g., add a second `forCampaign:["mini"]` quest to `quests-hellscape.js`.

**Where:** The `content:[].data:[ ... ]` array on the module.

**Steps:**
- [ ] Open the target `modules/quests-X.js`.
- [ ] Append a new object inside `data:[ ... ]`. Required fields: `type`, `forCampaign`, `objective`, `by`, `versions:[{ labels, title, story, rules, map, campaign, boss }]`.
- [ ] Use a glossary-consistent translation across EN / RU / (IT if present).
- [ ] Keep array lengths in label groups matched across languages.

**Risk:** Medium. Easy to miss a required field. The browser-based checker (`tools/tests.html`) catches most data shape errors.

**Test:**
- `node -e "global.ModManager={modules:[]}; require('./modules/quests-X.js'); console.log('OK')"`
- `node tools/smoke.js RU` (look for the new quest in the rolls)

### Tier 4 — New quest module file

**When to use:** A standalone scenario, often inspired by a new theme. We added `quests-siege.js` and `quests-bossrush.js` this way.

**Steps:**
- [ ] Create `modules/quests-<name>.js` modelled on a similar existing module (e.g., `quests-rainbowcrossing.js` is short and clean).
  - `id:"quests"`, `provides:[ "quests", "quests-<name>", "untranslated-it", "untranslated-fr" ]` (mark what you didn't translate).
  - `needs:[ "quests-default", "md2-hellscape" ]` (or whichever expansions are required).
  - `content:[{ type:"quests", data:[ ... ] }]`.
- [ ] **Register the script in BOTH HTML entry points** ([[feedback-register-new-modules]]):
  - `index.html`: `<script src="modules/quests-<name>.js"></script>`
  - `tools/tests.html`: `<script src="../modules/quests-<name>.js"></script>`
- [ ] Verify: `node -e "global.ModManager={modules:[]}; require('./modules/quests-<name>.js'); console.log('OK')"`
- [ ] Run the smoke test: `npm run smoke`. Confirm no empty cards and no new JS errors.
- [ ] Eyeball the rendered output in `index.html` (or via `python3 -m http.server 4173`); re-roll until the new quest appears.

**Risk:** Medium-high if the script-tag step is skipped — the file silently ships as dead code and the menu entry (if any) does nothing.

### Tier 5 — New campaign type

**When to use:** A new structural campaign (different number of acts/maps, different boss placement, different theme). We added `campaign-baseonly.js`.

**Steps:**
- [ ] Create `modules/campaign-<name>.js` modelled on `campaign-baseonly.js` (smallest reference) or `campaign-2shots` inside `campaign.js`.
- [ ] Module structure: `provides:[ "campaign-<name>" ]`, plus `content:` with these required types:
  - `campaignBossFightModels`
  - `campaignMapModels`
  - `campaignModels` (one entry, `type:"<existing campaign type with quest pool>"` — use `"mini"` if you don't want to tag every quest)
  - `campaignRewardModels` (don't omit this — `generator-campaign` does not provide it)
  - `globalLabels` containing at least `campaignPreparation` (the renderer reads this for every campaign and crashes when missing)
- [ ] **Add the script tag in `index.html` and `tools/tests.html`** ([[feedback-register-new-modules]]).
- [ ] Wire the new id into three places:
  - `modules/interface.js`: new entry in the Generator menu (`idOption:"generator-campaign-<name>"`, `tags:[ "generator-campaign", "campaign-<name>", "boss" ]`). Add `ifMenuOptionSelected:[ "md2-heavenfall" ]` per-entry only if the campaign needs Heavenfall (don't gate the whole Generator section — that hides it for users without the expansion).
  - `modules/interface.js`: include `generator-campaign-<name>` in the `ifMenuOptionSelected` array of the campaign-only sub-settings (search for `[ "generator-campaign", "generator-campaign-mini",...`).
  - `modules/campaign.js`: add `campaign-<name>` to the `notExclude:[ ... ]` list inside the `defaults` flag (around line 980).
  - `js/tools.js`: add a test entry under `CAMPAIGN_CONFIGS` so the checker exercises it.
- [ ] Verify all modules parse and the menu entry appears: `npm run smoke`. The smoke test asserts the Generator section is visible. Open `index.html` in a browser, pick the new campaign, click the die — confirm content actually renders (the worst regression class is "menu entry visible but generation is empty").
- [ ] Watch the side-quest reward path. If quests for your campaign type don't supply matching side-quest tags, the engine in `campaigngenerator.js:336` may try to dereference an undefined `sideQuestModel`. The guard we added handles this, but unmatched tags still mean no side quests for those pages.

**Risk:** High. The campaign engine has many implicit shape requirements; missing one resource produces a confusing empty render or a stack trace.

### Tier 6 — New quest engine `type`

**When to use:** A new mechanic the existing types can't express (e.g., "rescue then escort" composed, or "endless" survival with a score, etc.).

**Steps:**
- [ ] Read `js/questgenerator.js` to see how existing types branch (search `case "X":`).
- [ ] Decide whether the new type can be expressed by composing existing types (preferred) or needs its own branch.
- [ ] If it needs its own branch:
  - Add the case in `js/questgenerator.js` for objective placement, rule injection, sidequest hooks.
  - If the map shape needs new logic, add it in `js/mapgenerator.js` (rare).
  - Document the new `type` value in this plan.
- [ ] After the engine change, add at least one quest using the new type (Tier 3 or 4) to exercise it.

**Risk:** High. Engine changes affect every existing quest — run `npm run smoke` in both EN and RU and re-roll many times. Open `tools/tests.html` and confirm the `Quests data` section still passes.

---

## Cross-cutting checklist (every tier)

- [ ] Preserve placeholders **exactly**. `{label.x@N}`, `{boss.x@N}`, `{symbol.x}`, `{label.x:capital@N}`, `{tokensCount.x}`, `{label.x:split:y}`.
- [ ] Keep array lengths within a label group **identical across all languages** (positional indices are referenced by template `@N`).
- [ ] Use raw UTF-8 Cyrillic in RU. HTML entities like `&agrave;` belong only in source IT/EN values that already used them.
- [ ] Numeric fields (`bossHealth:{ EN:15 }`) and identifier-only arrays stay untouched.
- [ ] Style: clean per-object form `{ EN:..., RU:..., }` with closing brace on its own line. Avoid the awkward `EN:[...]\n,\n RU:[...]}` variant ([[feedback-translation-style]]).
- [ ] Run `npm run smoke` (RU + EN) before opening a PR. The smoke test asserts the Generator settings section, the print button, and that no quest renders blank.
- [ ] For UI changes, render the page in Playwright before committing ([[feedback-verify-ui-changes]]).
- [ ] After merging to `main`, GitHub Pages auto-rebuilds within ~30–60s. Hard-refresh the live site (Cmd-Shift-R) to bust the PWA cache before testing.

## Pitfalls catalogue (from this fork's history)

1. **Dead-code modules.** A new `modules/X.js` file does **nothing** until its `<script>` tag is added to both `index.html` and `tools/tests.html`. The settings menu entry can still appear (it's in `interface.js`), making the bug look like "selection does nothing" instead of "module not loaded".
2. **Section gates on `tags` instead of `idOption`.** The runtime's `isMenuOptionSelected` checks `entry.idOption`, not `entry.tags`. Mandatory entries like Hellscape have only `tags:["md2-hellscape"]`. Gating on `["md2-hellscape"]` hides the section for everyone.
3. **Campaign type with no matching quests.** A `campaignModels.type:"X"` value with no quests tagged `forCampaign:["X"]` produces an empty quest pool. The engine crashes on `allQuests.quests` (which should be `allQuests`) at `campaigngenerator.js:312`. Use an existing type (e.g., `"mini"`) unless you also tag a real quest set with the new value.
4. **Missing `globalLabels.campaignPreparation`.** The renderer reads this for every campaign. A campaign module that doesn't supply it crashes during render with `Cannot read properties of undefined (reading 'EN')`.
5. **`:capital` on empty strings.** The label engine's `:capital` filter used to crash on empty values. Patched in `js/labels.js`; do not re-introduce a regression there. Empty article slots are valid (Russian doesn't use "the").
6. **Print button background.** SVG icons referenced as `data:` URIs need URL-encoding; just store the file at `images/X.svg`. The button's white background means white-filled icons are invisible — use `#333` or similar dark fill.

## Related memory

- [[localization-workflow]] — adding a new language end to end.
- [[feedback-register-new-modules]] — the script-tag requirement.
- [[feedback-verify-ui-changes]] — render before commit.
- [[feedback-translation-style]] — clean per-object style.
- [[reference-validation-tooling]] — the in-browser data checker.
