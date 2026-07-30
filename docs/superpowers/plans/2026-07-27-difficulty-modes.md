# Difficulty Modes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Normal / Hard / Nightmare difficulty selector (Normal = current behavior, the easiest mode) that prints table rules on every generated quest sheet; Nightmare also auto-enables Challenges and Boss fights.

**Architecture:** Tag-driven, like every other setting. A new UI section in `modules/interface.js` maps options to tags `difficulty-hard|nightmare`. A new `modules/difficulty.js` provides one special-rules block per mode plus two array content types (`difficultyRules`, `campaignProtectedNeeds`). A 7-line hook in `js/questgenerator.js` appends the rules to every quest. Spec: `docs/superpowers/specs/2026-07-27-difficulty-modes-design.md`.

**Tech Stack:** Vanilla JS (no build step), Node for unit test, Playwright smoke test (`tools/smoke.js`).

## Global Constraints

- There is NO Easy mode (user decision 2026-07-27): Normal is the easiest. The selector is Normal / Hard / Nightmare.
- Hash codes: Hard=`3`, Nightmare=`4`. Normal has NO code and NO tags (backward-compatible no-op default).
- Tags: `difficulty-hard`, `difficulty-nightmare`. Nightmare entry additionally carries `challenges-default` and `boss`.
- Special-rule set names: `difficultyHard`, `difficultyNightmare`. Rule blocks use `priority:30`, `type:"rule"`, NO `displayOnly` class.
- Languages: IT/EN/RU everywhere. IT uses HTML entities for accents (`&agrave;`, `&ugrave;`) matching repo style; RU uses raw UTF-8 Cyrillic.
- Terminology (from existing texts, do not improvise): Mob = IT `Orda` / RU `орда`; Minions = `Gregari` / `прислужники`; Leaders = `Comandanti` / `лидеры`; Enemies = `Nemici` / `враги`; Roaming Monster = `Mostro Errante` / `блуждающий монстр`; Health = `Salute` / `здоровье`; Defense = `Difesa` / `Защита`; Level = `Livello` / `уровень`.
- Preserve `{symbol.blueDie}` placeholder and `<span class='phase'>` markup exactly as in `modules/challenges-default.js`.
- Commit locally only — NEVER push; the user confirms pushes separately.
- Working branch: `feature/difficulty-modes`.

---

### Task 1: Difficulty modules + generator hook

**Files:**
- Create: `modules/difficulty.js`
- Create: `tools/difficulty-test.js`
- Modify: `js/questgenerator.js` (after the game-mode block, ~line 229)
- Modify: `index.html` (script list, after `modules/gamemodes.js`)
- Modify: `package.json` (add `test:difficulty` script)

**Interfaces:**
- Consumes: `ModManager.load({needs})` bundle semantics — array content concatenates, object content merges per key; `QuestGenerator.generate(resources, result, flags)`.
- Produces: bundle keys `difficultyRules` (array of rule-set names) and `campaignProtectedNeeds` (array of tags) plus `specialRules.difficultyHard|difficultyNightmare`; QuestGenerator pushes those rules onto `quest.rules`. Task 2/3 rely on tags `difficulty-hard|nightmare` and rule names `Hard Mode` / `Nightmare Mode` (RU: `Сложный режим` / `Кошмарный режим`).

- [ ] **Step 1: Write the failing unit test**

Create `tools/difficulty-test.js`:

