ModManager.modules.push(function(){

    const
        QUESTVICTORY={
            IT:[ "ha inizio lo Scontro con il Boss", "dare inizio allo Scontro con il Boss" ],
            EN:[ "the Boss Fight begins", "begin the Boss Fight" ],
            RU:[ "начинается битва с боссом", "начать битву с боссом" ]
        },
        HELLSCAPEMODE={
            IT:[ " (da MD2: Hellscape)"],
            EN:[ " (from MD2: Hellscape)"],
            RU:[ " (из MD2: Hellscape)"]
        },
        ONESHOTMODE={
            IT:[ " (Partita Autoconclusiva)"],
            EN:[ " (One-Shot)"],
            RU:[ " (Одиночное задание)"]
        },
        CAMPAIGNMODE={
            IT:[ " (Modalit&agrave; campagna)"],
            EN:[ " (Campaign mode)"],
            RU:[ " (режим кампании)"]
        },
        WEAKAT=[
            { act:0, map:0 },
            { act:0, map:1 }
        ],
        PLAINAT=[
            { act:0, map:2 },
            { act:1, map:0 }
        ],
        BOSSMODIFIER={
            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
        },
        BOSSPHASE2MODIFIER={
            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe." ],
            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero." ],
            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossPhase2Health} здоровья на героя." ]
        }
        BOSSAT=[
            [ { act:1, map:1 } ],
            [ { act:1, map:2 } ],
            [ { act:2, map:0 } ],
            [ { act:2, map:1 } ],
            [ { act:2, map:2 } ]
        ],
        SINGLEPHASEBOSSWEAK=[
            { bossHealth:{ EN:-5 } },
            { bossHealth:{ EN:-5 } }
        ],
        SINGLEPHASEGROUPBOSSWEAK=[
            { bossHealth:{ EN:-1 } },
            { bossHealth:{ EN:-1 } }
        ],
        SINGLEPHASEDUOBOSSWEAK=[
            { bossHealth:{ EN:-2 } },
            { bossHealth:{ EN:-2 } }
        ],
        DOUBLEPHASEBOSSWEAK=[
            { bossPhase2Health:{ EN:-5 } },
            { bossPhase2Health:{ EN:-5 } }
        ],
        SINGLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 } },
            { bossHealth:{ EN:15 } },
            { bossHealth:{ EN:25 } },
            { bossHealth:{ EN:35 } },
            { bossHealth:{ EN:45 } },
        ],
        SINGLEPHASEGROUPBOSSBONUS=[
            { bossHealth:{ EN:1 } },
            { bossHealth:{ EN:4 } },
            { bossHealth:{ EN:6 } },
            { bossHealth:{ EN:9 } },
            { bossHealth:{ EN:11 } },
        ],
        SINGLEPHASEDUOBOSSBONUS=[
            { bossHealth:{ EN:3 } },
            { bossHealth:{ EN:8 } },
            { bossHealth:{ EN:13 } },
            { bossHealth:{ EN:18 } },
            { bossHealth:{ EN:23 } },
        ],
        DOUBLEPHASEBOSSBONUS=[
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:5 } },
            { bossHealth:{ EN:5 }, bossPhase2Health:{ EN:10 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:15 } },
            { bossHealth:{ EN:10 }, bossPhase2Health:{ EN:25 } },
            { bossHealth:{ EN:15 }, bossPhase2Health:{ EN:30 } },
        ],
        BOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:15 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:25 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:35 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:45 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        DUOBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:8 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:13 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:18 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:23 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        STRONGERBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:20 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:30 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:40 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:50 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        VERYSTRONGBOSSLEVELS={
            1:{
                labels:{
                    bossHealth:{ EN:25 },
                    bossModifier:BOSSMODIFIER
                }
            },
            2:{
                labels:{
                    bossHealth:{ EN:40 },
                    bossModifier:BOSSMODIFIER
                }
            },
            3:{
                labels:{
                    bossHealth:{ EN:45 },
                    bossModifier:BOSSMODIFIER
                }
            },
            4:{
                labels:{
                    bossHealth:{ EN:50 },
                    bossModifier:BOSSMODIFIER
                }
            }
        },
        BASESINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE
                    }
                }
            }
        ],
        BASEDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossMode:CAMPAIGNMODE,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ],
        ADVANCEDSINGLEPHASEBOSSCAMPAIGN=[
            {
                at:PLAINAT
            },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:SINGLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:SINGLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER
                    }
                }
            }
        ],
        ADVANCEDDOUBLEPHASEBOSSCAMPAIGN=[
            { at:PLAINAT },
            {
                at:WEAKAT,
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                }
            },
            {
                at:BOSSAT[0],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[1],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[2],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[3],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            },{
                at:BOSSAT[4],
                mods:{
                    labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                    labels:{
                        bossModifier:BOSSMODIFIER,
                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                    }
                }
            }
        ]

    return [
        {
            id:"boss",
            needs:[ ],
            provides:[ "boss" ],
            label:{
                EN:"Add boss fights.",
                RU:"Добавить битвы с боссами."
            },
            content:[
                {
                    type:"bossLabels",
                    data:{
                        bossPreparation:{
                            IT:"Rimuovere tutte le Tessere, inclusi tutti i componenti collocati su di esse. {boss.bossTiles@0}, rimuovere il tracciato Oscurit&agrave; e collocate la plancia Boss {boss.bossDashboardName@0}{boss.bossMode@0} {boss.bossTiles@1}, con l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss.",
                            EN:"Remove all Tiles, including all components placed on them. {boss.bossTiles@0}, remove the Darkness track, and place the {boss.bossDashboardName@0}{boss.bossMode@0} Boss dashboard {boss.bossTiles@1}, with the Darkness indicator on the leftmost space of the Boss track.",
                            RU:"Уберите все плитки, включая все размещённые на них компоненты. {boss.bossTiles@0}, уберите шкалу Тьмы и разместите планшет босса {boss.bossDashboardName@0}{boss.bossMode@0} {boss.bossTiles@1}, поместив маркер Тьмы на крайнее левое деление шкалы босса."
                        },
                        bossPhase2Preparation:{
                            IT:"riportare l'indicatore Oscurit&agrave; sulla casella pi&ugrave; a sinistra del tracciato Boss e rimuovere tutte le Ferite dal Boss",
                            EN:"move back the Darkness indicator on the leftmost space of the Boss track and remove all Wounds from the Boss",
                            RU:"верните маркер Тьмы на крайнее левое деление шкалы босса и уберите с босса все раны"
                        },
                        bossModifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ],
                            RU:[ "", "" ]
                        },
                        bossPhase2Modifier:{
                            IT:[ "", "" ],
                            EN:[ "", "" ],
                            RU:[ "", "" ]
                        },
                        bossMode:{
                            IT:[ "" ],
                            EN:[ "" ],
                            RU:[ "" ]
                        },
                        heroPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute e il Mana, riportandoli ai loro valori massimi.",
                            EN:"Heroes recover all Health and Mana, returning them to their maximum values.",
                            RU:"Герои восстанавливают всё здоровье и всю ману до максимальных значений."
                        },
                        bossSideQuestValidation:{
                            IT:"<p>Verificare ora se la condizione della Missione Secondaria &egrave; stata verificata. Se si, la ricompensa della missione verr&agrave; ottenuta in caso di vittoria.</p>",
                            EN:"<p>Check now if the Side Quest condition has been met. If so, the mission reward will be obtained in case of victory.</p>",
                            RU:"<p>Теперь проверьте, выполнено ли условие побочного задания. Если да, награда за миссию будет получена в случае победы.</p>",
                        },
                        bossChallengeValidation:{
                            IT:"<p>Se avete rispettato la regola della Sfida del Vecchio Rosso fino a questo punto, la ricompensa della sfida verr&agrave; ottenuta in caso di vittoria. Non &egrave; pi&ugrave; necessario rispettarla.</p>",
                            EN:"<p>If you have followed the Old Red Challenge rule up to this point, the challenge reward will be obtained if case of victory. It is no longer necessary to follow it.</p>",
                            RU:"<p>Если вы соблюдали правило Испытания Старого Рыжего до этого момента, награда за испытание будет получена в случае победы. Дальше соблюдать его больше не нужно.</p>"
                        },
                        bossMichaelPreparation:{
                            IT:[
                                "<p>Questo Scontro con il Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Liberazione dell'Arcangelo</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss Fight follows the rules described in the Boss Fight section of the <b>Releasing Michael</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ],
                            RU:[
                                "<p>Эта битва с боссом проходит по правилам, описанным в разделе «Битва с боссом» задания <b>Releasing Michael</b> из книги правил Massive Darkness 2.</p>"
                            ]
                        },
                        bossReaperPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Le Chiavi delle Anime</b> nel manuale di Massive Darkness 2.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Soul Keys</b> quest in the Massive Darkness 2 rulebook.</p>"
                            ],
                            RU:[
                                "<p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>The Soul Keys</b> из книги правил Massive Darkness 2.</p>"
                            ]
                        },
                        bossBaalberithPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ],
                            RU:[
                                "<p>Этот босс использует подготовку и правила, описанные в разделе «Битва с боссом» задания <b>Duke of Hell</b> из книги правил Heavenfall. Поместите 40 жетонов здоровья вместо 70 в зону жетона цели.</p>"
                            ]
                        },
                        bossBaaalberithPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 1 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 1 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 4 {symbol.blueDie} 1 {symbol.blackDie} и атакует 2 {symbol.yellowDie} 1 {symbol.orangeDie} 1 {symbol.blackDie}"
                            ]
                        },
                        bossBaalberithEnragedPreparation:{
                            IT:[
                                "<p>Questo Boss segue la preparazione e le regole descritte nella sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall. Generare il Mostro Errante Uriel sul portale dei Mostri Erranti e posizionate 40 segnalini Salute invece di 70 segnalini Salute nella Zona del segnalino Obiettivo.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the preparation and the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook. Spawn the Roaming Monster Uriel in the Roaming Monster Portal and place 40 Health instead of 70 Health tokens in the Objective token Zone.</p>"
                            ],
                            RU:[
                                "<p>Этот босс использует подготовку и правила, описанные в разделе «Битва с боссом» задания <b>Duke of Hell</b> из книги правил Heavenfall. Создайте блуждающего монстра Uriel у портала блуждающих монстров и поместите 40 жетонов здоровья вместо 70 в зону жетона цели.</p>"
                            ]
                        },
                        bossBaaalberithEnragedPlainMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 2 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 2 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 4 {symbol.blueDie} 2 {symbol.blackDie} и атакует 2 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.blackDie}"
                            ]
                        },
                        bossAbyssalDemonPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Cuore di Tenebra</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Heart of Darkness</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            RU:[
                                "<p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>The Heart of Darkness</b> из книги правил Massive Darkness 2: Upgrade Pack.</p>"
                            ]
                        },
                        bossAbyssalDemonOneShotMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 5 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 5 deck if unavailable"
                            ],
                            RU:[
                                "берите карты блуждающих монстров, которые должен поглотить Abyssal Demon, из колоды на 2 ранга выше текущего уровня подземелья или из колоды уровня 5, если она недоступна"
                            ]
                        },
                        bossAbyssalDemonCampaignMod:{
                            IT:[
                                "prelevare le carte Mostro Errante da far assimilare all'Emissario Oscuro dal mazzo di 2 ranghi al di sopra dell'attuale Livello del Dungeon o dal mazzo di Livello 10 se non disponibile"
                            ],
                            EN:[
                                "take the Roaming Monster cards to be assimilated by the Abyssal Demon from the deck 2 ranks above the current Dungeon Level or from the Level 10 deck if unavailable"
                            ],
                            RU:[
                                "берите карты блуждающих монстров, которые должен поглотить Abyssal Demon, из колоды на 2 ранга выше текущего уровня подземелья или из колоды уровня 10, если она недоступна"
                            ]
                        },
                        heroHellephantPreparation:{
                            IT:"Gli Eroi recuperano tutta la Salute fino al valore massimo ma <b>scartano tutto il Mana</b>.",
                            EN:"Heroes recover all Health returning to its maximum value but <b>discard all Mana</b>.",
                            RU:"Герои восстанавливают всё здоровье до максимума, но <b>сбрасывают всю ману</b>."
                        },
                        bossHellephantPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>La Desolazione dell'Hellephant</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>The Desolation of the Hellephant</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            RU:[
                                "<p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>The Desolation of the Hellephant</b> из книги правил Massive Darkness 2: Upgrade Pack.</p>"
                            ]
                        },
                        bossHellephantHardMods:{
                            IT:[
                                "si difende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} и атакует 1 {symbol.yellowDie} 3 {symbol.orangeDie} 2 {symbol.redDie} 2 {symbol.blackDie}"
                            ]
                        },
                        bossCyclopsDuoPreparation:{
                            IT:[
                                "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                            ],
                            EN:[
                                "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest in the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                            ],
                            RU:[
                                "<p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>Double Trouble</b> из книги правил Massive Darkness 2: Upgrade Pack.</p>"
                            ]
                        },
                        bossCyclopsDuoHardMods:{
                            IT:[
                                "si difende con 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 4 {symbol.blueDie} 4 {symbol.greenDie} 1 {symbol.blackDie} и атакует 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ]
                        },
                        bossFourHorsemenPreparation:{
                            IT:[
                                " <b>Assegna 1 segnalino Carestia e 1 segnalino Peste ad ogni Eroe.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>I Quattro Cavalieri</b> del manuale di Massive Darkness 2: Quattro Cavalieri.</p>"
                            ],
                            EN:[
                                " <b>Place 1 Famine token and 1 Plague token on each Hero.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>The Four Horsemen</b> quest of the Massive Darkness 2: Four Horsemen rulebook.</p>"
                            ],
                            RU:[
                                " <b>Поместите на каждого героя 1 жетон Голода и 1 жетон Чумы.</b><p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>The Four Horsemen</b> из книги правил Massive Darkness 2: Four Horsemen.</p>"
                            ],
                        },
                        bossScorpionKingPreparation:{
                            IT:[
                                " <b>Ogni Eroe prende 1 segnalino Veleno.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Il Re Scorpione</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Each Hero takes 1 Poison token.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>The Scorpion King</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            RU:[
                                " <b>Каждый герой получает 1 жетон Яда.</b><p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>The Scorpion King</b> из книги правил Massive Darkness 2: Darkbringer.</p>"
                            ],
                        },
                        bossScorpionKingHardMods:{
                            IT:[
                                "si difende con 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.yellowDie} 2 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 1 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 3 {symbol.blueDie} 3 {symbol.greenDie} 1 {symbol.blackDie} и атакует 1 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 3 {symbol.blackDie}"
                            ]
                        },
                        bossHadesPreparation:{
                            IT:[
                                " <b>Ogni Eroe prende 4 segnalini Giudizio.</b><p>Ogni Eroe tira 1 {symbol.blackDie} per segnalino Giudizio. Per ogni {symbol.fang} ottenuto, l'Eroe subisce 1 Ferita e scarta il gettone. Nota che per ogni {symbol.blackDie} tirato, se non viene ottenuto un {symbol.fang}, l'Eroe tiene il gettone.</p><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Hades</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Each Hero takes 4 Judgement tokens.</b><p>Each Hero rolls 1 {symbol.blackDie} per Judgement token. For each {symbol.fang} rolled, the Hero takes 1 Wound and discards the token. Note that for each {symbol.blackDie} rolled, if a {symbol.fang} is not rolled, the Hero keeps the token.</p><p>This Boss follows the rules described in the Boss Fight section of the <b>Hades</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            RU:[
                                " <b>Каждый герой получает 4 жетона Суда.</b><p>Каждый герой бросает 1 {symbol.blackDie} за каждый жетон Суда. За каждый выпавший {symbol.fang} герой получает 1 рану и сбрасывает этот жетон. Обратите внимание: если при броске {symbol.blackDie} {symbol.fang} не выпал, герой сохраняет этот жетон.</p><p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>Hades</b> из книги правил Massive Darkness 2: Darkbringer.</p>"
                            ]
                        },
                        bossHadesHardMods:{
                            IT:[
                                "si difende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} и атакует 2 {symbol.yellowDie} 1 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ]
                        },
                        bossCharonPreparation:{
                            IT:[
                                " <b>Charon inizia con 2 segnalini Spirito.</b><p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Dark Ride</b> del manuale di Massive Darkness 2: Darkbringer.</p>"
                            ],
                            EN:[
                                " <b>Charon starts with 2 Soul tokens.</b><p>This Boss follows the rules described in the Boss Fight section of the <b>Dark Ride</b> quest of the Massive Darkness 2: Darkbringer rulebook.</p>"
                            ],
                            RU:[
                                " <b>Харон начинает с 2 жетонами Души.</b><p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>Dark Ride</b> из книги правил Massive Darkness 2: Darkbringer.</p>"
                            ],
                        },
                        bossCharonHardMods:{
                            IT:[
                                "si difende con 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} e attacca con 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            EN:[
                                "it defends with 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie}, and it attacks with 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ],
                            RU:[
                                "защищается 5 {symbol.blueDie} 5 {symbol.greenDie} 1 {symbol.blackDie} и атакует 3 {symbol.orangeDie} 2 {symbol.redDie} 1 {symbol.blackDie}"
                            ]
                        },
                    }
                }
            ]
        },
        {
            id:"boss",
            needs:[ "md2-hellscape" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Hellscape boss fights.",
                RU:"Добавить битвы с боссами из MD2: Hellscape."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele",
                                EN:"Boss Fight: Archangel Michael",
                                RU:"Битва с боссом: Архангел Михаил",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"],
                                        RU:[ "осквернённый Архангел" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                },
                                bossUnit:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Если героям удастся победить Архангела, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "michael" ],
                            title:{
                                IT:"Scontro con il Boss: Arcangelo Michele Infuriato",
                                EN:"Boss Fight: Enraged Archangel Michael",
                                RU:"Битва с боссом: Разъярённый Архангел Михаил",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Arcangelo corrotto" ],
                                        EN:[ "the corrupted Archangel"],
                                        RU:[ "осквернённый Архангел" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                },
                                bossName:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                },
                                bossUnit:{
                                    IT:[ "Arcangelo Michele" ],
                                    EN:[ "Archangel Michael" ],
                                    RU:[ "Архангел Михаил" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Arcangelo, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Arcangelo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Archangel, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Archangel a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossMichaelPreparation@0}"+
                                    "<p>Если героям удастся победить Архангела, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Если героям удастся победить Архангела во второй раз, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:BOSSLEVELS,
                            campaign:BASESINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore",
                                EN:"Boss Fight: The Reaper",
                                RU:"Битва с боссом: Жнец",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"],
                                        RU:[ "Жнец" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8B", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                },
                                bossUnit:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>If the Heroes manage to defeat The Reaper, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Если героям удастся победить Жнеца, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:BASEDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "reaper" ],
                            title:{
                                IT:"Scontro con il Boss: Il Mietitore Infuriato",
                                EN:"Boss Fight: The Enraged Reaper",
                                RU:"Битва с боссом: Разъярённый Жнец",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Il Mietitore" ],
                                        EN:[ "The Reaper"],
                                        RU:[ "Жнец" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8B</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8B di Hellscape", "accanto alla Tessera appena posizionata" ],
                                    EN:[ "Place the Hellscape Tile [A]8B", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8B", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:HELLSCAPEMODE,
                                bossDashboardName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                },
                                bossName:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                },
                                bossUnit:{
                                    IT:[ "Il Mietitore" ],
                                    EN:[ "The Reaper" ],
                                    RU:[ "Жнец" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere Il Mietitore, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, Il Mietitore {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Reaper, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Reaper a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossReaperPreparation@0}"+
                                    "<p>Если героям удастся победить Жнеца, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Если героям удастся победить Жнеца во второй раз, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },{
            id:"boss",
            needs:[ "md2-heavenfall" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Heavenfall boss fights.",
                RU:"Добавить битвы с боссами из MD2: Heavenfall."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith Alpha",
                                EN:"Boss Fight: Baalberith Alpha",
                                RU:"Битва с боссом: Baalberith Alpha",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        RU:[ "Баальберит" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    RU:[ "Разместите рядом плитки Heavenfall [B]4A и [B]4B так, чтобы получился рисунок ветви", "рядом с плитками, которые вы только что разместили рядом" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ],
                                    RU:[ " (Начальная сторона)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith <b>non viene girato sul lato Infuriato</b>, {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith <b>it's not flipped on the Enraged side</b>: {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Если герои наносят достаточно ран, чтобы убить Баальберита, <b>он не переворачивается на разъярённую сторону</b>: {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            tags:[ "baalberith" ],
                            campaign:ADVANCEDSINGLEPHASEBOSSCAMPAIGN,
                            title:{
                                IT:"Scontro con il Boss: Baalberith Infuriato",
                                EN:"Boss Fight: Enraged Baalberith",
                                RU:"Битва с боссом: Разъярённый Баальберит",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        RU:[ "Баальберит" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    RU:[ "Разместите рядом плитки Heavenfall [B]4A и [B]4B так, чтобы получился рисунок ветви", "рядом с плитками, которые вы только что разместили рядом" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Infuriato)" ],
                                    EN:[ " (Enraged Side)" ],
                                    RU:[ " (Разъярённая сторона)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithEnragedPreparation@0}"+
                                    "<p>Если героям удастся победить Баальберита, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:10 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossPhase2Health} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossBaaalberithPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossBaaalberithPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossBaaalberithPlainMods@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossPhase2Health} PV per Eroe, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossPhase2Health} HP per Hero, {boss.bossBaaalberithEnragedPlainMods@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossPhase2Health} здоровья на героя, {boss.bossBaaalberithEnragedPlainMods@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:ADVANCEDDOUBLEPHASEBOSSCAMPAIGN,
                            tags:[ "baalberith" ],
                            title:{
                                IT:"Scontro con il Boss: Baalberith",
                                EN:"Boss Fight: Baalberith",
                                RU:"Битва с боссом: Баальберит",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Baalberith" ],
                                        EN:[ "Baalberith"],
                                        RU:[ "Баальберит" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b> .",
                                EN:"Keep aside: <i>(from MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Heavenfall)</i> <b>[B]4A</b>, <b>[B]4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Affiancate le Tessere [B]4A e [B]4B di Heavenfall formando il disegno di un ramo", "accanto alle Tessere appena affiancate"],
                                    EN:[ "Place the [B]4A and [B]4B Heavenfall Tiles side by side to form a branch image", "next to the Tiles you just placed side by side"],
                                    RU:[ "Разместите рядом плитки Heavenfall [B]4A и [B]4B так, чтобы получился рисунок ветви", "рядом с плитками, которые вы только что разместили рядом" ],
                                },
                                bossMode:{
                                    IT:[ " (Lato Iniziale)" ],
                                    EN:[ " (Initial Side)" ],
                                    RU:[ " (Начальная сторона)" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossName:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                },
                                bossUnit:{
                                    IT:[ "Baalberith" ],
                                    EN:[ "Baalberith" ],
                                    RU:[ "Баальберит" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Se gli Eroi riescono a infliggere abbastanza Ferite da uccidere, Baalberith viene girato sul lato Infuriato secondo le regole della sezione Scontro con il Boss della missione <b>Il Duca dell'Inferno</b> nel manuale di Heavenfall.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Baalberith {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>If the Heroes deal enough Wounds to kill Baalberith it is flipped on the Enraged side following the rules described in the Boss Fight section of the <b>Duke of Hell</b> quest in the Heavenfall rulebook.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat Baalberith, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossBaalberithPreparation@0}"+
                                    "<p>Если герои наносят достаточно ран, чтобы убить Баальберита, он переворачивается на разъярённую сторону по правилам, описанным в разделе «Битва с боссом» задания <b>Duke of Hell</b> из книги правил Heavenfall.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Если героям удастся победить Баальберита, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-cyclopsduo" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Cyclops Duo boss fight.",
                RU:"Добавить битву с боссом Cyclops Duo из MD2: Upgrade Pack."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:DUOBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEDUOBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCyclopsDuoHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCyclopsDuoHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCyclopsDuoHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "cyclopsduo" ],
                            title:{
                                IT:"Scontro con il Boss: Duo di Ciclopi",
                                EN:"Boss Fight: Cyclops Duo",
                                RU:"Битва с боссом: Cyclops Duo",
                            },
                            components:2,
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "il Duo di Ciclopi" ],
                                        EN:[ "the Cyclops Duo"],
                                        RU:[ "Cyclops Duo" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD1)</i> <b>2V</b> e <b>4V</b>.",
                                EN:"Keep aside: <i>(from MD1)</i> <b>2V</b> and <b>4V</b>.",
                                RU:"Отложите в сторону: <i>(из MD1)</i> <b>2V</b> и <b>4V</b>."
                            },
                            labels:{

                                IT:[
                                    "<p>Questo Boss segue le regole descritte nella sezione Scontro con il Boss della missione <b>Doppio Problema</b> del manuale di Massive Darkness 2: Pack di Aggiornamento.</p>"
                                ],
                                EN:[
                                    "<p>This Boss follows the rules described in the Boss Fight section of the <b>Double Trouble</b> quest of the Massive Darkness 2: Upgrade Pack rulebook.</p>"
                                ],
                                RU:[
                                    "<p>Этот босс следует правилам, описанным в разделе «Битва с боссом» задания <b>Double Trouble</b> из книги правил Massive Darkness 2: Upgrade Pack.</p>"
                                ],
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 2V e 4V di Massive Darkness 1 ed i segnalini su di esse seguendo le indicazioni della missione <b>Doppio Problema</b> nel manuale di Massive Darkness 2: Pack di Aggiornamento", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 1 Tiles 2V and 4V and the tokens on them following the instructions in the <b>Double Trouble</b> mission of the Massive Darkness 2: Upgrade Pack manual", "next to the just placed tiles" ],
                                    RU:[ "Разместите плитки Massive Darkness 1 2V и 4V и жетоны на них, следуя указаниям задания <b>Double Trouble</b> из руководства Massive Darkness 2: Upgrade Pack", "рядом с только что размещёнными плитками" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Duo di Ciclopi" ],
                                    EN:[ "Cyclops Duo" ],
                                    RU:[ "Cyclops Duo" ]
                                },
                                bossName:{
                                    IT:[ "il Duo di Ciclopi" ],
                                    EN:[ "the Cyclops Duo" ],
                                    RU:[ "Cyclops Duo" ]
                                },
                                bossUnit:{
                                    IT:[ "ogni Ciclope" ],
                                    EN:[ "each Cyclops" ],
                                    RU:[ "каждый циклоп" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, il duo {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the duo, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCyclopsDuoPreparation@0}"+
                                    "<p>Если героям удастся победить этот дуэт, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack", "campaign-upgradepack-hellephant" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack Hellephant boss fight.",
                RU:"Добавить битву с боссом Hellephant из MD2: Upgrade Pack."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:STRONGERBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant",
                                EN:"Boss Fight: Hellephant",
                                RU:"Битва с боссом: Hellephant",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"],
                                        RU:[ "Hellephant" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                },
                                bossUnit:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Если героям удастся победить Hellephant, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:20 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:BOSSMODIFIER,
                                        bossPhase2Health:{ EN:25 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHellephantHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHellephantHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHellephantHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hellephant" ],
                            title:{
                                IT:"Scontro con il Boss: Hellephant Infuriato",
                                EN:"Boss Fight: Enraged Hellephant",
                                RU:"Битва с боссом: Разъярённый Hellephant",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Hellephant" ],
                                        EN:[ "the Hellephant"],
                                        RU:[ "Hellephant" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                },
                                bossName:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                },
                                bossUnit:{
                                    IT:[ "Hellephant" ],
                                    EN:[ "Hellephant" ],
                                    RU:[ "Hellephant" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggere l'Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo una seconda volta, l'Hellephant {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to defeat the Hellephant a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroHellephantPreparation}{boss.bossHellephantPreparation@0}"+
                                    "<p>Если героям удастся победить Hellephant, {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Если героям удастся победить Hellephant во второй раз, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-upgradepack" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Upgrade pack MD1 boss fights.",
                RU:"Добавить битвы с боссами MD1 из MD2: Upgrade Pack."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:25 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:35 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:45 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        }
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonCampaignMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonCampaignMod@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro",
                                EN:"Boss Fight: Abyssal Demon",
                                RU:"Битва с боссом: Abyssal Demon",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"],
                                        RU:[ "Abyssal Demon" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                },
                                bossUnit:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciarlo, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Если героям удастся изгнать Abyssal Demon, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },
                        {
                            levels:{
                                3:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:20 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:15 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                        },
                                        bossPhase2Health:{ EN:30 },
                                        bossPhase2Modifier:BOSSPHASE2MODIFIER
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:DOUBLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossAbyssalDemonOneShotMod@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossAbyssalDemonOneShotMod@0}." ]
                                            },
                                            bossPhase2Modifier:BOSSPHASE2MODIFIER
                                        }
                                    }
                                }
                            ],
                            tags:[ "abyssaldemon" ],
                            title:{
                                IT:"Scontro con il Boss: Emissario Oscuro Infuriato",
                                EN:"Boss Fight: Enraged Abyssal Demon",
                                RU:"Битва с боссом: Разъярённый Abyssal Demon",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Emissario Oscuro" ],
                                        EN:[ "the Abyssal Demon"],
                                        RU:[ "Abyssal Demon" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Hellscape)</i> <b>[A]8A</b>.",
                                EN:"Keep aside: <i>(from MD2: Hellscape)</i> <b>[A]8A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Hellscape)</i> <b>[A]8A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate la Tessera [A]8A di Hellscape", "accanto alla Tessera appena posizionata"],
                                    EN:[ "Place the Hellscape Tile [A]8A", "next to the just placed tile" ],
                                    RU:[ "Разместите плитку Hellscape [A]8A", "рядом с только что размещённой плиткой" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                },
                                bossName:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                },
                                bossUnit:{
                                    IT:[ "Emissario Oscuro" ],
                                    EN:[ "Abyssal Demon" ],
                                    RU:[ "Abyssal Demon" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a scacciare l'Emissario Oscuro, resister&agrave; al Portale: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Se gli Eroi riescono a scacciarlo una seconda volta, l'Emissario Oscuro {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon, it will resist the Portal: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>If the Heroes manage to banish the Abyssal Demon a second time, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossAbyssalDemonPreparation@0}"+
                                    "<p>Если героям удастся изгнать Abyssal Demon, он устоит перед Порталом: {boss.bossPhase2Preparation}.{boss.bossPhase2Modifier@0}</p>"+
                                    "<p>Если героям удастся изгнать Abyssal Demon во второй раз, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-fourhorsemen" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Four Horsemen boss fight.",
                RU:"Добавить битву с боссом Four Horsemen из MD2."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:{
                                1:{
                                    labels:{
                                        bossHealth:{ EN:4 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                        }
                                    }
                                },
                                2:{
                                    labels:{
                                        bossHealth:{ EN:6 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                        }
                                    }
                                },
                                3:{
                                    labels:{
                                        bossHealth:{ EN:9 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                        }
                                    }
                                },
                                4:{
                                    labels:{
                                        bossHealth:{ EN:11 },
                                        bossModifier:{
                                            IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                            EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                            RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                        }
                                    }
                                }
                            },
                            campaign:[
                                {
                                    at:PLAINAT,
                                    mods:{
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSWEAK[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                            }
                                        }
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[0],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[1],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[2],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[3],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEGROUPBOSSBONUS[4],
                                        labels:{
                                            bossMode:CAMPAIGNMODE,
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "campaign-fourhorsemen" ],
                            title:{
                                IT:"Scontro con il Boss: Quattro Cavalieri",
                                EN:"Boss Fight: Four Horsemen",
                                RU:"Битва с боссом: Four Horsemen",
                            },
                            components:4,
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "l'Armata dei Quattro Cavalieri" ],
                                        EN:[ "the Four Horsemen Army"],
                                        RU:[ "армия Four Horsemen" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            rules:[
                                {
                                    priority:5,
                                    type:"rule",
                                    name:{
                                        IT:"La Fine Pu&ograve; attendere",
                                        EN:"The End Can Wait",
                                        RU:"Конец может подождать"
                                    },
                                    explanation:{
                                        IT:"Per questa Missione, non mescolare le carte dei Quattro Cavalieri nei loro mazzi corrispondenti.",
                                        EN:"For this Mission, do not shuffle the Four Horsemen Roaming Monsters card into their corresponding decks.",
                                        RU:"Для этой миссии не замешивайте карту блуждающих монстров Four Horsemen в соответствующие колоды."
                                    }
                                }
                            ],
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Quattro Cavalieri)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                EN:"Keep aside: <i>(from MD2: Four Horsemen)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Four Horsemen)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> и <b>4B</b>.",
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1B, 2B, 3B e 4B di Massive Darkness 2: Quattro Cavalieri ed i segnalini su di esse seguendo le indicazioni della missione <b>I Quattro Cavalieri</b> nel manuale di Massive Darkness 2: Quattro Cavalieri", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Four Horsemen Tiles  1B, 2B, 3B, and 4B and the tokens on them following the instructions in the <b>The Four Horsemen</b> mission of the Massive Darkness 2: Four Horsemen manual", "next to the just placed tiles" ],
                                    RU:[ "Разместите плитки Massive Darkness 2: Four Horsemen 1B, 2B, 3B и 4B и жетоны на них, следуя указаниям задания <b>The Four Horsemen</b> из руководства Massive Darkness 2: Four Horsemen", "рядом с только что размещёнными плитками" ]
                                },
                                bossMode:ONESHOTMODE,
                                bossDashboardName:{
                                    IT:[ "Quattro Cavalieri" ],
                                    EN:[ "Four Horsemen" ],
                                    RU:[ "Four Horsemen" ]
                                },
                                bossName:{
                                    IT:[ "i Quattro Cavalieri" ],
                                    EN:[ "the Four Horsemen" ],
                                    RU:[ "Four Horsemen" ]
                                },
                                bossUnit:{
                                    IT:[ "ogni Cavaliere" ],
                                    EN:[ "each Horsemen" ],
                                    RU:[ "каждый всадник" ]
                                }
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerli, il gruppo dei Quattro Cavalieri {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+
                                    "<p>If the Heroes manage to defeat them, the Four Horsemen group {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossFourHorsemenPreparation@0}"+
                                    "<p>Если героям удастся победить их, группа Four Horsemen {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
        {
            id:"boss",
            needs:[ "campaign-darkbringer" ],
            provides:[ "boss" ],
            label:{
                EN:"Add MD2: Darkbringer boss fight.",
                RU:"Добавить битву с боссом из MD2: Darkbringer."
            },
            content:[
                {
                    type:"bossList",
                    data:[
                        {
                            levels:BOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossScorpionKingHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossScorpionKingHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossScorpionKingHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "scorpionking" ],
                            title:{
                                IT:"Scontro con il Boss: Re Scorpione",
                                EN:"Boss Fight: Scorpion King",
                                RU:"Битва с боссом: Scorpion King",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "il Re Scorpione" ],
                                        EN:[ "the Scorpion King"],
                                        RU:[ "Scorpion King" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>1A</b> e <b>2A</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>1A</b> and <b>2A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Darkbringer)</i> <b>1A</b> и <b>2A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1A e 2A di Massive Darkness 2: Darkbringer seguendo le indicazioni della missione <b>Il Re Scorpione</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 1A and 2A following the instructions in the <b>The Scorpion King</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    RU:[ "Разместите плитки Massive Darkness 2: Darkbringer 1A и 2A, следуя указаниям задания <b>The Scorpion King</b> из руководства Massive Darkness 2: Darkbringer", "рядом с только что размещёнными плитками" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Re Scorpione" ],
                                    EN:[ "Scorpion King" ],
                                    RU:[ "Scorpion King" ]
                                },
                                bossName:{
                                    IT:[ "il Re Scorpione" ],
                                    EN:[ "the Scorpion King" ],
                                    RU:[ "Scorpion King" ]
                                },
                                bossUnit:{
                                    IT:[ "il Re Scorpione" ],
                                    EN:[ "the Scorpion King" ],
                                    RU:[ "Scorpion King" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, il Re Scorpione {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+
                                    "<p>If the Heroes manage to defeat the Scorpion King, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossScorpionKingPreparation@0}"+
                                    "<p>Если героям удастся победить Scorpion King, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:BOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHadesHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHadesHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHadesHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHadesHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossHadesHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossHadesHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossHadesHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "hades" ],
                            title:{
                                IT:"Scontro con il Boss: Hades",
                                EN:"Boss Fight: Hades",
                                RU:"Битва с боссом: Hades",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Hades" ],
                                        EN:[ "Hades"],
                                        RU:[ "Hades" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>3A</b> e <b>4A</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>3A</b> and <b>4A</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Darkbringer)</i> <b>3A</b> и <b>4A</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 3A e 4A di Massive Darkness 2: Darkbringer e i segnalini su di esse seguendo le indicazioni della seguendo le indicazioni della missione <b>Hades</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 3A and 4A and the tokens on them following the instructions in the <b>Hades</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    RU:[ "Разместите плитки Massive Darkness 2: Darkbringer 3A и 4A и жетоны на них, следуя указаниям задания <b>Hades</b> из руководства Massive Darkness 2: Darkbringer", "рядом с только что размещёнными плитками" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    RU:[ "Hades" ]
                                },
                                bossName:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    RU:[ "Hades" ]
                                },
                                bossUnit:{
                                    IT:[ "Hades" ],
                                    EN:[ "Hades" ],
                                    RU:[ "Hades" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossHadesPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Hades {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossHadesPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Hades, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossHadesPreparation@0}"+
                                    "<p>Если героям удастся победить Hades, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        },{
                            levels:VERYSTRONGBOSSLEVELS,
                            campaign:[
                                { at:PLAINAT },
                                {
                                    at:WEAKAT,
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSWEAK[0]
                                    }
                                },
                                {
                                    at:BOSSAT[0],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[0],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[1],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[1],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[2],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[2],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[3],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[3],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                },{
                                    at:BOSSAT[4],
                                    mods:{
                                        labelsBonus:SINGLEPHASEBOSSBONUS[4],
                                        labels:{
                                            bossModifier:{
                                                IT:[ " In questo scontro {boss.bossUnit@0} ha {boss.bossHealth} PV per Eroe, {boss.bossCharonHardMods@0}." ],
                                                EN:[ " In this fight, {boss.bossUnit@0} has {boss.bossHealth} HP per Hero, {boss.bossCharonHardMods@0}." ],
                                                RU:[ " В этой битве у {boss.bossUnit@0} {boss.bossHealth} здоровья на героя, {boss.bossCharonHardMods@0}." ]
                                            }
                                        }
                                    }
                                }
                            ],
                            tags:[ "charon" ],
                            title:{
                                IT:"Scontro con il Boss: Charon",
                                EN:"Boss Fight: Charon",
                                RU:"Битва с боссом: Charon",
                            },
                            randomLabels:{
                                bossBadName:[
                                    {
                                        IT:[ "Charon" ],
                                        EN:[ "Charon"],
                                        RU:[ "Charon" ]
                                    }
                                ]
                            },
                            questLabels:{
                                questVictory:QUESTVICTORY
                            },
                            rules:[
                                {
                                    priority:5,
                                    type:"rule",
                                    name:{
                                        IT:"Condizione di Sconfitta Speciale",
                                        EN:"Special Losing Condition",
                                        RU:"Особое условие поражения"
                                    },
                                    explanation:{
                                        IT:"Se Charon abbandona il Dungeon dopo l'inizio dello scontro con il boss, la Missione termina immediatamente con una sconfitta.",
                                        EN:"After the Boss Fight begins, if Charon leaves the Dungeon, the Quest immediately ends in defeat.",
                                        RU:"После начала битвы с боссом, если Charon покидает подземелье, задание немедленно завершается поражением."
                                    }
                                }
                            ],
                            tilesNeeded:{
                                IT:"Tenere da parte: <i>(da MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> e <b>4B</b>.",
                                EN:"Keep aside: <i>(from MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b>, and <b>4B</b>.",
                                RU:"Отложите в сторону: <i>(из MD2: Darkbringer)</i> <b>1B</b>, <b>2B</b>, <b>3B</b> и <b>4B</b>."
                            },
                            labels:{
                                bossTiles:{
                                    IT:[ "Posizionate le Tessere 1B, 2B, 3B e 4B di Massive Darkness 2: Darkbringer e i segnalini su di esse seguendo le indicazioni della seguendo le indicazioni della missione <b>Dark Ride</b> nel manuale di Massive Darkness 2: Darkbringer", "accanto alla Tessere appena posizionate"],
                                    EN:[ "Place the Massive Darkness 2: Darkbringer Tiles 1B, 2B, 3B, and 4B and the tokens on them following the instructions in the <b>Dark Ride</b> mission of the Massive Darkness 2: Darkbringer manual", "next to the just placed tiles" ],
                                    RU:[ "Разместите плитки Massive Darkness 2: Darkbringer 1B, 2B, 3B и 4B и жетоны на них, следуя указаниям задания <b>Dark Ride</b> из руководства Massive Darkness 2: Darkbringer", "рядом с только что размещёнными плитками" ]
                                },
                                bossDashboardName:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    RU:[ "Charon" ]
                                },
                                bossName:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    RU:[ "Charon" ]
                                },
                                bossUnit:{
                                    IT:[ "Charon" ],
                                    EN:[ "Charon" ],
                                    RU:[ "Charon" ]
                                },
                            },
                            preparation:{
                                IT:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+
                                    "<p>Se gli Eroi riescono a sconfiggerlo, Charon {label.bossBeat@0} e la Missione termina con una vittoria.</p>",
                                EN:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+
                                    "<p>If the Heroes manage to defeat Charon, {label.bossBeat@0} and the Quest ends with a victory.</p>",
                                RU:"{boss.bossPreparation}{boss.bossModifier@0} {boss.heroPreparation}{boss.bossCharonPreparation@0}"+
                                    "<p>Если героям удастся победить Charon, {label.bossBeat@0}, и задание завершится победой.</p>"
                            }
                        }
                    ]
                }
            ]
        },
    ];

});
