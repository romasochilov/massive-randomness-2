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