```js
// Node unit test for the difficulty modules and the QuestGenerator hook.
// Usage: node tools/difficulty-test.js
const assert = require('assert');

require('../js/modmanager.js');
require('../modules/difficulty.js');
require('../js/questgenerator.js');

// --- Module wiring

[
    ["difficulty-hard","difficultyHard"],
    ["difficulty-nightmare","difficultyNightmare"]
].forEach(([tag,ruleSet])=>{
    const bundle = ModManager.load({ needs:[ tag ] });
    assert(Array.isArray(bundle.difficultyRules), tag+": difficultyRules missing");
    assert.deepStrictEqual(bundle.difficultyRules, [ ruleSet ], tag+": wrong difficultyRules");
    assert(bundle.specialRules && Array.isArray(bundle.specialRules[ruleSet]), tag+": specialRules missing");
    assert.strictEqual(bundle.specialRules[ruleSet].length, 1, tag+": expected 1 rule block");
    assert.strictEqual(bundle.specialRules[ruleSet][0].priority, 30, tag+": priority must be 30");
    assert(bundle.specialRules[ruleSet][0].name.EN && bundle.specialRules[ruleSet][0].name.RU && bundle.specialRules[ruleSet][0].name.IT, tag+": missing language in name");
    assert(bundle.campaignProtectedNeeds.indexOf(tag) !== -1, tag+": not campaign-protected");
});

// --- QuestGenerator applies difficulty rules

function minimalResources(extra) {
    return Object.assign({
        quests:[ {
            by:{ EN:"test" },
            suggestedTilesCount:4,
            versions:[ {
                labels:[ [] ],
                map:[ {} ],
                rules:[],
                title:[ { EN:"T" } ],
                story:[ { EN:"S" } ]
            } ]
        } ]
    }, extra);
}

const nightmare = ModManager.load({ needs:[ "difficulty-nightmare" ] });
const result = QuestGenerator.generate(
    minimalResources({ specialRules:nightmare.specialRules, difficultyRules:nightmare.difficultyRules }),
    { questSeed:1 }
);
assert.strictEqual(result.quest.rules.length, 1, "difficulty rule not applied to quest");
assert.strictEqual(result.quest.rules[0].name.EN, "Nightmare Mode", "wrong rule applied");

// --- No difficulty selected -> no extra rules (backward compatibility)

const plain = QuestGenerator.generate(minimalResources({}), { questSeed:1 });
assert.strictEqual(plain.quest.rules.length, 0, "unexpected rules without difficulty");

console.log("difficulty-test: all assertions passed");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd ~/GitHub/massive-randomness-2 && node tools/difficulty-test.js`
Expected: FAIL — `Cannot find module '../modules/difficulty.js'`

- [ ] **Step 3: Create `modules/difficulty.js`**

```js
ModManager.modules.push(function(){

    return [
        {

            id:"difficulty-hard",
            needs:[ ],
            provides:[ "difficulty-hard" ],
            label:{
                EN:"Hard difficulty - bigger, tougher enemy Mobs",
                RU:"Сложная сложность - более многочисленные и живучие орды врагов"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        difficultyHard:[
                            {
                                priority:30,
                                type:"rule",
                                name:{
                                    IT:"Modalit&agrave; Difficile",
                                    EN:"Hard Mode",
                                    RU:"Сложный режим"
                                },
                                explanation:{
                                    IT:"Aggiungere 1 Gregario ad ogni Orda generata. I Gregari ed i Comandanti hanno +1 Salute.",
                                    EN:"Add 1 Minion to each spawned Mob. Minions and Leaders have +1 Health.",
                                    RU:"Добавьте 1 прислужника к каждой создаваемой орде. Прислужники и лидеры имеют +1 здоровья."
                                }
                            }
                        ]
                    }
                },
                {
                    type:"difficultyRules",
                    data:[ "difficultyHard" ]
                },
                {
                    type:"campaignProtectedNeeds",
                    data:[ "difficulty-hard" ]
                }
            ]
        },
        {

            id:"difficulty-nightmare",
            needs:[ ],
            provides:[ "difficulty-nightmare" ],
            label:{
                EN:"Nightmare difficulty - the ultimate challenge",
                RU:"Кошмарная сложность - максимальный вызов"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        difficultyNightmare:[
                            {
                                priority:30,
                                type:"rule",
                                name:{
                                    IT:"Modalit&agrave; Incubo",
                                    EN:"Nightmare Mode",
                                    RU:"Кошмарный режим"
                                },
                                explanation:{
                                    IT:"Genera le Orde ed i Mostri Erranti come se gli Eroi fossero di un Livello superiore (massimo Livello 5). Aggiungere 1 Gregario ad ogni Orda generata. I Nemici hanno <span class='phase'>Difesa:</span> +{symbol.blueDie}",
                                    EN:"Spawn Mobs and Roaming Monsters as if the Heroes were one Level higher (maximum Level 5). Add 1 Minion to each spawned Mob. Enemies have <span class='phase'>Defense:</span> +{symbol.blueDie}",
                                    RU:"Создавайте орды и блуждающих монстров так, будто герои на один уровень выше (максимум 5-й уровень). Добавьте 1 прислужника к каждой создаваемой орде. Враги имеют <span class='phase'>Защита:</span> +{symbol.blueDie}"
                                }
                            }
                        ]
                    }
                },
                {
                    type:"difficultyRules",
                    data:[ "difficultyNightmare" ]
                },
                {
                    type:"campaignProtectedNeeds",
                    data:[ "difficulty-nightmare" ]
                }
            ]
        }
    ]

});
```

