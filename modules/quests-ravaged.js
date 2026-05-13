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
            id:"quests-ravaged",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-ravaged", "untranslated-fr" ],
            label:{
                EN:"Ravaged Mountains campaign inspired quest models",
                RU:"Модели заданий, вдохновлённые кампанией Ravaged Mountains"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"collectBossAndExit",
                            objective:{
                                EN:"Collect a token, open the exit room, fight a boss, clear the final room and bring the token to the exit to win.",
                                RU:"Соберите жетон, откройте комнату выхода, сразитесь с боссом, очистите финальную комнату и принесите жетон к выходу, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Chuchotements Dans la Nuit\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Chuchotements Dans la Nuit\"",
                                RU:"Вдохновлено заданием из Ravaged Mountains \"Chuchotements Dans la Nuit\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                see:[
                                                    {
                                                        IT:[ "I vostri occhi si sono posati su" ],
                                                        EN:[ "Your eyes have settled on" ],
                                                        RU:[ "Ваш взгляд остановился на" ]
                                                    },{
                                                        IT:[ "Superate le colline, appare" ],
                                                        EN:[ "Over the hills, it appears" ],
                                                        RU:[ "За холмами появляется" ]
                                                    },{
                                                        IT:[ "Le grotte si aprono verso" ],
                                                        EN:[ "The caves open towards" ],
                                                        RU:[ "Пещеры открываются в сторону" ]
                                                    }
                                                ],
                                                horror:[
                                                    {
                                                        IT:[ "una nuova fossa comune" ],
                                                        EN:[ "a new mass grave" ],
                                                        RU:[ "новая братская могила" ]
                                                    },{
                                                        IT:[ "una catasta di cadaveri" ],
                                                        EN:[ "a pile of corpses" ],
                                                        RU:[ "куча трупов" ]
                                                    },{
                                                        IT:[ "una piazza chiazzata di sangue" ],
                                                        EN:[ "a square stained with blood" ],
                                                        RU:[ "площадь, забрызганная кровью" ]
                                                    }
                                                ],
                                                already:[
                                                    {
                                                        IT:[ "Avete assistito a questo stesso spettacolo nelle vostre ultime 3 tappe:" ],
                                                        EN:[ "You have witnessed this same spectacle in your last 3 stops:" ],
                                                        RU:[ "Вы наблюдали то же самое зрелище на ваших последних 3 остановках:" ]
                                                    },{
                                                        IT:[ "Sta succedendo fin troppo spesso:" ],
                                                        EN:[ "It is happening all too often:" ],
                                                        RU:[ "Это происходит слишком часто:" ]
                                                    },{
                                                        IT:[ "Ancora una volta," ],
                                                        EN:[ "Once again," ],
                                                        RU:[ "И снова," ]
                                                    }
                                                ],
                                                horrorDescription:[
                                                    {
                                                        IT:[ "uomini, donne e bambini, nessuno &egrave; sopravvissuto" ],
                                                        EN:[ "men, women, and children. No one survived" ],
                                                        RU:[ "мужчины, женщины и дети. Никто не выжил" ]
                                                    },{
                                                        IT:[ "un massacro annunciato da un inquietante silenzio" ],
                                                        EN:[ "a massacre is announced by an eerie silence" ],
                                                        RU:[ "резня предвещается жуткой тишиной" ]
                                                    },{
                                                        IT:[ "innocenti uccisi senza alcun apparente motivo" ],
                                                        EN:[ "innocents are killed for no apparent reason" ],
                                                        RU:[ "невинных убивают без видимой причины" ]
                                                    }
                                                ],
                                                traces:[
                                                    {
                                                        IT:[ "Tutte le tracce indicano che", "le Tracce" ],
                                                        EN:[ "All traces indicate that", "the Traces" ],
                                                        RU:[ "Все следы указывают на то, что", "Следы" ]
                                                    },{
                                                        IT:[ "Una sottile scia di indizi suggerisce che", "la Scia" ],
                                                        EN:[ "A thin trail of clues suggests that", "the Trail" ],
                                                        RU:[ "Тонкая цепочка улик подсказывает, что", "След" ]
                                                    },{
                                                        IT:[ "Dalle tracce sembra che", "i Segni" ],
                                                        EN:[ "From the traces, it seems that", "the Signs" ],
                                                        RU:[ "По следам кажется, что", "Знаки" ]
                                                    }
                                                ],
                                                what:[
                                                    {
                                                        IT:[ "le creature sono arrivate dalle montagne devastate", "Raggiungendole", "delle Creature" ],
                                                        EN:[ "the creatures have arrived from the devastated mountains", "Reaching them", "of the Creatures" ],
                                                        RU:[ "существа пришли с разорённых гор", "Достигнув их", "Существ" ]
                                                    },{
                                                        IT:[ "i carnefici dovrebbero trovarsi poco distanti", "Raggiungendoli", "dei Carnefici" ],
                                                        EN:[ "the executioners should be not far away", "Reaching them", "of the Executioners" ],
                                                        RU:[ "палачи должны быть неподалёку", "Достигнув их", "Палачей" ]
                                                    },{
                                                        IT:[ "stavolta non siete lontani dagli assassini", "Raggiungendoli", "degli Assassini" ],
                                                        EN:[ "this time you are not far from the assassins", "Reaching them", "of the Assassins" ],
                                                        RU:[ "на этот раз вы недалеко от убийц", "Достигнув их", "Убийц" ]
                                                    }
                                                ],
                                                reach:[
                                                    {
                                                        IT:[ "Andando li" ],
                                                        EN:[ "Going there" ],
                                                        RU:[ "Отправляясь туда" ]
                                                    },{
                                                        EN:[ "{label.what@1}" ],
                                                        RU:[ "{label.what@1}" ]
                                                    },{
                                                        IT:[ "Ora finalmente" ],
                                                        EN:[ "Now finally" ],
                                                        RU:[ "Теперь, наконец," ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "potrete porre fine a questi massacri" ],
                                                        EN:[ "you can put an end to these massacres" ],
                                                        RU:[ "вы сможете положить конец этой резне" ]
                                                    },{
                                                        IT:[ "potrete ottenere vendetta" ],
                                                        EN:[ "you can get revenge" ],
                                                        RU:[ "вы сможете отомстить" ]
                                                    },{
                                                        IT:[ "potrete compiere la vostra missione" ],
                                                        EN:[ "you can complete your mission" ],
                                                        RU:[ "вы сможете выполнить свою миссию" ]
                                                    }
                                                ],
                                                info:[
                                                    {
                                                        IT:[ "le informazioni sui piani dell'Oscurit&agrave;", "le Informazioni" ],
                                                        EN:[ "the information on the Darkness plans", "the Information" ],
                                                        RU:[ "сведения о планах Тьмы", "Сведения" ]
                                                    },{
                                                        IT:[ "la mappa dei prossimi obiettivi dell'Oscurit&agrave;", "la Mappa" ],
                                                        EN:[ "the map of the Darkness next objectives", "the Map" ],
                                                        RU:[ "карта следующих целей Тьмы", "Карта" ]
                                                    },{
                                                        IT:[ "le prove", "le Prove" ],
                                                        EN:[ "the evidence", "the Evidence" ],
                                                        RU:[ "улики", "Улики" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le tane", "raccogliendo tutti i segnalini Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "to eliminate all the nests", "collecting all the Corruption Tokens {symbol.corruptionToken}" ],
                                                        RU:[ "уничтожить все гнёзда", "собирая все жетоны Порчи {symbol.corruptionToken}" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.info:capital@1} {label.what@2}",
                                            RU:"{label.info:capital@1} {label.what@2}"
                                        },{
                                            EN:"{label.horror:capital@0}",
                                            RU:"{label.horror:capital@0}"
                                        },{
                                            EN:"{label.traces:capital@1} {label.what@2}",
                                            RU:"{label.traces:capital@1} {label.what@2}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.see@0} {label.horror@0}. {label.already@0} {label.horrorDescription@0}. {label.traces@0} {label.what@0}. {label.reach@0} {label.target@0}.",
                                            RU:"{label.see@0} {label.horror@0}. {label.already@0} {label.horrorDescription@0}. {label.traces@0} {label.what@0}. {label.reach@0} {label.target@0}."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполняйте цели в указанном порядке:"
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
                                                        IT:"Il Recupero",
                                                        EN:"The Recovery",
                                                        RU:"Возвращение"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Recuperare {label.info@0}",
                                                        EN:"Recover {label.info@0}",
                                                        RU:"Вернуть {label.info@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Portare le informazioni all'uscita e completare un turno senza che rimangano Nemici nella stanza",
                                                        EN:"Take the information to the exit and complete a turn without any Enemies remaining in the room",
                                                        RU:"Доставьте сведения к выходу и завершите ход так, чтобы в комнате не осталось врагов"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Tane",
                                                        EN:"The Nests",
                                                        RU:"Гнёзда"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe nella Zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e guadagnare 5 PE.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and gain 5 XP.",
                                                        RU:"Герой в зоне жетона Порчи {symbol.corruptionToken} может потратить 1 действие, чтобы сбросить его и получить 5 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Un Eroe nella zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e pescare un segnalino dal sacchetto dei Tesori.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and draw a token from the Treasure bag.",
                                                        RU:"Герой в зоне жетона Порчи {symbol.corruptionToken} может потратить 1 действие, чтобы сбросить его и вытянуть жетон из мешка Сокровищ."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Informazioni",
                                                        EN:"The Information",
                                                        RU:"Сведения"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Il segnalino Obiettivo sul lato grigio rappresenta {label.info@0} che gli Eroi stanno cercando. Qualsiasi Eroe nella sua Zona pu&ograve; spendere 1 azione per raccoglierlo. Pu&ograve; essere scambiato come un oggetto.",
                                                        EN:"The Objective token on the gray side represents {label.info@0} the Heroes seek. Any Hero in its Zone can spend 1 action to pick it up. It can be exchanged as an item.",
                                                        RU:"Жетон цели на серой стороне представляет {label.info@0}, которые ищут герои. Любой герой в его зоне может потратить 1 действие, чтобы подобрать его. Его можно обменивать как предмет."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Sentinella",
                                                        EN:"The Sentinel",
                                                        RU:"Дозорный"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta contrassegnata da un contorno rosso, dopo avendo risolto la carta Porta corrispondente, generare un Mostro Errante di livello 5 nella Zona contrassegnata dal segnalino Obiettivo grigio.",
                                                        EN:"When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn a level 5 Roaming Monster in the Zone marked with the gray Objective token.",
                                                        RU:"Когда герой открывает дверь с красным контуром, после разрешения соответствующей карты Дверь породите блуждающего монстра 5 уровня в зоне, отмеченной серым жетоном цели."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta contrassegnata da un contorno rosso, dopo avendo risolto la carta Porta corrispondente, generare {label.campaignBoss@0} nella Zona contrassegnata dal segnalino Obiettivo grigio.",
                                                        EN: "When a Hero opens the door with the red outline, after resolving the corresponding Door card, spawn {label.campaignBoss@0} in the Zone marked by the gray Objective token.",
                                                        RU: "Когда герой открывает дверь с красным контуром, после разрешения соответствующей карты Дверь породите {label.campaignBoss@0} в зоне, отмеченной серым жетоном цели."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se l'Eroe che possiede il segnalino Obiettivo sul lato grigio termina il suo turno nella zona del segnalino Obiettivo sul lato colorato e la sua stanza non contiene alcun nemico {label.questVictory@0}.",
                                                        EN:"If the Hero with the Objective token on the gray side ends his turn in the zone of the Objective token on the colored side and its room does not contain any enemies {label.questVictory@0}.",
                                                        RU:"Если герой с жетоном цели на серой стороне заканчивает свой ход в зоне жетона цели на цветной стороне и в его комнате не остаётся врагов, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison-short" ],
                                            gameMode: [ "collectBossAndExit" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ],
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
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"nestBossStealExit",
                            objective:{
                                EN:"Find nests, eliminate spawned strong enemies, unlock the boss room, collect a token and bring it to the exit to win.",
                                RU:"Найдите гнёзда, уничтожьте появившихся сильных врагов, разблокируйте комнату босса, заберите жетон и принесите его к выходу, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"En Marchant Sur Des &OElig;ufs\"",
                                EN:"Inspired by the Ravaged Mountains quest \"En Marchant Sur Des &OElig;ufs\"",
                                RU:"Вдохновлено заданием из Ravaged Mountains \"En Marchant Sur Des &OElig;ufs\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                info:[
                                                    {
                                                        IT:[ "Le informazioni recuperate" ],
                                                        EN:[ "The recovered information", "is" ],
                                                        RU:[ "Восстановленные сведения", "находятся" ]
                                                    },{
                                                        IT:[ "Le pagine del libro trafugato" ],
                                                        EN:[ "The pages of the stolen book", "are" ],
                                                        RU:[ "Страницы похищенной книги", "находятся" ]
                                                    },{
                                                        IT:[ "Le scritture sulla tavoletta" ],
                                                        EN:[ "The writings on the tablet", "are" ],
                                                        RU:[ "Надписи на табличке", "находятся" ]
                                                    }
                                                ],
                                                locked:[
                                                    {
                                                        IT:[ "sono magicamente protette" ],
                                                        EN:[ "{label.info@1} magically protected" ],
                                                        RU:[ "{label.info@1} под магической защитой" ]
                                                    },{
                                                        IT:[ "sono illeggibili" ],
                                                        EN:[ "{label.info@1} illegible" ],
                                                        RU:[ "{label.info@1} нечитаемы" ]
                                                    },{
                                                        IT:[ "sembrano non avere senso" ],
                                                        EN:[ "{label.info@1} unreadable" ],
                                                        RU:[ "{label.info@1} невозможно прочесть" ]
                                                    }
                                                ],
                                               cantRead:[
                                                    {
                                                        IT:[ "ed &egrave; impossibile per loro decifrarle", "grazie {label.artifact@1} potranno tradurle" ],
                                                        EN:[ "and they can't decipher them", "thanks {label.artifact@1} they could translate them" ],
                                                        RU:[ "и они не могут их расшифровать", "благодаря {label.artifact@1} они смогут их перевести" ]
                                                    },{
                                                        IT:[ "e gli Eroi non riescono a leggerle", "grazie {label.artifact@1} potranno decifrarle" ],
                                                        EN:[ "and the Heroes cannot read them", "thanks {label.artifact@1} they could decipher them" ],
                                                        RU:[ "и герои не могут их прочесть", "благодаря {label.artifact@1} они смогут их расшифровать" ]
                                                    },{
                                                        IT:[ "e non c'&egrave; modo di comprenderle", "grazie {label.artifact@1} potranno decodificarle" ],
                                                        EN:[ "and there is no way to understand them", "thanks {label.artifact@1} they could decode them" ],
                                                        RU:[ "и нет способа их понять", "благодаря {label.artifact@1} они смогут их декодировать" ]
                                                    }
                                                ],
                                                artifact:[
                                                    {
                                                        IT:[ "la Lente della Distorsione", "alla quale" ],
                                                        EN:[ "the Lens of Distortion", "to which" ],
                                                        RU:[ "Линза Искажения", "которой" ]
                                                    },{
                                                        IT:[ "il Cifrario Arcano", "al quale" ],
                                                        EN:[ "the Arcane Cipher", "to which" ],
                                                        RU:[ "Тайный Шифр", "которому" ]
                                                    },{
                                                        IT:[ "l'Occhio Sapiente", "al quale" ],
                                                        EN:[ "the Wise Eye", "to which" ],
                                                        RU:[ "Мудрое Око", "которому" ]
                                                    }
                                                ],
                                                informer:[
                                                    {
                                                        IT:[ "La sentinella sconfitta" ],
                                                        EN:[ "The defeated sentinel" ],
                                                        RU:[ "Поверженный дозорный" ]
                                                    },{
                                                        IT:[ "Il sacerdote del tempio" ],
                                                        EN:[ "The temple priest" ],
                                                        RU:[ "Жрец храма" ]
                                                    },{
                                                        IT:[ "Il mago della Alta Torre" ],
                                                        EN:[ "The High Tower wizard" ],
                                                        RU:[ "Маг Высокой Башни" ]
                                                    }
                                                ],
                                                information:[
                                                    {
                                                        IT:[ "ha parlato loro dell'esistenza di un oggetto magico", "l'oggetto magico" ],
                                                        EN:[ "told them about the existence of a magical object", "the magical object" ],
                                                        RU:[ "рассказал им о существовании магического предмета", "магический предмет" ]
                                                    },{
                                                        IT:[ "ha rivelato loro l'esistenza di un antico artefatto", "l'antico artefatto" ],
                                                        EN:[ "revealed to them the existence of an ancient artifact", "the ancient artifact" ],
                                                        RU:[ "открыл им существование древнего артефакта", "древний артефакт" ]
                                                    },{
                                                        IT:[ "ha mormorato qualcosa circa un oggetto perduto", "l'oggetto perduto" ],
                                                        EN:[ "mumbled something about a lost object", "the lost object" ],
                                                        RU:[ "пробормотал что-то о потерянном предмете", "потерянный предмет" ]
                                                    }
                                                ],
                                                learn:[
                                                    {
                                                        IT:[ "e conoscere meglio i punti di forza e di debolezza del nemico" ],
                                                        EN:[ "and learn more about the enemy's strengths and weaknesses" ],
                                                        RU:[ "и узнать больше о сильных и слабых сторонах врага" ]
                                                    },{
                                                        IT:[ "e scoprire dove avverr&agrave; il rituale" ],
                                                        EN:[ "and find out where the ritual would take place" ],
                                                        RU:[ "и выяснить, где состоится ритуал" ]
                                                    },{
                                                        IT:[ "e rivelare finalmente i piani dell'Oscurit&agrave;" ],
                                                        EN:[ "and finally reveal the plans of the Darkness" ],
                                                        RU:[ "и наконец раскрыть планы Тьмы" ]
                                                    }
                                                ],
                                                safe:[
                                                    {
                                                        IT:[ "Il fatto che sia tenuto al sicuro" ],
                                                        EN:[ "The fact that it is kept safe" ],
                                                        RU:[ "Тот факт, что он хранится в безопасности" ]
                                                    },{
                                                        IT:[ "Il fatto che sia nascosto" ],
                                                        EN:[ "The fact that it is hidden" ],
                                                        RU:[ "Тот факт, что он спрятан" ]
                                                    },{
                                                        IT:[ "Il fatto che sia custodito" ],
                                                        EN:[ "The fact that it is guarded" ],
                                                        RU:[ "Тот факт, что он охраняется" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "in incubatore di Oscurit&agrave;" ],
                                                        EN:[ "in a Darkness incubator" ],
                                                        RU:[ "в инкубаторе Тьмы" ]
                                                    },{
                                                        IT:[ "nella tana del mostro che terrorizza la citt&agrave; da tempo" ],
                                                        EN:[ "in the lair of the monster that terrorizes the city for some time" ],
                                                        RU:[ "в логове монстра, давно терроризирующего город" ]
                                                    },{
                                                        IT:[ "nei pressi del prossimo obiettivo" ],
                                                        EN:[ "near the next objective" ],
                                                        RU:[ "рядом со следующей целью" ]
                                                    }
                                                ],
                                                opportunity:[
                                                    {
                                                        IT:[ "permetterebbe agli Eroi di prendere due piccioni con una fava..." ],
                                                        EN:[ "would allow the Heroes to kill two birds with one stone..." ],
                                                        RU:[ "позволит героям убить двух зайцев одним выстрелом..." ]
                                                    },{
                                                        IT:[ "non fa perdere agli Eroi altro tempo prezioso..." ],
                                                        EN:[ "does not waste the Heroes any more precious time..." ],
                                                        RU:[ "не отнимает у героев больше драгоценного времени..." ]
                                                    },{
                                                        IT:[ "mette subito gli Eroi in marcia..." ],
                                                        EN:[ "immediately gets the Heroes on the move..." ],
                                                        RU:[ "сразу заставляет героев двинуться в путь..." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a rimuovere tutti i nidi", "rimuovendo {label.collectOptionalItems@3} nidi", "{tokensCount.corruption}" ],
                                                        EN:[ "to remove all the nests", "removing {label.collectOptionalItems@3} nests", "{tokensCount.corruption}"],
                                                        RU:[ "уничтожить все гнёзда", "уничтожение {label.collectOptionalItems@3} гнёзд", "{tokensCount.corruption}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.artifact:capital@0}",
                                            RU:"{label.artifact:capital@0}"
                                        },{
                                            EN:"{label.info:capital@0}",
                                            RU:"{label.info:capital@0}"
                                        },{
                                            EN:"{label.information:capital@1}",
                                            RU:"{label.information:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.info@0} {label.locked@0} {label.cantRead@0}. {label.informer@0} {label.information@0}, {label.artifact@0}, {label.cantRead@1} {label.learn@0}. {label.safe@0} {label.place@0} {label.opportunity@0}",
                                            RU:"{label.info@0} {label.locked@0} {label.cantRead@0}. {label.informer@0} {label.information@0}, {label.artifact@0}, {label.cantRead@1} {label.learn@0}. {label.safe@0} {label.place@0} {label.opportunity@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполняйте цели в указанном порядке:"
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
                                                        IT:"I Mostri",
                                                        EN:"The Monsters",
                                                        RU:"Монстры"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare i Mostri Erranti che escono da {label.collectOptionalItems@2} nidi",
                                                        EN:"Eliminate the Roaming Monsters that come out of {label.collectOptionalItems@2} nests",
                                                        RU:"Уничтожьте блуждающих монстров, которые выходят из {label.collectOptionalItems@2} гнёзд"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"I Nidi",
                                                        EN:"The Nests",
                                                        RU:"Гнёзда"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Distruggere {label.collectOptionalItems@2} nidi",
                                                        EN:"Destroy {label.collectOptionalItems@2} nests",
                                                        RU:"Уничтожьте {label.collectOptionalItems@2} гнёзд"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.artifact@0} e raggiungere l'uscita",
                                                        EN:"Collect {label.artifact@0} and reach the exit",
                                                        RU:"Заберите {label.artifact@0} и доберитесь до выхода"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Stanza Bloccata",
                                                        EN:"The Locked Room",
                                                        RU:"Запертая комната"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Gli Eroi non possono aprire la porta con il contorno rosso. I Nemici possono muoversi liberamente attraverso questa porta.",
                                                        EN:"Heroes cannot open the door with the red outline. Enemies can move freely through this door.",
                                                        RU:"Герои не могут открыть дверь с красным контуром. Враги могут свободно передвигаться через эту дверь."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Nidi",
                                                        EN:"The Nests",
                                                        RU:"Гнёзда"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta di una stanza contenente un segnalino Corruzione {symbol.corruptionToken} non non pescare una carta Porta. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Corruzione {symbol.corruptionToken}. Un Eroe pu&ograve; spendere 1 PM per rimuovere il segnalino Corruzione e ogni Eroe guadagna 3 PE.",
                                                        EN:"When a Hero opens the door of a room containing a Corruption token {symbol.corruptionToken}, it doesn't draw a Door card. Spawn a Roaming Monster 1 level higher than the Dungeon level on the Corruption token {symbol.corruptionToken}  zone. A Hero can spend 1 MP to remove the Corruption token and each Hero gains 3 XP.",
                                                        RU:"Когда герой открывает дверь комнаты, содержащей жетон Порчи {symbol.corruptionToken}, карта Дверь не тянется. Породите блуждающего монстра на 1 уровень выше уровня подземелья в зоне жетона Порчи {symbol.corruptionToken}. Герой может потратить 1 ОД, чтобы убрать жетон Порчи, и каждый герой получает 3 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta di una stanza contenente un segnalino Corruzione {symbol.corruptionToken} non non pescare una carta Porta. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Corruzione {symbol.corruptionToken}. Un Eroe pu&ograve; spendere 1 PM per rimuovere il segnalino Corruzione.",
                                                        EN:"When a Hero opens the door of a room containing a Corruption token {symbol.corruptionToken}, it doesn't draw a Door card. Spawn a Roaming Monster 1 level higher than the Dungeon level on the Corruption token {symbol.corruptionToken} zone. A Hero can spend 1 MP to remove the Corruption token.",
                                                        RU:"Когда герой открывает дверь комнаты, содержащей жетон Порчи {symbol.corruptionToken}, карта Дверь не тянется. Породите блуждающего монстра на 1 уровень выше уровня подземелья в зоне жетона Порчи {symbol.corruptionToken}. Герой может потратить 1 ОД, чтобы убрать жетон Порчи."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta di una stanza contenente un segnalino Corruzione {symbol.corruptionToken} non non pescare una carta Porta. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Corruzione {symbol.corruptionToken}. Un Eroe pu&ograve; spendere 1 PM per rimuovere il segnalino Corruzione e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} PE.",
                                                        EN:"When a Hero opens the door of a room containing a Corruption token {symbol.corruptionToken}, it doesn't draw a Door card. Spawn a Roaming Monster 1 level higher than the Dungeon level on the Corruption token {symbol.corruptionToken} zone. A Hero can spend 1 MP to remove the Corruption token and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} XP.",
                                                        RU:"Когда герой открывает дверь комнаты, содержащей жетон Порчи {symbol.corruptionToken}, карта Дверь не тянется. Породите блуждающего монстра на 1 уровень выше уровня подземелья в зоне жетона Порчи {symbol.corruptionToken}. Герой может потратить 1 ОД, чтобы убрать жетон Порчи, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Liberare il Passaggio",
                                                        EN:"Clear the Passage",
                                                        RU:"Освободить проход"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta rimossi {label.collectOptionalItems@2} nidi, la porta con il contorno rosso pu&ograve; essere aperta normalmente. Generare un Mostro Errante di un livello pi&ugrave; alto rispetto al livello del Dungeon nella zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"Once {label.collectOptionalItems@2} nests have been removed, the door with the red outline can be opened normally. Spawn a Roaming Monster 1 level higher than the Dungeon level in the Objective token on the gray side Zone.",
                                                        RU:"Когда {label.collectOptionalItems@2} гнёзд уничтожены, дверь с красным контуром можно открывать обычным образом. Породите блуждающего монстра на 1 уровень выше уровня подземелья в зоне жетона цели на серой стороне."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Protettore",
                                                        EN:"The Defender",
                                                        RU:"Защитник"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta con il contorno rosso, non pescare una carta Porta ma generare un Mostro Errante di livello 5 nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN: "When a Hero opens the door with the red outline, do not draw a Door card but spawn a Level 5 Roaming Monster in the Objective marker on the gray side Zone.",
                                                        RU: "Когда герой открывает дверь с красным контуром, не тяните карту Дверь, а породите блуждающего монстра 5 уровня в зоне жетона цели на серой стороне."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT: "Quando un Eroe apre la porta con il contorno rosso, non pescare una carta Porta ma generare {label.campaignBoss@0} nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN: "When a Hero opens the door with the red outline, do not draw a Door card but spawn {label.campaignBoss@0} in the Objective marker on the gray side Zone.",
                                                        RU: "Когда герой открывает дверь с красным контуром, не тяните карту Дверь, а породите {label.campaignBoss@0} в зоне жетона цели на серой стороне."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.artifact:capital@0}",
                                                        RU:"{label.artifact:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe pu&ograve; spendere 1 PM per raccogliere il segnalino Obiettivo sul lato grigio come oggetto standard. Pu&ograve; essere scambiato normalmente con un altro Eroe.",
                                                        EN:"A Hero can spend 1 MP to pick up the Objective token on the gray side as a standard item. It can be exchanged normally with another Hero.",
                                                        RU:"Герой может потратить 1 ОД, чтобы подобрать жетон цели на серой стороне как обычный предмет. Им можно обмениваться с другим героем как обычно."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Un Eroe pu&ograve; spendere 1 PM per raccogliere il segnalino Obiettivo sul lato grigio come oggetto standard e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} PE. Pu&ograve; essere scambiato normalmente con un altro Eroe.",
                                                        EN:"A Hero can spend 1 MP to pick up the Objective token on the gray side as a standard item and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} XP. It can be exchanged normally with another Hero.",
                                                        RU:"Герой может потратить 1 ОД, чтобы подобрать жетон цели на серой стороне как обычный предмет, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.corruption:1} ОО. Им можно обмениваться с другим героем как обычно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che il segnalino Obiettivo sul lato grigio &egrave; stato raccolto, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"After the Objective token on the gray side has been picked up, any Hero can spend 1 MP in the Objective token on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}.",
                                                        RU:"После того как жетон цели на серой стороне подобран, любой герой может потратить 1 ОД в зоне жетона цели на цветной стороне, чтобы покинуть подземелье. Как только все герои покинули подземелье, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode: [ "nestBossStealExit" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "none" ],
                                            bridges:[ "none" ],
                                            corridors: [ "nestBossStealExit" ]
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
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"eliminateBuffBoss",
                            objective:{
                                EN:"Eliminate enemy buffs and beat the boss to win.",
                                RU:"Уничтожьте усиления врагов и победите босса, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Les Piliers Magiques\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Les Piliers Magiques\"",
                                RU:"Вдохновлено заданием из Ravaged Mountains \"Les Piliers Magiques\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                enemy:[
                                                    {
                                                        IT:[ "Le forze dell'Oscurit&agrave;", "minacciose" ],
                                                        EN:[ "The forces of Darkness", "threatening" ],
                                                        RU:[ "Силы Тьмы", "угрожающими" ]
                                                    },{
                                                        IT:[ "Le truppe nemiche" , "minacciose"],
                                                        EN:[ "The enemy troops" , "threatening"],
                                                        RU:[ "Вражеские войска", "угрожающими" ]
                                                    },{
                                                        IT:[ "Gli invasori", "minacciosi" ],
                                                        EN:[ "The invaders", "threatening" ],
                                                        RU:[ "Захватчики", "угрожающими" ]
                                                    }
                                                ],
                                                commander:[
                                                    {
                                                        IT:[ "il loro Comandante", "il Comandante", "abbatterlo" ],
                                                        EN:[ "their Commander", "the Commander", "taking him down" ],
                                                        RU:[ "их Командир", "Командир", "повергнуть его" ]
                                                    },{
                                                        IT:[ "l'oscuro Assassino", "l'Assassino", "abbatterlo" ],
                                                        EN:[ "the dark Assassin", "the Assassin", "taking him down" ],
                                                        RU:[ "тёмный Убийца", "Убийца", "повергнуть его" ]
                                                    },{
                                                        IT:[ "il loro brutale Guerriero", "il Guerriero", "abbatterlo" ],
                                                        EN:[ "their brutal Warrior", "the Warrior", "taking him down" ],
                                                        RU:[ "их жестокий Воин", "Воин", "повергнуть его" ]
                                                    }
                                                ],
                                                menace:[
                                                    {
                                                        IT:[ "stanno diventando sempre pi&ugrave; {label.enemy@1}" ],
                                                        EN:[ "are becoming more and more {label.enemy@1}" ],
                                                        RU:[ "становятся всё более {label.enemy@1}" ]
                                                    },{
                                                        IT:[ "si stanno espandendo oltre i confini" ],
                                                        EN:[ "are expanding beyond the borders" ],
                                                        RU:[ "распространяются за границы" ]
                                                    },{
                                                        IT:[ "sono fuori controllo" ],
                                                        EN:[ "are out of control" ],
                                                        RU:[ "вышли из-под контроля" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma gli Eroi sono riusciti a scovare i loro servitori pi&ugrave; importanti" ],
                                                        EN:[ "but the Heroes managed to track down their most important servants" ],
                                                        RU:[ "но герои сумели выследить их самых важных слуг" ]
                                                    },{
                                                        IT:[ "ma gli Eroi hanno scoperto il loro quartier generale" ],
                                                        EN:[ "but the Heroes discovered their headquarters" ],
                                                        RU:[ "но герои обнаружили их штаб-квартиру" ]
                                                    },{
                                                        EN:[ "ma gli Eroi sono riusciti ad infiltrarsi tra loro file" ],
                                                        IT:[ "but the Heroes managed to infiltrate their lines" ],
                                                        RU:[ "но герои сумели проникнуть в их ряды" ]
                                                    }
                                                ],
                                                action:[
                                                    {
                                                        IT:[ "Sabotarli &egrave; fondamentale per rallentare i loro piani" ],
                                                        EN:[ "Sabotaging them is essential to slow down their plans" ],
                                                        RU:[ "Саботировать их жизненно важно, чтобы замедлить их планы" ]
                                                    },{
                                                        IT:[ "Devono cercare di rallentare la loro avanzata a tutti i costi" ],
                                                        EN:[ "They must try to slow down their advance at all costs" ],
                                                        RU:[ "Им любой ценой нужно попытаться замедлить продвижение" ]
                                                    },{
                                                        IT:[ "Possono finalmente colpirli nel loro punto debole" ],
                                                        EN:[ "They can finally strike them in their weak spot" ],
                                                        RU:[ "Наконец-то можно ударить их в слабое место" ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "Il loro nascondiglio &egrave; attraversato da potenti correnti magiche..." ],
                                                        EN:[ "Their hideout is crossed by powerful magical flows..." ],
                                                        RU:[ "Их укрытие пронизывают мощные магические потоки..." ]
                                                    },{
                                                        IT:[ "Il loro covo &egrave; protetto da un potente incantesimo..." ],
                                                        EN:[ "Their lair is protected by a powerful spell..." ],
                                                        RU:[ "Их логово защищено мощным заклинанием..." ]
                                                    },{
                                                        IT:[ "Una misteriosa forza protegge l'intera area..." ],
                                                        EN:[ "A mysterious force protects the entire area..." ],
                                                        RU:[ "Загадочная сила оберегает всю эту территорию..." ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "ma non c'&egrave; dubbio che {label.commander@0} si trovi nei dintorni!" ],
                                                        EN:[ "but there is no doubt that {label.commander@0} is nearby!" ],
                                                        RU:[ "но нет сомнений, что {label.commander@0} находится поблизости!" ]
                                                    },{
                                                        IT:[ "e questo vuol dire solo che {label.commander@0} si trova li!" ],
                                                        EN:[ "and that only means that {label.commander@0} is there!" ],
                                                        RU:[ "и это означает только то, что {label.commander@0} там!" ]
                                                    },{
                                                        IT:[ "di certo {label.commander@0} &egrave; di pattuglia!" ],
                                                        EN:[ "of course {label.commander@0} is on patrol!" ],
                                                        RU:[ "конечно, {label.commander@0} в патруле!" ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "{label.commander:capital@2} non sar&agrave; facile" ],
                                                        EN:[ "{label.commander:capital@2} won't be easy" ],
                                                        RU:[ "{label.commander:capital@2} будет нелегко" ]
                                                    },{
                                                        IT:[ "{label.commander:capital@2} sar&agrave; dura" ],
                                                        EN:[ "{label.commander:capital@2} won't be hard" ],
                                                        RU:[ "{label.commander:capital@2} будет тяжело" ]
                                                    },{
                                                        IT:[ "{label.commander:capital@2} non sar&agrave; una passeggiata" ],
                                                        EN:[ "{label.commander:capital@2} is no walk in the park" ],
                                                        RU:[ "{label.commander:capital@2} не прогулка в парке" ]
                                                    }
                                                ],
                                                advantage:[
                                                    {
                                                        IT:[ "ma infliggerebbe una grave battuta d'arresto ai preparativi del nemico." ],
                                                        EN:[ "but it would seriously set back the enemy's preparations." ],
                                                        RU:[ "но это серьёзно задержит приготовления врага." ]
                                                    },{
                                                        IT:[ "ma non possono tirarsi indietro proprio ora." ],
                                                        EN:[ "but they cannot back down now." ],
                                                        RU:[ "но они не могут отступить именно сейчас." ]
                                                    },{
                                                        IT:[ "ma &egrave; il momento di rispondere agli attacchi." ],
                                                        EN:[ "but it is time to respond to the attacks." ],
                                                        RU:[ "но настало время ответить на атаки." ]
                                                    }
                                                ],
                                                go:[
                                                    {
                                                        IT:[ "Non c'&egrave; tempo da perdere!" ],
                                                        EN:[ "There is no time to waste!" ],
                                                        RU:[ "Нельзя терять время!" ]
                                                    },{
                                                        IT:[ "Avanti!" ],
                                                        EN:[ "Forward!" ],
                                                        RU:[ "Вперёд!" ]
                                                    },{
                                                        IT:[ "Per il Regno!" ],
                                                        EN:[ "For the Kingdom!" ],
                                                        RU:[ "За Королевство!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a eliminare tutte le tane", "raccogliendo tutti i segnalini Corruzione {symbol.corruptionToken}" ],
                                                        EN:[ "to eliminate all the nests", "collecting all the Corruption Tokens {symbol.corruptionToken}" ],
                                                        RU:[ "уничтожить все гнёзда", "собирая все жетоны Порчи {symbol.corruptionToken}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Le Colonne Magiche",
                                            EN:"The Magic Pillars",
                                            RU:"Магические Столпы"
                                        },{
                                            EN:"{label.commander:capital@1}",
                                            RU:"{label.commander:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.enemy@0} {label.menace@0} {label.but@0}. {label.action@0}. {label.place@0} {label.target@0} {label.mission@0} {label.advantage@0} {label.go@0}",
                                            RU:"{label.enemy@0} {label.menace@0} {label.but@0}. {label.action@0}. {label.place@0} {label.target@0} {label.mission@0} {label.advantage@0} {label.go@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполняйте цели в указанном порядке:"
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
                                                        IT:"I Pilastri",
                                                        EN:"The Pillars",
                                                        RU:"Столпы"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Distruggere i pilastri magici",
                                                        EN:"Destroy the Magic Pillars",
                                                        RU:"Уничтожьте магические столпы"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.commander:capital@1}",
                                                        RU:"{label.commander:capital@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.commander@1} e fuggire",
                                                        EN:"Kill {label.commander@1} and escape",
                                                        RU:"Убейте {label.commander@1} и сбегите"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation",
                                                        RU:"Специальная подготовка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Generare un Mostro Errante di livello 5 nella Zona del segnalino Tempo {symbol.timeToken} e rimuovere il segnalino. Questo Mostro Errante &egrave; {label.commander@1} e inizier&agrave; ad attivarsi solo una volta aperta la porta con il contorno rosso. Non &egrave; influenzato dagli effetti delle carte Porta.",
                                                        EN:"Spawn a Level 5 Roaming Monster in the Time token Zone {symbol.timeToken} and remove the token. This Roaming Monster is {label.commander@1} and will only start activating once the red-outlined door is opened. It is not affected by the effects of Door cards.",
                                                        RU:"Породите блуждающего монстра 5 уровня в зоне жетона Времени {symbol.timeToken} и уберите этот жетон. Этот блуждающий монстр — {label.commander@1}, и он начнёт активироваться только после того, как откроется дверь с красным контуром. На него не действуют эффекты карт Дверь."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare {label.campaignBoss@0} nella Zona del segnalino Tempo {symbol.timeToken}  e rimuovere il segnalino. Questo Mostro Errante &egrave; {label.commander@1} e inizier&agrave; ad attivarsi solo una volta aperta la porta con il contorno rosso. Non &egrave; influenzato dagli effetti delle carte Porta.",
                                                        EN:"Spawn {label.campaignBoss@0} in the Time token Zone {symbol.timeToken} and remove the token. This Roaming Monster is {label.commander@1} and will only start activating once the red-outlined door is opened. It is not affected by the effects of Door Cards.",
                                                        RU:"Породите {label.campaignBoss@0} в зоне жетона Времени {symbol.timeToken} и уберите этот жетон. Этот блуждающий монстр — {label.commander@1}, и он начнёт активироваться только после того, как откроется дверь с красным контуром. На него не действуют эффекты карт Дверь."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Aree Magiche",
                                                        EN:"The Magic Zones",
                                                        RU:"Магические зоны"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"L'intero Dungeon &egrave; influenzato dalla magia che emana dai pilastri."+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.second} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano un'arma corpo corpo {symbol.rangeMelee}.</p>"+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.third} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano un'arma a distanza {symbol.rangeRanged}.</p>"+
                                                        "<p>Il pilastro situato sulla tessera {tileLabel.fourth} d&agrave; un bonus di 1 dado giallo {symbol.yellowDie} a tutti i Nemici che usano la magia {symbol.rangeMagic}.</p>"+
                                                        "<p>La magia di ogni pilastro influenza tutte le tessere del Dungeon e non solo quello su cui si trova il pilastro.</p>",
                                                        EN:"The entire Dungeon is affected by the magic emanating from the pillars."+
                                                        "<p>The pillar on the {tileLabel.second} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies using a melee weapon {symbol.rangeMelee}.</p>"+
                                                        "<p>The pillar on the {tileLabel.third} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies using a ranged weapon {symbol.rangeRanged}.</p>"+
                                                        "<p>The pillar on the {tileLabel.fourth} tile gives a bonus of 1 yellow die {symbol.yellowDie} to all Enemies that use magic {symbol.rangeMagic}.</p>"+
                                                        "<p>The magic of each pillar affects all tiles in the Dungeon, not just the one the pillar is on.</p>",
                                                        RU:"Всё подземелье подвержено магии, исходящей от столпов."+
                                                        "<p>Столп на плитке {tileLabel.second} даёт бонус +1 жёлтый кубик {symbol.yellowDie} всем врагам, использующим оружие ближнего боя {symbol.rangeMelee}.</p>"+
                                                        "<p>Столп на плитке {tileLabel.third} даёт бонус +1 жёлтый кубик {symbol.yellowDie} всем врагам, использующим дальнобойное оружие {symbol.rangeRanged}.</p>"+
                                                        "<p>Столп на плитке {tileLabel.fourth} даёт бонус +1 жёлтый кубик {symbol.yellowDie} всем врагам, использующим магию {symbol.rangeMagic}.</p>"+
                                                        "<p>Магия каждого столпа действует на все плитки подземелья, а не только на ту, на которой он стоит.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Eliminare i Pilastri",
                                                        EN:"Eliminate the Pillars",
                                                        RU:"Уничтожить столпы"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni pilastro ha 6 PV, non ha difese e pu&ograve; essere attaccato come un nemico. Una volta distrutto, il pilastro viene rimosso dal tabellone di gioco e il suo effetto non si applica pi&ugrave;.",
                                                        EN:"Each pillar has 6 HP, no defenses, and can be attacked like an enemy. Once destroyed, the pillar is removed from the game board and its effect no longer applies.",
                                                        RU:"У каждого столпа 6 ОЗ, нет защиты, и его можно атаковать как врага. После уничтожения столп убирается с игрового поля, и его эффект больше не действует."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni pilastro ha 6 PV, non ha difese e pu&ograve; essere attaccato come un nemico. Una volta distrutto, il pilastro viene rimosso dal tabellone di gioco, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:4} PE e il suo effetto non si applica pi&ugrave;.",
                                                        EN:"Each pillar has 6 HP, no defenses, and can be attacked like an enemy. Once destroyed, the pillar is removed from the game board, all Heroes gets {label.miniCampaignObjectivesXp:split:4} XP, and its effect no longer applies.",
                                                        RU:"У каждого столпа 6 ОЗ, нет защиты, и его можно атаковать как врага. После уничтожения столп убирается с игрового поля, все герои получают {label.miniCampaignObjectivesXp:split:4} ОО, и его эффект больше не действует."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Le Tane",
                                                        EN:"The Nests",
                                                        RU:"Гнёзда"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe nella Zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e guadagnare 5 PE.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and gain 5 XP.",
                                                        RU:"Герой в зоне жетона Порчи {symbol.corruptionToken} может потратить 1 действие, чтобы сбросить его и получить 5 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Un Eroe nella zona di un segnalino Corruzione {symbol.corruptionToken} pu&ograve; spendere 1 azione per scartarlo e pescare un segnalino dal sacchetto dei Tesori.",
                                                        EN:"A Hero in a Corruption token {symbol.corruptionToken} Zone can spend 1 action to discard it and draw a token from the Treasure bag.",
                                                        RU:"Герой в зоне жетона Порчи {symbol.corruptionToken} может потратить 1 действие, чтобы сбросить его и вытянуть жетон из мешка Сокровищ."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta eliminato {label.commander@1}, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"Once {label.commander@1} is eliminated, any Hero can spend 1 MP in the Objective marker on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}.",
                                                        RU:"После того как {label.commander@1} устранён, любой герой может потратить 1 ОД в зоне жетона цели на цветной стороне, чтобы покинуть подземелье. Как только все герои покинули подземелье, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path-long" ],
                                            gameMode: [ "eliminateBuffBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "eliminateBuffBoss" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
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
                        },{
                            forCampaign:[ ], // Uses large maps and one-shot level cap.
                            type:"cleanBuffBoss",
                            objective:{
                                EN:"Delivery 4 tokens to 2 destinations, beat the boss, and reach the exit to win.",
                                RU:"Доставьте 4 жетона в 2 точки назначения, победите босса и доберитесь до выхода, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Ravaged Mountains \"Les Ge&ocirc;les de Granit\"",
                                EN:"Inspired by the Ravaged Mountains quest \"Les Ge&ocirc;les de Granit\"",
                                RU:"Вдохновлено заданием из Ravaged Mountains \"Les Ge&ocirc;les de Granit\""
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                prisoners:[
                                                    {
                                                        IT:[ "L'Oscurit&agrave; ha molti nemici" ],
                                                        EN:[ "The Darkness has many enemies" ],
                                                        RU:[ "У Тьмы много врагов" ]
                                                    },{
                                                        IT:[ "In molti si oppongono al Male" ],
                                                        EN:[ "Many oppose Evil" ],
                                                        RU:[ "Многие противостоят Злу" ]
                                                    },{
                                                        IT:[ "Oltre a voi, molti altri Eroi si sono battuti contro l'Oscurit&agrave;" ],
                                                        EN:[ "Besides you, many other Heroes have fought against the Darkness" ],
                                                        RU:[ "Помимо вас, многие другие герои сражались с Тьмой" ]
                                                    }
                                                ],
                                                value:[
                                                    {
                                                        IT:[ "e alcuni valgono pi&ugrave; da vivi che da morti." ],
                                                        EN:[ "and some are worth more alive than dead." ],
                                                        RU:[ "и некоторые ценнее живыми, чем мёртвыми." ]
                                                    },{
                                                        IT:[ "e alcuni di loro sono imprigionati e tenuti in vita come trofei." ],
                                                        EN:[ "and some of them are imprisoned and kept alive as trophies." ],
                                                        RU:[ "а некоторые из них заточены и сохраняются живыми как трофеи." ]
                                                    },{
                                                        IT:[ "e alcuni di loro sono stati catturati in attesa di essere giustiziati." ],
                                                        EN:[ "and some of them have been captured awaiting execution." ],
                                                        RU:[ "а некоторые из них схвачены и ожидают казни." ]
                                                    }
                                                ],
                                                discover:[
                                                    {
                                                        IT:[ "Gli Eroi hanno finalmente scoperto la posizione di una delle prigioni in cui sono tenuti." ],
                                                        EN:[ "The Heroes have finally discovered the location of one of the prisons where they are being held." ],
                                                        RU:[ "Герои наконец узнали расположение одной из тюрем, где их держат." ]
                                                    },{
                                                        IT:[ "Un informatore ha mostrato agli Eroi dove sono tenuti prigioneri." ],
                                                        EN:[ "An informant has shown the Heroes where the prisoners are." ],
                                                        RU:[ "Осведомитель показал героям, где находятся пленники." ]
                                                    },{
                                                        IT:[ "Una croce su una mappa costata cara indica una di quelle prigioni." ],
                                                        EN:[ "A cross on a costly map indicates one of those prisons." ],
                                                        RU:[ "Крест на дорого доставшейся карте указывает на одну из этих тюрем." ]
                                                    }
                                                ],
                                                security:[
                                                    {
                                                        IT:[ "Purtroppo, per assicurarsi che non provino a fuggire, {label.keeper@0}" ],
                                                        EN:[ "Unfortunately, to ensure they don't try to escape, {label.keeper@0}" ],
                                                        RU:[ "К сожалению, чтобы они не попытались сбежать, {label.keeper@0}" ]
                                                    },{
                                                        IT:[ "{label.keeper:capital@0} non possono permettersi che fuggano un'altra volta, per cui" ],
                                                        EN:[ "{label.keeper:capital@0} can't afford for them to escape again, so they" ],
                                                        RU:[ "{label.keeper:capital@0} не могут позволить им снова сбежать, поэтому они" ]
                                                    },{
                                                        IT:[ "{label.keeper:capital@1} sono stati puniti per la loro ingenuit&agrave;, per cui stavolta" ],
                                                        EN:[ "{label.keeper:capital@1} have been punished for their naivety, so this time they" ],
                                                        RU:[ "{label.keeper:capital@1} были наказаны за свою наивность, поэтому на этот раз они" ]
                                                    }
                                                ],
                                                transform:[
                                                    {
                                                        IT:[ "hanno trasformato i prigionieri in statue di pietra." ],
                                                        EN:[ "have transformed the prisoners into stone statues." ],
                                                        RU:[ "превратили пленников в каменные статуи." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Gli Eroi dovranno spezzare questo incantesimo e liberarli!" ],
                                                        EN:[ "The Heroes must break this spell and free them!" ],
                                                        RU:[ "Герои должны разрушить это заклинание и освободить их!" ]
                                                    },{
                                                        IT:[ "Gli Eroi dovranno trovare un modo per liberarli!" ],
                                                        EN:[ "The Heroes must find a way to free them!" ],
                                                        RU:[ "Герои должны найти способ их освободить!" ]
                                                    },{
                                                        IT:[ "Gli Eroi devono liberarli a tutti i costi!" ],
                                                        EN:[ "The Heroes must free them at all costs!" ],
                                                        RU:[ "Герои должны освободить их любой ценой!" ]
                                                    }
                                                ],
                                                guardian:[
                                                    {
                                                        IT:[ "il Guardiano", "questo &egrave;", "eliminato" ],
                                                        EN:[ "the Guardian", "this is", "eliminated" ],
                                                        RU:[ "Страж", "это", "устранён" ]
                                                    },{
                                                        IT:[ "la Sentinella", "questa &egrave;", "eliminata" ],
                                                        EN:[ "the Sentinel", "this is", "eliminated" ],
                                                        RU:[ "Дозорный", "это", "устранён" ]
                                                    },{
                                                        IT:[ "la Vedetta", "questa &egrave;", "eliminata" ],
                                                        EN:[ "the Lookout", "this is", "eliminated" ],
                                                        RU:[ "Наблюдатель", "это", "устранён" ]
                                                    }
                                                ],
                                                keeper:[
                                                    {
                                                        IT:[ "i Carcerieri", "molti Carcerieri" ],
                                                        EN:[ "the Jailers", "many Jailers" ],
                                                        RU:[ "Тюремщики", "многие Тюремщики" ]
                                                    },{
                                                        IT:[ "i Secondini", "molti Secondini" ],
                                                        EN:[ "the Prison Guards", "many Prison Guards" ],
                                                        RU:[ "Тюремные стражи", "многие Тюремные стражи" ]
                                                    },{
                                                        IT:[ "i Custodi", "molti Custodi" ],
                                                        EN:[ "the Keepers", "many Keepers" ],
                                                        RU:[ "Надзиратели", "многие Надзиратели" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Il Carcere di Granito",
                                            EN:"The Granite Prison",
                                            RU:"Гранитная Тюрьма"
                                        },{
                                            EN:"{label.keeper:capital@0}",
                                            RU:"{label.keeper:capital@0}"
                                        },{
                                            EN:"{label.guardian:capital@0}",
                                            RU:"{label.guardian:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.prisoners@0} {label.value@0} {label.discover@0} {label.security@0} {label.transform@0} {label.mission@0}",
                                            RU:"{label.prisoners@0} {label.value@0} {label.discover@0} {label.security@0} {label.transform@0} {label.mission@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполняйте цели в указанном порядке:"
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
                                                        IT:"Libera",
                                                        EN:"Free",
                                                        RU:"Освободить"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Liberare tutti i prigionieri pietrificati",
                                                        EN:"Free all the petrified prisoners",
                                                        RU:"Освободите всех окаменевших пленников"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Elimina",
                                                        EN:"Eliminate",
                                                        RU:"Уничтожить"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare {label.guardian@0} e fuggire",
                                                        EN:"Kill {label.guardian@0} and escape",
                                                        RU:"Убейте {label.guardian@0} и сбегите"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Preparation",
                                                        RU:"Специальная подготовка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Posiziona 2 segnalini Salute su ciascun segnalino Obiettivo sul lato grigio.",
                                                        EN:"Place 2 Health tokens on each Objective token on the gray side.",
                                                        RU:"Положите 2 жетона Здоровья на каждый жетон цели на серой стороне."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Prigionieri",
                                                        EN:"The Prisoners",
                                                        RU:"Пленники"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ciascun segnalino Tempo {symbol.timeToken} rappresenta un prigioniero pietrificato. Qualsiasi Eroe nella sua Zona pu&ograve; spendere 1 azione per raccoglierlo. Pu&ograve; essere scambiato come un oggetto.",
                                                        EN:"Each Time token {symbol.timeToken} represents a petrified prisoner. Any Hero in its Zone can spend 1 action to pick it up. It can be exchanged like an item.",
                                                        RU:"Каждый жетон Времени {symbol.timeToken} представляет окаменевшего пленника. Любой герой в его зоне может потратить 1 действие, чтобы подобрать его. Им можно обмениваться как предметом."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.keeper:capital@0}",
                                                        RU:"{label.keeper:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre una porta che conduce ad una Stanza contenente un segnalino Tempo {symbol.timeToken}, pescare normalmente la carta Porta. Oltre alle indicazioni su questa carta, generare un'Orda del livello attuale del Dungeon nella Zona del segnalino Tempo {symbol.timeToken}, anche per le stanze in cui la carta Porta indica l'assenza di nemici.",
                                                        EN:"When a Hero opens a door that leads to a Room containing a Time token {symbol.timeToken}, draw the Door card normally. In addition to the indications on this card, spawn a Horde of the current Dungeon level in the Time token {symbol.timeToken} Zone, even for rooms where the Door card indicates the absence of enemies.",
                                                        RU:"Когда герой открывает дверь, ведущую в комнату с жетоном Времени {symbol.timeToken}, тяните карту Дверь обычным образом. Помимо указаний на этой карте, породите орду текущего уровня подземелья в зоне жетона Времени {symbol.timeToken}, даже для комнат, в которых карта Дверь указывает на отсутствие врагов."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Spezzare la Maledizione",
                                                        EN:"Break the Curse",
                                                        RU:"Разрушить проклятие"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe con almeno un segnalino Tempo {symbol.timeToken} che si trova nella Zona di un segnalino Obiettivo sul lato grigio pu&ograve; spendere 1 azione per spezzare la maledizione di un prigioniero. Per farlo, rimuovere un segnalino Salute da quel segnalino Obiettivo sul lato grigio e scartare 1 segnalino Tempo {symbol.timeToken} dall'Eroe: questo indica che il prigioniero &egrave; stato liberato. Quando un segnalino Obiettivo sul lato grigio non ha pi&ugrave; alcun segnalino Salute viene scartato.",
                                                        EN:"A Hero with at least one Time token {symbol.timeToken} on an Objective token on the gray side Zone can spend 1 action to break one prisoner curse. To do so, remove a Health token from that Objective token on the gray side and discard 1 Time token {symbol.timeToken} from the Hero: this indicates that the prisoner has been freed. When an Objective token on the gray side has no Health tokens left, it is discarded.",
                                                        RU:"Герой, у которого есть хотя бы один жетон Времени {symbol.timeToken}, находящийся в зоне жетона цели на серой стороне, может потратить 1 действие, чтобы разрушить проклятие одного пленника. Для этого снимите жетон Здоровья с этого жетона цели на серой стороне и сбросьте 1 жетон Времени {symbol.timeToken} у героя: это означает, что пленник освобождён. Когда у жетона цели на серой стороне не остаётся жетонов Здоровья, он сбрасывается."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"I Rinforzi",
                                                        EN:"Reinforcements",
                                                        RU:"Подкрепление"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un Eroe apre la porta contrassegnata da un contorno rosso, genera 1 Mostro Errante del livello del Dungeon su ciascuno dei segnalini Corruzione {symbol.corruptionToken} e rimuovi i segnalini.",
                                                        EN:"When a Hero opens the door marked with a red outline, spawn 1 Dungeon level Roaming Monster on each Corruption token {symbol.corruptionToken} and remove the tokens.",
                                                        RU:"Когда герой открывает дверь, отмеченную красным контуром, породите 1 блуждающего монстра уровня подземелья на каждом жетоне Порчи {symbol.corruptionToken} и уберите эти жетоны."
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
                                                        IT:"Quando il secondo prigioniero viene liberato, generare un Mostro Errante di livello 5 nella Zona del segnalino Obiettivo sul lato colorato: {label.guardian@1} {label.guardian@0}.",
                                                        EN:"When the second prisoner is freed, spawn a level 5 Roaming Monster in the Objective token on the colored side Zone: {label.guardian@1} {label.guardian@0}.",
                                                        RU:"Когда освобождён второй пленник, породите блуждающего монстра 5 уровня в зоне жетона цели на цветной стороне: {label.guardian@1} {label.guardian@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"The Escape",
                                                        RU:"Побег"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta {label.guardian@2} {label.guardian@0} e salvati tutti i {tokensCount.time} prigionieri, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo sul lato colorato per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"Once {label.guardian@0} is eliminated and all {tokensCount.time} prisoners are freed, any Hero can spend 1 MP in the Objective marker on the colored side Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}.",
                                                        RU:"После того как {label.guardian@0} устранён и все {tokensCount.time} пленников освобождены, любой герой может потратить 1 ОД в зоне жетона цели на цветной стороне, чтобы покинуть подземелье. Как только все герои покинули подземелье, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "largeMaze" ],
                                            gameMode: [ "cleanBuffBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "cleanBuffBoss" ],
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