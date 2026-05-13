# Russian Localization Design

## Summary

Add full Russian localization to Massive Randomness 2 by extending the existing per-module label model with `RU` keys. The implementation must preserve the current generator architecture, keep fallback behavior intact, and make Russian a first-class language for the UI, generated quests, campaign pages, boss text, and shared content modules.

## Context

The repository already supports multiple languages through inline translation objects such as:

```js
{
  IT: "...",
  EN: "..."
}
```

Language resolution is handled centrally in [js/labels.js](../../../js/labels.js) and [js/interface.js](../../../js/interface.js). Quest availability is not inferred from rendered text. It is derived from quest metadata assembled in [js/questgenerator.js](../../../js/questgenerator.js), so Russian support must be added to the content model itself rather than only to the UI shell.

The content surface is large: roughly 4,800 localized string entries across 27 modules. This is a translation-heavy change, not an engine rewrite.

## Goals

- Add `RU` as a supported language in the UI.
- Provide intentional Russian translations for user-facing content across the app.
- Preserve the current inline label model and fallback behavior.
- Keep placeholders, HTML snippets, numeric values, and structural data unchanged.
- Support parallel execution with disjoint file ownership.

## Non-Goals

- Do not introduce a new i18n framework.
- Do not centralize all strings into locale bundles first.
- Do not refactor generator architecture unless a Russian-specific blocker appears.
- Do not accept a UI-only Russian selector as the finished outcome.

## Current Architecture

### Runtime labels

- [js/labels.js](../../../js/labels.js) resolves translation objects and falls back to `EN`.
- [js/interface.js](../../../js/interface.js) loads the current language from local storage or browser locale and populates the language selector.
- [modules/interface.js](../../../modules/interface.js) defines `supportedLanguages` and UI text labels.

### Quest language availability

- [js/questgenerator.js](../../../js/questgenerator.js) populates `quest.languages` from `quest.by`.
- [js/interface.js](../../../js/interface.js) uses `quest.languages` to show the language-unavailable notice.
- Result: adding `RU` strings without proper quest-language metadata will still leave quests marked as unavailable in Russian.

### Validation tools

- [tools/tests.html](../../../tools/tests.html) exposes the existing checker and smoke-test utilities in [js/tools.js](../../../js/tools.js).
- The current checker is not fully Russian-safe because some validation logic assumes Latin text and a fixed language set of `EN`, `IT`, and `FR`.

## Chosen Approach

Use the existing per-module label structure and add `RU` alongside existing language keys.

This is the lowest-risk option because:

- it matches the current data model,
- it keeps offline behavior unchanged,
- it preserves fallback semantics,
- and it avoids turning a translation task into a localization-framework migration.

## Implementation Shape

### Stage 1: UI and runtime language surface

Update [modules/interface.js](../../../modules/interface.js) to:

- add `RU` to `supportedLanguages`,
- add Russian translations for UI labels, buttons, notices, and settings text,
- preserve existing `EN`, `IT`, and `FR` keys.

The runtime language flow in [js/interface.js](../../../js/interface.js) should remain unchanged unless a Russian-specific bug is found.

### Stage 2: Shared global modules

Translate the highest-leverage shared modules first:

- [modules/quests-default.js](../../../modules/quests-default.js)
- [modules/challenges-default.js](../../../modules/challenges-default.js)
- [modules/gamemodes.js](../../../modules/gamemodes.js)
- [modules/campaign.js](../../../modules/campaign.js)
- [modules/campaign-upgradepack.js](../../../modules/campaign-upgradepack.js)
- [modules/boss.js](../../../modules/boss.js)
- [modules/maps-default.js](../../../modules/maps-default.js)

These modules feed many generated outputs and establish terminology used across the rest of the repo.

### Stage 3: Content-pack modules

Translate pack-specific modules in place, preserving object shape and placeholders:

- `md1-*`
- `md2-*`
- `zc-*`
- `quests-*`

Each file should receive additive `RU` keys only. Existing structures and data contracts must not change.

For any quest or campaign content that derives language availability from author metadata, add Russian to the relevant `by`-driven structures as well so the UI recognizes the content as available in `RU`.

### Stage 4: Verification and integration

Run structural validation and manual runtime checks after content translation, then consolidate any verification-related fixes required in [js/tools.js](../../../js/tools.js).

## Translation Rules

- `RU` must be additive only.
- Never remove or rename existing language keys.
- Never change placeholder syntax such as `{label.guardian@7}`.
- Never alter embedded HTML structure except to translate visible text.
- Never alter numeric values or rule logic while translating.
- Preserve capitalization and list structure where the existing renderer depends on it.
- If a file is too large to finish safely in one pass, keep ownership by file and complete it end-to-end before moving on. Avoid partial mixed-language user flows.

