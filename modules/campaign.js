ModManager.modules.push(function(){

    return [
        {
            id:"campaign-default",
            needs:[ ],
            provides:[ "campaign-hidespoilers" ],
            label:{
                EN:"Hide spoilers on campaigns"
            ,
                RU:"Скрывать спойлеры в кампаниях"},
            content:[
                {
                    type:"campaignGeneratorFlags",
                    data:{
                        hideSpoilers:true
                    }
                }
            ]
        },
        {
                id:"campaign-default",
                needs:[ ],
                provides:[ "campaign-default", "generator-campaign" ],
                label:{
                    EN:"Default data for campaigns"
                ,
                    RU:"Данные кампаний по умолчанию"},
                content:[
                    {
                        type:"globalLabels",
                        data:{
                            campaignFooter:{
                                IT:"{campaign.name} &dash; Missioni",
                                EN:"{campaign.name} &dash; Missions",
                                RU:"{campaign.name} &dash; Миссии",
                            },
                            campaignIndex:{
                                IT:"Indice",
                                EN:"Index"
                            ,
                                RU:"Содержание"},
                            campaignPage:{
                                IT:"Parte {campaign.page}/{campaign.pages}",
                                EN:"Part {campaign.page}/{campaign.pages}"
                            ,
                                RU:"Часть {campaign.page}/{campaign.pages}"},
                            campaignPreparationTitle:{
                                EN:"Setup",
                                RU:"Подготовка",
                                IT:"Preparazione"
                            },
                            campaignTreasureBag:{
                                EN:"Treasure Bag",
                                RU:"Мешок сокровищ",
                                IT:"Borsa del Tesoro"
                            },
                            campaignIndexTitle:{
                                EN:"Index",
                                RU:"Содержание",
                                IT:"Indice"
                            },
                            campaignIntroductionTitle:{
                                EN:"Introduction",
                                RU:"Введение",
                                IT:"Introduzione"
                            },
                            campaignIndexFooter:{
                                EN:"{campaign.name} &dash; Rules",
                                RU:"{campaign.name} &dash; Правила",
                                IT:"{campaign.name} &dash; Regole"
                            },
                            campaignProgress:{
                                IT:"Progressione della Campagna",
                                EN:"Campaign Progress"
                            ,
                                RU:"Прогресс кампании"},
                            campaignNextMission:{
                                IT:"Prossima Missione:",
                                EN:"Next Mission:"
                            ,
                                RU:"Следующая миссия:"},
                            campaignVictoryCase:{
                                IT:"In caso di vittoria:",
                                EN:"In case of victory:"
                            ,
                                RU:"В случае победы:"},
                            campaignCongratulations:{
                                IT:"Congratulazioni!",
                                EN:"Congratulations!"
                            ,
                                RU:"Поздравляем!"},
                            campaignAchievements:{
                                IT:"Traguardi",
                                EN:"Achievements"
                            ,
                                RU:"Достижения"},
                            campaignChallenge:{
                                IT:"Sfida del Vecchio Rosso",
                                EN:"The Red Old One Challenge"
                            ,
                                RU:"Испытание Рыжего Старика"},
                            campaignChallengeExplanation:{
                                IT:"Eroi, siete disposti a dimostrare il vostro valore ed accettare la mia sfida?",
                                EN:"Heroes, are you willing to prove your worth and accept my challenge?"
                            ,
                                RU:"Герои, готовы ли вы доказать свою доблесть и принять мой вызов?"},
                            campaignChallengeReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>"
                            ,
                                RU:"<b>Награда (только в случае победы):</b>"},
                            campaignQuestPhase:{
                                IT:"Fase della Missione",
                                EN:"Quest phase"
                            ,
                                RU:"Фаза задания"},
                            sideQuest:{
                                IT:"Missione Secondaria",
                                EN:"Side Quest"
                            ,
                                RU:"Побочное задание"},
                            sideQuestCondition:{
                                IT:"<b>Condizione:</b>",
                                EN:"<b>Condition:</b>"
                            ,
                                RU:"<b>Условие:</b>"},
                            sideQuestReward:{
                                IT:"<b>Ricompensa (solo in caso di vittoria):</b>",
                                EN:"<b>Reward (only in case of victory):</b>"
                            ,
                                RU:"<b>Награда (только в случае победы):</b>"},
                        }
                    },{
                        type:"campaignLabels",
                        data:{
                            campaignBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 2 ranghi al di sopra del rango di Mostro Errante attuale o un Mostro Errante di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)",
                                    "Mostri Erranti casuali di 2 ranghi al di sopra del rango di Mostro Errante attuale o",
                                    "Mostri Erranti di Livello 10 se non disponibile (esempio: se doveste pescare un Livello 3-4, pesca un Livello 6-7)"
                                ],
                                EN:[
                                    "a Roaming Monster 2 ranks above the current Roaming Monster rank or a Level 10 Roaming Monster if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)",
                                    "random Roaming Monsters 2 ranks above the current Roaming Monster rank or",
                                    "Level 10 Roaming Monsters if not available (example: if you were to draw a Level 3-4, draw a Level 6-7)"
                                ],
                                RU:[
                                    "случайного блуждающего монстра на 2 ранга выше текущего ранга блуждающего монстра или блуждающего монстра 10 уровня, если такого нет (пример: если вам нужно вытянуть монстра 3-4 уровня, вытяните монстра 6-7 уровня)",
                                    "случайных блуждающих монстров на 2 ранга выше текущего ранга блуждающего монстра или",
                                    "блуждающих монстров 10 уровня, если таких нет (пример: если вам нужно вытянуть монстра 3-4 уровня, вытяните монстра 6-7 уровня)"
                                ]
                            },
                            campaignEasyBoss:{
                                IT:[
                                    "un Mostro Errante casuale di 1 rango al di sopra del Livello del Dungeon <b>di partenza</b> o un Mostro Errante di Livello 10 se non disponibile (esempio: se il Livello del Dungeon di partenza era 3-4, generate un Mostro Errante di Livello 5)"
                                ],
                                EN:[
                                    "a Roaming Monster 1 rank above the Dungeon <b>starting</b> Level or a Level 10 Roaming Monster if not available (example: if the Dungeon stating Level was 3-4, generate a Level 5 Roaming Monster)"
                                ],
                                RU:[
                                    "случайного блуждающего монстра на 1 ранг выше <b>начального</b> уровня подземелья или блуждающего монстра 10 уровня, если такого нет (пример: если начальный уровень подземелья был 3-4, создайте блуждающего монстра 5 уровня)"
                                ]
                            },
                            campaign2shotsQuestPhaseDescription:{
                                IT:"<ul>"+
                                    "<li>La Missione A si svolger&agrave; come una normale Avventura one-shot. Al termine della Missione A verr&agrave; spiegato come far progredire i personaggi prima di proseguire con la Missione B.</li>"+
                                    "<li><b>Le sfide del Vecchio Rosso</b>: La Missione A include una sfida del Vecchio Rosso. Gli eroi ottengono la ricompensa della sfida giocando la Missione corrente seguendo le regole della sfida e vincendo. Non ottengono le ricompense se la Missione termina con una sconfitta.</li>"+
                                "</ul>",
                                EN:"<ul>"+
                                    "<li>Mission A will play out like a normal One-shot quest. After completing Mission A, you will be given instructions on how to advance your characters before moving on to Mission B.</li>"+
                                    "<li><b>The Red Old One Challenges</b>: Mission A includes a Red Old One Challenge. Heroes claim the challenge reward when they play the current Quest following the challenge rules and win. They do not claim the rewards if the Quest ends in defeat.</li>"+
                                "</ul>"
                            ,
                                RU:"<ul><li>Миссия A разыгрывается как обычное одиночное задание. После завершения миссии A вы получите указания, как развить своих персонажей перед переходом к миссии B.</li><li><b>Испытания Рыжего Старика</b>: миссия A включает испытание Рыжего Старика. Герои получают награду за испытание, если проходят текущее задание по правилам испытания и побеждают. Если задание заканчивается поражением, награда не выдаётся.</li></ul>"},
                            miniCampaignTreasureBagDescription:{
                                IT:"<p>Invece del normale numero di segnalini Tesoro descritto nella Configurazione della Modalità Campagna, all'inizio di questa Campagna i giocatori mettono 10 segnalini Tesoro Comune e 3 segnalini Tesoro Raro nella Borsa del Tesoro.</p>",
                                EN:"<p>Instead of the regular number of Treasure tokens described in Campaign Mode Setup, at the start of this Campaign players place 10 Common Treasure tokens and 3 Rare Treasure tokens in the Treasure bag.</p>"
                            ,
                                RU:"<p>Вместо обычного количества жетонов сокровищ, указанного в подготовке режима кампании, в начале этой кампании игроки кладут в мешок сокровищ 10 обычных жетонов сокровищ и 3 редких жетона сокровищ.</p>"},
                            shot2TreasureBagDescription:{
                                IT:"<p>Prepara la Borsa del Tesoro come per una normale Avventura one-shot: aggiungi tutti i segnalini Tesoro Comune and 5 segnalini Tesoro Raro.</p>",
                                EN:"<p>Prepare the Treasure Bag as for a normal One-shot quest: add all Common Trasure tokens and 5 Rare Treasure tokens.</p>"
                            ,
                                RU:"<p>Подготовьте мешок сокровищ как для обычного одиночного задания: добавьте все обычные жетоны сокровищ и 5 редких жетонов сокровищ.</p>"},
                            campaignMode:{
                                IT:"Modalit&agrave; Campagna",
                                EN:"Campaign Mode"
                            ,
                                RU:"Режим кампании"},
                            miniCampaignMode:{
                                IT:"Modalit&agrave; Mini-campagna",
                                EN:"Mini-campaign Mode"
                            ,
                                RU:"Режим мини-кампании"},
                            shots2CampaignMode:{
                                IT:"Modalit&agrave; Campagna 2-shot",
                                EN:"2-shot Campaign Mode"
                            ,
                                RU:"Режим 2-shot кампании"},
                            miniCampaignObjectivesXp:{
                                EN:36
                            }
                        }
                    },{
                        type:"campaignCode",
                        data:[
                            {
                                code:{
                                    actionSameTime:(result)=>{
                                        return result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>1);
                                    },
                                    collectOptionalItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.75),
                                                labels = result.labels["label.collectOptionalItems"];
                                            for (let k in labels) {
                                                labels[k][2] = leastCollect;
                                                labels[k][3] = allCollect;
                                            }
                                            return true;
                                        } else return false;
                                    },
                                    collectOptionalItemsCorruption:(result)=>{
                                        if (result.map && result.map.usedTokens.corruption && (result.map.usedTokens.corruption>2)) {
                                            let
                                                allCollect = result.map.usedTokens.corruption,
                                                leastCollect = Math.floor(allCollect*0.75),
                                                labels = result.labels["label.collectOptionalItems"];
                                            for (let k in labels) {
                                                labels[k][2] = leastCollect;
                                                labels[k][3] = allCollect;
                                            }
                                            return true;
                                        } else return false;
                                    },
                                    collectLessItems:(result)=>{
                                        if (result.map && result.map.usedTokens.objective && (result.map.usedTokens.objective>2)) {
                                            let
                                                allCollect = result.map.usedTokens.objective,
                                                leastCollect = Math.floor(allCollect*0.5),
                                                labels = result.labels["label.collectLessItems"];
                                            for (let k in labels)
                                                labels[k][2] = leastCollect;
                                            return true;
                                        } else return false;
                                    }
                                }
                            }
                        ]
                    },{
                        type:"campaignSideQuests",
                        data:[
                            {
                                tags:[ "visitAllRooms" ],
                                name:[
                                    {
                                        IT:"Guarda ovunque!",
                                        EN:"Look everywhere!"
                                    ,
                                        RU:"Осмотрите всё!"},
                                ],
                                story:[
                                    {
                                        IT:"Forse, esplorando tutto il dungeon, troveremo qualcosa di utile!",
                                        EN:"Maybe, by exploring the entire dungeon, we will find something useful!"
                                    ,
                                        RU:"Может быть, исследовав всё подземелье, мы найдём что-нибудь полезное!"},
                                ],
                                condition:[
                                    {
                                        IT:"Rivelare <b>tutte</b> le Camere.",
                                        EN:"Reveal <b>all</b> the Rooms.",
                                        RU:"Откройте <b>все</b> комнаты.",
                                    }
                                ]
                            },{
                                tags:[ "collectMoreItems" ],
                                name:[
                                    {
                                        IT:"Fare scorta!",
                                        EN:"Stock up!"
                                    ,
                                        RU:"Запасайтесь!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a raccogliere pi&ugrave; {label.collectMoreItems@1} possono farne qualcosa di utile.",
                                        EN:"If the Heroes manage to collect more {label.collectMoreItems@1} they can do something useful with them."
                                    ,
                                        RU:"Если героям удастся собрать больше {label.collectMoreItems@1}, они смогут извлечь из этого пользу."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione raccogliendo almeno {label.collectMoreItems@0} {label.collectMoreItems@2}.",
                                        EN:"Complete the Mission by collecting at least {label.collectMoreItems@0} {label.collectMoreItems@2}."
                                    ,
                                        RU:"Завершите миссию, собрав как минимум {label.collectMoreItems@0} {label.collectMoreItems@2}."},
                                ]
                            },{
                                tags:[ "collectAllItems" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!"
                                    ,
                                        RU:"Ничего не оставляйте позади!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectAllItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectAllItems@0} they will be able to gain an advantage."
                                    ,
                                        RU:"Если героям удастся {label.collectAllItems@0}, они смогут получить преимущество."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectAllItems@1}.",
                                        EN:"Complete the Mission {label.collectAllItems@1}."
                                    ,
                                        RU:"Завершите миссию, {label.collectAllItems@1}."},
                                ]
                            },{
                                tags:[ "collectOptionalItems" ],
                                if:"collectOptionalItems",
                                mods:[ "extraObjectives" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!"
                                    ,
                                        RU:"Ничего не оставляйте позади!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectOptionalItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectOptionalItems@0} they will be able to gain an advantage."
                                    ,
                                        RU:"Если героям удастся {label.collectOptionalItems@0}, они смогут получить преимущество."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectOptionalItems@1}.",
                                        EN:"Complete the Mission {label.collectOptionalItems@1}."
                                    ,
                                        RU:"Завершите миссию, {label.collectOptionalItems@1}."},
                                ]
                            },{
                                tags:[ "collectOptionalItemsCorruption" ],
                                if:"collectOptionalItemsCorruption",
                                mods:[ "extraObjectives" ],
                                name:[
                                    {
                                        IT:"Non lasciare nulla indietro!",
                                        EN:"Don't leave anything behind!"
                                    ,
                                        RU:"Ничего не оставляйте позади!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectOptionalItems@0} riusciranno ad avvantaggiarsi.",
                                        EN:"If the Heroes manage {label.collectOptionalItems@0} they will be able to gain an advantage."
                                    ,
                                        RU:"Если героям удастся {label.collectOptionalItems@0}, они смогут получить преимущество."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectOptionalItems@1}.",
                                        EN:"Complete the Mission {label.collectOptionalItems@1}."
                                    ,
                                        RU:"Завершите миссию, {label.collectOptionalItems@1}."},
                                ]
                            },{
                                tags:[ "collectLessItems" ],
                                if:"collectLessItems",
                                name:[
                                    {
                                        IT:"Non sprecare nulla!",
                                        EN:"Don't waste anything!"
                                    ,
                                        RU:"Ничего не тратьте зря!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono {label.collectLessItems@0} avranno pi&ugrave; energie per trovare qualcosa di utile.",
                                        EN:"If the Heroes manage {label.collectLessItems@0} they will have more energy to find something useful."
                                    ,
                                        RU:"Если героям удастся {label.collectLessItems@0}, у них останется больше сил, чтобы найти что-нибудь полезное."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectLessItems@1}.",
                                        EN:"Complete the Mission {label.collectLessItems@1}."
                                    ,
                                        RU:"Завершите миссию, {label.collectLessItems@1}."},
                                ]
                            },{
                                tags:[ "actionSameTime" ],
                                if:"actionSameTime",
                                name:[
                                    {
                                        IT:"Sincronia!",
                                        EN:"Synchrony!"
                                    ,
                                        RU:"Синхронность!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a collaborare e sincronizzarsi possono risparmiare tempo e guadagnare qualcosa di utile.",
                                        EN:"If Heroes manage to collaborate and synchronize they can save time and earn something useful."
                                    ,
                                        RU:"Если героям удастся действовать сообща и синхронно, они смогут сэкономить время и получить что-нибудь полезное."},
                                ],
                                condition:[
                                    {
                                        IT:"{label.actionSameTime@0} nello stesso round.",
                                        EN:"{label.actionSameTime@0} in the same round."
                                    ,
                                        RU:"{label.actionSameTime@0} в одном и том же раунде."},
                                ]
                            },{
                                tags:[ "eliminateEnemy" ],
                                name:[
                                    {
                                        IT:"Che la caccia abbia inizio!",
                                        EN:"Let the hunt begin!"
                                    ,
                                        RU:"Да начнётся охота!"},
                                ],
                                story:[
                                    {
                                        IT:"Uno degli Eroi grida: &laquo;Lasciateli a me!&raquo;, gettandosi a capofitto nella mischia...",
                                        EN:"One of the Heroes shouts: &laquo;Leave them to me!&raquo;, throwing himself into the fray..."
                                    ,
                                        RU:"Один из героев кричит: &laquo;Оставьте их мне!&raquo; и бросается в гущу боя..."},
                                ],
                                condition:[
                                    {
                                        IT:"Uno stesso Eroe deve uccidere {label.eliminateEnemy@0}.",
                                        EN:"The same Hero must kill {label.eliminateEnemy@0}."
                                    ,
                                        RU:"Один и тот же герой должен убить {label.eliminateEnemy@0}."},
                                ]
                            },{
                                tags:[ "noLifebringer"],
                                name:[
                                    {
                                        IT:"Eroi immortali!",
                                        EN:"Immortal heroes!"
                                    ,
                                        RU:"Бессмертные герои!"},
                                ],
                                story:[
                                    {
                                        IT:"&Egrave; una questione di onore: nessun Eroe deve cadere!",
                                        EN:"It's a question of honor: no Hero must fall!"
                                    ,
                                        RU:"Это дело чести: ни один герой не должен пасть!"},
                                ],
                                condition:[
                                    {
                                        IT:"Non usare nessun segnalino Latore di Vita durante questa Missione.",
                                        EN:"Do not use any Lifebringer tokens during this Mission."
                                    ,
                                        RU:"Не используйте в этой миссии жетоны Lifebringer."},
                                ]
                            },{
                                tags:[ "keepItem"],
                                name:[
                                    {
                                        IT:"Non si tocca!",
                                        EN:"Don't touch it!"
                                    ,
                                        RU:"Не трогайте это!"},
                                ],
                                story:[
                                    {
                                        IT:"Se l'Eroe che possiede {label.keepItem@0}, pu&ograve; lasciare ai compagni pi&ugrave; tempo per cercare meglio nei dintorni.",
                                        EN:"If the Hero with {label.keepItem@0}, it can give its companions more time to search the surroundings."
                                    ,
                                        RU:"Если герой с {label.keepItem@0} сохранит его при себе, его товарищи смогут тщательнее обыскать окрестности."},
                                ],
                                condition:[
                                    {
                                        IT:"Non scambiare {label.keepItem@1} durante questa Missione.",
                                        EN:"Do not trade {label.keepItem@1} during this Mission."
                                    ,
                                        RU:"Не обменивайте {label.keepItem@1} в течение этой миссии."},
                                ]
                            },{
                                tags:[ "roundLimit" ],
                                name:[
                                    {
                                        IT:"Il tempo stringe!",
                                        EN:"Time is running out!"
                                    ,
                                        RU:"Время на исходе!"},
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono sbrigarsi! Se riescono a risparmiare tempo possono usarlo per cercare qualcosa di utile.",
                                        EN:"The Heroes must hurry! If they can save time they can look for something useful."
                                    ,
                                        RU:"Героям нужно поторопиться! Если им удастся сэкономить время, они смогут поискать что-нибудь полезное."},
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione prima della fine del round {label.roundLimit@0}.",
                                        EN:"Finish the Mission before the end of the round {label.roundLimit@0}."
                                    ,
                                        RU:"Завершите миссию до конца раунда {label.roundLimit@0}."},
                                ]
                            },{
                                tags:[ "riskyInvestigation" ],
                                name:[
                                    {
                                        IT:"Sta tramando qualcosa!",
                                        EN:"It's up to something!"
                                    ,
                                        RU:"Что-то замышляет!"},
                                ],
                                story:[
                                    {
                                        IT:"Gli Eroi devono scoprire il colpevole prima che riesca ad avvisare i suoi complici.",
                                        EN:"The Heroes must discover the culprit before it can warn its accomplices."
                                    ,
                                        RU:"Герои должны раскрыть виновника, прежде чем он успеет предупредить сообщников."},
                                ],
                                condition:[
                                    {
                                        IT:"Terminare la Missione interrogando {label.riskyInvestigation@0} personaggi o meno.",
                                        EN:"Finish the Mission by interrogating {label.riskyInvestigation@0} characters or less."
                                    ,
                                        RU:"Завершите миссию, допросив не более {label.riskyInvestigation@0} персонажей."},
                                ]
                            },{
                                tags:[ "noDamage" ],
                                name:[
                                    {
                                        IT:"Intoccabile!",
                                        EN:"Untouchable!"
                                    ,
                                        RU:"Неприкасаемый!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a mantenere {label.noDamage@0} in salvo, forse possono ottenere qualcosa in cambio.",
                                        EN:"If the Heroes can keep {label.noDamage@0} safe, they may can get something in return."
                                    ,
                                        RU:"Если героям удастся уберечь {label.noDamage@0}, они, возможно, получат что-нибудь взамен."},
                                ],
                                condition:[
                                    {
                                        IT:"{label.noDamage:capital@1} non subisce nessuna Ferita durante la Missione.",
                                        EN:"{label.noDamage:capital@1} does not suffer any Wounds during the Mission."
                                    ,
                                        RU:"{label.noDamage:capital@1} не получает ни одной раны во время этой миссии."},
                                ]
                            },{
                                tags:[ "noDoor" ],
                                name:[
                                    {
                                        IT:"Una questione d'orgoglio!",
                                        EN:"A matter of pride!"
                                    ,
                                        RU:"Дело чести!"},
                                ],
                                story:[
                                    {
                                        IT:"&laquo;Ci vediamo al punto stabilito!&raquo; gli Eroi si salutano poi con un cenno del capo.",
                                        EN:"&laquo;See you at the agreed point!&raquo; the Heroes then greet each other with a nod."
                                    ,
                                        RU:"&laquo;Увидимся в условленном месте!&raquo; затем герои прощаются кивком."},
                                ],
                                condition:[
                                    {
                                        IT:"Ogni Eroe usa {label.noDoor@0}.",
                                        EN:"All Heroes only uses {label.noDoor@0}."
                                    ,
                                        RU:"Все герои используют только {label.noDoor@0}."},
                                ]
                            },{
                                tags:[ "spareItem" ],
                                name:[
                                    {
                                        IT:"Nessuno spreco!",
                                        EN:"No waste!"
                                    ,
                                        RU:"Без потерь!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi {label.spareItem@0} possono farci qualcosa di utile.",
                                        EN:"If the Heroes {label.spareItem@0} they can do something useful with it."
                                    ,
                                        RU:"Если герои {label.spareItem@0}, они смогут извлечь из этого пользу."},
                                ],
                                condition:[
                                    {
                                        IT:"Fare in modo che {label.spareItem@1}.",
                                        EN:"Make sure that {label.spareItem@1}."
                                    ,
                                        RU:"Сделайте так, чтобы {label.spareItem@1}."},
                                ]
                            },{
                                tags:[ "noInfection" ],
                                name:[
                                    {
                                        IT:"Nessun contagio!",
                                        EN:"No contagion!"
                                    ,
                                        RU:"Никакого заражения!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noInfection@0} forse possono risparmiare tempo e cercare qualcosa di utile nei dintorni.",
                                        EN:"If the Heroes can {label.noInfection@0} maybe they can save some time and search for something useful nearby."
                                    ,
                                        RU:"Если героям удастся {label.noInfection@0}, возможно, они сэкономят время и смогут поискать рядом что-нибудь полезное."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noInfection@1}.",
                                        EN:"Complete the Mission {label.noInfection@1}."
                                    ,
                                        RU:"Завершите миссию, {label.noInfection@1}."},
                                ]
                            },{
                                tags:[ "noTraps" ],
                                name:[
                                    {
                                        IT:"Mettere in sicurezza!",
                                        EN:"Make it safe!"
                                    ,
                                        RU:"Обезопасьте всё!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.noTraps@0}, forse possono chiedere una ricompensa.",
                                        EN:"If the Heroes manage to {label.noTraps@0}, perhaps they can claim a reward."
                                    ,
                                        RU:"Если героям удастся {label.noTraps@0}, возможно, они смогут потребовать награду."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.noTraps@1}.",
                                        EN:"Complete the Mission {label.noTraps@1}."
                                    ,
                                        RU:"Завершите миссию, {label.noTraps@1}."},
                                ]
                            },{
                                tags:[ "collectTime" ],
                                name:[
                                    {
                                        IT:"Tempo prezioso!",
                                        EN:"Precious time!"
                                    ,
                                        RU:"Драгоценное время!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.collectTime@0}, forse possono sfruttarlo per cercare in giro.",
                                        EN:"If the Heroes manage to {label.collectTime@0}, maybe they can use it to search around."
                                    ,
                                        RU:"Если героям удастся {label.collectTime@0}, возможно, они смогут использовать это время, чтобы осмотреться."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.collectTime@1}.",
                                        EN:"Complete the Mission {label.collectTime@1}."
                                    ,
                                        RU:"Завершите миссию, {label.collectTime@1}."},
                                ]
                            },{
                                tags:[ "teamwork" ],
                                name:[
                                    {
                                        IT:"Lavoro di squadra!",
                                        EN:"Teamwork!"
                                    ,
                                        RU:"Командная работа!"},
                                ],
                                story:[
                                    {
                                        IT:"Se gli Eroi riescono a {label.teamwork@0}, dovrebbero avere pi&ugrave; tempo per guardarsi in giro...",
                                        EN:"If the Heroes manage to {label.teamwork@0}, they should have more time to look around..."
                                    ,
                                        RU:"Если героям удастся {label.teamwork@0}, у них должно остаться больше времени, чтобы осмотреться..."},
                                ],
                                condition:[
                                    {
                                        IT:"Completare la Missione {label.teamwork@1}.",
                                        EN:"Complete the Mission {label.teamwork@1}."
                                    ,
                                        RU:"Завершите миссию, {label.teamwork@1}."},
                                ]
                            }
                        ]
                    },{
                        type:"campaignRewards",
                        data:[
                            {
                                tags:[ "loot", "item", "itemQuality1" ],
                                description:{
                                    IT:"Pesca 1 carta dal  mazzo degli Oggetti dell'Orda corrispondente all'attuale Livello del Dungeon.",
                                    EN:"Draw 1 card from the Horde Item deck corresponding to the current Dungeon Level."
                                ,
                                    RU:"Возьмите 1 карту из колоды предметов орды, соответствующей текущему уровню подземелья."},
                            },{
                                tags:[ "loot", "item", "itemQuality2" ],
                                description:{
                                    IT:"Pesca 1 segnalino Tesoro dal sacchetto dei Tesori e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 1 Treasure token from the Treasure bag and draw 1 Treasure card from the corresponding deck."
                                ,
                                    RU:"Возьмите 1 жетон сокровища из мешка сокровищ и 1 карту сокровища из соответствующей колоды."},
                            },{
                                tags:[ "loot", "item", "itemQuality3" ],
                                description:{
                                    IT:"Pesca 2 segnalini Tesoro dal sacchetto dei Tesori, scegline uno e pesca 1 carta oggetto Tesoro dal mazzo corrispondente.",
                                    EN:"Draw 2 Treasure tokens from the Treasure bag, choose one, and draw 1 Treasure card from the corresponding deck."
                                ,
                                    RU:"Возьмите 2 жетона сокровищ из мешка сокровищ, выберите один и возьмите 1 карту сокровища из соответствующей колоды."},
                            },{
                                tags:[ "loot", "companion", "companionQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 17 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 17."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 17."},
                            },{
                                tags:[ "loot", "companion", "companionQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 2 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 2."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 2."},
                            },{
                                tags:[ "loot", "companion", "companionQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 24 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 24."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 24."},
                            },
                            {
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 11 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 11."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 11."},
                            },{
                                tags:[ "loot", "relic", "relicQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 26 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 26."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 26."},
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 21 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 21."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 21."},
                            },{
                                tags:[ "loot", "relic", "relicQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 8 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 8."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 8."},
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 25 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 25."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 25."},
                            },{
                                tags:[ "loot", "relic", "relicQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 14 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 14."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 14."},
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 16 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 16."
                                ,
                                    RU:"Выберите 1 героя и дайте ему карту кампании Heavenfall 16."},
                            },{
                                tags:[ "loot", "skill", "skillQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 19 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 19."
                                ,
                                    RU:"Выберите 1 героя и дайте ему карту кампании Heavenfall 19."},
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 9 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 9."
                                ,
                                    RU:"Выберите 1 героя и дайте ему карту кампании Heavenfall 9."},
                            },{
                                tags:[ "loot", "skill", "skillQuality2" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 13 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 13."
                                ,
                                    RU:"Выберите 1 героя и дайте ему карту кампании Heavenfall 13."},
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 18 di Heavenfall.",
                                    EN:"Select 1 Hero and assign the Heavenfall Campaign card 18."
                                ,
                                    RU:"Выберите 1 героя и дайте ему карту кампании Heavenfall 18."},
                            },{
                                tags:[ "loot", "skill", "skillQuality3" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 23 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 23."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 23."},
                            },{
                                tags:[ "loot", "placeImprovement", "placeImprovementA" ],
                                description:{
                                    IT:"Pesca la carta Campagna 22 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 22."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 22."},
                            },{
                                tags:[ "loot", "item", "glory" ],
                                description:{
                                    IT:"Il tuo coraggio verr&agrave; ricordato per sempre!",
                                    EN:"Your courage will be remembered forever!"
                                ,
                                    RU:"Вашу храбрость будут помнить вечно!"},
                            }
                            /*,{
                                // TODO Summoner ability (unsupported)
                                tags:[ "loot", "companionPower", "companionPowerQuality1" ],
                                maxAmount:1,
                                description:{
                                    IT:"Pesca la carta Campagna 10 di Heavenfall.",
                                    EN:"Draw the Heavenfall Campaign card 10."
                                ,
                                    RU:"Возьмите карту кампании Heavenfall 10."},
                            }*/
                        ]
                    }
                ]
        },
        {
            id:"campaign",
            needs:[ ],
            provides:[ "generator-campaign" ],
            label:{
                EN:"Generates a campaign"
            ,
                RU:"Генерирует кампанию"},
            content:[
                {
                    type:"campaignProtectedNeeds",
                    data:[
                        "bridge-default-twoexits",
                        "bridge-default-fourexits",
                        "quests-mr-ending"
                    ]
                },
                {
                    type:"campaignFlags",
                    data:[
                        {
                            id:"place",
                            values:{
                                hellscape:{
                                    onlyNeeds:[ "md2-hellscape" ]
                                }
                            }
                        },
                        {
                            id:"mapSize",
                            default:"normal",
                            values:{
                                small:{
                                    needs:[ "maps-size-small" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-large" ]
                                },
                                normal:{
                                    needs:[ "maps-size-normal" ],
                                    notNeeds:[ "maps-size-small", "maps-size-large" ]
                                },
                                large:{
                                    needs:[ "maps-size-large" ],
                                    notNeeds:[ "maps-size-normal", "maps-size-small" ]
                                }
                            }
                        },
                        {
                            id:"uniform",
                            default:"yes",
                            values:{
                                yes:{
                                    notNeeds:[ "maps-default-notuniform", "maps-default-split" ],
                                    needs:[ "maps-default-uniform" ],
                                },
                                no:{
                                    notNeeds:[ "maps-default-uniform", "maps-default-split" ],
                                    needs:[ "maps-default-notuniform" ]
                                },
                                split:{
                                    notNeeds:[ "maps-default-notuniform", "maps-default-uniform" ],
                                    needs:[ "maps-default-split" ]
                                }
                            }
                        },
                        {
                            id:"challenges",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "challenges-default" ]
                                },
                                no:{
                                    notNeeds:[ "challenges-default" ]
                                }
                            }
                        },
                        {
                            id:"dungeonCrawling",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "gamemode-dungeoncrawling" ]
                                },
                                no:{
                                    notNeeds:[ "gamemode-dungeoncrawling" ]
                                }
                            }
                        },
                        {
                            id:"bossFight",
                            default:"no",
                            values:{
                                yes:{
                                    needs:[ "boss" ]
                                },
                                no:{
                                    notNeeds:[ "boss" ]
                                }
                            }
                        },
                        {
                            id:"defaults",
                            values:{
                                yes:{
                                    needs:[  "md2-hellscape", "quests", "maps-default", "campaign-default" ],
                                    notExclude:[ "generator-campaign", "campaign-full", "campaign-mini", "campaign-2shots", "campaign-baseonly", "campaign-upgradepack-cyclopsduo", "campaign-upgradepack-hellephant", "campaign-fourhorsemen", "campaign-darkbringer" ]
                                }
                            }
                        }
                    ]
                },{
                    type:"campaignActModels",
                    data:[
                        {
                            label:{
                                EN:"From uniform to split and then interdimensional."
                            ,
                                RU:"Сначала однородные, затем разделённые, потом межпространственные."},
                            words:[
                                [
                                    "dimension",
                                    "side",
                                    "plan"
                                ],[
                                    "shatter",
                                    "breaker",
                                    "scar"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"split" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"no" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All uniform."
                            ,
                                RU:"Все однородные."},
                            words:[
                                [
                                    "world",
                                    "land",
                                    "earth"
                                ],[
                                    "still",
                                    "hold",
                                    "stand"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        {
                                            place:"hellscape",
                                            uniform:"yes"
                                        }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { uniform:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignCrawlingModels",
                    data:[
                        {
                            label:{
                                EN:"Hidden on last quests."
                            ,
                                RU:"Скрытые в последних заданиях."},
                            words:[
                                [
                                    "dungeon"
                                ],[
                                    "crawl"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All hidden."
                            ,
                                RU:"Все скрытые."},
                            words:[
                                [
                                    "unknown"
                                ],[
                                    "blind"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { dungeonCrawling:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"All visible."
                            ,
                                RU:"Все видимые."},
                            words:[
                                [
                                    "sight"
                                ],[
                                    "light"
                                ]
                            ],
                            models:[]
                        }
                    ]
                }
            ]
        },{
            id:"campaign-standard",
            needs:[ ],
            provides:[ "generator-campaign-standard" ],
            label:{
                EN:"Modifiers for standard campaigns"
            ,
                RU:"Модификаторы стандартных кампаний"},
            content:[
                {
                    type:"globalLabels",
                    data:{
                        campaignPreparation:{
                            EN:"Players must follow the preparation and Campaign rules described in <i>Massive Darkness 2: Heavenfall</i>. Each Mission lists any specific changes, special rules, and Campaign progression instructions.",
                            RU:"Игроки должны следовать подготовке и правилам кампании, описанным в <i>Massive Darkness 2: Heavenfall</i>. В каждой миссии перечислены все особые изменения, специальные правила и указания по развитию кампании.",
                            IT:"I giocatori devono seguire la preparazione e le regole della Campagna descritte in <i>Massive Darkness 2: Heavenfall</i>. Ogni Missione elenca eventuali cambiamenti specifici, regole speciali e istruzioni di progressione della Campagna."
                        }
                    }
                },
                {
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Variable map size."
                            ,
                                RU:"Переменный размер карты."},
                            words:[
                                [
                                    "quest",
                                    "cruise",
                                    "hunt"
                                ],[
                                    "venture",
                                    "run",
                                    "seek"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Normal-sized maps."
                            ,
                                RU:"Карты обычного размера."},
                            words:[
                                [
                                    "plain",
                                    "old",
                                    "flat"
                                ],[
                                    "cross",
                                    "even",
                                    "cast"
                                ]
                            ],
                            
                            models:[]
                        },{
                            label:{
                                EN:"Larger mid-maps."
                            ,
                                RU:"Увеличенные средние карты."},
                            words:[
                                [
                                    "chrono",
                                    "time",
                                    "point"
                                ],[
                                    "sand",
                                    "pass",
                                    "grow"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Start small, ends large."
                            ,
                                RU:"Начинается с малых, заканчивается большими."},
                            words:[
                                [
                                    "ascent",
                                    "raise",
                                    "climax"
                                ],[
                                    "lift",
                                    "climb",
                                    "rise"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:1 },
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { mapSize:"small" }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Gain relic/skill after bosses. Gain a companion halfway."
                            ,
                                RU:"Получайте реликвию или навык после боссов. В середине кампании получите спутника."},
                            words:[
                                [
                                    "travel",
                                    "ride",
                                    "road"
                                ],[
                                    "flow",
                                    "slide",
                                    "drive"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2", "skillQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3", "skillQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "companion" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Challenge every mid-map."
                            ,
                                RU:"Испытание на каждой средней карте."},
                            words:[
                                [
                                    "challenge"
                                ],[
                                    "front"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A challenge on every boss."
                            ,
                                RU:"Испытание на каждом боссе."},
                            words:[
                                [
                                    "leader"
                                ],[
                                    "lead"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1", "skillQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "skillQuality2", "companionQuality1", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1 }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"A fixed challenge on every mid-map."
                            ,
                                RU:"Фиксированное испытание на каждой средней карте."},
                            words:[
                                [
                                    "hell"
                                ],[
                                    "burn"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { sideQuestRewardTags:[ [ "itemQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality1", "companionQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "skillQuality2", "companionQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeAsRule:true, challengeIntensity:1, questRewardTags:[ [ "relicQuality3", "skillQuality3", "companionQuality3" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:0, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "relicQuality1" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { questRewardTags:[ [ "placeImprovement" ], [ "relicQuality2" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-full" ],
            label:{
                EN:"Generates a full-length campaign"
            ,
                RU:"Генерирует полную кампанию"},
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"No boss fights."
                            ,
                                RU:"Без боёв с боссами."},
                            words:[
                                [
                                    "blank",
                                    "void",
                                    "hollow"
                                ],[
                                    "blanker",
                                    "voider",
                                    "null"
                                ]
                            ],
                            models:[]
                        },{
                            label:{
                                EN:"Boss fights in the middle of acts 2 and the beginning of 3."
                            ,
                                RU:"Бои с боссами в середине 2-го акта и в начале 3-го."},
                            words:[
                                [
                                    "spike",
                                    "lance",
                                    "spear"
                                ],[
                                    "sting",
                                    "hurt",
                                    "bite"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:0 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights in the middle of acts 2 and 3."
                            ,
                                RU:"Бои с боссами в середине 2-го и 3-го актов."},
                            words:[
                                [
                                    "hill",
                                    "center",
                                    "half"
                                ],[
                                    "strike",
                                    "split",
                                    "break"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:1 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of act 2 and in the middle of act 3."
                            ,
                                RU:"Бои с боссами в конце 2-го акта и в середине 3-го акта."},
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:2 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of all acts."
                            ,
                                RU:"Бои с боссами в конце каждого акта."},
                            words:[
                                [
                                    "battle",
                                    "apex",
                                    "war"
                                ],[
                                    "slay",
                                    "drop",
                                    "out"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:1, map:2 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { bossFight:"yes", bossFightRewardTags:[ [ "relicQuality2", "relicQuality3", "skillQuality2", "skillQuality3" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"full",
                            label:{
                                EN:"3-acts linear campaign"
                            ,
                                RU:"Линейная кампания из 3 актов"},
                            explanationKeys:[ "campaignExplanation" ],
                            summaryKeys:[ "campaignSummary" ],
                            campaignMode:{
                                EN:"{label.campaignMode}",
                                RU:"{label.campaignMode}",
                                IT:"{label.campaignMode}",
                            },
                            story:[
                                [
                                    {
                                        IT:"Un vecchio incappucciato dalla barba rossa &egrave; apparso in citt&agrave;, trascinandosi per il mercato con il suo lungo bastone nodoso. ",
                                        EN:"A hooded old man with a red beard appeared in the city, dragging himself through the market with his long, gnarled stick. "
                                    ,
                                        RU:"В городе появился старик в капюшоне с рыжей бородой, волоча по рынку свой длинный узловатый посох. "},
                                ],[
                                    {
                                        IT:"La notte successiva, un misterioso portale oscuro &egrave; stato trovato aperto poco fuori dalle mura. ",
                                        EN:"The next night, a mysterious dark portal was found open just outside the walls. "
                                    ,
                                        RU:"Следующей ночью загадочный тёмный портал обнаружили открытым сразу за городскими стенами. "},
                                ],[
                                    {
                                        IT:"Per gli Eroi &egrave; tempo di indagare di nuovo...",
                                        EN:"It's time for the Heroes to investigate again..."
                                    ,
                                        RU:"Пора героям снова начать расследование..."},
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>As soon as the Heroes approach the portal, a whirlwind of light sucks them inside. Time and Space shatter. Something in their hearts breaks.</p>",
                                        RU:"<p>Как только герои приближаются к порталу, вихрь света затягивает их внутрь. Время и пространство раскалываются. Что-то ломается в их сердцах.</p>",
                                        IT:"<p>Non appena gli Eroi si avvicinano al portale, un turbine di luce li risucchia al suo interno. Il Tempo e lo Spazio si frantumano. Qualcosa nel loro cuore si spezza.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>Then they open their eyes again. Everything around them is all too familiar... Yet different. Are they living a dream?</p>",
                                        RU:"<p>Затем они снова открывают глаза. Всё вокруг до боли знакомо... И всё же другое. Неужели это сон?</p>",
                                        IT:"<p>Poi riaprono gli occhi. Tutto intorno &egrave; fin troppo familiare... Eppure diverso. Stanno vivendo un sogno?</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>A hoarse old man's voice echoes in their heads. He seems to clear his throat, and then recite... <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",
                                        RU:"<p>Хриплый голос старика эхом звучит у них в голове. Кажется, он прочищает горло, а затем начинает читать... <i>(Перейдите на <span class='gotopage' page='1'></span>)</i></p>",
                                        IT:"<p>Una voce grave da anziano rimbomba nella loro testa. Sembra schiarirsi la voce, per poi recitare... <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>Durante la Fase Citt&agrave;, i giocatori controllano se hanno raggiunto gli obiettivi della Campagna, se ce ne sono. Ottengono la loro ricompensa la prima volta che ogni condizione viene soddisfatta. In questa Campagna sono i seguenti:</p>",
                                EN:"<p>During the Town Phase, players check if they have accomplished the Campaign achievements, if any. They gain their reward the first time each condition is met. In this Campaign they are the following:</p>"
                            ,
                                RU:"<p>Во время фазы города игроки проверяют, выполнили ли они достижения кампании, если таковые есть. Они получают награду при первом выполнении каждого условия. В этой кампании они следующие:</p>"},
                            achievements:[
                                {
                                    condition:{
                                        IT:"Completare 3 Missioni Secondarie",
                                        EN:"Complete 3 Side Quests"
                                    ,
                                        RU:"Выполните 3 побочных задания"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 1 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 1"
                                            ,
                                                RU:"Возьмите карту кампании Heavenfall 1"},
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Interagire con il Vicolo del Gioco d'Azzardo 4 volte",
                                        EN:"Interact with the Gambling Alley 4 times"
                                    ,
                                        RU:"Взаимодействуйте с Игорным переулком 4 раза"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 3 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 3"
                                            ,
                                                RU:"Возьмите карту кампании Heavenfall 3"},
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Durante la Fase della Citt&agrave;, scartare 5 carte Pozione dal nome diverso simultaneamente, senza ottenere nessun effetto",
                                        EN:"During the Town Phase, discard 5 Potion cards with different names at once, with no effect"
                                    ,
                                        RU:"Во время фазы города одновременно сбросьте 5 карт зелий с разными названиями, не получая никакого эффекта"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 4 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 4"
                                            ,
                                                RU:"Возьмите карту кампании Heavenfall 4"},
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Portatore di Oscurit&agrave; (4+ parti)",
                                        EN:"Obtain the Greater Power of the Darkbringer Set (4+ parts)"
                                    ,
                                        RU:"Получите Великую Силу набора Darkbringer (4+ частей)"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'Eroe con il potere Maggiore ottiene la carta Campagna 5 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 5"
                                            ,
                                                RU:"Герой с Великой Силой получает карту кампании Heavenfall 5"},
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Ottenere il Potere Maggiore del Set Fuoco Infernale (4+ parti)",
                                        EN:"Obtain the Greater Power of the Hellfire Set (4+ parts)"
                                    ,
                                        RU:"Получите Великую Силу набора Hellfire (4+ частей)"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"L'eroe con il potere Maggiore ottiene la carta Campagna 6 di Heavenfall",
                                                EN:"The Hero with the Greater power gains Heavenfall Campaign card 6"
                                            ,
                                                RU:"Герой с Великой Силой получает карту кампании Heavenfall 6"},
                                        }
                                    ]
                                },{
                                    condition:{
                                        IT:"Perdere la stessa Missione 2 volte (questo Traguardo pu&ograve; essere completato in qualsiasi momento, anche fuori dalla fase citt&agrave;)",
                                        EN:"Lose the same Quest 2 times (this Achievement may be accomplished at any moment, even out of the Town Phase)"
                                    ,
                                        RU:"Проиграйте одно и то же задание 2 раза (это достижение может быть выполнено в любой момент, даже вне фазы города)"},
                                    reward:[
                                        {
                                            description:{
                                                IT:"Pescare la carta Campagna 7 di Heavenfall",
                                                EN:"Draw Heavenfall Campaign card 7"
                                            ,
                                                RU:"Возьмите карту кампании Heavenfall 7"},
                                        }
                                    ]
                                }
                            ],
                            questPhase:{
                                IT:"{label.campaignQuestPhaseDescription}",
                                EN:"{label.campaignQuestPhaseDescription}"
                            ,
                                RU:"{label.campaignQuestPhaseDescription}"},
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover"
                                    ,
                                        RU:"Обложка"},
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0,
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione A",
                                        EN:"Act I &dash; Mission A"
                                    ,
                                        RU:"Акт I &dash; Миссия A"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Eccoli qua!&raquo; grida qualcuno da lontano. Una piccola pattuglia di guardie cittadine si avvicina agli Eroi.</p>",
                                                    EN:"<p>&laquo;Here they are!&raquo; someone shouts from afar. A small patrol of city guards approaches the Heroes.</p>"
                                                ,
                                                    RU:"<p>&laquo;Вот они!&raquo; кричит кто-то издалека. Небольшой патруль городских стражников приближается к героям.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Il portale oscuro si trova all'ingresso ovest! Seguiteci!&raquo; la voce delle guardie sparisce pian piano, coperta dal brusio del mercato. Come &egrave; possibile che gli Eroi si trovassero nuovamente in citt&agrave;?</p>",
                                                    EN:"<p>&laquo;The dark portal is at the western entrance! Follow us!&raquo; the voices of the guards slowly disappear, covered by the buzz of the market. How is it possible that the Heroes found themselves in the city again?</p>"
                                                ,
                                                    RU:"<p>&laquo;Тёмный портал у западных ворот! Следуйте за нами!&raquo; голоса стражников постепенно теряются в гуле рынка. Как герои снова оказались в городе?</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Aggiungere 3 segnalini Tesoro Raro al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Add 3 Rare Treasure tokens to the Treasure bag."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> добавьте в мешок сокровищ 3 редких жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il capo delle guardie si ferma a una ventina di passi dal vortice sospeso a mezz'aria, nei pressi dell'ingresso ovest della citt&agrave;. &laquo;Eccolo.&raquo; dice con un filo di voce.</p>",
                                                    EN:"<p>The guard leader stops about twenty steps from the vortex suspended in mid-air, near the western entrance to the city. &laquo;There it is.&raquo; he says in a thread of a voice.</p>"
                                                ,
                                                    RU:"<p>Командир стражи останавливается примерно в двадцати шагах от вихря, зависшего в воздухе у западных ворот города. &laquo;Вот он.&raquo; — едва слышно говорит он.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si avviano verso il portale quando il capo delle guardie aggiunge: &laquo;Se non tornate entro tre ore, mander&ograve; i miei uomini a cercarvi. Fate attenzione!&raquo;</p>",
                                                    EN:"<p>The Heroes head toward the portal when the chief guard adds, &laquo;If you don't return within three hours, I'll send my men after you. Be careful!&raquo;</p>"
                                                ,
                                                    RU:"<p>Герои направляются к порталу, когда начальник стражи добавляет: &laquo;Если вы не вернётесь в течение трёх часов, я отправлю за вами своих людей. Будьте осторожны!&raquo;</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Risucchiati uno a uno dal misterioso portale, gli Eroi viaggiano per qualche secondo, per riaprire poi gli occhi... in un nuovo ricordo?</p>",
                                                    EN:"<p>Sucked one by one into the mysterious portal, the Heroes travel for a few seconds, only to reopen their eyes... to a new memory?</p>"
                                                ,
                                                    RU:"<p>Затянутые в загадочный портал один за другим, герои несколько секунд несутся сквозь него, чтобы вновь открыть глаза... в новом воспоминании?</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='2'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione B",
                                        EN:"Act I &dash; Mission B"
                                    ,
                                        RU:"Акт I &dash; Миссия B"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Non basta ancora. Mi serve ancora pi&ugrave; entropia...&raquo; una familiare voce da anziano diventa sempre pi&ugrave; acuta, per diventare un fischio.</p>",
                                                    EN:"<p>&laquo;It's still not enough. I need even more entropy...&raquo; a familiar old man's voice becomes increasingly high-pitched, becoming a whistle.</p>"
                                                ,
                                                    RU:"<p>&laquo;Этого всё ещё недостаточно. Мне нужно ещё больше энтропии...&raquo; знакомый голос старика становится всё выше и выше, превращаясь в свист.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi riprendono i sensi. &laquo;Ah!&raquo; esclama il capo delle guardie. &laquo;Stavo per raggiungervi al mercato ma vedo che avete trovato il portale da soli!&raquo; aggiunge con un sorriso sollevato.</p>",
                                                    EN:"<p>The Heroes regain their senses. &laquo;Ah!&raquo; exclaims the guards leader. &laquo;I was about to meet you at the market, but I see you found the portal on your own!&raquo; he adds with a relieved smile.</p>"
                                                ,
                                                    RU:"<p>Герои приходят в себя. &laquo;А!&raquo; — восклицает командир стражи. &laquo;Я как раз собирался встретить вас на рынке, но вижу, вы сами нашли портал!&raquo; — добавляет он с облегчённой улыбкой.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi si guardano tra di loro smarriti mentre il portale si chiude dietro le loro spalle. Il tempo sta andando in frantumi. Non c'&egrave; un attimo da perdere.</p>",
                                                    EN:"<p>The Heroes look at each other in bewilderment as the portal closes behind them. Time is falling apart. There is not a moment to lose.</p>"
                                                ,
                                                    RU:"<p>Герои растерянно смотрят друг на друга, пока портал закрывается за их спинами. Время распадается на части. Нельзя терять ни мгновения.</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune e aggiungere 1 segnalino Tesoro Raro.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens and add 1 Rare Treasure token."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 обычных жетона сокровищ и добавьте 1 редкий жетон сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>La notte successiva l'intera citt&agrave; viene svegliata da un terribile ruggito.</p>",
                                                    EN:"<p>The next night, the entire city is awakened by a terrible roar.</p>"
                                                ,
                                                    RU:"<p>Следующей ночью весь город будит ужасный рёв.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Proviene dal portale, apertosi nuovamente presso l'ingresso ovest della citt&agrave;. Qualcosa di terribile sta attendendo gli Eroi. Non perdono tempo e, con un balzo, si gettano nuovamente nell'ignoto.</p>",
                                                    EN:"<p>It comes from the portal, which had opened again at the western entrance to the city. Something terrible is waiting for the Heroes. They waste no time and, with a leap, throw themselves again into the unknown.</p>"
                                                ,
                                                    RU:"<p>Он доносится из портала, вновь открывшегося у западных ворот города. Героев там ждёт нечто ужасное. Не теряя ни секунды, они снова прыгают в неизвестность.</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='3'></span>.",
                                                EN:"Go to <span class='gotopage' page='3'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='3'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto I &dash; Missione C",
                                        EN:"Act I &dash; Mission C"
                                    ,
                                        RU:"Акт I &dash; Миссия C"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Un forte fischio rimbomba nelle orecchie. Gli Eroi riaprono gli occhi in un letto della taverna cittadina, ancora immersa nella notte fonda.</p>",
                                                    EN:"<p>A loud whistle rings in their ears. The Heroes wake up in a bed in the town tavern, still deep in the night.</p>"
                                                ,
                                                    RU:"<p>В ушах звенит громкий свист. Герои просыпаются на кровати в городской таверне, всё ещё глубокой ночью.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Il gruppo si riunisce d'urgenza davanti all'ingresso ovest della citt&agrave;. Ad attenderli c'&egrave; un vecchio sorridente, dalla barba rossa. &laquo;Ecco i famosi Eroi! Posso invitarvi per una partita a dadi?&raquo;</p>",
                                                    EN:"<p>The group urgently gathers in front of the city's west entrance. A smiling old man with a red beard awaits them. &laquo;Here are the famous Heroes! May I invite you for a game of dice?&raquo;</p>"
                                                ,
                                                    RU:"<p>Группа спешно собирается у западных ворот города. Там их ждёт улыбающийся старик с рыжей бородой. &laquo;Вот и знаменитые герои! Не хотите сыграть в кости?&raquo;</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 13 PE</li><li>3-4 Eroi: 17 PE</li><li>5-6 Eroi: 21 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 13 XP</li><li>3-4 Heroes: 17 XP</li ><li>5-6 Heroes: 21 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 13 XP</li><li>3-4 героя: 17 XP</li ><li>5-6 героев: 21 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 3 обычных жетона сокровищ и добавьте 2 эпических жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Sei tu il responsabile, maledetto!&raquo; esclama uno degli Eroi. Il vecchio rotea i dadi tra le dita, con un sorriso mite sul viso.</p>",
                                                    EN:"<p>&laquo;You're the one responsible, damn you!&raquo; exclaims one of the Heroes. The old man rolls the dice between his fingers, with a gentle smile.</p>"
                                                ,
                                                    RU:"<p>&laquo;Так это ты во всём виноват, проклятье!&raquo; — восклицает один из героев. Старик перекатывает кости между пальцами с мягкой улыбкой на лице.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Suvvia. So bene che vi state divertendo!&raquo; sussurra tra s&eacute; e s&eacute; il vecchio. Il gruppo di Eroi gli &egrave; addosso in un lampo, ma un nuovo portale oscuro si apre d'un tratto, trascinandoli per l'ennesima volta in un tempo sconosciuto.</p>",
                                                    EN:"<p>&laquo;Come on. I know you're having fun!&raquo; the old man whispers to himself. The group of Heroes is upon him in a flash, but a new dark portal suddenly opens, dragging them once again into an unknown time.</p>"
                                                ,
                                                    RU:"<p>&laquo;Ну же. Я же вижу, что вам весело!&raquo; — шепчет старик сам себе. Группа героев мгновенно бросается на него, но внезапно открывается новый тёмный портал и вновь утаскивает их в неизвестное время.</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='4'></span>.",
                                                EN:"Go to <span class='gotopage' page='4'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='4'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione A",
                                        EN:"Act II &dash; Mission A"
                                    ,
                                        RU:"Акт II &dash; Миссия A"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Questa volta non c'&egrave; alcun fischio. Solo un lento applauso. &laquo;Ottimo lavoro, Eroi!&raquo; il vecchio dalla barba rossa spunta da un cunicolo, con lo sguardo pieno di orgoglio.</p>",
                                                    EN:"<p>This time, there is no whistle. Just a slow round of applause. &laquo;Good job, Heroes!&raquo; the old man with a red beard emerges from a tunnel, his gaze full of pride.</p>"
                                                ,
                                                    RU:"<p>На этот раз свиста нет. Только медленные аплодисменты. &laquo;Отличная работа, герои!&raquo; — из тоннеля появляется старик с рыжей бородой, его взгляд полон гордости.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Cosa ci sta accadendo? Dove siamo?&raquo; chiede uno degli Eroi piegato sulla sua arma, senza fiato e confuso.</p>",
                                                    EN:"<p>&laquo;What is happening to us? Where are we?&raquo; asks one of the Heroes, bent over his weapon, breathless and confused.</p>"
                                                ,
                                                    RU:"<p>&laquo;Что с нами происходит? Где мы?&raquo; — спрашивает один из героев, опираясь на оружие, без дыхания и в смятении.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh! Oh!&raquo; esclama il vecchio, sorridendo ed estraendo una fiala rossa dalla larga manica della sua tunica. &laquo;Bevi questa pozione curativa. Vi racconter&ograve; tutto strada facendo.&raquo;. Quindi, con passo lento, il vecchio rosso si allontana.</p>",
                                                    EN:"<p>&laquo;Oh! Oh!&raquo; exclaims the old man, smiling and taking a red vial from the wide sleeve of his tunic. &laquo;Drink this healing potion. I will tell you all about it on the way.&raquo;. Then, with a slow pace, the old red man walks away.</p>"
                                                ,
                                                    RU:"<p>&laquo;О! О!&raquo; — восклицает старик, улыбаясь и доставая красный флакон из широкого рукава своей туники. &laquo;Выпейте это целебное зелье. По дороге я всё вам расскажу.&raquo; Затем медленным шагом рыжий старик уходит прочь.</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 8 PE</li><li>3-4 Eroi: 12 PE</li><li>5-6 Eroi: 16 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 8 XP</li><li>3-4 Heroes: 12 XP</li ><li>5-6 Heroes: 16 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 8 XP</li><li>3-4 героя: 12 XP</li ><li>5-6 героев: 16 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 3 segnalini Tesoro Comune e aggiungere 2 segnalino Tesoro Epico.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 3 Common Treasure tokens and add 2 Epic Treasure tokens."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 3 обычных жетона сокровищ и добавьте 2 эпических жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio dalla barba rossa sta mescolando un profumato stufato in un paiolo, allestito nel mezzo di una vallata verdeggiante. &laquo;Abbiamo bisogno del vostro aiuto, Eroi.&raquo; dice, sorseggiando il brodo.</p>",
                                                    EN:"<p>The old man with a red beard is stirring a fragrant stew in a pot set up in the middle of a green valley. &laquo;We need your help, Heroes.&raquo; he says, sipping the broth.</p>"
                                                ,
                                                    RU:"<p>Старик с рыжей бородой помешивает ароматное рагу в котле, установленном посреди зелёной долины. &laquo;Нам нужна ваша помощь, герои.&raquo; — говорит он, отпивая бульон.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Con gesti lenti e precisi, il vecchio riempie un piatto per ogni Eroe. &laquo;Mangiate.&raquo; esorta l'anziano. Quando il cucchiaio sfiora le labbra degli Eroi, un nuovo strano ricordo li rapisce...</p>",
                                                    EN:"<p>With slow, precise gestures, the old man fills a plate for each Hero. &laquo;Eat.&raquo; the old man urges. When the spoon touches the Heroes' lips, a new, strange memory captures them...</p>"
                                                ,
                                                    RU:"<p>Медленными точными движениями старик наполняет тарелку для каждого героя. &laquo;Ешьте.&raquo; — настаивает он. Когда ложка касается губ героев, их захватывает новое странное воспоминание...</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='5'></span>.",
                                                EN:"Go to <span class='gotopage' page='5'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='5'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione B",
                                        EN:"Act II &dash; Mission B"
                                    ,
                                        RU:"Акт II &dash; Миссия B"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi gonfiano il petto pieni di orgoglio. Non si sono mai sentiti cos&igrave; vivi! Hanno vinto e salvato il mondo ancora una volta!</p>",
                                                    EN:"<p>The Heroes puff out their chests with pride. They have never felt so alive! They have won and saved the world once again!</p>"
                                                ,
                                                    RU:"<p>Герои гордо расправляют плечи. Они ещё никогда не чувствовали себя такими живыми! Они победили и снова спасли мир!</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;&Egrave; di questo che abbiamo bisogno. Di Eroi senza paura.&raquo; il vecchio bisbiglia chino dietro un cumulo di rocce.</p>",
                                                    EN:"<p>&laquo;This is what we need. Heroes without fear.&raquo; the old man whispers, bent over a pile of rocks.</p>"
                                                ,
                                                    RU:"<p>&laquo;Вот что нам нужно. Герои без страха.&raquo; — шепчет старик, склонившись за кучей камней.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Uno degli Eroi sorprende il vecchio alle spalle, ignaro di essere osservato. Con un guizzo ne blocca i polsi e chiede &laquo;Chi sarebbero questi 'noi', maledetto vecchio?&raquo;</p>",
                                                    EN:"<p>One of the Heroes surprises the old man from behind, unaware that he is being watched. With a jump, it locks his wrists and asks &laquo;Who are these 'us', damn old man?&raquo;</p>"
                                                ,
                                                    RU:"<p>Один из героев подкрадывается к старику сзади, не подозревая, что за ним наблюдают. Рывком он заламывает ему запястья и спрашивает: &laquo;Кто эти 'мы', проклятый старик?&raquo;</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Comune, aggiungere 2 segnalino Tesoro Epico e 2 segnalini Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Common Treasure tokens, add 2 Epic Treasure tokens, and 2 Legendary Treasure tokens."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 обычных жетона сокровищ, добавьте 2 эпических жетона сокровищ и 2 легендарных жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>Chiuso nella cella cittadina da diversi giorni, il vecchio dalla barba rossa non ha ancora detto nemmeno una parola. Gli Eroi, nel frattempo, brancolano nel buio.</p>",
                                                    EN:"<p>Locked up in the city jail for several days, the old man with a red beard has not said a single word. The Heroes, meanwhile, are groping in the dark.</p>"
                                                ,
                                                    RU:"<p>Просидев несколько дней в городской тюрьме, старик с рыжей бородой так и не сказал ни слова. А герои тем временем блуждают во тьме.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>La citt&agrave; somiglia a quella che conoscono ma ponti, negozi e santuari sono in posizioni differenti da quelle che ricordano.</p>",
                                                    EN:"<p>The city resembles the one they know, but the bridges, shops, and shrines are in different locations than they remember.</p>"
                                                ,
                                                    RU:"<p>Город похож на тот, который они знают, но мосты, лавки и святилища расположены не там, где они их помнят.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Un giorno, un ragazzino dai piedi scalzi si avvicina agli Eroi, con un messaggio indirizzato a loro. Gli Eroi srotolano la pergamena e, con loro sorpresa, leggono...</p>",
                                                    EN:"<p>One day, a barefoot boy approaches the Heroes, with a message addressed to them. The Heroes unroll the scroll and, to their surprise, read...</p>"
                                                ,
                                                    RU:"<p>Однажды к героям подходит босоногий мальчик с посланием, адресованным им. Герои разворачивают свиток и с удивлением читают...</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='6'></span>.",
                                                EN:"Go to <span class='gotopage' page='6'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='6'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto II &dash; Missione C",
                                        EN:"Act II &dash; Mission C"
                                    ,
                                        RU:"Акт II &dash; Миссия C"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Questa pergamena... Parla di noi.&raquo; dice uno degli Eroi confuso. &laquo;Ma non ricordo nulla di questa avventura... E cosa sono queste tessere e segnalini?&raquo; continua.</p>",
                                                    EN:"<p>&laquo;This scroll... It speaks of us.&raquo; says one of the Heroes confused. &laquo;But I don't remember anything about this adventure... And what are these tiles and tokens?&raquo; it continues.</p>"
                                                ,
                                                    RU:"<p>&laquo;Этот свиток... В нём говорится о нас.&raquo; — растерянно произносит один из героев. &laquo;Но я ничего не помню об этом приключении... И что это за плитки и жетоны?&raquo; — продолжает он.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portiamola al vecchio.&raquo; risponde un compagno. &laquo;Dobbiamo farlo parlare.&raquo;. Il gruppo s'incammina verso la prigione cittadina.</p>",
                                                    EN:"<p>&laquo;Let's take it to the old man.&raquo; replies a companion. &laquo;We have to make him talk.&raquo;. The group heads towards the city prison.</p>"
                                                ,
                                                    RU:"<p>&laquo;Отнесём его старику.&raquo; — отвечает товарищ. &laquo;Мы должны заставить его заговорить.&raquo; Группа направляется к городской тюрьме.</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 редких жетона сокровищ и добавьте 1 легендарный жетон сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;&Egrave; accaduto, quindi.&raquo; esclama pensieroso il vecchio. &laquo;Si &egrave; messa in moto.&raquo;</p>",
                                                    EN:"<p>&laquo;It happened, then.&raquo; the old man exclaims thoughtfully. &laquo;It started moving.&raquo;</p>"
                                                ,
                                                    RU:"<p>&laquo;Значит, это случилось.&raquo; — задумчиво восклицает старик. &laquo;Оно пришло в движение.&raquo;</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Di chi parli, vecchio?&raquo; ribatte nervoso uno degli Eroi. &laquo;Siamo stufi dei tuoi misteri!&raquo;</p>",
                                                    EN:"<p>&laquo;Who are you talking about, old man?&raquo; one of the Heroes replies nervously. &laquo;We are tired of your mysteries!&raquo;</p>"
                                                ,
                                                    RU:"<p>&laquo;О ком ты говоришь, старик?&raquo; — нервно отвечает один из героев. &laquo;Нам надоели твои тайны!&raquo;</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Lo vedrete con i vostri occhi, Eroi!&raquo; un piccolo dardo punge il collo degli Eroi, che cadono in un sonno apparentemente senza fine...</p>",
                                                    EN:"<p>&laquo;You will see it with your own eyes, Heroes!&raquo; a small dart pricks the Heroes' necks, and they fall into a seemingly endless sleep...</p>"
                                                ,
                                                    RU:"<p>&laquo;Вы увидите это своими глазами, герои!&raquo; маленький дротик впивается в шеи героев, и они проваливаются в сон, который кажется бесконечным...</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='7'></span>.",
                                                EN:"Go to <span class='gotopage' page='7'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='7'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione A",
                                        EN:"Act III &dash; Mission A"
                                    ,
                                        RU:"Акт III &dash; Миссия A"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Nulla di tutto questo ha senso, amici.&raquo; sussurra pensieroso uno degli Eroe. &laquo;Sembra che...&raquo;</p>",
                                                    EN:"<p>&laquo;None of this makes sense, friends.&raquo; one of the Heroes whispers thoughtfully. &laquo;It seems that...&raquo;</p>"
                                                ,
                                                    RU:"<p>&laquo;Во всём этом нет никакого смысла, друзья.&raquo; — задумчиво шепчет один из героев. &laquo;Похоже, что...&raquo;</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;...che il caso stia muovendo il vostro destino.&raquo; con un colpo violento del bastone a terra, il vecchio rosso sveglia gli Eroi.</p>",
                                                    EN:"<p>&laquo;...that chance is moving your destiny.&raquo; with a violent blow of the stick on the ground, the old red man wakes the Heroes.</p>"
                                                ,
                                                    RU:"<p>&laquo;...случай движет вашей судьбой.&raquo; С силой ударив посохом о землю, рыжий старик будит героев.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ora che ha mostrato il suo volto, non c'&egrave; tempo da perdere.&raquo; i gesti nell'aria del vecchio formano un cubo di luce. &laquo;Dovete eliminarla.&raquo;</p>",
                                                    EN:"<p>&laquo;Now that she has shown her face, there is no time to waste.&raquo; the old man's gestures in the air form a cube of light. &laquo;You must eliminate her.&raquo;</p>"
                                                ,
                                                    RU:"<p>&laquo;Теперь, когда она показала своё лицо, времени терять нельзя.&raquo; жестами в воздухе старик формирует куб света. &laquo;Вы должны уничтожить её.&raquo;</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalino Tesoro Leggendario.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and add 1 Legendary Treasure token."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 редких жетона сокровищ и добавьте 1 легендарный жетон сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;La Casualit&agrave; Massiccia?&raquo; chiede uno degli Eroi, poggiato a una colonna.</p>",
                                                    EN:"<p>&laquo;The Massive Randomness?&raquo; asks one of the Heroes, leaning against a column.</p>"
                                                ,
                                                    RU:"<p>&laquo;Massive Randomness?&raquo; — спрашивает один из героев, прислонившись к колонне.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Esattamente. Una creatura di puro caos, che tiene imprigionato questo mondo da secoli.&raquo; risponde il vecchio, dando una boccata a una lunga pipa.</p>",
                                                    EN:"<p>&laquo;Exactly. A creature of pure chaos, holding this world captive for centuries.&raquo; the old man replies, taking a puff on a long pipe.</p>"
                                                ,
                                                    RU:"<p>&laquo;Именно. Существо чистого хаоса, веками державшее этот мир в плену.&raquo; — отвечает старик, затягиваясь длинной трубкой.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Portaci da lei. &Egrave; arrivato il momento di porre fine al suo maleficio.&raquo; dice l'Eroe, slanciandosi verso di lui.</p>",
                                                    EN:"<p>&laquo;Take us to him. It is time to end his curse.&raquo; says the Hero, rushing toward him.</p>"
                                                ,
                                                    RU:"<p>&laquo;Отведи нас к нему. Пора положить конец его проклятию.&raquo; — говорит герой, бросаясь к нему.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Oh, certamente!&raquo; risponde il vecchio. &laquo;Ma vi manca un'ultima avventura!&raquo;. Cosa succede?!</p>",
                                                    EN:"<p>&laquo;Oh, certainly!&raquo; replies the old man. &laquo;But there is one last adventure for you!&raquo;. What's going on?!</p>"
                                                ,
                                                    RU:"<p>&laquo;О, разумеется!&raquo; — отвечает старик. &laquo;Но вам предстоит ещё одно последнее приключение!&raquo; Что происходит?!</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='8'></span>.",
                                                EN:"Go to <span class='gotopage' page='8'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='8'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione B",
                                        EN:"Act III &dash; Mission B"
                                    ,
                                        RU:"Акт III &dash; Миссия B"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    IT:"<p>Gli Eroi si distribuiscono i punti esperienza tra loro. Riflettono sull'arma pi&ugrave; adeguata. Meglio tirare due dadi arancio o un dado rosso?</p>",
                                                    EN:"<p>The Heroes distribute the experience points among themselves. They think about the most suitable weapon. Is it better to roll two orange dice or one red die?</p>"
                                                ,
                                                    RU:"<p>Герои распределяют между собой очки опыта. Они размышляют, какое оружие подходит лучше. Лучше бросать два оранжевых кубика или один красный?</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Gli Eroi non sanno pi&ugrave; chi sono.</p>",
                                                    EN:"<p>The Heroes no longer know who they are.</p>"
                                                ,
                                                    RU:"<p>Герои больше не знают, кто они.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Incontreranno la Casualit&agrave; Massiccia?</p>",
                                                    EN:"<p>Will they encounter the Massive Randomness?</p>"
                                                ,
                                                    RU:"<p>Встретят ли они Massive Randomness?</p>"},
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    IT:"<p>&laquo;Fate un bel respiro, Giocatori.&raquo; vi sussurra il vecchio. &laquo;Se il mio rituale ha avuto successo, state per incontrare la Casualit&agrave; Massiccia.&raquo;</p>",
                                                    EN:"<p>&laquo;Take a deep breath, Players.&raquo; the old man whispers to you. &laquo;If my ritual was successful, you are about to meet the Massive Randomness.&raquo;</p>"
                                                ,
                                                    RU:"<p>&laquo;Глубоко вдохните, игроки.&raquo; — шепчет вам старик. &laquo;Если мой ритуал удался, вы вот-вот встретите Massive Randomness.&raquo;</p>"},
                                            ],[
                                                {
                                                    IT:"<p>&laquo;Ma potrei sbagliarmi! Ormai ho una certa et&agrave;!&raquo; continua sghignazzando. &laquo;Spero comunque di rivedervi.&raquo; sussurra ancora. &laquo;E non dimenticate di portare la vostra voglia di giocare con voi!&raquo;.</p>",
                                                    EN:"<p>&laquo;But I could be wrong! I'm getting on in years!&raquo; he says, snickering. &laquo;I hope to see you again, though.&raquo; he whispers again. &laquo;And don't forget to bring your desire to play with you!&raquo;.</p>"
                                                ,
                                                    RU:"<p>&laquo;Но я могу и ошибаться! Возраст уже не тот!&raquo; — говорит он, хихикая. &laquo;Надеюсь, мы ещё увидимся.&raquo; — снова шепчет он. &laquo;И не забудьте взять с собой желание играть!&raquo;</p>"},
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='9'></span>.",
                                                EN:"Go to <span class='gotopage' page='9'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='9'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Atto III &dash; Missione C",
                                        EN:"Act III &dash; Mission C"
                                    ,
                                        RU:"Акт III &dash; Миссия C"},
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Il vecchio rosso si dissolve nel nulla, dimenticato da tutti. Lo ha fatto con un grido? Lo ha fatto in silenzio? Nessuno lo sa veramente.</p>",
                                                    EN:"<p>The red old man dissolves into nothingness, forgotten by all. Did he do it with a scream? Did he do it in silence? No one knows.</p>"
                                                ,
                                                    RU:"<p>Рыжий старик растворяется в небытии, забытый всеми. С криком ли он исчез? В тишине ли? Никто не знает.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Il caos continua a osservarvi da dietro l'oscuro portale, sfidandovi con presunzione. Ma voi lo affrontate ogni giorno. E lo affronterete ancora e ancora. Un brivido di orgoglio vi attraversa la schiena.</p>",
                                                    EN:"<p>Chaos continues to watch from behind the dark portal, challenging you with presumption. But you face it every day. And you will face it again and again. A shiver of pride runs down your spine.</p>"
                                                ,
                                                    RU:"<p>Хаос продолжает наблюдать за вами из-за тёмного портала, с надменным вызовом. Но вы встречаете его каждый день. И будете встречать снова и снова. По спине пробегает дрожь гордости.</p>"},
                                            ],[
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>"
                                                ,
                                                    RU:"<p>Вы победили!</p>"},
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-mini" ],
            label:{
                EN:"Generates a mini-campaign with boss battle at the end"
            ,
                RU:"Генерирует мини-кампанию с боем с боссом в конце"},
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"Boss fights at the end of the campaign."
                            ,
                                RU:"Бои с боссами в конце кампании."},
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"mini",
                            label:{
                                EN:"4-quests linear campaign"
                            ,
                                RU:"Линейная кампания из 4 заданий"},
                            campaignMode:{
                                EN:"{label.miniCampaignMode}",
                                RU:"{label.miniCampaignMode}",
                                IT:"{label.miniCampaignMode}",
                            },
                            explanationKeys:[ "miniCampaignExplanation", "campaignExplanation" ],
                            summaryKeys:[ "miniCampaignSummary", "campaignSummary" ],
                            story:[
                                [
                                    {
                                        IT:"Un gruppo di ragazzi sghignazza attorno a un fuoco, che brilla vivace nella radura. ",
                                        EN:"A group of boys snicker around a fire, which glows brightly in the clearing. "
                                    ,
                                        RU:"Группа мальчишек хихикает у костра, ярко горящего на поляне. "},
                                ],[
                                    {
                                        IT:"Un pellegrino affaticato trova posto su roccia poco distante. ",
                                        EN:"A weary pilgrim finds a place on a nearby rock. "
                                    ,
                                        RU:"Усталый паломник находит место на ближайшем камне. "},
                                ],[
                                    {
                                        IT:"Dal cappuccio appare il viso sorridente di un vecchio dalla barba rossa. ",
                                        EN:"From behind the hood appears the smiling face of an old man with a red beard. "
                                    ,
                                        RU:"Из-под капюшона появляется улыбающееся лицо старика с рыжей бородой. "},
                                ],[
                                    {
                                        IT:"D'improvviso cala il silenzio...",
                                        EN:"Suddenly silence falls..."
                                    ,
                                        RU:"Внезапно воцаряется тишина..."},
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        EN:"<p>\"Who are you?\" asks the shyest of the young men with a trembling voice.</p>",
                                        RU:"<p>\"Кто ты?\" — дрожащим голосом спрашивает самый робкий из юношей.</p>",
                                        IT:"<p>\"Chi sei?\" chiede con voce tremante il pi&ugrave; timido dei giovani.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>The old man, with a gentle smile, replies: \"Oh, I'm just a traveler with a few too many ailments!\". Then, grinning and becoming gloomy, he adds: \"I am a Collector of Stories. Stories of brave Heroes who live every day one step away from death!\"</p>",
                                        RU:"<p>С мягкой улыбкой старик отвечает: \"О, всего лишь странник с чересчур большим количеством недугов!\" Затем, ухмыльнувшись и помрачнев, он добавляет: \"Я — Собиратель Историй. Историй о храбрых героях, которые каждый день живут в шаге от смерти!\"</p>",
                                        IT:"<p>Il vecchio, con un sorriso mite, risponde: \"Oh, sono solo un viandante con qualche acciacco di troppo!\". Poi, ghignando e facendosi cupo, aggiunge: \"Sono un Collezionista di Storie. Storie di Eroi coraggiosi che vivono ogni giorno ad un passo dalla morte!\"</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>\"Re... really?\" A young girl raises her hand to her mouth, wide open with enthusiasm. \"Come on, old man. Let's hear one!\" says the most robust and skeptical of the group, jumping to his feet.</p>",
                                        RU:"<p>\"П-правда?\" Девочка в восторге прикрывает раскрытый рот ладонью. \"Ну же, старик. Расскажи нам одну!\" — говорит самый крепкий и самый скептичный из компании, вскакивая на ноги.</p>",
                                        IT:"<p>\"Da... davvero?\" Una ragazzina porta la mano alla bocca spalancata dall'entusiasmo. \"Avanti, vecchio. Sentiamone una!\" dice balzando in piedi il pi&ugrave; robusto e scettico del gruppo.</p>"
                                    }
                                ],[
                                    {
                                        EN:"<p>The old man taps his stick on the ground once, clears his throat and begins his story... <i>(Go to <span class='gotopage' page='1'></span>)</i></p>",
                                        RU:"<p>Старик один раз ударяет посохом о землю, прочищает горло и начинает свой рассказ... <i>(Перейдите на <span class='gotopage' page='1'></span>)</i></p>",
                                        IT:"<p>Il vecchio batte il bastone per terra una volta, schiarisce la voce e comincia il suo racconto... <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>"
                                    }
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>La prima volta che i giocatori perdono la stessa missione due volte di seguito, guadagnano 1 segnalino Latore di Vita. Inizia ogni missione successiva con un segnalino Latore di Vita extra fino alla fine della campagna. Questo obiettivo pu&ograve; essere raggiunto in qualsiasi momento, anche al di fuori della fase citt&agrave;.</p>",
                                EN:"<p>The first time players lose the same quest twice in a row, they gain 1 Lifebringer token. Start each subsequent Quest with an extra Lifebringer token until the end of the Campaign. This Achievement may be accomplished at any moment, even out the Town Phase.</p>"
                            ,
                                RU:"<p>Когда игроки впервые дважды подряд проигрывают одно и то же задание, они получают 1 жетон Lifebringer. Каждое последующее задание до конца кампании начинается с дополнительного жетона Lifebringer. Это достижение может быть выполнено в любой момент, даже вне фазы города.</p>"},
                            achievements:[],
                            treasureBag:{
                                IT:"{label.miniCampaignTreasureBagDescription}",
                                EN:"{label.miniCampaignTreasureBagDescription}"
                            ,
                                RU:"{label.miniCampaignTreasureBagDescription}"},
                            questPhase:{
                                IT:"{label.campaignQuestPhaseDescription}",
                                EN:"{label.campaignQuestPhaseDescription}"
                            ,
                                RU:"{label.campaignQuestPhaseDescription}"},
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover"
                                    ,
                                        RU:"Обложка"},
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0
                                        },{
                                            act:0,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione A",
                                        EN:"Mission A"
                                    ,
                                        RU:"Миссия A"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The robust boy, who had listened to the whole story standing, breaks the silence left by the old man by whispering \"And... and then?\".</p>",
                                                    RU:"<p>Крепкий мальчик, который слушал весь рассказ стоя, нарушает тишину, оставленную стариком, шепча: \"И... и что потом?\"</p>",
                                                    IT:"<p>Il ragazzo robusto, che aveva ascoltato tutta la storia all'impiedi, spezza il silenzio lasciato dal vecchio bisbigliando \"E... e poi?\".</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The old man had left the story hanging, his mouth open and his gaze vacant. \"And then...\" he continues, thoughtfully. Then, he bursts into laughter.</p>",
                                                    RU:"<p>Старик оставил рассказ незавершённым, с открытым ртом и отсутствующим взглядом. \"А потом...\" — продолжает он задумчиво. А затем разражается смехом.</p>",
                                                    IT:"<p>Il vecchio aveva lasciato la storia sospesa, rimanendo con la bocca aperta e lo sguardo nel vuoto. \"E poi...\" prosegue, pensieroso. Poi scoppia in una risata.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"I don't remember how it went on!\" The old man bursts into laughter. His hoarse laugh is soon joined by the higher-pitched one of the shy boy.</p>",
                                                    RU:"<p>\"Я уже не помню, чем всё кончилось!\" Старик разражается смехом. К его хриплому смеху вскоре присоединяется более высокий смех робкого мальчика.</p>",
                                                    IT:"<p>\"Non ricordo pi&ugrave; come andava avanti!\" Il vecchio scoppia in una risata. Alla sua, rauca, si aggiunge poco dopo quella pi&ugrave; acuta del ragazzo timido.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 5 segnalini Tesoro Comune e aggiungere 1 segnalino Tesoro Raro e 2 segnalini Tesoro Epico al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 5 Common Treasure tokens and add 1 Rare Treasure token and 2 Epic Treasure tokens to the Treasure bag."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 5 обычных жетонов сокровищ и добавьте в мешок сокровищ 1 редкий жетон сокровищ и 2 эпических жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"That was a good story, mister Red,\" the little girl chirps. \"But... it wasn't that scary,\" she concludes, disappointed.</p>",
                                                    RU:"<p>\"Хорошая была история, господин Рыжий\", — щебечет девочка. \"Но... она была не такой уж страшной\", — разочарованно заключает она.</p>",
                                                    IT:"<p>\"E' stata una bella storia, signore Rosso.\" cinguetta la ragazzina. \"Ma... non faceva tanto paura\" conclude deulsa.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"That's... true, old man!\" the robust boy adds hesitantly. \"Tell us a grown-up story!\"</p>",
                                                    RU:"<p>\"Это... правда, старик!\" — нерешительно добавляет крепкий мальчик. \"Расскажи нам взрослую историю!\"</p>",
                                                    IT:"<p>\"E'... vero, vecchio!\" rincara titubante il ragazzo robusto. \"Raccontaci una storia da grandi!\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"You guys are tough, huh?\" the old man's face braces for the challenge. \"So... listen to this!\"</p>",
                                                    RU:"<p>\"Крепкие вы ребята, а?\" Лицо старика принимает вызов. \"Тогда... послушайте вот это!\"</p>",
                                                    IT:"<p>\"Siete tipi tosti, uh?\" il viso del vecchio si prepara alla sfida. \"Allora... sentite questa!\"</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='2'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:2
                                        },{
                                            act:1,
                                            map:0
                                        }
                                    ],
                                    name:{
                                        IT:"Missione B",
                                        EN:"Mission B"
                                    ,
                                        RU:"Миссия B"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old man sinks back into the silence of his thoughts, amid the worried looks of the boys.</p>",
                                                    RU:"<p>Старик снова погружается в молчание своих мыслей под встревоженными взглядами мальчишек.</p>",
                                                    IT:"<p>Il vecchio sprofonda di nuovo nel silenzio dei suoi pensieri, tra gli sguardi preoccupati dei ragazzi.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Just when the group's hopes were about to vanish, with a broken voice, the old man continues: \"A few days later, the Heroes received a mysterious letter... and nothing more was heard of them.\"</p>",
                                                    RU:"<p>Когда надежды группы уже почти угасли, старик с надломленным голосом продолжает: \"Несколько дней спустя герои получили загадочное письмо... и больше о них ничего не слышали.\"</p>",
                                                    IT:"<p>Proprio quando le speranze del gruppo stavano per svanire, con voce rotta, l'anziano prosegue: \"Qualche giorno dopo, gli Eroi ricevettero una lettera misteriosa... e di loro non se ne seppe pi&ugrave; nulla.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Are they... dead?!\" asks the shy boy. The old man responds by shrugging his shoulders.</p>",
                                                    RU:"<p>\"Они... умерли?!\" — спрашивает робкий мальчик. Старик отвечает лишь пожатием плеч.</p>",
                                                    IT:"<p>\"Sono... morti?!\" Chiede il ragazzo timido. Il vecchio risponde stringendo le spalle.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 5 segnalini Tesoro Comune e aggiungere 4 segnalini Tesoro Epico e 2 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 5 Common Treasure tokens and add 4 Epic Treasure tokens and 2 Legendary Treasure tokens to the Treasure bag."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 5 обычных жетонов сокровищ и добавьте в мешок сокровищ 4 эпических жетона сокровищ и 2 легендарных жетона сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>A disheveled boy, clenching his fists, jumps up and growls: \"The old man is making it all up!\" His voice echoes through the valley and then disappears into the distance.</p>",
                                                    RU:"<p>Растрёпанный мальчишка, сжав кулаки, вскакивает и рычит: \"Старик всё это выдумывает!\" Его голос эхом прокатывается по долине и затем исчезает вдали.</p>",
                                                    IT:"<p>Un ragazzo spettinato, stringendo i pugni, si alza di scatto ringhiando: \"Il vecchio si sta inventando tutto!\". La sua voce rimbomba per la valle per poi sparire lontano.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The old man, surprised, opens his eyes wide and almost falls off the rock where he was sitting. A handful of small, silent eyes now scrutinize the disheveled boy.</p>",
                                                    RU:"<p>Удивлённый старик широко раскрывает глаза и едва не падает со скалы, на которой сидел. Несколько маленьких молчаливых глаз теперь пристально смотрят на растрёпанного мальчишку.</p>",
                                                    IT:"<p>Il vecchio, sorpreso, strabuzza gli occhi e per poco non cade dalla roccia sulla quale sedeva. Una manciata di piccoli occhi silenziosi ora squadrano il piccolo scapigliato.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Listen!\" he exclaims, growling again. \"I'll tell you a story!\"</p>",
                                                    RU:"<p>\"Слушайте!\" — восклицает он, снова рыча. \"Тогда я расскажу вам историю!\"</p>",
                                                    IT:"<p>\"Sentite!\" esclama, ringhiando ancora. \"Ve ne racconto una io!\"</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='3'></span>.",
                                                EN:"Go to <span class='gotopage' page='3'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='3'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:1,
                                            map:1
                                        },
                                        {
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Missione C",
                                        EN:"Mission C"
                                    ,
                                        RU:"Миссия C"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old redhead's eyes shone like stars. \"And... and then what happens?\" he stammers to the young storyteller.</p>",
                                                    RU:"<p>Глаза рыжего старика сияют, как звёзды. \"И... и что потом происходит?\" — запинаясь, спрашивает он молодого рассказчика.</p>",
                                                    IT:"<p>Gli occhi del vecchio rosso brillavano come stelle. \"E... e poi cosa succede?\" balbetta al giovane cantastorie.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"And then...\" the boy's fists tighten even more. \"And then they go home, to their family!\"</p>",
                                                    RU:"<p>\"А потом...\" кулаки мальчика сжимаются ещё сильнее. \"А потом они идут домой, к своей семье!\"</p>",
                                                    IT:"<p>\"E poi...\" i pugni del ragazzo si fanno ancora pi&ugrave; stretti. \"E poi tornano a casa, dalla loro famiglia!\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>A tear runs down his too-young face.</p>",
                                                    RU:"<p>Слеза катится по его слишком юному лицу.</p>",
                                                    IT:"<p>Una lacrima solca il suo viso troppo giovane.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and 1 Legendary Treasure tokens to the Treasure bag."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 редких жетона сокровищ и добавьте в мешок сокровищ 1 легендарный жетон сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"Maybe it's getting late, my boys! You should go home!\" The old man's bones tense like a bow and, after a while, he is standing again, amid the murmurs of his young audience.</p>",
                                                    RU:"<p>\"Похоже, уже поздно, мальчики мои! Вам пора домой!\" Кости старика напрягаются, как лук, и через некоторое время он снова стоит на ногах среди шёпота своей юной аудитории.</p>",
                                                    IT:"<p>\"Forse si &egrave; fatto tardi, ragazzi miei! Dovreste tornare a casa!\" Le ossa del vecchio si tendono come un arco e, dopo un po', &egrave; nuovamente in piedi, tra i brusii del suo giovane pubblico.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Before you go, I would like to hear one last story.\" The little girl stops the old man, tugging gently at his hood.</p>",
                                                    RU:"<p>\"Прежде чем ты уйдёшь, я хотела бы услышать ещё одну последнюю историю.\" Девочка мягко тянет старика за капюшон, останавливая его.</p>",
                                                    IT:"<p>\"Prima che tu vada, vorrei sentire un'ultima storia.\" La ragazzina ferma l'anziano, tirandolo dolcemente per il cappuccio.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"A story that ends well.\" She continues. The red old man smiles again, sits down on his stone and clears his throat one last time...</p>",
                                                    RU:"<p>\"Историю с хорошим концом.\" — продолжает она. Рыжий старик снова улыбается, садится на свой камень и в последний раз прочищает горло...</p>",
                                                    IT:"<p>\"Una storia che finisce bene.\" Continua. Il vecchio rosso torna a sorridere, si siede sulla sua pietra e si schiarisce la voce un'ultima volta...</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='4'></span>.",
                                                EN:"Go to <span class='gotopage' page='4'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='4'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        },
                                        {
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione D",
                                        EN:"Mission D"
                                    ,
                                        RU:"Миссия D"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The old redhead takes a last look at his small, still stunned audience, gets back to his feet and, after an elegant and tired bow, walks away without adding anything.</p>",
                                                    RU:"<p>Рыжий старик в последний раз смотрит на свою маленькую, всё ещё ошеломлённую аудиторию, снова поднимается на ноги и после изящного, усталого поклона уходит, не добавив больше ни слова.</p>",
                                                    IT:"<p>Il vecchio rosso getta un'ultima occhiata alla sua piccola platea ancora attonita, si rimette in piedi e, dopo un elegante ed affaticato inchino, si allontana senza aggiungere nulla.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The boys never saw that strange old man again. And the years passed in a flash.</p>",
                                                    RU:"<p>Мальчики больше никогда не видели этого странного старика. И годы пролетели как одно мгновение.</p>",
                                                    IT:"<p>I ragazzi non videro mai pi&ugrave; quello strano vecchio. E gli anni passarono in un lampo.</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"<b>Distribuire i punti esperienza tra gli Eroi come preferiscono:</b><ul><li>1-2 Eroi: 3 PE</li><li>3-4 Eroi: 7 PE</li><li>5-6 Eroi: 11 PE</li></ul>",
                                                EN:"<b>Distribute experience points among the Heroes as they wish:</b><ul><li>1-2 Heroes: 3 XP</li><li>3-4 Heroes: 7 XP</li ><li>5-6 Heroes: 11 XP</li></ul>"
                                            ,
                                                RU:"<b>Распределите очки опыта между героями по своему усмотрению:</b><ul><li>1-2 героя: 3 XP</li><li>3-4 героя: 7 XP</li ><li>5-6 героев: 11 XP</li></ul>"},
                                            {
                                                IT:"<b>Aggiornare il sacchetto dei Tesori:</b> Rimuovere 2 segnalini Tesoro Raro e aggiungere 1 segnalini Tesoro Leggendario al sacchetto dei Tesori.",
                                                EN:"<b>Update the Treasure bag:</b> Remove 2 Rare Treasure tokens and 1 Legendary Treasure tokens to the Treasure bag."
                                            ,
                                                RU:"<b>Обновите мешок сокровищ:</b> уберите 2 редких жетона сокровищ и добавьте в мешок сокровищ 1 легендарный жетон сокровищ."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>After checking his bag one last time, a Hero huffs. He glances at his companions from behind a tuft of disheveled hair. \"Are we ready?\" he asks impatiently.</p>",
                                                    RU:"<p>В последний раз проверив свою сумку, один из героев фыркает. Из-за пряди растрёпанных волос он оглядывает своих спутников. \"Мы готовы?\" — нетерпеливо спрашивает он.</p>",
                                                    IT:"<p>Dopo aver controllato un'ultima volta la borsa, un Eroe sbuffa. Getta uno sguardo ai compagni, da dietro un cuffo spettinato. \"Siamo pronti?\" chiede impaziente.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"Ready.\" the Heroine confirms, tugging hard on a strap. \"It's time to end this once and for all.\"</p>",
                                                    RU:"<p>\"Готовы.\" — подтверждает героиня, с силой дёргая ремень. \"Пора покончить с этим раз и навсегда.\"</p>",
                                                    IT:"<p>\"Pronti.\" conferma l'Eroina, tirando una cinghia con forza. \"E' il momento di farla finita una volta per tutte.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>The rest of the group nods in response.</p>",
                                                    RU:"<p>Остальные члены группы в ответ кивают.</p>",
                                                    IT:"<p>Il resto del gruppo risponde con un cenno del capo.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='5'></span>.",
                                                EN:"Go to <span class='gotopage' page='5'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='5'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:2,
                                            map:2
                                        }
                                    ],
                                    name:{
                                        IT:"Missione E",
                                        EN:"Mission E"
                                    ,
                                        RU:"Миссия E"},
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Qualche giorno dopo, gli Eroi ricevettero una lettera misteriosa.</p>",
                                                    EN:"<p>A few days later, the Heroes received a mysterious letter.</p>"
                                                ,
                                                    RU:"<p>Несколько дней спустя герои получили загадочное письмо.</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Era successo qualcosa di grave alla capitale? Il mondo era ancora una volta in pericolo? Le loro famiglie, preoccupate, chiedevano di loro?</p>",
                                                    EN:"<p>Had something serious happened to the capital? Was the world in danger once again? Were their worried families asking about them?</p>"
                                                ,
                                                    RU:"<p>Случилось ли что-то серьёзное в столице? Снова ли миру грозила опасность? Спрашивали ли о них обеспокоенные семьи?</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Nessuno lo sa con certezza. Di loro non se ne seppe pi&ugrave; nulla.</p>",
                                                    EN:"<p>No one knows for sure. They were never heard from again.</p>"
                                                ,
                                                    RU:"<p>Никто точно не знает. Больше о них ничего не слышали.</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>"
                                                ,
                                                    RU:"<p>Вы победили!</p>"},
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },{
            id:"campaign",
            needs:[ ],
            provides:[ "campaign-2shots" ],
            label:{
                EN:"Generates a 2-shot campaign with boss battle at the end"
            ,
                RU:"Генерирует 2-shot кампанию с боем с боссом в конце"},
            content:[
                {
                    type:"campaignBossFightModels",
                    data:[
                        {
                            label:{
                                EN:"Boss fights at the end of the campaign."
                            ,
                                RU:"Бои с боссами в конце кампании."},
                            words:[
                                [
                                    "ending",
                                    "final",
                                    "edge"
                                ],[
                                    "end",
                                    "close",
                                    "cut"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Boss fights at the end of all acts."
                            ,
                                RU:"Бои с боссами в конце каждого акта."},
                            words:[
                                [
                                    "grinding",
                                    "double",
                                    "mirroring"
                                ],[
                                    "grinder",
                                    "dual",
                                    "mirror"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 },
                                        { act:2, map:0 },
                                        { act:2, map:1 }
                                    ],
                                    flags:[
                                        { bossFight:"yes" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignMapModels",
                    data:[
                        {
                            label:{
                                EN:"Normal-sized maps."
                            ,
                                RU:"Карты обычного размера."},
                            words:[
                                [
                                    "plain",
                                    "old",
                                    "flat"
                                ],[
                                    "cross",
                                    "even",
                                    "cast"
                                ]
                            ],
                            
                            models:[]
                        },{
                            label:{
                                EN:"Larger mid-maps."
                            ,
                                RU:"Увеличенные средние карты."},
                            words:[
                                [
                                    "chrono",
                                    "time",
                                    "point"
                                ],[
                                    "sand",
                                    "pass",
                                    "grow"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0,map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Start end map."
                            ,
                                RU:"Начать с финальной карты."},
                            words:[
                                [
                                    "ascent",
                                    "raise",
                                    "climax"
                                ],[
                                    "lift",
                                    "climb",
                                    "rise"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { mapSize:"large" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"campaignModels",
                    data:[
                        {
                            type:"2shots",
                            label:{
                                EN:"2-shot linear campaign"
                            ,
                                RU:"Линейная 2-shot кампания"},
                            campaignMode:{
                                EN:"{label.shots2CampaignMode}",
                                RU:"{label.shots2CampaignMode}",
                                IT:"{label.shots2CampaignMode}",
                            },
                            explanationKeys:[ "explanation" ],
                            summaryKeys:[ "campaignSummary" ],
                            story:[
                                [
                                    {
                                        IT:"Una mano anziana dalla stretta inaspettatamente salda si avvinghia al polso. ",
                                        EN:"An elderly hand with an unexpectedly firm grip wraps around your wrist. "
                                    ,
                                        RU:"Пожилая рука с неожиданно крепкой хваткой обвивает ваше запястье. "},
                                ],[
                                    {
                                        IT:"\"Presto, non abbiamo tempo da perdere!\" ",
                                        EN:"\"Hurry up, we don't have time to waste!\" "
                                    ,
                                        RU:"\"Скорее, у нас нет времени терять!\" "},
                                ],[
                                    {
                                        IT:"Vieni trascinato fuori dalla taverna, tra gli sguardi sbalorditi degli ubriaconi e le grida preoccupate dei tuoi compagni...",
                                        EN:"You are dragged out of the tavern, amidst the stunned looks of the drunkards and the worried cries of your companions..."
                                    ,
                                        RU:"Вас вытаскивают из таверны под изумлённые взгляды пьяниц и тревожные крики ваших спутников..."},
                                ]
                            ],
                            introduction:[
                                [
                                    {
                                        IT:"<p>\"Tenete, indossate questo!\" Il vecchio gesticola furiosamente, facendo oscillare la sua barba rossa come un pendolo.</p>",
                                        EN:"<p>\"Here, put this on!\" The old man gestures wildly, his red beard swinging like a pendulum.</p>"
                                    ,
                                        RU:"<p>\"Вот, надень это!\" Старик яростно жестикулирует, и его рыжая борода раскачивается, как маятник.</p>"},
                                ],[
                                    {
                                        IT:"<p>I fumi dell'alcool annebbiano la tua testa. Sei stato rapito? I tuoi compagni di bevute sono a pochi passi di distanza, confusi quanto te e... armati di tutto punto?</p>",
                                        EN:"<p>Alcohol fumes cloud your head. Have you been kidnapped? Are your drinking buddies just a few feet away, as confused as you, and... fully armed?</p>"
                                    ,
                                        RU:"<p>Пары алкоголя туманят вам голову. Вас похитили? Ваши собутыльники всего в нескольких шагах от вас, столь же растерянные, как и вы, и... вооружены до зубов?</p>"},
                                ],[
                                    {
                                        IT:"<p>\"Presto... saltate in questo portale...\" Uno specchio di luce sospeso a mezz'aria risucchia tutto il gruppo. Riesci solo a sentire le ultime parole del vecchio pazzo...</p>",
                                        EN:"<p>\"Quick... jump into this portal...\" A mirror of light suspended in mid-air sucks the entire group in. You can only hear the old madman's last words...</p>"
                                    ,
                                        RU:"<p>\"Быстрее... прыгайте в этот портал...\" Зеркало света, подвешенное в воздухе, затягивает всю группу. Вы успеваете услышать только последние слова безумного старика...</p>"},
                                ],[
                                    {
                                        IT:"<p>\"Dovete diventare degli Eroi... entro stasera!\" <i>(Andare a <span class='gotopage' page='1'></span>)</i></p>",
                                        EN:"<p>\"You must become Heroes... by tonight!\" <i>(Go to <span class='gotopage' page='1'></span>)</i></p>"
                                    ,
                                        RU:"<p>\"Вы должны стать героями... до наступления ночи!\" <i>(Перейдите на <span class='gotopage' page='1'></span>)</i></p>"},
                                ]
                            ],
                            achievementsCondition:{
                                IT:"<p>In questa modalit&agrave; non si applica alcun Traguardo.</p>",
                                EN:"<p>In this mode, no Achievement applies.</p>"
                            ,
                                RU:"<p>В этом режиме не действует ни одно достижение.</p>"},
                            achievements:[],
                            treasureBag:{
                                IT:"{label.shot2TreasureBagDescription}",
                                EN:"{label.shot2TreasureBagDescription}"
                            ,
                                RU:"{label.shot2TreasureBagDescription}"},
                            questPhase:{
                                IT:"{label.campaign2shotsQuestPhaseDescription}",
                                EN:"{label.campaign2shotsQuestPhaseDescription}"
                            ,
                                RU:"{label.campaign2shotsQuestPhaseDescription}"},
                            pages:[
                                {
                                    type:"cover",
                                    name:{
                                        IT:"Copertina",
                                        EN:"Cover"
                                    ,
                                        RU:"Обложка"},
                                },{
                                    type:"map",
                                    actMap:[
                                        {
                                            act:0,
                                            map:0
                                        },{
                                            act:0,
                                            map:1
                                        },{
                                            act:0,
                                            map:2
                                        },{
                                            act:1,
                                            map:0
                                        },{
                                            act:1,
                                            map:1
                                        },{
                                            act:1,
                                            map:2
                                        }
                                    ],
                                    bossAsAct:[
                                        {
                                            act:1,
                                            map:0
                                        },{
                                            act:1,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione A",
                                        EN:"Mission A"
                                    ,
                                        RU:"Миссия A"},
                                    progression:{
                                        story:[
                                            [
                                                {
                                                    EN:"<p>The chaos has subsided but your gaze does not leave your weapon.</p>",
                                                    RU:"<p>Хаос улёгся, но ваш взгляд не отрывается от оружия.</p>",
                                                    IT:"<p>Il caos si &egrave; placato ma il tuo sguardo non lascia la tua arma.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>You have become strong... very strong. But how is it possible that all this has happened so quickly?</p>",
                                                    RU:"<p>Вы стали сильными... очень сильными. Но как возможно, что всё это произошло так быстро?</p>",
                                                    IT:"<p>Sei diventato forte... molto forte. Ma come &egrave; possibile che tutto questo sia accaduto cos&igrave; in fretta?</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Your companions do not seem to share your perplexity: they noisily exchange the loot with smiles plastered on their faces.</p>",
                                                    RU:"<p>Похоже, ваши спутники не разделяют вашего недоумения: они шумно делят добычу, не снимая улыбок с лиц.</p>",
                                                    IT:"<p>I tuoi compagni non sembrano condividere la tua perplessit&agrave;: si scambiano rumorosamente il bottino con il sorriso stampato sul volto.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Finally you come across, peering into the shadows, a look as worried as yours...</p>",
                                                    RU:"<p>Наконец, вглядываясь в тени, вы встречаете взгляд, такой же тревожный, как ваш...</p>",
                                                    IT:"<p>Finalmente incroci, scrutando nell'ombra, uno sguardo preoccupato come il tuo...</p>"
                                                }
                                            ]
                                        ],
                                        rewards:[
                                            {
                                                IT:"Tutti gli Eroi raggiungono il livello 6.",
                                                EN:"All Heroes level up to level 6."
                                            ,
                                                RU:"Все герои повышаются до 6 уровня."},
                                            {
                                                IT:"Ogni Eroe pu&ograve; eseguire azioni di Scambio ed Equipaggiamento tutte le volte che desidera.",
                                                EN:"Each Hero can perform Free Trade and Equip actions as many times as many times as it wishes.",
                                                RU:"Каждый герой может выполнять свободные действия обмена и экипировки сколько угодно раз.",
                                            },
                                            {
                                                IT:"&Egrave; possibile eseguire una singola azione di Forgia, indipendentemente dal numero di giocatori. Non &egrave; possibile forgiare oggetti Epici in oggetti Leggendari.",
                                                EN:"A single Forge action may be performed, regardless of the number of players. You can’t forge Epic items into Legendary items."
                                            ,
                                                RU:"Можно выполнить одно действие ковки независимо от количества игроков. Нельзя ковать эпические предметы в легендарные."},
                                            {
                                                IT:"Ogni Eroe manterr&agrave; solo gli oggetti equipaggiati sulla propria dashboard per la Missione B. Tutti gli oggetti in eccesso verranno rimessi nel proprio mazzo oggetti.",
                                                EN:"Each Hero will only keep the items equipped on their dashboard for Mission B. Any extra items will be shuffled back to its Item deck."
                                            ,
                                                RU:"Каждый герой сохранит для миссии B только те предметы, которые экипированы на его планшете. Все лишние предметы замешиваются обратно в его колоду предметов."},
                                            {
                                                IT:"Tutti gli Eroi impostano i loro PE a 0 girano il Segnalino Livello sul lato 6-10.",
                                                EN:"All Heroes set their XP to 0 and flip their Level Token to the 6-10 side."
                                            ,
                                                RU:"Все герои сбрасывают свои XP до 0 и переворачивают свой жетон уровня на сторону 6-10."},
                                        ],
                                        nextMissionStory:[
                                            [
                                                {
                                                    EN:"<p>\"It's still too little, damn it...\" The old red steps out of the shadows.</p>",
                                                    RU:"<p>\"Этого всё ещё слишком мало, проклятье...\" Рыжий старик выходит из тени.</p>",
                                                    IT:"<p>\"E' ancora troppo poco, maledizione...\" Il vecchio rosso mette un piede fuori dall'ombra.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>Silence falls. A new portal, dark as night and smelling of death, opens before his outstretched hand.</p>",
                                                    RU:"<p>Наступает тишина. Перед его вытянутой рукой открывается новый портал, чёрный как ночь и пахнущий смертью.</p>",
                                                    IT:"<p>Cala il silenzo. Un nuovo portale, buio come la notte e dall lezzo di morte, si apre davanti alla sua mano tesa.</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>\"...but we don't have time. You have to save this world. Now.\"</p>",
                                                    RU:"<p>\"...но у нас нет времени. Вы должны спасти этот мир. Сейчас.\"</p>",
                                                    IT:"<p>\"...ma non abbiamo tempo. Dovete salvare questo mondo. Ora.\"</p>"
                                                }
                                            ],[
                                                {
                                                    EN:"<p>You and your companions can't move a muscle, frozen in that solemn and worried manner. Then, everything around you goes dark.</p>",
                                                    RU:"<p>Вы и ваши спутники не можете пошевелить ни мышцей, скованные его торжественной и тревожной манерой. А затем всё вокруг погружается во тьму.</p>",
                                                    IT:"<p>Tu e i tuoi compagni non riuscite a muovere un muscolo, bloccati da quel fare solenne e preoccupato. Poi, tutto intorno diventa buio.</p>"
                                                }
                                            ]
                                        ],
                                        nextMissionDirection:[
                                            {
                                                IT:"Andare a <span class='gotopage' page='2'></span>.",
                                                EN:"Go to <span class='gotopage' page='2'></span>."
                                            ,
                                                RU:"Перейдите на <span class='gotopage' page='2'></span>."},
                                        ]
                                    }
                                },{
                                    type:"map",
                                    specialRules:[ "greatRiches", "highRisk", "darknessTrack" ],
                                    actMap:[
                                        {
                                            act:2,
                                            map:0
                                        },{
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    bossAsAct:[
                                        {
                                            act:2,
                                            map:2
                                        },{
                                            act:2,
                                            map:1
                                        }
                                    ],
                                    name:{
                                        IT:"Missione B",
                                        EN:"Mission B"
                                    ,
                                        RU:"Миссия B"},
                                    progression:{
                                        ending:[
                                            [
                                                {
                                                    IT:"<p>Anche se solo per un pelo, tu e i tuoi compagni ce l'avete fatta! Avete eliminato la minaccia!</p>",
                                                    EN:"<p>Even if it was just a hair's breadth, you and your companions made it! You eliminated the threat!</p>"
                                                ,
                                                    RU:"<p>Пусть лишь в волоске от провала, но вы и ваши спутники справились! Вы устранили угрозу!</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>La gioia ti attraversa, come mille scariche elettriche. Poi, d'improvviso, balena un pensiero freddo e scuro. Sei davvero un Eroe, se qualcuno ti ha costretto ad esserlo? Meriti la gloria anche se non l'hai cercata?</p>",
                                                    EN:"<p>Joy runs through you, like a thousand electric shocks. Then, suddenly, a cold and dark thought flashes. Are you really a Hero, if someone forced you to be one? Do you deserve glory even if you didn't seek it?</p>"
                                                ,
                                                    RU:"<p>Радость пронизывает вас, словно тысяча электрических разрядов. Затем внезапно вспыхивает холодная тёмная мысль. Действительно ли вы герой, если кто-то заставил вас им стать? Заслуживаете ли вы славы, если не искали её?</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Uno scroscio dei calici che sbattono tra loro ti sveglia di soprassalto. I compagni di bevute stanno brindando come al solito.</p>",
                                                    EN:"<p>The crash of glasses clinking together jolts you awake. Your drinking companions are toasting as usual.</p>"
                                                ,
                                                    RU:"<p>Грохот столкнувшихся кубков будит вас рывком. Ваши собутыльники, как и всегда, поднимают тост.</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Sar&agrave; per la vittoria appena conquistata o quella che avreste potuto raggiungere? Il tuo sguardo balena verso i loro vestiti...</p>",
                                                    EN:"<p>Is it for the victory you just achieved or the one you could have achieved? Your gaze flashes towards their clothes...</p>"
                                                ,
                                                    RU:"<p>За победу, которую вы только что одержали, или за ту, которую могли бы одержать? Ваш взгляд метается к их одежде...</p>"},
                                            ],
                                            [
                                                {
                                                    IT:"<p>Avete vinto!</p>",
                                                    EN:"<p>You win!</p>"
                                                ,
                                                    RU:"<p>Вы победили!</p>"},
                                            ]
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type:"globalLabels",
                    data:{
                        campaignPreparation:{
                            EN:"2-shot campaigns follow very different rules than the standard Campaign. Instead, they follow the <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> designed by BGG user <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Print the extra materials, prepare the Heroes following the One-shot rules, and replace all the Level Tokens with a copy of the one you just printed.",
                            RU:"2-shot кампании следуют совсем другим правилам, чем стандартная кампания. Вместо этого они используют <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>домашние правила</a>, разработанные пользователем BGG <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Распечатайте дополнительные материалы, подготовьте героев по правилам одиночного задания и замените все жетоны уровня копией только что распечатанного.",
                            IT:"Le campagne 2-shot seguono delle regole molto diverse rispetto a quelle della Campagna standard. Seguono invece le <a target=_blank href='https://boardgamegeek.com/thread/3460934/2-shot-campaign'>house rules</a> progettate dall'utente BGG <a target=_blank href='https://boardgamegeek.com/user/Rough_neck'>Roughneck CC</a>.</p><p>Stampate i materiali extra, preparate gli Eroi seguendo le regole di un'Avventura one-shot e sostituite tutti i Segnalini Livello con una copia di quello appena stampato."
                        }
                    }
                },{
                    type:"campaignRewardModels",
                    data:[
                        {
                            label:{
                                EN:"Accept a medium Red One challenge and gain an item."
                            ,
                                RU:"Примите среднее испытание Рыжего Старика и получите предмет."},
                            words:[
                                [
                                    "probe",
                                    "poll",
                                    "feel"
                                ],[
                                    "match",
                                    "test",
                                    "watch"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:2, challengeRewardTags:[ [ "glory" ] ] }
                                    ]
                                }
                            ]
                        },{
                            label:{
                                EN:"Accept a hard Red One challenge and gain an item."
                            ,
                                RU:"Примите сложное испытание Рыжего Старика и получите предмет."},
                            words:[
                                [
                                    "threat",
                                    "scan",
                                    "parse"
                                ],[
                                    "dare",
                                    "trial",
                                    "check"
                                ]
                            ],
                            models:[
                                {
                                    at:[
                                        { act:0, map:0 },
                                        { act:0, map:1 },
                                        { act:0, map:2 },
                                        { act:1, map:0 },
                                        { act:1, map:1 },
                                        { act:1, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:1, challengeRewardTags:[ [ "itemQuality2" ] ] }
                                    ]
                                },{
                                    at:[
                                        { act:2, map:0 },
                                        { act:2, map:1 },
                                        { act:2, map:2 }
                                    ],
                                    flags:[
                                        { challenges:"yes", challengeIntensity:3, challengeRewardTags:[ [ "glory" ] ] }
                                    ]
                                }
                            ]
                        }
                    ]
                },{
                    type:"specialRules",
                    data:{
                        greatRiches:[
                            {
                                priority:16,
                                type:"rule",
                                name:{
                                    IT:"Grandi ricchezze...",
                                    EN:"Great riches..."
                                ,
                                    RU:"Великие богатства..."},
                                explanation:{
                                    IT:"I gettoni del tesoro nei Forzieri sono di 1 livello pi&ugrave; alti in rarit&agrave;. (i Comuni sono Rari, i Rari sono Epici, gli Epici sono Leggendari)",
                                    EN:"Treasure Tokens in Chests are 1 level higher in rarity. (Common are Rare, Rare are Epic, Epic are Legendary)"
                                ,
                                    RU:"Жетоны сокровищ в сундуках имеют редкость на 1 уровень выше. (Обычные становятся редкими, редкие — эпическими, эпические — легендарными)"},
                            }
                        ],
                        highRisk:[
                            {
                                priority:15,
                                type:"rule",
                                name:{
                                    IT:"...Ad alto rischio",
                                    EN:"...Great risks"
                                ,
                                    RU:"...Большие риски"},
                                explanation:{
                                    IT:"Quando un Eroe elimina un nemico guadagna questi tesori al posto di quelli stampati sulla carta Nemico:<ul><li><b>Orda di Livello 6/7</b>: 1 Tesoro Comune</li><li><b>Orda di Livello 8/9</b>: 1 Tesoro Comune</li><li><b>Orda di Livello 10</b>: 2 Tesori Comuni</li><li><b>Mostro Errante di Livello 6/7</b>: 1 Tesoro Comune, 3 Tesori Epici</li><li><b>Mostro Errante di Livello 8/9</b>: 2 Tesori Comune, 1 Tesoro Leggendario</li><li><b>Mostro Errante di Livello 10</b>: 3 Tesori Leggendari</li></ul>",
                                    EN:"When a Hero eliminates an enemy it gains these treasures instead of those printed on the Enemy card:<ul><li><b>Level 6/7 Mob</b>: 1 Common Treasure</li><li><b>Level 8/9 Mob</b>: 1 Common Treasure</li><li><b>Level 10 Mob</b>: 2 Common Treasures</li><li><b>Level 6/7 Roaming Monster</b>: 1 Common Treasure, 3 Epic Treasures</li><li><b>Level 8/9 Roaming Monster</b>: 2 Common Treasure, 1 Legendary Treasure</li><li><b>Level 10 Roaming Monster</b>: 3 Legendary Treasures</li></ul>"
                                ,
                                    RU:"Когда герой побеждает врага, вместо сокровищ, напечатанных на карте врага, он получает следующие сокровища:<ul><li><b>Орда 6/7 уровня</b>: 1 обычное сокровище</li><li><b>Орда 8/9 уровня</b>: 1 обычное сокровище</li><li><b>Орда 10 уровня</b>: 2 обычных сокровища</li><li><b>Блуждающий монстр 6/7 уровня</b>: 1 обычное сокровище, 3 эпических сокровища</li><li><b>Блуждающий монстр 8/9 уровня</b>: 2 обычных сокровища, 1 легендарное сокровище</li><li><b>Блуждающий монстр 10 уровня</b>: 3 легендарных сокровища</li></ul>"},
                            }
                        ],
                        darknessTrack:[
                            {
                                priority:14,
                                type:"rule",
                                name:{
                                    IT:"A un passo dalla fine",
                                    EN:"One step away from the end"
                                ,
                                    RU:"В шаге от конца"},
                                explanation:{
                                    IT:"Utilizza il Tracciato Oscurit&agrave; \"Sfida difficile\" per giocare a questa missione.",
                                    EN:"Use the Hard Challenge Darkness Track to play this Quest."
                                ,
                                    RU:"Для этого задания используйте трек тьмы «Сложное испытание»."},
                            }
                        ]
                    }
                }
            ]
        }
    ];

});