- [ ] **Step 4: Add the hook in `js/questgenerator.js`**

Locate the end of the game-mode block (the `if (resources.gameMode) { ... }` closing brace, directly before `result.quest = quest;`) and insert:

```js
            // Apply difficulty rules (if any)

            if (resources.difficultyRules)
                resources.difficultyRules.forEach(name=>{
                    resources.specialRules[name].forEach(rule=>{
                        quest.rules.push(rule);
                    })
                });
```

- [ ] **Step 5: Register the module in `index.html`**

After `<script src="modules/gamemodes.js"></script>` add:

```html
    <script src="modules/difficulty.js"></script>
```

- [ ] **Step 6: Add npm script in `package.json`**

In `"scripts"`, after the `"smoke:en"` line add:

```json
    "test:difficulty": "node tools/difficulty-test.js"
```

- [ ] **Step 7: Run test to verify it passes**

Run: `cd ~/GitHub/massive-randomness-2 && npm run test:difficulty`
Expected: `difficulty-test: all assertions passed`, exit 0

- [ ] **Step 8: Commit**

```bash
cd ~/GitHub/massive-randomness-2
git add modules/difficulty.js tools/difficulty-test.js js/questgenerator.js index.html package.json
git commit -m "feat: difficulty modules (hard/nightmare) + quest generator hook"
```

---

### Task 2: Difficulty selector in the settings UI

**Files:**
- Modify: `modules/interface.js` (insert new section after the Generator section, before the Map size section, ~line 385)
- Modify: `tools/smoke.js` (assert the Difficulty section renders with 3 entries)

**Interfaces:**
- Consumes: tags `difficulty-hard`, `difficulty-nightmare` from Task 1; UI section schema (`includeSelected` + `isSingleOption` + `isMandatory`, entries with `code`/`tags`/`isDefault`).
- Produces: settings section titled Difficulty / Difficolt&agrave; / Сложность with 3 entries and hash codes `3`/`4`; Task 3 relies on code `4` selecting Nightmare via URL hash.

- [ ] **Step 1: Extend the smoke test with a failing Difficulty-section check**

In `tools/smoke.js`, after the `countGeneratorEntries` function, add:

```js
async function countDifficultyEntries(page) {
    return page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('.section'));
        const diff = sections.find(s => /^(Difficulty|Сложность|Difficoltà)$/i.test(s.innerText.trim()));
        if (!diff) return -1;
        let sib = diff.nextElementSibling;
        let count = 0;
        while (sib && !sib.classList.contains('section')) {
            if (sib.classList.contains('items')) {
                count += sib.querySelectorAll('.item').length;
            }
            sib = sib.nextElementSibling;
        }
        return count;
    });
}
```

