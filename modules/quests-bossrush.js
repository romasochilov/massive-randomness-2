ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                EN:[ "all the lords have fallen", "defeat all the lords" ],
                RU:[ "все владыки повержены", "победить всех владык" ]
            }
        ],
        BOSSBEAT = [
            {
                EN:[ "it is eliminated", "it is eliminated" ],
                RU:[ "он устранён", "он устранён" ]
            }
        ];

    return [
        {
            id:"quests-bossrush",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-bossrush", "untranslated-it", "untranslated-fr" ],
            label:{
                EN:"Boss Rush — Throne of Darkness",
                RU:"Битва владык — Тёмный трон"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"finalBoss",
                            by:{
                                EN:"Original quest: Throne of Darkness",
                                RU:"Оригинальное задание: Тёмный трон"
                            },
                            objective:{
                                EN:"Defeat each boss in turn until the throne falls.",
                                RU:"Победите каждого босса по очереди, пока трон не падёт."
                            },
                            suggestedTilesCount:5,
                            versions:[
                                // VARIANT 1: 2 bosses
                                {
                                    labels:[
                                        [
                                            {
                                                sanctum:[
                                                    {
                                                        EN:[ "the Throne Room", "the throne", "throne", "Throne of Darkness" ],
                                                        RU:[ "Тронный зал", "трон", "трон", "Тёмный трон" ]
                                                    },{
                                                        EN:[ "the Inner Sanctum", "the inner sanctum", "sanctum", "Sanctum of Shadows" ],
                                                        RU:[ "Внутреннее святилище", "внутреннее святилище", "святилище", "Святилище теней" ]
                                                    },{
                                                        EN:[ "the Forbidden Vault", "the vault", "vault", "Vault of the Damned" ],
                                                        RU:[ "Запретное хранилище", "хранилище", "хранилище", "Хранилище проклятых" ]
                                                    }
                                                ],
                                                lords:[
                                                    {
                                                        EN:[ "the lords of darkness", "lord of darkness", "two lords", "two", "Two" ],
                                                        RU:[ "владыки тьмы", "владыка тьмы", "двое владык", "два", "Двое" ]
                                                    },{
                                                        EN:[ "the dread champions", "dread champion", "two champions", "two", "Two" ],
                                                        RU:[ "грозные защитники", "грозный защитник", "два защитника", "два", "Двое" ]
                                                    },{
                                                        EN:[ "the shadow tyrants", "shadow tyrant", "two tyrants", "two", "Two" ],
                                                        RU:[ "теневые тираны", "теневой тиран", "два тирана", "два", "Двое" ]
                                                    }
                                                ],
                                                intro:[
                                                    {
                                                        EN:[ "Heroes have breached" ],
                                                        RU:[ "Герои прорвались в" ]
                                                    },{
                                                        EN:[ "At last, the Heroes set foot in" ],
                                                        RU:[ "Наконец герои ступили в" ]
                                                    },{
                                                        EN:[ "The Heroes have reached" ],
                                                        RU:[ "Герои достигли" ]
                                                    }
                                                ],
                                                rise:[
                                                    {
                                                        EN:[ "one by one, {label.lords@0} will rise to challenge them" ],
                                                        RU:[ "один за другим, {label.lords@0} восстанут, чтобы бросить им вызов" ]
                                                    },{
                                                        EN:[ "{label.lords@0} await, ready to fall upon the Heroes in turn" ],
                                                        RU:[ "{label.lords@0} ждут, готовые обрушиться на героев по очереди" ]
                                                    },{
                                                        EN:[ "{label.lords@0} stand guard and will face the Heroes one after another" ],
                                                        RU:[ "{label.lords@0} стоят на страже и встретят героев один за другим" ]
                                                    }
                                                ],
                                                count:[
                                                    {
                                                        EN:[ "{label.lords@2}", "{label.lords@4}", "2" ],
                                                        RU:[ "{label.lords@2}", "{label.lords@4}", "2" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.count:capital@1} of the Darkness",
                                            RU:"{label.count:capital@1} из тьмы"
                                        },{
                                            EN:"{label.sanctum:capital@3}",
                                            RU:"{label.sanctum:capital@3}"
                                        },{
                                            EN:"Twin Wrath",
                                            RU:"Двойной гнев"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.intro@0} {label.sanctum@0} of the dungeon. {label.count:capital@0} {label.lords@0} guard this place — {label.rise@0}. Heroes face {label.count@2} lords of darkness on this map.",
                                            RU:"{label.intro@0} {label.sanctum@0} подземелья. {label.count:capital@0} {label.lords@0} охраняют это место — {label.rise@0}. Герои сразятся с {label.count@2} владыками тьмы на этой карте."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели по порядку:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the First Lord",
                                                        RU:"Победить первого владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the first Boss in {label.sanctum@0}",
                                                        RU:"Уничтожить первого Босса в {label.sanctum@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Second Lord",
                                                        RU:"Победить второго владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the second Boss that rises after the first falls",
                                                        RU:"Уничтожить второго Босса, который восстанет после падения первого"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.count:capital@1} of {label.sanctum:capital@2}",
                                                        RU:"{label.count:capital@1} из {label.sanctum@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"This Mission features {label.count@2} bosses fought sequentially. Victory requires defeating all {label.count@2} of them. The Mission ends in defeat if all Heroes are KO'd.",
                                                        RU:"В этой миссии {label.count@2} босса, с которыми нужно сразиться по очереди. Победа требует победы над всеми {label.count@2} из них. Миссия заканчивается поражением, если все герои нокаутированы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #1 — The First Rises",
                                                        RU:"Босс #1 — Первый восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn a Level 5 Roaming Monster there: this is Boss #1, the first lord of darkness.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите блуждающего монстра 5 уровня туда: это Босс #1, первый владыка тьмы.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn {label.campaignBoss@0} there: this is Boss #1, the first lord of darkness.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите {label.campaignBoss@0} туда: это Босс #1, первый владыка тьмы.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #2 — The Final Lord",
                                                        RU:"Босс #2 — Последний владыка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #1 has been eliminated, immediately spawn Boss #2 — a new Level 5 Roaming Monster of a different type — in the {tileLabel.first} tile's furthest Zone from the Heroes. This is the final lord. When Boss #2 {label.bossBeat@0}, {label.questVictory@0}.",
                                                        RU:"После того как Босс #1 устранён, немедленно призовите Босса #2 — нового блуждающего монстра 5 уровня другого типа — на плитке {tileLabel.first} в самой дальней от героев зоне. Это последний владыка. Когда Босс #2 {label.bossBeat@0}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Throne Falls",
                                                        RU:"Трон падает"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"If all Heroes are KO'd at any point, the Mission ends in defeat. If all {label.count@2} bosses are defeated in turn, {label.questVictory@0}.",
                                                        RU:"Если все герои нокаутированы в любой момент, миссия завершается поражением. Если все {label.count@2} босса побеждены по очереди, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "chase" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "chase" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    EN:"Strike down the first lord of darkness: {boss.bossBadName@0}",
                                                    RU:"Сразить первого владыку тьмы: {boss.bossBadName@0}"
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
                                },
                                // VARIANT 2: 3 bosses
                                {
                                    labels:[
                                        [
                                            {
                                                sanctum:[
                                                    {
                                                        EN:[ "the Throne Room", "the throne", "throne", "Throne of Darkness" ],
                                                        RU:[ "Тронный зал", "трон", "трон", "Тёмный трон" ]
                                                    },{
                                                        EN:[ "the Inner Sanctum", "the inner sanctum", "sanctum", "Sanctum of Shadows" ],
                                                        RU:[ "Внутреннее святилище", "внутреннее святилище", "святилище", "Святилище теней" ]
                                                    },{
                                                        EN:[ "the Forbidden Vault", "the vault", "vault", "Vault of the Damned" ],
                                                        RU:[ "Запретное хранилище", "хранилище", "хранилище", "Хранилище проклятых" ]
                                                    }
                                                ],
                                                lords:[
                                                    {
                                                        EN:[ "the lords of darkness", "lord of darkness", "three lords", "three", "Triple" ],
                                                        RU:[ "владыки тьмы", "владыка тьмы", "трое владык", "три", "Тройная" ]
                                                    },{
                                                        EN:[ "the dread champions", "dread champion", "three champions", "three", "Triple" ],
                                                        RU:[ "грозные защитники", "грозный защитник", "три защитника", "три", "Тройная" ]
                                                    },{
                                                        EN:[ "the shadow tyrants", "shadow tyrant", "three tyrants", "three", "Triple" ],
                                                        RU:[ "теневые тираны", "теневой тиран", "три тирана", "три", "Тройная" ]
                                                    }
                                                ],
                                                intro:[
                                                    {
                                                        EN:[ "Heroes have breached" ],
                                                        RU:[ "Герои прорвались в" ]
                                                    },{
                                                        EN:[ "At last, the Heroes set foot in" ],
                                                        RU:[ "Наконец герои ступили в" ]
                                                    },{
                                                        EN:[ "The Heroes have reached" ],
                                                        RU:[ "Герои достигли" ]
                                                    }
                                                ],
                                                rise:[
                                                    {
                                                        EN:[ "one by one, {label.lords@0} will rise to challenge them" ],
                                                        RU:[ "один за другим, {label.lords@0} восстанут, чтобы бросить им вызов" ]
                                                    },{
                                                        EN:[ "{label.lords@0} await, ready to fall upon the Heroes in turn" ],
                                                        RU:[ "{label.lords@0} ждут, готовые обрушиться на героев по очереди" ]
                                                    },{
                                                        EN:[ "{label.lords@0} stand guard and will face the Heroes one after another" ],
                                                        RU:[ "{label.lords@0} стоят на страже и встретят героев один за другим" ]
                                                    }
                                                ],
                                                count:[
                                                    {
                                                        EN:[ "{label.lords@2}", "{label.lords@4}", "3" ],
                                                        RU:[ "{label.lords@2}", "{label.lords@4}", "3" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.count:capital@1} Threat",
                                            RU:"{label.count:capital@1} угроза"
                                        },{
                                            EN:"{label.sanctum:capital@3}",
                                            RU:"{label.sanctum:capital@3}"
                                        },{
                                            EN:"Three Lords Rising",
                                            RU:"Трое владык восстают"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.intro@0} {label.sanctum@0} of the dungeon. {label.count:capital@0} {label.lords@0} guard this place — {label.rise@0}. Heroes face {label.count@2} lords of darkness on this map.",
                                            RU:"{label.intro@0} {label.sanctum@0} подземелья. {label.count:capital@0} {label.lords@0} охраняют это место — {label.rise@0}. Герои сразятся с {label.count@2} владыками тьмы на этой карте."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели по порядку:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the First Lord",
                                                        RU:"Победить первого владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the first Boss in {label.sanctum@0}",
                                                        RU:"Уничтожить первого Босса в {label.sanctum@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Second Lord",
                                                        RU:"Победить второго владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the second Boss that rises after the first falls",
                                                        RU:"Уничтожить второго Босса, который восстанет после падения первого"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Third Lord",
                                                        RU:"Победить третьего владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the third and final Boss",
                                                        RU:"Уничтожить третьего и последнего Босса"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.count:capital@1} of {label.sanctum:capital@2}",
                                                        RU:"{label.count:capital@1} из {label.sanctum@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"This Mission features {label.count@2} bosses fought sequentially. Victory requires defeating all {label.count@2} of them. The Mission ends in defeat if all Heroes are KO'd.",
                                                        RU:"В этой миссии {label.count@2} босса, с которыми нужно сразиться по очереди. Победа требует победы над всеми {label.count@2} из них. Миссия заканчивается поражением, если все герои нокаутированы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #1 — The First Rises",
                                                        RU:"Босс #1 — Первый восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn a Level 5 Roaming Monster there: this is Boss #1.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите блуждающего монстра 5 уровня туда: это Босс #1.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn {label.campaignBoss@0} there: this is Boss #1.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите {label.campaignBoss@0} туда: это Босс #1.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #2 — The Second Rises",
                                                        RU:"Босс #2 — Второй восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #1 has been eliminated, immediately spawn Boss #2 — a new Level 5 Roaming Monster of a different type — in the {tileLabel.first} tile's furthest Zone from the Heroes. Heroes must defeat Boss #2 before the final lord appears.",
                                                        RU:"После того как Босс #1 устранён, немедленно призовите Босса #2 — нового блуждающего монстра 5 уровня другого типа — на плитке {tileLabel.first} в самой дальней от героев зоне. Герои должны победить Босса #2, прежде чем появится последний владыка."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #3 — The Final Lord",
                                                        RU:"Босс #3 — Последний владыка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #2 has been eliminated, immediately spawn Boss #3 — a new Level 5 Roaming Monster of yet a different type — in the {tileLabel.center} tile's central Zone. This is the final lord. When Boss #3 {label.bossBeat@0}, {label.questVictory@0}.",
                                                        RU:"После того как Босс #2 устранён, немедленно призовите Босса #3 — ещё одного блуждающего монстра 5 уровня другого типа — в центральной зоне плитки {tileLabel.center}. Это последний владыка. Когда Босс #3 {label.bossBeat@0}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Throne Falls",
                                                        RU:"Трон падает"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"If all Heroes are KO'd at any point, the Mission ends in defeat. If all {label.count@2} bosses are defeated in turn, {label.questVictory@0}.",
                                                        RU:"Если все герои нокаутированы в любой момент, миссия завершается поражением. Если все {label.count@2} босса побеждены по очереди, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "chase" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "chase" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    EN:"Strike down the first lord of darkness: {boss.bossBadName@0}",
                                                    RU:"Сразить первого владыку тьмы: {boss.bossBadName@0}"
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
                                },
                                // VARIANT 3: 4 bosses
                                {
                                    labels:[
                                        [
                                            {
                                                sanctum:[
                                                    {
                                                        EN:[ "the Throne Room", "the throne", "throne", "Throne of Darkness" ],
                                                        RU:[ "Тронный зал", "трон", "трон", "Тёмный трон" ]
                                                    },{
                                                        EN:[ "the Inner Sanctum", "the inner sanctum", "sanctum", "Sanctum of Shadows" ],
                                                        RU:[ "Внутреннее святилище", "внутреннее святилище", "святилище", "Святилище теней" ]
                                                    },{
                                                        EN:[ "the Forbidden Vault", "the vault", "vault", "Vault of the Damned" ],
                                                        RU:[ "Запретное хранилище", "хранилище", "хранилище", "Хранилище проклятых" ]
                                                    }
                                                ],
                                                lords:[
                                                    {
                                                        EN:[ "the lords of darkness", "lord of darkness", "four lords", "four", "Four" ],
                                                        RU:[ "владыки тьмы", "владыка тьмы", "четверо владык", "четыре", "Четыре" ]
                                                    },{
                                                        EN:[ "the dread champions", "dread champion", "four champions", "four", "Four" ],
                                                        RU:[ "грозные защитники", "грозный защитник", "четыре защитника", "четыре", "Четыре" ]
                                                    },{
                                                        EN:[ "the shadow tyrants", "shadow tyrant", "four tyrants", "four", "Four" ],
                                                        RU:[ "теневые тираны", "теневой тиран", "четыре тирана", "четыре", "Четыре" ]
                                                    }
                                                ],
                                                intro:[
                                                    {
                                                        EN:[ "Heroes have breached" ],
                                                        RU:[ "Герои прорвались в" ]
                                                    },{
                                                        EN:[ "At last, the Heroes set foot in" ],
                                                        RU:[ "Наконец герои ступили в" ]
                                                    },{
                                                        EN:[ "The Heroes have reached" ],
                                                        RU:[ "Герои достигли" ]
                                                    }
                                                ],
                                                rise:[
                                                    {
                                                        EN:[ "one by one, {label.lords@0} will rise to challenge them" ],
                                                        RU:[ "один за другим, {label.lords@0} восстанут, чтобы бросить им вызов" ]
                                                    },{
                                                        EN:[ "{label.lords@0} await, ready to fall upon the Heroes in turn" ],
                                                        RU:[ "{label.lords@0} ждут, готовые обрушиться на героев по очереди" ]
                                                    },{
                                                        EN:[ "{label.lords@0} stand guard and will face the Heroes one after another" ],
                                                        RU:[ "{label.lords@0} стоят на страже и встретят героев один за другим" ]
                                                    }
                                                ],
                                                count:[
                                                    {
                                                        EN:[ "{label.lords@2}", "{label.lords@4}", "4" ],
                                                        RU:[ "{label.lords@2}", "{label.lords@4}", "4" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.count:capital@1} Lords of Darkness",
                                            RU:"{label.count:capital@1} владыки тьмы"
                                        },{
                                            EN:"{label.sanctum:capital@3}",
                                            RU:"{label.sanctum:capital@3}"
                                        },{
                                            EN:"The Quartet of Shadows",
                                            RU:"Квартет теней"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.intro@0} {label.sanctum@0} of the dungeon. {label.count:capital@0} {label.lords@0} guard this place — {label.rise@0}. Heroes face {label.count@2} lords of darkness on this map.",
                                            RU:"{label.intro@0} {label.sanctum@0} подземелья. {label.count:capital@0} {label.lords@0} охраняют это место — {label.rise@0}. Герои сразятся с {label.count@2} владыками тьмы на этой карте."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели по порядку:"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the First Lord",
                                                        RU:"Победить первого владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the first Boss in {label.sanctum@0}",
                                                        RU:"Уничтожить первого Босса в {label.sanctum@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Second Lord",
                                                        RU:"Победить второго владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the second Boss that rises after the first falls",
                                                        RU:"Уничтожить второго Босса, который восстанет после падения первого"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Third Lord",
                                                        RU:"Победить третьего владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the third Boss",
                                                        RU:"Уничтожить третьего Босса"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Defeat the Fourth Lord",
                                                        RU:"Победить четвёртого владыку"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Eliminate the fourth and final Boss",
                                                        RU:"Уничтожить четвёртого и последнего Босса"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.count:capital@1} of {label.sanctum:capital@2}",
                                                        RU:"{label.count:capital@1} из {label.sanctum@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"This Mission features {label.count@2} bosses fought sequentially. Victory requires defeating all {label.count@2} of them. The Mission ends in defeat if all Heroes are KO'd.",
                                                        RU:"В этой миссии {label.count@2} босса, с которыми нужно сразиться по очереди. Победа требует победы над всеми {label.count@2} из них. Миссия заканчивается поражением, если все герои нокаутированы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #1 — The First Rises",
                                                        RU:"Босс #1 — Первый восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn a Level 5 Roaming Monster there: this is Boss #1.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите блуждающего монстра 5 уровня туда: это Босс #1.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"When the Heroes open the door with the red outline on the {tileLabel.center} tile, do not resolve the Door card. Remove the Corruption token {symbol.corruptionToken} in that Zone and spawn {label.campaignBoss@0} there: this is Boss #1.<p>Heroes must defeat Boss #1 before facing the next.</p>",
                                                        RU:"Когда герои открывают дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карту двери. Уберите жетон порчи {symbol.corruptionToken} в этой зоне и призовите {label.campaignBoss@0} туда: это Босс #1.<p>Герои должны победить Босса #1, прежде чем встретиться со следующим.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #2 — The Second Rises",
                                                        RU:"Босс #2 — Второй восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #1 has been eliminated, immediately spawn Boss #2 — a new Level 5 Roaming Monster of a different type — in the {tileLabel.first} tile's furthest Zone from the Heroes. Heroes must defeat Boss #2 before the next lord appears.",
                                                        RU:"После того как Босс #1 устранён, немедленно призовите Босса #2 — нового блуждающего монстра 5 уровня другого типа — на плитке {tileLabel.first} в самой дальней от героев зоне. Герои должны победить Босса #2, прежде чем появится следующий владыка."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #3 — The Third Rises",
                                                        RU:"Босс #3 — Третий восстаёт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #2 has been eliminated, immediately spawn Boss #3 — a new Level 5 Roaming Monster of yet a different type — in a corner Zone of the {tileLabel.center} tile. Heroes must defeat Boss #3 before the final lord appears.",
                                                        RU:"После того как Босс #2 устранён, немедленно призовите Босса #3 — ещё одного блуждающего монстра 5 уровня другого типа — в угловую зону плитки {tileLabel.center}. Герои должны победить Босса #3, прежде чем появится последний владыка."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Boss #4 — The Final Lord",
                                                        RU:"Босс #4 — Последний владыка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Once Boss #3 has been eliminated, immediately spawn Boss #4 — a new Level 5 Roaming Monster of a final, distinct type — in the central Zone of the {tileLabel.center} tile. This is the final lord. When Boss #4 {label.bossBeat@0}, {label.questVictory@0}.",
                                                        RU:"После того как Босс #3 устранён, немедленно призовите Босса #4 — нового блуждающего монстра 5 уровня последнего, особого типа — в центральную зону плитки {tileLabel.center}. Это последний владыка. Когда Босс #4 {label.bossBeat@0}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"The Throne Falls",
                                                        RU:"Трон падает"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"If all Heroes are KO'd at any point, the Mission ends in defeat. If all {label.count@2} bosses are defeated in turn, {label.questVictory@0}.",
                                                        RU:"Если все герои нокаутированы в любой момент, миссия завершается поражением. Если все {label.count@2} босса побеждены по очереди, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "chase" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "chase" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    EN:"Strike down the first lord of darkness: {boss.bossBadName@0}",
                                                    RU:"Сразить первого владыку тьмы: {boss.bossBadName@0}"
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
                        }
                    ]
                }
            ]
        }
    ];

});
