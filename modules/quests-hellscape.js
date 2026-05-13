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
            id:"quests-hellscape",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscape", "untranslated-fr" ],
            label:{
                EN:"MD2: Hellscape inspired quest models",
                RU:"MD2: модели заданий, вдохновлённые Hellscape"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"finalBoss",
                            objective:{
                                EN:"Separated Heroes must gather to a zone and beat a Roaming Monster to win.",
                                RU:"Разделённые герои должны собраться в одной зоне и победить блуждающего монстра, чтобы выиграть."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Hellscape\"",
                                RU:"Вдохновлено заданием Hellscape «Hellscape»"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                problem:[
                                                    {
                                                        IT:[ "Qualcosa &egrave; andato storto con l'ultimo portale! Ci siamo persi e" ],
                                                        EN:[ "Something went wrong with the last portal! We got lost and" ],
                                                        RU:[ "Что-то пошло не так с последним порталом! Мы заблудились, и" ]
                                                    },{
                                                        IT:[ "Non ricordiamo cosa sia successo. Appena abbiamo riaperto gli occhi ci siamo accorti che" ],
                                                        EN:[ "We don't remember what happened. As soon as we reopened our eyes we realized that" ],
                                                        RU:[ "Мы не помним, что случилось. Как только мы снова открыли глаза, мы поняли, что" ]
                                                    },{
                                                        IT:[ "Quella di separarci nella foresta non &egrave; stata una buona idea..." ],
                                                        EN:[ "Separating us in the forest wasn't a good idea..." ],
                                                        RU:[ "Разделиться в лесу было плохой идеей..." ]
                                                    }
                                                ],
                                                lost:[
                                                    {
                                                        IT:[ "ora siamo separati gli uni dagli altri!", "Separati!" ],
                                                        EN:[ "we are now separated from each other!", "Separated!" ],
                                                        RU:[ "теперь мы отделены друг от друга!", "Разделены!" ]
                                                    },{
                                                        IT:[ "qualche forza misteriosa deve averci separato!", "La Forza Misteriosa" ],
                                                        EN:[ "some mysterious force must have separated us!", "The Mysterious Force" ],
                                                        RU:[ "какая-то таинственная сила, должно быть, разделила нас!", "Таинственная Сила" ]
                                                    },{
                                                        IT:[ "non capiamo dove siamo finiti!", "Dove siamo finiti?" ],
                                                        EN:[ "we don't understand where we ended up!", "Where have we ended up?" ],
                                                        RU:[ "мы не понимаем, куда попали!", "Куда мы попали?" ]
                                                    }
                                                ],
                                                guard:[
                                                    {
                                                        IT:[ "C'&egrave; un Mostro Errante che fa la guardia all'unica via d'uscita" ],
                                                        EN:[ "There is a Roaming Monster guarding the only way out" ],
                                                        RU:[ "Блуждающий монстр охраняет единственный выход" ]
                                                    },{
                                                        IT:[ "Si narra che da queste parti si trovi una tremenda creaturea" ],
                                                        EN:[ "It is said that in these parts there is a terrible creature" ],
                                                        RU:[ "Говорят, что в этих краях обитает ужасное существо" ]
                                                    },{
                                                        IT:[ "Qualcosa di terribile si aggira tra queste mura" ],
                                                        EN:[ "Something terrible is lurking within these walls" ],
                                                        RU:[ "Что-то ужасное скрывается в этих стенах" ]
                                                    }
                                                ],
                                                avoid:[
                                                    {
                                                        IT:[ "e non possiamo rischiare che ci segua." ],
                                                        EN:[ "and we can't risk him following us." ],
                                                        RU:[ "и мы не можем рисковать, чтобы он последовал за нами." ]
                                                    },{
                                                        IT:[ "e non abbiamo altra scelta che affrontarla." ],
                                                        EN:[ "and we have no choice but to face it." ],
                                                        RU:[ "и у нас нет другого выбора, кроме как противостоять ему." ]
                                                    },{
                                                        IT:[ "e potrebbe essere l'obiettivo che cercavamo da tempo." ],
                                                        EN:[ "and it could be the goal we've been looking for for some time." ],
                                                        RU:[ "и это может быть та цель, которую мы давно искали." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Dobbiamo riunirci e sopprimere il mostro" ],
                                                        EN:[ "We must gather and eliminate the monster" ],
                                                        RU:[ "Мы должны собраться и устранить монстра" ]
                                                    },{
                                                        IT:[ "Dovremo affrontare una durissima battaglia" ],
                                                        EN:[ "We will have to face a very tough battle" ],
                                                        RU:[ "Нам предстоит очень тяжёлая битва" ]
                                                    },{
                                                        IT:[ "Non possiamo farcela da soli... Dobbiamo ritrovarci" ],
                                                        EN:[ "We can't do it alone... We have to reunite" ],
                                                        RU:[ "Мы не справимся в одиночку... Мы должны воссоединиться" ]
                                                    }
                                                ],
                                                goal:[
                                                    {
                                                        IT:[ "prima di tornare a casa!" ],
                                                        EN:[ "before going home!" ],
                                                        RU:[ "прежде чем вернуться домой!" ]
                                                    },{
                                                        IT:[ "per poter porre fine a tutto questo!" ],
                                                        EN:[ "to be able to put an end to all this!" ],
                                                        RU:[ "чтобы положить всему этому конец!" ]
                                                    },{
                                                        IT:[ "o per il Regno non ci sar&agrave; speranza!" ],
                                                        EN:[ "or there will be no hope for the Kingdom!" ],
                                                        RU:[ "или для королевства не будет надежды!" ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "Portale Arcano", "Portali Arcani", "i", "un", "il suo portale", "unicamente il proprio portale" ],
                                                        EN:[ "Arcane Portal", "Arcane Portals", "the", "an", "his portal", "their own portal only" ],
                                                        RU:[ "Тайный портал", "Тайные порталы", " ", "", "его портал", "только свой собственный портал" ]
                                                    },{
                                                        IT:[ "Teletrasporto", "Teletrasporti", "i", "un", "il suo teletrasporto", "unicamente il proprio teletrasporto" ],
                                                        EN:[ "Teleporter", "Teleporters", "the", "a", "his teleporter", "their own teleporter only" ],
                                                        RU:[ "Телепорт", "Телепорты", " ", "", "его телепорт", "только свой собственный телепорт" ]
                                                    },{
                                                        IT:[ "Specchio Incantato", "Specchi Incantati", "gli", "uno", "il suo specchio", "unicamente il proprio specchio" ],
                                                        EN:[ "Enchanted Mirror", "Enchanted Mirrors", "the", "an", "his mirror", "their own mirror only" ],
                                                        RU:[ "Зачарованное зеркало", "Зачарованные зеркала", " ", "", "его зеркало", "только своё собственное зеркало" ]
                                                    }
                                                ],
                                                cliffhanger:[
                                                    {
                                                        IT:[ "L'Interferenza Oscura" ],
                                                        EN:[ "The Dark Interference" ],
                                                        RU:[ "Тёмное вмешательство" ]
                                                    },{
                                                        IT:[ "Il Combattimento Finale" ],
                                                        EN:[ "The Final Battle" ],
                                                        RU:[ "Финальная битва" ]
                                                    },{
                                                        IT:[ "L'Ultima Prova" ],
                                                        EN:[ "The Last Challenge" ],
                                                        RU:[ "Последнее испытание" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDoor:[
                                                    {
                                                        IT:[ "{label.gate@5}" ],
                                                        EN:[ "{label.gate@5}" ],
                                                        RU:[ "{label.gate@5}" ]
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
                                            EN:"{label.gate:capital@2} {label.gate:capital@1}",
                                            RU:"{label.gate:capital@2} {label.gate:capital@1}"
                                        },{
                                            EN:"{label.lost:capital@1}",
                                            RU:"{label.lost:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.lost@0} {label.guard@0} {label.avoid@0} {label.objective@0} {label.goal@0}",
                                            RU:"{label.problem@0} {label.lost@0} {label.guard@0} {label.avoid@0} {label.objective@0} {label.goal@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"L'Adunanza",
                                                        EN:"The Gathering",
                                                        RU:"Сбор"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Tutti gli Eroi devono raggiungere la Tessera {tileLabel.center}",
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
                                                        IT:"Sconfiggere il Mostro",
                                                        EN:"Defeating the Monster",
                                                        RU:"Победить монстра"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Sconfiggere il Mostro Errante Finale",
                                                        EN:"Defeating the Final Roaming Monster",
                                                        RU:"Победить финального блуждающего монстра"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Separati",
                                                        EN:"Separated",
                                                        RU:"Разделены"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, gli Eroi partono separati e ogni giocatore deve collocare il proprio Eroe in una Zona di Partenza diversa. In una partita a 5 o 6 Eroi, 1 o 2 Zone di Partenza possono contenere un massimo di 2 Eroi. A tutti i fini (facendo eccezione per il Mostro Errante Finale), considerate la Missione come se soltanto 2 Eroi stessero giocando.<p>In una partita a meno di 4 Eroi, rimuovete abbastanza Tessere in modo che restino solo la Tessera del Boss ({tileLabel.center}) pi&ugrave; 1 Tessera per Eroe. Non rimuovete la tessera {tileLabel.first}.</p>",
                                                        EN:"In this Mission, the Heroes start separately and each player must place their Hero in a different Starting Zone. In a game with 5 or 6 Heroes, 1 or 2 Starting Zones can contain a maximum of 2 Heroes. For any purposes (except for the Final Roaming Monster), treat the Mission as if only 2 Heroes were playing.<p>In a game with fewer than 4 Heroes, remove enough Tiles so that only the Boss Tile remains ({tileLabel.center}) plus 1 Tile per Hero. Do not remove the {tileLabel.first} tile.</p>",
                                                        RU:"В этой миссии герои начинают раздельно и каждый игрок должен поместить своего героя в отдельную стартовую зону. В игре с 5 или 6 героями 1 или 2 стартовые зоны могут содержать максимум 2 героя. Для всех целей (кроме финального блуждающего монстра) считайте миссию так, как будто играют только 2 героя.<p>В игре с менее чем 4 героями уберите достаточно плиток, чтобы осталась только плитка босса ({tileLabel.center}) плюс 1 плитка на героя. Не убирайте плитку {tileLabel.first}.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nota",
                                                        EN:"Note",
                                                        RU:"Примечание"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le Orde vengono generate soltanto con 2 Gregari e il proprio Comandante e i Mostri Erranti hanno la Salute equivalente solo a 2 Eroi.",
                                                        EN:"The Hordes are only generated with 2 Minions and their Leader and the Roaming Monsters have the equivalent Health of only 2 Heroes.",
                                                        RU:"Орды создаются только с 2 приспешниками и их предводителем, а у блуждающих монстров здоровье эквивалентно только 2 героям."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.gate@1}",
                                                        RU:"{label.gate@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.gate@2} {label.gate@1} rappresentati dai segnalini Obiettivo, che per&ograve; sono disattivati."+
                                                            "<p>{label.gate:capital@3} {label.gate@0} si attiva immediatamente ed il suo segnalino Obiettivo viene girato sul suo lato colorato dopo che la sua Tessera corrispondente &egrave; rimasta priva di Nemici e tutte le Camere sono state rivelate.</p>"+
                                                            "Qualsiasi Eroe che ha attivato {label.gate@4} pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo di qualsiasi colore per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo di qualsiasi colore.",
                                                        EN: "The tiles are not connected in this Mission and can only be accessed using {label.gate@2} {label.gate@1} represented by the Objective tokens, which however are deactivated."+
                                                        "<p>{label.gate:capital@3} {label.gate@0} activates immediately and its Objective token is flipped to its colored side after its corresponding tile remains have no Enemies and all Chambers are been revealed.</p>"+
                                                        "Any Hero who has activated {label.gate@4} can spend 1 MP while in a Zone with an Objective token of any color to move to any other zone with an Objective token of any color.",
                                                        RU: "Плитки не связаны в этой миссии, и к ним можно получить доступ только через {label.gate@2} {label.gate@1}, представленные жетонами цели, которые, однако, деактивированы."+
                                                        "<p>{label.gate:capital@3} {label.gate@0} активируется немедленно, и его жетон цели переворачивается на цветную сторону после того, как на соответствующей плитке не останется врагов и все комнаты будут открыты.</p>"+
                                                        "Любой герой, активировавший {label.gate@4}, может потратить 1 ОД, находясь в зоне с жетоном цели любого цвета, чтобы переместиться в любую другую зону с жетоном цели любого цвета."
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
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate un Mostro Errante di Livello 5 nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda di Livello 5 finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate a Level 5 Roaming Monster in its area.<p>Draw cards from the Level 5 Horde Items deck until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>",
                                                        RU:"Когда вы открываете дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карты двери, уберите жетон порчи {symbol.corruptionToken} и создайте блуждающего монстра 5 уровня в этой зоне.<p>Берите карты из колоды предметов орды 5 уровня, пока не откроете оружие с таким же типом атаки, как у блуждающего монстра. Снарядите блуждающего монстра этим оружием, добавив кубики оружия в пул кубиков атаки блуждающего монстра.</p><p>Когда блуждающий монстр побеждён, {label.questVictory@0}.</p>"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando aprite la porte con il bordo rosso sulla Tessera {tileLabel.center} non risolvete carte Porta, rimuovete il segnalino Corruzione {symbol.corruptionToken} e generate {label.campaignBoss@0} nella sua zona.<p>Pescate carte dal mazzo degli Oggetti dell'Orda corrispondente al suo rango finch&eacute; non rivelate un'arma con lo stesso tipo di attacco del Mostro Errante. Assegnate quell'arma al Mostro Errante, aggiungendo i dadi dell'arma alla riserva di dadi di Attacco del Mostro Errante.</p><p>Quando il Mostro Errante viene sconfitto {label.questVictory@0}.</p>",
                                                        EN:"When you open the door with the red outline on the {tileLabel.center} tile, do not resolve Door cards, remove the Corruption token {symbol.corruptionToken}, and generate {label.campaignBoss@0} in its area.<p>Draw cards from the Horde Items deck matching its rank until you reveal a weapon with the same attack type as the Roaming Monster. Equip that weapon to the Roaming Monster, adding the weapon's dice to the Roaming Monster's Attack dice pool.</p><p>When the Roaming Monster is defeated {label.questVictory@0}.</p>",
                                                        RU:"Когда вы открываете дверь с красной обводкой на плитке {tileLabel.center}, не разыгрывайте карты двери, уберите жетон порчи {symbol.corruptionToken} и создайте {label.campaignBoss@0} в этой зоне.<p>Берите карты из колоды предметов орды соответствующего ранга, пока не откроете оружие с таким же типом атаки, как у блуждающего монстра. Снарядите блуждающего монстра этим оружием, добавив кубики оружия в пул кубиков атаки блуждающего монстра.</p><p>Когда блуждающий монстр побеждён, {label.questVictory@0}.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "cross" ],
                                            gameMode: [ "cross" ],
                                            difficulty:[ "none" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "same" ],
                                            corridors: [ "cross" ]
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Finire il combattimento in sospeso contro {boss.bossBadName@0}",
                                                    EN:"Finish the pending fight against {boss.bossBadName@0}",
                                                    RU:"Завершить незаконченный бой с {boss.bossBadName@0}"
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
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"xpAndDeliver",
                            objective:{
                                EN:"Collect resources from map tokens or a fixed amount depending on the eliminated enemy type. Reach a resource quota and perform an action on a zone to win.",
                                RU:"Собирайте ресурсы с жетонов карты или фиксированное количество в зависимости от типа устранённого врага. Достигните квоты ресурсов и выполните действие в зоне, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Collezionista di Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Collector\"",
                                RU:"Вдохновлено заданием Hellscape «Коллекционер душ»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                gate:[
                                                    {
                                                        IT:[ "i", "cancelli", "che portano",  "sono sbarrati da", "il", "cancello", "Zona del Cancello" ],
                                                        EN:[ "the", "gates", "leading", "are barred by", "the", "gate", "Zone of the Gate" ],
                                                        RU:[ "", "врата", "ведущие", "преграждены", "", "врата", "Зона врат" ]
                                                    },{
                                                        IT:[ "i", "portali", "che conducono", "sono tenuti ben saldi da", "il", "portale", "Zona del Portale" ],
                                                        EN:[ "the", "portals", "leading", "are held firmly by", "the", "portal", "Zone of the Portal" ],
                                                        RU:[ "", "порталы", "ведущие", "крепко удерживаются", "", "портал", "Зона портала" ]
                                                    },{
                                                        IT:[ "il", "ponte", "che ci permetterebbe di proseguire", "&egrave; bloccato da", "il", "ponte", "Zona del Ponte" ],
                                                        EN:[ "the", "bridge", "that would allow us to continue", "is blocked by", "the", "bridge", "Zone of the Bridge" ],
                                                        RU:[ "", "мост", "который позволил бы нам продолжить путь", "заблокирован", "", "мост", "Зона моста" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "alla", "Valle degli Spiriti", "entrare nella", "nella" ],
                                                        EN:[ "to the", "Spirit Valley", "enter into", "in the" ],
                                                        RU:[ "к", "Долине духов", "войти в", "в" ]
                                                    },{
                                                        IT:[ "verso la", "Capitale degli Antichi", "entrare nella", "nella" ],
                                                        EN:[ "towards the", "Capital of the Ancients", "enter the", "in the" ],
                                                        RU:[ "к", "Столице Древних", "войти в", "в" ]
                                                    },{
                                                        IT:[ "verso le", "Scogliere Tempestose", "raggiungere le", "sulle" ],
                                                        EN:[ "toward the", "Stormy Cliffs", "reach the", "on the" ],
                                                        RU:[ "к", "Бурным утёсам", "достичь", "на" ]
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:[ "un'Interdizione Demoniaca", "deve essere disattivata con un'offerta in Anime...", "Ma raccogliere qualcosa di effimero come un'anima pu&ograve; essere un'impresa complicata...", "raccogliere", "le", "anime", "anima", "le", "Prigioni delle Anime", "delle", "di" , "l'Interdizione", "dalla", "distruzione", "distrutto", "distruggerli", "distrutti", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Demonic Ward", "must be deactivated with an offering in Souls...", "But collecting something as ephemeral as a soul can be a tricky business...", "collect", "the", "souls", "soul", "the", "Souls Prisons", "of", "of", "the Interdiction", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ],
                                                        RU:[ "Демонической защитой", "должна быть отключена подношением из Душ...", "Но собрать что-то столь эфемерное, как душа, может оказаться непростой задачей...", "собрать", "", "души", "душа", "", "Тюрьмы душ", "", "из", "Защита", "от", "уничтожения", "уничтожен", "уничтожить их", "уничтожены", "уничтожить", "уничтожая", "все" ]
                                                    },{
                                                        IT:[ "un Grande Guardiano", "deve essere convinto del nostro eroismo...", "Ma dimostrarlo potrebbe essere molto pericoloso...", "raccogliere", "i", "trofei", "trofeo", "le", "Icone del Male", "dei", "di" , "il Custode", "dalla", "distruzione", "distrutte", "distruggerle", "distrutte", "a distruggere", "distruggendo", "tutte le" ],
                                                        EN:[ "a Great Guardian", "must be convinced of our heroism...", "But proving it could be very dangerous...", "collect", "the", "trophies", "trophy", "the", "Icons of Evil", "of", "of", "the Keeper", "from the", "destruction", "destroyed", "destroy them", "destroyed", "to destroy", "destroying", "all the" ],
                                                        RU:[ "Великим стражем", "должен быть убеждён в нашем героизме...", "Но доказать это может быть очень опасно...", "собрать", "", "трофеи", "трофей", "", "Иконы зла", "", "из", "Хранитель", "от", "уничтожения", "уничтожены", "уничтожить их", "уничтожены", "уничтожить", "уничтожая", "все" ]
                                                    },{
                                                        IT:[ "una Guardia Corrotta", "deve essere convinta a collaborare con un bel sacco di monete...", "Ma trovare dell'oro, da queste parti, pu&ograve; costarci la vita...", "raccogliere", "le", "monete", "moneta", "i", "Forzieri", "delle", "di" , "la Guardia", "dall'", "apertura", "aperto", "aprirli", "aperti", "ad aprire", "aprendo", "tutti i" ],
                                                        EN:[ "a Corrupt Guard", "must be convinced to collaborate with a nice bag of coins...", "But finding gold in these parts can cost us our lives...", "collect" , "the", "coins", "coin", "the", "Chests", "of", "of" , "the Guard", "from the", "opening", "open", "open them" , "opened", "to open", "opening", "all the" ],
                                                        RU:[ "Продажным стражем", "должен быть убеждён к сотрудничеству хорошим мешком монет...", "Но найти золото в этих краях может стоить нам жизни...", "собрать", "", "монеты", "монета", "", "Сундуки", "", "из", "Стража", "от", "открытия", "открыт", "открыть их", "открыты", "открыть", "открывая", "все" ]
                                                    }
                                                ],
                                                toGoOn:[
                                                    {
                                                        IT:[ "Per arrivare a destinazione," ],
                                                        EN:[ "To get to your destination," ],
                                                        RU:[ "Чтобы добраться до пункта назначения," ]
                                                    },{
                                                        IT:[ "Per poter proseguire," ],
                                                        EN:[ "To continue," ],
                                                        RU:[ "Чтобы продолжить," ]
                                                    },{
                                                        IT:[ "Se vogliamo proseguire il nostro viaggio" ],
                                                        EN:[ "If we want to continue our journey" ],
                                                        RU:[ "Если мы хотим продолжить наше путешествие" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectMoreItems:[
                                                    {
                                                        IT:[ 15, "{label.block:capital@5}", "{label.block:capital@5} per ogni Eroe" ],
                                                        EN:[ 15, "{label.block:capital@5}", "{label.block:capital@5} for each Hero" ],
                                                        RU:[ 15, "{label.block:capital@5}", "{label.block:capital@5} на каждого героя" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}" ],
                                                        EN:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}"],
                                                        RU:[ "{label.block@17} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}", "{label.block@18} {label.block@19} {label.block@8}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"Il Collezionista {label.block@10} {label.block:capital@5}",
                                            EN:"The {label.block:capital@5} Collector",
                                            RU:"Коллекционер {label.block@10} {label.block:capital@5}"
                                        },{
                                            EN:"{label.block:capital@4} {label.block:capital@5}",
                                            RU:"{label.block:capital@4} {label.block:capital@5}"
                                        },{
                                            EN:"{label.block:capital@7} {label.block:capital@8}",
                                            RU:"{label.block:capital@7} {label.block:capital@8}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.gate:capital@0} {label.gate@1} {label.gate@2} {label.destination@0} {label.destination@1} {label.gate@3} {label.block@0}. {label.toGoOn@0} {label.block@11} {label.block@1} {label.block@2}",
                                            RU:"{label.gate:capital@0} {label.gate@1} {label.gate@2} {label.destination@0} {label.destination@1} {label.gate@3} {label.block@0}. {label.toGoOn@0} {label.block@11} {label.block@1} {label.block@2}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}",
                                                        RU:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere 10 {label.block:capital@5} per ogni Eroe",
                                                        EN:"Collect 10 {label.block:capital@5} for each Hero",
                                                        RU:"Соберите 10 {label.block:capital@5} на каждого героя"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}",
                                                        RU:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Gli Eroi devono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}",
                                                        EN:"Heroes must exit the Dungeon through {label.gate@4} {label.gate:capital@5}",
                                                        RU:"Герои должны выйти из подземелья через {label.gate@4} {label.gate:capital@5}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital@3} {label.block@4} {label.block:capital@5}",
                                                        RU:"{label.block:capital@3} {label.block@4} {label.block:capital@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital@4} {label.block:capital@5} provengono dall'uccisione dei Nemici e {label.block@12} {label.block@13} dei segnalini Obiettivo. Gli Eroi raccolgono 1 {label.block:capital@6} per ogni Gregario o Comandante ucciso da un Eroe. Ogni Mostro Errante conferisce agli Eroi 3 {label.block:capital@5} quando viene ucciso. I segnalini Obiettivo rappresentano {label.block@7} {label.block@8} e conferiscono 5 {label.block:capital@5} quando {label.block@16}. Collocate i segnalini Salute sulla {label.gate@6} (indicata dal segnalino Obiettivo grigio) per tenere il conto {label.block@9} {label.block:capital@5} che avete raccolto.",
                                                        EN:"{label.block:capital@4} {label.block:capital@5} come from killing Enemies and {label.block@12} {label.block@13} of the Objective tokens. Heroes collect 1 {label.block:capital@6} for each Minion or Leader killed by a Hero. Each Roaming Monster grants Heroes 3 {label.block:capital@5} when killed. Objective tokens represent {label.block@7} {label.block@8} and grant 5 {label.block:capital@5} when {label.block@16}. Place Health tokens on the {label.gate@6} (indicated by the gray Objective token) to hold the account {label.block@9} {label.block:capital@5} that you have raised.",
                                                        RU:"{label.block:capital@4} {label.block:capital@5} получают за убийство врагов и {label.block@12} {label.block@13} жетонов цели. Герои получают 1 {label.block:capital@6} за каждого приспешника или предводителя, убитого героем. Каждый блуждающий монстр даёт героям 3 {label.block:capital@5} при убийстве. Жетоны цели представляют {label.block@7} {label.block@8} и дают 5 {label.block:capital@5}, когда {label.block@16}. Размещайте жетоны здоровья на {label.gate@6} (обозначенной серым жетоном цели), чтобы вести счёт {label.block@9} {label.block:capital@5}, которые вы собрали."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block@8}",
                                                        RU:"{label.block@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. L'Eroe che l'ha {label.block@14} ottiene 5 PE e gli Eroi raccolgono 5 {label.block:capital@5}.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Hero who has {label.block@14} it gets 5 XP and the Heroes collect 5 {label.block:capital@5}.",
                                                        RU:"Цветной стороной вверх жетоны цели представляют {label.block@7} {label.block@8}. Любой герой в той же зоне, что и жетон цели, может потратить 1 действие, чтобы {label.block@15}. Уберите жетон из подземелья. Герой, который {label.block@14} его, получает 5 ОО, а герои собирают 5 {label.block:capital@5}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene 5 PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets 5 XP.",
                                                        RU:"Цветной стороной вверх жетоны цели представляют {label.block@7} {label.block@8}. Любой герой в той же зоне, что и жетон цели, может потратить 1 действие, чтобы {label.block@15}. Уберите жетон из подземелья. Герои собирают 5 {label.block:capital@5}, и все герои получают 5 ОО."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo colorati a faccia in su rappresentano {label.block@7} {label.block@8}. Qualsiasi Eroe che si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per {label.block@15}. Rimuovete il segnalino dal Dungeon. Gli Eroi raccolgono 5 {label.block:capital@5} e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE.",
                                                        EN:"The colored face-up Objective tokens represent {label.block@7} {label.block@8}. Any Hero in the same Zone as an Objective token can spend 1 action to {label.block@15}. Remove the token from the Dungeon. The Heroes collect 5 {label.block:capital@5} and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} XP.",
                                                        RU:"Цветной стороной вверх жетоны цели представляют {label.block@7} {label.block@8}. Любой герой в той же зоне, что и жетон цели, может потратить 1 действие, чтобы {label.block@15}. Уберите жетон из подземелья. Герои собирают 5 {label.block:capital@5}, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.destination:capital@2} {label.destination@1}",
                                                        RU:"{label.destination:capital@2} {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena gli Eroi possiedono un totale di 10 {label.block:capital@5} per Eroe, possono uscire dal Dungeon attraverso {label.gate@4} {label.gate:capital@5}: un Eroe che si trova nella {label.gate@6} pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"As soon as the Heroes have a total of 10 {label.block:capital@5} per Hero, they can exit the Dungeon through {label.gate@4} {label.gate:capital@5}: a Hero in the {label.gate@6} can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}.",
                                                        RU:"Как только у героев в сумме есть 10 {label.block:capital@5} на героя, они могут выйти из подземелья через {label.gate@4} {label.gate:capital@5}: герой в {label.gate@6} может потратить 1 ОД, чтобы выйти из подземелья. Как только все герои вышли из подземелья, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "xpAndDeliver" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectMoreItems", "collectAllItems" ]
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
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che attende gli Eroi {label.destination@3} {label.destination@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting the Heroes {label.destination@3} {label.destination@1}",
                                                    RU:"Устранить {boss.bossBadName@0}, ожидающего героев {label.destination@3} {label.destination@1}"
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
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[0],
                            forMaps:[0,1],
                            type:"collect",
                            objective:{
                                EN:"Collect all tokens and perform an action on a zone to win.",
                                RU:"Соберите все жетоны и выполните действие в зоне, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Via per Hellscape\"",
                                EN:"Inspired by the Hellscape quest \"Highway to Hellscape\"",
                                RU:"Вдохновлено заданием Hellscape «Путь в Hellscape»"
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                reason:[
                                                    {
                                                        IT:"La proliferazione dei portali attorno la capitale lascia credere",
                                                        EN:"The proliferation of portals around the capital suggests",
                                                        RU:"Появление множества порталов вокруг столицы наводит на мысль,"
                                                    },{
                                                        IT:"I misteriosi rapimenti accaduti nei villaggi vicini suggeriscono",
                                                        EN:"The mysterious kidnappings that occurred in the nearby villages suggest",
                                                        RU:"Таинственные похищения в соседних деревнях наводят на мысль,"
                                                    },{
                                                        IT:"Gli incendi scoppiati misteriosamente nelle foreste suggeriscono",
                                                        EN:"The fires that mysteriously broke out in the forests suggest",
                                                        RU:"Пожары, таинственно вспыхнувшие в лесах, наводят на мысль,"
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:"sia stato commesso qualche orrendo sacrificio",
                                                        EN:"some horrendous sacrifice has been committed",
                                                        RU:"что было совершено какое-то ужасное жертвоприношение"
                                                    },{
                                                        IT:"si stia diffondendo un traffico illegale",
                                                        EN:"illegal trafficking is spreading",
                                                        RU:"что распространяется нелегальная торговля"
                                                    },{
                                                        IT:"ci sia sotto qualcosa di losco",
                                                        EN:"there's something fishy going on",
                                                        RU:"что здесь происходит что-то подозрительное"
                                                    }
                                                ],
                                                planb:[
                                                    {
                                                        IT:"Non possiamo fare niente al riguardo, ma forse potremmo trarre vantaggio dalla situazione.",
                                                        EN:"We can't do anything about it, but maybe we could take advantage of the situation.",
                                                        RU:"Мы ничего не можем с этим поделать, но, возможно, могли бы воспользоваться ситуацией."
                                                    },{
                                                        IT:"Nessuno &egrave; disposto a rischiare per porre fine alla questione. Eccetto noi.",
                                                        EN:"No one is willing to take risks to put an end to the matter. Except us.",
                                                        RU:"Никто не готов рисковать, чтобы положить этому конец. Кроме нас."
                                                    },{
                                                        IT:"Bisogna fare qualcosa. E in fretta.",
                                                        EN:"Something must be done. And quickly.",
                                                        RU:"Нужно что-то делать. И быстро."
                                                    }
                                                ],
                                                solution:[
                                                    {
                                                        IT:[
                                                            "c'&egrave; qualcosa che ci potrebbe condurre al Regno Oscuro",
                                                            "Potremmo portare la battaglia a casa del nemico stavolta",
                                                            "Entrare nel Regno Oscuro",
                                                            "Oscurit&agrave; Rivelata",
                                                            "Attraversare"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Dark Realm",
                                                            "We could bring the fight to our enemies home this time",
                                                            "Entering the Darkness",
                                                            "Revealed Darkness",
                                                            "Enter"
                                                        ],
                                                        RU:[
                                                            "есть кое-что, что могло бы привести нас в Тёмное королевство",
                                                            "На этот раз мы могли бы перенести битву к врагу домой",
                                                            "Войти в тьму",
                                                            "Раскрытая тьма",
                                                            "Войти"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "potremmo trovare qualche indizio",
                                                            "Riusciremmo finalmente incastrare i responsabili una volta per tutte",
                                                            "Entrare nel nascondiglio",
                                                            "Nascondiglio Rivelato",
                                                            "Entrare attraverso"
                                                        ],
                                                        EN:[
                                                            "there is something that could lead to the Hell Realm",
                                                            "We could finally be able to stop those responsible once and for all",
                                                            "Entering the Hideout",
                                                            "Revealed Hideout",
                                                            "Enter"
                                                        ],
                                                        RU:[
                                                            "есть кое-что, что могло бы привести нас в Адское королевство",
                                                            "Мы могли бы наконец остановить виновных раз и навсегда",
                                                            "Войти в укрытие",
                                                            "Раскрытое укрытие",
                                                            "Войти"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "potremmo scoprire la verit&agrave;",
                                                            "Potremmo svelare il mistero",
                                                            "Scoprire la Verit&agrave;",
                                                            "Verit&agrave; Rivelata",
                                                            "Analizzare"
                                                        ],
                                                        EN:[
                                                            "we could discover the truth",
                                                            "We could reveal this mystery",
                                                            "Uncovering the Truth",
                                                            "Truth Revealed",
                                                            "Investigate"
                                                        ],
                                                        RU:[
                                                            "мы могли бы раскрыть правду",
                                                            "Мы могли бы раскрыть эту тайну",
                                                            "Раскрытие правды",
                                                            "Правда раскрыта",
                                                            "Расследовать"
                                                        ]
                                                    }
                                                ],
                                                block:[
                                                    {
                                                        IT:"il Cancello",
                                                        EN:"the Gate",
                                                        RU:"Врата"
                                                    },{
                                                        IT:"il Passaggio",
                                                        EN:"the Passage",
                                                        RU:"Проход"
                                                    },{
                                                        IT:"l'Inferriata",
                                                        EN:"the Railing",
                                                        RU:"Решётка"
                                                    }
                                                ],
                                                unblock:[
                                                    {
                                                        IT:[ "interruttore", "interruttori", "gli interruttori sono rappresentati", "attivare", "attivare almeno", "ad attivare tutti gli", "attivando" ],
                                                        EN:[ "switch", "switches", "the switches are represented", "activate", "activate at least", "to activate all the", "activating" ],
                                                        RU:[ "выключатель", "выключатели", "выключатели представлены", "активировать", "активировать как минимум", "активировать все", "активируя" ]
                                                    },{
                                                        IT:[ "candela", "candele", "le candele sono rappresentate", "accendere", "accendere almeno", "ad accendere tutte le", "accendendo" ],
                                                        EN:[ "candle", "candles", "the candles are represented", "light", "light at least", "to light all the", "lighting" ],
                                                        RU:[ "свеча", "свечи", "свечи представлены", "зажечь", "зажечь как минимум", "зажечь все", "зажигая" ]
                                                    },{
                                                        IT:[ "leva", "leve", "le leve sono rappresentate", "tirare", "tirare almeno", "a tirare tutte le", "tirando" ],
                                                        EN:[ "lever", "levers", "the levers are represented", "pull", "pull at least", "to pull all the", "pulling" ],
                                                        RU:[ "рычаг", "рычаги", "рычаги представлены", "потянуть", "потянуть как минимум", "потянуть все", "потянув" ]
                                                    }
                                                ],
                                                escapeTo:[
                                                    {
                                                        IT:[ "il portale", "Il Portale" ],
                                                        EN:[ "the portal", "The Portal" ],
                                                        RU:[ "портал", "Портал" ]
                                                    },{
                                                        IT:[ "la botola", "Il Passaggio" ],
                                                        EN:[ "the trapdoor", "The Passage" ],
                                                        RU:[ "люк", "Проход" ]
                                                    },{
                                                        IT:[ "la galleria", "La Galleria" ],
                                                        EN:[ "the tunnel", "The Tunnel" ],
                                                        RU:[ "туннель", "Туннель" ]
                                                    }
                                                ],
                                                crazy:[
                                                    {
                                                        IT:[ "per quanto l'idea possa sembrare folle." ],
                                                        EN:[ "as crazy as it may sound."],
                                                        RU:[ "какой бы безумной ни казалась эта идея." ]
                                                    },{
                                                        IT:[ "anche se potrebbe costarci caro." ],
                                                        EN:[ "even if it could cost us dearly."],
                                                        RU:[ "даже если это может дорого нам обойтись." ]
                                                    },{
                                                        IT:[ "anche se non crediamo ci sia molta altra scelta." ],
                                                        EN:[ "although we don't think there is much choice."],
                                                        RU:[ "хотя мы не думаем, что у нас есть большой выбор." ]
                                                    }
                                                ],
                                                somewhere:[
                                                    {
                                                        IT:[ "Forse da queste parti" ],
                                                        EN:[ "Maybe around here," ],
                                                        RU:[ "Возможно, где-то здесь," ]
                                                    },{
                                                        IT:[ "Siamo sicuri che qui in giro" ],
                                                        EN:[ "We're sure around here" ],
                                                        RU:[ "Мы уверены, что где-то здесь" ]
                                                    },{
                                                        IT:[ "Ci &egrave; stato detto che qui intorno" ],
                                                        EN:[ "We've been told that around here" ],
                                                        RU:[ "Нам сказали, что где-то здесь" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                actionSameTime:[
                                                    {
                                                        IT:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ],
                                                        EN:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ],
                                                        RU:[ "{label.unblock:capital@4} 2 {label.unblock@1}" ]
                                                    }
                                                ],
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}" ],
                                                        EN:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}"],
                                                        RU:[ "{label.unblock@5} {label.unblock@1}", "{label.unblock@6} {label.collectOptionalItems@3} {label.unblock@1}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.solution:capital@2}",
                                            RU:"{label.solution:capital@2}"
                                        },{
                                            IT:"{label.escapeTo:capital@0} Dietro {label.block:capital}",
                                            EN:"{label.escapeTo:capital@0} Behind {label.block:capital}",
                                            RU:"{label.escapeTo:capital@0} за {label.block:capital}"
                                        },{
                                            EN:"{label.solution:capital@3}",
                                            RU:"{label.solution:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.reason} che {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}",
                                            EN:"{label.reason} that {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}",
                                            RU:"{label.reason} что {label.event}. {label.planb} {label.somewhere@0} {label.solution@0}. {label.solution@1}, {label.crazy@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}",
                                                        RU:"Открыть {label.block}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}",
                                                        EN:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}",
                                                        RU:"{label.unblock:capital@3} {label.collectOptionalItems@2} {label.unblock@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}",
                                                        RU:"{label.solution@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.solution@4} {label.escapeTo@0}",
                                                        EN:"{label.solution@4} {label.escapeTo@0}",
                                                        RU:"{label.solution@4} {label.escapeTo@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.block:capital}",
                                                        RU:"{label.block:capital}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.block:capital} (la porta con il bordo rosso) consente ai Nemici di passare: i Nemici possono muoversi liberamente attraverso questa porta. Al fine di aprire {label.block}, gli Eroi devono {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocca la Linea di Vista.",
                                                        EN:"{label.block:capital} (the door with the red outline) allows the Enemies to pass through: Enemies can move freely through this door. To open {label.block}, Heroes must {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} blocks the Line of Sight.",
                                                        RU:"{label.block:capital} (дверь с красной обводкой) позволяет врагам проходить: враги могут свободно перемещаться через эту дверь. Чтобы открыть {label.block}, герои должны {label.unblock@3} {label.collectOptionalItems@2} {label.unblock@1}. {label.block:capital} блокирует линию обзора."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Aprire {label.block}",
                                                        EN:"Open {label.block}",
                                                        RU:"Открыть {label.block}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon. L'Eroe che lo fa ottiene 3 PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon. The Hero who does so gains 3 XP.",
                                                        RU:"{label.unblock:capital@2} жетонами цели цветной стороной вверх. Любой герой в зоне с одним из этих жетонов цели может потратить 1 ОД, чтобы взаимодействовать с жетоном цели и убрать его из подземелья. Герой, который это делает, получает 3 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo e rimuoverlo dal Dungeon.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token and remove it from the Dungeon.",
                                                        RU:"{label.unblock:capital@2} жетонами цели цветной стороной вверх. Любой герой в зоне с одним из этих жетонов цели может потратить 1 ОД, чтобы взаимодействовать с жетоном цели и убрать его из подземелья."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.unblock:capital@2} dai segnalini Obiettivo con il lato colorato a faccia in su. Un qualsiasi Eroe che si trovi in una Zona con uno di questi segnalini Obiettivo pu&ograve; spendere 1 PM per interagire con il segnalino Obiettivo per rimuoverlo dal Dungeon e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"{label.unblock:capital@2} by Objective tokens with the colored side up. Any Hero in a Zone with one of these Objective tokens can spend 1 MP to interact with the Objective token, remove it from the Dungeon, and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP",
                                                        RU:"{label.unblock:capital@2} жетонами цели цветной стороной вверх. Любой герой в зоне с одним из этих жетонов цели может потратить 1 ОД, чтобы взаимодействовать с жетоном цели, убрать его из подземелья, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@3}",
                                                        RU:"{label.solution@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su vengono rimossi, {label.block} si apre. Girare il segnalino Porta evidenziato con il bordo rosso sul lato aperto e rivelare la Camera come di consueto.",
                                                        EN:"As soon as {label.collectOptionalItems@2} Objective tokens with the colored side up are removed, {label.block} opens. Flip the Door token highlighted with the red outline to its open side and reveal the Chamber as normal.",
                                                        RU:"Как только {label.collectOptionalItems@2} жетонов цели цветной стороной вверх убраны, {label.block} открывается. Переверните жетон двери с красной обводкой на открытую сторону и откройте комнату как обычно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.solution@2}",
                                                        RU:"{label.solution@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Qualsiasi Eroe sulla Zona contrassegnata dal segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, {label.questVictory@0}.",
                                                        EN:"Any Hero in the Area marked with the gray Objective token can spend 1 MP to exit the Dungeon. Once all the Heroes have exited, {label.questVictory@0}.",
                                                        RU:"Любой герой в зоне, обозначенной серым жетоном цели, может потратить 1 ОД, чтобы выйти из подземелья. Как только все герои вышли, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "unlockAndActivate" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectOptionalItems", "actionSameTime" ]
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
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare Colui Che Attende Oltre {label.escapeTo@1}",
                                                    EN:"Eliminate The One Who Waits Beyond {label.escapeTo@1}",
                                                    RU:"Устранить Того, Кто Ждёт за {label.escapeTo@1}"
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
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[2],
                            type:"tyrant",
                            objective:{
                                EN:"Use an item to make a Roaming Monster vulnerable and eliminate it to win.",
                                RU:"Используйте предмет, чтобы сделать блуждающего монстра уязвимым, и устраните его, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Bestia dell'Orrore\"",
                                EN:"Inspired by the Hellscape quest \"The Horror Beast\"",
                                RU:"Вдохновлено заданием Hellscape «Зверь ужаса»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Secondo molte leggende," ],
                                                        EN:[ "According to the legends," ],
                                                        RU:[ "Согласно легендам," ]
                                                    },{
                                                        IT:[ "Abbiamo scoperto che" ],
                                                        EN:[ "We discovered that" ],
                                                        RU:[ "Мы обнаружили, что" ]
                                                    },{
                                                        IT:[ "In citt&agrave; si dice che" ],
                                                        EN:[ "In the city, it is said that" ],
                                                        RU:[ "В городе говорят, что" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT: [ "una", "Bestia Arcana", "la", "Bestia", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "an", "Arcane Beast", "the", "Beast", "the", "on the", "on the", "killing it", "kill it", "killed" ],
                                                        RU: [ "", "Тайный зверь", "", "Зверь", "", "на", "к", "убить её", "убить её", "убит" ]
                                                    },{
                                                        IT: [ "una", "Creatura Corrotta", "la", "Creatura", "della", "sulla", "alla", "ucciderla", "ucciderla", "uccisa" ],
                                                        EN: [ "a", "Corrupted Creature", "the", "Creature", "the", "on the", "on the", "killing it", "kill it", "killed" ],
                                                        RU: [ "", "Испорченное создание", "", "Создание", "", "на", "к", "убить его", "убить его", "убит" ]
                                                    },{
                                                        IT: [ "un", "Essere Perduto", "l'", "Essere", "dell'", "sull'", "all'", "ucciderlo", "ucciderlo", "ucciso" ],
                                                        EN: [ "a", "Lost Being", "the", "Being", "the", "on the", "on the", "killing it", "kill it", "killed" ],
                                                        RU: [ "", "Потерянное существо", "", "Существо", "", "на", "к", "убить его", "убить его", "убит" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "si aggira nei meandri del Regno Oscuro" ],
                                                        EN:[ "wanders in the depths of the Dark Realm" ],
                                                        RU:[ "бродит в глубинах Тёмного королевства" ]
                                                    },{
                                                        IT:[ "ha cominciato a cacciare nei foreste dei dintorni" ],
                                                        EN:[ "began hunting in the surrounding forests" ],
                                                        RU:[ "начал охотиться в окрестных лесах" ]
                                                    },{
                                                        IT:[ "si sta pericolosamente avvicinando al villaggio" ],
                                                        EN:[ "is getting dangerously close to the village" ],
                                                        RU:[ "опасно приближается к деревне" ]
                                                    }
                                                ],
                                                impossible:[
                                                    {
                                                        IT:[ "non esiste alcun mezzo mortale in grado di {label.enemy@7}" ],
                                                        EN:[ "there is no mortal means capable of {label.enemy@7}" ],
                                                        RU:[ "нет смертного средства, способного {label.enemy@7}" ]
                                                    },{
                                                        IT:[ "non sembra esistere alcun modo per {label.enemy@8}" ],
                                                        EN:[ "there doesn't seem to be any way to {label.enemy@8}" ],
                                                        RU:[ "похоже, нет способа {label.enemy@8}" ]
                                                    },{
                                                        IT:[ "sembra essere invulnerabile" ],
                                                        EN:[ "appears to be invulnerable" ],
                                                        RU:[ "кажется неуязвимым" ]
                                                    }
                                                ],
                                                fear:[
                                                    {
                                                        IT:[ "si tiene alla larga da alcune aree del suo territorio" ],
                                                        EN:[ "stays away from some areas of its territory" ],
                                                        RU:[ "держится подальше от некоторых участков своей территории" ]
                                                    },{
                                                        IT:[ "sembra fugga da alcune aree" ],
                                                        EN:[ "seemed to escape from some areas" ],
                                                        RU:[ "похоже, бежит из некоторых областей" ]
                                                    },{
                                                        IT:[ "sta evitando alcune zone specifiche" ],
                                                        EN:[ "avoids some specific areas" ],
                                                        RU:[ "избегает некоторых определённых зон" ]
                                                    },
                                                ],
                                                investigate:[
                                                    {
                                                        IT:[ "Indagando, abbiamo scoperto che queste aree sono disseminate di" ],
                                                        EN:[ "Upon investigation, we discovered that these areas are littered with" ],
                                                        RU:[ "Расследуя, мы обнаружили, что эти области усеяны" ]
                                                    },{
                                                        IT:[ "In queste aree, alcune pattuglie hanno trovato mucchi di" ],
                                                        EN:[ "There, some patrols found piles of" ],
                                                        RU:[ "Там некоторые патрули нашли груды" ]
                                                    },{
                                                        IT:[ "Queste zone sono rinomate per avere una grande concentrazione di" ],
                                                        EN:[ "These areas are renowned for having a large concentration of" ],
                                                        RU:[ "Эти области известны большим скоплением" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Anche se non abbiamo tempo per risolvere l'enigma della loro presenza" ],
                                                        EN:[ "Even if we don't have time to solve the riddle of their presence" ],
                                                        RU:[ "Хотя у нас нет времени разгадать загадку их присутствия" ]
                                                    },{
                                                        IT:[ "I Saggi stanno indagando sulla questione ma non abbiamo tempo da pedere" ],
                                                        EN:[ "The Sages are investigating the matter but we have no time to waste" ],
                                                        RU:[ "Мудрецы расследуют этот вопрос, но у нас нет времени терять" ]
                                                    },{
                                                        IT:[ "Non abbiamo abbastanza tempo per scoprire il motivo" ],
                                                        EN:[ "We don't have enough time to find out why" ],
                                                        RU:[ "У нас недостаточно времени, чтобы выяснить причину" ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "Piuma Angeliche", "Piume Angeliche", "le", "una", "forse possiamo usare questi resti per indebolire la creatura" ],
                                                        EN:[ "Angelic Feather", "Angelic Feathers", "the", "an", "perhaps we can use these remains to weaken the hideous creature" ],
                                                        RU:[ "Ангельское перо", "Ангельские перья", "", "", "возможно, мы сможем использовать эти останки, чтобы ослабить отвратительное существо" ]
                                                    },{
                                                        IT:[ "Scaglia Draconiche", "Scaglie Draconiche", "le", "una", "forse possiamo usarle a nostro vantaggio" ],
                                                        EN:[ "Draconic Scale", "Draconic Scales", "the", "a", "perhaps we can use them to our advantage" ],
                                                        RU:[ "Драконья чешуйка", "Драконьи чешуйки", "", "", "возможно, мы сможем использовать их в свою пользу" ]
                                                    },{
                                                        IT:[ "Pietra Cinerea", "Pietre Cineree", "le", "una", "forse possiamo incendiarle per rendere vulnerabile la creature" ],
                                                        EN:[ "Ashen Stone", "Ashen Stones", "the", "an", "perhaps we can set them on fire to make the creature vulnerable" ],
                                                        RU:[ "Пепельный камень", "Пепельные камни", "", "", "возможно, мы сможем поджечь их, чтобы сделать существо уязвимым" ]
                                                    }
                                                ],
                                                luckily:[
                                                    {
                                                        IT:[ "Fortunatamente," ],
                                                        EN:[ "Luckily," ],
                                                        RU:[ "К счастью," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto:" ],
                                                        EN:[ "But not everything is lost:" ],
                                                        RU:[ "Но не всё потеряно:" ]
                                                    },{
                                                        IT:[ "I ranger, per&ograve;, hanno scoperto uno strano comportamento:" ],
                                                        EN:[ "The rangers, however, discovered strange behavior:" ],
                                                        RU:[ "Однако следопыты обнаружили странное поведение:" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectLessItems:[
                                                    {
                                                        IT:[ "a usare meno {label.item@1}", "collocando solo {label.collectLessItems@2} {label.item@1}" ],
                                                        EN:[ "to place less {label.item@1}", "placing {label.collectLessItems@2} {label.item@1} only" ],
                                                        RU:[ "размещать меньше {label.item@1}", "размещая только {label.collectLessItems@2} {label.item@1}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.enemy@2} {label.enemy@3} dell'Orrore",
                                            EN: "The Horror {label.enemy@3}",
                                            RU: "{label.enemy@3} ужаса"
                                        },{
                                            EN: "{label.item@2} {label.item@1}",
                                            RU: "{label.item@2} {label.item@1}"
                                        },{
                                            IT: "{label.enemy@2} {label.enemy@3} e {label.item@2} {label.item@1}",
                                            EN: "{label.enemy@2} {label.enemy@3} and {label.item@2} {label.item@1}",
                                            RU: "{label.enemy@2} {label.enemy@3} и {label.item@2} {label.item@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} e {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
                                            EN:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} and {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}.",
                                            RU:"{label.incipit@0} {label.enemy@0} {label.enemy@1} {label.doing@0} и {label.impossible@0}. {label.luckily@0} {label.enemy@2} {label.enemy@3} {label.fear@0}. {label.investigate@0} {label.item@1}! {label.but@0}, {label.item@4}."
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
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",
                                                        RU:"Победить {label.enemy@2} {label.enemy@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.item@2} {label.item@1} per rendere {label.enemy@2} {label.enemy@3} vulnerabile, e poi ucciderla.",
                                                        EN:"Use {label.item@2} {label.item@1} to make {label.enemy@2} {label.enemy@3} vulnerable, and then kill it.",
                                                        RU:"Используйте {label.item@2} {label.item@1}, чтобы сделать {label.enemy@2} {label.enemy@3} уязвимым, а затем убейте его."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@2} {label.enemy@3}",
                                                        RU:"{label.enemy:capital@2} {label.enemy@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate un Mostro Errante casuale di Livello 5 nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn a random Level 5 Roaming Monster in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds.",
                                                        RU:"Во время подготовки создайте случайного блуждающего монстра 5 уровня в указанной зоне: это {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} активируется нормально во время каждой фазы врагов, но неуязвим: его нельзя выбрать целью атаки, способности или умения, и он не может получать раны."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, generate {label.campaignBoss@0} nella Zona indicata: si tratta {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} viene attivata normalmente durante ogni Fase dei Nemici, ma &egrave; invulnerabile: non pu&ograve; essere bersagliata da nessun attacco, abilit&agrave; o capacit&agrave; e non pu&ograve; subire Ferite.",
                                                        EN:"During setup, spawn {label.campaignBoss@0} in the indicated Area: it is {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is activated normally during each Enemy Phase, but is invulnerable: it cannot be targeted by any attack, ability, or capability and cannot suffer Wounds.",
                                                        RU:"Во время подготовки создайте {label.campaignBoss@0} в указанной зоне: это {label.enemy@4} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} активируется нормально во время каждой фазы врагов, но неуязвим: его нельзя выбрать целью атаки, способности или умения, и он не может получать раны."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@1}",
                                                        RU:"{label.item@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino e raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1). Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token and collect it (a Hero can carry more than 1). A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again.",
                                                        RU:"{label.item:capital@2} {label.item:capital@1} представлены жетонами цели. Любой герой в зоне с жетоном цели может потратить 1 ОД, чтобы взаимодействовать с этим жетоном и подобрать его (герой может нести более 1). Герой, несущий {label.item@3} {label.item@0}, находясь в зоне {label.enemy@4} {label.enemy@3}, может потратить 1 ОД, чтобы разместить 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} уязвим, пока на нём есть {label.item@3} {label.item@0}: герои могут атаковать его, использовать умения и способности и наносить раны {label.enemy@6} {label.enemy@3}. В начале каждого раунда убирайте все {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, который снова становится неуязвимым."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.item:capital@2} {label.item:capital@1} sono rappresentate dai segnalini Obiettivo. Qualsiasi Eroe che si trovi in una Zona con un segnalino Obiettivo pu&ograve; spendere 1 PM per interagire con quel segnalino, raccoglierlo (un Eroe pu&ograve; trasportarne pi&ugrave; di 1) e Tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Un Eroe che trasporta {label.item@3} {label.item@0} mentre si trova nella Zona {label.enemy@4} {label.enemy@3} pu&ograve; spendere 1 PM per collocare 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} &egrave; vulnerabile fintanto che su di essa c'&egrave; {label.item@3} {label.item@0}: gli Eroi possono attaccarla, usare le abilit&agrave; e le capacit&agrave; e infliggere Ferite {label.enemy@6} {label.enemy@3}. All'inizio di ogni round, rimuovete tutte {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, che diventa di nuovo invulnerabile.",
                                                        EN:"{label.item:capital@2} {label.item:capital@1} are represented by Objective tokens. Any Hero in a Zone with an Objective token can spend 1 MP to interact with that token, collect it (a Hero can carry more than 1), and All Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. A Hero carrying {label.item@3} {label.item@0} while in {label.enemy@4} {label.enemy@3} Zone can spend 1 MP to place 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} is vulnerable as long as there is {label.item@3} {label.item@0}: Heroes can attack it, use skills and abilities, and inflict Wounds {label.enemy@6} {label.enemy@3}. At the start of each round, remove all {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, which becomes invulnerable again.",
                                                        RU:"{label.item:capital@2} {label.item:capital@1} представлены жетонами цели. Любой герой в зоне с жетоном цели может потратить 1 ОД, чтобы взаимодействовать с этим жетоном, подобрать его (герой может нести более 1), и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО. Герой, несущий {label.item@3} {label.item@0}, находясь в зоне {label.enemy@4} {label.enemy@3}, может потратить 1 ОД, чтобы разместить 1 {label.item@0} {label.enemy@5} {label.enemy@3}. {label.enemy:capital@2} {label.enemy@3} уязвим, пока на нём есть {label.item@3} {label.item@0}: герои могут атаковать его, использовать умения и способности и наносить раны {label.enemy@6} {label.enemy@3}. В начале каждого раунда убирайте все {label.item@2} {label.item:capital@1} {label.enemy@5} {label.enemy@3}, который снова становится неуязвимым."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@2} {label.enemy@3}",
                                                        EN:"Defeat {label.enemy@2} {label.enemy@3}",
                                                        RU:"Победить {label.enemy@2} {label.enemy@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.enemy@2} {label.enemy@3} viene {label.enemy@9}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.enemy@2} {label.enemy@3} is {label.enemy@9}, {label.questVictory@0}.",
                                                        RU:"Как только {label.enemy@2} {label.enemy@3} {label.enemy@9}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "path" ],
                                            gameMode: [ "targets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "tyrant" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "collectLessItems" ]
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
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, mandante {label.enemy@4} {label.enemy@3}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.enemy@4} {label.enemy@3} instigator",
                                                    RU:"Устранить {boss.bossBadName@0}, подстрекателя {label.enemy@4} {label.enemy@3}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[1],
                            type:"hunt",
                            objective:{
                                EN:"Eliminate all special Roaming Monsters to win.",
                                RU:"Устраните всех особых блуждающих монстров, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Labirinto Infernale\"",
                                EN:"Inspired by the Hellscape quest \"Hellish Maze\"",
                                RU:"Вдохновлено заданием Hellscape «Адский лабиринт»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                incipit:[
                                                    {
                                                        IT:[ "Stando alle leggende," ],
                                                        EN:[ "According to legends,"],
                                                        RU:[ "Согласно легендам," ]
                                                    },{
                                                        IT:[ "Si narra che" ],
                                                        EN:[ "It is said that"],
                                                        RU:[ "Говорят, что" ]
                                                    },{
                                                        IT:[ "Nei testi sacri si dice che" ],
                                                        EN:[ "In the sacred texts, it is said that"],
                                                        RU:[ "В священных текстах сказано, что" ]
                                                    }
                                                ],
                                                monsters:[
                                                    {
                                                        IT:[ "le", "Bestie Oscure", "delle", "le", "delle" ],
                                                        EN:[ "the", "Dark Beasts", "of the", "the", "of the" ],
                                                        RU:[ "", "Тёмные звери", "", "", "" ]
                                                    },{
                                                        IT:[ "gli", "Esseri Corrotti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Corrupted Ones", "of the", "the", "of the" ],
                                                        RU:[ "", "Испорченные", "", "", "" ]
                                                    },{
                                                        IT:[ "gli", "Eroi Caduti", "degli", "i", "dei" ],
                                                        EN:[ "the", "Fallen Heroes", "of the", "the", "of the" ],
                                                        RU:[ "", "Павшие герои", "", "", "" ]
                                                    }
                                                ],
                                                roamingWay:[
                                                    {
                                                        IT:[ "vagano per" ],
                                                        EN:[ "wander" ],
                                                        RU:[ "бродят по" ]
                                                    },{
                                                        IT:[ "pattugliano" ],
                                                        EN:[ "patrol" ],
                                                        RU:[ "патрулируют" ]
                                                    },{
                                                        IT:[ "controllano" ],
                                                        EN:[ "control" ],
                                                        RU:[ "контролируют" ]
                                                    }
                                                ],
                                                roamingPlace:[
                                                    {
                                                        IT:[ "un angolo oscuro del", "Reame della Morte" ],
                                                        EN:[ "in a dark corner of the", "Death Realm" ],
                                                        RU:[ "в тёмном углу", "Царства смерти" ]
                                                    },{
                                                        IT:[ "le stanze delle", "Segrete Proibite" ],
                                                        EN:[ "the rooms of the", "Forbidden Dungeons" ],
                                                        RU:[ "комнаты", "Запретных подземелий" ]
                                                    },{
                                                        IT:[ "i corridoi del", "Chiostro Maledetto" ],
                                                        EN:[ "among the corridors of the", "Cursed Cloister" ],
                                                        RU:[ "среди коридоров", "Проклятой обители" ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "Si dice che chiunque riesca a sconfiggerle tutte" ],
                                                        EN:[ "It is said that anyone who can defeat them all" ],
                                                        RU:[ "Говорят, что любой, кто сможет победить их всех," ]
                                                    },{
                                                        IT:[ "Nessuno &egrave; mai riuscito a sconfiggerle tutte ma, nei testi antichi, si racconta che chi riuscir&agrave; a sconfiggerle" ],
                                                        EN:[ "No one has ever managed to defeat them all but, in ancient texts, it is said that those who will be able to defeat them all" ],
                                                        RU:[ "Никому никогда не удавалось победить их всех, но в древних текстах сказано, что тот, кто сможет победить их всех," ]
                                                    },{
                                                        IT:[ "Chi riuscir&agrave; a porre fine alla loro tormento" ],
                                                        EN:[ "Those who will be able to put an end to their torment" ],
                                                        RU:[ "Тот, кто сможет положить конец их мучениям," ]
                                                    }
                                                ],
                                                prize:[
                                                    {
                                                        IT:[ "ricever&agrave; in dono un potere supremo" ],
                                                        EN:[ "will receive a gift of supreme power" ],
                                                        RU:[ "получит в дар высшую силу" ]
                                                    },{
                                                        IT:[ "sar&agrave; premiato con grandi fortune" ],
                                                        EN:[ "will be rewarded with great fortunes" ],
                                                        RU:[ "будет вознаграждён великими богатствами" ]
                                                    },{
                                                        IT:[ "sar&agrave; benedetto dagli dei" ],
                                                        EN:[ "will be blessed by the gods" ],
                                                        RU:[ "будет благословлён богами" ]
                                                    }
                                                ],
                                                mystery:[
                                                    {
                                                        IT:[ "Ovviamente qui niente &egrave; mai quello che sembra..." ],
                                                        EN:[ "Obviously, nothing here is ever what it seems..." ],
                                                        RU:[ "Очевидно, здесь ничто никогда не бывает тем, чем кажется..." ]
                                                    },{
                                                        IT:[ "Ma, di sicuro, non sar&agrave; cos&igrave; semplice..." ],
                                                        EN:[ "But it certainly won't be that simple..." ],
                                                        RU:[ "Но это, конечно, не будет так просто..." ]
                                                    },{
                                                        IT:[ "Ma sembra tutto troppo semplice per essere vero..." ],
                                                        EN:[ "But it all seems too simple to be true..." ],
                                                        RU:[ "Но всё кажется слишком простым, чтобы быть правдой..." ]
                                                    }
                                                ],
                                                maze:[
                                                    {
                                                        IT:[ "Il Labirinto", "i passaggi magici", "Il Labirinto Incantato", "Magia" ],
                                                        EN:[ "The Maze", "the magic passages", "The Enchanted Maze", "Magic" ],
                                                        RU:[ "Лабиринт", "магические проходы", "Зачарованный лабиринт", "Магия" ]
                                                    },{
                                                        IT:[ "Le Segrete", "i teletrasporti", "Le Segrete Sconnesse", "Teletrasporti" ],
                                                        EN:[ "The Dungeons", "the teleporters", "The Disconnected Dungeons", "Teleports" ],
                                                        RU:[ "Подземелья", "телепорты", "Разрозненные подземелья", "Телепорты" ]
                                                    },{
                                                        IT:[ "I Piani", "le scale", "Il Palazzo", "Scale" ],
                                                        EN:[ "The Floors", "the stairs", "The Palace", "Stairs" ],
                                                        RU:[ "Этажи", "лестницы", "Дворец", "Лестницы" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                eliminateEnemy:[
                                                    {
                                                        IT:[ "2 o pi&ugrave; {label.monsters@1}" ],
                                                        EN:[ "2 or more {label.monsters@1}" ],
                                                        RU:[ "2 или более {label.monsters@1}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.maze@2}",
                                            RU: "{label.maze@2}"
                                        },{
                                            EN: "{label.monsters:capital@0} {label.monsters:capital@1}",
                                            RU: "{label.monsters:capital@0} {label.monsters:capital@1}"
                                        },{
                                            EN: "{label.roamingPlace:capital@0} {label.roamingPlace:capital@1}",
                                            RU: "{label.roamingPlace:capital@0} {label.roamingPlace:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.incipit@0} {label.monsters@3} {tokensCount.corruption} {label.monsters@1} {label.roamingWay@0} {label.roamingPlace@0} {label.roamingPlace@1}. {label.objective@0} {label.prize@0}. {label.mystery@0}",
                                            RU:"{label.incipit@0} {label.monsters@3} {tokensCount.corruption} {label.monsters@1} {label.roamingWay@0} {label.roamingPlace@0} {label.roamingPlace@1}. {label.objective@0} {label.prize@0}. {label.mystery@0}"
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
                                                        IT:"Uccidere {label.monsters@0} {label.monsters@1}",
                                                        EN:"Kill {label.monsters@0} {label.monsters@1}",
                                                        RU:"Убить {label.monsters@0} {label.monsters@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere i {tokensCount.corruption} Mostri Erranti Speciali",
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
                                                        EN:"{label.monsters:capital@0} {label.monsters:capital@1}",
                                                        RU:"{label.monsters:capital@0} {label.monsters:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1}. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}.",
                                                        RU:"Каждый раз, когда открывается одна из комнат с жетоном порчи {symbol.corruptionToken}, в дополнение к обычным шагам открытия комнаты, также создайте блуждающего монстра в зоне, обозначенной жетоном порчи в этой комнате. Этот блуждающий монстр — 1 {label.monsters@2} {label.monsters@1}. Когда все {tokensCount.corruption} {label.monsters@0} {label.monsters@1} убиты, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che una delle Camere con un segnalino Corruzione {symbol.corruptionToken} viene rivelata, in aggiunta ai consueti passi di rivelazione di una Camera, generate anche un Mostro Errante nella Zona indicata dal segnalino Corruzione in quella Camera. Questo Mostro Errante &egrave; 1 {label.monsters@2} {label.monsters@1} e, quando viene sconfitto, tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.corruption} PE. Una volta che tutte e {tokensCount.corruption} {label.monsters@0} {label.monsters@1} sono state uccise, {label.questVictory@0}.",
                                                        EN:"Whenever one of the Chambers with a Corruption token {symbol.corruptionToken} is revealed, in addition to the usual steps of revealing a Chamber, you also spawn a Roaming Monster in the Zone indicated by the Corruption token in that Chamber. This Roaming Monster is 1 {label.monsters@2} {label.monsters@1}. When it is defeated all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.corruption} XP. Once all {tokensCount.corruption} {label.monsters@1} have been killed, {label.questVictory@0}.",
                                                        RU:"Каждый раз, когда открывается одна из комнат с жетоном порчи {symbol.corruptionToken}, в дополнение к обычным шагам открытия комнаты, также создайте блуждающего монстра в зоне, обозначенной жетоном порчи в этой комнате. Этот блуждающий монстр — 1 {label.monsters@2} {label.monsters@1}. Когда он побеждён, все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.corruption} ОО. Когда все {tokensCount.corruption} {label.monsters@1} убиты, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.maze@0}",
                                                        RU:"{label.maze@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le tessere non sono collegate in questa Missione ed &egrave; possibile accedervi soltanto usando {label.maze@1} rappresentati dai segnalini Obiettivo. Qualsiasi Eroe pu&ograve; spendere 1 PM mentre si trova in una Zona con un segnalino Obiettivo per muoversi fino a una qualsiasi altra zona con un segnalino Obiettivo.",
                                                        EN:"The tiles are not linked in this Mission and can only be accessed using {label.maze@1} represented by Objective tokens. Any Hero can spend 1 MP while in a Zone with an Objective token to move to any other area with an Objective token.",
                                                        RU:"Плитки не связаны в этой миссии, и к ним можно получить доступ только через {label.maze@1}, представленные жетонами цели. Любой герой может потратить 1 ОД, находясь в зоне с жетоном цели, чтобы переместиться в любую другую зону с жетоном цели."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri e {label.maze@3}",
                                                        EN:"Monsters and {label.maze@3}",
                                                        RU:"Монстры и {label.maze@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Anche le Orde e i Mostri Erranti possono usare {label.maze@1}. Durante la Fase dei Nemici, se non ci sono Eroi su una Tessera, qualsiasi Orda e Mostro Errante su quella Tessera si muove verso la Zona pi&ugrave; vicina con un segnalino Obiettivo. Tutte le Zone con i segnalini Obiettivo sono considerate adiacenti l'una all'altra per le Orde e i Mostri Erranti (ma non permettono Linea di Vista dall'una all'altra).",
                                                        EN:"Mobs and Roaming Monsters can also use {label.maze@1}. During the Enemies Phase, if there are no Heroes on a tile, any Mob and Roaming Monsters on that tile move to the nearest Zone with an Objective token. All Zones with Objective tokens are considered adjacent to each other for Mobs and Roaming Monsters (but do not allow Line of Sight from one to the other).",
                                                        RU:"Орды и блуждающие монстры также могут использовать {label.maze@1}. Во время фазы врагов, если на плитке нет героев, любая орда и блуждающие монстры на этой плитке перемещаются в ближайшую зону с жетоном цели. Все зоны с жетонами цели считаются смежными друг с другом для орд и блуждающих монстров (но не разрешают линию обзора между ними)."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "magicMaze" ],
                                            gameMode: [ "magicMazeHunt" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "magicMaze" ]
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, Signore {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, Master {label.monsters@4} {tokensCount.corruption} {label.monsters@1}",
                                                    RU:"Устранить {boss.bossBadName@0}, повелителя {label.monsters@4} {tokensCount.corruption} {label.monsters@1}"
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
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[0,1],
                            forMaps:[0,1],
                            type:"relay",
                            objective:{
                                EN:"Use a cursed weapon to break some elements to win.",
                                RU:"Используйте проклятое оружие, чтобы уничтожить некоторые элементы и победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"La Spada Maledetta\"",
                                EN:"Inspired by the Hellscape quest \"The Cursed Sword\"",
                                RU:"Вдохновлено заданием Hellscape «Проклятый меч»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                weapon:[
                                                    {
                                                        IT:[ "la Spada Maledetta", "alla Spada Maledetta", "nel mazzo dei Tesori Comuni", "lo Spadone Davvero Enorme", "la Spada", "Arma Maledetta", "la tiene per s&eacute;" ],
                                                        EN:[ "the Cursed Sword", "the Cursed Sword", "in the Common Treasure deck", "the Big Freakin' Greatsword", "the Sword", "Cursed Weapon", "keeps it to himself" ],
                                                        RU:[ "Проклятый меч", "Проклятому мечу", "в колоде обычных сокровищ", "Чертовски Огромный двуручный меч", "Меч", "Проклятое оружие", "оставляет его себе" ]
                                                    }
                                                ],
                                                toBreak:[
                                                    {
                                                        IT:[ "i", "Cristalli del Vuoto", "un", "Cristallo del Vuoto", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Void Crystals", "the", "Void Crystals" ],
                                                        RU:[ "", "Кристаллы пустоты", "", "Кристалл пустоты" ]
                                                    },{
                                                        IT:[ "i", "Monoliti dell'Odio", "un", "Monolite dell'Odio", "intaccarli", "rimuovendolo", "scalfirli" ],
                                                        EN:[ "the", "Monoliths of Hatred", "the", "Monolith of Hatred" ],
                                                        RU:[ "", "Монолиты ненависти", "", "Монолит ненависти" ]
                                                    },{
                                                        IT:[ "le", "Statue della Morte", "una", "Statua della Morte", "intaccarle", "rimuovendola", "scalfirle" ],
                                                        EN:[ "the", "Statues of Death", "the", "Statue of Death" ],
                                                        RU:[ "", "Статуи смерти", "", "Статуя смерти" ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "indeboliremo il legame tra il Reame Oscuro e il nostro mondo" ],
                                                        EN:[ "we will weaken the bond between the Dark Realm and our world" ],
                                                        RU:[ "мы ослабим связь между Тёмным королевством и нашим миром" ]
                                                    },{
                                                        IT:[ "impediremo al Grande Antico di tornare sulla Terra" ],
                                                        EN:[ "we will prevent the Great Old One from returning to Earth" ],
                                                        RU:[ "мы не дадим Великому Древнему вернуться на Землю" ]
                                                    },{
                                                        IT:[ "porremo fine alla piaga che tiene in ginocchio il regno da troppo tempo" ],
                                                        EN:[ "we will put an end to the plague that has brought the kingdom to its knees for too long" ],
                                                        RU:[ "мы положим конец чуме, которая слишком долго держит королевство на коленях" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma c'&egrave; soltanto un artefatto che riesce quanto meno a {label.toBreak@4}, ed &egrave; maledetto" ],
                                                        EN:[ "But there's only one artifact that can at least affect them, and it's cursed" ],
                                                        RU:[ "Но есть только один артефакт, который может хоть как-то на них повлиять, и он проклят" ]
                                                    },{
                                                        IT:[ "Ma l'unico modo per {label.toBreak@6} &egrave; impugnando un'{label.weapon@5}" ],
                                                        EN:[ "But the only way to defeat them is by holding a {label.weapon@5}" ],
                                                        RU:[ "Но единственный способ победить их — держать {label.weapon@5}" ]
                                                    },{
                                                        IT:[ "Purtroppo, il solo artefatto in grado di {label.toBreak@6} potrebbe ucciderci tutti" ],
                                                        EN:[ "Unfortunately, the one artifact that may help us also could kill us all" ],
                                                        RU:[ "К сожалению, единственный артефакт, который может нам помочь, может также убить нас всех" ]
                                                    }
                                                ],
                                                consequence:[
                                                    {
                                                        IT:[ "chiunque lo impugni troppo a lungo soccomber&agrave;!", "ogni forza dell'Eroe verr&agrave; prosciugata" ],
                                                        EN:[ "anyone who holds it for too long will succumb!", "all the Hero's strength will be drained" ],
                                                        RU:[ "любой, кто держит его слишком долго, падёт!", "вся сила героя будет высосана" ]
                                                    },{
                                                        IT:[ "chiunque ne faccia uso per troppo tempo perder&agrave; la sua anima!", "l'arma reclamer&agrave; l'anima dell'Eroe" ],
                                                        EN:[ "anyone who uses it for too long will lose their soul!", "the weapon will claim the Hero's soul" ],
                                                        RU:[ "любой, кто использует его слишком долго, потеряет свою душу!", "оружие заберёт душу героя" ]
                                                    },{
                                                        IT:[ "di chi ne abbia fatto uso per troppo tempo si dice rimanga soltanto un mucchio di cenere!", "il corpo dell'Eroe verr&agrave; ridotto in polvere" ],
                                                        EN:[ "of those who have held it for too long, it is said that only a pile of ashes remains!", "the Hero's body will be reduced to dust" ],
                                                        RU:[ "о тех, кто держал его слишком долго, говорят, что от них остаётся лишь горстка пепла!", "тело героя обратится в прах" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                keepItem:[
                                                    {
                                                        IT:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ],
                                                        EN:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ],
                                                        RU:[ "{label.weapon@0} {label.weapon@6}", "{label.weapon@0}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.weapon@0}",
                                            RU: "{label.weapon@0}"
                                        },{
                                            EN:"{label.toBreak@0} {label.toBreak@1}",
                                            RU:"{label.toBreak@0} {label.toBreak@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"Distruggendo {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}",
                                            EN:"Breaking {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}",
                                            RU:"Уничтожив {label.toBreak@0} {label.toBreak@1} {label.purpose@0}. {label.but@0}: {label.consequence@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}",
                                                        RU:"Уничтожить {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.weapon@0} per distruggere {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}",
                                                        EN:"Use {label.weapon@0} to destroy {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}",
                                                        RU:"Используйте {label.weapon@0}, чтобы уничтожить {label.toBreak@0} {tokensCount.objective} {label.toBreak@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden",
                                                        RU:"Разделить бремя"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Non consentire {label.weapon@1} di sconfiggere nessun Eroe",
                                                        EN:"Don't allow {label.weapon@1} to defeat any Hero",
                                                        RU:"Не позволяйте {label.weapon@1} победить ни одного героя"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.weapon:capital@0}",
                                                        RU:"{label.weapon:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, cercate {label.weapon@2} {label.weapon@3} e scegliete un Eroe che prenda questo oggetto come sua arma di partenza al posto di un'arma regolare: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, look for {label.weapon@2} {label.weapon@3} and choose a Hero to take this item as his starting weapon instead of a regular weapon: this is {label.weapon@0}.",
                                                        RU:"Во время подготовки найдите {label.weapon@2} {label.weapon@3} и выберите героя, который возьмёт этот предмет как своё стартовое оружие вместо обычного оружия: это {label.weapon@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Durante la preparazione, pescate la carta Campagna 20 di Heavenfall e scegliete un Eroe che prenda questo oggetto come sua arma: questa &egrave; {label.weapon@0}.",
                                                        EN:"During setup, draw the Heavenfall Campaign card 20 and choose a Hero to take this item as his weapon: this is {label.weapon@0}.",
                                                        RU:"Во время подготовки возьмите карту кампании 20 из Heavenfall и выберите героя, который возьмёт этот предмет как своё оружие: это {label.weapon@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Condividere il Fardello",
                                                        EN:"Sharing the Burden",
                                                        RU:"Разделить бремя"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe che impugna {label.weapon@0} subisce all'inizio di ogni Fase degli Eroi un ammontare di Ferite che dipende da quanto a lungo ha impugnato {label.weapon@4}.<p>Queste Ferite si applicano prima che qualsiasi segnalino Latore di Vita abbia effetto:</p><ul>"+
                                                        "<li><b>1&deg; round</b>: 1 Ferita</li>"+
                                                        "<li><b>2&deg; round consecutivo</b>: 2 Ferite</li>"+
                                                        "<li><b>3&deg; round consecutivo</b>: 3 Ferite</li>"+
                                                        "<li><b>4&deg; round consecutivo</b>: Sconfitta! Se un Eroe inizia il suo 4&deg; round consecutivo impugnando {label.weapon@0}, {label.consequence@1} e la Missione termina con una sconfitta.</li>"+
                                                        "</ul><p>Usate i segnalini Corruzione {symbol.corruptionToken} per tenere il conto del numero di round in cui un singolo Eroe ha impugnato {label.weapon@0}. Non appena un Eroe passa {label.weapon@0} a un altro Eroe attraverso un'azione di Scambiare, scartate i segnalini e ricominciate da capo il conteggio. {label.weapon:capital@0} non pu&ograve; essere custodita nell'Inventario di un Eroe.</p>",
                                                        EN:"A Hero holding {label.weapon@0} suffers a number of Wounds at the start of each Hero Phase depending on how long he has held {label.weapon@4}.<p>These Wounds apply before any Lifebringer token takes effect:</p><ul>"+
                                                        "<li><b>1st round</b>: 1 Wound</li>"+
                                                        "<li><b>2nd consecutive round</b>: 2 Wounds</li>"+
                                                        "<li><b>3rd consecutive round</b>: 3 Wounds</li>"+
                                                        "<li><b>4th consecutive round</b>: Defeated! If a Hero begins his 4th consecutive round holding {label.weapon@0}, {label.consequence@1} and the Mission ends in defeat.</li>"+
                                                        "</ul><p>Use Corruption tokens {symbol.corruptionToken} to keep track of the number of rounds a single Hero has wielded {label.weapon@0}. As soon as a Hero passes {label.weapon@0} to another Hero through a Trade action, discard the tokens and start counting again. {label.weapon:capital@0} cannot be stored in a Hero's Inventory.</p>",
                                                        RU:"Герой, держащий {label.weapon@0}, в начале каждой фазы героев получает количество ран, зависящее от того, как долго он держал {label.weapon@4}.<p>Эти раны применяются до того, как любой жетон Дарящего жизнь возымеет действие:</p><ul>"+
                                                        "<li><b>1-й раунд</b>: 1 рана</li>"+
                                                        "<li><b>2-й раунд подряд</b>: 2 раны</li>"+
                                                        "<li><b>3-й раунд подряд</b>: 3 раны</li>"+
                                                        "<li><b>4-й раунд подряд</b>: Поражение! Если герой начинает свой 4-й раунд подряд, держа {label.weapon@0}, {label.consequence@1}, и миссия заканчивается поражением.</li>"+
                                                        "</ul><p>Используйте жетоны порчи {symbol.corruptionToken} для подсчёта количества раундов, в течение которых один герой владел {label.weapon@0}. Как только герой передаёт {label.weapon@0} другому герою через действие обмена, сбросьте жетоны и начните счёт заново. {label.weapon:capital@0} нельзя хранить в инвентаре героя.</p>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Distruggere {label.toBreak@0} {label.toBreak@1}",
                                                        EN:"Destroy {label.toBreak@0} {label.toBreak@1}",
                                                        RU:"Уничтожить {label.toBreak@0} {label.toBreak@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e ottenendo 5 PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and gaining 5 XP. Once all tokens have been removed, {label.questVictory@0}.",
                                                        RU:"{label.toBreak:capital@0} {label.toBreak@1} представлены жетонами цели. Герой, экипировавший {label.weapon@0} и находящийся в той же зоне, что и жетон цели, может потратить 1 действие, чтобы уничтожить {label.toBreak@2} {label.toBreak@3}, убрав его из подземелья и получив 5 ОО. Когда все жетоны убраны, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon. Once all tokens have been removed, {label.questVictory@0}.",
                                                        RU:"{label.toBreak:capital@0} {label.toBreak@1} представлены жетонами цели. Герой, экипировавший {label.weapon@0} и находящийся в той же зоне, что и жетон цели, может потратить 1 действие, чтобы уничтожить {label.toBreak@2} {label.toBreak@3}, убрав его из подземелья. Когда все жетоны убраны, {label.questVictory@0}."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.toBreak:capital@0} {label.toBreak@1} sono rappresentati dai segnalini Obiettivo. Un Eroe che abbia equipaggiato {label.weapon@0} e si trovi nella stessa Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.toBreak@2} {label.toBreak@3}, {label.toBreak@5} dal Dungeon e tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che tutti i segnalini sono stati rimossi, {label.questVictory@0}.",
                                                        EN:"{label.toBreak:capital@0} {label.toBreak@1} are represented by Objective tokens. A Hero who has {label.weapon@0} equipped and is in the same Zone as an Objective token can spend 1 action to destroy {label.toBreak@2} {label.toBreak@3}, removing it from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once all tokens have been removed, {label.questVictory@0}.",
                                                        RU:"{label.toBreak:capital@0} {label.toBreak@1} представлены жетонами цели. Герой, экипировавший {label.weapon@0} и находящийся в той же зоне, что и жетон цели, может потратить 1 действие, чтобы уничтожить {label.toBreak@2} {label.toBreak@3}, убрав его из подземелья, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО. Когда все жетоны убраны, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Potere della Distruzione",
                                                        EN:"The Power of Destruction",
                                                        RU:"Сила разрушения"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.weapon:capital@0} si fa pi&ugrave; forte man mano che {label.toBreak@0} {label.toBreak@1} vengono distrutti. {label.weapon:capital@0} ottiene i dadi di Attacco seguenti in base al numero di segnalini Obiettivo che sono stati rimossi dal Dungeon:<ul>"+
                                                        "<li>1 Segnalino: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Segnalino: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Segnalino: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Segnalino: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>",
                                                        EN:"{label.weapon:capital@0} grows stronger as {label.toBreak@0} {label.toBreak@1} are destroyed. {label.weapon:capital@0} gains the following Attack dice based on the number of Objective tokens that were removed from the Dungeon:<ul>"+
                                                        "<li>1 Token: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 Tokens: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 Tokens: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 Tokens: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>",
                                                        RU:"{label.weapon:capital@0} становится сильнее по мере того, как {label.toBreak@0} {label.toBreak@1} уничтожаются. {label.weapon:capital@0} получает следующие кубики атаки в зависимости от количества жетонов цели, убранных из подземелья:<ul>"+
                                                        "<li>1 жетон: +1 {symbol.yellowDie}</li>"+
                                                        "<li>2 жетона: +2 {symbol.yellowDie}</li>"+
                                                        "<li>3 жетона: +2 {symbol.yellowDie} +1 {symbol.orangeDie}</li>"+
                                                        "<li>4 жетона: +2 {symbol.yellowDie} +2 {symbol.orangeDie}</li>"+
                                                        "</ul>"
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"In Solitario",
                                                        EN:"Single Player rules",
                                                        RU:"Правила одиночной игры"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"L'Eroe non subisce Ferite cumulative (subisce invece 1 Ferita per round). L'Eroe non viene sconfitto se impugna {label.weapon@0} per 4 round consecutivi e pu&ograve; scegliere di usare qualsiasi arma di partenza come \"{label.weapon@5}\".",
                                                        EN:"The Hero suffers no cumulative Wounds (instead he suffers 1 Wound per round). The Hero is not defeated if he holds {label.weapon@0} for 4 consecutive rounds and can choose to use any starting weapon as a \"{label.weapon@5}\".",
                                                        RU:"Герой не получает накапливающиеся раны (вместо этого он получает 1 рану за раунд). Герой не побеждён, если он держит {label.weapon@0} 4 раунда подряд, и может выбрать использование любого стартового оружия как «{label.weapon@5}»."
                                                    }
                                                ],
                                                campaignExplanation:[]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            rewards:[
                                                {
                                                    IT:"Rimettere la carta Campagna 20 di Heavenfall con le altre carte Missione e pescare 1 carta dal mazzo dei Tesori Epici.",
                                                    EN:"Put the Heavenfall Campaign card 20 back with the other Mission cards and draw 1 card from the Epic Treasures deck.",
                                                    RU:"Верните карту кампании 20 из Heavenfall к остальным картам миссий и возьмите 1 карту из колоды эпических сокровищ."
                                                }
                                            ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noLifebringer", "keepItem" ]
                                                ] }
                                            ]
                                        },{
                                            forCampaign:[ "2shots" ]
                                        }
                                    ],
                                    boss:{
                                        preparation:{
                                            IT:"<p>Da adesso in poi {label.weapon@0} si comporta come un'arma regolare. L'Eroe che la impugna pu&ograve; rimuoverla o sostituirla con un'altra arma nel proprio inventario prima dello Scontro con il Boss.</p>",
                                            EN:"<p>From now on {label.weapon@0} behaves like a regular weapon. The Hero who wields it can remove it or replace it with another weapon in their inventory before the Boss Fight.</p>",
                                            RU:"<p>Отныне {label.weapon@0} ведёт себя как обычное оружие. Герой, владеющий им, может убрать его или заменить другим оружием из своего инвентаря перед битвой с боссом.</p>"
                                        },
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che ha creato {label.weapon@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, creator of {label.weapon@0}",
                                                    RU:"Устранить {boss.bossBadName@0}, создателя {label.weapon@0}"
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
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[1],
                            type:"escort",
                            objective:{
                                EN:"Escort an NPC to a zone to win.",
                                RU:"Сопроводите NPC до зоны, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Il Passaggio\"",
                                EN:"Inspired by the Hellscape quest \"The Passage\"",
                                RU:"Вдохновлено заданием Hellscape «Проход»"
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                escorting:[
                                                    {
                                                        IT:[ "un evocatore", "l'evocatore", "l'Evocatore", "Statistiche dell'Evocatore", "un sacerdote" ],
                                                        EN:[ "a summoner", "the summoner", "the Summoner", "Summoner Statistics", "a priest" ],
                                                        RU:[ "призыватель", "призыватель", "Призыватель", "Характеристики призывателя", "жрец" ]
                                                    },
                                                    {
                                                        IT:[ "un incantatore", "l'incantatore", "l'Incantatore", "Statistiche dell'Incantatore", "un mago" ],
                                                        EN:[ "an enchanter", "the enchanter", "the Enchanter", "Enchanter Statistics", "a wizard" ],
                                                        RU:[ "чародей", "чародей", "Чародей", "Характеристики чародея", "маг" ]
                                                    },
                                                    {
                                                        IT:[ "un apprendista mago", "l'apprendista mago", "l'Apprendista", "Statistiche dell'Apprendista Mago", "qualcuno disposto a rischiare" ],
                                                        EN:[ "an apprentice wizard", "the apprentice wizard", "the Apprentice", "Apprentice Statistics", "someone willing to take a risk" ],
                                                        RU:[ "ученик мага", "ученик мага", "Ученик", "Характеристики ученика мага", "кто-то готовый рискнуть" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT:[ "inferno", "all'Inferno", "laggi&ugrave;" ],
                                                        EN:[ "hell", "the Hell", "into the depths" ],
                                                        RU:[ "ад", "Ад", "в глубины" ]
                                                    },
                                                    {
                                                        IT:[ "aldil&egrave;", "nell'Aldil&agrave;", "oltre" ],
                                                        EN:[ "afterlife", "the Afterlife", "beyond life" ],
                                                        RU:[ "загробный мир", "Загробный мир", "за пределы жизни" ]
                                                    },
                                                    {
                                                        IT:[ "segrete", "nelle Segrete", "la sotto" ],
                                                        EN:[ "dungeon", "the Dungeon", "down there" ],
                                                        RU:[ "подземелье", "Подземелье", "там внизу" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "al Varco", "il Varco", "Zona del Varco", "del Varco", "nel Varco", "incanala con successo l'energia del Varco", "usare l'energia del portale" ],
                                                        EN:[ "to the Rift", "the Rift", "Zone of the Rift", "of the Rift", "the Rift", "channel the Rift energy", "use the Rift energy" ],
                                                        RU:[ "к Разлому", "Разлом", "Зона разлома", "Разлома", "в Разлом", "успешно направляет энергию Разлома", "использовать энергию портала" ]
                                                    },
                                                    {
                                                        IT:[ "al Cancello", "il Cancello", "Zona del Cancello", "del Cancello", "nel Cancello", "rimuovere la maledizione dal Cancello", "annullarne l'incantesimo" ],
                                                        EN:[ "to the Gate", "the Gate", "Zone of the Gate", "of the Gate", "the Gate", "lift the Gate's curse", "remove its curse" ],
                                                        RU:[ "к Вратам", "Врата", "Зона врат", "Врат", "во Врата", "снять проклятие с Врат", "снять с них чары" ]
                                                    },
                                                    {
                                                        IT:[ "al Passaggio", "il Passaggio", "Zona del Passaggio", "del Passaggio", "nel Passaggio", "rivelare la posizione del Passaggio", "svelarne la posizione esatta" ],
                                                        EN:[ "to the Passage", "the Passage", "Zone of the Passage", "of the Passage", "the Passage", "reveal the Passage position", "discover its exact position" ],
                                                        RU:[ "к Проходу", "Проход", "Зона прохода", "Прохода", "в Проход", "раскрыть местоположение Прохода", "раскрыть его точное местоположение" ]
                                                    }
                                                ],
                                                intro1:[
                                                    {
                                                        IT:[ "Erano giorni che cercavamo informazioni su come infiltrarci {label.destination@1}." ],
                                                        EN:[ "We had been looking for information on how to infiltrate {label.destination@1} for days." ],
                                                        RU:[ "Мы уже несколько дней искали сведения о том, как проникнуть {label.destination@1}." ]
                                                    },
                                                    {
                                                        IT:[ "Sapevamo dove fosse {label.door@1} ma non conoscevamo alcun modo per {label.door@6}." ],
                                                        EN:[ "We knew where {label.door@1} was but we didn't know any way to {label.door@6}." ],
                                                        RU:[ "Мы знали, где находится {label.door@1}, но не знали способа {label.door@6}." ]
                                                    },
                                                    {
                                                        IT:[ "Non c'era altro modo. Ci serviva l'aiuto di {label.escorting@4}..." ],
                                                        EN:[ "There was no other way. We needed the help of {label.escorting@4}..." ],
                                                        RU:[ "Не было другого пути. Нам нужна была помощь — {label.escorting@4}..." ]
                                                    }
                                                ],
                                                intro2:[
                                                    {
                                                        IT:[ "In una piccola casa nei boschi vicini viveva" ],
                                                        EN:[ "In a small house in the nearby woods, there lived" ],
                                                        RU:[ "В небольшом доме в соседнем лесу жил" ]
                                                    },
                                                    {
                                                        IT:[ "In un vicolo nascosto del borgo abitava" ],
                                                        EN:[ "In a hidden alley of the village, there lived" ],
                                                        RU:[ "В скрытом переулке деревни жил" ]
                                                    },
                                                    {
                                                        IT:[ "Lungo la via verso il mercato incrociammo" ],
                                                        EN:[ "On the way to the market, we came across" ],
                                                        RU:[ "По дороге на рынок мы встретили" ]
                                                    }
                                                ],
                                                lead:[
                                                    {
                                                        IT:[ "per aiutarci a proseguire il nostro viaggio" ],
                                                        EN:[ "to help us continue our journey" ],
                                                        RU:[ "чтобы помочь нам продолжить наше путешествие" ]
                                                    },{
                                                        IT:[ "per poterlo attraversare" ],
                                                        EN:[ "to be able to pass it" ],
                                                        RU:[ "чтобы мы могли его пройти" ]
                                                    },{
                                                        IT:[ "per condurci alla nostra destinazione finale" ],
                                                        EN:[ "to lead us to our final destination" ],
                                                        RU:[ "чтобы привести нас к нашей конечной цели" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noDamage:[
                                                    {
                                                        IT:[ "{label.escorting@2}", "{label.escorting:capital@2}" ],
                                                        EN:[ "{label.escorting@2}", "{label.escorting:capital@2}" ],
                                                        RU:[ "{label.escorting@2}", "{label.escorting:capital@2}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN: "{label.door:capital@1}",
                                            RU: "{label.door:capital@1}"
                                        },
                                        {
                                            IT: "Scorta {label.destination:capital@1}",
                                            EN: "Escort to {label.destination:capital@1}",
                                            RU: "Сопровождение к {label.destination:capital@1}"
                                        },
                                        {
                                            EN: "{label.escorting:capital@1}",
                                            RU: "{label.escorting:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro1@0} {label.intro2@0} {label.escorting@0} disposto a portarci fino {label.door@0} e {label.door@6} {label.lead@0}. Dobbiamo solo mantenere in vita {label.escorting@1} durante il cammino che ci porter&agrave; {label.destination@2}...",
                                            EN:"{label.intro1@0} {label.intro2@0} {label.escorting@0} who was willing to take us {label.door@0} and {label.door@6} {label.lead@0}. We just have to keep {label.escorting@1} alive during the journey that will take us {label.destination@2}...",
                                            RU:"{label.intro1@0} {label.intro2@0} {label.escorting@0}, готовый отвести нас {label.door@0} и {label.door@6} {label.lead@0}. Нам нужно лишь сохранить {label.escorting@1} в живых во время пути, который приведёт нас {label.destination@2}..."
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"Proteggere {label.escorting@2}",
                                                        EN:"Protect {label.escorting@2}",
                                                        RU:"Защитить {label.escorting@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Mantenere {label.escorting@2} in vita finch&eacute; non raggiunge {label.door@1}",
                                                        EN:"Keep {label.escorting@2} alive until it reaches {label.door@1}",
                                                        RU:"Сохранить {label.escorting@2} в живых, пока он не достигнет {label.door@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}",
                                                        RU:"Войти в {label.destination@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Entrare attraverso {label.door@1}",
                                                        EN:"Enter through {label.door@1}",
                                                        RU:"Войти через {label.door@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Chi &egrave; questo?",
                                                        EN:"Who's that?",
                                                        RU:"Кто это?"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, prendete una miniatura Eroe inutilizzata che rappresenti {label.escorting@2} e collocatela nella Zona di Partenza degli Eroi (senza assegnargli una base). Se non rimane nessuna miniatura Eroe disponibile, usate invece un segnalino Obiettivo grigio per rappresentare {label.escorting@2}.",
                                                        EN:"During setup, take an unused Hero miniature representing {label.escorting@2} and place it in the Hero Starting Zone (without assigning it a base). If there are no available Hero figures left, use a gray Objective token to represent {label.escorting@2} instead.",
                                                        RU:"Во время подготовки возьмите неиспользуемую миниатюру героя, представляющую {label.escorting@2}, и поместите её в стартовую зону героев (без подставки). Если свободных миниатюр героев не осталось, вместо этого используйте серый жетон цели для представления {label.escorting@2}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting:capital@2}",
                                                        RU:"{label.escorting:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"A partire dal secondo round, all'inizio di ogni Fase degli Eroi, {label.escorting@2} si muove di 2 Zone verso la porta dal bordo rosso, seguendo sempre il percorso pi&ugrave; breve. {label.escorting:capital@2} non pu&ograve; aprire le Porte. {label.escorting:capital@2} non pu&ograve; mai uscire da una Zona dove ci sono dei Nemici. {label.escorting:capital@2} &egrave; considerato un Eroe ai fini di stabilire se pu&ograve; essere bersagliato da Eroi e Nemici, ma non pu&ograve; effettuare nessuna azione oltre a muoversi nel modo descritto sopra. Non pu&ograve; impugnare oggetti.",
                                                        EN:"Starting from the second round, at the start of each Hero Phase, {label.escorting@2} moves 2 Zones toward the red-edged door, always following the shortest path. {label.escorting:capital@2} cannot open the Doors. {label.escorting:capital@2} cannot never leave a Zone containing Enemies. {label.escorting:capital@2} is considered a Hero when determining whether he can be targeted by Heroes and Enemies, but cannot take any other action than moving as described above. It cannot hold objects.",
                                                        RU:"Начиная со второго раунда, в начале каждой фазы героев {label.escorting@2} перемещается на 2 зоны к двери с красной обводкой, всегда следуя кратчайшим путём. {label.escorting:capital@2} не может открывать двери. {label.escorting:capital@2} никогда не может покинуть зону с врагами. {label.escorting:capital@2} считается героем при определении того, может ли он быть целью героев и врагов, но не может выполнять никаких других действий, кроме перемещения, описанного выше. Не может держать предметы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@1}",
                                                        RU:"{label.door:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la zona con la porta dal bordo rosso, se &egrave; chiusa, termina il suo movimento e apre la porta. Rivelate la Camera come di consueto. Se la porta &egrave; aperta, {label.escorting:capital@2} continua il suo movimento verso {label.door@1}, rappresentato dal segnalino Obiettivo.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the area with the red-edged door, if it is closed, ends its movement and opens the door. Reveal the Chamber as normal. If the door is open, {label.escorting:capital@2} continues its movement towards {label.door@1}, represented by the Objective token.",
                                                        RU:"Как только {label.escorting:capital@2} достигает зоны с дверью с красной обводкой, если она закрыта, он завершает движение и открывает дверь. Откройте комнату как обычно. Если дверь открыта, {label.escorting:capital@2} продолжает движение к {label.door@1}, представленным жетоном цели."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Entrare {label.destination@1}",
                                                        EN:"Enter {label.destination@1}",
                                                        RU:"Войти в {label.destination@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.escorting:capital@2} raggiunge la {label.door@2}, {label.door@5}. Girate il segnalino Obiettivo e rimuovete {label.escorting@2} dal Dungeon. Fatto questo, qualsiasi Eroe pu&ograve; spendere 1 PM nella {label.door@2} per uscire dal Dungeon. Non appena tutti gli Eroi sono entrati {label.door@4}, {label.questVictory@0}.",
                                                        EN:"As soon as {label.escorting:capital@2} reaches the {label.door@2}, {label.door@5}. Flip the Objective token and remove {label.escorting@2} from the Dungeon. Once this is done, any Hero can spend 1 MP in the {label.door@2} to exit the Dungeon. As soon as all Heroes have entered {label.door@4}, {label.questVictory@0}.",
                                                        RU:"Как только {label.escorting:capital@2} достигает {label.door@2}, {label.door@5}. Переверните жетон цели и уберите {label.escorting@2} из подземелья. После этого любой герой может потратить 1 ОД в {label.door@2}, чтобы выйти из подземелья. Как только все герои вошли {label.door@4}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.escorting@3}",
                                                        RU:"{label.escorting@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Salute 8, Difesa: 2 {symbol.blueDie}",
                                                        EN:"Health 8, Defense: 2 {symbol.blueDie}",
                                                        RU:"Здоровье 8, защита: 2 {symbol.blueDie}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "escort" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "default" ]
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],    
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noDamage" ]
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
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, in attesa oltre {label.door@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, waiting beyond {label.door@1}",
                                                    RU:"Устранить {boss.bossBadName@0}, ожидающего за {label.door@1}"
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
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[0],
                            type:"collect",
                            objective:{
                                EN:"Collect items and bring them to a zone to win.",
                                RU:"Соберите предметы и принесите их в зону, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"L'Artefatto Demoniaco\"",
                                EN:"Inspired by the Hellscape quest \"The Demon Artifact\"",
                                RU:"Вдохновлено заданием Hellscape «Демонический артефакт»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                object:[
                                                    {
                                                        IT: [ "l'artefatto", "gli artefatti", "artefatti", "artefatto", "forgiare", "degli artefatti" ],
                                                        EN: [ "the artifact", "the artifacts", "artifacts", "artifact", "forge", "of the artifacts" ],
                                                        RU: [ "артефакт", "артефакты", "артефакты", "артефакт", "выковать", "артефактов" ]
                                                    },{
                                                        IT: [ "il cristallo", "i cristalli", "cristalli", "cristallo", "ricomporre", "dei cristallo" ],
                                                        EN: [ "the crystal", "the crystals", "crystals", "crystal", "recompose", "of the crystals" ],
                                                        RU: [ "кристалл", "кристаллы", "кристаллы", "кристалл", "восстановить", "кристаллов" ]
                                                    },{
                                                        IT: [ "il sigillo", "i sigilli", "sigilli", "sigillo", "comporre", "dei sigilli" ],
                                                        EN: [ "the seal", "the seals", "seals", "seal", "compose", "of the seals" ],
                                                        RU: [ "печать", "печати", "печати", "печать", "составить", "печатей" ]
                                                    }
                                                ],
                                                objectCategory:[
                                                    {
                                                        IT: "impugna una di queste reliquie",
                                                        EN: "hold one of these relics",
                                                        RU: "держит одну из этих реликвий"
                                                    },{
                                                        IT: "stringe uno di questi oggetti arcani",
                                                        EN: "hold one of these arcane items",
                                                        RU: "держит один из этих тайных предметов"
                                                    },{
                                                        IT: "ne possiede uno",
                                                        EN: "own one of them",
                                                        RU: "владеет одним из них"
                                                    }
                                                ],
                                                realm:[
                                                    {
                                                        IT: "Il Reame Oscuro",
                                                        EN: "The Dark Realm",
                                                        RU: "Тёмное королевство"
                                                    },{
                                                        IT: "La Rocca Abbandonata",
                                                        EN: "The Abandoned Fortress",
                                                        RU: "Покинутая крепость"
                                                    },{
                                                        IT: "La Torre Demoniaca",
                                                        EN: "The Demon Tower",
                                                        RU: "Демоническая башня"
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT: "nasconde nelle sue profondit&agrave; {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its dark depths",
                                                        RU: "скрывает {label.amount} {label.object@2} в своих тёмных глубинах"
                                                    },{
                                                        IT: "custodisce nelle sue segrete abbandonate {label.amount} {label.object@2}",
                                                        EN: "keeps {label.amount} {label.object@2} in its abandoned dungeons",
                                                        RU: "хранит {label.amount} {label.object@2} в своих покинутых подземельях"
                                                    },{
                                                        IT: "cela nei suoi meandri {label.amount} {label.object@2}",
                                                        EN: "hides {label.amount} {label.object@2} in its meanders",
                                                        RU: "скрывает {label.amount} {label.object@2} в своих закоулках"
                                                    }
                                                ],
                                                amount:[
                                                    {
                                                        IT: "moltissimi",
                                                        EN: "many",
                                                        RU: "множество"
                                                    },{
                                                        IT: "rarissimi",
                                                        EN: "very rare",
                                                        RU: "очень редкие"
                                                    },{
                                                        IT: "potentissimi",
                                                        EN: "very powerful",
                                                        RU: "очень мощные"
                                                    }
                                                ],
                                                attribute:[
                                                    {
                                                        IT: [ "demoniaco", "demoniaci" ],
                                                        EN: [ "demoniac", "demoniac" ],
                                                        RU: [ "демонический", "демонические" ]
                                                    },{
                                                        IT: [ "maledetto", "maledetti" ],
                                                        EN: [ "cursed", "cursed" ],
                                                        RU: [ "проклятый", "проклятые" ]
                                                    },{
                                                        IT: [ "mortale", "mortali" ],
                                                        EN: [ "deadly", "deadly" ],
                                                        RU: [ "смертельный", "смертельные" ]
                                                    }
                                                ],
                                                power:[
                                                    {
                                                        IT: [ "di un potere indicibile", "potere indicibile" ],
                                                        EN: [ "unspeakable powers", "unspeakable powers" ],
                                                        RU: [ "невыразимой силы", "невыразимая сила" ]
                                                    },{
                                                        IT: [ "di poteri divini", "poteri divini" ],
                                                        EN: [ "godly powers", "godly powers" ],
                                                        RU: [ "божественной силы", "божественная сила" ]
                                                    },{
                                                        IT: [ "del Sacro Dono", "Il Sacro Dono" ],
                                                        EN: [ "the Sacred Gift", "the Sacred Gift" ],
                                                        RU: [ "Священного дара", "Священный дар" ]
                                                    }
                                                ],
                                                risk:[
                                                    {
                                                        IT: "di trasformarsi lentamente in un demone",
                                                        EN: "slowly transforming into a demon",
                                                        RU: "медленно превратиться в демона"
                                                    },{
                                                        IT: "di perdere pian piano la sua umanit&agrave;",
                                                        EN: "slowly losing his humanity",
                                                        RU: "постепенно потерять свою человечность"
                                                    },{
                                                        IT: "di accorciare inesorabilmente la durata della propria vita",
                                                        EN: "inexorably shortening his lifespan",
                                                        RU: "неумолимо сократить свою жизнь"
                                                    }
                                                ],
                                                part:[
                                                    {
                                                        IT: [ "frammento", "tutti", "i", "frammenti", "rappresentati", "stati raccolti", "Zona del Frammento" ],
                                                        EN: [ "fragment", "", "", "", "", "fragments", "Fragment's Zone"],
                                                        RU: [ "фрагмент", "", "", "", "", "фрагменты", "Зона фрагмента" ]
                                                    },{
                                                        IT: [ "componente", "tutti", "i", "componenti", "rappresentati", "stati raccolti", "Zona del Componente" ],
                                                        EN: [ "component", "", "", "", "", "components", "Component's Zone"],
                                                        RU: [ "компонент", "", "", "", "", "компоненты", "Зона компонента" ]
                                                    },{
                                                        IT: [ "parte", "tutte", "le", "parti", "rappresentate", "state raccolte", "Zona della Parte" ],
                                                        EN: [ "part", "", "", "", "", "parts", "Part's Zone"],
                                                        RU: [ "часть", "", "", "", "", "части", "Зона части" ]
                                                    }
                                                ],
                                                destination:[
                                                    {
                                                        IT: [ "{label.object@4} {label.object@0} nella Forgia Corrotta", "Zona della Forgia Corrotta", "Forgiarli nel Fuoco Oscuro" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Corrupted Forge", "Corrupted Forge Zone", "Forge it in the Dark Fire" ],
                                                        RU: [ "{label.object@4} {label.object@0} в Испорченной кузнице", "Зона испорченной кузницы", "Выковать в Тёмном пламени" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Sacra Fonte", "Zona della Sacra Fonte", "Ricongiungerli nella Sacra Fonte" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Sacred Source", "Sacred Source Zone", "Reunite them in the Sacred Source" ],
                                                        RU: [ "{label.object@4} {label.object@0} в Священном источнике", "Зона священного источника", "Соединить их в Священном источнике" ]
                                                    },{
                                                        IT: [ "{label.object@4} {label.object@0} nella Pressa Dorata", "Zona della Pressa Dorata", "Ricomporli nella Pressa Dorata" ],
                                                        EN: [ "{label.object@4} {label.object@0} in the Golden Press", "Golden Press Zone", "Reassemble them in the Golden Press" ],
                                                        RU: [ "{label.object@4} {label.object@0} в Золотом прессе", "Зона золотого пресса", "Собрать их в Золотом прессе" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere {label.part@1} {label.part@2} {label.part@3}", "raccogliendo {label.collectOptionalItems@3} {label.part@3}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the {label.part@5}", "collecting {label.collectOptionalItems@3} {label.part@5}", "{tokensCount.objective}"],
                                                        RU:[ "собрать все {label.part@5}", "собирая {label.collectOptionalItems@3} {label.part@5}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.object:capital@0} {label.attribute:capital@0}",
                                            EN: "The {label.attribute:capital@0} {label.object:capital@3}",
                                            RU: "{label.attribute:capital@0} {label.object:capital@3}"
                                        },{
                                            EN: "{label.power:capital@1}",
                                            RU: "{label.power:capital@1}"
                                        },{
                                            IT: "{label.realm} e {label.object:capital@0}",
                                            EN: "{label.realm} and {label.object:capital@0}",
                                            RU: "{label.realm} и {label.object:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.realm} {label.place}. Colui che {label.objectCategory} sar&agrave; il detentore {label.power@0}, ma rischia {label.risk}!",
                                            EN:"{label.realm} {label.place}. Those who {label.objectCategory} will get {label.power@0}, but it risks {label.risk}!",
                                            RU:"{label.realm} {label.place}. Тот, кто {label.objectCategory}, обретёт {label.power@0}, но рискует {label.risk}!"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"Raccogliere {label.part@2} {label.part:capital@3}",
                                                        EN:"Collect the {label.part:capital@5}",
                                                        RU:"Собрать {label.part:capital@5}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect all the {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",
                                                        RU:"Соберите все {label.collectOptionalItems@2} {label.part:capital@5} в подземелье"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Raccogliere {label.collectOptionalItems@2} {label.part:capital@3} nel Dungeon",
                                                        EN:"Collect {label.collectOptionalItems@2} {label.part:capital@5} in the Dungeon",
                                                        RU:"Соберите {label.collectOptionalItems@2} {label.part:capital@5} в подземелье"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo. L'Eroe che lo fa ottiene 5 PE.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and immediately gain 5 XP.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.part:capital@5}. Любой герой, находящийся в {label.part@6}, может взаимодействовать с ним, чтобы подобрать его, и немедленно получает 5 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.part:capital@5}. Любой герой, несущий жетон цели цветной стороной вверх, представляет {label.part:capital@5}. Любой герой, находящийся в {label.part@6}, может взаимодействовать с ним, чтобы подобрать его."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.part:capital@2} {label.part:capital@3} sono {label.part@4} dai segnalini Obiettivo con il lato colorato a faccia in su. Qualsiasi Eroe in una {label.part@6} pu&ograve; interagire con un segnalino Obiettivo con il lato colorato a faccia in su per raccoglierlo e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent the {label.part:capital@5}. Any Hero carrying an Objective token with the colored side up represent the {label.part:capital@5}. Any Hero standing in the {label.part@6} may interact with it to pick it up and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.part:capital@5}. Любой герой, несущий жетон цели цветной стороной вверх, представляет {label.part:capital@5}. Любой герой, находящийся в {label.part@6}, может взаимодействовать с ним, чтобы подобрать его, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.destination@2}",
                                                        EN:"{label.destination@2}",
                                                        RU:"{label.destination@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.part@1} e {label.collectOptionalItems@2} {label.part@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",
                                                        RU:"Используйте {label.collectOptionalItems@2} {label.part:capital@5}, чтобы {label.destination@0}"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Usare {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} per {label.destination@0}",
                                                        EN:"Use the {label.collectOptionalItems@2} {label.part:capital@5} to {label.destination@0}",
                                                        RU:"Используйте {label.collectOptionalItems@2} {label.part:capital@5}, чтобы {label.destination@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando {label.part@1} {label.part@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When all of the {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}.",
                                                        RU:"Когда все {label.part:capital@5} собраны, если все герои, владеющие хотя бы 1 {label.part:capital@0}, находятся в {label.destination@1} (серый жетон цели вверх), любой герой в этой зоне может потратить 1 действие, чтобы {label.object@4} {label.object@0} и {label.questVictory@1}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando {label.part@2} {label.collectOptionalItems@2} {label.part:capital@3} sono {label.part@5}, se tutti gli Eroi che possiedono almeno 1 {label.part:capital@0} si trovano nella {label.destination@1} (rappresentata dal segnalino Obiettivo grigio), un qualsiasi Eroe nella stessa Zona pu&ograve; spendere 1 azione per {label.object@4} {label.object@1} e {label.questVictory@1}.",
                                                        EN:"When the {label.collectOptionalItems@2} {label.part:capital@5} have been collected, if all the Heroes with at least 1 {label.part:capital@0} are in the {label.destination@1} (the gray side-up Objective token), any Hero in that Zone may spend 1 action to {label.object@4} {label.object@0} and {label.questVictory@1}.",
                                                        RU:"Когда {label.collectOptionalItems@2} {label.part:capital@5} собраны, если все герои, владеющие хотя бы 1 {label.part:capital@0}, находятся в {label.destination@1} (серый жетон цели вверх), любой герой в этой зоне может потратить 1 действие, чтобы {label.object@4} {label.object@0} и {label.questVictory@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom", "roamingToRoom" ],
                                            gameMode: [ "collectAndDeliver" ],
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, guardiano del potere {label.object@5}",
                                                    EN:"Eliminate {boss.bossBadName@0}, guardian {label.object@5} power",
                                                    RU:"Устранить {boss.bossBadName@0}, хранителя силы {label.object@5}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[2,3],
                            forMaps:[0,1],
                            type:"collecttimed",
                            objective:{
                                EN:"Collect items within the time limit and reach a zone to win.",
                                RU:"Соберите предметы за отведённое время и достигните зоны, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura di Hellscape \"Le Chiavi delle Anime\"",
                                EN:"Inspired by the Hellscape quest \"The Soul Keys\"",
                                RU:"Вдохновлено заданием Hellscape «Ключи душ»"
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                intro:[
                                                    {
                                                        IT:[ "A quanto pare, &egrave;" ],
                                                        EN:[ "Apparently, it is" ],
                                                        RU:[ "Видимо, это" ]
                                                    },{
                                                        IT:[ "Non ci sono dubbi: &egrave;" ],
                                                        EN:[ "There is no doubt about it: it is" ],
                                                        RU:[ "Без сомнений: это" ]
                                                    },{
                                                        IT:[ "Finalmente lo abbiamo scoperto. &Egrave;" ],
                                                        EN:[ "We finally found out. It is" ],
                                                        RU:[ "Наконец мы это выяснили. Это" ]
                                                    }
                                                ],
                                                culprit:[
                                                    {
                                                        IT:[ "la Morte", "la", "l'", "incarnata" ],
                                                        EN:[ "the Death", "the", "the", "embodied" ],
                                                        RU:[ "Смерть", "", "", "воплощённая" ]
                                                    },{
                                                        IT:[ "il Male", "il", "l'", "incarnato" ],
                                                        EN:[ "the Evil", "the", "the", "embodied" ],
                                                        RU:[ "Зло", "", "", "воплощённое" ]
                                                    },{
                                                        IT:[ "la Pestilenza", "la", "l'", "incarnata" ],
                                                        EN:[ "the Pestilence", "the", "the", "embodied" ],
                                                        RU:[ "Чума", "", "", "воплощённая" ]
                                                    }
                                                ],
                                                culpritBody:[
                                                    {
                                                        IT:[ "in persona" ],
                                                        EN:[ "in person" ],
                                                        RU:[ "собственной персоной" ]
                                                    },{
                                                        IT:[ "in carne ed ossa" ],
                                                        EN:[ "in flesh and blood" ],
                                                        RU:[ "во плоти" ]
                                                    },{
                                                        IT:[ "{label.culprit@3}" ],
                                                        EN:[ "{label.culprit@3}" ],
                                                        RU:[ "{label.culprit@3}" ]
                                                    }
                                                ],
                                                culpritOf:[
                                                    {
                                                        IT:[ "{label.culprit@1} responsabile" ],
                                                        EN:[ "responsible for" ],
                                                        RU:[ "ответственное за" ]
                                                    },{
                                                        IT:[ "{label.culprit@2}origine" ],
                                                        EN:[ "the origin of" ],
                                                        RU:[ "источник" ]
                                                    },{
                                                        IT:[ "{label.culprit@1} causa" ],
                                                        EN:[ "the cause of" ],
                                                        RU:[ "причина" ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "di questa nuova Oscurit&agrave;" ],
                                                        EN:[ "this new Darkness" ],
                                                        RU:[ "этой новой Тьмы" ]
                                                    },{
                                                        IT:[ "di questa ondata di omicidi" ],
                                                        EN:[ "this wave of murders" ],
                                                        RU:[ "этой волны убийств" ]
                                                    },{
                                                        IT:[ "di queste recenti sparizioni" ],
                                                        EN:[ "these recent kidnappings" ],
                                                        RU:[ "этих недавних похищений" ]
                                                    }
                                                ],
                                                chance:[
                                                    {
                                                        IT:[ "Ma &egrave; possibile raggiungere" ],
                                                        EN:[ "But is it possible to reach" ],
                                                        RU:[ "Но возможно ли достичь" ]
                                                    },{
                                                        IT:[ "&Egrave; davvero possibile incontrare" ],
                                                        EN:[ "It is truly possible to meet" ],
                                                        RU:[ "Действительно ли можно встретить" ]
                                                    },{
                                                        IT:[ "Ma dove si sta nascondendo" ],
                                                        EN:[ "But where is it hiding" ],
                                                        RU:[ "Но где же это скрывается" ]
                                                    }
                                                ],
                                                discover:[
                                                    {
                                                        IT:[ "C'&egrave; solo un modo per scoprirlo." ],
                                                        EN:[ "There's only one way to find out." ],
                                                        RU:[ "Есть только один способ узнать." ]
                                                    },{
                                                        IT:[ "Qualcuno dice di aver scoperto un modo..." ],
                                                        EN:[ "Someone says they've discovered a way..." ],
                                                        RU:[ "Кто-то говорит, что обнаружил способ..." ]
                                                    },{
                                                        IT:[ "Esiste un modo..." ],
                                                        EN:[ "There is a way..." ],
                                                        RU:[ "Способ существует..." ]
                                                    }
                                                ],
                                                item:[
                                                    {
                                                        IT:[ "le", "Chiavi", "una", "Chiave", "1 sola Chiave" ],
                                                        EN:[ "the", "Keys", "one", "Key", "1 single Key"],
                                                        RU:[ "", "Ключи", "", "Ключ", "1 единственный Ключ" ]
                                                    },{
                                                        IT:[ "le", "Schegge", "una", "Scheggia", "1 sola Scheggia" ],
                                                        EN:[ "the", "Shards", "one", "Shard", "1 single Shard"],
                                                        RU:[ "", "Осколки", "", "Осколок", "1 единственный Осколок" ]
                                                    },{
                                                        IT:[ "i", "Frammenti", "un", "Frammento", "1 solo Frammento" ],
                                                        EN:[ "the", "Fragments", "one", "Fragment", "1 single Fragment"],
                                                        RU:[ "", "Фрагменты", "", "Фрагмент", "1 единственный Фрагмент" ]
                                                    }
                                                ],
                                                itemOf:[
                                                    {
                                                        IT:[ "delle Anime", "dell'Anima" ],
                                                        EN:[ "Soul", "of Soul"],
                                                        RU:[ "Душ", "Души" ]
                                                    },{
                                                        IT:[ "della Luce", "della Luce" ],
                                                        EN:[ "Light", "of Light"],
                                                        RU:[ "Света", "Света" ]
                                                    },{
                                                        IT:[ "delle Ombre", "dell'Ombra" ],
                                                        EN:[ "Shadow", "of Shadow"],
                                                        RU:[ "Теней", "Тени" ]
                                                    }
                                                ],
                                                exit:[
                                                    {
                                                        IT:[ "il Passaggio", "del Passaggio", "dal Passaggio" ],
                                                        EN:[ "the Passage", "Passage", "from the Passage" ],
                                                        RU:[ "Проход", "Прохода", "из Прохода" ]
                                                    },{
                                                        IT:[ "il Portale", "del Portale", "dal Portale" ],
                                                        EN:[ "the Portal", "Portal", "from the Portal" ],
                                                        RU:[ "Портал", "Портала", "из Портала" ]
                                                    },{
                                                        IT:[ "il Cancello", "del Cancello", "dal Cancello" ],
                                                        EN:[ "the Gate", "Gate", "from the Gate" ],
                                                        RU:[ "Врата", "Врат", "из Врат" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectTime:[
                                                    {
                                                        IT:[ "risparmiare tempo", "raccogliendo collettivamente 3 segnalini Tempo o pi&ugrave;" ],
                                                        EN:[ "spare some time", "collectively collecting 3 Time tokens or more" ],
                                                        RU:[ "сэкономить время", "собрав в сумме 3 жетона времени или больше" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT: "{label.item:capital@0} {label.item@1} {label.itemOf@0}",
                                            EN: "{label.item:capital@0} {label.itemOf@0} {label.item@1}",
                                            RU: "{label.item:capital@0} {label.itemOf@0} {label.item@1}"
                                        },{
                                            IT: "{label.culprit:capital@0} {label.culpritBody@0}",
                                            EN: "{label.culprit:capital@0} {label.culpritBody@0}",
                                            RU: "{label.culprit:capital@0} {label.culpritBody@0}"
                                        },{
                                            IT: "{label.item:capital@0} {label.item:capital@1} e {label.exit@0}",
                                            EN: "{label.item:capital@0} {label.item:capital@1} and {label.exit@0}",
                                            RU: "{label.item:capital@0} {label.item:capital@1} и {label.exit@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            IT:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}",
                                            EN:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}",
                                            RU:"{label.intro@0} {label.culprit@0} {label.culpritBody@0}, {label.culpritOf@0} {label.event@0}. {label.chance@0} {label.culprit@0}? {label.discover@0}"
                                        }
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели в указанном порядке:"
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
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}",
                                                        RU:"Собрать {label.item@0} {label.itemOf@0} {label.item@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} prima che svaniscano",
                                                        EN:"Collect {label.item@0} {label.item@1} before they vanish",
                                                        RU:"Соберите {label.item@0} {label.item@1}, прежде чем они исчезнут"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.exit@2}",
                                                        EN:"Escape {label.exit@2}",
                                                        RU:"Сбежать {label.exit@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uscire dal Dungeon attraverso {label.exit@0}",
                                                        EN:"Exit the Dungeon via {label.exit@0}",
                                                        RU:"Выйти из подземелья через {label.exit@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.exit:capital@0}",
                                                        EN:"{label.exit:capital@0}",
                                                        RU:"{label.exit:capital@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Camera {label.exit@1} &egrave; accessibile soltanto attraverso la porta dal bordo rosso. Questa porta &egrave; chiusa a chiave e pu&ograve; essere aperta solo quando gli Eroi possiedono collettivamente {label.item@0} {tokensCount.objective} {label.item@1} {label.itemOf@0} per accedere alla Camera. Un Eroe che si trova nella zona {label.exit@1} (il segnalino Obiettivo grigio) pu&ograve; spendere 1 PM per uscire dal Dungeon. Non appena tutti gli Eroi sono usciti dal Dungeon, {label.questVictory@0}.",
                                                        EN:"The {label.exit@1} Chamber is only accessible through the red-bordered door. This door is locked and can only be opened when the Heroes collectively own {label.item@0} {tokensCount.objective} {label.itemOf@0} {label.item@1} to access the Chamber. A Hero in the {label.exit@1} area (the gray Objective token) can spend 1 MP to exit the Dungeon. As soon as all Heroes have exited the Dungeon, {label.questVictory@0}.",
                                                        RU:"Комната {label.exit@1} доступна только через дверь с красной обводкой. Эта дверь заперта и может быть открыта, только когда герои в сумме владеют {label.item@0} {tokensCount.objective} {label.itemOf@0} {label.item@1}, чтобы попасть в комнату. Герой в зоне {label.exit@1} (серый жетон цели) может потратить 1 ОД, чтобы выйти из подземелья. Как только все герои вышли из подземелья, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Il Tempo Stringe",
                                                        EN:"Time is Running Out",
                                                        RU:"Время на исходе"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, collocate i segnalini Tempo su ogni segnalino Obiettivo nella stessa Zona. Durante ogni Fase dell'Oscurit&agrave;, rimuovete 1 segnalino Tempo da ogni segnalino Obiettivo. Se in un qualsiasi momento i giocatori devono rimuovere un segnalino da un segnalino Obiettivo e non ne rimane nessuno, esso scompare e la Missione termina con una sconfitta.",
                                                        EN:"During setup, place Time tokens on each Objective token in the same Zone. During each Darkness Phase, remove 1 Time token from each Objective token. If at any time players must remove a token from an Objective token and none remains, it disappears and the Mission ends in defeat.",
                                                        RU:"Во время подготовки разместите жетоны времени на каждом жетоне цели в той же зоне. Во время каждой фазы тьмы убирайте 1 жетон времени с каждого жетона цели. Если в какой-то момент игроки должны убрать жетон с жетона цели, но жетонов больше нет, он исчезает, и миссия заканчивается поражением."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Raccogliere {label.item@0} {label.item@1} {label.itemOf@0}",
                                                        EN:"Collect {label.item@0} {label.itemOf@0} {label.item@1}",
                                                        RU:"Собрать {label.item@0} {label.itemOf@0} {label.item@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla. Ogni volta che {label.item@2} {label.item@3} {label.itemOf@1} viene raccolta, i segnalini Tempo su di esso vengono rimossi e ogni Eroe ottiene 8 PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up. Each time {label.item@2} {label.itemOf@0} {label.item@3} is picked up, the Time tokens are removed and all Heroes gain 8 XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",
                                                        RU:"Каждый жетон цели представляет {label.item@2} {label.itemOf@0} {label.item@3}. Любой герой в той же зоне, что и {label.item@2} {label.itemOf@0} {label.item@3}, может потратить 1 действие, чтобы подобрать его. Каждый раз, когда {label.item@2} {label.itemOf@0} {label.item@3} подбирается, жетоны времени убираются, и все герои получают 8 ОО. Помните, что {label.item@0} {label.itemOf@0} {label.item@1} исчезают: если {label.item@4} исчезает, миссия заканчивается поражением."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",
                                                        RU:"Каждый жетон цели представляет {label.item@2} {label.itemOf@0} {label.item@3}. Любой герой в той же зоне, что и {label.item@2} {label.itemOf@0} {label.item@3}, может потратить 1 действие, чтобы подобрать его вместе с оставшимися на нём жетонами времени. Помните, что {label.item@0} {label.itemOf@0} {label.item@1} исчезают: если {label.item@4} исчезает, миссия заканчивается поражением."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni segnalino Obiettivo rappresenta {label.item@2} {label.item@3} {label.itemOf@1}. Un qualsiasi Eroe che si trovi nella stessa Zona di {label.item@2} {label.item@3} {label.itemOf@1} pu&ograve; spendere 1 azione per raccoglierla insieme ai suoi segnalini Tempo rimasti e ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Ricordate che {label.item@0} {label.item@1} {label.itemOf@0} stanno scomparendo: se anche {label.item@4} scompare, la Missione termina con una sconfitta.",
                                                        EN:"Each Objective token represents {label.item@2} {label.itemOf@0} {label.item@3}. Any Hero in the same Zone as {label.item@2} {label.itemOf@0} {label.item@3} can spend 1 action to pick it up with its remaining Time tokens and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Remember that {label.item@0} {label.itemOf@0} {label.item@1} are disappearing: if {label.item@4} disappears, the Mission ends in defeat.",
                                                        RU:"Каждый жетон цели представляет {label.item@2} {label.itemOf@0} {label.item@3}. Любой герой в той же зоне, что и {label.item@2} {label.itemOf@0} {label.item@3}, может потратить 1 действие, чтобы подобрать его вместе с оставшимися на нём жетонами времени, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО. Помните, что {label.item@0} {label.itemOf@0} {label.item@1} исчезают: если {label.item@4} исчезает, миссия заканчивается поражением."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Piani Eterei",
                                                        EN:"Ethereal Planes",
                                                        RU:"Эфирные планы"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici possono liberamente muoversi attraverso le porte anche se sono chiuse. Le porte chiuse bloccano comunque la Linea di Vista.",
                                                        EN:"Enemies can freely move through doors even if they are closed. Closed doors still block the Line of Sight.",
                                                        RU:"Враги могут свободно перемещаться через двери, даже если они закрыты. Закрытые двери всё равно блокируют линию обзора."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectTimed" ],
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
                                                    [ "visitAllRooms", "collectTime" ]
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
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}",
                                                    RU:"Устранить {boss.bossBadName@0}, {label.culprit@0} {label.culpritBody@0}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            RU:"<p>Уберите все жетоны цели из инвентарей героев.</p>"
                                        },
                                        campaignPreparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo e Tempo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective and Time tokens from the Heroes' inventories.</p>",
                                            RU:"<p>Уберите все жетоны цели и времени из инвентарей героев.</p>"
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
    ]

});