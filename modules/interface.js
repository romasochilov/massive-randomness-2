ModManager.modules.push(function(){

    return [
        {

            id:"interface",
            needs:[ ],
            provides:[ "interface" ],
            label:{
                EN:"Massive Randomness 2 UI configuration",
                RU:"Конфигурация интерфейса Massive Randomness 2"
            },
            content:[
                {
                    type:"interface",
                    data:{
                        settings:[
                            {
                                type:"includeExclude",
                                isMandatory:true,
                                title:{
                                    IT:"Materiali disponibili",
                                    EN:"Available components",
                                    RU:"Доступные компоненты"
                                },
                                entries:[
                                    {
                                        code:"A",
                                        isMandatory:true,
                                        isDefault:true,
                                        label:{
                                            IT:"Massive Darkness 2: Hellscape",
                                            EN:"Massive Darkness 2: Hellscape",
                                            RU:"Massive Darkness 2: Hellscape"
                                        },
                                        description:{
                                            IT:"La scatola base del gioco",
                                            EN:"The game core box",
                                            RU:"Базовая коробка игры"
                                        },
                                        tags:[ "md2-hellscape" ]
                                    },{
                                        code:"C",
                                        idOption:"md2-heavenfall",
                                        label:{
                                            IT:"Massive Darkness 2: Heavenfall",
                                            EN:"Massive Darkness 2: Heavenfall",
                                            RU:"Massive Darkness 2: Heavenfall"
                                        },
                                        description:{
                                            IT:"4 tessere paradiso, Modalit&agrave; Campagna e boss",
                                            EN:"4 heaven tiles, Campaign Mode, and bosses",
                                            RU:"4 райские плитки, режим кампании и боссы"
                                        },
                                        tags:[ "md2-heavenfall" ]
                                    },{
                                        code:"G",
                                        label:{
                                            IT:"Massive Darkness 2: Rainbow Crossing",
                                            EN:"Massive Darkness 2: Rainbow Crossing",
                                            RU:"Massive Darkness 2: Rainbow Crossing"
                                        },
                                        description:{
                                            IT:"4 tessere arcobaleno",
                                            EN:"4 rainbow tiles",
                                            RU:"4 радужные плитки"
                                        },
                                        tags:[ "md2-rainbowcrossing" ]
                                    },{
                                        idOption:"campaign-upgradepack",
                                        code:"H",
                                        label:{
                                            IT:"Massive Darkness 2: Pack di Aggiornamento",
                                            EN:"Massive Darkness 2: Upgrade Pack",
                                            RU:"Massive Darkness 2: Upgrade Pack"
                                        },
                                        description:{
                                            IT:"Carte della Campagna Prologo e boss",
                                            EN:"Prologue Campaign cards and boss",
                                            RU:"Карты кампании-пролога и босс"
                                        },
                                        tags:[ "campaign-upgradepack" ]
                                    },{
                                        ifMenuOptionSelected:[ "campaign-upgradepack" ],
                                        code:"I",
                                        label:{
                                            IT:"Massive Darkness: Ciclope Scudiera e Ciclope Spaccarupi",
                                            EN:"Massive Darkness: Spearmaiden Cyclops and Cliffbreaker Cyclops",
                                            RU:"Massive Darkness: Spearmaiden Cyclops and Cliffbreaker Cyclops"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",
                                            RU:"Босс"
                                        },
                                        tags:[ "campaign-upgradepack-cyclopsduo" ]
                                    },{
                                        ifMenuOptionSelected:[ "campaign-upgradepack" ],
                                        code:"J",
                                        label:{
                                            IT:"Massive Darkness: Hellephant",
                                            EN:"Massive Darkness: Hellephant",
                                            RU:"Massive Darkness: Hellephant"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",
                                            RU:"Босс"
                                        },
                                        tags:[ "campaign-upgradepack-hellephant" ]
                                    },{
                                        code:"K",
                                        label:{
                                            IT:"Massive Darkness 2: Quattro Cavalieri",
                                            EN:"Massive Darkness 2: Four Horsemen Pack",
                                            RU:"Massive Darkness 2: Four Horsemen Pack"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",
                                            RU:"Босс"
                                        },
                                        tags:[ "campaign-fourhorsemen" ]
                                    },{
                                        code:"L",
                                        label:{
                                            IT:"Massive Darkness 2: Darkbringer",
                                            EN:"Massive Darkness 2: Darkbringer",
                                            RU:"Massive Darkness 2: Darkbringer"
                                        },
                                        description:{
                                            IT:"Boss",
                                            EN:"Boss",
                                            RU:"Босс"
                                        },
                                        tags:[ "campaign-darkbringer" ]
                                    },{
                                        code:"D",
                                        label:{
                                            IT:"Massive Darkness",
                                            EN:"Massive Darkness",
                                            RU:"Massive Darkness"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon",
                                            EN:"9 dungeon tiles",
                                            RU:"9 плиток подземелья"
                                        },
                                        tags:[ "md1-base" ]
                                    },{
                                        code:"B",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",
                                            RU:"Massive Darkness: A Quest of Crystal & Lava"
                                        },
                                        description:{
                                            IT:"6 tessere cristalli/lava",
                                            EN:"6 crystal/lava tiles",
                                            RU:"6 кристальных/лавовых плиток"
                                        },
                                        tags:[ "md2-crystallava-cl" ]
                                    },{
                                        code:"b",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",
                                            RU:"Massive Darkness: A Quest of Crystal & Lava"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon che replicano quelle di Massive Darkness 1",
                                            EN:"9 dungeon tiles replicating Massive Darkness 1 tiles",
                                            RU:"9 плиток подземелья, повторяющих плитки Massive Darkness 1"
                                        },
                                        tags:[ "md2-crystallava-up" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"E",
                                        label:{
                                            IT:"Zombicide: Black Plague",
                                            EN:"Zombicide: Black Plague",
                                            RU:"Zombicide: Black Plague"
                                        },
                                        description:{
                                            IT:"9 tessere esterne",
                                            EN:"9 outdoor tiles",
                                            RU:"9 уличных плиток"
                                        },
                                        tags:[ "zc-blackplague" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"F",
                                        label:{
                                            IT:"Zombicide: Green Horde",
                                            EN:"Zombicide: Green Horde",
                                            RU:"Zombicide: Green Horde"
                                        },
                                        description:{
                                            IT:"9 tessere esterne/villaggio",
                                            EN:"9 outdoor/village tiles",
                                            RU:"9 уличных/деревенских плиток"
                                        },
                                        tags:[ "zc-greenhorde" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"f",
                                        label:{
                                            IT:"Zombicide: Friends and Foes",
                                            EN:"Zombicide: Friends and Foes",
                                            RU:"Zombicide: Friends and Foes"
                                        },
                                        description:{
                                            IT:"5 tessere esterne/villaggio",
                                            EN:"5 outdoor/village tiles",
                                            RU:"5 уличных/деревенских плиток"
                                        },
                                        tags:[ "zc-friendfoes" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"e",
                                        label:{
                                            IT:"Zombicide: Wulfsburg",
                                            EN:"Zombicide: Wulfsburg",
                                            RU:"Zombicide: Wulfsburg"
                                        },
                                        description:{
                                            IT:"2 tessere torre",
                                            EN:"2 tower tiles",
                                            RU:"2 плитки башни"
                                        },
                                        tags:[ "zc-wulfsburg" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"M",
                                        label:{
                                            IT:"Zombicide: White Death",
                                            EN:"Zombicide: White Death",
                                            RU:"Zombicide: White Death"
                                        },
                                        description:{
                                            IT:"9 tessere innevate",
                                            EN:"9 snow tiles",
                                            RU:"9 снежных плиток"
                                        },
                                        tags:[ "zc-whitedeath" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"m",
                                        label:{
                                            IT:"Zombicide: Eternal Empire",
                                            EN:"Zombicide: Eternal Empire",
                                            RU:"Zombicide: Eternal Empire"
                                        },
                                        description:{
                                            IT:"4 tessere innevate",
                                            EN:"4 snow tiles",
                                            RU:"4 снежные плитки"
                                        },
                                        tags:[ "zc-eternalempire" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Ponti",
                                    EN:"Bridges",
                                    RU:"Мосты"
                                },
                                entries:[
                                    {
                                        code:"U",
                                        isDefault:true,
                                        label:{
                                            IT:"Due uscite",
                                            EN:"Two Exits",
                                            RU:"Два выхода"
                                        },
                                        description:{
                                            IT:"Le tessere ponte possono essere attraversate orizzontalmente oppure verticalmente.",
                                            EN:"Bridge tiles can be crossed horizontally or vertically.",
                                            RU:"Плитки мостов можно пересекать по горизонтали или по вертикали.",
                                        },
                                        tags:[ "bridge-default-twoexits" ]
                                    },{
                                        code:"u",
                                        label:{
                                            IT:"Quattro uscite",
                                            EN:"Four exits",
                                            RU:"Четыре выхода"
                                        },
                                        description:{
                                            IT:"Le tessere ponte possono essere attraversate da ogni direzione.",
                                            EN:"Bridge tiles can be crossed from any direction.",
                                            RU:"Плитки мостов можно пересекать с любой стороны.",
                                        },
                                        tags:[ "bridge-default-fourexits" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Generatore",
                                    EN:"Generator",
                                    RU:"Генератор"
                                },
                                entries:[
                                    {
                                        idOption:"generator-oneshot",
                                        code:"V",
                                        isDefault:true,
                                        label:{
                                            IT:"Avventura one-shot",
                                            EN:"One-shot quest",
                                            RU:"Одиночное задание"
                                        },
                                        description:{
                                            IT:"Genera un'avventura one-shot.",
                                            EN:"Generate a one-shot quest.",
                                            RU:"Сгенерировать одиночное задание."
                                        },
                                        tags:[ "generator-oneshot" ]
                                    },{
                                        idOption:"generator-campaign",
                                        code:"v",
                                        ifMenuOptionSelected:[ "md2-heavenfall" ],
                                        label:{
                                            IT:"Campagna",
                                            EN:"Campaign",
                                            RU:"Кампания"
                                        },
                                        description:{
                                            IT:"Genera una serie di avventure da giocare in sequenza seguendo le regole di Massive Darkness 2: Heavenfall.",
                                            EN:"Generate a series of adventures to be played in sequence following the rules of Massive Darkness 2: Heavenfall.",
                                            RU:"Сгенерировать серию приключений, в которые нужно играть по порядку, следуя правилам Massive Darkness 2: Heavenfall."
                                        },
                                        tags:[ "generator-campaign", "generator-campaign-standard", "campaign-full",  "boss" ]
                                    },{
                                        idOption:"generator-campaign-mini",
                                        code:"w",
                                        ifMenuOptionSelected:[ "md2-heavenfall" ],
                                        label:{
                                            IT:"Mini-campagna",
                                            EN:"Mini-campaign",
                                            RU:"Мини-кампания"
                                        },
                                        description:{
                                            IT:"Genera una breve serie di avventure da giocare in sequenza seguendo le regole delle mini-campagne.",
                                            EN:"Generate a short series of adventures to be played in sequence following the mini-campaign rules.",
                                            RU:"Сгенерировать короткую серию приключений, в которые нужно играть по порядку, следуя правилам мини-кампании."
                                        },
                                        tags:[ "generator-campaign", "generator-campaign-standard", "campaign-mini",  "boss" ]
                                    },{
                                        idOption:"generator-campaign-2shots",
                                        code:"W",
                                        ifMenuOptionSelected:[ "md2-heavenfall" ],
                                        label:{
                                            IT:"Campagna 2-shot",
                                            EN:"2-shot campaign",
                                            RU:"Кампания на 2 задания"
                                        },
                                        description:{
                                            IT:"Genera una brevissima campagna di 2 missioni da giocare in sequenza, seguendo le <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> dell'utente <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a> di BGG.",
                                            EN:"Generates a very short campaign of 2 missions to be played in sequence, following the BGG user <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a> <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a>.",
                                            RU:"Сгенерировать очень короткую кампанию из 2 миссий, в которые нужно играть по порядку, следуя <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>домашним правилам</a> пользователя BGG <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>."
                                        },
                                        tags:[ "generator-campaign", "campaign-2shots",  "boss" ]
                                    },{
                                        idOption:"generator-campaign-baseonly",
                                        code:"b",
                                        label:{
                                            EN:"Base box only mini-campaign",
                                            RU:"Мини-кампания только из базовой коробки"
                                        },
                                        description:{
                                            EN:"Generates a 2-act mini-campaign that uses only content from the MD2 Hellscape base box — no expansions required.",
                                            RU:"Сгенерировать мини-кампанию из 2 актов, в которой используется только содержимое базовой коробки MD2 Hellscape — расширения не требуются."
                                        },
                                        tags:[ "generator-campaign", "campaign-baseonly", "boss" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Difficolt&agrave;",
                                    EN:"Difficulty",
                                    RU:"Сложность"
                                },
                                entries:[
                                    {
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal",
                                            RU:"Обычная"
                                        },
                                        description:{
                                            IT:"Il gioco standard, senza regole aggiuntive.",
                                            EN:"The standard game, no extra rules.",
                                            RU:"Стандартная игра, без дополнительных правил."
                                        }
                                    },{
                                        code:"3",
                                        label:{
                                            IT:"Difficile",
                                            EN:"Hard",
                                            RU:"Сложная"
                                        },
                                        description:{
                                            IT:"Orde pi&ugrave; numerose e resistenti: regole stampate sul foglio dell'avventura.",
                                            EN:"Bigger, tougher Mobs: harder table rules are printed on the quest sheet.",
                                            RU:"Более многочисленные и живучие орды: усложнённые правила печатаются на листе задания."
                                        },
                                        tags:[ "difficulty-hard" ]
                                    },{
                                        code:"4",
                                        label:{
                                            IT:"Incubo",
                                            EN:"Nightmare",
                                            RU:"Кошмар"
                                        },
                                        description:{
                                            IT:"La sfida definitiva: regole punitive, Sfide e scontri con i Boss inclusi.",
                                            EN:"The ultimate challenge: punishing table rules, Challenges and Boss fights included.",
                                            RU:"Максимальный вызов: суровые правила, включены испытания и сражения с боссами."
                                        },
                                        tags:[ "difficulty-nightmare", "challenges-default", "boss" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "generator-oneshot" ],
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Grandezza delle mappa",
                                    EN:"Map size",
                                    RU:"Размер карты"
                                },
                                entries:[
                                    {
                                        code:"0",
                                        label:{
                                            IT:"Piccola",
                                            EN:"Small",
                                            RU:"Маленькая"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in meno rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 fewer tile than suggested.",
                                            RU:"Если возможно, карта задания содержит на 1 плитку меньше, чем рекомендовано."
                                        },
                                        tags:[ "maps-size-small" ]
                                    },{
                                        code:"1",
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal",
                                            RU:"Обычная"
                                        },
                                        description:{
                                            IT:"La mappa dell'avventura ha il numero suggerito di tessere.",
                                            EN:"The adventure map has the suggested number of tiles.",
                                            RU:"Карта приключения содержит рекомендованное число плиток."
                                        },
                                        tags:[ "maps-size-normal" ]
                                    },{
                                        code:"2",
                                        label:{
                                            IT:"Grande",
                                            EN:"Large",
                                            RU:"Большая"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in pi&ugrave; rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 more tile than suggested.",
                                            RU:"Если возможно, карта задания содержит на 1 плитку больше, чем рекомендовано."
                                        },
                                        tags:[ "maps-size-large" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                ifMenuOptionSelected:[ "generator-oneshot" ],
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Stile della mappa",
                                    EN:"Map style",
                                    RU:"Стиль карты"
                                },
                                entries:[
                                    {
                                        code:"Z",
                                        isDefault:true,
                                        label:{
                                            IT:"Uniforme",
                                            EN:"Uniform",
                                            RU:"Единый"
                                        },
                                        description:{
                                            IT:"Tutte le tessere della mappa mostrano la stessa ambientazione.",
                                            EN:"All tiles on the map show the same setting.",
                                            RU:"Все плитки на карте показывают одно и то же окружение.",
                                        },
                                        tags:[ "maps-default-uniform" ]
                                    },{
                                        code:"y",
                                        label:{
                                            IT:"Divisa",
                                            EN:"Split",
                                            RU:"Разделённый"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare 2 ambientazioni diverse. Migliora la variet&agrave; di struttura cercando di mantenere una buona estetica.",
                                            EN:"The map tiles can show 2 environments. Improves the variety of structure while trying to maintain good aesthetics.",
                                            RU:"Плитки карты могут показывать 2 разных окружения. Это повышает разнообразие структуры, стараясь сохранить хорошую эстетику.",
                                        },
                                        tags:[ "maps-default-split" ]
                                    },{
                                        code:"z",
                                        label:{
                                            IT:"Interdimensionale",
                                            EN:"Interdimensional",
                                            RU:"Межпространственный"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare ambientazioni diverse. Aumenta la variet&agrave; di struttura a scapito dell'estetica.",
                                            EN:"The map tiles can show different environments. Increase layout variety to the detriment of aesthetics.",
                                            RU:"Плитки карты могут показывать разные окружения. Это увеличивает разнообразие раскладки в ущерб эстетике.",
                                        },
                                        tags:[ "maps-default-notuniform" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                title:{
                                    IT:"Extra",
                                    EN:"Extras",
                                    RU:"Дополнительно"
                                },
                                entries:[
                                    {
                                        code:"O",
                                        ifMenuOptionSelected:[ "generator-campaign", "generator-campaign-mini", "generator-campaign-2shots", "generator-campaign-baseonly" ],
                                        label:{
                                            IT:"Nascondi gli spoiler",
                                            EN:"Hide spoilers",
                                            RU:"Скрыть спойлеры"
                                        },
                                        description:{
                                            IT:"Le ricompense e le parti narrative vengono nascoste.",
                                            EN:"The rewards and the narrative parts are hidden.",
                                            RU:"Награды и сюжетные части скрываются.",
                                        },
                                        tags:[ "campaign-hidespoilers" ]
                                    },{
                                        code:"X",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Sfide",
                                            EN:"Challenges",
                                            RU:"Испытания"
                                        },
                                        description:{
                                            IT:"Aggiunge all'avventura delle sfide extra, che potrai decidere se accettare o meno.",
                                            EN:"It adds extra challenges to the adventure, you can decide whether to accept or not.",
                                            RU:"Добавляет в приключение дополнительные испытания, и вы сможете решить, принимать их или нет.",
                                        },
                                        tags:[ "challenges-default" ]
                                    },{
                                        code:"N",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Scontri con i Boss",
                                            EN:"Boss fights",
                                            RU:"Сражения с боссами"
                                        },
                                        description:{
                                            IT:"Aggiunge al termine di alcune avventure uno scontro con il boss.",
                                            EN:"It adds a boss fight at the end of some quests.",
                                            RU:"Добавляет в конце некоторых заданий сражение с боссом.",
                                        },
                                        tags:[ "boss" ]
                                    },{
                                        code:"Y",
                                        ifMenuOptionSelected:[ "generator-oneshot" ],
                                        label:{
                                            IT:"Modalit&agrave; Esplorazione",
                                            EN:"Dungeon Crawling Mode",
                                            RU:"Режим исследования подземелья"
                                        },
                                        description:{
                                            IT:"Il contenuto delle Camere &egrave; nascosto e viene mostrato quando vengono rivelate.",
                                            EN:"The content of the Chambers is hidden and is shown when they are revealed.",
                                            RU:"Содержимое комнат скрыто и показывается, когда они раскрываются.",
                                        },
                                        tags:[ "gamemode-dungeoncrawling" ]
                                    },{
                                        code:"y",
                                        label:{
                                            IT:"Escludi avventure non tradotte",
                                            EN:"Exclude untranslated quests",
                                            FR:"Exclure les qu&#xEA;tes non traduites",
                                            RU:"Исключить непереведённые задания"

                                        },
                                        description:{
                                            IT:"Non vengono generate le avventure non disponibili nella lingua selezionata.",
                                            EN:"Adventures not available in the selected language are not generated.",
                                            FR:"Les aventures non disponibles dans la langue s&#xE9;lectionn&#xE9;e ne sont pas g&#xE9;n&#xE9;r&#xE9;es.",
                                            RU:"Задания, недоступные на выбранном языке, не генерируются."
                                        },
                                        languageExcludeTags:{
                                            IT:[ "untranslated-it" ],
                                            EN:[ "untranslated-en" ],
                                            FR:[ "untranslated-fr" ],
                                            RU:[ "untranslated-ru" ]
                                        }
                                    },{
                                        ifFlag:"zombicide",
                                        isFlag:"zombicideRules",
                                        label:{
                                            IT:"Nascondi regole per Zombicide",
                                            EN:"Hide Zombicide rules",
                                            RU:"Скрыть правила Zombicide"

                                        },
                                        description:{
                                            IT:"Le regole comuni per giocare con le tessere di Zombicide non vengono aggiunte all'avventura.",
                                            EN:"The common rules for playing with Zombicide tiles are not added to the adventure.",
                                            RU:"Общие правила игры с плитками Zombicide не добавляются в приключение."
                                        },
                                        excludeTags:[ "quest-default-zombicide" ]
                                    },{
                                        ifNotFlag:"zombicide",
                                        isButton:true,
                                        isFlagButton:"zombicide",
                                        label:{
                                            IT:"Usa",
                                            EN:"Use",
                                            RU:"Использовать"
                                        },
                                        description:{
                                            IT:"Prova ad usare alcuni componenti della serie Zombicide.",
                                            EN:"Try using some components from the Zombicide series.",
                                            RU:"Попробуйте использовать некоторые компоненты из серии Zombicide."
                                        },
                                        message:{
                                            IT:"<p>Alcuni capitoli della serie <i>Fantasy Zombicide</i> usano tessere dalla dimensione e struttura simile a quelle usate da Massive Darkness 2. Queste includono nuove ambientazioni, spazi aperti e nuovi ostacoli ma possono risultare troppo facili o difficili da affrontare con le regole di Massive Darkness 2.</p><p>Se disponi di questi materiali e ti senti <i>molto coraggioso</i>, Massive Randomness 2 pu&ograve; usarle per generare le avventure.</p><p>Vuoi provarci?</p>",
                                            EN:"<p>Some chapters in the <i>Fantasy Zombicide</i> series use tiles with a similar size and structure to those used in Massive Darkness 2. These include new environments, open spaces, and new obstacles but may be too easy or difficult to deal with the Massive Darkness 2 rules.</p><p>If you have these materials and are feeling <i>very brave</i>, Massive Randomness 2 can use them to generate adventures.</p><p>Do you want to try it?</p>",
                                            RU:"<p>Некоторые части серии <i>Fantasy Zombicide</i> используют плитки, похожие по размеру и структуре на те, что используются в Massive Darkness 2. Они добавляют новые окружения, открытые пространства и новые препятствия, но с правилами Massive Darkness 2 могут оказаться слишком лёгкими или слишком сложными.</p><p>Если у вас есть эти материалы и вы чувствуете себя <i>очень смелым</i>, Massive Randomness 2 может использовать их для генерации приключений.</p><p>Хотите попробовать?</p>"
                                        },
                                        buttons:{
                                            yes:{
                                                IT:"Si",
                                                EN:"Yes",
                                                RU:"Да"
                                            },
                                            no:{
                                                IT:"No",
                                                EN:"No",
                                                RU:"Нет"
                                            }
                                        }
                                    },{
                                        isButton:true,
                                        isInstallerButton:true,
                                        label:{
                                            IT:"Installa",
                                            EN:"Install",
                                            RU:"Установить"
                                        },
                                        description:{
                                            IT:"Permette di usare Massive Randomness 2 offline.",
                                            EN:"Allows you to use Massive Randomness 2 offline.",
                                            RU:"Позволяет использовать Massive Randomness 2 офлайн."
                                        }
                                    },{
                                        isHidden:true,
                                        isCounterTrigger:true,
                                        tags:[ "quests-mr-ending" ]
                                    }
                                ]
                            }
                        ],
                        supportedLanguages:{
                            EN:"English",
                            IT:"Italiano",
                            FR:"Fran&#xE7;ais",
                            RU:"Русский"
                        },
                        labels:{                            
                            toolName:{
                                IT:"Massive Randomness 2",
                                EN:"Massive Randomness 2",
                                RU:"Massive Randomness 2"
                            },
                            toolDescription:{
                                IT:"Un generatore casuale di avventure per Massive Darkness 2",
                                EN:"A Massive Darkness 2 random quest generator",
                                RU:"Случайный генератор заданий для Massive Darkness 2"
                            },
                            footer:{
                                IT:"Meglio su Firefox/Chrome - {toolName} - {toolVersion} - Sorgenti su <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                EN:"Best on Firefox/Chrome - {toolName} - {toolVersion} - Sources at <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                RU:"Лучше всего в Firefox/Chrome - {toolName} - {toolVersion} - Исходники: <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>"
                            },
                            notice:{
                                EN:"Massive Darkness, Zombicide, and all related properties are owned by CMON Global Limited",
                                IT:"Massive Darkness, Zombicide e tutte le relative propriet&agrave; sono marchi registrati CMON Global Limited",
                                RU:"Massive Darkness, Zombicide и все связанные с ними права принадлежат CMON Global Limited"
                            },
                            wait:{
                                IT:"Sto preparando l'avventura...",
                                EN:"Please wait...",
                                RU:"Подготавливаю задание..."
                            },
                            tooltipNewQuest:{
                                IT:"Genera una nuova avventura",
                                EN:"Generate a new quest",
                                RU:"Сгенерировать новое задание"
                            },
                            tooltipSettings:{
                                IT:"Impostazioni",
                                EN:"Settings",
                                RU:"Настройки"
                            },
                            tooltipPrint:{
                                IT:"Salva in PDF / Stampa",
                                EN:"Save as PDF / Print",
                                RU:"Сохранить в PDF / Распечатать"
                            },
                            languageUnavailable:{
                                IT:"Questa avventura non &egrave; disponibile in italiano. Puoi escludere le avventure non tradotte dalle opzioni.",
                                EN:"This adventure is not available in English. You can exclude untranslated adventures from the options.",
                                FR:"Cette aventure n&#x27;est pas disponible en fran&#xE7;ais. Vous pouvez exclure les aventures non traduites des options.",
                                RU:"Это задание недоступно на русском языке. Вы можете исключить непереведённые задания в настройках."
                            },
                            questUnavailable:{
                                IT:"Spiacente. Questa avventura non &egrave; disponibile.",
                                EN:"Sorry. This adventure is not available.",
                                FR:"D&#xE9;sol&#xE9;. Cette aventure n&#x27;est pas disponible.",
                                RU:"Извините. Это задание недоступно."
                            }
                        }
                    }
                }
            ]
        }
    ]

});
