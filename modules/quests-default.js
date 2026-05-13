ModManager.modules.push(function(){

    return [
        {

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default" ],
            label:{
                EN:"MD2 quest generator default data",
                RU:"Стандартные данные генератора заданий MD2"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        objectives:{
                            IT:"Obiettivi della missione",
                            EN:"Quest objectives",
                            RU:"Цели задания"
                        },
                        specialRules:{
                            IT:"Regole speciali",
                            EN:"Quest special rules",
                            RU:"Особые правила задания"
                        },
                        challenges:{
                            IT:"Sfide",
                            EN:"Challenges",
                            RU:"Испытания"
                        },
                        challengesExplanation:{
                            IT:"Se sei in cerca di pericolo e gloria puoi affrontare questa avventura seguendo una o pi&ugrave; di queste regole aggiuntive:",
                            EN:"If you are seeking danger and glory you can tackle this adventure by following one or more of these additional rules:",
                            RU:"Если вы ищете опасности и славы, вы можете пройти это приключение, следуя одному или нескольким из этих дополнительных правил:"
                        },
                        requiredTiles:{
                            IT:"Tessere richieste",
                            EN:"Tiles needed",
                            RU:"Требуемые плитки"
                        },
                        upTo:{
                            IT:"Fino a",
                            EN:"Up to",
                            RU:"До"
                        },
                        lootRatio:{
                            IT:"I segnalini Bottino vanno collocati in base al numero di Eroi:",
                            EN:"Loot tokens are placed according to the number of Heroes:",
                            RU:"Жетоны добычи размещаются в зависимости от числа героев:"
                        },
                        questHeader:{
                            IT:"Avventura One-Shot:",
                            EN:"One-Shot Quest:",
                            RU:"Одиночное задание:"
                        },
                        questFooter:{
                            IT:"Massive Randomness 2 &dash; Avventura One-Shot",
                            EN:"Massive Randomness 2 &dash; One Shot Quest",
                            RU:"Massive Randomness 2 &dash; Одиночное задание"
                        },
                        showHiddenText:{
                            IT:"Mostra testo nascosto",
                            EN:"Show hidden text",
                            RU:"Показать скрытый текст"
                        },
                        massiveDarkness1:{
                            EN:"from Massive Darkness 1",
                            IT:"da Massive Darkness 1",
                            RU:"из Massive Darkness 1"
                        }
                    }
                },{
                    type:"specialRules",
                    data:{
                        noLydian:[
                            {
                                priority:10,
                                type:"rule",
                                name:{
                                    IT:"Sonno di Lyidan",
                                    EN:"Lyidan's Sleep",
                                    RU:"Сон Лидана"
                                },
                                explanation:{
                                    IT:"Rimuovere le carte di Lyidan da tutti i mazzi dei Mostri Erranti.",
                                    EN:"Remove Lyidan cards from all Roaming Monster decks.",
                                    RU:"Уберите карты Лидана из всех колод блуждающих монстров."
                                }
                            }
                        ]
                    }
                }
            ]
        },{

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default", "quest-default-zombicide" ],
            label:{
                EN:"MD2 quest generator default data (Zombicide rules)",
                RU:"Стандартные данные генератора заданий MD2 (правила Zombicide)"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        zombicideTiles:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Cross-over con Zombicide",
                                    EN:"Zombicide Cross-over",
                                    RU:"Кроссовер с Zombicide"
                                },
                                explanation:{
                                    IT:"Le tessere di Zombicide (indicate con <b>[Z]</b>) sono da considerarsi divise in 3&times;3 Zone come le tessere di Massive Darkness. Gli edifici sono da equivalenti alle Camere di Massive Darkness 2 ed i muri sui bordi di una tessera o tra una Zona di edificio ed una Zona di strada sono da considerarsi sempre chiusi, a meno che non vi sia un segnalino Porta. Le tessere di Zombicide sono ambientate all'esterno, per cui le Zone di strada sono considerate Zone di Luce e le Zone degli edifici sono considerate Zone d'Ombra.",
                                    EN:"The Zombicide tiles (indicated with <b>[Z]</b>) are to be considered split into 3&times;3 Zones like the Massive Darkness tiles. The buildings are equivalent to Massive Darkness 2 Chambers and the walls on tile borders or between a building Zone and a street Zone are always considered closed unless there is a door token. Zombicide tiles are set outdoors, so the street Zones are considered Light Zones and the building Zones are considered Shadow Zones.",
                                    RU:"Плитки Zombicide (обозначенные как <b>[Z]</b>) следует считать разделёнными на зоны 3&times;3, как и плитки Massive Darkness. Здания эквивалентны комнатам Massive Darkness 2, а стены по краям плитки или между зоной здания и зоной улицы всегда считаются закрытыми, если только там нет жетона двери. Плитки Zombicide расположены снаружи, поэтому зоны улицы считаются освещёнными зонами, а зоны зданий считаются зонами тени."
                                }
                            }
                        ],
                        zombicideHedges:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Ostacoli",
                                    EN:"Obstacles",
                                    RU:"Препятствия"
                                },
                                explanation:{
                                    IT:"Gli ostacoli (siepi, ponti, etc.) stampati sulle tessere possono essere attraversate normalmente ma interrompono le Linee di Vista di Eroi e Nemici.",
                                    EN:"Obstacles (hedges, brodges, etc.) printed on tiles can be crossed normally but interrupt Lines of Sight of Heroes and Enemies.",
                                    RU:"Препятствия (живые изгороди, мосты и т. д.), напечатанные на плитках, можно пересекать как обычно, но они прерывают линии обзора героев и врагов."
                                }
                            }
                        ],
                        zombicideWater:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Le Zone Allagate",
                                    EN:"The Waterholes",
                                    RU:"Затопленные зоны"
                                },
                                explanation:{
                                    IT:"Nemici ed Eroi si muovono regolarmente attraverso le Zone Allagate ma devono spendere 1 PM in pi&ugrave; per uscire da una Zona Allagata attraverso un cornicione.",
                                    EN:"Enemies and Heroes move through Waterholes regularly but must spend 1 extra MP to leave a Waterhole through a Ledge.",
                                    RU:"Враги и герои обычно перемещаются через затопленные зоны, но должны потратить на 1 MP больше, чтобы покинуть затопленную зону через уступ."
                                }
                            }
                        ],
                        zombicideSolidWalls:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"I Bastioni",
                                    EN:"The Ramparts",
                                    RU:"Бастионы"
                                },
                                explanation:{
                                    IT:"Le tessere delle torri contengono sia Zone degli edifici che Zone di strada, delimitate dai bastioni:<ul>"+
                                        "<li>I bastioni non possono essere attraversati, ma non bloccano le Linee di Vista.</li>"+
                                        "<li>&Egrave; possibile tirare attraverso i bastioni.</li>"+
                                        "<li>Un Eroe o un Nemico nella Zona di una torre pu&ograve; vedere al di sopra di un edificio, fino alle Zone oltre di esso. Analogamente, qualsiasi Eroe o Nemico in una di quelle Zone possiede Linea di Vista fino all'Eroe o al Nemico sulla torre.</li>"+
                                        "<li>Un Eroe pu&ograve; tirare dalla Zona di una torre al di sopra di una Zona di un edificio. La Zona dell'edificio attraversata dal tiro conta ai fini di determinare la gittata dell'arma o dell'incantesimo, ma non &egrave; raggiunta da una Linea di Vista.</li>"+
                                        "<li>Non &egrave; possibile tracciare Linee di Vista tra le Zone delle torri delimitate dai bastioni e le zone degli edifici adiacenti a esse, nemmeno se c'&egrave; una porta aperta.</li>"+
                                        "</ul>",
                                    EN:"Tower tiles feature both building and street Zones, bordered by ramparts:<ul>"+
                                        "<li>Ramparts can't be crossed but don't block Lines of Sight</li>"+
                                        "<li>Ramparts can be shot through.</li>"+
                                        "<li>A Hero or Enemy in a tower Zone can see over a building to Zones beyond it. Likewise, any Hero or Enemy in one of these Zones has a Line of Sight to the Hero or Enemy on the tower.</li>"+
                                        "<li>A Hero can shoot from a tower Zone, over a building Zone. The building Zone that is shot through counts towards the weapon or spell's Range, but there is no Line of Sight to it.</li>"+
                                        "<li>Lines of Sight can't be drawn between tower Zones bordered with ramparts and building Zones next to them, even with an open door.</li>"+
                                        "</ul>",
                                    RU:"Плитки башен содержат как зоны зданий, так и зоны улицы, ограниченные бастионами:<ul>"+
                                        "<li>Бастионы нельзя пересекать, но они не блокируют линии обзора.</li>"+
                                        "<li>Через бастионы можно стрелять.</li>"+
                                        "<li>Герой или враг в зоне башни может видеть поверх здания в зоны за ним. Точно так же любой герой или враг в одной из этих зон имеет линию обзора к герою или врагу на башне.</li>"+
                                        "<li>Герой может стрелять из зоны башни поверх зоны здания. Зона здания, через которую проходит выстрел, учитывается при определении дальности оружия или заклинания, но к ней нет линии обзора.</li>"+
                                        "<li>Линии обзора нельзя проводить между зонами башен, ограниченными бастионами, и соседними зонами зданий, даже если дверь открыта.</li>"+
                                        "</ul>"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]

});
