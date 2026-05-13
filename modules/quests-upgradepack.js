ModManager.modules.push(function(){

    const
        QUESTVICTORY = [
            {
                IT:[ "la Missione termina con una vittoria", "terminare la Missione con una vittoria" ],
                EN:[ "the Mission ends with a victory", "end the Mission with a victory" ],
                RU:[ "Миссия заканчивается победой", "завершить Миссию победой" ]
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
            id:"quests-upgradepack",
            needs:[ "quests-default", "md2-upgradepack" ],
            provides:[ "quests", "quests-upgradepack", "untranslated-fr" ],
            label:{
                EN:"MD2 Upgrade pack inspired quest models",
                RU:"MD2: модели заданий, вдохновлённые набором обновлений"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forMaps:[2],
                            type:"keyToBoss",
                            objective:{
                                EN:"Collect keys to unlock a Roaming Monster. Eliminate it to win.",
                                RU:"Соберите ключи, чтобы освободить блуждающего монстра. Устраните его, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Tesoro dell'Immondo\"",
                                EN:"Inspired by the Upgrade Pack quest \"The Fiend's Treasure\"",
                                RU:"Вдохновлено заданием из набора обновлений «Сокровище Нечестивого»"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                imprisonedBy:[
                                                    {
                                                        IT:[ "Il Mago della Vallata", "Ha bisogno di proseguire il suo viaggio e ha chiesto agli Eroi di aiutarlo ad", "riuscito" ],
                                                        EN:[ "The Wizard of the Valley", "He needs to continue his journey and has asked the Heroes to help him", "manage" ],
                                                        RU:[ "Маг Долины", "Ему нужно продолжать своё путешествие, и он попросил героев помочь ему", "удалось" ]
                                                    },{
                                                        IT:[ "La Guardia Cittadina", "&Egrave; fuggito di corsa non appena ha potuto ed ha lasciato agli eroi il compito di", "riuscita" ],
                                                        EN:[ "The City Guard", "He ran away as fast as he could and left the heroes", "manage" ],
                                                        RU:[ "Городская стража", "Он убежал так быстро, как только мог, и оставил героям задачу", "удалось" ]
                                                    },{
                                                        IT:[ "Una giovane guerriero", "Il ragazzo &egrave; sopravvissuto per miracolo... ma ora tocca agli Eroi", "riuscito" ],
                                                        EN:[ "A young warrior", "The boy miraculously survived... but now it's the Heroes' turn", "manage" ],
                                                        RU:[ "Юный воин", "Юноша чудом выжил... но теперь очередь героев", "удалось" ]
                                                    }

                                                ],
                                                prisonAction:[
                                                    {
                                                        IT:[ "ha rinchiuso" ],
                                                        EN:[ "locked up" ],
                                                        RU:[ "заперли" ]
                                                    },{
                                                        IT:[ "ha intrappolato" ],
                                                        EN:[ "trapped" ],
                                                        RU:[ "заманили в ловушку" ]
                                                    },{
                                                        IT:[ "ha imprigionato" ],
                                                        EN:[ "imprisoned" ],
                                                        RU:[ "заточили" ]
                                                    }
                                                ],
                                                prison:[
                                                    {
                                                        IT:[ "in una stanza all'interno del dungeon che stava esplorando", "Chiavi", "le", "Chiavi Nascoste", "&egrave; chiusa a chiave", "essere raccolte", "state raccolte", "raccogliere tutte", "raccogliendo" ],
                                                        EN:[ "in a room inside the dungeon he was exploring", "Keys", "the", "Hidden Keys", "is locked", "collected", "collected", "collect all", "collecting" ],
                                                        RU:[ "в комнате внутри подземелья, которое он исследовал", "Ключи", "", "Спрятанные ключи", "заперта", "собраны", "собраны", "собрать все", "собирая" ]
                                                    },{
                                                        IT:[ "in un cerchio magico di una stanza delle segrete che stava pattugliando", "Sigilli", "i", "Sigilli Magici", "&egrave; sigillata dalla magia", "essere raccolti", "stati raccolti", "raccogliere tutti", "raccogliendo" ],
                                                        EN:[ "in a magic circle of a dungeon room he was patrolling", "Seals", "the", "Magic Seals", "is sealed by magic", "collected", "collected", "collect all", "collecting" ],
                                                        RU:[ "в магическом круге комнаты подземелья, которую он патрулировал", "Печати", "", "Магические печати", "запечатана магией", "собраны", "собраны", "собрать все", "собирая" ]
                                                    },{
                                                        IT:[ "in una delle prigioni del dungeon", "Leve", "le", "Leve di Sicurezza", "&egrave; bloccata da un meccanismo", "essere tirate", "state tirate", "tirare tutte", "tirando" ],
                                                        EN:[ "in one of the prisons of the dungeon", "Levers", "the", "Safety Levers", "it is blocked by a mechanism", "pulled", "pulled", "pull all", "pulling" ],
                                                        RU:[ "в одной из тюрем подземелья", "Рычаги", "", "Защитные рычаги", "заблокирована механизмом", "потянуты", "потянуты", "потянуть все", "потянув" ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a {label.prisoner@5}." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to {label.prisoner@5}." ],
                                                        RU:[ "но не {label.imprisonedBy@2} {label.prisoner@5}." ]
                                                    },{
                                                        IT:[ "ma non &egrave; {label.imprisonedBy@2} a liberarsene." ],
                                                        EN:[ "but it didn't {label.imprisonedBy@2} to get rid of it." ],
                                                        RU:[ "но не {label.imprisonedBy@2} избавиться от этого." ]
                                                    },{
                                                        IT:[ "e non &egrave; {label.imprisonedBy@2} a fare altro." ],
                                                        EN:[ "and it didn't {label.imprisonedBy@2} to do anything else." ],
                                                        RU:[ "и не {label.imprisonedBy@2} сделать что-либо ещё." ]
                                                    }
                                                ],
                                                prisoner:[
                                                    {
                                                        IT:[ "Creatura Corrotta", "una Creatura Corrotta", "la Creatura Corrotta", "la Camera della Creatura Corrotta", "della Camera della Creatura Corrotta", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; la Creatura Corrotta.", "della Creatura Corrotta" ],
                                                        EN:[ "Corrupted Creature", "a Corrupted Creature", "the Corrupted Creature", "the Chamber of the Corrupted Creature", "of the Chamber of the Corrupted Creature", "kill it", "locked-up", "attacked", "targeted ", "This is the Corrupted Creature.", "the Corrupted Creature" ],
                                                        RU:[ "Испорченное существо", "испорченное существо", "испорченное существо", "комната испорченного существа", "комнаты испорченного существа", "убить его", "запертое", "атакованное", "целевое", "Это испорченное существо.", "испорченного существа" ]
                                                    },{
                                                        IT:[ "Essere Oscuro", "un Essere Oscuro", "l'Essere Oscuro", "la Camera dell'Essere Oscuro", "della Camera dell'Essere Oscuro", "ucciderlo", "rinchiuso", "attaccato", "bersagliato", "Questo &egrave; l'Essere Oscuro.", "dell'Essere Oscuro" ],
                                                        EN:[ "Dark Being", "a Dark Being", "the Dark Being", "the Chamber of the Dark Being", "of the Chamber of the Dark Being", "kill him", "locked-up", "attacked" , "targeted", "This is the Dark Being.", "the Dark Being" ],
                                                        RU:[ "Тёмное существо", "тёмное существо", "тёмное существо", "комната тёмного существа", "комнаты тёмного существа", "убить его", "запертое", "атакованное", "целевое", "Это тёмное существо.", "тёмного существа" ]
                                                    },{
                                                        IT:[ "Entit&agrave; Spezzata", "un'Entit&agrave; Spezzata", "l'Entit&agrave; Spezzata", "la Camera dell'Entit&agrave; Spezzata", "della Camera dell'Entit&agrave; Spezzata", "ucciderla", "rinchiusa", "attaccata", "bersagliata", "Questa &egrave; l'Entit&agrave; Spezzata.", "dell'Entit&agrave; Spezzata" ],
                                                        EN:[ "Broken Entity", "a Broken Entity", "the Broken Entity", "the Chamber of the Broken Entity", "of the Chamber of the Broken Entity", "kill it", "locked-up", "attacked", "targeted", "This is the Broken Entity.", "the Broken Entity" ],
                                                        RU:[ "Сломленная сущность", "сломленная сущность", "сломленная сущность", "комната сломленной сущности", "комнаты сломленной сущности", "убить её", "запертая", "атакованная", "целевая", "Это сломленная сущность.", "сломленной сущности" ]
                                                    }
                                                ],
                                                heroTask:[
                                                    {
                                                        IT:[ "uccidere {label.prisoner@2}." ],
                                                        EN:[ "to kill {label.prisoner@2}." ],
                                                        RU:[ "убить {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "eliminare {label.prisoner@2}." ],
                                                        EN:[ "to eliminate {label.prisoner@2}." ],
                                                        RU:[ "устранить {label.prisoner@2}." ]
                                                    },{
                                                        IT:[ "togliere di mezzo {label.prisoner@2}." ],
                                                        EN:[ "to get rid of {label.prisoner@2}." ],
                                                        RU:[ "избавиться от {label.prisoner@2}." ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a {label.prison@7} {label.prison@2} {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}" ],
                                                        EN:[ "to {label.prison@7} all the {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}"],
                                                        RU:[ "{label.prison@7} все {label.prison@3}", "{label.prison@8} {label.collectOptionalItems@3} {label.prison@3}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.prisoner:capital@2}",
                                            RU:"{label.prisoner:capital@2}"
                                        },{
                                            EN:"{label.prisoner:capital@3}",
                                            RU:"{label.prisoner:capital@3}"
                                        },{
                                            EN:"{label.prison:capital@2} {label.prison:capital@3}",
                                            RU:"{label.prison:capital@2} {label.prison:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.imprisonedBy@0} {label.prisonAction@0} {label.prisoner@1} {label.prison@0} {label.but@0} {label.imprisonedBy@1} {label.heroTask@0}",
                                            RU:"{label.imprisonedBy@0} {label.prisonAction@0} {label.prisoner@1} {label.prison@0} {label.but@0} {label.imprisonedBy@1} {label.heroTask@0}"
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
                                                        EN:"{label.prison@3}",
                                                        RU:"{label.prison@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Trovare {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}",
                                                        EN:"Find {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}",
                                                        RU:"Найти {label.prison@2} {label.collectOptionalItems@2} {label.prison@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Scatenare il Mostro",
                                                        EN:"Unleash the Monster",
                                                        RU:"Выпустить монстра"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.prison@2} {label.prison@1} per aprire la porta dell'ultima Camera",
                                                        EN:"Use {label.prison@2} {label.prison@1} to open the door to the final Chamber",
                                                        RU:"Используйте {label.prison@2} {label.prison@1}, чтобы открыть дверь в последнюю комнату"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere il Mostro",
                                                        EN:"Kill the Monster",
                                                        RU:"Убить монстра"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.prisoner@2} {label.prisoner@6}",
                                                        EN:"Kill the {label.prisoner@6} {label.prisoner@0}",
                                                        RU:"Убить {label.prisoner@6} {label.prisoner@0}"
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
                                                        IT:"Generare un Mostro Errante di Livello 5 nella Zona indicata dal segnalino Corruzione {symbol.corruptionToken} (rimuovere tutte le altre carte di quel mostro dagli altri mazzi dei Mostri Erranti). {label.prisoner@9} Rimuovere poi il segnalino Corruzione.",
                                                        EN:"Spawn a random Level 5 Roaming Monster in the Zone indicated by the Corruption token {symbol.corruptionToken} (remove all other cards of that monster from other Roaming Monster decks). {label.prisoner@9} Then remove the Corruption token.",
                                                        RU:"Создайте случайного блуждающего монстра 5-го уровня в зоне, указанной жетоном Порчи {symbol.corruptionToken} (уберите все остальные карты этого монстра из других колод блуждающих монстров). {label.prisoner@9} Затем уберите жетон Порчи."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare {label.campaignBoss@0} nella Zona indicata dal segnalino Corruzione {symbol.corruptionToken} (rimuovere tutte le altre carte di quel mostro dagli altri mazzi dei Mostri Erranti). {label.prisoner@9} Rimuovere poi il segnalino Corruzione.",
                                                        EN:"Spawn {label.campaignBoss@0} in the Zone indicated by the Corruption token {symbol.corruptionToken} (remove all other cards of that monster from other Roaming Monster decks). {label.prisoner@9} Then remove the Corruption token.",
                                                        RU:"Создайте {label.campaignBoss@0} в зоне, указанной жетоном Порчи {symbol.corruptionToken} (уберите все остальные карты этого монстра из других колод блуждающих монстров). {label.prisoner@9} Затем уберите жетон Порчи."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.prisoner:capital@2} {label.prisoner:capital@6}",
                                                        EN:"The {label.prisoner:capital@6} {label.prisoner@0}",
                                                        RU:"{label.prisoner:capital@6} {label.prisoner@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT: "{label.prisoner:capital@3} {label.prison@4}. Pu&ograve; essere aperta soltanto una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}. {label.prisoner:capital@2} non si attiva finch&eacute; la sua Camera non viene aperta. {label.prisoner:capital@2} non pu&ograve; essere {label.prisoner@7} o {label.prisoner@8} da alcuna capacit&agrave; o effetto finch&eacute; {label.prisoner@3} non viene aperta. Quando {label.prisoner@2} viene sconfitto {label.questVictory@0}.",
                                                        EN: "{label.prisoner:capital@3} {label.prison@4}. It can only be opened once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}. {label.prisoner:capital@2} does not activate until its Chamber is opened. {label.prisoner:capital@2} cannot be {label.prisoner@7} or {label.prisoner@8} by any ability or effect until {label.prisoner@3} is opened. When {label.prisoner@2} is defeated {label.questVictory@0}.",
                                                        RU: "{label.prisoner:capital@3} {label.prison@4}. Её можно открыть только после того, как {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} будут {label.prison@6}. {label.prisoner:capital@2} не активируется, пока его комната не открыта. {label.prisoner:capital@2} не может быть {label.prisoner@7} или {label.prisoner@8} никакой способностью или эффектом, пока {label.prisoner@3} не открыта. Когда {label.prisoner@2} побеждён, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.prison@1}",
                                                        RU:"{label.prison@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo ottiene 5 PE e scarta il segnalino. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token gains 5 XP and discards the token. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        RU:"{label.prison:capital@2} {label.prison@1} представлены жетонами цели. Они могут быть {label.prison@5}, потратив 1 ОД. Герой, который собирает жетон цели, получает 5 ОО и сбрасывает жетон. После того как {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} будут {label.prison@6}, особая дверь {label.prisoner@4} может быть открыта любым героем."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo lo scarta. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token discards it. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        RU:"{label.prison:capital@2} {label.prison@1} представлены жетонами цели. Они могут быть {label.prison@5}, потратив 1 ОД. Герой, который собирает жетон цели, сбрасывает его. После того как {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} будут {label.prison@6}, особая дверь {label.prisoner@4} может быть открыта любым героем."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"{label.prison:capital@2} {label.prison@1} sono rappresentate dai segnalini Obiettivo. Possono {label.prison@5} spendendo 1 PM. Un Eroe che raccoglie un segnalino Obiettivo lo scarta e tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE. Una volta che {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} sono {label.prison@6}, la porta speciale {label.prisoner@4} pu&ograve; essere aperta da qualsiasi Eroe.",
                                                        EN:"{label.prison:capital@2} {label.prison@1} are represented by Objective tokens. They can be {label.prison@5} by spending 1 MP. The Hero who collects an Objective token discards it and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP. Once {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} are {label.prison@6}, the special door {label.prisoner@4} can be opened by any Hero.",
                                                        RU:"{label.prison:capital@2} {label.prison@1} представлены жетонами цели. Они могут быть {label.prison@5}, потратив 1 ОД. Герой, который собирает жетон цели, сбрасывает его, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО. После того как {label.prison@2} {label.collectOptionalItems@2} {label.prison@1} будут {label.prison@6}, особая дверь {label.prisoner@4} может быть открыта любым героем."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToPrison" ],
                                            gameMode: [ "unlockAndBoss" ],
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
                                                {
                                                    mods:[ "removeObjectives" ],
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, padrone {label.prisoner@10}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.prisoner@10} master",
                                                    RU:"Устраните {boss.bossBadName@0}, хозяина {label.prisoner@10}"
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
                            forActs:[1,2],
                            forMaps:[2],
                            type:"fallingDungeon",
                            objective:{
                                EN:"Eliminate a Roaming Monster before the dungeon falls.",
                                RU:"Устраните блуждающего монстра, прежде чем подземелье обрушится."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Tamburi di Guerra dei Goblin\"",
                                EN:"Inspired by the Upgrade Pack quest \"Goblin War Drums\"",
                                RU:"Вдохновлено заданием из набора обновлений «Боевые барабаны гоблинов»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                risky:[
                                                    {
                                                        IT:[ "Sapevamo che sarebbe stato molto rischioso," ],
                                                        EN:[ "We knew it would be very risky," ],
                                                        RU:[ "Мы знали, что это будет очень рискованно," ]
                                                    },{
                                                        IT:[ "Ci avevano avvisato che sarebbe stato pericoloso avventurarci," ],
                                                        EN:[ "They warned us that it would be dangerous to venture," ],
                                                        RU:[ "Нас предупреждали, что отправляться туда будет опасно," ]
                                                    },{
                                                        IT:[ "Il Saggio ci aveva pregato di non andare," ],
                                                        EN:[ "The Wise had begged us not to go," ],
                                                        RU:[ "Мудрец умолял нас не ходить," ]
                                                    }
                                                ],
                                                necessary:[
                                                    {
                                                        IT:[ "ma era necessario farlo" ],
                                                        EN:[ "but it was necessary" ],
                                                        RU:[ "но это было необходимо" ]
                                                    },{
                                                        IT:[ "ma non avevamo alcuna scelta" ],
                                                        EN:[ "but we had no choice" ],
                                                        RU:[ "но у нас не было выбора" ]
                                                    },{
                                                        IT:[ "ma il contratto parlava chiaro" ],
                                                        EN:[ "but the contract was clear" ],
                                                        RU:[ "но контракт говорил ясно" ]
                                                    }
                                                ],
                                                task:[
                                                    {
                                                        IT:[ "dovevamo esplorare il malvagio rifugio", "nel dungeon", "da cui" ],
                                                        EN:[ "we had to explore the evil refuge", "in the dungeon", "from which" ],
                                                        RU:[ "нам нужно было исследовать злое убежище", "в подземелье", "откуда" ]
                                                    },{
                                                        IT:[ "dovevamo addentrarci nella cava dietro la cascata", "nelle grotte", "dalla quale" ],
                                                        EN:[ "we had to enter the quarry behind the waterfall", "into the caves", "from which" ],
                                                        RU:[ "нам нужно было войти в каменоломню за водопадом", "в пещеры", "откуда" ]
                                                    },{
                                                        IT:[ "il nostro compito era esplorare le vecchie segrete", "nei tunnel", "dalle quali" ],
                                                        EN:[ "our task was to explore the old dungeons", "in the tunnels", "from which" ],
                                                        RU:[ "нашей задачей было исследовать старые подземелья", "в туннелях", "откуда" ]
                                                    }
                                                ],
                                                why:[
                                                    {
                                                        IT:[ "{label.task@2} proveniva l'eco senza sosta dei tamburi di guerra." ],
                                                        EN:[ "{label.task@2} came the ceaseless echo of war drums." ],
                                                        RU:[ "{label.task@2} доносилось непрерывное эхо боевых барабанов." ]
                                                    },{
                                                        IT:[ "{label.task@2} avevamo sentito quelle grida disperate." ],
                                                        EN:[ "{label.task@2} we had heard those desperate cries." ],
                                                        RU:[ "{label.task@2} мы слышали эти отчаянные крики." ]
                                                    },{
                                                        IT:[ "{label.task@2} sarebbe iniziata l'invasione degli Oscuri." ],
                                                        EN:[ "{label.task@2} the invasion of the dark Ones would begin." ],
                                                        RU:[ "{label.task@2} должно было начаться вторжение Тёмных." ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "Mostro Sentinella", "il", "Questa &egrave; la Sentinella." ],
                                                        EN:[ "Monster Sentinel", "the", "This is the Sentinel." ],
                                                        RU:[ "Монстр-страж", "", "Это страж." ]
                                                    },{
                                                        IT:[ "Creatura Guardiana", "la", "Questa &egrave; la Creatura Guardiana." ],
                                                        EN:[ "Guardian Creature", "the", "This is the Guardian Creature." ],
                                                        RU:[ "Существо-хранитель", "", "Это существо-хранитель." ]
                                                    },{
                                                        IT:[ "Antico Custode", "l'", "Questo &egrave; l'Antico Custode." ],
                                                        EN:[ "Old Keeper", "the", "This is the Old Keeper." ],
                                                        RU:[ "Древний хранитель", "", "Это древний хранитель." ]
                                                    }
                                                ],
                                                suspect:[
                                                    {
                                                        IT:[ "Ma appena messo piede {label.task@1}" ],
                                                        EN:[ "But as soon as we set foot {label.task@1}" ],
                                                        RU:[ "Но как только мы ступили {label.task@1}" ]
                                                    },{
                                                        IT:[ "Dopo pochi passi {label.task@1}" ],
                                                        EN:[ "After a few steps {label.task@1}," ],
                                                        RU:[ "После нескольких шагов {label.task@1}," ]
                                                    },{
                                                        IT:[ "Passati pochi minuti {label.task@1}" ],
                                                        EN:[ "A few minutes passed {label.task@1}" ],
                                                        RU:[ "Прошло несколько минут {label.task@1}" ]
                                                    }
                                                ],
                                                then:[
                                                    {
                                                        IT:[ "avevamo capito che qualcosa non quadrava..." ],
                                                        EN:[ "we understood that something wasn't right..." ],
                                                        RU:[ "мы поняли, что что-то не так..." ]
                                                    },{
                                                        IT:[ "il terreno dietro di noi ha cominciato a cedere..." ],
                                                        EN:[ "the ground behind us began to give way..." ],
                                                        RU:[ "земля за нашей спиной начала проседать..." ]
                                                    },{
                                                        IT:[ "uno stridio assordante &egrave; emerso dalle sue profondit&agrave;..." ],
                                                        EN:[ "a deafening screech emerged from its depths..." ],
                                                        RU:[ "из его глубин раздался оглушительный визг..." ]
                                                    }
                                                ],
                                                fallExplanation:[
                                                    {
                                                        IT:"<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>",
                                                        EN:"<ul><li><b>Round 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Round 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Round 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Round 11</b>: {tileLabel.fourth}</li></ul>",
                                                        RU:"<ul><li><b>Раунд 4</b>: {tileLabel.first}</li>"+
                                                        "<li><b>Раунд 6</b>: {tileLabel.second}</li>"+
                                                        "<li><b>Раунд 9</b>: {tileLabel.third}</li>"+
                                                        "<li><b>Раунд 11</b>: {tileLabel.fourth}</li></ul>"
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                roundLimit:[
                                                    {
                                                        EN:[ 9 ],
                                                        RU:[ 9 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.enemy@1} {label.enemy@0}",
                                            RU:"{label.enemy@1} {label.enemy@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.risky@0} {label.necessary@0}: {label.task@0} {label.why@0} {label.suspect@0} {label.then@0}",
                                            RU:"{label.risky@0} {label.necessary@0}: {label.task@0} {label.why@0} {label.suspect@0} {label.then@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели по порядку:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere la Guardia",
                                                        EN:"Kill the Guard",
                                                        RU:"Убить стража"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@1} {label.enemy@0}",
                                                        EN:"Kill {label.enemy@1} {label.enemy@0}",
                                                        RU:"Убить {label.enemy@1} {label.enemy@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire dal Dungeon Pericolante",
                                                        EN:"Escape the Unstable Dungeon",
                                                        RU:"Сбежать из нестабильного подземелья"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire attraverso l'uscita con tutti gli Eroi",
                                                        EN:"Escape through the exit with all Heroes",
                                                        RU:"Сбежать через выход со всеми героями"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Preparazione Speciale",
                                                        EN:"Special Setup",
                                                        RU:"Специальная подготовка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Collocare i segnalini Clessidra {symbol.timeToken} sulla 4&deg;, 6&deg; e 9&deg; casella del tracciato Oscurit&agrave;. Collocare inoltre un segnalino sulla freccia alla fine del tracciato.",
                                                        EN:"Place the Time tokens {symbol.timeToken} on the 4th, 6th, and 9th Darkness track spaces. Also, place a token on the arrow at the end of the track.",
                                                        RU:"Поместите жетоны времени {symbol.timeToken} на 4-ю, 6-ю и 9-ю клетки трека Тьмы. Также поместите жетон на стрелку в конце трека."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ora Fatale",
                                                        EN:"Fatal Hour",
                                                        RU:"Роковой час"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando il tracciato Oscurit&agrave; viene girato sul retro, collocare il segnalino Clessidra che si trovava sulla freccia sulla seconda casella.",
                                                        EN:"When the Darkness track is flipped onto its back, place the Hourglass token that was on the arrow in the second space.",
                                                        RU:"Когда трек Тьмы переворачивается на обратную сторону, поместите жетон песочных часов, который был на стрелке, на вторую клетку."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Dungeon Pericolante",
                                                        EN:"Unstable Dungeon",
                                                        RU:"Нестабильное подземелье"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        RU:"Каждый раз, когда трек Тьмы достигает числа с жетоном времени, сбросьте его и уберите с карты плитку, наиболее удалённую от серого жетона цели, убив каждого врага и каждого героя на ней. Эти убийства не дают ОО. Плитки уничтожаются в следующем порядке:{label.fallExplanation}"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico, e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Poi ogni Eroe ottiene 7 PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Then, all Heroes gets 7 XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        RU:"Каждый раз, когда трек Тьмы достигает числа с жетоном времени, сбросьте его и уберите с карты плитку, наиболее удалённую от серого жетона цели, убив каждого врага и каждого героя на ней. Эти убийства не дают ОО. Затем все герои получают 7 ОО. Плитки уничтожаются в следующем порядке:{label.fallExplanation}"
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ogni volta che il tracciato Oscurit&agrave; raggiunge un numero con un segnalino Clessidra, scartarlo e rimuovere dalla mappa la Tessera pi&ugrave; lontana dal segnalino Obiettivo grigio, uccidendo ogni Nemico, e ogni Eroe che si trovano su di essa. Queste uccisioni non forniscono alcun PE. Poi ogni Eroe ottiene {label.miniCampaignObjectivesXp:split:3::7} PE. Le Tessere vengono distrutte nell'ordine seguente:{label.fallExplanation}",
                                                        EN:"Every time the Darkness track reaches a number with a Time token, discard it and remove the tile furthest from the gray Objective token from the map, killing every Enemy and every Hero on it. These kills do not provide any XP. Then, all Heroes gets {label.miniCampaignObjectivesXp:split:3::7} XP. Tiles are destroyed in the following order:{label.fallExplanation}",
                                                        RU:"Каждый раз, когда трек Тьмы достигает числа с жетоном времени, сбросьте его и уберите с карты плитку, наиболее удалённую от серого жетона цели, убив каждого врага и каждого героя на ней. Эти убийства не дают ОО. Затем все герои получают {label.miniCampaignObjectivesXp:split:3::7} ОО. Плитки уничтожаются в следующем порядке:{label.fallExplanation}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessuno Resta Indietro",
                                                        EN:"No One is Left Behind",
                                                        RU:"Никто не останется позади"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un qualsiasi Eroe viene ucciso dal crollo delle Tessere, la Missione termina con una sconfitta.",
                                                        EN:"If any Hero is killed by the collapse of the Tiles, the Mission ends in defeat.",
                                                        RU:"Если какой-либо герой погибает от обрушения плиток, Миссия заканчивается поражением."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@0}",
                                                        RU:"{label.enemy@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando un qualsiasi Eroe si muove per la prima volta nella Zona con il segnalino Obiettivo con il lato colorato a faccia in su, scartare il segnalino e generare un Mostro Errante di Livello 5 sul Portale dei Mostri Erranti. {label.enemy@2}",
                                                        EN:"When any Hero moves into the Zone with the Objective token with the colored side up for the first time, discard the token and spawn a Level 5 Roaming Monster on the Roaming Monster Portal. {label.enemy@2}",
                                                        RU:"Когда любой герой впервые входит в зону с жетоном цели цветной стороной вверх, сбросьте жетон и создайте блуждающего монстра 5-го уровня на портале блуждающих монстров. {label.enemy@2}"
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando un qualsiasi Eroe si muove per la prima volta nella Zona con il segnalino Obiettivo con il lato colorato a faccia in su, scartare il segnalino e generare {label.campaignEasyBoss@0} sul Portale dei Mostri Erranti. {label.enemy@2}",
                                                        EN:"When any Hero moves into the Zone with the Objective token with the colored side up for the first time, discard the token and spawn {label.campaignEasyBoss@0} on the Roaming Monster Portal. {label.enemy@2}",
                                                        RU:"Когда любой герой впервые входит в зону с жетоном цели цветной стороной вверх, сбросьте жетон и создайте {label.campaignEasyBoss@0} на портале блуждающих монстров. {label.enemy@2}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga dal Dungeon",
                                                        EN:"Escape the Dungeon",
                                                        RU:"Побег из подземелья"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni Eroe pu&ograve; fuggire dal Dungeon spendendo 1 PM nella Zona del segnalino Obiettivo grigio. Quando tutti gli Eroi sono fuggiti {label.questVictory@0}.",
                                                        EN:"Any Hero can spend 1 MP in the gray Objective token Zone to escape from the Dungeon. When all the Heroes escaped {label.questVictory@0}.",
                                                        RU:"Любой герой может потратить 1 ОД в зоне серого жетона цели, чтобы сбежать из подземелья. Когда все герои сбежали, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "fallingDungeon" ],
                                            gameMode: [ "fallingDungeon" ],
                                            difficulty:[ "increasedLoot" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "none" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "fallingDungeon" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, che ha teso la trappola agli Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, who set the trap for the Heroes",
                                                    RU:"Устраните {boss.bossBadName@0}, который устроил ловушку героям"
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
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forMaps:[2],
                            type:"collectDebuffAndBoss",
                            objective:{
                                EN:"Bring tokens to a zone to summon a Roaming Monster. Eliminate it to win.",
                                RU:"Принесите жетоны в зону, чтобы вызвать блуждающего монстра. Устраните его, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"La Caverna dei Cristalli\"",
                                EN:"Inspired by the Upgrade Pack quest \"Crystal Cave\"",
                                RU:"Вдохновлено заданием из набора обновлений «Хрустальная пещера»"
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                when:[
                                                    {
                                                        IT:[ "Non appena gli eroi si avvicinano alle colline," ],
                                                        EN:[ "When the heroes approach the hills," ],
                                                        RU:[ "Когда герои приближаются к холмам," ]
                                                    },{
                                                        IT:[ "Appena gli eroi escono dalla foresta," ],
                                                        EN:[ "As soon as the heroes emerge from the forest," ],
                                                        RU:[ "Как только герои выходят из леса," ]
                                                    },{
                                                        IT:[ "Appena gli eroi scendono dalla nave," ],
                                                        EN:[ "As soon as the heroes get off the ship," ],
                                                        RU:[ "Как только герои сходят с корабля," ]
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[ "sentono il vociare dei contadini," ],
                                                        EN:[ "they hear the voices of the farmers," ],
                                                        RU:[ "они слышат голоса крестьян," ]
                                                    },{
                                                        IT:[ "sentono il ridere dei bambini," ],
                                                        EN:[ "they hear the laughter of children," ],
                                                        RU:[ "они слышат смех детей," ]
                                                    },{
                                                        IT:[ "sentono il chiacchiericcio dei paesani," ],
                                                        EN:[ "they hear the chatter of the villagers," ],
                                                        RU:[ "они слышат болтовню сельчан," ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "che per&ograve; sembra corrotto e deformato:" ],
                                                        EN:[ "which however seems corrupted and deformed:" ],
                                                        RU:[ "но они кажутся искажёнными и испорченными:" ]
                                                    },{
                                                        IT:[ "ma sembra continuare a ripetersi come una cupa cantilena:" ],
                                                        EN:[ "but it seems to keep repeating itself like a dark chant:" ],
                                                        RU:[ "но он словно повторяется снова и снова, как мрачное песнопение:" ]
                                                    },{
                                                        IT:[ "ma sembra rallentare sempre pi&ugrave;, trasformandosi in un fastidioso stridio:" ],
                                                        EN:[ "but it seems to slow down more and more, turning into an annoying screech:" ],
                                                        RU:[ "но он словно замедляется всё больше и больше, превращаясь в раздражающий визг:" ]
                                                    }
                                                ],
                                                exception:[
                                                    {
                                                        IT:[ "&egrave; il canto dei servi dell'Oscurit&agrave;.", "alla guida dei servi" ],
                                                        EN:[ "it is the song of the servants of Darkness.", "the guide of the servants" ],
                                                        RU:[ "это песнь слуг Тьмы.", "проводник слуг" ]
                                                    },{
                                                        IT:[ "&egrave; il grido dei Mostri Corrotti.", "che dirige del coro" ],
                                                        EN:[ "it is the cry of the Corrupted Monsters.", "who directs the choir" ],
                                                        RU:[ "это крик испорченных монстров.", "руководящий хором" ]
                                                    },{
                                                        IT:[ "&egrave; il lamento delle Bestie Sanguinarie.", "il tormentatore" ],
                                                        EN:[ "it is the lament of the Blood Beasts.", "the tormentor" ],
                                                        RU:[ "это плач кровавых зверей.", "мучитель" ]
                                                    }
                                                ],
                                                what:[
                                                    {
                                                        IT:[ "Il loro fetore non tarda a farsi sentire." ],
                                                        EN:[ "Their stench is not long in making itself felt." ],
                                                        RU:[ "Их зловоние быстро даёт о себе знать." ]
                                                    },{
                                                        IT:[ "L'odore del sangue e del fango riempie l'aria." ],
                                                        EN:[ "The smell of blood and mud fills the air." ],
                                                        RU:[ "Запах крови и грязи заполняет воздух." ]
                                                    },{
                                                        IT:[ "Un lezzo pungente e nauseante arriva da poco lontano." ],
                                                        EN:[ "A pungent and nauseating stench comes from not far away." ],
                                                        RU:[ "Едкая и тошнотворная вонь доносится откуда-то неподалёку." ]
                                                    }
                                                ],
                                                now:[
                                                    {
                                                        IT:[ "&Egrave; giunto il momento che gli eroi si uniscano al coro, con" ],
                                                        EN:[ "It's time for the heroes to join the chorus, with" ],
                                                        RU:[ "Настало время героям присоединиться к хору, с" ]
                                                    },{
                                                        IT:[ "Gli eroi sono pronti a portare la loro musica," ],
                                                        EN:[ "The heroes are ready to bring their music," ],
                                                        RU:[ "Герои готовы принести свою музыку," ]
                                                    },{
                                                        IT:[ "Ma gli eroi conoscono solo una melodia," ],
                                                        EN:[ "But heroes only know one melody," ],
                                                        RU:[ "Но герои знают только одну мелодию," ]
                                                    }
                                                ],
                                                opposing:[
                                                    {
                                                        IT:[ "un canto di lame e di coraggio" ],
                                                        EN:[ "a song of blades and courage" ],
                                                        RU:[ "песнь клинков и отваги" ]
                                                    },{
                                                        IT:[ "l'eterno tamburo della giustizia" ],
                                                        EN:[ "the eternal drum of justice" ],
                                                        RU:[ "вечный барабан правосудия" ]
                                                    },{
                                                        IT:[ "l'incessante tamburo della giustizia" ],
                                                        EN:[ "the incessant drum of justice" ],
                                                        RU:[ "неустанный барабан правосудия" ]
                                                    }
                                                ],
                                                compose:[
                                                    {
                                                        IT:[ "parti di un Artefatto Magico", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Magical Artifact", "to place it", "Let's Build It!" ],
                                                        RU:[ "части магического артефакта", "чтобы поместить его", "Соберём его!" ]
                                                    },{
                                                        IT:[ "parti di un Sigillo Arcano", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of an Arcane Seal", "to place it", "Let's Build It!" ],
                                                        RU:[ "части тайной печати", "чтобы поместить её", "Соберём её!" ]
                                                    },{
                                                        IT:[ "parti di un Amuleto Puro", "per collocarlo", "Ricomponiamolo!" ],
                                                        EN:[ "parts of a Pure Amulet", "to place it", "Let's Build It!" ],
                                                        RU:[ "части чистого амулета", "чтобы поместить его", "Соберём его!" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "il Mostro", "del Mostro", "del mostro" ],
                                                        EN:[ "the Monster", "of the Monster", "of the monster" ],
                                                        RU:[ "монстр", "монстра", "монстра" ]
                                                    },{
                                                        IT:[ "la Creatura", "della Creatura", "della creatura" ],
                                                        EN:[ "the Creature", "of the Creature", "of the creature" ],
                                                        RU:[ "существо", "существа", "существа" ]
                                                    },{
                                                        IT:[ "la Bestia", "della Bestia", "della bestia" ],
                                                        EN:[ "the Beast", "of the Beast", "of the beast" ],
                                                        RU:[ "зверь", "зверя", "зверя" ]
                                                    }
                                                ],
                                                base:[
                                                    {
                                                        IT:[ "la Tana", "la tana contaminata {label.enemy@2}", "della tana", "Tana {label.enemy:capital@1}", "essere purificata", "per purificarla", "in cima alla tana", "La Tana {label.enemy:capital@2}" ],
                                                        EN:[ "the Burrow", "the contaminated lair {label.enemy@2}", "of the lair", "Lair {label.enemy@1}", "be purified", "to purify it", "at the top of the den", "The Lair {label.enemy@2}"  ],
                                                        RU:[ "Нора", "заражённое логово {label.enemy@2}", "логова", "Логово {label.enemy@1}", "быть очищенным", "чтобы очистить его", "наверху норы", "Логово {label.enemy@2}" ]
                                                    },{
                                                        IT:[ "il Rifugio", "il rifugio maledetto {label.enemy@2}", "del rifugio", "Rifugio {label.enemy:capital@1}", "essere liberato", "per liberarlo", "in cima al rifugio", "Il Rifugio {label.enemy:capital@2}" ],
                                                        EN:[ "the Refuge", "the cursed refuge {label.enemy@2}", "of the refuge", "Refuge {label.enemy:capital@1}", "be freed", "to free it", "on top of the refuge", "The Refuge {label.enemy:capital@2}" ],
                                                        RU:[ "Убежище", "проклятое убежище {label.enemy@2}", "убежища", "Убежище {label.enemy:capital@1}", "быть освобождённым", "чтобы освободить его", "наверху убежища", "Убежище {label.enemy:capital@2}" ]
                                                    },{
                                                        IT:[ "il Nascondiglio", "il nascondiglio {label.enemy@2}", "del nascondiglio", "Nascondiglio {label.enemy:capital@1}", "essere distrutto", "per distruggerlo", "in cima al nascondiglio", "Il Nascondiglio {label.enemy:capital@2}" ],
                                                        EN:[ "the Hideout", "the hideout {label.enemy@2}", "of the hideout", "Hideout {label.enemy:capital@1}", "be destroyed", "to destroy it", "on top of the hideout", "The Hideout {label.enemy:capital@2}" ],
                                                        RU:[ "Тайник", "тайник {label.enemy@2}", "тайника", "Тайник {label.enemy:capital@1}", "быть уничтоженным", "чтобы уничтожить его", "наверху тайника", "Тайник {label.enemy:capital@2}" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere tutte le {label.compose@0}", "raccogliendo {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the {label.compose@0}", "collecting {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}"],
                                                        RU:[ "собрать все {label.compose@0}", "собирая {label.collectOptionalItems@3} {label.compose@0}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.base:capital@7}",
                                            RU:"{label.base:capital@7}"
                                        },{
                                            EN:"{label.enemy:capital@0}",
                                            RU:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.opposing:capital@0}",
                                            RU:"{label.opposing:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.when@0} {label.event@0} {label.but@0} {label.exception@0} {label.what@0} {label.now@0} {label.opposing@0}!",
                                            RU:"{label.when@0} {label.event@0} {label.but@0} {label.exception@0} {label.what@0} {label.now@0} {label.opposing@0}!"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi in qualsiasi ordine:",
                                            EN:"Complete the objectives in any order:",
                                            RU:"Выполните цели в любом порядке:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}",
                                                        RU:"Убить {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere il Mostro Errante che viene generato sul segnalino Obiettivo sul lato grigio",
                                                        EN:"Kill the Roaming Monster that spawns on the Objective token on the gray side",
                                                        RU:"Убить блуждающего монстра, который появляется на жетоне цели серой стороной вверх"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Purificare {label.base@0}",
                                                        EN:"Purify {label.base@0}",
                                                        RU:"Очистить {label.base@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Collocare i {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su nella Zona con il segnalino Obiettivo sul lato grigio",
                                                        EN:"Place the {label.collectOptionalItems@2} Objective tokens with the colored side up in the Zone of the Objective token on the gray side",
                                                        RU:"Поместите {label.collectOptionalItems@2} жетонов цели цветной стороной вверх в зону жетона цели серой стороной вверх"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Collocare {label.collectOptionalItems@2} segnalini Obiettivo con il lato colorato a faccia in su nella Zona con il segnalino Obiettivo sul lato grigio",
                                                        EN:"Place {label.collectOptionalItems@2} Objective tokens with the colored side up in the Zone of the Objective token on the gray side",
                                                        RU:"Поместите {label.collectOptionalItems@2} жетонов цели цветной стороной вверх в зону жетона цели серой стороной вверх"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.base@3}",
                                                        RU:"{label.base@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con il segnalino Obiettivo sul lato grigio rappresenta {label.base@1} e deve {label.base@4}. Quando questa Camera viene rivelata, dopo avere risolto la carta Porta, generare un Mostro Errante di Livello 5 nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"The Zone with the Objective token on the gray side represents {label.base@1} and must {label.base@4}. When this Chamber is revealed, after resolving the Door card, spawn a Level 5 Roaming Monster in the Zone of the Objective token on the gray side.",
                                                        RU:"Зона с жетоном цели серой стороной вверх представляет {label.base@1} и должна {label.base@4}. Когда эта комната раскрыта, после разрешения карты Двери создайте блуждающего монстра 5-го уровня в зоне жетона цели серой стороной вверх."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La Zona con il segnalino Obiettivo sul lato grigio rappresenta {label.base@1} e deve {label.base@4}. Quando questa Camera viene rivelata, dopo avere risolto la carta Porta, generare {label.campaignBoss@0} nella Zona del segnalino Obiettivo sul lato grigio.",
                                                        EN:"The Zone with the Objective token on the gray side represents {label.base@1} and must {label.base@4}. When this Chamber is revealed, after resolving the Door card, spawn {label.campaignBoss@0} in the Zone of the Objective token on the gray side.",
                                                        RU:"Зона с жетоном цели серой стороной вверх представляет {label.base@1} и должна {label.base@4}. Когда эта комната раскрыта, после разрешения карты Двери создайте {label.campaignBoss@0} в зоне жетона цели серой стороной вверх."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.compose@2}",
                                                        RU:"{label.compose@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano le {label.collectOptionalItems@2} {label.compose@0} che devono essere unite all'entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 PM per raccoglierlo. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 azione nella Zona del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}. Quando le {label.collectOptionalItems@2} parti sono {label.base@6} {label.questVictory@0}.",
                                                        EN:"Objective tokens with the colored side up represent the {label.collectOptionalItems@2} {label.compose@0} that must be composed near the entry {label.base@2} {label.base@5}. Any Hero in the Zone of an Objective token with the colored side up can spend 1 MP to pick it up. Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up can spend 1 action in the Zone of the Objective token on the gray side {label.compose@1} {label.base@6}. When the {label.collectOptionalItems@2} parts are {label.base@6} {label.questVictory@0}.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.collectOptionalItems@2} {label.compose@0}, которые должны быть собраны у входа {label.base@2} {label.base@5}. Любой герой в зоне жетона цели цветной стороной вверх может потратить 1 ОД, чтобы поднять его. Жетоны цели цветной стороной вверх можно обменивать, как если бы они были предметами. Любой герой, несущий жетон цели цветной стороной вверх, может потратить 1 действие в зоне жетона цели серой стороной вверх {label.compose@1} {label.base@6}. Когда все {label.collectOptionalItems@2} части {label.base@6}, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.collectOptionalItems@2} {label.compose@0} che devono essere unite all'entrata {label.base@2} {label.base@5}. Un qualsiasi Eroe che si trovi nella Zona di un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 PM per raccoglierlo e ogni Eroe ottiene 7 PE. I segnalini Obiettivo con il lato colorato a faccia in su possono essere scambiati come fossero oggetti. Un qualsiasi Eroe che trasporta un segnalino Obiettivo con il lato colorato a faccia in su pu&ograve; spendere 1 azione nella Zona della del segnalino Obiettivo sul lato grigio {label.compose@1} {label.base@6}. Quando {label.collectOptionalItems@2} parti sono {label.base@6} {label.questVictory@0}.",
                                                        EN:"Objective tokens with the colored side up represent {label.collectOptionalItems@2} {label.compose@0} that must be composed near the entry {label.base@2} {label.base@5}. Any Hero in the Zone of an Objective token with the colored side up can spend 1 MP to pick it up and all Heroes gets 7 XP. Objective tokens with the colored side up can be exchanged as if they were objects. Any Hero carrying an Objective token with the colored side up can spend 1 action in the Zone of the Objective token on the gray side {label.compose@1} {label.base@6}. When {label.collectOptionalItems@2} parts are {label.base@6} {label.questVictory@0}.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.collectOptionalItems@2} {label.compose@0}, которые должны быть собраны у входа {label.base@2} {label.base@5}. Любой герой в зоне жетона цели цветной стороной вверх может потратить 1 ОД, чтобы поднять его, и все герои получают 7 ОО. Жетоны цели цветной стороной вверх можно обменивать, как если бы они были предметами. Любой герой, несущий жетон цели цветной стороной вверх, может потратить 1 действие в зоне жетона цели серой стороной вверх {label.compose@1} {label.base@6}. Когда {label.collectOptionalItems@2} части {label.base@6}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRoom-small" ],
                                            gameMode: [ "collectAndDeliver-small" ],
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
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
                                                    ]
                                                }
                                            ]
                                        },{
                                            forCampaign:[ "2shots"]
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
                                                    IT:"Elimina {boss.bossBadName@0}, {label.exception@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.exception@1}",
                                                    RU:"Устраните {boss.bossBadName@0}, {label.exception@1}"
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
                        },{
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[1],
                            type:"capture",
                            objective:{
                                EN:"Capture Roaming Monsters to win.",
                                RU:"Поймайте блуждающих монстров, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Smarriti nella Musica\"",
                                EN:"Inspired by the Upgrade Pack quest \"Lost in the Music\"",
                                RU:"Вдохновлено заданием из набора обновлений «Затерявшиеся в музыке»"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                investigation:[
                                                    {
                                                        IT:[ "Gli eroi hanno smentito le voci secondo cui", "Voci" ],
                                                        EN:[ "The heroes denied the rumors that it was", "Voices" ],
                                                        RU:[ "Герои опровергли слухи о том, что это были", "Слухи" ]
                                                    },{
                                                        IT:[ "Gli eroi hanno scoperto la verit&agrave;: non", "Scoperte" ],
                                                        EN:[ "The heroes discovered the truth: it wasn't", "Discoveries" ],
                                                        RU:[ "Герои узнали правду: это были не", "Открытия" ]
                                                    },{
                                                        IT:[ "Era una bugia. Gli eroi avevano scoperto che non", "Bugie" ],
                                                        EN:[ "It was a lie. The heroes had discovered that it wasn't", "Lies" ],
                                                        RU:[ "Это была ложь. Герои выяснили, что это были не", "Лжи" ]
                                                    }
                                                ],
                                                clue:[
                                                    {
                                                        IT:[ "erano stati i contadini a dar fuoco al porto.", "agli Incendiari" ],
                                                        EN:[ "the farmers who set fire to the port.", "to the Arsonists" ],
                                                        RU:[ "крестьяне подожгли порт.", "поджигателям" ]
                                                    },{
                                                        IT:[ "erano stati i ladri ad assaltare la carovana dei mercanti.", "ai Furfanti" ],
                                                        EN:[ "the thieves who attacked the merchants' caravan.", "to the Scoundrels" ],
                                                        RU:[ "воры напали на купеческий караван.", "негодяям" ]
                                                    },{
                                                        IT:[ "erano state le guardie a saccheggiare i villaggi.", "ai Saccheggiatori" ],
                                                        EN:[ "the guards who sacked the villages.", "to the Looters" ],
                                                        RU:[ "стражники разграбили деревни.", "мародёрам" ]
                                                    }
                                                ],
                                                consequence1:[
                                                    {
                                                        IT:[ "Le indagini erano durate settimane e ora" ],
                                                        EN:[ "The investigations had lasted weeks and now" ],
                                                        RU:[ "Расследование длилось неделями, и теперь" ]
                                                    },{
                                                        IT:[ "Non &egrave; stato facile scoprirlo e ora" ],
                                                        EN:[ "It was not easy to find out and now" ],
                                                        RU:[ "Узнать это было непросто, и теперь" ]
                                                    },{
                                                        IT:[ "Per scoprirlo, hanno dovuto vagare senza sosta per mesi. Ora" ],
                                                        EN:[ "To find out, they had to wander non-stop for months and hours. Now" ],
                                                        RU:[ "Чтобы выяснить это, им пришлось скитаться без остановки месяцами и часами. Теперь" ]
                                                    }
                                                ],
                                                consequence2:[
                                                    {
                                                        IT:[ "si sentono esausti." ],
                                                        EN:[ "they feel exhausted." ],
                                                        RU:[ "они чувствуют себя измотанными." ]
                                                    },{
                                                        IT:[ "sono quasi senza forze." ],
                                                        EN:[ "they are almost powerless." ],
                                                        RU:[ "они почти без сил." ]
                                                    },{
                                                        IT:[ "servirebbe una lunga pausa." ],
                                                        EN:[ "a long break would be needed." ],
                                                        RU:[ "им нужен был бы долгий перерыв." ]
                                                    }
                                                ],
                                                recover:[
                                                    {
                                                        IT:[ "Ma non c'&egrave; tempo da perdere:" ],
                                                        EN:[ "But there is no time to waste:" ],
                                                        RU:[ "Но нельзя терять ни минуты:" ]
                                                    },{
                                                        IT:[ "Ma non possono mollare ora:" ],
                                                        EN:[ "But they can't give up now:" ],
                                                        RU:[ "Но сейчас они не могут сдаться:" ]
                                                    },{
                                                        IT:[ "Ma manca un ultimo sforzo:" ],
                                                        EN:[ "But one last effort is missing:" ],
                                                        RU:[ "Но не хватает последнего усилия:" ]
                                                    }
                                                ],
                                                newPlace:[
                                                    {
                                                        IT:[ "hanno trovato finalmente i mostri responsabili." ],
                                                        EN:[ "they have finally found the responsible monsters." ],
                                                        RU:[ "они наконец нашли виновных монстров." ]
                                                    },{
                                                        IT:[ "hanno scoperto il nascondiglio dei responsabili." ],
                                                        EN:[ "they discovered the hideout of those responsible." ],
                                                        RU:[ "они обнаружили убежище виновных." ]
                                                    },{
                                                        IT:[ "i veri responsabili si nascondevano poco lontano." ],
                                                        EN:[ "the real culprits were hiding not far away." ],
                                                        RU:[ "настоящие виновники прятались неподалёку." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Prenderanno a calci gli agenti del male,", "Calci" ],
                                                        EN:[ "They will kick the agents of evil,", "Kicks" ],
                                                        RU:[ "Они отпинают агентов зла,", "Пинки" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento di impartirgli una bella lezione,", "Lezioni" ],
                                                        EN:[ "The time has come to teach him a good lesson,", "Lessons" ],
                                                        RU:[ "Настало время преподать ему хороший урок,", "Уроки" ]
                                                    },{
                                                        IT:[ "Faranno passare ai colpevoli brutto quarto d'ora,", "Dolori" ],
                                                        EN:[ "They will give the guilty a hard time,", "Pain" ],
                                                        RU:[ "Они устроят виновным трудные времена,", "Боль" ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "per poi interrogarli.", "Interrogatori" ],
                                                        EN:[ "and then question them.", "Interrogations" ],
                                                        RU:[ "и затем допросить их.", "Допросы" ]
                                                    },{
                                                        IT:[ "per chiedergli poi spiegazioni.", "Spiegazioni" ],
                                                        EN:[ "to then ask him for explanations.", "Explanations" ],
                                                        RU:[ "чтобы затем потребовать у него объяснений.", "Объяснения" ]
                                                    },{
                                                        IT:[ "per scambiare poi quattro chiacchiere con loro.", "Chiacchierate" ],
                                                        EN:[ "to then have a chat with them.", "Chat" ],
                                                        RU:[ "чтобы затем поболтать с ними.", "Беседы" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccogliere tutte le Reti", "raccogliendo {label.collectOptionalItems@3} Reti", "{tokensCount.objective}" ],
                                                        EN:[ "to collect all the Nets", "collecting {label.collectOptionalItems@3} Nets", "{tokensCount.objective}"],
                                                        RU:[ "собрать все Сети", "собирая {label.collectOptionalItems@3} Сетей", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.mission@1} e {label.objective@1}",
                                            EN:"{label.mission@1} and {label.objective@1}",
                                            RU:"{label.mission@1} и {label.objective@1}"
                                        },{
                                            IT:"{label.investigation@1} e {label.mission@1}",
                                            EN:"{label.investigation@1} and {label.mission@1}",
                                            RU:"{label.investigation@1} и {label.mission@1}"
                                        },{
                                            EN:"{label.mission@1} {label.clue@1}",
                                            RU:"{label.mission@1} {label.clue@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.investigation@0} {label.clue@0} {label.consequence1@0} {label.consequence2@0} {label.recover@0} {label.newPlace@0} {label.mission@0} {label.objective@0}",
                                            RU:"{label.investigation@0} {label.clue@0} {label.consequence1@0} {label.consequence2@0} {label.recover@0} {label.newPlace@0} {label.mission@0} {label.objective@0}"
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
                                                        IT:"Raduniamoli",
                                                        EN:"Gather Them",
                                                        RU:"Соберём их"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Catturare {label.collectOptionalItems@2} Mostri Erranti <i>(Vedi Regole Speciali)</i>",
                                                        EN:"Capture {label.collectOptionalItems@2} Roaming Monsters <i>(See Special Rules)</i>",
                                                        RU:"Поймайте {label.collectOptionalItems@2} блуждающих монстров <i>(см. Особые правила)</i>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri a Non Finire",
                                                        EN:"Never Ending Monsters",
                                                        RU:"Бесконечные монстры"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"All'inizio di ogni Fase dell'Oscurit&agrave;, se ci sono segnalini Corruzione {symbol.corruptionToken} disponibili, tirare 1 {symbol.yellowDie}. Se si ottiene almeno un risultato {symbol.mana}, generare 1 Mostro Errante su 1 dei segnalini Corruzione disponibili (a scelta dei giocatori). Dopo che un Mostro Errante &egrave; stato generato in questo modo, girare il segnalino Corruzione mostrando il lato Tempo {symbol.timeToken}. Questo segnalino Corruzione non sar&agrave; pi&ugrave; disponibile per la generazione.<p>Se all'inizio di una Fase dell'Oscurit&agrave; non ci sono segnalini Corruzione disponibili e ci sono meno di 2 Mostri Erranti nel Dungeon, girare a tutti i segnalini Tempo sul lato Corruzione.",
                                                        EN:"At the start of each Darkness Phase, if there are {symbol.corruptionToken} Corruption tokens available, roll 1 {symbol.yellowDie}. If you roll at least one {symbol.mana} result, spawn 1 Roaming Monster on 1 of the available Corruption tokens (players' choice). After a Roaming Monster is spawned in this way, flip the Corruption token to the Time {symbol.timeToken} side. This Corruption token will no longer be available for generation.<p>If at the start of a Darkness Phase, there are no Corruption tokens available and there are fewer than 2 Roaming Monsters in the Dungeon, flip all Time tokens to their Corruption side.",
                                                        RU:"В начале каждой фазы Тьмы, если есть доступные жетоны Порчи {symbol.corruptionToken}, бросьте 1 {symbol.yellowDie}. Если выпал хотя бы один результат {symbol.mana}, создайте 1 блуждающего монстра на 1 из доступных жетонов Порчи (по выбору игроков). После того как блуждающий монстр создан таким образом, переверните жетон Порчи на сторону Времени {symbol.timeToken}. Этот жетон Порчи больше не будет доступен для создания.<p>Если в начале фазы Тьмы нет доступных жетонов Порчи и в подземелье меньше 2 блуждающих монстров, переверните все жетоны Времени на сторону Порчи."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Una Rete",
                                                        EN:"The Net",
                                                        RU:"Сеть"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. L'Eroe che lo fa ottiene 5 PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. The Hero who does so gains 5 XP. Nets can be exchanged as if they were items.",
                                                        RU:"Каждый жетон цели цветной стороной вверх представляет Сеть, которую можно использовать для поимки блуждающего монстра (см. ниже). Любой герой в зоне Сети может потратить 1 ОД, чтобы поднять её. Герой, который сделает это, получает 5 ОО. Сети можно обменивать, как если бы они были предметами."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. Tutti gli Eroi ottengono 5 PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. All Heroes gets 5 XP. Nets can be exchanged as if they were items.",
                                                        RU:"Каждый жетон цели цветной стороной вверх представляет Сеть, которую можно использовать для поимки блуждающего монстра (см. ниже). Любой герой в зоне Сети может потратить 1 ОД, чтобы поднять её. Все герои получают 5 ОО. Сети можно обменивать, как если бы они были предметами."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"Ciascun segnalino Obiettivo sul lato colorato rappresenta una Rete che pu&ograve; essere usata per catturare un Mostro Errante (vedere sotto). Un qualsiasi Eroe che si trovi nella Zona di una Rete pu&ograve; spendere 1 PM per raccoglierla. Tutti gli Eroi ottengono {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} PE. Le Reti possono essere scambiate come fossero oggetti.",
                                                        EN:"Each Objective token on the colored side represents a Net that can be used to capture a Roaming Monster (see below). Any Hero in the Zone of a Net can spend 1 MP to collect it. All Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} XP. Nets can be exchanged as if they were items.",
                                                        RU:"Каждый жетон цели цветной стороной вверх представляет Сеть, которую можно использовать для поимки блуждающего монстра (см. ниже). Любой герой в зоне Сети может потратить 1 ОД, чтобы поднять её. Все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective::5} ОО. Сети можно обменивать, как если бы они были предметами."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Catturare un Mostro",
                                                        EN:"Capture a Monster",
                                                        RU:"Поймать монстра"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Un Eroe in possesso di una Rete (segnalino Obiettivo sul lato colorato) pu&ograve; tentare di catturare un Mostro Errante che si trovi nella sua Zona spendendo 1 azione e tirando 2 {symbol.orangeDie}. Se il numero di {symbol.sword} ottenuti &egrave; pari o superiore alla Salute rimanente del Mostro Errante, quel mostro &egrave; catturato. Rimuoverlo dal Dungeon e scartare la Rete usata; l'Eroe che lo ha catturato ottiene i PE e le ricompense previste come se avesse ucciso il Mostro Errante. Se il tentativo di cattura fallisce, la Rete non viene scartata. Una volta catturati {label.collectOptionalItems@2} Mostri Erranti {label.questVictory@0}.",
                                                        EN:"A Hero in possession of a Net (Objective token on the colored side) can attempt to capture a Roaming Monster that is in his Zone by spending 1 action and rolling 2 {symbol.orangeDie}. If the number of {symbol.sword} obtained is equal to or greater than the Roaming Monster's remaining Health, that monster is captured. Remove the monster from the Dungeon and discard the used Net; the Hero who captured it gains the expected XP and rewards as if he had killed the Roaming Monster. If the capture attempt fails, the Net is not discarded. Once captured {label.collectOptionalItems@2} Roaming Monsters {label.questVictory@0}.",
                                                        RU:"Герой, владеющий Сетью (жетон цели цветной стороной вверх), может попытаться поймать блуждающего монстра, находящегося в его зоне, потратив 1 действие и бросив 2 {symbol.orangeDie}. Если количество {symbol.sword} равно или превышает оставшееся здоровье блуждающего монстра, этот монстр пойман. Уберите монстра из подземелья и сбросьте использованную Сеть; герой, поймавший его, получает ОО и награды, как если бы он убил блуждающего монстра. Если попытка поимки не удалась, Сеть не сбрасывается. После поимки {label.collectOptionalItems@2} блуждающих монстров {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming-large" ],
                                            gameMode: [ "capture" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "capture" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "visitAllRooms", "collectOptionalItems" ]
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
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}"
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, che vuole mettere a tacere i suoi alleati",
                                                    EN:"Eliminate {boss.bossBadName@0}, who wants to silence his allies",
                                                    RU:"Устраните {boss.bossBadName@0}, который хочет заставить замолчать своих союзников"
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
                        },{
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[2],
                            forMaps:[2],
                            type:"collect",
                            objective:{
                                EN:"Collect a resource to open doors and find special Roaming Monsters. Eliminate them to win.",
                                RU:"Соберите ресурс, чтобы открыть двери и найти особых блуждающих монстров. Устраните их, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Discesa agli Inferi\"",
                                EN:"Inspired by the Upgrade Pack quest \"Stairway to Hell\"",
                                RU:"Вдохновлено заданием из набора обновлений «Сошествие в Ад»"
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                onlyThing:[
                                                    {
                                                        IT:[ "C'&egrave; solo una cosa da fare:" ],
                                                        EN:[ "There's only one thing to do:" ],
                                                        RU:[ "Остаётся сделать только одно:" ]
                                                    },{
                                                        IT:[ "&Egrave; arrivato il momento: ora dovranno" ],
                                                        EN:[ "The time has come: now they will have to" ],
                                                        RU:[ "Настало время: теперь им придётся" ]
                                                    },{
                                                        IT:[ "Non rimane altro che" ],
                                                        EN:[ "There's nothing left but to" ],
                                                        RU:[ "Не остаётся ничего другого, кроме как" ]
                                                    }
                                                ],
                                                break:[
                                                    {
                                                        IT:[ "sabotare il rituale" ],
                                                        EN:[ "sabotage the ritual" ],
                                                        RU:[ "сорвать ритуал" ]
                                                    },{
                                                        IT:[ "interrompere la cerimonia" ],
                                                        EN:[ "interrupt the ceremony" ],
                                                        RU:[ "прервать церемонию" ]
                                                    },{
                                                        IT:[ "porre fine all'evocazione" ],
                                                        EN:[ "put an end to the summoning" ],
                                                        RU:[ "положить конец призыву" ]
                                                    }
                                                ],
                                                and:[
                                                    {
                                                        IT:[ "e uccidere chiunque sia tanto stupido da mettersi sulla loro strada." ],
                                                        EN:[ "and kill anyone stupid enough to get in their way." ],
                                                        RU:[ "и убить любого, кто будет настолько глуп, чтобы встать у них на пути." ]
                                                    },{
                                                        IT:[ "eliminando chiunque provi a fermarli." ],
                                                        EN:[ "and eliminate anyone who tries to stop them." ],
                                                        RU:[ "и устранить любого, кто попытается их остановить." ]
                                                    },{
                                                        IT:[ "senza fermarsi davanti a nulla." ],
                                                        EN:[ "without stopping at anything." ],
                                                        RU:[ "не останавливаясь ни перед чем." ]
                                                    }
                                                ],
                                                close:[
                                                    {
                                                        IT:[ "{label.enemies:capital@0} si sono rinchiusi in una camera." ],
                                                        EN:[ "{label.enemies:capital@0} locked themselves in a room." ],
                                                        RU:[ "{label.enemies:capital@0} заперлись в комнате." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si sono barricati da qualche parte." ],
                                                        EN:[ "{label.enemies:capital@0} barricaded themselves somewhere." ],
                                                        RU:[ "{label.enemies:capital@0} забаррикадировались где-то." ]
                                                    },{
                                                        IT:[ "{label.enemies:capital@0} si trovano in una stanza sigillata." ],
                                                        EN:[ "{label.enemies:capital@0} are in a sealed room." ],
                                                        RU:[ "{label.enemies:capital@0} находятся в запечатанной комнате." ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        IT:[ "Gli eroi dovranno {label.lock@1} che impediscono loro di entrare" ],
                                                        EN:[ "The heroes will have to {label.lock@1} that prevent them from entering" ],
                                                        RU:[ "Героям придётся {label.lock@1}, которые мешают им войти" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno trovare un modo per {label.lock@1}" ],
                                                        EN:[ "The heroes will have to find a way to {label.lock@1}" ],
                                                        RU:[ "Героям придётся найти способ {label.lock@1}" ]
                                                    },{
                                                        IT:[ "Gli eroi dovranno {label.lock@1}" ],
                                                        EN:[ "The heroes will have to {label.lock@1}" ],
                                                        RU:[ "Героям придётся {label.lock@1}" ]
                                                    }
                                                ],
                                                end:[
                                                    {
                                                        IT:[ "e porre fine a tutto questo una volta per tutte." ],
                                                        EN:[ "and put an end to all this once and for all." ],
                                                        RU:[ "и положить всему этому конец раз и навсегда." ]
                                                    },{
                                                        IT:[ "e concludere la loro lunga avventura." ],
                                                        EN:[ "and end their long adventure." ],
                                                        RU:[ "и завершить своё долгое приключение." ]
                                                    },{
                                                        IT:[ "e risolvere il problema alla radice." ],
                                                        EN:[ "and solve the root of the problem." ],
                                                        RU:[ "и решить проблему в корне." ]
                                                    }
                                                ],
                                                learn:[
                                                    {
                                                        IT:[ "Presto l'Oscurit&agrave; capir&agrave; che" ],
                                                        EN:[ "Soon the Darkness will understand that" ],
                                                        RU:[ "Скоро Тьма поймёт, что" ]
                                                    },{
                                                        IT:[ "Il Male imparer&agrave; presto che" ],
                                                        EN:[ "Evil will learn soon that" ],
                                                        RU:[ "Зло скоро узнает, что" ]
                                                    },{
                                                        IT:[ "I loro nemici impareranno a loro spese che" ],
                                                        EN:[ "Their enemies will learn to their cost that" ],
                                                        RU:[ "Их враги узнают на своей шкуре, что" ]
                                                    }
                                                ],
                                                lesson:[
                                                    {
                                                        IT:[ "gli Eroi sono pi&ugrave; pericolosi di quello che sembra." ],
                                                        EN:[ "the Heroes are more dangerous than they seem." ],
                                                        RU:[ "герои опаснее, чем кажутся." ]
                                                    },{
                                                        IT:[ "anche il Bene sa mostrare i denti." ],
                                                        EN:[ "even the Good knows how to show its teeth." ],
                                                        RU:[ "даже Добро умеет показывать зубы." ]
                                                    },{
                                                        IT:[ "prendersela con i pi&ugrave; deboli non paga mai." ],
                                                        EN:[ "picking on the weakest never pays." ],
                                                        RU:[ "нападать на слабейших никогда не окупается." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "gli sciamani", "gli Sciamani", "dagli Sciamani" ],
                                                        EN:[ "the shamans", "the Shamans", "by the Shamans" ],
                                                        RU:[ "шаманы", "Шаманы", "Шаманами" ]
                                                    },{
                                                        IT:[ "i sacerdoti", "i Sacerdoti", "dai Sacerdoti" ],
                                                        EN:[ "the priests", "the Priests", "by the Priests" ],
                                                        RU:[ "жрецы", "Жрецы", "Жрецами" ]
                                                    },{
                                                        IT:[ "gli adepti", "gli Adepti", "dagli Adepti" ],
                                                        EN:[ "the followers", "the Followers", "by the Followers" ],
                                                        RU:[ "последователи", "Последователи", "Последователями" ]
                                                    }
                                                ],
                                                collecting:[
                                                    {
                                                        IT:[ "Gemme", "Trovare le Gemme", "Gemma" ],
                                                        EN:[ "Gems", "Finding the Gems", "Gem" ],
                                                        RU:[ "Самоцветы", "Найти самоцветы", "Самоцвет" ]
                                                    },{
                                                        IT:[ "Sfere", "Trovare le Sfere", "Sfera" ],
                                                        EN:[ "Spheres", "Finding the Spheres", "Sphere" ],
                                                        RU:[ "Сферы", "Найти сферы", "Сфера" ]
                                                    },{
                                                        IT:[ "Chiavi", "Trovare le Chiavi", "Chiave" ],
                                                        EN:[ "Keys", "Finding the Keys", "Key" ],
                                                        RU:[ "Ключи", "Найти ключи", "Ключ" ]
                                                    }
                                                ],
                                                doors:[
                                                    {
                                                        IT:[ "delle Porte di Cristallo", "le Porte di Cristallo", "Porte di Cristallo" ],
                                                        EN:[ "of the Crystal Doors", "the Crystal Doors", "Crystal Doors" ],
                                                        RU:[ "хрустальных дверей", "хрустальные двери", "Хрустальные двери" ]
                                                    },{
                                                        IT:[ "delle Porte Sigillate", "le Porte Sigillate", "Porte Sigillate" ],
                                                        EN:[ "of the Sealed Doors", "the Sealed Doors", "Sealed Doors" ],
                                                        RU:[ "запечатанных дверей", "запечатанные двери", "Запечатанные двери" ]
                                                    },{
                                                        IT:[ "delle Porte d'Argento", "le Porte d'Argento", "Porte d'Argento" ],
                                                        EN:[ "of the Silver Doors", "the Silver Doors", "Silver Doors" ],
                                                        RU:[ "серебряных дверей", "серебряные двери", "Серебряные двери" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                lock:[
                                                    {
                                                        IT:[ "sono sigillate magicamente", "distruggerne le serrature incantate" ],
                                                        EN:[ "are magically sealed", "destroy the enchanted locks" ],
                                                        RU:[ "запечатаны магией", "уничтожить заколдованные замки" ]
                                                    },{
                                                        IT:[ "sono bloccate da dei meccanisimi", "sbloccarne i meccanismi" ],
                                                        EN:[ "are blocked by some mechanism", "unlock the mechanisms" ],
                                                        RU:[ "заблокированы механизмами", "разблокировать механизмы" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.doors:capital@1}",
                                            RU:"{label.doors:capital@1}"
                                        },{
                                            EN:"{label.enemies:capital@1}",
                                            RU:"{label.enemies:capital@1}"
                                        },{
                                            EN:"{label.break:capital@0}",
                                            RU:"{label.break:capital@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.onlyThing@0} {label.break@0} {label.and@0} {label.close@0} {label.mission@0} {label.end@0} {label.learn@0} {label.lesson@0}",
                                            RU:"{label.onlyThing@0} {label.break@0} {label.and@0} {label.close@0} {label.mission@0} {label.end@0} {label.learn@0} {label.lesson@0}"
                                        }
                                    ],
                                    challenges:[
                                        { intensity:1, tag:"default" },
                                        { intensity:2, tag:"default" },
                                        { intensity:3, tag:"default" },
                                    ],
                                    objectivesHeader:[
                                        {
                                            IT:"Completate gli obiettivi nell'ordine indicato:",
                                            EN:"Complete the objectives in order:",
                                            RU:"Выполните цели по порядку:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemies@1}",
                                                        EN:"Defeat {label.enemies@1}",
                                                        RU:"Победить {label.enemies@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere entrambi i Mostri Erranti che vengono generati sui segnalini Obiettivo",
                                                        EN:"Kill both Roaming Monsters that spawn on Objective tokens",
                                                        RU:"Убить обоих блуждающих монстров, появляющихся на жетонах цели"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.doors@2}",
                                                        RU:"{label.doors@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le 2 porte chiuse a chiave (contrassegnate in rosso) sulla mappa {label.lock@0}. Non possono essere aperte finch&eacute; gli Eroi non riescono a raccogliere 4 {label.collecting@0} <i>(vedere sotto)</i>.",
                                                        EN:"The 2 locked doors (marked in red) on the map {label.lock@0}. They cannot be opened until the Heroes manage to collect 4 {label.collecting@0} <i>(see below)</i>.",
                                                        RU:"2 запертые двери (отмеченные красным) на карте {label.lock@0}. Их нельзя открыть, пока герои не соберут 4 {label.collecting@0} <i>(см. ниже)</i>."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.collecting@1}",
                                                        RU:"{label.collecting@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che un Eroe ha ucciso un Comandante o un Mostro Errante, tirare 1 {symbol.blackDie}. Con un risultato di {symbol.fang} gli Eroi trovano 1 {label.collecting@2}. Con un risultato di {symbol.fang}+{symbol.scratch}, gli Eroi trovano 2 {label.collecting@0}. Altrimenti, non accade nulla. Una volta raccolte 4 {label.collecting@0}, smettere di raccoglierle.",
                                                        EN:"After a Hero kills a Leader or a Roaming Monster, roll 1 {symbol.blackDie}. On a roll of {symbol.fang} the Heroes find 1 {label.collecting@2}. On a roll of {symbol.fang}+{symbol.scratch}, the Heroes find 2 {label.collecting@0}. Otherwise, nothing happens. Once you collect 4 {label.collecting@0}, stop collecting them.",
                                                        RU:"После того как герой убивает Командира или блуждающего монстра, бросьте 1 {symbol.blackDie}. С результатом {symbol.fang} герои находят 1 {label.collecting@2}. С результатом {symbol.fang}+{symbol.scratch} герои находят 2 {label.collecting@0}. Иначе ничего не происходит. После того как собрано 4 {label.collecting@0}, прекратите собирать их."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Dopo che un Eroe ha ucciso un Comandante o un Mostro Errante, tirare 1 {symbol.blackDie}. Con un risultato di {symbol.fang} gli Eroi trovano 1 {label.collecting@2}. Con un risultato di {symbol.fang}+{symbol.scratch}, gli Eroi trovano 2 {label.collecting@0}. Altrimenti, non accade nulla. Per ogni {label.collecting@2} trovata ogni Eroe ottiene 3 PE. Una volta raccolte 4 {label.collecting@0}, smettere di raccoglierle.",
                                                        EN:"After a Hero kills a Leader or a Roaming Monster, roll 1 {symbol.blackDie}. On a roll of {symbol.fang} the Heroes find 1 {label.collecting@2}. On a roll of {symbol.fang}+{symbol.scratch}, the Heroes find 2 {label.collecting@0}. Otherwise, nothing happens. For each collected {label.collecting@2} all Heroes gets 3 XP. Once you collect 4 {label.collecting@0}, stop collecting them.",
                                                        RU:"После того как герой убивает Командира или блуждающего монстра, бросьте 1 {symbol.blackDie}. С результатом {symbol.fang} герои находят 1 {label.collecting@2}. С результатом {symbol.fang}+{symbol.scratch} герои находят 2 {label.collecting@0}. Иначе ничего не происходит. За каждый собранный {label.collecting@2} все герои получают 3 ОО. После того как собрано 4 {label.collecting@0}, прекратите собирать их."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemies:capital@1}",
                                                        RU:"{label.enemies:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando 1 {label.doors@0} si apre, aprire entrambe {label.doors@1} e non pescare una carta Porta. Generare semplicemente 2 Mostri Erranti di Livello 5, 1 su ognuno dei 2 segnalini Obiettivo. Questi Mostri Erranti sono pi&ugrave; difficili da sconfiggere. Possiedono il doppio dell'ammontare di Salute indicato. Una volta sconfitti {label.questVictory@0}.",
                                                        EN:"When 1 {label.doors@0} is opened, open both {label.doors@1} and do not draw a Door card. Simply spawn 2 Level 5 Roaming Monsters, 1 on each of the 2 Objective tokens. These Roaming Monsters are harder to defeat. They have double the indicated amount of Health. When defeated {label.questVictory@0}.",
                                                        RU:"Когда 1 {label.doors@0} открывается, откройте оба {label.doors@1} и не тяните карту Двери. Просто создайте 2 блуждающих монстров 5-го уровня, по 1 на каждом из 2 жетонов цели. Этих блуждающих монстров сложнее победить. У них вдвое больше указанного здоровья. После победы над ними {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Quando 1 {label.doors@0} si apre, aprire entrambe {label.doors@1} e non pescare una carta Porta. Generare semplicemente 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, 1 su ognuno dei 2 segnalini Obiettivo. Questi Mostri Erranti sono pi&ugrave; difficili da sconfiggere. Possiedono il doppio dell'ammontare di Salute indicato. Una volta sconfitti {label.questVictory@0}.",
                                                        EN:"When 1 {label.doors@0} is opened, open both {label.doors@1} and do not draw a Door card. Simply spawn 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, 1 on each of the 2 Objective tokens. These Roaming Monsters are harder to defeat. They have double the indicated amount of Health. When defeated {label.questVictory@0}.",
                                                        RU:"Когда 1 {label.doors@0} открывается, откройте оба {label.doors@1} и не тяните карту Двери. Просто создайте 2 {label.campaignBoss@1} 2 {label.campaignBoss@2}, по 1 на каждом из 2 жетонов цели. Этих блуждающих монстров сложнее победить. У них вдвое больше указанного здоровья. После победы над ними {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze-huge" ],
                                            gameMode: [ "doubleBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "huge" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "doubleBoss" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms" ]
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
                                                    IT:"Elimina {boss.bossBadName@0}, evocato {label.enemies@2}",
                                                    EN:"Eliminate {boss.bossBadName@0}, summoned {label.enemies@2}",
                                                    RU:"Устраните {boss.bossBadName@0}, призванного {label.enemies@2}"
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
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[1,2],
                            forMaps:[1],
                            type:"towerDefense",
                            objective:{
                                EN:"Defend a zone from enemies.",
                                RU:"Защитите зону от врагов."
                            },
                            by:{
                                IT:"Ispirato all'avventura del Pack di Aggiornamento \"Il Labirinto dell'Oscurit&agrave;\"",
                                EN:"Inspired by the Upgrade Pack quest \"Maze of Darkness\"",
                                RU:"Вдохновлено заданием из набора обновлений «Лабиринт Тьмы»"
                            },
                            suggestedTilesCount:5,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                item:[
                                                    {
                                                        IT:[ "potenti artefatti", "il forziere pieno di artefatti", "l'Artefatto", "Caccia all'Artefatto" ],
                                                        EN:[ "powerful artifacts", "the chest full of artifacts", "the Artifact", "Artifact Hunt" ],
                                                        RU:[ "могущественные артефакты", "сундук, полный артефактов", "Артефакт", "Охота за артефактом" ]
                                                    },{
                                                        IT:[ "gemme magiche", "la cassa piena di gemme magiche", "la Gemma", "Caccia alla Gemma" ],
                                                        EN:[ "magic gems", "the chest full of magic gems", "the Gem", "Gem Hunt" ],
                                                        RU:[ "магические самоцветы", "сундук, полный магических самоцветов", "Самоцвет", "Охота за самоцветом" ]
                                                    },{
                                                        IT:[ "pergamene arcane", "la sacca piena di pergamene arcane", "la Pergamena", "Caccia alla Pergamena" ],
                                                        EN:[ "arcane scrolls", "the bag full of arcane scrolls", "the Scroll", "Scroll Hunt" ],
                                                        RU:[ "тайные свитки", "мешок, полный тайных свитков", "Свиток", "Охота за свитком" ]
                                                    }
                                                ],
                                                barrier:[
                                                    {
                                                        IT:[ "Barriere Magiche", "sono Barriere Magiche", "le Barriere Magiche", "ogni Barriera", "una Barriera", "alla Barriera", "una Barriera Magica", "la Barriera pi&ugrave; vicina", "la Barriera", "verso di essa", "distrutta" ],
                                                        EN:[ "Magic Barriers", "are Magic Barriers", "Magic Barriers", "each Barrier", "a Barrier", "on the Barrier", "a Magic Barrier", "the closest Barrier", "the Barrier", "toward it", "destroyed" ],
                                                        RU:[ "Магические барьеры", "являются магическими барьерами", "магические барьеры", "каждый Барьер", "Барьер", "на Барьере", "магический Барьер", "ближайший Барьер", "Барьер", "к нему", "уничтожен" ]
                                                    },{
                                                        IT:[ "Piloni Protettivi", "sono Piloni Protettivi", "i Piloni Protettivi", "ogni Pilone", "un Pilone", "al Pilone", "un Pilone Protettivo", "il Pilone pi&ugrave; vicino", "il Pilone", "verso di esso", "distrutto" ],
                                                        EN:[ "Protective Pylons", "are Protective Pylons", "Protective Pylons", "each Pylon", "a Pylon", "on the Pylon", "a Protective Pylon", "the closest Pylon", "the Pylon", "toward it", "destroyed" ],
                                                        RU:[ "Защитные пилоны", "являются защитными пилонами", "защитные пилоны", "каждый Пилон", "Пилон", "на Пилоне", "защитный Пилон", "ближайший Пилон", "Пилон", "к нему", "уничтожен" ]
                                                    },{
                                                        IT:[ "Torrette Difensive", "sono Torrette Difensive", "le Torrette Difensive", "ogni Torretta", "una Torretta", "alla Torretta", "una Torretta Difensiva", "la Torretta pi&ugrave; vicina", "la Torretta", "verso di essa", "distrutta" ],
                                                        EN:[ "Defensive Turrets", "are Defensive Turrets", "Defensive Turrets", "each Turret", "a Turret", "on the Turret", "a Defensive Turret", "the closest Turret", "the Turret", "toward it", "destroyed" ],
                                                        RU:[ "Оборонительные турели", "являются оборонительными турелями", "оборонительные турели", "каждая Турель", "Турель", "на Турели", "оборонительная Турель", "ближайшая Турель", "Турель", "к ней", "уничтожена" ]
                                                    }
                                                ],
                                                interference:[
                                                    {
                                                        IT:[ "Sembra che le forze dell'Oscurit&agrave; alla fine siano venute a sapere delle interferenze degli eroi." ],
                                                        EN:[ "It seems that the forces of Darkness eventually learned of the heroes' interference." ],
                                                        RU:[ "Похоже, силы Тьмы в конце концов узнали о вмешательстве героев." ]
                                                    },{
                                                        IT:[ "I piani degli eroi sono stati scoperti." ],
                                                        EN:[ "The heroes' plans have been exposed." ],
                                                        RU:[ "Планы героев были раскрыты." ]
                                                    },{
                                                        IT:[ "Gli eroi avevano un piano ben preciso ma non sono stati abbastanza scrupolosi nel mantenerlo segreto." ],
                                                        EN:[ "The heroes had a very specific plan but they were not scrupulous enough in keeping it secret." ],
                                                        RU:[ "У героев был чёткий план, но они были недостаточно осторожны, чтобы хранить его в тайне." ]
                                                    }
                                                ],
                                                purpose:[
                                                    {
                                                        IT:[ "Sapendo che gli eroi stanno accumulando {label.item@0}," ],
                                                        EN:[ "Knowing that the heroes are amassing {label.item@0}," ],
                                                        RU:[ "Зная, что герои собирают {label.item@0}," ]
                                                    },{
                                                        IT:[ "Per qualche motivo, gli eroi sono alla ricerca di {label.item@0} per cui"],
                                                        EN:[ "The heroes are looking for {label.item@0} for some reason, so"],
                                                        RU:[ "По какой-то причине герои ищут {label.item@0}, поэтому" ]
                                                    },{
                                                        IT:[ "Qualcuno ha visto gli eroi mentre facevano domande su dove trovare {label.item@0} e" ],
                                                        EN:[ "Someone saw the heroes asking questions about where to find {label.item@0} and" ],
                                                        RU:[ "Кто-то видел, как герои расспрашивали, где найти {label.item@0}, и" ]
                                                    }
                                                ],
                                                trap:[
                                                    {
                                                        IT:[ "i nemici hanno trovato un modo per attirarli in trappola con l'inganno!" ],
                                                        EN:[ "the enemies have found a way to lure them into a trap by deception!" ],
                                                        RU:[ "враги нашли способ заманить их в ловушку обманом!" ]
                                                    },{
                                                        IT:[ "i nemici sono riusciti ad attirarli nella loro trappola mortale!" ],
                                                        EN:[ "the enemies managed to lure them into their deadly trap!" ],
                                                        RU:[ "враги сумели заманить их в свою смертоносную ловушку!" ]
                                                    },{
                                                        IT:[ "i nemici hanno organizzato una trappola per attirarli nel bel mezzo del loro territorio!" ],
                                                        EN:[ "the enemies have set up a trap to lure them into the middle of their territory!" ],
                                                        RU:[ "враги устроили ловушку, чтобы заманить их в самый центр своей территории!" ]
                                                    }
                                                ],
                                                onlyWay:[
                                                    {
                                                        IT:[ "C'&egrave; un solo modo per fuggirne:" ],
                                                        EN:[ "There is only one way to escape:" ],
                                                        RU:[ "Есть только один способ сбежать:" ]
                                                    },{
                                                        IT:[ "Ormai non possono pi&ugrave; fuggire. Devono"],
                                                        EN:[ "Now they can no longer escape. They have to" ],
                                                        RU:[ "Теперь они уже не могут сбежать. Им придётся" ]
                                                    },{
                                                        IT:[ "Non hanno alcuno scampo. Per sopravvivere devono" ],
                                                        EN:[ "They have no escape. To survive they must" ],
                                                        RU:[ "У них нет спасения. Чтобы выжить, они должны" ]
                                                    }
                                                ],
                                                survive:[
                                                    {
                                                        IT:[ "sopravvivere a questa battaglia e proteggere {label.item@1}!" ],
                                                        EN:[ "survive this battle and protect {label.item@1}!" ],
                                                        RU:[ "пережить эту битву и защитить {label.item@1}!" ]
                                                    },{
                                                        IT:[ "proteggere {label.item@1} senza lasciarci la pelle!" ],
                                                        EN:[ "protect {label.item@1} without killing us!" ],
                                                        RU:[ "защитить {label.item@1}, не сложив головы!" ]
                                                    },{
                                                        IT:[ "rimanere vivi e difendere {label.item@1}!" ],
                                                        EN:[ "stay alive and defend {label.item@1}!" ],
                                                        RU:[ "остаться в живых и защитить {label.item@1}!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                spareItem:[
                                                    {
                                                        IT:[ "riescono a difendere {label.barrier@2}", "almeno {label.barrier@6} non venga {label.barrier@10} (al momento della vittoria deve esserci almeno {label.barrier@6} non {label.barrier@10})" ],
                                                        EN:[ "manage to defend the {label.barrier@2}", "at least {label.barrier@6} is not {label.barrier@10} (at the time of victory there must be at least {label.barrier@6} not {label.barrier@10})" ],
                                                        RU:[ "удалось защитить {label.barrier@2}", "хотя бы {label.barrier@6} не {label.barrier@10} (в момент победы должен быть хотя бы {label.barrier@6} не {label.barrier@10})" ]
                                                    }
                                                ],
                                                collectAllItems:[
                                                    {
                                                        IT:[ "a raccogliere tutto il bottino", "raccogliendo tutti i Segnalini Bottino sulla tessera centrale ({tileLabel.first})" ],
                                                        EN:[ "to collect all the loot", "collecting all the Loot Tokens on the central Tile ({tileLabel.first})"],
                                                        RU:[ "собрать всю добычу", "собирая все жетоны добычи на центральной плитке ({tileLabel.first})" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                           EN:"{label.item:capital@3}",
                                           RU:"{label.item:capital@3}"
                                        },{
                                            EN:"{label.barrier:capital@2}",
                                            RU:"{label.barrier:capital@2}"
                                        },{
                                            EN:"{label.item:capital@1}",
                                            RU:"{label.item:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.interference@0} {label.purpose@0} {label.trap@0} {label.onlyWay@0} {label.survive@0}",
                                            RU:"{label.interference@0} {label.purpose@0} {label.trap@0} {label.onlyWay@0} {label.survive@0}"
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
                                                        IT:"Proteggere {label.item@2}",
                                                        EN:"Defend {label.item@2}",
                                                        RU:"Защитить {label.item@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Se c'&egrave; un Nemico nella Zona con il segnalino Obiettivo sul lato colorato all'inizio della Fase dei Nemici, la Missione termina con una sconfitta",
                                                        EN:"If there is an Enemy in the Zone with the Objective token on its colored side at the start of the Enemy Phase, the Mission ends in defeat",
                                                        RU:"Если враг находится в зоне с жетоном цели цветной стороной вверх в начале вражеской фазы, Миссия заканчивается поражением"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Uccidere tutti i Nemici",
                                                        EN:"Eliminate all Enemies",
                                                        RU:"Устранить всех врагов"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Una volta che i Nemici hanno smesso di generarsi, uccidere tutti i Nemici per {label.questVictory@1}",
                                                        EN:"Once Enemies stop spawning, kill all Enemies to {label.questVictory@1}",
                                                        RU:"После того как враги перестают появляться, убейте всех врагов, чтобы {label.questVictory@1}"
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
                                                        IT:"Collocare il segnalino Tesoro Raro, che solitamente si aggiunge nel 4&deg; round, nel sacchetto dei Tesori. Quando il tracciato Oscurit&agrave; raggiunge il 4&deg; round, evitare semplicemente di aggiungere il segnalino Tesoro Raro (collocare un segnalino Clessidra sopra l'icona Tesoro Raro sul tracciato Oscurit&agrave; come promemoria). Aggiungere i segnalini Tesoro al 6&deg; e 8&deg; round come di norma."+
                                                        "<p>Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere con almeno 1 Porta della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero dei giocatori:</p>"+
                                                        "<ul>"+
                                                        "<li>1-2 Eroi: 1 segnalino Tesoro per Zona</li>"+
                                                        "<li>3-4 Eroi: 2 segnalini Tesoro per Zona</li>"+
                                                        "<li>5-6 Eroi: 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "<p>Collocare i segnalini Corruzione sulla 2&deg;, 4&deg;, 6&deg; e 8&deg; casella del tracciato Oscurit&agrave;. Collocare, inoltre, un segnalino Generazione sulla 3&deg;, 7&deg; e 9&deg; casella del tracciato Oscurit&agrave;.",
                                                        EN:"Place the Rare Treasure token, which is usually added in the 4th round, into the Treasure bag. When the Darkness track reaches the 4th round, simply do not add the Rare Treasure token (place an Hourglass token over the Rare Treasure icon on the Darkness track as a reminder.) Add Treasure tokens on the 6th and 8th rounds as normal."+
                                                        "<p>Generate 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens drawn from the bag based on the number of players in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first}):</p> "+
                                                        "<ul>"+
                                                        "<li>1-2 Heroes: 1 Treasure token per Zone</li>"+
                                                        "<li>3-4 Heroes: 2 Treasure tokens per Zone</li>"+
                                                        "<li>5-6 Heroes: 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "<p>Place the Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 7th, and 9th spaces of the Darkness track.",
                                                        RU:"Поместите жетон Редкого сокровища, который обычно добавляется в 4-м раунде, в мешок Сокровищ. Когда трек Тьмы достигает 4-го раунда, просто не добавляйте жетон Редкого сокровища (поместите жетон Песочных часов поверх значка Редкого сокровища на треке Тьмы в качестве напоминания). Добавляйте жетоны Сокровищ в 6-м и 8-м раундах как обычно."+
                                                        "<p>Создайте 1 Орду на каждом из 4 Порталов. Поместите в каждую из зон комнат с не менее чем 1 Дверью центральной плитки ({tileLabel.first}) определённое количество жетонов Сокровищ, взятых из мешка, в зависимости от числа игроков:</p>"+
                                                        "<ul>"+
                                                        "<li>1-2 героя: 1 жетон Сокровища на зону</li>"+
                                                        "<li>3-4 героя: 2 жетона Сокровища на зону</li>"+
                                                        "<li>5-6 героев: 3 жетона Сокровища на зону</li>"+
                                                        "</ul>"+
                                                        "<p>Поместите жетоны Порчи на 2-ю, 4-ю, 6-ю и 8-ю клетки трека Тьмы. Кроме того, поместите жетон Появления на 3-ю, 7-ю и 9-ю клетки трека Тьмы."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere con almeno 1 Porta della Tessera centrale ({tileLabel.first}) 1 Segnalino Bottino."+
                                                        "<p>Collocare i segnalini Corruzione sulla 2&deg;, 4&deg;, 6&deg; e 8&deg; casella del tracciato Oscurit&agrave;. Collocare, inoltre, un segnalino Generazione sulla 3&deg;, 7&deg; e 9&deg; casella del tracciato Oscurit&agrave;.",
                                                        EN:"Generate 1 Horde on each of the 4 Portals. Place 1 Loot Token in each of the Zones of the Chambers with at least 1 Door of the central Tile ({tileLabel.first})."+
                                                        "<p>Place the Corruption tokens on the 2nd, 4th, 6th, and 8th spaces of the Darkness track. Additionally, place a Spawn token on the 3rd, 7th, and 9th spaces of the Darkness track.",
                                                        RU:"Создайте 1 Орду на каждом из 4 Порталов. Поместите 1 жетон добычи в каждую из зон комнат с не менее чем 1 Дверью центральной плитки ({tileLabel.first})."+
                                                        "<p>Поместите жетоны Порчи на 2-ю, 4-ю, 6-ю и 8-ю клетки трека Тьмы. Кроме того, поместите жетон Появления на 3-ю, 7-ю и 9-ю клетки трека Тьмы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Nessun Rinforzo Extra",
                                                        EN:"No Extra Reinforcement",
                                                        RU:"Никаких дополнительных подкреплений"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ignorare tutte le capacit&agrave; o gli effetti dei Nemici che generano Orde extra o Mostri Erranti extra.",
                                                        EN:"Ignore any Enemy abilities or effects that generate extra Mobs or extra Roaming Monsters.",
                                                        RU:"Игнорируйте любые способности или эффекты врагов, которые создают дополнительные Орды или дополнительных блуждающих монстров."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Ondate di Nemici",
                                                        EN:"Enemy Waves",
                                                        RU:"Волны врагов"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Per questa Missione, ignorare qualsiasi generazione dal tracciato Oscurit&agrave;. Invece, ogni volta che il tracciato Oscurit&agrave; raggiunge una casella con un segnalino, scartare quel segnalino e risolvere l'effetto corrispondente:"+
                                                        "<ul>"+
                                                        "<li><b>Segnalino Corruzione:</b> Generare 1 Mostro Errante sul Portale dei Mostri Erranti. Fatto questo, scambiare la posizione del Portale dei Mostri Erranti con il Portale successivo in senso orario. Il Portale dei Mostri Erranti passa alle Tessere seguenti:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Segnalino Generazione:</b> Generare 1 Orda su ognuno dei 4 Portali. Collocare in ognuna delle Zone delle Camere della Tessera centrale ({tileLabel.first}) un ammontare di segnalini Tesoro estratti dal sacchetto in base al numero degli Eroi:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Eroi:</b> 1 segnalino Tesoro per Zona</li>"+
                                                        "<li><b>3-4 Eroi:</b> 2 segnalini Tesoro per Zona</li>"+
                                                        "<li><b>5-6 Eroi:</b> 3 segnalini Tesoro per Zona</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                        EN:"For this Mission, ignore any spawns from the Darkness track. Instead, whenever the Darkness track reaches a space with a token, discard that token and resolve the corresponding effect:"+
                                                        "<ul>"+
                                                        "<li><b>Corruption Token:</b> Spawn 1 Roaming Monster on the Roaming Monster Portal. Once this is done, swap the location of the Roaming Monster Portal with the next Portal clockwise. The Roaming Monster Portal switches to the following tiles:"+
                                                        "<ul>"+
                                                        "<li>Round 2: {tileLabel.second}</li>"+
                                                        "<li>Round 4: {tileLabel.third}</li>"+
                                                        "<li>Round 6: {tileLabel.fourth}</li>"+
                                                        "<li>Round 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Spawn Token:</b> Spawn 1 Horde on each of the 4 Portals. Place an amount of Treasure tokens taken from the bag in each of the Chamber Zones of the central Tile ({tileLabel.first}) based on the number of Heroes:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 Heroes:</b> 1 Treasure token per Zone</li>"+
                                                        "<li><b>3-4 Heroes:</b> 2 Treasure tokens per Zone</li>"+
                                                        "<li><b>5-6 Heroes:</b> 3 Treasure tokens per Zone</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>",
                                                        RU:"Для этой Миссии игнорируйте любые появления с трека Тьмы. Вместо этого, всякий раз, когда трек Тьмы достигает клетки с жетоном, сбросьте этот жетон и разрешите соответствующий эффект:"+
                                                        "<ul>"+
                                                        "<li><b>Жетон Порчи:</b> Создайте 1 блуждающего монстра на портале блуждающих монстров. После этого поменяйте местами портал блуждающих монстров со следующим порталом по часовой стрелке. Портал блуждающих монстров переключается на следующие плитки:"+
                                                        "<ul>"+
                                                        "<li>Раунд 2: {tileLabel.second}</li>"+
                                                        "<li>Раунд 4: {tileLabel.third}</li>"+
                                                        "<li>Раунд 6: {tileLabel.fourth}</li>"+
                                                        "<li>Раунд 8: {tileLabel.fifth}</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "<li><b>Жетон Появления:</b> Создайте 1 Орду на каждом из 4 Порталов. Поместите в каждую из зон комнат центральной плитки ({tileLabel.first}) определённое количество жетонов Сокровищ, взятых из мешка, в зависимости от числа героев:"+
                                                        "<ul>"+
                                                        "<li><b>1-2 героя:</b> 1 жетон Сокровища на зону</li>"+
                                                        "<li><b>3-4 героя:</b> 2 жетона Сокровища на зону</li>"+
                                                        "<li><b>5-6 героев:</b> 3 жетона Сокровища на зону</li>"+
                                                        "</ul>"+
                                                        "</li>"+
                                                        "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.barrier@0}",
                                                        RU:"{label.barrier@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato grigio {label.barrier@1} che bloccano i Nemici e impediscono loro di lasciare quella Zona. I Nemici bersagliano {label.barrier@2} come se bersagliassero gli Eroi, e {label.barrier@3} possiede 5 Salute. Ogni volta che un Nemico attacca {label.barrier@4}, non tirare i dadi come in un combattimento regolare. Infliggere invece 1 Ferita {label.barrier@5}.",
                                                        EN:"The Objective tokens on the gray side {label.barrier@1} that block Enemies and prevent them from leaving that Zone. Enemies target le Barriere Magiche {label.barrier@2} as if they were targeting Heroes, and {label.barrier@3} has 5 Health. Whenever an Enemy attacks {label.barrier@4}, do not roll dice as in regular combat. Instead, inflict 1 Wound {label.barrier@5}.",
                                                        RU:"Жетоны цели серой стороной вверх {label.barrier@1}, которые блокируют врагов и не дают им покинуть эту зону. Враги нацеливаются на {label.barrier@2}, как если бы они нацеливались на героев, и {label.barrier@3} имеет 5 здоровья. Всякий раз, когда враг атакует {label.barrier@4}, не бросайте кости, как в обычном бою. Вместо этого нанесите 1 Рану {label.barrier@5}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.item@3}",
                                                        RU:"{label.item@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"In questa Missione, invece dell'attivazione regolare, tutti i Nemici, inclusi i Mostri Erranti, devono seguire un comportamento diverso. Effettuano 2 azioni. Per ogni azione, controllare le condizioni seguenti. Se la prima viene soddisfatta, effettuare quella. Altrimenti, passare alla condizione successiva, finch&eacute; non se ne soddisfa una."+
                                                        "<ul>"+
                                                        "<li><b>Se c'&egrave; {label.barrier@6} tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera {label.barrier@7} come suo bersaglio per attaccare o muoversi. Questo significa che pu&ograve; attaccare {label.barrier@8}, se si trova a gittata. Altrimenti si muove di 1 Zona {label.barrier@9} (ignorando eventuali Eroi).</li>"+
                                                        "<li><b>Se c'&egrave; almeno 1 Eroe tra il Nemico e il segnalino Obiettivo sul lato colorato:</b> Il Nemico considera l'Eroe pi&ugrave; vicino come suo bersaglio per attaccare o muoversi.</li>"+
                                                        "<li><b>Altrimenti:</b> Il Nemico si muove di 1 Zona verso il segnalino Obiettivo sul lato colorato."+
                                                        "</ul>"+
                                                        "<p>Se, all'inizio della Fase dei Nemici, c'&egrave; un Nemico nella Zona del segnalino Obiettivo sul lato colorato, la Missione termina con una sconfitta.</p>",
                                                        EN:"In this Mission, instead of the regular activation, all Enemies, including Roaming Monsters, must follow a different behavior. They perform 2 actions. For each action, check the following conditions. If the first one is met, perform that one. Otherwise, move on to the next condition until one is satisfied."+
                                                        "<ul>"+
                                                        "<li><b>If there is {label.barrier@6} between the Enemy and the Objective token on the colored side:</b> The Enemy treats {label.barrier@7} as its target to attack or move. This means it can attack {label.barrier@8}, if within range. Otherwise, move 1 Zone {label.barrier@9} (ignoring any Heroes).</li>"+
                                                        "<li><b>If there is at least 1 Hero between the Enemy and the Objective token on the colored side:</b> The Enemy treats the closest Hero as its target to attack or move.</li>" +
                                                        "<li><b>Otherwise:</b> The Enemy moves 1 Zone toward the Objective token on the colored side."+
                                                        "</ul>"+
                                                        "<p>If, at the start of the Enemy Phase, there is an Enemy in the Zone of the Objective token on the colored side, the Mission ends in defeat.</p>",
                                                        RU:"В этой Миссии вместо обычной активации все враги, включая блуждающих монстров, должны следовать другому поведению. Они совершают 2 действия. Для каждого действия проверьте следующие условия. Если первое выполняется, выполните его. Иначе переходите к следующему условию, пока одно не будет удовлетворено."+
                                                        "<ul>"+
                                                        "<li><b>Если есть {label.barrier@6} между врагом и жетоном цели цветной стороной вверх:</b> Враг считает {label.barrier@7} своей целью для атаки или перемещения. Это значит, что он может атаковать {label.barrier@8}, если находится в пределах досягаемости. Иначе он перемещается на 1 зону {label.barrier@9} (игнорируя героев).</li>"+
                                                        "<li><b>Если между врагом и жетоном цели цветной стороной вверх есть хотя бы 1 герой:</b> Враг считает ближайшего героя своей целью для атаки или перемещения.</li>"+
                                                        "<li><b>Иначе:</b> Враг перемещается на 1 зону к жетону цели цветной стороной вверх."+
                                                        "</ul>"+
                                                        "<p>Если в начале вражеской фазы враг находится в зоне жетона цели цветной стороной вверх, Миссия заканчивается поражением.</p>"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "towerDefense" ],
                                            gameMode: [ "towerDefense" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "none" ],
                                            skin:[ "default" ],
                                            size: [ "none" ],
                                            bridges:[ "none" ],
                                            corridors: [ "towerDefense" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                {
                                                    tags:[
                                                        [ "spareItem", "collectAllItems" ]
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
                                                    IT:"Sconfiggere il Generale dell'Armata",
                                                    EN:"Defeat the Army General",
                                                    RU:"Победить генерала армии"
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}",
                                                    EN:"Eliminate {boss.bossBadName@0}",
                                                    RU:"Устраните {boss.bossBadName@0}"
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