## Parallel Execution Plan

Use six workers with disjoint file ownership.

### Worker 1

- [modules/interface.js](../../../modules/interface.js)
- [modules/gamemodes.js](../../../modules/gamemodes.js)
- [modules/quests-default.js](../../../modules/quests-default.js)
- [modules/challenges-default.js](../../../modules/challenges-default.js)

### Worker 2

- [modules/md1-base.js](../../../modules/md1-base.js)
- [modules/md2-hellscape.js](../../../modules/md2-hellscape.js)
- [modules/md2-heavenfall.js](../../../modules/md2-heavenfall.js)
- [modules/md2-rainbowcrossing.js](../../../modules/md2-rainbowcrossing.js)
- [modules/md2-crystallava.js](../../../modules/md2-crystallava.js)
- [modules/zc-blackplague.js](../../../modules/zc-blackplague.js)
- [modules/zc-greenhorde.js](../../../modules/zc-greenhorde.js)
- [modules/zc-friendfoes.js](../../../modules/zc-friendfoes.js)
- [modules/zc-whitedeath.js](../../../modules/zc-whitedeath.js)
- [modules/zc-wulfsburg.js](../../../modules/zc-wulfsburg.js)
- [modules/zc-eternalempire.js](../../../modules/zc-eternalempire.js)

### Worker 3

- [modules/maps-default.js](../../../modules/maps-default.js)

### Worker 4

- [modules/quests-hellscape.js](../../../modules/quests-hellscape.js)
- [modules/quests-hellscapewq.js](../../../modules/quests-hellscapewq.js)
- [modules/quests-upgradepack.js](../../../modules/quests-upgradepack.js)
- [modules/quests-internet.js](../../../modules/quests-internet.js)
- [modules/quests-ravaged.js](../../../modules/quests-ravaged.js)
- [modules/quests-rainbowcrossing.js](../../../modules/quests-rainbowcrossing.js)
- [modules/quests-darkbringerpack.js](../../../modules/quests-darkbringerpack.js)
- [modules/quests-mr.js](../../../modules/quests-mr.js)

### Worker 5

- [modules/campaign.js](../../../modules/campaign.js)
- [modules/campaign-upgradepack.js](../../../modules/campaign-upgradepack.js)

### Worker 6

- [modules/boss.js](../../../modules/boss.js)

### Integration owner

The main thread owns:

- verification,
- terminology reconciliation,
- any `js/tools.js` fixes required for Russian-safe validation,
- final integration.

## Verification Strategy

### Structural checks

Use [tools/tests.html](../../../tools/tests.html) as the main validation entry point, especially:

- `Quests data`
- `Campaign Text`
- `Campaign`
- `Campaigns`
- `Quest Boss`
- `Quests`

### Important caveat

Before relying on the checker for pass/fail status, verify or patch [js/tools.js](../../../js/tools.js) because:

- some validation logic assumes only `EN`, `IT`, and `FR`,
- some text checks are Latin-centric and may reject or warn on Cyrillic,
- coverage logic may assume `languageExcludeTags` exists for all supported languages,
- some preview paths render English only and are not valid Russian rendering checks.

### Runtime checks

Manually verify:

- browser locale detection for `ru` and `ru-RU`,
- selector persistence through local storage,
- settings UI in Russian,
- one-shot quest generation in Russian,
- campaign page generation in Russian,
- boss and shared rule text in Russian,
- language-unavailable notices only when Russian is genuinely absent from a quest.

### Fallback checks

Confirm the runtime still falls back safely to English when a `RU` key is intentionally absent, and that malformed `RU` values do not silently produce broken output such as `[object Object]`.

## Risks

- Terminology drift across independently translated modules.
- Broken placeholders or HTML fragments inside narrative-heavy quest files.
- False negatives or false positives from Russian-unaware validation logic in [js/tools.js](../../../js/tools.js).
- Quests marked unavailable in Russian if metadata and translated content diverge.

## Mitigations

- Use shared glossary decisions across all workers.
- Assign large monolithic files to single owners.
- Centralize verification and integration.
- Treat `js/tools.js` adaptation as part of verification readiness, not as an optional cleanup.

## Acceptance Criteria

- Russian appears as a supported language in the UI.
- The settings shell and notices render in Russian.
- Generated quests, campaign pages, and boss/shared rule text render in Russian for translated content.
- Quest availability behaves correctly for Russian.
- Existing languages continue to work.
- Validation and smoke tests run with Russian support without structural breakage.
