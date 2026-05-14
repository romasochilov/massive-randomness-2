ModManager.modules.push(function(){

    return [
        {
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-baseonly" ],
            label:{
                EN:"Generates a 2-act mini-campaign using only the base box content",
                RU:"Генерирует мини-кампанию из 2 актов, используя только содержимое базовой коробки"
            },
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"Boss fight at the end of the campaign.",
                                RU:"Бой с боссом в конце кампании."
                            },
                            words:[
                                [
                                    "sealed",
                                    "deep",
                                    "still"
                                ],[
                                    "vault",
                                    "core",
                                    "hold"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Normal-sized maps.",
                                RU:"Карты обычного размера."
                            },
                            words:[
                                [
                                    "narrow",
                                    "tight",
                                    "low"
                                ],[
                                    "hall",
                                    "step",
                                    "way"
                                ]
                            ],
                            models:[]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"mini",
                            label:{
                                EN:"4-quests linear campaign using only the base box",
                                RU:"Линейная кампания из 4 заданий, использующая только базовую коробку"
                            },
                            campaignMode:{
                                EN:"{label.miniCampaignMode}",
                                RU:"{label.miniCampaignMode}",
                                IT:"{label.miniCampaignMode}"
                            },
                            explanationKeys:[ "miniCampaignExplanation", "campaignExplanation" ],
                            summaryKeys:[ "miniCampaignSummary", "campaignSummary" ],
                            story:[
                                [
                                    {
                                        EN:"A heavy iron door has stood sealed for as long as anyone can remember. ",
                                        RU:"Тяжёлая железная дверь стоит запечатанной столько, сколько помнят живущие. "
                                    }
                                ],[
                                    {
                                        EN:"Tonight, a thin red glow seeps from the keyhole and a low hum trembles in the stone. ",
                                        RU:"Этой ночью из замочной скважины сочится тонкое красное свечение, а в камне дрожит низкий гул. "
                                    }
                                ],[
                                    {
                                        EN:"A small band of heroes gathers before it, weapons in hand, breath shallow. ",
                                        RU:"Перед ней собирается небольшой отряд героев, с оружием в руках, едва дыша. "
                                    }
                                ],[
                                    {
                                        EN:"Whatever was locked away down there has begun to stir again...",
                                        RU:"То, что было заперто внизу, снова начало шевелиться..."
                                    }
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>The village elders called this place the Quiet Vault. For generations no one dared cross its threshold.</p>",
                                        RU:"<p>Старейшины деревни называли это место Тихим Хранилищем. На протяжении поколений никто не решался переступить его порог.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>Now the seals are cracking. A faint, wrong heat leaks into the corridors above, and animals refuse to come near.</p>",
                                        RU:"<p>Теперь печати трескаются. В верхние коридоры просачивается слабый, неправильный жар, и звери отказываются подходить близко.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>You and your companions agreed to investigate before anything else finds its way out. No reinforcements. No retreat plan worth the name.</p>",
                                        RU:"<p>Вы и ваши спутники согласились разведать всё прежде, чем что-то ещё найдёт путь наружу. Никакого подкрепления. Никакого пригодного плана отступления.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>The door opens with a long, dry groan. The air on the other side is hotter than it should be. <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",
                                        RU:"<p>Дверь открывается с долгим сухим стоном. Воздух по ту сторону горячее, чем должен быть. <i>(Перейдите на <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                EN:"<p>The first time players lose the same quest twice in a row, they gain 1 Lifebringer token. Start each subsequent Quest with an extra Lifebringer token until the end of the Campaign. This Achievement may be accomplished at any moment, even out the Town Phase.</p>",
                                RU:"<p>Когда игроки впервые дважды подряд проигрывают одно и то же задание, они получают 1 жетон Lifebringer. Каждое последующее задание до конца кампании начинается с дополнительного жетона Lifebringer. Это достижение может быть выполнено в любой момент, даже вне фазы города.</p>"
                            },
                            achievements:[],
                            treasureBag:{
                                EN:"{label.miniCampaignTreasureBagDescription}",
                                RU:"{label.miniCampaignTreasureBagDescription}",
                                IT:"{label.miniCampaignTreasureBagDescription}"
                            },
                            questPhase:{
                                EN:"{label.campaignQuestPhaseDescription}",
                                RU:"{label.campaignQuestPhaseDescription}",
                                IT:"{label.campaignQuestPhaseDescription}"
                            },
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        EN:"Cover",
                                        RU:"Обложка"
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        EN:"Mission A",
                                        RU:"Миссия A"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>Dust hangs in the lantern light. The first chamber is colder than the corridor behind you.</p>",
                                                    RU:"<p>Пыль висит в свете фонаря. Первая комната холоднее коридора за вашей спиной.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Someone, long ago, tried to fortify this place from the inside. They failed.</p>",
                                                    RU:"<p>Кто-то давным-давно пытался укрепить это место изнутри. У них не вышло.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li><li>5-6 Heroes: 11 XP</li></ul>",
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li><li>5-6 героев: 11 XP</li></ul>"
                                            },
                                            {
                                                EN:"<b>Update the Treasure bag:</b> Remove 4 Common Treasure tokens and add 2 Rare Treasure tokens to the Treasure bag.",
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 4 обычных жетона сокровищ и добавьте в мешок сокровищ 2 редких жетона сокровищ."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>A passage opens behind a slab that wasn't a slab. The air below is hotter still.</p>",
                                                    RU:"<p>За плитой, которая оказалась не плитой, открывается проход. Воздух внизу ещё жарче.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                EN:"Go to <span class='gotopage' page='2'></span>.",
                                                RU:"Перейдите на <span class='gotopage' page='2'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        EN:"Mission B",
                                        RU:"Миссия B"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The walls here are scored with old claw marks. Some of them are at head height. Some are higher.</p>",
                                                    RU:"<p>Стены здесь исцарапаны старыми следами когтей. Некоторые на уровне головы. Некоторые выше.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>One of the heroes finds a torn banner stamped with a sigil none of you recognise.</p>",
                                                    RU:"<p>Один из героев находит порванное знамя с печатью, которую никто из вас не узнаёт.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li><li>5-6 Heroes: 11 XP</li></ul>",
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li><li>5-6 героев: 11 XP</li></ul>"
                                            },
                                            {
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 1 Rare Treasure token and 1 Epic Treasure token to the Treasure bag.",
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 3 обычных жетона сокровищ и добавьте в мешок сокровищ 1 редкий жетон сокровищ и 1 эпический жетон сокровищ."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>A stairwell drops sharply into a deeper level. The hum you heard at the surface is louder now.</p>",
                                                    RU:"<p>Лестничный пролёт резко уходит вниз, на более глубокий уровень. Гул, который вы слышали наверху, теперь громче.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                EN:"Go to <span class='gotopage' page='3'></span>.",
                                                RU:"Перейдите на <span class='gotopage' page='3'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        EN:"Mission C",
                                        RU:"Миссия C"
                                    },
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>This zone was never meant for visitors. The tiles fit together wrong, as if rebuilt in a hurry.</p>",
                                                    RU:"<p>Эта зона никогда не предназначалась для гостей. Плитки складываются неправильно, как будто их перекладывали в спешке.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Somewhere ahead, something large drags itself across stone. Then it stops, and listens.</p>",
                                                    RU:"<p>Где-то впереди что-то крупное волочится по камню. Затем оно останавливается и прислушивается.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li><li>5-6 Heroes: 11 XP</li></ul>",
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li><li>5-6 героев: 11 XP</li></ul>"
                                            },
                                            {
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens and add 2 Epic Treasure tokens to the Treasure bag.",
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 обычных жетона сокровищ и добавьте в мешок сокровищ 2 эпических жетона сокровищ."
                                            }
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>The last door is wedged open with a snapped blade. Beyond it, a vast chamber waits, and something inside it knows you are coming.</p>",
                                                    RU:"<p>Последняя дверь подпёрта обломком клинка. За ней ждёт огромный зал, и кто-то внутри знает, что вы идёте.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                EN:"Go to <span class='gotopage' page='4'></span>.",
                                                RU:"Перейдите на <span class='gotopage' page='4'></span>."
                                            }
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        EN:"Mission D",
                                        RU:"Миссия D"
                                    },
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    EN:"<p>The boss falls. The red glow in the stone fades to nothing, and the hum stops.</p>",
                                                    RU:"<p>Босс повержен. Красное свечение в камне угасает в ничто, и гул стихает.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    EN:"<p>For the first time in days, you can hear your own breathing.</p>",
                                                    RU:"<p>Впервые за много дней вы слышите собственное дыхание.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    EN:"<p>You seal what is left of the door behind you and mark the wall with a warning the next foolish traveller might just heed.</p>",
                                                    RU:"<p>Вы запечатываете за собой то, что осталось от двери, и оставляете на стене предупреждение, к которому следующий безрассудный странник, может быть, прислушается.</p>"
                                                }
                                            ],
                                            [
                                                {
                                                    EN:"<p>You win!</p>",
                                                    RU:"<p>Вы победили!</p>"
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"globalLabels",
                    data:{
                        campaignPreparation:{
                            EN:"This is a base-box-only mini-campaign. It uses only content from the MD2 Hellscape base box. Prepare a mini-campaign following the standard mini-campaign rules.",
                            RU:"Это мини-кампания только из базовой коробки. В ней используется только содержимое базовой коробки MD2 Hellscape. Подготовьте мини-кампанию по стандартным правилам мини-кампании."
                        }
                    }
                },
                {
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Accept a medium challenge and gain an item.",
                                RU:"Примите среднее испытание и получите предмет."
                            },
                            words:[
                                [ "trial", "gauge", "weigh" ],
                                [ "test", "trial", "match" ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "glory" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

});
