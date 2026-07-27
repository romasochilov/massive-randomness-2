# Difficulty Modes — Design

**Date:** 2026-07-27
**Status:** Approved (mechanism: rules block + generator bias; scope: one-shots + campaigns)

## Problem

The generator has no difficulty control. Players who find quests too easy or too
punishing can only self-adjust at the table. Add a Difficulty selector — Easy /
Normal / Hard / Nightmare — that makes generated quests genuinely easier or
harder.

## Decisions already made

- **Mechanism:** each non-Normal mode prints a prominent rules block on every
  generated quest sheet. Nightmare additionally auto-enables Challenges and
  Boss fights through pure tag wiring (no extra code).
- **Scope:** applies to one-shot quests and all campaign flavors. Campaign page
  filtering must not drop the difficulty tag (`campaignProtectedNeeds`).
- **Normal is the default and a pure no-op** — no hash code, no tags. Existing
  shared URLs and current behavior stay byte-identical.

## UI — Difficulty section (`modules/interface.js`)

New `includeSelected` + `isSingleOption` + `isMandatory` section titled
**Difficulty** (IT: Difficoltà, RU: Сложность), placed directly after the
Generator section so it is visible for both one-shot and campaign generators.

| Option | `code` | `tags` | Notes |
|---|---|---|---|
| Easy | `3` | `difficulty-easy` | |
| Normal | — | — | `isDefault`, no code/tags |
| Hard | `4` | `difficulty-hard` | |
| Nightmare | `5` | `difficulty-nightmare`, `challenges-default`, `boss` | description states Challenges + Boss fights are included |

Codes `3`, `4`, `5` are unused by any existing entry (verified against the full
settings tree; hash matching is a global `indexOf`, so uniqueness is required).
Hash restore with no difficulty code falls back to defaults via the existing
`isSingleOption` empty-selection path → Normal.

## Rule content — new `modules/difficulty.js`

Three modules (`difficulty-easy`, `difficulty-hard`, `difficulty-nightmare`).
Each provides its own tag and contributes three content blocks:

1. `type:"specialRules"` — one named rule set (e.g. `difficultyNightmare`)
   containing display rules shaped like `dungeonCrawlingMode`'s:
   `{ priority:30, type:"rule", name:{IT,EN,RU}, explanation:{IT,EN,RU} }`.
   Priority 30 sorts the block above Dungeon Crawling Mode (20) at the top of
   the sheet. No `displayOnly` class — these must print.
2. `type:"difficultyRules"` — array data `[ "<ruleSetName>" ]`. Array content
   concatenates in `ModManager.load`, avoiding the object-merge clobbering that
   reusing `gameMode` would cause when combined with Dungeon Crawling Mode.
3. `type:"campaignProtectedNeeds"` — array data `[ "<own tag>" ]`, so campaign
   flag filtering (`onlyNeeds`) keeps the tag on every campaign page.

### Table rules per mode (EN wording; IT/RU translated in implementation)

Wording mirrors the existing challenge vocabulary (Abyssal Strength, Abyssal
Armor) and uses the existing `{symbol.blueDie}` token.

- **Easy Mode**
  - When a Mob spawns, remove 1 Minion from it.
  - Minions and Leaders have −1 Health (minimum 1).
- **Hard Mode**
  - Add 1 Minion to each spawned Mob.
  - Minions and Leaders have +1 Health.
- **Nightmare Mode**
  - Spawn Mobs and Roaming Monsters as if the Heroes were one Level higher
    (maximum Level 5).
  - Add 1 Minion to each spawned Mob.
  - Enemies have Defense: +{symbol.blueDie}.

## Generator hook (`js/questgenerator.js`)

After the game-mode application block, append:

```js
if (resources.difficultyRules)
    resources.difficultyRules.forEach(name=>{
        resources.specialRules[name].forEach(rule=>{
            quest.rules.push(rule);
        })
    });
```

No RNG calls → identical seeds keep producing identical quests; campaign pages
pick the rules up automatically because they run through the same generator.

## Registration and docs

- `index.html`: add `<script src="modules/difficulty.js">` next to the other
  module registrations (missing registration is a known regression source).
- `DATABASE.md`: list the Difficulty variant under Game variants.

## Testing

- `npm run smoke` (RU and EN) must pass: N generations, no blank cards, no page
  errors.
- Extend `tools/smoke.js`:
  - assert the Difficulty section renders in settings with 4 entries;
  - run one generation with a Nightmare hash (difficulty code `5` + seed) and
    assert the mission card is non-blank and contains the Nightmare rule name.
- Manual: `npm run serve`, eyeball Easy/Hard/Nightmare sheets and the print
  view; verify a campaign page shows the difficulty block.

## Out of scope

- Rebalancing existing challenges or campaign pacing.
- Difficulty-driven map size / spawn-point changes (rejected as fighting the
  existing user-facing selectors).
- FR translations beyond the existing fallback-to-EN behavior.
