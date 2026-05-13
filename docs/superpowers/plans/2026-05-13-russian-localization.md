# Russian Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add full Russian localization to Massive Randomness 2 using additive `RU` keys across the existing content model, while keeping current generation behavior and fallback semantics intact.

**Architecture:** The app already resolves inline translation objects through `js/labels.js` and drives quest availability from metadata in `js/questgenerator.js`. Implementation should extend the current data model rather than introducing a new i18n layer. Work should start by making the UI shell and validation tooling Russian-safe, then translate disjoint module groups in parallel, and finish with integration verification.

**Tech Stack:** Static HTML, vanilla JavaScript, inline module data in `modules/*.js`, browser-based validation via `tools/tests.html`, local static serving via `python3 -m http.server`

---

## File Structure Map

- `docs/superpowers/specs/2026-05-13-russian-localization-design.md`
  Current approved design spec. Keep it aligned with implementation decisions.

- `docs/superpowers/plans/2026-05-13-russian-localization.md`
  This execution plan.

- `docs/superpowers/reference/russian-glossary.md`
  New glossary file for Russian terminology and translation rules shared by all workers.

- `modules/interface.js`
  UI shell: supported languages, settings labels, notices, buttons, and the `languageExcludeTags` map used by untranslated-content filtering.

- `js/tools.js`
  Browser-based data checker and smoke-test tooling. Must be updated before Russian translations can be validated cleanly.

- `modules/gamemodes.js`
  Shared game-mode text shown in generated quests.

- `modules/quests-default.js`
  Shared quest labels, section headers, and common rules.

- `modules/challenges-default.js`
  Shared challenge labels and descriptions.

- `modules/md1-base.js`, `modules/md2-*.js`, `modules/zc-*.js`
  Expansion/component descriptors and tile-dependent text.

- `modules/maps-default.js`
  Map-specific labels and descriptors. Treat as a single-owner file.

- `modules/quests-*.js`
  Narrative-heavy one-shot quest content. Each file contains many placeholder-bearing text variants and `by` metadata.

- `modules/campaign.js`, `modules/campaign-upgradepack.js`
  Campaign text, page labels, and narrative flows. Keep one owner for terminology consistency.

- `modules/boss.js`
  Boss labels, modifiers, and shared boss text. Keep one owner because the file is monolithic.

- `js/interface.js`
  Runtime language loading and selector rendering. Read this file during verification; only change it if Russian-specific runtime bugs appear.

- `js/questgenerator.js`
  Quest availability is derived from `quest.by` here. Read during verification to confirm Russian availability behavior.

- `tools/tests.html`
  Browser entry point for `js/tools.js` validation and smoke tests.

## Task 1: Create the Shared Russian Glossary

**Files:**
- Create: `docs/superpowers/reference/russian-glossary.md`
- Reference: `docs/superpowers/specs/2026-05-13-russian-localization-design.md`

- [ ] **Step 1: Create the glossary file with fixed terminology**

```md
# Russian Localization Glossary

## Core Terms

| English | Russian |
| --- | --- |
| Quest | задание |
| Mission | миссия |
| Campaign | кампания |
| Hero | герой |
| Heroes | герои |
| Enemy | враг |
| Boss | босс |
| Roaming Monster | блуждающий монстр |
| Chamber | комната |
| Zone | зона |
| Tile | плитка |
| Objective token | жетон цели |
| Loot token | жетон добычи |
| Shadow Zone | зона тени |
| Light Zone | освещённая зона |

## Translation Rules

- Preserve placeholders exactly, for example `{label.guardian@7}`.
- Preserve HTML tags exactly and translate only visible text.
- Prefer raw UTF-8 Cyrillic instead of HTML entities for Russian text.
- Keep list lengths and variant counts unchanged.
- When a quest has `by:{ EN:..., IT:... }`, add `RU` there as well.
```

- [ ] **Step 2: Verify the glossary file exists and is readable**

Run: `sed -n '1,120p' docs/superpowers/reference/russian-glossary.md`
Expected: The glossary shows the core term table and translation rules above.

- [ ] **Step 3: Commit the glossary**

```bash
git add docs/superpowers/reference/russian-glossary.md
git commit -m "docs: add Russian localization glossary"
```

## Task 2: Make the UI Shell and Validation Tool Russian-Safe

**Files:**
- Modify: `modules/interface.js`
- Modify: `js/tools.js`
- Reference: `js/interface.js`
- Reference: `js/questgenerator.js`
- Test: `tools/tests.html`

- [ ] **Step 1: Start a local static server for browser-based checks**