In `smokeMenu`, replace the two lines computing `generatorEntries` and `ok` with:

```js
    const generatorEntries = await countGeneratorEntries(page);
    const difficultyEntries = await countDifficultyEntries(page);
    const ok = sections.some(s => /Generator|Генератор|Generatore/i.test(s)) && generatorEntries >= 2 && difficultyEntries >= 3;
    return { ok, sections, generatorEntries, difficultyEntries };
```

In the main block, replace the `[menu]` console.log line with:

```js
    console.log(`[menu] Generator section: ${menu.generatorEntries} entries; Difficulty section: ${menu.difficultyEntries} entries; ok: ${menu.ok ? 'yes' : 'NO'}`);
```

- [ ] **Step 2: Run smoke to verify it fails on the menu check**

Terminal 1: `cd ~/GitHub/massive-randomness-2 && npm run serve`
Terminal 2 (or background the server): `cd ~/GitHub/massive-randomness-2 && node tools/smoke.js RU http://127.0.0.1:4173/index.html 3`
Expected: `[menu] ... Difficulty section: -1 entries; ok: NO` and exit code 1 (quest checks may pass; the menu check must fail).

- [ ] **Step 3: Insert the Difficulty section in `modules/interface.js`**

Find the end of the Generator section (the entry with `tags:[ "generator-campaign", "campaign-baseonly", "boss" ]` followed by `}` and `]`) and insert a new section object between the Generator section's closing `},{` and the Map size section (`ifMenuOptionSelected:[ "generator-oneshot" ] ... Map size`). The result must read:

```js
                                        tags:[ "generator-campaign", "campaign-baseonly", "boss" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Difficolt&agrave;",
                                    EN:"Difficulty",
                                    RU:"Сложность"
                                },
                                entries:[
                                    {
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal",
                                            RU:"Обычная"
                                        },
                                        description:{
                                            IT:"Il gioco standard, senza regole aggiuntive.",
                                            EN:"The standard game, no extra rules.",
                                            RU:"Стандартная игра, без дополнительных правил."
                                        }
                                    },{
                                        code:"3",
                                        label:{
                                            IT:"Difficile",
                                            EN:"Hard",
                                            RU:"Сложная"
                                        },
                                        description:{
                                            IT:"Orde pi&ugrave; numerose e resistenti: regole stampate sul foglio dell'avventura.",
                                            EN:"Bigger, tougher Mobs: harder table rules are printed on the quest sheet.",
                                            RU:"Более многочисленные и живучие орды: усложнённые правила печатаются на листе задания."
                                        },
                                        tags:[ "difficulty-hard" ]
                                    },{
                                        code:"4",
                                        label:{
                                            IT:"Incubo",
                                            EN:"Nightmare",
                                            RU:"Кошмар"
                                        },
                                        description:{
                                            IT:"La sfida definitiva: regole punitive, Sfide e scontri con i Boss inclusi.",
                                            EN:"The ultimate challenge: punishing table rules, Challenges and Boss fights included.",
                                            RU:"Максимальный вызов: суровые правила, включены испытания и сражения с боссами."
                                        },
                                        tags:[ "difficulty-nightmare", "challenges-default", "boss" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "generator-oneshot" ],
```

Note: the Normal entry deliberately has NO `code` and NO `tags` (precedent: the "Exclude untranslated quests" entry). Do NOT add `ifMenuOptionSelected` to the section — it must be visible for one-shot AND campaign generators.

- [ ] **Step 4: Run smoke to verify the menu check passes**

Run: `cd ~/GitHub/massive-randomness-2 && node tools/smoke.js RU http://127.0.0.1:4173/index.html 3`
Expected: `[menu] ... Difficulty section: 3 entries; ok: yes`, exit 0

- [ ] **Step 5: Commit**

```bash
cd ~/GitHub/massive-randomness-2
git add modules/interface.js tools/smoke.js
git commit -m "feat: difficulty selector in settings (normal/hard/nightmare)"
```

