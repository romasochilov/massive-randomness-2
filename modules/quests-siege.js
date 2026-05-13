ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                EN:[ "the ritual completes", "complete the ritual" ],
                RU:[ "ритуал завершается", "завершить ритуал" ]
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
            id:"quests-siege",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-siege", "untranslated-it", "untranslated-fr" ],
            label:{
                EN:"Survival siege quest — Awakening of the Ancient",
                RU:"Задание на выживание — Пробуждение Древнего"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"towerDefense",
                            objective:{
                                EN:"Hold the ritual circle for several rounds against escalating waves of enemies.",
                                RU:"Удерживайте ритуальный круг несколько раундов от нарастающих волн врагов."
                            },
                            by:{
                                EN:"Original quest: Awakening of the Ancient",
                                RU:"Оригинальное задание: Пробуждение Древнего"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                ancient:[
                                                    {
                                                        EN:[ "the Dormant Titan", "the slumbering Titan", "Titan", "stone-skinned giant", "carved monolith", "the Titan's awakening", "stir from its stone sleep" ],
                                                        RU:[ "Спящий Титан", "дремлющий Титан", "Титан", "каменнокожий великан", "высеченный монолит", "пробуждение Титана", "пробудиться от каменного сна" ]
                                                    },{
                                                        EN:[ "the Sealed Archmage", "the entombed Archmage", "Archmage", "shrouded warlock", "sealed sarcophagus", "the Archmage's return", "rise from his sealed tomb" ],
                                                        RU:[ "Запечатанный Архимаг", "погребённый Архимаг", "Архимаг", "укутанный чародей", "запечатанный саркофаг", "возвращение Архимага", "восстать из запечатанной гробницы" ]
                                                    },{
                                                        EN:[ "the Old World Gateway", "the dormant Gateway", "Gateway", "veiled rift", "etched archway", "the Gateway's opening", "tear open to the Old World" ],
                                                        RU:[ "Врата Старого Мира", "дремлющие Врата", "Врата", "сокрытый разлом", "вырезанная арка", "открытие Врат", "распахнуться к Старому Миру" ]
                                                    }
                                                ],
                                                ritual:[
                                                    {
                                                        EN:[ "the ritual of awakening", "Awakening Rite", "the ritual focus", "the runestone at the heart of the circle", "the etched runestone" ],
                                                        RU:[ "ритуал пробуждения", "Обряд Пробуждения", "ритуальный фокус", "руноcтоун в сердце круга", "вырезанный руностоун" ]
                                                    },{
                                                        EN:[ "the unsealing ritual", "Unsealing Rite", "the ritual relic", "the silver sigil on the floor", "the engraved silver sigil" ],
                                                        RU:[ "ритуал распечатывания", "Обряд Распечатывания", "ритуальная реликвия", "серебряная сигила на полу", "выгравированная серебряная сигила" ]
                                                    },{
                                                        EN:[ "the opening ritual", "Opening Rite", "the ritual anchor", "the crystal anchor in the middle of the chamber", "the resonating crystal anchor" ],
                                                        RU:[ "ритуал открытия", "Обряд Открытия", "ритуальный якорь", "кристалл-якорь посреди комнаты", "резонирующий кристалл-якорь" ]
                                                    }
                                                ],
                                                threat:[
                                                    {
                                                        EN:[ "the Dark legions", "shadowed legions", "warbands of the Dark", "the legions sense the stirring stone and march in to silence it" ],
                                                        RU:[ "Тёмные легионы", "теневые легионы", "отряды Тьмы", "легионы чувствуют шевелящийся камень и идут заглушить его" ]
                                                    },{
                                                        EN:[ "the cult of silence", "the silencing cult", "the cult bound to the seal", "the cult that bound the tomb will not see it opened" ],
                                                        RU:[ "культ молчания", "молчащий культ", "культ, связанный с печатью", "культ, запечатавший гробницу, не позволит её вскрыть" ]
                                                    },{
                                                        EN:[ "the wardens of the rift", "the rift wardens", "the wardens watching the veil", "the wardens that guard the veil will not let it be torn" ],
                                                        RU:[ "стражи разлома", "стражи у разлома", "стражи, охраняющие завесу", "стражи, охраняющие завесу, не дадут её разорвать" ]
                                                    }
                                                ],
                                                discovery:[
                                                    {
                                                        EN:[ "Deep beneath a forgotten ruin, the heroes uncover {label.ancient@0}." ],
                                                        RU:[ "Глубоко под забытыми руинами герои находят {label.ancient@0}." ]
                                                    },{
                                                        EN:[ "In the heart of the catacombs, the heroes stumble upon {label.ancient@0}." ],
                                                        RU:[ "В сердце катакомб герои натыкаются на {label.ancient@0}." ]
                                                    },{
                                                        EN:[ "Within the hidden vault, the heroes finally find {label.ancient@0}." ],
                                                        RU:[ "В тайном склепе герои наконец находят {label.ancient@0}." ]
                                                    }
                                                ],
                                                prepare:[
                                                    {
                                                        EN:[ "They mark {label.ritual@3} and begin {label.ritual@0}." ],
                                                        RU:[ "Они отмечают {label.ritual@3} и начинают {label.ritual@0}." ]
                                                    },{
                                                        EN:[ "They surround {label.ritual@3} and set {label.ritual@0} in motion." ],
                                                        RU:[ "Они окружают {label.ritual@3} и запускают {label.ritual@0}." ]
                                                    },{
                                                        EN:[ "They prime {label.ritual@3} and chant {label.ritual@0} into being." ],
                                                        RU:[ "Они подготавливают {label.ritual@3} и читают слова {label.ritual@0}." ]
                                                    }
                                                ],
                                                alarm:[
                                                    {
                                                        EN:[ "But the chant carries far, and {label.threat@3}." ],
                                                        RU:[ "Но напев слышен далеко, и {label.threat@3}." ]
                                                    },{
                                                        EN:[ "But the air shudders, and {label.threat@3}." ],
                                                        RU:[ "Но воздух дрожит, и {label.threat@3}." ]
                                                    },{
                                                        EN:[ "But something in the deep hears the words, and {label.threat@3}." ],
                                                        RU:[ "Но что-то в глубине слышит слова, и {label.threat@3}." ]
                                                    }
                                                ],
                                                hold:[
                                                    {
                                                        EN:[ "Now the heroes must hold the circle until {label.ancient@5}." ],
                                                        RU:[ "Теперь героям нужно удерживать круг, пока не произойдёт {label.ancient@5}." ]
                                                    },{
                                                        EN:[ "They have one task left: defend {label.ritual@2} until {label.ancient@5}." ],
                                                        RU:[ "У них осталась одна задача: защищать {label.ritual@2}, пока не произойдёт {label.ancient@5}." ]
                                                    },{
                                                        EN:[ "There is no retreat — they must stand over {label.ritual@2} until {label.ancient@5}." ],
                                                        RU:[ "Отступать нельзя — они должны стоять над {label.ritual@2}, пока не произойдёт {label.ancient@5}." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                holdRounds:[
                                                    {
                                                        EN:[ "to keep {label.ritual@2} intact for the full duration of the ritual", "the ritual reaches its final round with {label.ritual@2} still standing" ],
                                                        RU:[ "сохранить {label.ritual@2} в целости на всём протяжении ритуала", "ритуал доходит до последнего раунда, а {label.ritual@2} всё ещё цел" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.ancient:capital@0}",
                                            RU:"{label.ancient:capital@0}"
                                        },{
                                            EN:"{label.ritual:capital@1}",
                                            RU:"{label.ritual:capital@1}"
                                        },{
                                            EN:"{label.threat:capital@0}",
                                            RU:"{label.threat:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.discovery@0} {label.prepare@0} {label.alarm@0} {label.hold@0}",
                                            RU:"{label.discovery@0} {label.prepare@0} {label.alarm@0} {label.hold@0}"
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
                                                        EN:"Protect {label.ritual@2}",
                                                        RU:"Защитить {label.ritual@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"If {label.ritual@2} (the Objective token on the colored side) is destroyed at any point, the Mission ends in defeat",
                                                        RU:"Если {label.ritual@2} (жетон цели цветной стороной вверх) уничтожен в любой момент, Миссия заканчивается поражением"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"Complete the ritual",
                                                        RU:"Завершить ритуал"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"Survive until the Darkness track reaches the final round with {label.ritual@2} intact to {label.questVictory@1}",
                                                        RU:"Продержитесь до последнего раунда трека Тьмы, сохранив {label.ritual@2}, чтобы {label.questVictory@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Special Preparation",
                                                        RU:"Специальная подготовка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Place an Objective token on the colored side in one of the Zones of the central Tile ({tileLabel.first}) — this is {label.ritual@2}, representing {label.ritual@3}. {label.ritual:capital@2} has 6 Health."+
                                                        "<p>Generate 1 Horde on each of the 4 Portals. Place 1 Loot Token in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first}).</p>"+
                                                        "<p>Place Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 5th, 7th, and 9th spaces of the Darkness track.</p>",
                                                        RU:"Поместите жетон цели цветной стороной вверх в одну из зон центральной плитки ({tileLabel.first}) — это {label.ritual@2}, представляющий {label.ritual@3}. У {label.ritual@2} 6 здоровья."+
                                                        "<p>Создайте 1 Орду на каждом из 4 Порталов. Поместите 1 жетон добычи в каждую из зон комнат с не менее чем 1 Дверью центральной плитки ({tileLabel.first}).</p>"+
                                                        "<p>Поместите жетоны Порчи на 2-ю, 4-ю, 6-ю и 8-ю клетки трека Тьмы. Кроме того, поместите жетон Появления на 3-ю, 5-ю, 7-ю и 9-ю клетки трека Тьмы.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        EN:"Place an Objective token on the colored side in one of the Zones of the central Tile ({tileLabel.first}) — this is {label.ritual@2}, representing {label.ritual@3}. {label.ritual:capital@2} has 6 Health."+
                                                        "<p>Generate 1 Horde on each of the 4 Portals. Place 1 Loot Token in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first}).</p>"+
                                                        "<p>Place Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 5th, 7th, and 9th spaces of the Darkness track.</p>",
                                                        RU:"Поместите жетон цели цветной стороной вверх в одну из зон центральной плитки ({tileLabel.first}) — это {label.ritual@2}, представляющий {label.ritual@3}. У {label.ritual@2} 6 здоровья."+
                                                        "<p>Создайте 1 Орду на каждом из 4 Порталов. Поместите 1 жетон добычи в каждую из зон комнат с не менее чем 1 Дверью центральной плитки ({tileLabel.first}).</p>"+
                                                        "<p>Поместите жетоны Порчи на 2-ю, 4-ю, 6-ю и 8-ю клетки трека Тьмы. Кроме того, поместите жетон Появления на 3-ю, 5-ю, 7-ю и 9-ю клетки трека Тьмы.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Escalating Waves",
                                                        RU:"Нарастающие волны"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"For this Mission, ignore any spawns from the Darkness track. Instead, whenever the Darkness track reaches a space with a token, discard that token and resolve the corresponding effect:"+
                                                        "<ul>"+
                                                        "<li><b>Corruption Token:</b> Spawn 1 Roaming Monster on the Roaming Monster Portal. Then swap the location of the Roaming Monster Portal with the next Portal clockwise. The Roaming Monster Portal switches to the following tiles:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Spawn Token:</b> Spawn 1 Horde on each of the 4 Portals. Starting from round 5, also spawn 1 additional Roaming Monster of the current Darkness level on the Portal closest to {label.ritual@2}, representing reinforcements sent by {label.threat@2}.</li>"+
                                                        "</ul>",
                                                        RU:"Для этой Миссии игнорируйте любые появления с трека Тьмы. Вместо этого, всякий раз, когда трек Тьмы достигает клетки с жетоном, сбросьте этот жетон и разрешите соответствующий эффект:"+
                                                        "<ul>"+
                                                        "<li><b>Жетон Порчи:</b> Создайте 1 блуждающего монстра на портале блуждающих монстров. Затем поменяйте местами портал блуждающих монстров со следующим порталом по часовой стрелке. Портал блуждающих монстров переключается на следующие плитки:"+
                                                        "<ul>"+
                                                        "<li>Раунд 2: {tileLabel.second}</li>"+
                                                        "<li>Раунд 4: {tileLabel.third}</li>"+
                                                        "<li>Раунд 6: {tileLabel.fourth}</li>"+
                                                        "<li>Раунд 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Жетон Появления:</b> Создайте 1 Орду на каждом из 4 Порталов. Начиная с 5-го раунда, также создайте 1 дополнительного блуждающего монстра текущего уровня Тьмы на портале, ближайшем к {label.ritual@2} — это подкрепления, которые посылает {label.threat@2}.</li>"+
                                                        "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.ritual:capital@2}",
                                                        RU:"{label.ritual:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"The Objective token on the colored side is {label.ritual@2}. Enemies target {label.ritual@2} as if they were targeting Heroes, and it has 6 Health. Whenever an Enemy attacks {label.ritual@2}, do not roll dice as in regular combat. Instead, inflict 1 Wound on it. {label.ritual:capital@2} cannot be moved, healed, or targeted by Hero abilities."+
                                                        "<p>If {label.ritual@2} reaches 0 Health, it is destroyed and the Mission ends in defeat.</p>",
                                                        RU:"Жетон цели цветной стороной вверх — это {label.ritual@2}. Враги нацеливаются на {label.ritual@2}, как если бы они нацеливались на героев, и у него 6 здоровья. Всякий раз, когда враг атакует {label.ritual@2}, не бросайте кости, как в обычном бою. Вместо этого нанесите ему 1 Рану. {label.ritual:capital@2} нельзя переместить, исцелить или сделать целью способностей героев."+
                                                        "<p>Если у {label.ritual@2} остаётся 0 здоровья, он уничтожен и Миссия заканчивается поражением.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"Enemy Behavior",
                                                        RU:"Поведение врагов"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"In this Mission, instead of the regular activation, all Enemies, including Roaming Monsters, must follow a different behavior. They perform 2 actions. For each action, check the following conditions. If the first one is met, perform that one. Otherwise, move on to the next condition until one is satisfied."+
                                                        "<ul>"+
                                                        "<li><b>If the Enemy is in the same Zone as {label.ritual@2}:</b> The Enemy attacks {label.ritual@2}, inflicting 1 Wound on it.</li>"+
                                                        "<li><b>If there is at least 1 Hero between the Enemy and {label.ritual@2}:</b> The Enemy treats the closest Hero as its target to attack or move.</li>"+
                                                        "<li><b>Otherwise:</b> The Enemy moves 1 Zone toward {label.ritual@2}.</li>"+
                                                        "</ul>",
                                                        RU:"В этой Миссии вместо обычной активации все враги, включая блуждающих монстров, должны следовать другому поведению. Они совершают 2 действия. Для каждого действия проверьте следующие условия. Если первое выполняется, выполните его. Иначе переходите к следующему условию, пока одно не будет удовлетворено."+
                                                        "<ul>"+
                                                        "<li><b>Если враг находится в одной зоне с {label.ritual@2}:</b> Враг атакует {label.ritual@2}, нанося ему 1 Рану.</li>"+
                                                        "<li><b>Если между врагом и {label.ritual@2} есть хотя бы 1 герой:</b> Враг считает ближайшего героя своей целью для атаки или перемещения.</li>"+
                                                        "<li><b>Иначе:</b> Враг перемещается на 1 зону к {label.ritual@2}.</li>"+
                                                        "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"No Extra Reinforcement",
                                                        RU:"Никаких дополнительных подкреплений"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        EN:"Ignore any Enemy abilities or effects that generate extra Mobs or extra Roaming Monsters.",
                                                        RU:"Игнорируйте любые способности или эффекты врагов, которые создают дополнительные Орды или дополнительных блуждающих монстров."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode:[ "towerDefense" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size:[ "none" ],
                                            bridges:[ "none" ],
                                            corridors:[ "towerDefense" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "holdRounds" ]
                                                    ]
                                                }
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
                                                    EN:"Defeat the Warlord of {label.threat@0}",
                                                    RU:"Победить полководца {label.threat@0}"
                                                },
                                                summary:{
                                                    EN:"Eliminate {boss.bossBadName@0} to break the siege and {label.questVictory@1}",
                                                    RU:"Устраните {boss.bossBadName@0}, чтобы прорвать осаду и {label.questVictory@1}"
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
