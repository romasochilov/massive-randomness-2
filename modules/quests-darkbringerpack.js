ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ],
                RU:[ "миссия заканчивается победой", "завершить миссию победой" ]
            }
        ],
        BOSSBEAT = [
            {
                IT:[ "viene eliminato", "viene eliminata" ],
                EN:[ "it is eliminated", "it is eliminated" ],
                RU:[ "он устранён", "она устранена" ]
            }
        ];

    return [
        {
            id:"quests-darkbringerpack",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-darkbringerpack", "untranslated-fr" ],
            label:{
                 EN:"MD2: Darkbringer Pack inspired quest models",
                 RU:"MD2: модели заданий, вдохновлённые набором Тёмного посланника"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"poisonousEnemies",
                            objective:{
                                EN:"Collect tokens to make the boss vulnerable and beat it to win.",
                                RU:"Соберите жетоны, чтобы сделать босса уязвимым, и победите его, чтобы выиграть."
                            },
                            by:{
                                IT:"Ispirato all'avventura di MD2 Darkbringer Pack \"The Scorpion King\"",
                                EN:"Inspired by the MD2 Darkbringer Pack quest \"The Scorpion King\"",
                                RU:"Вдохновлено заданием MD2 Darkbringer Pack «The Scorpion King»"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                guardian:[
                                                    {
                                                        IT:[ "il Guardiano", "dal Guardiano", "&egrave; stato corrotto", "affrontarlo", "fermarlo", "combatterlo" ],
                                                        EN:[ "the Guardian", "by the Guardian", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ],
                                                        RU:[ "Страж", "Стражем", "был испорчен", "столкнуться с ним", "остановить его", "сражаясь с ним", "сталкиваясь с ним" ]
                                                    },{
                                                        IT:[ "la Sentinella", "dalla Sentinella", "&egrave; stata corrotta", "affrontarla", "fermarla", "combatterla" ],
                                                        EN:[ "the Sentinel", "by the Sentinel", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ],
                                                        RU:[ "Часовой", "Часовым", "был испорчен", "столкнуться с ним", "остановить его", "сражаясь с ним", "сталкиваясь с ним" ]
                                                    },{
                                                        IT:[ "l'Oscuro", "dall'Oscuro", "&egrave; stato corrotto", "affrontarlo", "fermarlo", "combatterlo" ],
                                                        EN:[ "the Dark One", "by the Dark One", "has been corrupted", "face it", "stop it", "fighting it", "facing it" ],
                                                        RU:[ "Тёмный", "Тёмным", "был испорчен", "столкнуться с ним", "остановить его", "сражаясь с ним", "сталкиваясь с ним" ]
                                                    }
                                                ],
                                                corruption:[
                                                    {
                                                        IT:[ "{label.guardian@2} oltre oltre ogni limite dagli" ],
                                                        EN:[ "{label.guardian@2} beyond beyond all limits by the" ],
                                                        RU:[ "{label.guardian@2} за пределами всех границ" ]
                                                    },{
                                                        IT:[ "non ha resistito al controllo degli" ],
                                                        EN:[ "has not resisted the control of the" ],
                                                        RU:[ "не устоял перед контролем" ]
                                                    },{
                                                        IT:[ "&egrave; sotto il controllo degli" ],
                                                        EN:[ "is under the control of the" ],
                                                        RU:[ "находится под контролем" ]
                                                    }
                                                ],
                                                by:[
                                                    {
                                                        IT:[ "Inferi" ],
                                                        EN:[ "Underworld" ],
                                                        RU:[ "Преисподней" ]
                                                    },{
                                                        IT:[ "Abissi" ],
                                                        EN:[ "Deep" ],
                                                        RU:[ "Бездны" ]
                                                    },{
                                                        IT:[ "Arcani" ],
                                                        EN:[ "Arcane" ],
                                                        RU:[ "Тайных сил" ]
                                                    }
                                                ],
                                                then:[
                                                    {
                                                        IT:[ "e ha cominciato scatenarsi per tutto il Regno" ],
                                                        EN:[ "and it has begun to rage across the Kingdom" ],
                                                        RU:[ "и начал бушевать по всему Королевству" ]
                                                    },{
                                                        IT:[ "e la sua ira si sta abbattendo sull'intero Regno" ],
                                                        EN:[ "and its wrath is falling upon the entire Kingdom" ],
                                                        RU:[ "и его гнев обрушивается на всё Королевство" ]
                                                    },{
                                                        IT:[ "e sta colpendo senza piet&agrave; ogni regione del Regno" ],
                                                        EN:[ "and it is mercilessly striking every region of the Kingdom" ],
                                                        RU:[ "и беспощадно бьёт по каждому уголку Королевства" ]
                                                    }
                                                ],
                                                unstoppable:[
                                                    {
                                                        IT:[ "E' diventata una macchina inarrestabile..." ],
                                                        EN:[ "It has become an unstoppable machine..." ],
                                                        RU:[ "Он превратился в неудержимую машину..." ]
                                                    },{
                                                        IT:[ "Sembra non esserci alcun modo per {label.guardian@4}, ma forse..." ],
                                                        EN:[ "There seems to be no way to {label.guardian@4}, but maybe..." ],
                                                        RU:[ "Кажется, нет способа {label.guardian@4}, но, может быть..." ]
                                                    },{
                                                        IT:[ "Nessuno ha il coraggio di {label.guardian@3}. Ma gli Eroi non possono tirarsi indietro..." ],
                                                        EN:[ "No one is brave enough to {label.guardian@3}. But the Heroes cannot back down..." ],
                                                        RU:[ "Никто не отваживается {label.guardian@3}. Но герои не могут отступить..." ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "{label.guardian:capital@5} nella sua stessa tana", "Nella Sua Stessa Tana" ],
                                                        EN:[ "{label.guardian:capital@5} in his own lair", "Into the Lair" ],
                                                        RU:[ "{label.guardian:capital@5} в его собственном логове", "В Его Логово" ]
                                                    },{
                                                        IT:[ "{label.guardian:capital@3} nel suo stesso nascondiglio", "Nel Suo Stesso Nascondiglio" ],
                                                        EN:[ "{label.guardian:capital@6} in his own hideout", "Into the Hideout" ],
                                                        RU:[ "{label.guardian:capital@6} в его собственном укрытии", "В Его Укрытие" ]
                                                    },{
                                                        IT:[ "Un attacco diretto", "Un attacco diretto" ],
                                                        EN:[ "A direct attack", "A direct attack" ],
                                                        RU:[ "Прямая атака", "Прямая атака" ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "&egrave; l'unico modo per porre fine al suo dominio crudele" ],
                                                        EN:[ "is the only way to end his cruel rule" ],
                                                        RU:[ "это единственный способ положить конец его жестокому правлению" ]
                                                    },{
                                                        IT:[ "&egrave; l'unico modo per mettere la parola fine all'influsso mortale" ],
                                                        EN:[ "is the only way to put an end to the deadly influence" ],
                                                        RU:[ "это единственный способ покончить со смертоносным влиянием" ]
                                                    },{
                                                        IT:[ "&egrave; l'unica soluzione. Gli Eroi devono arginare la mal&igrave;a" ],
                                                        EN:[ "is the only solution. The Heroes must stem the evil" ],
                                                        RU:[ "это единственное решение. Герои должны остановить зло" ]
                                                    }
                                                ],
                                                effect2:[
                                                    {
                                                        IT:[ "che sta cominciando a corrompere le terre circostanti." ],
                                                        EN:[ "that is beginning to corrupt the surrounding lands." ],
                                                        RU:[ "которое начинает разлагать окрестные земли." ]
                                                    },{
                                                        IT:[ "che sta avvelenando giorno dopo giorno i cittadini." ],
                                                        EN:[ "that is poisoning the citizens day by day." ],
                                                        RU:[ "которое день за днём отравляет горожан." ]
                                                    },{
                                                        IT:[ "che sta flagellando la regione da fin troppo tempo." ],
                                                        EN:[ "that has been plaguing the region for far too long." ],
                                                        RU:[ "которое слишком долго терзает регион." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le Orde Corrotte", "eliminando {label.collectOptionalItems@3} Orde Corrotte", "{tokensCount.corruption}" ],
                                                        EN:[ "to eliminate all the Corrupted Mobs", "eliminating {label.collectOptionalItems@3} Corrupted Mobs", "{tokensCount.corruption}"],
                                                        RU:[ "уничтожить всех Испорченных Тварей", "уничтожая {label.collectOptionalItems@3} Испорченных Тварей", "{tokensCount.corruption}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.guardian:capital@0}",
                                            RU:"{label.guardian:capital@0}"
                                        },{
                                            EN:"The {label.by:capital@0} Influence",
                                            IT:"L'Influenza Degli {label.by:capital@0}",
                                            RU:"Влияние {label.by:capital@0}"
                                        },{
                                            EN:"{label.plan:capital@1}",
                                            RU:"{label.plan:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.guardian:capital@0} {label.corruption@0} {label.by@0} {label.then@0}. {label.unstoppable@0} {label.plan@0} {label.effect@0} {label.effect2@0}",
                                            RU:"{label.guardian:capital@0} {label.corruption@0} {label.by@0} {label.then@0}. {label.unstoppable@0} {label.plan@0} {label.effect@0} {label.effect2@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
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
                                                        IT:"Porre Fine alla Minaccia Corrotta",
                                                        EN:"End the Corrupted Threat",
                                                        RU:"Положить конец Испорченной угрозе"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Elimina {label.collectOptionalItems@2} Orde Corrotte",
                                                        EN:"Eliminate {label.collectOptionalItems@2} Corrupted Mobs",
                                                        RU:"Уничтожьте {label.collectOptionalItems@2} Испорченных Тварей"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.guardian@0}",
                                                        EN:"Defeat {label.guardian@0}",
                                                        RU:"Победите {label.guardian@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Elimina {label.guardian@0}",
                                                        EN:"Eliminate {label.guardian@0}",
                                                        RU:"Уничтожьте {label.guardian@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Orde Corrotte",
                                                        EN:"The Corrupted Mobs",
                                                        RU:"Испорченные Твари"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:
                                                            "I segnalini Corruzione {symbol.corruptionToken} nelle Stanze rappresentano {label.collectOptionalItems@2} Orde che sono state corrotte {label.guardian@1}. Quando un Eroe rivela una Stanza contenente un segnalino Corruzione {symbol.corruptionToken}, dopo aver risolto la carta Porta, genera un'Orda nella Zona del segnalino Corruzione {symbol.corruptionToken} e posiziona quel segnalino sulla carta dell'Orda."+
                                                            "<p>Un'Orda con un segnalino Corruzione {symbol.corruptionToken} &egrave; un'Orda Corrotta. Possiede la seguente abilit&agrave; in aggiunta a qualsiasi altra: <span class='phase'>Combattimento</span>: +1{symbol.scratch}.</p>"+
                                                            "<p>Quando un'Orda Corrotta viene eliminata, ogni eroe guadagna 8 PE al posto dei soliti 2 PE.</p>",
                                                        EN:
                                                            "Corruption tokens {symbol.corruptionToken} in Rooms represent {label.collectOptionalItems@2} Mobs that have been corrupted {label.guardian@1}. When a Hero reveals a Room containing a Corruption token {symbol.corruptionToken}, after resolving the Door card, spawn a Mob in the Corruption token {symbol.corruptionToken} Zone and place that token on the Mob card."+
                                                            "<p>A Mob with a Corruption token {symbol.corruptionToken} is a Corrupted Mob. It has the following ability in addition to any others: <span class='phase'>Combat</span>: +1{symbol.scratch}.</p>"+
                                                            "<p>When a Corrupted Mob is eliminated, each Hero gains 8 XP instead of the usual 2 XP.</p>",
                                                        RU:
                                                            "Жетоны Порчи {symbol.corruptionToken} в комнатах представляют {label.collectOptionalItems@2} Тварей, которые были испорчены {label.guardian@1}. Когда герой раскрывает комнату, содержащую жетон Порчи {symbol.corruptionToken}, после разрешения карты Двери призовите Тварь в зону жетона Порчи {symbol.corruptionToken} и поместите этот жетон на карту Твари."+
                                                            "<p>Тварь с жетоном Порчи {symbol.corruptionToken} является Испорченной Тварью. Она обладает следующей способностью в дополнение к любым другим: <span class='phase'>Бой</span>: +1{symbol.scratch}.</p>"+
                                                            "<p>Когда Испорченная Тварь устранена, каждый герой получает 8 ОО вместо обычных 2 ОО.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:
                                                            "I segnalini Corruzione {symbol.corruptionToken} nelle Stanze rappresentano {label.collectOptionalItems@2} Orde che sono state corrotte {label.guardian@1}. Quando un Eroe rivela una Stanza contenente un segnalino Corruzione {symbol.corruptionToken}, dopo aver risolto la carta Porta, genera un'Orda nella Zona del segnalino Corruzione {symbol.corruptionToken} e posiziona quel segnalino sulla carta dell'Orda."+
                                                            "<p>Un'Orda con un segnalino Corruzione {symbol.corruptionToken} &egrave; un'Orda Corrotta. Possiede la seguente abilit&agrave; in aggiunta a qualsiasi altra: <span class='phase'>Combattimento</span>: +1{symbol.scratch}.</p>",
                                                        EN:
                                                            "Corruption tokens {symbol.corruptionToken} in Rooms represent {label.collectOptionalItems@2} Mobs that have been corrupted {label.guardian@1}. When a Hero reveals a Room containing a Corruption token {symbol.corruptionToken}, after resolving the Door card, spawn a Mob in the Zone of the Corruption token {symbol.corruptionToken} and place that token on the Mob card."+
                                                            "<p>A Mob with a Corruption token {symbol.corruptionToken} is a Corrupted Mob. It has the following ability in addition to any others: <span class='phase'>Combat</span>: +1{symbol.scratch}.</p>",
                                                        RU:
                                                            "Жетоны Порчи {symbol.corruptionToken} в комнатах представляют {label.collectOptionalItems@2} Тварей, которые были испорчены {label.guardian@1}. Когда герой раскрывает комнату, содержащую жетон Порчи {symbol.corruptionToken}, после разрешения карты Двери призовите Тварь в зону жетона Порчи {symbol.corruptionToken} и поместите этот жетон на карту Твари."+
                                                            "<p>Тварь с жетоном Порчи {symbol.corruptionToken} является Испорченной Тварью. Она обладает следующей способностью в дополнение к любым другим: <span class='phase'>Бой</span>: +1{symbol.scratch}.</p>"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:
                                                            "I segnalini Corruzione {symbol.corruptionToken} nelle Stanze rappresentano {label.collectOptionalItems@2} Orde che sono state corrotte {label.guardian@1}. Quando un Eroe rivela una Stanza contenente un segnalino Corruzione {symbol.corruptionToken}, dopo aver risolto la carta Porta, genera un'Orda nella Zona del segnalino Corruzione {symbol.corruptionToken} e posiziona quel segnalino sulla carta dell'Orda."+
                                                            "<p>Un'Orda con un segnalino Corruzione {symbol.corruptionToken} &egrave; un'Orda Corrotta. Possiede la seguente abilit&agrave; in aggiunta a qualsiasi altra: <span class='phase'>Combattimento</span>: +1{symbol.scratch}. Quando viene sconfitto, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP.</p>",
                                                        EN:
                                                            "Corruption tokens {symbol.corruptionToken} in Rooms represent {label.collectOptionalItems@2} Mobs that have been corrupted {label.guardian@1}. When a Hero reveals a Room containing a Corruption token {symbol.corruptionToken}, after resolving the Door card, spawn a Mob in the Zone of the Corruption token {symbol.corruptionToken} and place that token on the Mob card."+
                                                            "<p>A Mob with a Corruption token {symbol.corruptionToken} is a Corrupted Mob. It has the following ability in addition to any others: <span class='phase'>Combat</span>: +1{symbol.scratch}. When it is defeated, all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP.</p>",
                                                        RU:
                                                            "Жетоны Порчи {symbol.corruptionToken} в комнатах представляют {label.collectOptionalItems@2} Тварей, которые были испорчены {label.guardian@1}. Когда герой раскрывает комнату, содержащую жетон Порчи {symbol.corruptionToken}, после разрешения карты Двери призовите Тварь в зону жетона Порчи {symbol.corruptionToken} и поместите этот жетон на карту Твари."+
                                                            "<p>Тварь с жетоном Порчи {symbol.corruptionToken} является Испорченной Тварью. Она обладает следующей способностью в дополнение к любым другим: <span class='phase'>Бой</span>: +1{symbol.scratch}. Когда она побеждена, все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.corruption} ОО.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.guardian:capital@0}",
                                                        RU:"{label.guardian:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La porta contrassegnata da un contorno rosso pu&ograve; essere aperta solo dopo aver eliminato {label.collectOptionalItems@2} Orde Corrotte. Non risolvere la carta Porta quando viene aperta, generare invece un Mostro Errante di livello 5 nella Zona contrassegnata dal segnalino Obiettivo grigio e rimuovere il segnalino: questo &egrave; {label.guardian@0}. Se gli Eroi sconfiggono {label.guardian@0} {label.questVictory@0}.",
                                                        EN:"The door marked with a red outline can only be opened after eliminating {label.collectOptionalItems@2} Corrupted Mobs. Do not resolve the Door card when it is opened, spawn a level 5 Roaming Monster in the gray Objective token Zone instead, and remove the token: this is {label.guardian@0}. If the Heroes defeat {label.guardian@0} {label.questVictory@0}.",
                                                        RU:"Дверь, отмеченная красным контуром, может быть открыта только после уничтожения {label.collectOptionalItems@2} Испорченных Тварей. Не разрешайте карту Двери, когда она открыта, вместо этого призовите блуждающего монстра 5 уровня в зону серого жетона цели и удалите жетон: это {label.guardian@0}. Если герои побеждают {label.guardian@0} {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La porta contrassegnata da un contorno rosso pu&ograve; essere aperta solo dopo aver eliminato {label.collectOptionalItems@2} Orde Corrotte. Non risolvere la carta Porta quando viene aperta, generare invece {label.campaignBoss@0} nella Zona contrassegnata dal segnalino Obiettivo grigio e rimuovere il segnalino: questo &egrave; {label.guardian@0}. Se gli eroi sconfiggono {label.guardian@0} {label.questVictory@0}.",
                                                        EN:"The door marked with a red outline can only be opened after eliminating {label.collectOptionalItems@2} Corrupted Mobs. Do not resolve the Door card when it is opened, spawn {label.campaignBoss@0} in the gray Objective token Zone instead, and remove the token: this is {label.guardian@0}. If the Heroes defeat {label.guardian@0} {label.questVictory@0}.",
                                                        RU:"Дверь, отмеченная красным контуром, может быть открыта только после уничтожения {label.collectOptionalItems@2} Испорченных Тварей. Не разрешайте карту Двери, когда она открыта, вместо этого призовите {label.campaignBoss@0} в зону серого жетона цели и удалите жетон: это {label.guardian@0}. Если герои побеждают {label.guardian@0} {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "removeCorruption" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItemsCorruption" ]
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победите {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Risolvere la questione una volta per tutte sconfiggendo {boss.bossBadName@0}",
                                                    EN:"Solve the issue once and for all by defeating {boss.bossBadName@0}",
                                                    RU:"Решите вопрос раз и навсегда, победив {boss.bossBadName@0}"
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
    ]

});