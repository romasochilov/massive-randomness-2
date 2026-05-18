ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                EN:[ "the mission ends with a victory", "end the mission with a victory" ],
                RU:[ "миссия заканчивается победой", "завершить миссию победой" ]
            }
        ],
        BOSSBEAT = [
            {
                EN:[ "it is eliminated", "it is eliminated" ],
                RU:[ "он устранён", "она устранена" ]
            }
        ];

    return [
        {
            id:"quests-extras",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-extras", "untranslated-it", "untranslated-fr" ],
            label:{
                EN:"Extra one-shot quests bundle",
                RU:"Дополнительные одиночные задания"
            },
            content:[
                {
                    type:"quests",
                    data:[

                        // ============================================================
                        // 1. THE HEIST — collectBossAndExit
                        // ============================================================
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"collectBossAndExit",
                            objective:{
                                EN:"Collect a loot token, open the vault door, fight the guardian, then carry the loot to the exit to win.",
                                RU:"Соберите жетон добычи, откройте дверь хранилища, сразитесь со стражем, затем вынесите добычу к выходу, чтобы победить."
                            },
                            by:{
                                EN:"Original quest: The Heist",
                                RU:"Оригинальное задание: Ограбление"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                vault:[
                                                    {
                                                        EN:[ "the Royal Treasury", "Treasury", "the gold-laden Treasury", "the royal coffers", "the treasury", "the Royal Heist" ],
                                                        RU:[ "Королевская сокровищница", "Сокровищница", "сокровищница, ломящаяся от золота", "королевские казны", "сокровищница", "Королевское ограбление" ]
                                                    },{
                                                        EN:[ "the Dragon's Hoard", "Hoard", "the scale-piled Hoard", "the dragon's stash", "the hoard", "the Dragon Heist" ],
                                                        RU:[ "Драконья сокровищница", "Сокровищница", "сокровищница, укрытая чешуёй", "схрон дракона", "сокровищница", "Драконье ограбление" ]
                                                    },{
                                                        EN:[ "the Wizard's Vault", "Vault", "the arcane Vault", "the wizard's archives", "the vault", "the Arcane Heist" ],
                                                        RU:[ "Хранилище мага", "Хранилище", "тайное хранилище", "архивы мага", "хранилище", "Тайное ограбление" ]
                                                    }
                                                ],
                                                loot:[
                                                    {
                                                        EN:[ "the Crown Jewels", "the jewels", "Crown Jewels", "the priceless gems", "jewels" ],
                                                        RU:[ "Коронные драгоценности", "драгоценности", "Коронные драгоценности", "бесценные камни", "драгоценности" ]
                                                    },{
                                                        EN:[ "the Hoard Bounty", "the bounty", "Hoard Bounty", "the heap of gold and gems", "bounty" ],
                                                        RU:[ "Драконья добыча", "добыча", "Драконья добыча", "груда золота и самоцветов", "добыча" ]
                                                    },{
                                                        EN:[ "the Arcane Relics", "the relics", "Arcane Relics", "the ancient magical relics", "relics" ],
                                                        RU:[ "Тайные реликвии", "реликвии", "Тайные реликвии", "древние магические реликвии", "реликвии" ]
                                                    }
                                                ],
                                                guardian:[
                                                    {
                                                        EN:[ "the Captain of the Royal Guard", "the Captain", "the Royal Guard Captain", "the Captain" ],
                                                        RU:[ "Капитан Королевской стражи", "Капитан", "Капитан Королевской стражи", "Капитан" ]
                                                    },{
                                                        EN:[ "the Ancient Wyrm", "the Wyrm", "the slumbering Wyrm", "the Wyrm" ],
                                                        RU:[ "Древний змей", "Змей", "дремлющий змей", "Змей" ]
                                                    },{
                                                        EN:[ "the Arcane Sentinel", "the Sentinel", "the Wizard's Sentinel", "the Sentinel" ],
                                                        RU:[ "Тайный дозорный", "Дозорный", "Дозорный мага", "Дозорный" ]
                                                    }
                                                ],
                                                intro:[
                                                    {
                                                        EN:[ "Word has reached the heroes of" ],
                                                        RU:[ "До героев дошёл слух о" ]
                                                    },{
                                                        EN:[ "Maps stolen from a fence describe" ],
                                                        RU:[ "Карты, украденные у скупщика, описывают" ]
                                                    },{
                                                        EN:[ "An old contact has tipped them off about" ],
                                                        RU:[ "Старый знакомый шепнул им о" ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        EN:[ "They slip in, grab what they can, and run." ],
                                                        RU:[ "Они проскальзывают внутрь, хватают всё, что могут, и убегают." ]
                                                    },{
                                                        EN:[ "The plan is simple: get in, take the prize, get out." ],
                                                        RU:[ "План прост: войти, забрать приз, выйти." ]
                                                    },{
                                                        EN:[ "A daring break-in, a quick grab, a faster escape." ],
                                                        RU:[ "Дерзкое проникновение, быстрый захват, ещё более быстрый побег." ]
                                                    }
                                                ],
                                                alarm:[
                                                    {
                                                        EN:[ "But the moment {label.loot@1} leave their pedestal, the alarm wards trigger and {label.guardian@0} stirs from the deeper hall." ],
                                                        RU:[ "Но как только {label.loot@1} покидают свой пьедестал, срабатывают защитные руны и {label.guardian@0} выходит из дальнего зала." ]
                                                    },{
                                                        EN:[ "But the prize is warded — lifting it summons {label.guardian@0} from the inner chamber." ],
                                                        RU:[ "Но приз защищён — стоит его поднять, и {label.guardian@0} выходит из внутренней комнаты." ]
                                                    },{
                                                        EN:[ "But the treasury answers to {label.guardian@0}, and {label.guardian@1} will not let them leave with the prize." ],
                                                        RU:[ "Но сокровищница подчиняется {label.guardian@1}, и {label.guardian@0} не отпустит их с добычей." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectAllItems:[
                                                    {
                                                        EN:[ "to grab every piece of {label.loot@0}", "collecting every loose loot token" ],
                                                        RU:[ "забрать каждую часть {label.loot@0}", "собирая все свободные жетоны добычи" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.vault:capital@5}",
                                            RU:"{label.vault:capital@5}"
                                        },{
                                            EN:"{label.loot:capital@2}",
                                            RU:"{label.loot:capital@2}"
                                        },{
                                            EN:"{label.vault:capital@1}",
                                            RU:"{label.vault:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.intro@0} {label.vault@0} — {label.vault@2} where {label.loot@0} are kept. {label.plan@0} {label.alarm@0}",
                                            RU:"{label.intro@0} {label.vault@0} — {label.vault@2}, где хранятся {label.loot@0}. {label.plan@0} {label.alarm@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполняйте цели в указанном порядке:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"The Grab",
                                                        RU:"Захват"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Pick up {label.loot@0}",
                                                        RU:"Подберите {label.loot@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Carry {label.loot@0} out through the exit with no enemies remaining in the room",
                                                        RU:"Вынесите {label.loot@0} через выход, чтобы в комнате не осталось врагов"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.loot:capital@2}",
                                                        RU:"{label.loot:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The Objective token on the gray side represents {label.loot@0}. Any Hero in its Zone can spend 1 action to pick it up. It can be exchanged as an item between Heroes.",
                                                        RU:"Жетон цели на серой стороне представляет {label.loot@0}. Любой герой в его зоне может потратить 1 действие, чтобы подобрать его. Его можно обменивать как предмет между героями."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Alarm",
                                                        RU:"Тревога"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn a Level 5 Roaming Monster in the Zone marked with the gray Objective token. This is {label.guardian@0}, summoned by the alarm wards.",
                                                        RU:"Когда герой открывает дверь с красным контуром, после разрешения соответствующей карты Дверь породите блуждающего монстра 5 уровня в зоне, отмеченной серым жетоном цели. Это {label.guardian@0}, призванный защитными рунами."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn {label.campaignBoss@0} in the Zone marked with the gray Objective token. This is {label.guardian@0}, summoned by the alarm wards.",
                                                        RU:"Когда герой открывает дверь с красным контуром, после разрешения соответствующей карты Дверь породите {label.campaignBoss@0} в зоне, отмеченной серым жетоном цели. Это {label.guardian@0}, призванный защитными рунами."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Getaway",
                                                        RU:"Бегство"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"If the Hero carrying the gray-side Objective token ends their turn in the Zone of the color-side Objective token and the room contains no enemies, {label.questVictory@0}.",
                                                        RU:"Если герой, несущий жетон цели на серой стороне, заканчивает ход в зоне жетона цели на цветной стороне и в комнате нет врагов, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison-short" ],
                                            gameMode:[ "collectBossAndExit" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size:[ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio:[ "default" ],
                                            corridors:[ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectAllItems" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    EN:"Cut down the keeper of {label.vault@4}: {boss.bossBadName@0}",
                                                    RU:"Сразить хранителя {label.vault@4}: {boss.bossBadName@0}"
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },

                        // ============================================================
                        // 2. THE HUNT IS ON — hunt
                        // ============================================================
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"hunt",
                            objective:{
                                EN:"Hunt down all special Roaming Monsters before they close in on you.",
                                RU:"Выследите всех особых блуждающих монстров, прежде чем они настигнут вас."
                            },
                            by:{
                                EN:"Original quest: The Hunt is On",
                                RU:"Оригинальное задание: Охота началась"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                opening:[
                                                    {
                                                        EN:[ "The heroes thought they were the hunters." ],
                                                        RU:[ "Герои думали, что охотниками будут они." ]
                                                    },{
                                                        EN:[ "It was meant to be a routine patrol." ],
                                                        RU:[ "Это должен был быть обычный обход." ]
                                                    },{
                                                        EN:[ "They walked into the woods at dawn." ],
                                                        RU:[ "На рассвете они вошли в лес." ]
                                                    }
                                                ],
                                                stalkers:[
                                                    {
                                                        EN:[ "the", "Bloodhunter Pack", "of the", "the", "of the" ],
                                                        RU:[ "", "Стая Кровавых охотников", "", "", "" ]
                                                    },{
                                                        EN:[ "the", "Silent Stalkers", "of the", "the", "of the" ],
                                                        RU:[ "", "Безмолвные охотники", "", "", "" ]
                                                    },{
                                                        EN:[ "the", "Wraith Trackers", "of the", "the", "of the" ],
                                                        RU:[ "", "Призрачные следопыты", "", "", "" ]
                                                    }
                                                ],
                                                lair:[
                                                    {
                                                        EN:[ "in the", "Bloodwood Thicket" ],
                                                        RU:[ "в", "Кровавой чаще" ]
                                                    },{
                                                        EN:[ "across the", "Silent Marshes" ],
                                                        RU:[ "на", "Безмолвных болотах" ]
                                                    },{
                                                        EN:[ "through the", "Mistbound Ruins" ],
                                                        RU:[ "среди", "Туманных руин" ]
                                                    }
                                                ],
                                                turn:[
                                                    {
                                                        EN:[ "But now they are the quarry" ],
                                                        RU:[ "Но теперь добычей стали они" ]
                                                    },{
                                                        EN:[ "Yet the hunt has turned" ],
                                                        RU:[ "Но охота обратилась против них" ]
                                                    },{
                                                        EN:[ "But the trail is reversed" ],
                                                        RU:[ "Но след развернулся" ]
                                                    }
                                                ],
                                                closeIn:[
                                                    {
                                                        EN:[ "and {label.stalkers@1} close in with every step" ],
                                                        RU:[ "и {label.stalkers@1} приближаются с каждым шагом" ]
                                                    },{
                                                        EN:[ "and {label.stalkers@1} draw nearer with each round" ],
                                                        RU:[ "и {label.stalkers@1} становятся всё ближе с каждым раундом" ]
                                                    },{
                                                        EN:[ "and {label.stalkers@1} pursue without rest" ],
                                                        RU:[ "и {label.stalkers@1} преследуют без устали" ]
                                                    }
                                                ],
                                                onlyWay:[
                                                    {
                                                        EN:[ "Their only escape is to turn and kill every one of them." ],
                                                        RU:[ "Единственный путь к спасению — развернуться и убить их всех." ]
                                                    },{
                                                        EN:[ "There is no flight left — only the kill." ],
                                                        RU:[ "Бежать больше некуда — только убить." ]
                                                    },{
                                                        EN:[ "They must break the pack to break the chase." ],
                                                        RU:[ "Чтобы прервать погоню, нужно сломить стаю." ]
                                                    }
                                                ],
                                                hunt:[
                                                    {
                                                        EN:[ "The Hunt", "the pursuit", "Cursed Hunt", "Reverse Hunt" ],
                                                        RU:[ "Охота", "погоня", "Проклятая охота", "Обратная охота" ]
                                                    },{
                                                        EN:[ "The Chase", "the chase", "Long Chase", "The Long Chase" ],
                                                        RU:[ "Погоня", "преследование", "Долгая погоня", "Долгая погоня" ]
                                                    },{
                                                        EN:[ "The Trail", "the tracking", "Cold Trail", "The Cold Trail" ],
                                                        RU:[ "След", "выслеживание", "Холодный след", "Холодный след" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                eliminateEnemy:[
                                                    {
                                                        EN:[ "2 or more {label.stalkers@1}" ],
                                                        RU:[ "2 или более {label.stalkers@1}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.hunt:capital@2}",
                                            RU:"{label.hunt:capital@2}"
                                        },{
                                            EN:"{label.stalkers:capital@0} {label.stalkers:capital@1}",
                                            RU:"{label.stalkers:capital@0} {label.stalkers:capital@1}"
                                        },{
                                            EN:"{label.lair:capital@1}",
                                            RU:"{label.lair:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.opening@0} {label.turn@0} {label.lair@0} {label.lair@1}, and {label.closeIn@0}. {label.onlyWay@0}",
                                            RU:"{label.opening@0} {label.turn@0} {label.lair@0} {label.lair@1}, и {label.closeIn@0}. {label.onlyWay@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Kill {label.stalkers@0} {label.stalkers@1}",
                                                        RU:"Убить {label.stalkers@0} {label.stalkers@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Kill the {tokensCount.corruption} Special Roaming Monsters",
                                                        RU:"Убить {tokensCount.corruption} особых блуждающих монстров"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.stalkers:capital@0} {label.stalkers:capital@1}",
                                                        RU:"{label.stalkers:capital@0} {label.stalkers:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Whenever a Chamber with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, also spawn a Roaming Monster in the Zone indicated by the Corruption token. This Roaming Monster is 1 of {label.stalkers@1}. Once all {tokensCount.corruption} {label.stalkers@1} have been killed, {label.questVictory@0}.",
                                                        RU:"Каждый раз, когда открывается комната с жетоном порчи {symbol.corruptionToken}, в дополнение к обычным шагам открытия комнаты, также создайте блуждающего монстра в зоне, обозначенной жетоном порчи. Этот блуждающий монстр — 1 из {label.stalkers@1}. Когда все {tokensCount.corruption} {label.stalkers@1} убиты, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        EN:"Whenever a Chamber with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, also spawn a Roaming Monster in the Zone indicated by the Corruption token. This Roaming Monster is 1 of {label.stalkers@1}. When it is defeated all Heroes gain {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP. Once all {tokensCount.corruption} {label.stalkers@1} have been killed, {label.questVictory@0}.",
                                                        RU:"Каждый раз, когда открывается комната с жетоном порчи {symbol.corruptionToken}, в дополнение к обычным шагам открытия комнаты, также создайте блуждающего монстра в зоне, обозначенной жетоном порчи. Этот блуждающий монстр — 1 из {label.stalkers@1}. Когда он побеждён, все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.corruption} ОО. Когда все {tokensCount.corruption} {label.stalkers@1} убиты, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hunt:capital@0}",
                                                        RU:"{label.hunt:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The tiles are not linked in this Mission and can only be accessed using the magic passages represented by Objective tokens. Any Hero can spend 1 MP while in a Zone with an Objective token to move to any other Zone with an Objective token. The stalkers use the same passages to close the distance.",
                                                        RU:"Плитки не связаны в этой миссии, и к ним можно получить доступ только через магические проходы, представленные жетонами цели. Любой герой может потратить 1 ОД, находясь в зоне с жетоном цели, чтобы переместиться в любую другую зону с жетоном цели. Преследователи используют те же проходы, чтобы сократить расстояние."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Monsters Close In",
                                                        RU:"Монстры приближаются"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Mobs and Roaming Monsters also use the magic passages. During the Enemies Phase, if there are no Heroes on a Tile, any Mob and Roaming Monster on that Tile moves to the nearest Zone with an Objective token. All Zones with Objective tokens are considered adjacent to each other for Mobs and Roaming Monsters (but do not allow Line of Sight from one to the other).",
                                                        RU:"Орды и блуждающие монстры также используют магические проходы. Во время фазы врагов, если на плитке нет героев, любая орда и блуждающие монстры на этой плитке перемещаются в ближайшую зону с жетоном цели. Все зоны с жетонами цели считаются смежными друг с другом для орд и блуждающих монстров (но не разрешают линию обзора между ними)."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "magicMaze" ],
                                            gameMode:[ "magicMazeHunt" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size:[ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio:[ "default" ],
                                            corridors:[ "magicMaze" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "eliminateEnemy" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    EN:"Eliminate {boss.bossBadName@0}, leader of {label.stalkers@1}",
                                                    RU:"Устранить {boss.bossBadName@0}, предводителя {label.stalkers@1}"
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },

                        // ============================================================
                        // 3. ARENA OF CHAMPIONS — finalBoss
                        // ============================================================
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"finalBoss",
                            objective:{
                                EN:"Heroes step into a single-zone arena and must survive a champion's wrath to win.",
                                RU:"Герои выходят на одинокую арену и должны выдержать ярость защитника, чтобы победить."
                            },
                            by:{
                                EN:"Original quest: Arena of Champions",
                                RU:"Оригинальное задание: Арена защитников"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                arena:[
                                                    {
                                                        EN:[ "the Bloodsand Coliseum", "the coliseum", "the bloodsand pit", "Coliseum" ],
                                                        RU:[ "Колизей Кровавого песка", "колизей", "яма Кровавого песка", "Колизей" ]
                                                    },{
                                                        EN:[ "the Iron Pit", "the pit", "the rusted iron pit", "Iron Pit" ],
                                                        RU:[ "Железная яма", "яма", "ржавая железная яма", "Железная яма" ]
                                                    },{
                                                        EN:[ "the Old Forum", "the forum", "the ancient forum", "Forum" ],
                                                        RU:[ "Старый форум", "форум", "древний форум", "Форум" ]
                                                    }
                                                ],
                                                champion:[
                                                    {
                                                        EN:[ "the Bloodsand Champion", "the champion", "Bloodsand Champion" ],
                                                        RU:[ "Защитник Кровавого песка", "защитник", "Защитник Кровавого песка" ]
                                                    },{
                                                        EN:[ "the Iron Tyrant", "the tyrant", "Iron Tyrant" ],
                                                        RU:[ "Железный тиран", "тиран", "Железный тиран" ]
                                                    },{
                                                        EN:[ "the Old Forum's Glory", "the glory of the Forum", "Forum Glory" ],
                                                        RU:[ "Слава Старого форума", "слава Форума", "Слава Форума" ]
                                                    }
                                                ],
                                                summon:[
                                                    {
                                                        EN:[ "The gates slam shut behind them" ],
                                                        RU:[ "За их спинами захлопываются ворота" ]
                                                    },{
                                                        EN:[ "The crowd in the stands roars" ],
                                                        RU:[ "Толпа на трибунах ревёт" ]
                                                    },{
                                                        EN:[ "A bronze gong sounds the start" ],
                                                        RU:[ "Бронзовый гонг возвещает начало" ]
                                                    }
                                                ],
                                                fight:[
                                                    {
                                                        EN:[ "and {label.champion@0} steps onto the sand to meet them" ],
                                                        RU:[ "и {label.champion@0} выходит на песок им навстречу" ]
                                                    },{
                                                        EN:[ "and {label.champion@0} answers the call to fight" ],
                                                        RU:[ "и {label.champion@0} отвечает на вызов к бою" ]
                                                    },{
                                                        EN:[ "and {label.champion@0} rises to claim them as opponents" ],
                                                        RU:[ "и {label.champion@0} поднимается, чтобы принять их как соперников" ]
                                                    }
                                                ],
                                                lore:[
                                                    {
                                                        EN:[ "Only one walks out of {label.arena@0} alive." ],
                                                        RU:[ "Только один выходит из {label.arena@0} живым." ]
                                                    },{
                                                        EN:[ "Survive the wrath of {label.champion@0} and the crown is yours." ],
                                                        RU:[ "Переживите ярость {label.champion@1} — и венец ваш." ]
                                                    },{
                                                        EN:[ "Beat {label.champion@0} and the gates open again." ],
                                                        RU:[ "Победите {label.champion@1} — и ворота снова откроются." ]
                                                    }
                                                ],
                                                cliffhanger:[
                                                    {
                                                        EN:[ "Bloodsand Verdict" ],
                                                        RU:[ "Приговор Кровавого песка" ]
                                                    },{
                                                        EN:[ "Iron Reckoning" ],
                                                        RU:[ "Железная расплата" ]
                                                    },{
                                                        EN:[ "Forum's Final Bell" ],
                                                        RU:[ "Последний удар форума" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDoor:[
                                                    {
                                                        EN:[ "the arena gates remain shut" ],
                                                        RU:[ "ворота арены остаются закрытыми" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cliffhanger@0}",
                                            RU:"{label.cliffhanger@0}"
                                        },{
                                            EN:"{label.arena:capital@3}",
                                            RU:"{label.arena:capital@3}"
                                        },{
                                            EN:"{label.champion:capital@2}",
                                            RU:"{label.champion:capital@2}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"The Heroes enter {label.arena@0}. {label.summon@0} {label.fight@0}. {label.lore@0}",
                                            RU:"Герои выходят на {label.arena@0}. {label.summon@0}, {label.fight@0}. {label.lore@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Step Into the Sand",
                                                        RU:"Выйти на песок"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"All Heroes must reach the {tileLabel.center} tile",
                                                        RU:"Все герои должны достичь плитки {tileLabel.center}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat {label.champion@0}",
                                                        RU:"Победить {label.champion@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Defeat the final Roaming Monster in the arena",
                                                        RU:"Победить финального блуждающего монстра на арене"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Separated by the Stands",
                                                        RU:"Разделены трибунами"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"In this Mission, Heroes enter separately through different gates and each player must place their Hero in a different Starting Zone. In a game with 5 or 6 Heroes, 1 or 2 Starting Zones can contain a maximum of 2 Heroes. For any purpose (except for the Final Roaming Monster), treat the Mission as if only 2 Heroes were playing.<p>In a game with fewer than 4 Heroes, remove enough Tiles so that only the Arena Tile ({tileLabel.center}) plus 1 Tile per Hero remain. Do not remove the {tileLabel.first} tile.</p>",
                                                        RU:"В этой миссии герои входят раздельно через разные ворота, и каждый игрок должен поместить своего героя в отдельную стартовую зону. В игре с 5 или 6 героями 1 или 2 стартовые зоны могут содержать максимум 2 героя. Для всех целей (кроме финального блуждающего монстра) считайте миссию так, как будто играют только 2 героя.<p>В игре с менее чем 4 героями уберите достаточно плиток, чтобы осталась только плитка арены ({tileLabel.center}) плюс 1 плитка на героя. Не убирайте плитку {tileLabel.first}.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Note",
                                                        RU:"Примечание"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The Hordes are only generated with 2 Minions and their Leader, and the Roaming Monsters have the equivalent Health of only 2 Heroes.",
                                                        RU:"Орды создаются только с 2 приспешниками и их предводителем, а у блуждающих монстров здоровье эквивалентно только 2 героям."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Gates",
                                                        RU:"Ворота"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The tiles are not connected in this Mission and can only be accessed using the arena gates represented by Objective tokens, which are deactivated until a tile is cleared."+
                                                        "<p>An Objective token activates immediately and flips to its colored side once its corresponding tile has no Enemies remaining and all Chambers have been revealed.</p>"+
                                                        "Any Hero who has activated a gate can spend 1 MP while in a Zone with an Objective token of any color to move to any other Zone with an Objective token of any color.",
                                                        RU:"Плитки не связаны в этой миссии, и к ним можно получить доступ только через арена-ворота, представленные жетонами цели, которые деактивированы до зачистки плитки."+
                                                        "<p>Жетон цели активируется немедленно и переворачивается на цветную сторону, как только на соответствующей плитке не останется врагов и все комнаты будут открыты.</p>"+
                                                        "Любой герой, активировавший ворота, может потратить 1 ОД, находясь в зоне с жетоном цели любого цвета, чтобы переместиться в любую другую зону с жетоном цели любого цвета."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cliffhanger@0}",
                                                        RU:"{label.cliffhanger@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and spawn a Level 5 Roaming Monster in its Zone — this is {label.champion@0}.<p>Draw cards from the Level 5 Horde Items deck until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to its Attack dice pool.</p><p>When the Roaming Monster is defeated, {label.questVictory@0}.</p>",
                                                        RU:"Когда вы открываете дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карты двери, уберите жетон порчи {symbol.corruptionToken} и создайте блуждающего монстра 5 уровня в этой зоне — это {label.champion@0}.<p>Берите карты из колоды предметов орды 5 уровня, пока не откроете оружие с таким же типом атаки, как у блуждающего монстра. Снарядите блуждающего монстра этим оружием, добавив кубики оружия в пул кубиков атаки.</p><p>Когда блуждающий монстр побеждён, {label.questVictory@0}.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and spawn {label.campaignBoss@0} in its Zone — this is {label.champion@0}.<p>Draw cards from the Horde Items deck matching its rank until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to its Attack dice pool.</p><p>When the Roaming Monster is defeated, {label.questVictory@0}.</p>",
                                                        RU:"Когда вы открываете дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карты двери, уберите жетон порчи {symbol.corruptionToken} и создайте {label.campaignBoss@0} в этой зоне — это {label.champion@0}.<p>Берите карты из колоды предметов орды соответствующего ранга, пока не откроете оружие с таким же типом атаки, как у блуждающего монстра. Снарядите блуждающего монстра этим оружием, добавив кубики оружия в пул кубиков атаки.</p><p>Когда блуждающий монстр побеждён, {label.questVictory@0}.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "cross" ],
                                            gameMode:[ "cross" ],
                                            difficulty:[ "none" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio:[ "same" ],
                                            corridors:[ "cross" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDoor" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    EN:"Finish the duel against {boss.bossBadName@0}",
                                                    RU:"Завершить дуэль с {boss.bossBadName@0}"
                                                }
                                            }
                                        ],
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },

                        // ============================================================
                        // 4. PLAGUE CLEANSE — corruption
                        // ============================================================
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"corruption",
                            objective:{
                                EN:"A chosen Hero takes wounds and gains tokens for every Leader or Roaming Monster killed in shadow. Reach the token quota to win.",
                                RU:"Избранный герой получает раны и жетоны за каждого убитого предводителя или блуждающего монстра в тени. Наберите норму жетонов, чтобы победить."
                            },
                            by:{
                                EN:"Original quest: Plague Cleanse",
                                RU:"Оригинальное задание: Очищение чумы"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                outbreak:[
                                                    {
                                                        EN:[ "A black sickness creeps from village to village,", "the plague spreading like wildfire" ],
                                                        RU:[ "Чёрная хворь ползёт от деревни к деревне,", "чума, распространяющаяся как пожар" ]
                                                    },{
                                                        EN:[ "A creeping rot bleeds out of the old shrine,", "the rot rising from a buried wound" ],
                                                        RU:[ "Ползучая гниль сочится из старого святилища,", "гниль, поднимающаяся из погребённой раны" ]
                                                    },{
                                                        EN:[ "A whispering corruption taints the river,", "the corruption seeping along the water" ],
                                                        RU:[ "Шепчущая порча отравляет реку,", "порча, расползающаяся по воде" ]
                                                    }
                                                ],
                                                cleanser:[
                                                    {
                                                        EN:[ "the Plague Doctors", "a Plague Doctor", "the Plague Doctor Hero", "Cleanse the Sickness", "Reach {label.tokensCount} Cleansing Vials", "Cleansing Vials", "the \"Plague Doctor\"", "from the sickness", "their Cleansing Vials", "the Plague Beacons", "", "purge it", "Cleansing the Sickness", "Plague Beacons", "Cleansing Vials reaches {label.tokensCount}", "represented", "of the Plague Doctors" ],
                                                        RU:[ "Чумные доктора", "Чумной доктор", "герой Чумной доктор", "Очистить хворь", "Достичь {label.tokensCount} флаконов очищения", "Флаконы очищения", "«Чумной доктор»", "от хвори", "его Флаконы очищения", "Чумные маяки", "", "очистить его", "Очищение хвори", "Чумные маяки", "Флаконы очищения достигают {label.tokensCount}", "представлены", "Чумных докторов" ]
                                                    },{
                                                        EN:[ "the Inquisitors", "an Inquisitor", "the Inquisitor Hero", "Burn the Rot", "Reach {label.tokensCount} Pyre Ashes", "Pyre Ashes", "the \"Inquisitor\"", "from the rot", "their Pyre Ashes", "the Rot Beacons", "", "burn it", "Burning the Rot", "Rot Beacons", "Pyre Ashes reaches {label.tokensCount}", "represented", "of the Inquisitors" ],
                                                        RU:[ "Инквизиторы", "Инквизитор", "герой Инквизитор", "Сжечь гниль", "Достичь {label.tokensCount} погребального пепла", "Погребальный пепел", "«Инквизитор»", "от гнили", "его Погребальный пепел", "Маяки гнили", "", "сжечь его", "Сжигание гнили", "Маяки гнили", "Погребальный пепел достигает {label.tokensCount}", "представлены", "Инквизиторов" ]
                                                    },{
                                                        EN:[ "the Druids", "a Druid", "the Druid Hero", "Stop the Corruption", "Reach {label.tokensCount} Sacred Sap", "Sacred Sap", "the \"Druid\"", "from the corruption", "their Sacred Sap", "the Corruption Beacons", "", "drain it", "Stopping the Corruption", "Corruption Beacons", "Sacred Sap reaches {label.tokensCount}", "представлены", "of the Druids" ],
                                                        RU:[ "Друиды", "Друид", "герой Друид", "Остановить порчу", "Достичь {label.tokensCount} священного сока", "Священный сок", "«Друид»", "от порчи", "его Священный сок", "Маяки порчи", "", "осушить его", "Остановка порчи", "Маяки порчи", "Священный сок достигает {label.tokensCount}", "представлены", "Друидов" ]
                                                    }
                                                ],
                                                forWho:[
                                                    {
                                                        EN:[ "Ordinary soldiers cannot stop {label.outbreak@1}," ],
                                                        RU:[ "Обычные солдаты не могут остановить {label.outbreak@1}," ]
                                                    },{
                                                        EN:[ "Most who try fall sick within a day," ],
                                                        RU:[ "Большинство тех, кто пытается, заболевают через сутки," ]
                                                    },{
                                                        EN:[ "Few have the constitution to face {label.outbreak@1}," ],
                                                        RU:[ "Немногие имеют силы противостоять {label.outbreak@1}," ]
                                                    }
                                                ],
                                                why:[
                                                    {
                                                        EN:[ "for the touch of it eats them from within." ],
                                                        RU:[ "ибо её прикосновение пожирает их изнутри." ]
                                                    },{
                                                        EN:[ "for the sickness binds them to its will." ],
                                                        RU:[ "ибо хворь подчиняет их своей воле." ]
                                                    },{
                                                        EN:[ "for it spreads faster than blade or fire can stop it." ],
                                                        RU:[ "ибо она распространяется быстрее, чем её могут остановить клинок или огонь." ]
                                                    }
                                                ],
                                                luck1:[
                                                    {
                                                        EN:[ "Luckily, the party has {label.cleanser@1} among them," ],
                                                        RU:[ "К счастью, в отряде есть {label.cleanser@1}," ]
                                                    },{
                                                        EN:[ "But {label.cleanser@1} stands ready in the party," ],
                                                        RU:[ "Но в отряде наготове {label.cleanser@1}," ]
                                                    },{
                                                        EN:[ "{label.cleanser:capital@1} has joined the company," ],
                                                        RU:[ "{label.cleanser:capital@1} присоединился к отряду," ]
                                                    }
                                                ],
                                                luck2:[
                                                    {
                                                        EN:[ "and only {label.cleanser@0} can collect what is needed to cleanse the land." ],
                                                        RU:[ "и только {label.cleanser@0} могут собрать то, что нужно для очищения земли." ]
                                                    },{
                                                        EN:[ "and {label.cleanser@0} know how to draw the sickness out of slain enemies." ],
                                                        RU:[ "и {label.cleanser@0} знают, как извлечь хворь из убитых врагов." ]
                                                    },{
                                                        EN:[ "and {label.cleanser@0} bind the sickness to themselves with every kill made in shadow." ],
                                                        RU:[ "и {label.cleanser@0} связывают хворь с собой каждым убийством, совершённым в тени." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                tokensCount:[
                                                    {
                                                        EN:[ 7 ],
                                                        RU:[ 7 ]
                                                    }
                                                ],
                                                roundLimit:[
                                                    {
                                                        EN:[ 7 ],
                                                        RU:[ 7 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cleanser:capital@3}",
                                            RU:"{label.cleanser:capital@3}"
                                        },{
                                            EN:"{label.cleanser:capital@0}",
                                            RU:"{label.cleanser:capital@0}"
                                        },{
                                            EN:"{label.cleanser:capital@5}",
                                            RU:"{label.cleanser:capital@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.outbreak@0} {label.forWho@0} {label.why@0} {label.luck1@0} {label.luck2@0}",
                                            RU:"{label.outbreak@0} {label.forWho@0} {label.why@0} {label.luck1@0} {label.luck2@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.cleanser@3}",
                                                        RU:"{label.cleanser@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"{label.cleanser@4}",
                                                        RU:"{label.cleanser@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cleanser:capital@5}",
                                                        RU:"{label.cleanser:capital@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Choose a Hero to be {label.cleanser@6}. They can extract the corruption {label.cleanser@7}. Every time any Hero kills a Leader or a Roaming Monster that is in a Shadow Zone, {label.cleanser@2} takes 1 Wound and advances {label.cleanser@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        RU:"Выберите героя, который будет {label.cleanser@6}. Он может извлекать порчу {label.cleanser@7}. Каждый раз, когда любой герой убивает предводителя или блуждающего монстра в зоне тени, {label.cleanser@2} получает 1 рану и продвигает {label.cleanser@8} на 1 (поместите 1 жетон {symbol.corruptionToken} на его карту героя)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cleanser@13}",
                                                        RU:"{label.cleanser@13}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"{label.cleanser:capital@9} are {label.cleanser@15} by Objective tokens. When standing in a Zone with an Objective token, {label.cleanser@2} may spend 1 action to {label.cleanser@11}. It removes the Objective token from the Dungeon, takes 1 Wound, and advances {label.cleanser@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        RU:"{label.cleanser:capital@9} {label.cleanser@15} жетонами цели. Находясь в зоне с жетоном цели, {label.cleanser@2} может потратить 1 действие, чтобы {label.cleanser@11}. Он удаляет жетон цели из подземелья, получает 1 рану и продвигает {label.cleanser@8} на 1 (поместите 1 жетон {symbol.corruptionToken} на его карту героя)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cleanser@12}",
                                                        RU:"{label.cleanser@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"As soon as {label.cleanser@2} has {label.tokensCount@0} {symbol.corruptionToken} tokens ({label.cleanser@14}), {label.questVictory@0}.",
                                                        RU:"Как только {label.cleanser@2} имеет {label.tokensCount@0} жетонов {symbol.corruptionToken} ({label.cleanser@14}), {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode:[ "targetsSmall" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size:[ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio:[ "default" ],
                                            corridors:[ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "roundLimit", "visitAllRooms" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    EN:"Eliminate {boss.bossBadName@0}, source of {label.cleanser@16}",
                                                    RU:"Устранить {boss.bossBadName@0}, источник хвори {label.cleanser@16}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            EN:"<p>{label.cleanser:capital@2} discards all {symbol.corruptionToken} tokens and no longer extracts the corruption {label.cleanser@7}.</p>",
                                            RU:"<p>{label.cleanser:capital@2} сбрасывает все жетоны {symbol.corruptionToken} и больше не извлекает порчу {label.cleanser@7}.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        },

                        // ============================================================
                        // 5. THE CURSED WEAPONS — armorToBoss
                        // ============================================================
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"armorToBoss",
                            objective:{
                                EN:"Collect cursed weapons, defeat the warden, and reach the exit Zone to win.",
                                RU:"Соберите проклятое оружие, победите надзирателя и достигните зоны выхода, чтобы победить."
                            },
                            by:{
                                EN:"Original quest: The Cursed Weapons",
                                RU:"Оригинальное задание: Проклятое оружие"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                desperation:[
                                                    {
                                                        EN:[ "Steel does not bite this foe." ],
                                                        RU:[ "Сталь не берёт этого врага." ]
                                                    },{
                                                        EN:[ "Common blades shatter on its hide." ],
                                                        RU:[ "Обычные клинки ломаются о его шкуру." ]
                                                    },{
                                                        EN:[ "Our finest weapons are dust against it." ],
                                                        RU:[ "Наше лучшее оружие — лишь пыль против него." ]
                                                    }
                                                ],
                                                grim:[
                                                    {
                                                        EN:[ "Hope has thinned to a single thread:" ],
                                                        RU:[ "Надежда истончилась до единственной нити:" ]
                                                    },{
                                                        EN:[ "Only one chance remains:" ],
                                                        RU:[ "Остался лишь один шанс:" ]
                                                    },{
                                                        EN:[ "There is one last path:" ],
                                                        RU:[ "Есть последний путь:" ]
                                                    }
                                                ],
                                                lastHope:[
                                                    {
                                                        EN:[ "we must recover {label.cursed@0}" ],
                                                        RU:[ "мы должны вернуть {label.cursed@0}" ]
                                                    },{
                                                        EN:[ "we must claim {label.cursed@0}" ],
                                                        RU:[ "мы должны забрать {label.cursed@0}" ]
                                                    },{
                                                        EN:[ "we must take up {label.cursed@0}" ],
                                                        RU:[ "мы должны взять {label.cursed@0}" ]
                                                    }
                                                ],
                                                cursed:[
                                                    {
                                                        EN:[ "the cursed armaments of the Damned", "the armaments", "of the Damned Set", "from the Damned Set", "the Damned Set", "piece of armament" ],
                                                        RU:[ "проклятое оружие Проклятых", "оружие", "из набора Проклятых", "из набора Проклятых", "набор Проклятых", "часть оружия" ]
                                                    },{
                                                        EN:[ "the cursed weapons of the Forsworn", "the weapons", "of the Forsworn Set", "from the Forsworn Set", "the Forsworn Set", "piece of weaponry" ],
                                                        RU:[ "проклятое оружие Отступников", "оружие", "из набора Отступников", "из набора Отступников", "набор Отступников", "часть оружия" ]
                                                    },{
                                                        EN:[ "the cursed arsenal of the Pale Hand", "the arsenal", "of the Pale Hand Set", "from the Pale Hand Set", "the Pale Hand Set", "piece of arsenal" ],
                                                        RU:[ "проклятый арсенал Бледной руки", "арсенал", "из набора Бледной руки", "из набора Бледной руки", "набор Бледной руки", "часть арсенала" ]
                                                    }
                                                ],
                                                chosenOne:[
                                                    {
                                                        EN:[ "the Cursed Wielder", "the Cursed Wielder receives" ],
                                                        RU:[ "Проклятый владелец", "Проклятый владелец получает" ]
                                                    },{
                                                        EN:[ "the Bound Hand", "the Bound Hand receives" ],
                                                        RU:[ "Связанная рука", "Связанная рука получает" ]
                                                    },{
                                                        EN:[ "the Doomed One", "the Doomed One receives" ],
                                                        RU:[ "Обречённый", "Обречённый получает" ]
                                                    }
                                                ],
                                                warden:[
                                                    {
                                                        EN:[ "the Warden of Bones", "the Warden", "is brought down" ],
                                                        RU:[ "Костяной надзиратель", "Надзиратель", "повержен" ]
                                                    },{
                                                        EN:[ "the Pale Sentinel", "the Sentinel", "is brought down" ],
                                                        RU:[ "Бледный страж", "Страж", "повержен" ]
                                                    },{
                                                        EN:[ "the Cursed Watcher", "the Watcher", "is brought down" ],
                                                        RU:[ "Проклятый наблюдатель", "Наблюдатель", "повержен" ]
                                                    }
                                                ],
                                                vault:[
                                                    {
                                                        EN:[ "from the boneyard", "the boneyard's gate" ],
                                                        RU:[ "из костяного двора", "врата костяного двора" ]
                                                    },{
                                                        EN:[ "from the forsworn crypt", "the crypt entrance" ],
                                                        RU:[ "из крипты отступников", "вход в крипту" ]
                                                    },{
                                                        EN:[ "from the pale vault", "the vault gate" ],
                                                        RU:[ "из бледного хранилища", "врата хранилища" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cursed:capital@4}",
                                            RU:"{label.cursed:capital@4}"
                                        },{
                                            EN:"{label.chosenOne:capital@0}",
                                            RU:"{label.chosenOne:capital@0}"
                                        },{
                                            EN:"{label.vault:capital@1}",
                                            RU:"{label.vault:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.desperation@0} {label.grim@0} {label.lastHope@0}.",
                                            RU:"{label.desperation@0} {label.grim@0} {label.lastHope@0}."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.cursed:capital@4}",
                                                        RU:"{label.cursed:capital@4}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Recover {label.cursed@1} {label.vault@0}",
                                                        RU:"Заберите {label.cursed@1} {label.vault@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Eliminate {label.warden@1}",
                                                        RU:"Устранить {label.warden@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Kill {label.warden@0}",
                                                        RU:"Убить {label.warden@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Exit the dungeon",
                                                        RU:"Выйти из подземелья"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Hardened Foes",
                                                        RU:"Закалённые враги"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Leaders also roll a {symbol.blackDie} when attacking or defending. Roaming Monsters gain +1 {symbol.blackDie} on attacking or defending for every 2 players. (1-2 Players: +1 {symbol.blackDie} , 3-4 players: +2 {symbol.blackDie} , 5-6 players: +3 {symbol.blackDie})",
                                                        RU:"Командиры также бросают {symbol.blackDie} при атаке или защите. Блуждающие монстры получают +1 {symbol.blackDie} при атаке или защите за каждые 2 игроков. (1-2 игрока: +1 {symbol.blackDie}, 3-4 игрока: +2 {symbol.blackDie}, 5-6 игроков: +3 {symbol.blackDie})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.chosenOne:capital@0}",
                                                        RU:"{label.chosenOne:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Select one of the Heroes to be {label.chosenOne@0}. If {label.chosenOne@0} is KO'd, the Mission immediately ends in defeat.<p>Search the Rare and Epic Treasure decks and remove every {label.cursed@5} {label.cursed@2}, then set them aside.</p>",
                                                        RU:"Выберите одного из героев, который будет {label.chosenOne@0}. Если {label.chosenOne@0} получит нокаут, миссия немедленно заканчивается поражением.<p>Просмотрите колоды Редких и Эпических Сокровищ и уберите каждую {label.cursed@5} {label.cursed@2}, отложив их в сторону.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Key",
                                                        RU:"Ключ"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The door marked with a red outline represents {label.vault@1} and cannot be opened unless the Heroes grab the key represented by the color-side-up Objective token. Heroes may collect the key using 1 MP. Treat the color-side-up Objective token as an equipment card for the purpose of trading.",
                                                        RU:"Дверь, отмеченная красным контуром, представляет {label.vault@1} и не может быть открыта, пока герои не возьмут ключ, обозначенный жетоном цели цветной стороной вверх. Герои могут поднять ключ, используя 1 ОД. Считайте жетон цели цветной стороной вверх картой снаряжения при обмене."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Door",
                                                        RU:"Дверь"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"A Hero with the key may open the door marked with a red outline using 1 MP. Do not draw a Door card for that Chamber. Once that door is opened, replace the Corruption token {symbol.corruptionToken} with a Level 5 Roaming Monster and flip the gray Objective token on the {tileLabel.fourth} Tile to its color side up. All Heroes immediately receive 2 {symbol.frostToken}.",
                                                        RU:"Герой с ключом может открыть дверь, отмеченную красным контуром, используя 1 ОД. Не берите карту Двери для этой комнаты. Когда дверь открыта, замените жетон порчи {symbol.corruptionToken} на блуждающего монстра 5 уровня и переверните серый жетон цели на плитке {tileLabel.fourth} цветной стороной вверх. Все герои немедленно получают 2 {symbol.frostToken}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.cursed:capital@4}",
                                                        RU:"{label.cursed:capital@4}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"If any Hero is in the same Zone as the color-side-up Objective token on the {tileLabel.fourth} Tile, remove that token from the game and {label.chosenOne@1} every {label.cursed@5} {label.cursed@3} and its respective class weapon. He or she may organize the inventory for free.",
                                                        RU:"Если любой герой находится в той же зоне, что и жетон цели цветной стороной вверх на плитке {tileLabel.fourth}, удалите этот жетон из игры и {label.chosenOne@1} каждую {label.cursed@5} {label.cursed@3} и соответствующее классовое оружие. Он или она может организовать инвентарь бесплатно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.warden:capital@0}",
                                                        RU:"{label.warden:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"After {label.chosenOne@0} receives {label.cursed@4}, flip the remaining gray Objective token on the {tileLabel.fifth} Tile to its color side up and spawn a Roaming Monster in its Zone: this is {label.warden@0}.<p>{label.warden:capital@0} is a Level 5 Roaming Monster with +15 Life Points. It also receives a +2 {symbol.sword} when attacking and a +3 {symbol.shield} when defending. {label.warden:capital@0} also activates twice during the Enemy Phase.</p>",
                                                        RU:"После того, как {label.chosenOne@0} получает {label.cursed@4}, переверните оставшийся серый жетон цели на плитке {tileLabel.fifth} цветной стороной вверх и заспаунте блуждающего монстра в его зоне: это {label.warden@0}.<p>{label.warden:capital@0} — блуждающий монстр 5 уровня с +15 очков жизни. Он также получает +2 {symbol.sword} при атаке и +3 {symbol.shield} при защите. {label.warden:capital@0} также активируется дважды в Фазе врагов.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once {label.warden@0} {label.warden@2} and every Hero is in the Zone of the color-side-up Objective token on the {tileLabel.fifth} Tile with no enemies in that Zone, {label.questVictory@0}.",
                                                        RU:"Когда {label.warden@0} {label.warden@2}, и каждый герой находится в зоне жетона цели цветной стороной вверх на плитке {tileLabel.fifth}, и в этой зоне нет врагов, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "armorToBoss" ],
                                            gameMode:[ "armorToBoss" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size:[ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio:[ "default" ],
                                            corridors:[ "armorToBoss" ]
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    EN:"Eliminate {boss.bossBadName@0}, keeper {label.cursed@2}",
                                                    RU:"Устраните {boss.bossBadName@0}, хранителя {label.cursed@2}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            RU:"<p>Уберите все жетоны цели из инвентарей героев.</p>"
                                        },
                                        levelByTilesCount:{
                                            3:1,
                                            4:2,
                                            5:3,
                                            6:4
                                        }
                                    }
                                }
                            ]
                        }

                    ]
                }
            ]
        }
    ];

});