Run: `python3 -m http.server 4173`
Expected: `Serving HTTP on ... port 4173`

- [ ] **Step 2: Capture the failing Russian baseline in the browser**

Open: `http://127.0.0.1:4173/index.html`
Expected: The language selector does not contain Russian yet.

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Quests data` reflects only `EN`, `IT`, and `FR`, and the checker is not yet ready for Cyrillic.

- [ ] **Step 3: Add Russian to the interface shell and untranslated filter settings**

```js
languageExcludeTags:{
    IT:[ "untranslated-it" ],
    EN:[ "untranslated-en" ],
    FR:[ "untranslated-fr" ],
    RU:[ "untranslated-ru" ]
}

supportedLanguages:{
    EN:"English",
    IT:"Italiano",
    FR:"Fran&#xE7;ais",
    RU:"Русский"
},
labels:{
    toolDescription:{
        IT:"Un generatore casuale di avventure per Massive Darkness 2",
        EN:"A Massive Darkness 2 random quest generator",
        RU:"Генератор случайных заданий для Massive Darkness 2"
    },
    languageUnavailable:{
        IT:"Questa avventura non &egrave; disponibile in italiano. Puoi escludere le avventure non tradotte dalle opzioni.",
        EN:"This adventure is not available in English. You can exclude untranslated adventures from the options.",
        FR:"Cette aventure n&#x27;est pas disponible en fran&#xE7;ais. Vous pouvez exclure les aventures non traduites des options.",
        RU:"Это задание недоступно на русском языке. Вы можете исключить непереведённые задания в настройках."
    }
}
```

- [ ] **Step 4: Make `js/tools.js` accept Russian text and Russian translation coverage**

```js
ALLOWED_ENTITIES={
    IT:[ "ograve", "agrave", "egrave", "eacute", "ugrave", "igrave", "deg", "amp", "Egrave", "dash", "OElig", "ocirc" ],
    EN:[ "amp", "dash", "OElig", "ocirc" ],
    FR:[ ],
    RU:[ "amp", "dash" ]
},
WARNING_WORDS={
    EN:[ "wandering", "quest", "marker" ],
    IT:[ "quest", "xp", "avventura" ],
    FR:[ ],
    RU:[ ]
}
```

```js
const checkArgument = orgArgument.replace(/([^0-9a-zA-Z\u0400-\u04FF() +/\-,.;:'!?_"]+)/g,function(m,m1){
    return "<span style='background-color:#000;color:#fff'>["+m1+"]</span>";
});
```

```js
for (let l in resources.interface.supportedLanguages) {
    let
        count = translations[k].translations[l]||0,
        prc = count/total,
        excludeTags = translationExcludeOption && translationExcludeOption[l];
    if (prc > 1)
        errors.push("Quest set "+k+": Invalid "+l+" percentage "+prc);
    else if (excludeTags && (prc < 1) && (translations[k].packageData.provides.indexOf(excludeTags[0]) == -1))
        errors.push("Quest set "+k+": missing provides tag "+excludeTags[0]);
    else if (excludeTags && (prc == 1) && (translations[k].packageData.provides.indexOf(excludeTags[0]) != -1))
        errors.push("Quest set "+k+": provides tag "+excludeTags[0]+" not needed");
}
```

- [ ] **Step 5: Re-run the browser checks to confirm the shell and validator now support `RU`**

Open: `http://127.0.0.1:4173/index.html`
Expected: The language selector contains `Русский`.

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Quests data` no longer fails simply because `RU` exists or because Cyrillic characters are present.

- [ ] **Step 6: Commit the shell and validator changes**

```bash
git add modules/interface.js js/tools.js
git commit -m "feat: add Russian language shell and validator support"
```

## Task 3: Translate Shared UI and Shared Quest Modules

**Files:**
- Modify: `modules/interface.js`
- Modify: `modules/gamemodes.js`
- Modify: `modules/quests-default.js`
- Modify: `modules/challenges-default.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Test: `tools/tests.html`

- [ ] **Step 1: Add `RU` keys to all shared labels in the worker-1 files**

```js
objectives:{
    IT:"Obiettivi della missione",
    EN:"Quest objectives",
    RU:"Цели задания"
},
specialRules:{
    IT:"Regole speciali",
    EN:"Quest special rules",
    RU:"Особые правила задания"
},
challengesExplanation:{
    IT:"Se sei in cerca di pericolo e gloria puoi affrontare questa avventura seguendo una o pi&ugrave; di queste regole aggiuntive:",
    EN:"If you are seeking danger and glory you can tackle this adventure by following one or more of these additional rules:",
    RU:"Если вы ищете опасность и славу, можете пройти это задание, следуя одному или нескольким из этих дополнительных правил:"
}
```

- [ ] **Step 2: Verify the shared files still match the additive translation pattern**

Run: `rg -n "RU:" modules/interface.js modules/gamemodes.js modules/quests-default.js modules/challenges-default.js`
Expected: Russian keys are present in all four files without removing existing `EN`, `IT`, or `FR` keys.

- [ ] **Step 3: Run `Quests data` and `index.html` smoke checks**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: Shared labels and challenge strings no longer trigger missing-RU errors.

Open: `http://127.0.0.1:4173/index.html`
Expected: Settings labels and shared quest sections display in Russian when `RU` is selected.

- [ ] **Step 4: Commit the shared module translations**

```bash
git add modules/interface.js modules/gamemodes.js modules/quests-default.js modules/challenges-default.js
git commit -m "feat: translate shared UI and quest modules to Russian"
```

## Task 4: Translate the MD1/MD2/Zombicide Content Modules

**Files:**
- Modify: `modules/md1-base.js`
- Modify: `modules/md2-hellscape.js`
- Modify: `modules/md2-heavenfall.js`
- Modify: `modules/md2-rainbowcrossing.js`
- Modify: `modules/md2-crystallava.js`
- Modify: `modules/zc-blackplague.js`
- Modify: `modules/zc-greenhorde.js`
- Modify: `modules/zc-friendfoes.js`
- Modify: `modules/zc-whitedeath.js`
- Modify: `modules/zc-wulfsburg.js`
- Modify: `modules/zc-eternalempire.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Test: `tools/tests.html`

- [ ] **Step 1: Translate each component/tile module by adding `RU` alongside existing language objects**

```js
label:{
    IT:"Zombicide: Black Plague",
    EN:"Zombicide: Black Plague",
    RU:"Zombicide: Black Plague"
},
description:{
    IT:"9 tessere esterne",
    EN:"9 outdoor tiles",
    RU:"9 уличных плиток"
}
```

- [ ] **Step 2: Keep placeholder arrays and object shapes unchanged in all module edits**

```js
{
    IT:[ "Portale Arcano", "Portali Arcani", "i", "un", "il suo portale", "unicamente il proprio portale" ],
    EN:[ "Arcane Portal", "Arcane Portals", "the", "an", "its portal", "only its portal" ],
    RU:[ "Арканный портал", "Арканные порталы", "", "один", "его портал", "только свой портал" ]
}
```

- [ ] **Step 3: Run the browser checker after finishing the whole worker-2 file set**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Quests data` and `Campaign Text` do not report malformed Russian content from these files.

- [ ] **Step 4: Commit the component/tile translations**

```bash
git add modules/md1-base.js modules/md2-hellscape.js modules/md2-heavenfall.js modules/md2-rainbowcrossing.js modules/md2-crystallava.js modules/zc-blackplague.js modules/zc-greenhorde.js modules/zc-friendfoes.js modules/zc-whitedeath.js modules/zc-wulfsburg.js modules/zc-eternalempire.js
git commit -m "feat: translate component and tile modules to Russian"
```

## Task 5: Translate the Map Descriptor Module

**Files:**
- Modify: `modules/maps-default.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Test: `tools/tests.html`

- [ ] **Step 1: Add `RU` translations throughout `modules/maps-default.js` with one-file ownership**

```js
label:{
    IT:"Ponte",
    EN:"Bridge",
    RU:"Мост"
},
description:{
    IT:"Questa tessera collega due aree della mappa.",
    EN:"This tile connects two areas of the map.",
    RU:"Эта плитка соединяет две области карты."
}
```

- [ ] **Step 2: Verify the map file still renders allowed placeholders and tags only**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Map Configs` and `Quests data` show no invalid-tag or invalid-placeholder errors coming from `maps-default.js`.

- [ ] **Step 3: Commit the map translations**

```bash
git add modules/maps-default.js
git commit -m "feat: translate map descriptors to Russian"
```

## Task 6: Translate the One-Shot Quest Narrative Modules

**Files:**
- Modify: `modules/quests-hellscape.js`
- Modify: `modules/quests-hellscapewq.js`
- Modify: `modules/quests-upgradepack.js`
- Modify: `modules/quests-internet.js`
- Modify: `modules/quests-ravaged.js`
- Modify: `modules/quests-rainbowcrossing.js`
- Modify: `modules/quests-darkbringerpack.js`
- Modify: `modules/quests-mr.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Reference: `modules/interface.js`
- Test: `tools/tests.html`

- [ ] **Step 1: Add `RU` to all `by` metadata and remove `untranslated-ru` only when the whole file is translated**

```js
provides:[ "quests", "quests-hellscape", "untranslated-fr" ]
```

```js
by:{
    IT:"Ispirato all'avventura di Hellscape \"Hellscape\"",
    EN:"Inspired by the Hellscape quest \"Hellscape\"",
    RU:"По мотивам задания Hellscape «Hellscape»"
}
```

If a quest file is not fully translated yet, stop and finish it before committing. Do not leave a mixed-language quest file in a committed state.

- [ ] **Step 2: Translate title/story/rule/objective variants without changing placeholder wiring**

```js
{
    IT:[ "Qualcosa &egrave; andato storto con l'ultimo portale! Ci siamo persi e" ],
    EN:[ "Something went wrong with the last portal! We got lost and" ],
    RU:[ "С последним порталом что-то пошло не так! Мы заблудились, и" ]
}
```

```js
{
    IT:[ "Dobbiamo riunirci e sopprimere il mostro" ],
    EN:[ "We must gather and eliminate the monster" ],
    RU:[ "Мы должны собраться вместе и уничтожить монстра" ]
}
```

- [ ] **Step 3: Re-run quest validation after the entire quest cluster is translated**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Quests data` no longer reports missing `RU` quest metadata or malformed Russian strings for the quest modules.

- [ ] **Step 4: Commit the quest narrative translations**

```bash
git add modules/quests-hellscape.js modules/quests-hellscapewq.js modules/quests-upgradepack.js modules/quests-internet.js modules/quests-ravaged.js modules/quests-rainbowcrossing.js modules/quests-darkbringerpack.js modules/quests-mr.js
git commit -m "feat: translate one-shot quest narratives to Russian"
```

## Task 7: Translate the Campaign Modules

**Files:**
- Modify: `modules/campaign.js`
- Modify: `modules/campaign-upgradepack.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Test: `tools/tests.html`

- [ ] **Step 1: Add `RU` to campaign labels, page text, and narrative blocks**

```js
name:{
    IT:"Campagna",
    EN:"Campaign",
    RU:"Кампания"
},
summary:{
    IT:[ "Gli Eroi proseguono il viaggio." ],
    EN:[ "The Heroes continue their journey." ],
    RU:[ "Герои продолжают своё путешествие." ]
}
```

- [ ] **Step 2: Validate campaign text output in the browser**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Campaign Text`, `Campaign`, and `Campaigns` display Russian content without `undefined` values or malformed placeholder output.

- [ ] **Step 3: Commit the campaign translations**

```bash
git add modules/campaign.js modules/campaign-upgradepack.js
git commit -m "feat: translate campaign modules to Russian"
```

## Task 8: Translate the Boss Module

**Files:**
- Modify: `modules/boss.js`
- Reference: `docs/superpowers/reference/russian-glossary.md`
- Test: `tools/tests.html`

- [ ] **Step 1: Add `RU` to all boss-facing labels while leaving numeric health values untouched**

```js
bossMode:{
    IT:"Scontro con il Boss",
    EN:"Boss Fight",
    RU:"Битва с боссом"
},
bossModifier:{
    IT:"A inizio round, questo Boss infligge 1 Ferita a ogni Eroe adiacente.",
    EN:"At the start of the round, this Boss deals 1 Wound to each adjacent Hero.",
    RU:"В начале раунда этот босс наносит 1 рану каждому соседнему герою."
},
bossHealth:{ EN:15 }
```

- [ ] **Step 2: Run boss-specific checks after finishing the file**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected: `Boss` and `Quest Boss` still compute health and modifiers correctly, with Russian text rendered where labels exist.

- [ ] **Step 3: Commit the boss translations**

```bash
git add modules/boss.js
git commit -m "feat: translate boss module to Russian"
```

## Task 9: Integrate, Verify, and Clean Up Translation Coverage

**Files:**
- Modify: `modules/interface.js`
- Modify: `js/tools.js`
- Modify: `modules/md1-base.js`
- Modify: `modules/md2-hellscape.js`
- Modify: `modules/md2-heavenfall.js`
- Modify: `modules/md2-rainbowcrossing.js`
- Modify: `modules/md2-crystallava.js`
- Modify: `modules/zc-blackplague.js`
- Modify: `modules/zc-greenhorde.js`
- Modify: `modules/zc-friendfoes.js`
- Modify: `modules/zc-whitedeath.js`
- Modify: `modules/zc-wulfsburg.js`
- Modify: `modules/zc-eternalempire.js`
- Modify: `modules/maps-default.js`
- Modify: `modules/quests-hellscape.js`
- Modify: `modules/quests-hellscapewq.js`
- Modify: `modules/quests-upgradepack.js`
- Modify: `modules/quests-internet.js`
- Modify: `modules/quests-ravaged.js`
- Modify: `modules/quests-rainbowcrossing.js`
- Modify: `modules/quests-darkbringerpack.js`
- Modify: `modules/quests-mr.js`
- Modify: `modules/campaign.js`
- Modify: `modules/campaign-upgradepack.js`
- Modify: `modules/boss.js`
- Test: `tools/tests.html`
- Test: `index.html`

- [ ] **Step 1: Merge the parallel translation branches and resolve terminology drift using the glossary**

```bash
git merge --no-ff worker/ru-shared
git merge --no-ff worker/ru-components
git merge --no-ff worker/ru-maps
git merge --no-ff worker/ru-quests
git merge --no-ff worker/ru-campaigns
git merge --no-ff worker/ru-boss
```

- [ ] **Step 2: Search for obvious missing Russian keys in the translated surface**

Run: `rg -n "EN:|IT:|FR:|RU:" modules/interface.js modules/gamemodes.js modules/quests-default.js modules/challenges-default.js modules/md1-base.js modules/md2-hellscape.js modules/md2-heavenfall.js modules/md2-rainbowcrossing.js modules/md2-crystallava.js modules/zc-blackplague.js modules/zc-greenhorde.js modules/zc-friendfoes.js modules/zc-whitedeath.js modules/zc-wulfsburg.js modules/zc-eternalempire.js modules/maps-default.js modules/quests-hellscape.js modules/quests-hellscapewq.js modules/quests-upgradepack.js modules/quests-internet.js modules/quests-ravaged.js modules/quests-rainbowcrossing.js modules/quests-darkbringerpack.js modules/quests-mr.js modules/campaign.js modules/campaign-upgradepack.js modules/boss.js`
Expected: Files show additive `RU` usage across the translated surfaces, with any remaining omissions limited to intentionally untranslated paths.

- [ ] **Step 3: Run the full browser-based verification sweep**

Open: `http://127.0.0.1:4173/tools/tests.html`
Expected:
- `Quests data` completes without structural errors caused by Russian support.
- `Campaign Text`, `Campaign`, and `Campaigns` show Russian output without `undefined`.
- `Boss`, `Quest Boss`, `Map Configs`, and `Quests` remain structurally sound.

Open: `http://127.0.0.1:4173/index.html`
Expected:
- `Русский` is selectable and persists.
- Settings UI renders in Russian.
- Generated one-shot quests render Russian section headers, stories, objectives, and rules.
- Campaign pages render in Russian.
- The language-unavailable notice appears only for genuinely untranslated content.

- [ ] **Step 4: Fix any integration regressions and make a final commit**

```bash
git add modules/interface.js js/tools.js modules/gamemodes.js modules/quests-default.js modules/challenges-default.js modules/md1-base.js modules/md2-hellscape.js modules/md2-heavenfall.js modules/md2-rainbowcrossing.js modules/md2-crystallava.js modules/zc-blackplague.js modules/zc-greenhorde.js modules/zc-friendfoes.js modules/zc-whitedeath.js modules/zc-wulfsburg.js modules/zc-eternalempire.js modules/maps-default.js modules/quests-hellscape.js modules/quests-hellscapewq.js modules/quests-upgradepack.js modules/quests-internet.js modules/quests-ravaged.js modules/quests-rainbowcrossing.js modules/quests-darkbringerpack.js modules/quests-mr.js modules/campaign.js modules/campaign-upgradepack.js modules/boss.js
git commit -m "feat: complete Russian localization rollout"
```

## Spec Coverage Check

- `RU` in the UI shell: covered by Task 2 and Task 3.
- Additive `RU` translations across shared, quest, campaign, boss, map, and pack modules: covered by Tasks 3 through 8.
- Russian-aware quest availability through `by` metadata and untranslated tags: covered by Task 2 and Task 6.
- Russian-safe validation tooling in `js/tools.js`: covered by Task 2 and verified in Task 9.
- Parallel execution with disjoint ownership: covered by Tasks 3 through 8.
- GitHub Pages deployment: intentionally deferred and excluded from this plan.