---

### Task 3: Nightmare end-to-end check, docs, full smoke

**Files:**
- Modify: `tools/smoke.js` (Nightmare hash generation check)
- Modify: `DATABASE.md` (Game variants section)

**Interfaces:**
- Consumes: hash code `4` (Nightmare) from Task 2; rule names `Nightmare Mode` / `Кошмарный режим` / `Modalit&agrave; Incubo` from Task 1. Default hash codes for context: `A` (Hellscape), `U` (bridges), `V` (one-shot), `1` (map normal), `Z` (map uniform).
- Produces: final verification that the whole pipeline works in the browser.

- [ ] **Step 1: Add the failing Nightmare hash check to `tools/smoke.js`**

After the `smokeQuests` function, add:

```js
async function smokeNightmare(browser) {
    // Open a fresh page with a Nightmare hash (code 4) and a fixed seed;
    // the difficulty rule block must appear on the rendered sheet.
    const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });
    await page.addInitScript((lang) => { localStorage.setItem('MARA2_LANG', lang); }, LANG);
    await page.goto(URL + '#AUV1Z4-424242', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    let data = await page.evaluate(() => ({
        story: (document.querySelector('.story') ? document.querySelector('.story').innerText : '').trim(),
        text: document.body.innerText
    }));
    if (!data.story) {
        // Some flows need an explicit generation; settings from the hash persist.
        await page.evaluate(() => {
            const btn = document.querySelector('.button.newQuest');
            if (btn) btn.click();
        });
        await page.waitForTimeout(1500);
        data = await page.evaluate(() => ({
            story: (document.querySelector('.story') ? document.querySelector('.story').innerText : '').trim(),
            text: document.body.innerText
        }));
    }
    await page.close();
    const hasRule = /Nightmare Mode|Кошмарный режим|Modalità Incubo/i.test(data.text);
    return { ok: !!data.story && hasRule, storyLength: data.story.length, hasRule };
}
```

In the main block, after the quest generation check (`smokeQuests` section) add:

```js
    // 4. Nightmare difficulty end-to-end
    const nightmare = await smokeNightmare(browser);
    console.log(`[nightmare] sheet rendered: ${nightmare.storyLength > 0 ? 'yes' : 'NO'}; rule block present: ${nightmare.hasRule ? 'yes' : 'NO'}`);
    if (!nightmare.ok) failed = true;
```

- [ ] **Step 2: Run the Nightmare check to see the current behavior**

Run: `cd ~/GitHub/massive-randomness-2 && node tools/smoke.js RU http://127.0.0.1:4173/index.html 3`
Expected: `[nightmare] sheet rendered: yes; rule block present: yes`, exit 0. (Tasks 1–2 already wired everything; this step confirms the e2e path. If `rule block present: NO`, debug before proceeding — likely the hash did not restore settings.)

- [ ] **Step 3: Update `DATABASE.md`**

In the `## Game variants` section, after the `* Dungeon Crawling Mode` line add:

```markdown
 * Difficulty modes _(Hard and Nightmare table rules; Nightmare also enables Challenges and Boss fights)_
```

- [ ] **Step 4: Run the full smoke suite in both languages**

Run (server still on 4173):
`cd ~/GitHub/massive-randomness-2 && npm run smoke && npm run smoke:en`
Expected: both runs exit 0 — 60 quests each, no empty cards, no page errors, menu + nightmare checks pass.

Manual (final review, not automated): open `http://127.0.0.1:4173/index.html`, select Heavenfall + Campaign + Nightmare in settings, generate, and confirm a campaign quest page shows the Nightmare rule block.

- [ ] **Step 5: Commit**

```bash
cd ~/GitHub/massive-randomness-2
git add tools/smoke.js DATABASE.md
git commit -m "test: nightmare-hash smoke check; docs: difficulty variant in DATABASE.md"
```
