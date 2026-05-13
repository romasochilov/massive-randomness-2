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

            id:"quests-hellscapewq",
            needs:[ "quests-default", "md2-hellscape" ],
            provides:[ "quests", "quests-hellscapewq", "untranslated-fr" ],
            label:{
                EN:"MD2: Hellscape Web Quest inspired quest models",
                RU:"MD2: модели заданий, вдохновлённые Hellscape Web Quest"
            },
            content:[
                {
                    type:"quests",
                    data:[
                        {
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-campaign
                            forActs:[1,2],
                            forMaps:[0,1],
                            type:"collect",
                            objective:{
                                EN:"One Hero is spreading sickness. Deliver the cure item to a zone safely to win.",
                                RU:"Один герой распространяет болезнь. Доставьте предмет-лекарство в зону без потерь, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"The Cure\"",
                                EN:"Inspired by the Web Quest \"The Cure\"",
                                RU:"Вдохновлено Web Quest «The Cure»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                asIf:[
                                                    {
                                                        IT:[ "Come se tutto ci&ograve; che ha causato non bastasse," ],
                                                        EN:[ "As if everything it brought was not enough," ],
                                                        RU:[ "Как будто всего, что оно принесло, было мало," ]
                                                    },{
                                                        IT:[ "Dopo aver distrutto la maggior parte dei villaggi circostanti," ],
                                                        EN:[ "After destroying most of the surrounding villages," ],
                                                        RU:[ "Уничтожив большинство окрестных деревень," ]
                                                    },{
                                                        IT:[ "La sua sete di distruzione &egrave; implacabile e" ],
                                                        EN:[ "His thirst for destruction is relentless and" ],
                                                        RU:[ "Его жажда разрушения неутолима, и" ]
                                                    }
                                                ],
                                                problem:[
                                                    {
                                                        IT:[ "La Maledizione opera in modi misteriosi e nefasti.", "ora la Maledizione sta consumando le persone dall'interno attraverso una nuova malattia", "La Maledizione Nefasta", "dalla", "Piaga della Maledizione", "La Maledizione si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Curse works in mysterious and nefarious ways.", "now the Curse is consuming people from the inside through a new plague", "The Nefarious Curse", "by the", "Plague of the Curse", "The Curse Spreads", "of the", "Plague" ],
                                                        RU:[ "Проклятие действует таинственными и зловещими путями.", "теперь Проклятие пожирает людей изнутри через новую чуму", "Зловещее Проклятие", "от", "Чумы Проклятия", "Проклятие распространяется", "от", "Чумы" ]
                                                    },{
                                                        IT:[ "La Melma Nera sembra essere inarrestabile.", "ora ha diffuso una terribile malattia, in grado di consumare qualsiasi essere vivente pochi giorni", "La Malattia della Melma Nera", "dalla", "Malattia della Melma Nera", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The Black Slime seems to be unstoppable.", "now it has spread a terrible disease, capable of consuming any living being within a few days", "The Disease of the Black Slime", "by the", "Disease of the Black Slime", "The Disease Spreads", "of the", "Disease"],
                                                        RU:[ "Чёрная Слизь кажется неудержимой.", "теперь она распространила ужасную болезнь, способную пожрать любое живое существо за несколько дней", "Болезнь Чёрной Слизи", "от", "Болезни Чёрной Слизи", "Болезнь распространяется", "от", "Болезни" ]
                                                    },{
                                                        IT:[ "Gli alchimisti hanno perso il controllo della terribile Radice Maligna che stavano studiando.", "ora sta portando una malattia mortale nei villaggi e nelle citt&agrave;, capace di consumare ogni essere vivente", "La Malattia Maligna", "dalla", "Malattia Maligna", "La Malattia si Diffonde", "della", "Malattia" ],
                                                        EN:[ "The alchemists have lost control of the terrible Evil Root they were studying.", "it is now bringing a deadly disease to villages and cities, capable of consuming every living being", "The Evil Disease", "by the" , "Malignant Disease", "The Disease Spreads", "of the", "Disease" ],
                                                        RU:[ "Алхимики потеряли контроль над ужасным Злым Корнем, который они изучали.", "теперь он несёт смертельную болезнь в деревни и города, способную пожрать всё живое", "Злая Болезнь", "от", "Злокачественной Болезни", "Болезнь распространяется", "от", "Болезни" ]
                                                    }
                                                ],
                                                alsoUs:[
                                                    {
                                                        IT:[ "- e gli Eroi non fanno eccezione!" ],
                                                        EN:[ "- and the Heroes are no exception!" ],
                                                        RU:[ "— и герои не исключение!" ]
                                                    },{
                                                        IT:[ "- inclusi gli Eroi!" ],
                                                        EN:[ "- including Heroes!" ],
                                                        RU:[ "— включая героев!" ]
                                                    },{
                                                        IT:[ "- inclusi noi!" ],
                                                        EN:[ "- including us!" ],
                                                        RU:[ "— включая нас!" ]
                                                    }
                                                ],
                                                however:[
                                                    {
                                                        IT:[ "Tuttavia," ],
                                                        EN:[ "However," ],
                                                        RU:[ "Однако," ]
                                                    },{
                                                        IT:[ "Ma non tutto &egrave; perduto... Si dice in giro che" ],
                                                        EN:[ "But all is not lost... Word on the street is that" ],
                                                        RU:[ "Но не всё потеряно... Поговаривают, что" ]
                                                    },{
                                                        IT:[ "Ma," ],
                                                        EN:[ "But," ],
                                                        RU:[ "Но," ]
                                                    }
                                                ],
                                                where:[
                                                    {
                                                        IT:[ "nel profondo di un sotterraneo creduto perduto," ],
                                                        EN:[ "deep down in a believed-to-be-lost dungeon," ],
                                                        RU:[ "глубоко в считавшемся утраченным подземелье," ]
                                                    },{
                                                        IT:[ "in un antico tempio," ],
                                                        EN:[ "in an ancient temple," ],
                                                        RU:[ "в древнем храме," ]
                                                    },{
                                                        IT:[ "sul luogo di un oscuro rituale," ],
                                                        EN:[ "to the site of a dark ritual," ],
                                                        RU:[ "на месте тёмного ритуала," ]
                                                    }
                                                ],
                                                cure:[
                                                    {
                                                        IT:[ "sembra che uno stregone abbia lasciato una sorta di cura.", "Cura", "la", "nella Zona della Cura", "cura" ],
                                                        EN:[ "a sorcerer seems to have left behind some sort of cure.", "Cure", "the", "in the Cure's Zone", "cure" ],
                                                        RU:[ "похоже, какой-то колдун оставил некое лекарство.", "Лекарство", "это", "в зоне Лекарства", "лекарство" ]
                                                    },{
                                                        IT:[ "sembra che un cultista abbia dimenticato una qualche pozione curativa.", "Pozione", "la", "nella Zona della Pozione", "pozione" ],
                                                        EN:[ "it seems like a cultist forgot some healing potion.", "Potion", "the", "in the Potion's Zone", "potion" ],
                                                        RU:[ "похоже, какой-то культист забыл целебное зелье.", "Зелье", "это", "в зоне Зелья", "зелье" ]
                                                    },{
                                                        IT:[ "pare sia stata abbandonata una fiala contenente una cura miracolosa.", "Fiala", "la", "nella Zona della Fiala", "fiala" ],
                                                        EN:[ "it seems a vial containing a miracle cure has been abandoned.", "Vial", "the", "in the Vial's Zone", "vial" ],
                                                        RU:[ "похоже, оставлен флакон с чудодейственным лекарством.", "Флакон", "это", "в зоне Флакона", "флакон" ]
                                                    }
                                                ],
                                                whatToDo:[
                                                    {
                                                        IT:[ "Il piano sembra semplice:" ],
                                                        EN:[ "The plan seems simple:" ],
                                                        RU:[ "План кажется простым:" ]
                                                    },{
                                                        IT:[ "Non dobbiamo fare altro da fare che" ],
                                                        EN:[ "All we have to do is" ],
                                                        RU:[ "Всё, что нам нужно сделать, —" ]
                                                    },{
                                                        IT:[ "Il nostro obiettivo &egrave; chiaro:" ],
                                                        EN:[ "Our goal is clear:" ],
                                                        RU:[ "Наша цель ясна:" ]
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "prendere {label.cure@2} {label.cure@4} e scappare!" ],
                                                        EN:[ "grab {label.cure@2} {label.cure@4} and leave!" ],
                                                        RU:[ "схватить {label.cure@2} {label.cure@4} и уйти!" ]
                                                    },{
                                                        IT:[ "trovare {label.cure@2} {label.cure@4} sopravvivere fino all'uscita!" ],
                                                        EN:[ "find {label.cure@2} {label.cure@4} survive to the exit!" ],
                                                        RU:[ "найти {label.cure@2} {label.cure@4} и выжить до выхода!" ]
                                                    },{
                                                        IT:[ "raggiungere l'uscita del Dungeon con {label.cure@2} {label.cure@4} in mano e tutti interi!" ],
                                                        EN:[ "reach the exit of the Dungeon with {label.cure@2} {label.cure@4} in hand and in one piece!" ],
                                                        RU:[ "добраться до выхода из подземелья с {label.cure@2} {label.cure@4} в руках и в целости!" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noInfection:[
                                                    {
                                                        IT:[ "ridurre l'infezione {label.problem@6} {label.problem@7}", "con 1 solo Eroe infettato {label.problem@3} {label.problem@4}" ],
                                                        EN:[ "reduce the infection {label.problem@6} {label.problem@7}", "with just 1 Hero infected {label.problem@3} {label.problem@4}" ],
                                                        RU:[ "уменьшить заражение {label.problem@6} {label.problem@7}", "только с 1 заражённым героем {label.problem@3} {label.problem@4}" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.cure:capital@2} {label.cure@1}",
                                            RU:"{label.cure:capital@2} {label.cure@1}"
                                        },{
                                            EN:"{label.problem@2}",
                                            RU:"{label.problem@2}"
                                        },{
                                            EN:"{label.problem@5}",
                                            RU:"{label.problem@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.problem@0} {label.asIf@0} {label.problem@1} {label.alsoUs@0} {label.however@0} {label.where@0} {label.cure@0} {label.whatToDo@0} {label.plan@0}",
                                            RU:"{label.problem@0} {label.asIf@0} {label.problem@1} {label.alsoUs@0} {label.however@0} {label.where@0} {label.cure@0} {label.whatToDo@0} {label.plan@0}"
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
                                            RU:"Выполните цели в указанном порядке:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Cercare e Proteggere {label.cure@2} {label.cure@1}",
                                                        EN:"Find and Protect {label.cure@2} {label.cure@1}",
                                                        RU:"Найти и защитить {label.cure@2} {label.cure@1}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogli {label.cure@2} {label.cure@1} e non farti mettere KO mentre la trasporti",
                                                        EN:"Pick up {label.cure@2} {label.cure@1} and don't get KO'd while carrying it",
                                                        RU:"Подберите {label.cure@2} {label.cure@1} и не получите нокаут, пока несёте"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape",
                                                        RU:"Бегство"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Tutti gli Eroi devono uscire dal Dungeon",
                                                        EN:"All Heroes must exit the Dungeon",
                                                        RU:"Все герои должны выйти из подземелья"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@2}",
                                                        EN:"{label.problem@2}",
                                                        RU:"{label.problem@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Prima di iniziare la partita, i giocatori scelgono 1 Eroe che verr&agrave; infettato {label.problem@3} {label.problem@4}. Posiziona un segnalino {symbol.corruptionToken} sulla Plancia di quell'Eroe per contrassegnarlo. Gli Eroi Infetti subiscono 1 Ferita all'inizio di ogni loro turno.",
                                                        EN:"Before starting the game, players choose 1 Hero to start infected {label.problem@3} {label.problem@4}. Place a {symbol.corruptionToken} token on that Hero's dashboard to mark this. Infected Heroes take 1 Wound at the start of each of their turns.",
                                                        RU:"Перед началом игры игроки выбирают 1 героя, который начнёт заражённым {label.problem@3} {label.problem@4}. Поместите жетон {symbol.corruptionToken} на планшет этого героя, чтобы это отметить. Заражённые герои получают 1 рану в начале каждого своего хода."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.problem@5}",
                                                        EN:"{label.problem@5}",
                                                        RU:"{label.problem@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Alla fine del turno di qualsiasi Eroe, se c'&egrave; almeno un Eroe infetto che condivide una Zona con Eroi non infetti, anche quegli Eroi non infetti vengono infettati {label.problem@3} {label.problem@4} (posizionare 1 segnalino {symbol.corruptionToken} sulla loro Plancia dell'Eroe per indicarlo), e da ora in poi subiscono anche loro gli effetti {label.problem@6} {label.problem@7}.",
                                                        EN:"At the end of any Hero's turn, if there is at least one infected Hero sharing a Zone with non-infected Heroes, those non-infected Heroes also become infected {label.problem@3} {label.problem@4} (place 1 {symbol.corruptionToken} token on their Hero's Dashboard to mark this), and from now on they suffer the Plague's effects as well.",
                                                        RU:"В конце хода любого героя, если хотя бы один заражённый герой делит зону с незаражёнными героями, эти незаражённые герои также заражаются {label.problem@3} {label.problem@4} (поместите 1 жетон {symbol.corruptionToken} на их планшет героя, чтобы это отметить), и с этого момента они также страдают от эффектов Чумы."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.cure:capital@2} {label.cure@1}...",
                                                        EN:"{label.cure:capital@2} {label.cure@1}...",
                                                        RU:"{label.cure:capital@2} {label.cure@1}..."
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.cure@2} {label.cure@1}. Qualsiasi Eroe che si trova {label.cure@3} pu&ograve; spendere 1 MP per raccoglierla e guadagnare immediatamente 5 PE. {label.cure:capital@2} {label.cure@1} pu&ograve; essere scambiata come un oggetto.",
                                                        EN:"The color-side-up Objective tokens represent {label.cure@2} {label.cure@1}. Any Hero standing {label.cure@3} may spend 1 MP to pick it up and immediately gain 5 XP. {label.cure:capital@2} {label.cure@1} may be traded as an item.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.cure@2} {label.cure@1}. Любой герой, находящийся {label.cure@3}, может потратить 1 ОД, чтобы подобрать его и сразу же получить 5 ОО. {label.cure:capital@2} {label.cure@1} можно обменивать как предмет."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.cure@2} {label.cure@1}. Qualsiasi Eroe che si trova {label.cure@3} pu&ograve; spendere 1 MP per raccoglierla. {label.cure:capital@2} {label.cure@1} pu&ograve; essere scambiata come un oggetto.",
                                                        EN:"The color-side-up Objective tokens represent {label.cure@2} {label.cure@1}. Any Hero standing {label.cure@3} may spend 1 MP to pick it up. {label.cure:capital@2} {label.cure@1} may be traded as an item.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.cure@2} {label.cure@1}. Любой герой, находящийся {label.cure@3}, может потратить 1 ОД, чтобы подобрать его. {label.cure:capital@2} {label.cure@1} можно обменивать как предмет."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"...&egrave; Fragile",
                                                        EN:"...is Fragile",
                                                        RU:"...хрупко"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Se un Eroe viene messo KO mentre trasporta {label.cure@2} {label.cure@1}, la Missione termina con la sconfitta.",
                                                        EN:"If a Hero is KO'd while carrying {label.cure@2} {label.cure@1}, the Mission ends in defeat.",
                                                        RU:"Если герой получает нокаут, неся {label.cure@2} {label.cure@1}, миссия заканчивается поражением."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga!",
                                                        EN:"Escape!",
                                                        RU:"Бегство!"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Dopo che {label.cure@2} {label.cure@1} &egrave; stata raccolta, qualsiasi Eroe pu&ograve; spendere 1 PM nella Zona del segnalini Obiettivo grigio per lasciare il Dungeon. Non appena tutti gli Eroi hanno lasciato il Dungeon, {label.questVictory@0}.",
                                                        EN:"After {label.cure@2} {label.cure@1} has been picked up, any Hero may spend 1 MP in the gray Objective token Zone to leave the Dungeon. As soon as all Heroes have left the Dungeon, {label.questVictory@0}.",
                                                        RU:"После того, как {label.cure@2} {label.cure@1} подобрано, любой герой может потратить 1 ОД в зоне серого жетона цели, чтобы покинуть подземелье. Как только все герои покинут подземелье, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "pathToRooms" ],
                                            gameMode: [ "theCure" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noInfection" ]
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0}, che blocca la fuga degli Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, which blocks the Heroes escape",
                                                    RU:"Устранить {boss.bossBadName@0}, который блокирует побег героев",
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo e {symbol.corruptionToken} dall'inventario degli Eroi. {label.problem:capital@2} non ha pi&ugrave; effetto.</p>",
                                            EN:"<p>Remove all Objective and {symbol.corruptionToken} tokens from the Heroes' inventories. {label.problem:capital@2} has no longer effect.</p>",
                                            RU:"<p>Удалите все жетоны цели и {symbol.corruptionToken} из инвентаря героев. {label.problem:capital@2} больше не действует.</p>"
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
                            forCampaign:[ ], // Uses specific level mobs
                            type:"grind",
                            objective:{
                                EN:"Eliminate very strong Mob Leaders to win.",
                                RU:"Устраните очень сильных предводителей мобов, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Ruthless Leaders\"",
                                EN:"Inspired by the Web Quest \"Ruthless Leaders\"",
                                RU:"Вдохновлено Web Quest «Ruthless Leaders»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                cause:[
                                                    {
                                                        IT:[ "Sappiamo che l'Oscurit&agrave;", "Oscura", "Oscuri", "il Signore dell'Oscurit&agrave;" ],
                                                        EN:[ "We know that the Darkness", "Dark", "Dark", "the Lord of the Darkness" ],
                                                        RU:[ "Мы знаем, что Тьма", "Тёмная", "Тёмные", "Владыка Тьмы" ]
                                                    },{
                                                        IT:[ "I Sacerdoti raccontano che l'Antico Monolite", "Arcana", "Arcani", "il Custode del Monolite" ],
                                                        EN:[ "The Priests say that the Ancient Monolith", "Arcane", "Arcane", "the Monolith Keeper" ],
                                                        RU:[ "Жрецы говорят, что Древний Монолит", "Тайная", "Тайные", "Хранитель Монолита" ]
                                                    },{
                                                        IT:[ "Lo abbiamo visto troppe volte. La Piaga Nera", "Corrotta", "Corrotti", "la Genesi della Piaga Nera" ],
                                                        EN:[ "We've seen it too many times. The Black Plague", "Corrupted", "Corrupted", "the Black Plague Genesis" ],
                                                        RU:[ "Мы видели это слишком много раз. Чёрная Чума", "Испорченная", "Испорченные", "Источник Чёрной Чумы" ]
                                                    }
                                                ],
                                                effect:[
                                                    {
                                                        IT:[ "ha il potere di corrompere e trasformare chiunque tocchi in mostri malvagi." ],
                                                        EN:[ "has the power to corrupt and transform anyone it touches into evil monsters." ],
                                                        RU:[ "обладает силой испортить и превратить любого, к кому прикоснётся, в злых монстров." ]
                                                    },{
                                                        IT:[ "riesce a impadronirsi delle anime, trasformando ogni essere vivente in belve senza senno." ],
                                                        EN:[ "manages to take over souls, transforming every living being into a senseless beast." ],
                                                        RU:[ "способна завладеть душами, превращая каждое живое существо в безмозглого зверя." ]
                                                    },{
                                                        IT:[ "si nutre del senno dei viventi, lasciando solo un guscio vuoto." ],
                                                        EN:[ "feeds on the wisdom of the living, leaving only an empty shell." ],
                                                        RU:[ "питается разумом живых, оставляя лишь пустую оболочку." ]
                                                    }
                                                ],
                                                but:[
                                                    {
                                                        IT:[ "Ma alcune creature sembrano nate malvagie, quindi diventano ancora pi&ugrave; crudeli e brutali.", "Progenie" ],
                                                        EN:[ "But some creatures just seem to be born evil, so they become even more cruel and brutal.", "Spawn" ],
                                                        RU:[ "Но некоторые существа словно рождены злыми, и становятся ещё более жестокими и зверскими.", "Отродье" ]
                                                    },{
                                                        IT:[ "Ma alcune creature ne hanno un piccolo frammento nel cuore, diventando creature spietate.", "Ferita" ],
                                                        EN:[ "But some creatures have a small fragment of it in their hearts, becoming ruthless creatures.", "Wound" ],
                                                        RU:[ "Но у некоторых существ есть малый осколок в их сердцах, делая их безжалостными созданиями.", "Рана" ]
                                                    },{
                                                        IT:[ "Ma alcune creature riescono a mantenere il controllo di se stessi, diventando freddi e sadici assassini.", "Coscienza" ],
                                                        EN:[ "But some creatures manage to maintain control of themselves, becoming cold and sadistic killers.", "Consciousness" ],
                                                        RU:[ "Но некоторые существа сохраняют контроль над собой, становясь холодными и садистскими убийцами.", "Сознание" ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "&egrave; qui che si possono trovare questi spietati portatori di morte", "Portatori" ],
                                                        EN:[ "It is here that these ruthless bringers of death can be found,", "Bringers" ],
                                                        RU:[ "Именно здесь можно найти этих безжалостных вестников смерти,", "Вестники" ]
                                                    },{
                                                        IT:[ "Qu&igrave; si radunano questi terribili assassini", "Assassini" ],
                                                        EN:[ "Here these terrible murderers gather,", "Murderers" ],
                                                        RU:[ "Здесь собираются эти ужасные убийцы,", "Убийцы" ]
                                                    },{
                                                        IT:[ "Questo &egrave; il covo di questi orribili criminali", "Criminali" ],
                                                        EN:[ "Here these terrible criminals gather,", "Criminals" ],
                                                        RU:[ "Здесь собираются эти ужасные преступники,", "Преступники" ]
                                                    }
                                                ],
                                                doing:[
                                                    {
                                                        IT:[ "alla guida dei loro servitori." ],
                                                        EN:[ "leading their minions around." ],
                                                        RU:[ "ведя за собой своих приспешников." ]
                                                    },{
                                                        IT:[ "seguiti dai loro di sottoposti." ],
                                                        EN:[ "followed by their subordinates." ],
                                                        RU:[ "сопровождаемые своими подчинёнными." ]
                                                    },{
                                                        IT:[ "circondati dai loro fedeli gregari." ],
                                                        EN:[ "surrounded by their faithful followers." ],
                                                        RU:[ "окружённые верными последователями." ]
                                                    }
                                                ],
                                                evaluate:[
                                                    {
                                                        IT:[ "Saranno pure un po' pi&ugrave; forti," ],
                                                        EN:[ "They might be a bit stronger," ],
                                                        RU:[ "Может, они и немного сильнее," ]
                                                    },{
                                                        IT:[ "Possono fare molta paura..." ],
                                                        EN:[ "They can be very scary..." ],
                                                        RU:[ "Они могут быть очень страшными..." ]
                                                    },{
                                                        IT:[ "Sembrano difficili da eliminare," ],
                                                        EN:[ "They seem difficult to eliminate," ],
                                                        RU:[ "Их кажется трудно устранить," ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                come:[
                                                    {
                                                        IT:[ "ma arriveremo preparati ad affrontarli." ],
                                                        EN:[ "but we will come prepared for them." ],
                                                        RU:[ "но мы придём подготовленными к встрече с ними." ]
                                                    },{
                                                        IT:[ "ma noi non saremo certo da meno." ],
                                                        EN:[ "but we will certainly not be outdone." ],
                                                        RU:[ "но мы тоже не уступим." ]
                                                    },{
                                                        IT:[ "ma sapremo dare filo da torcere." ],
                                                        EN:[ "but we will be able to give them a hard time." ],
                                                        RU:[ "но мы сможем задать им трудностей." ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"La {label.but:capital@1} {label.cause:capital@1}",
                                            EN:"The {label.cause:capital@1} {label.but:capital@1}",
                                            RU:"{label.cause:capital@1} {label.but:capital@1}"
                                        },{
                                            IT:"{label.enemies:capital@1} {label.cause:capital@2}",
                                            EN:"{label.cause:capital@2} {label.enemies:capital@1}",
                                            RU:"{label.cause:capital@2} {label.enemies:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.cause@0} {label.effect@0} {label.but@0} {label.enemies@0} {label.doing@0} {label.evaluate@0} {label.come@0}",
                                            RU:"{label.cause@0} {label.effect@0} {label.but@0} {label.enemies@0} {label.doing@0} {label.evaluate@0} {label.come@0}"
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
                                                        IT:"Sconfiggere i Comandanti",
                                                        EN:"Defeat the Leaders",
                                                        RU:"Победить предводителей"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere 2 Comandanti di livello 5",
                                                        EN:"Kill 2 Level 5 Leaders",
                                                        RU:"Убить 2 предводителей 5 уровня"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Inizio Rapido",
                                                        EN:"Jumpstart",
                                                        RU:"Быстрый старт"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Tutti gli eroi iniziano con 5 PE. Prima del primo round, esegui una Fase di Avanzamento, quindi gli eroi iniziano la prima Fase degli Eroi al livello 2.",
                                                        EN:"All Heroes start with 5 XP. Before the first round, perform a Level Up Phase, so Heroes start the 1st Hero Phase at Level 2.",
                                                        RU:"Все герои начинают с 5 ОО. Перед первым раундом выполните фазу повышения уровня, чтобы герои начали первую фазу героев на 2 уровне."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Comandanti Spietati",
                                                        EN:"Ruthless Leaders",
                                                        RU:"Безжалостные предводители"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I Comandanti di questo Dungeon sono pi&ugrave; brutali del solito. Invece del normale ammontare di Salute, i Comandanti ne hanno il doppio. Inoltre, se possibile, i Comandanti tirano sempre +1 {symbol.blackDie} in difesa e in attacco. Quando un Comandante viene ucciso, ogni Eroe guadagna 4 PE, invece dei soliti 2 PE. "+
                                                            "Una volta uccisi 2 Comandanti di livello 5, {label.questVictory@0}",
                                                        EN:"The Leaders of this Dungeon are more brutal than usual. Instead of their regular Health, Leaders have twice the amount of Health. Also, if possible, Leaders always roll +1 {symbol.blackDie} to defense and attack. When a Leader is killed, each Hero gains 4 XP, instead of the usual 2 XP. "+
                                                            "When 2 Level 5 Leaders have been killed, {label.questVictory@0}",
                                                        RU:"Предводители в этом подземелье более жестоки, чем обычно. Вместо обычного количества здоровья у предводителей удвоенное здоровье. Также, если возможно, предводители всегда бросают +1 {symbol.blackDie} в защите и атаке. Когда предводитель убит, каждый герой получает 4 ОО вместо обычных 2 ОО. "+
                                                            "Когда убито 2 предводителя 5 уровня, {label.questVictory@0}"
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roaming" ],
                                            gameMode: [ "arena" ],
                                            difficulty:[ "hard" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "square" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "noBridges" ],
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {label.cause@3}",
                                                    EN:"Defeat {label.cause@3}",
                                                    RU:"Победить {label.cause@3}",
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
                        },
                        {
                            forCampaign:[ "2shots", "full", "mini" ],
                            forActs:[1,2],
                            forMaps:[2],
                            type:"collect",
                            objective:{
                                EN:"Some zones apply element effects to Heroes. Eliminate a strong Roaming Monster to win.",
                                RU:"Некоторые зоны применяют стихийные эффекты к героям. Устраните сильного блуждающего монстра, чтобы победить."
                            },
                            variants:{
                                EN:"With custom fire/frost variants.",
                                RU:"С особыми вариантами огня/мороза."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Into the Flames of Hell\"",
                                EN:"Inspired by the Web Quest \"Into the Flames of Hell\"",
                                RU:"Вдохновлено Web Quest «Into the Flames of Hell»"
                            },
                            suggestedTilesCount:3,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[
                                                            "fire", "{symbol.fireToken}"," Gli eroi tirano {symbol.orangeDie} invece di {symbol.yellowDie} durante la risoluzione del {symbol.fireToken}.",
                                                            "il Signore Ardente", "La stanza del Signore Ardente", "L'influsso del Signore Ardente",
                                                            "il Dominatore del Fuoco", "La stanza del Dominatore del Fuoco", "Il Dominio del Fuoco",
                                                            "il Demone Fiammeggiante", "La stanza del Demone Fiammeggiante", "L'influsso Fiammeggiante",
                                                            "dalle fiamme", "in fiamme", "le fiamme si allarghino su tutta la capitale", "il fuoco",
                                                            "divorando ogni cosa", "al caldo", "a respirare",
                                                            "di quelle fiamme", "di Fuoco",
                                                            "Braceri", "Bracere", "il Fuoco",
                                                            "va a Fuoco",
                                                            "estinguere", "Estinguere", "estinguendo"
                                                        ],
                                                        EN:[
                                                            "fire", "{symbol.fireToken}", " Heroes roll {symbol.orangeDie} instead of {symbol.yellowDie} when resolving {symbol.fireToken}.",
                                                            "the Fiery Lord", "the Fiery Lord's Chamber", "The Fiery Lord's Presence",
                                                            "the Firebender", "The Firebender's Room", "Firebending",
                                                            "the Flaming Demon", "The Flaming Demon's Room", "The Flaming Influence",
                                                            "by flames", "on fire", "the flames from spreading throughout the capital", "the fire",
                                                            "devouring everything", "to the heat", "breathe",
                                                            "of those scorching flames", "Fire",
                                                            "Braziers", "Brazier", "the Fire",
                                                            "is on Fire",
                                                            "extinguish", "Quench",
                                                            "a", "extinguishing"
                                                        ],
                                                        RU:[
                                                            "fire", "{symbol.fireToken}", " Герои бросают {symbol.orangeDie} вместо {symbol.yellowDie} при разрешении {symbol.fireToken}.",
                                                            "Огненный Владыка", "комната Огненного Владыки", "Присутствие Огненного Владыки",
                                                            "Повелитель Огня", "комната Повелителя Огня", "Власть Огня",
                                                            "Пламенный Демон", "комната Пламенного Демона", "Пламенное Влияние",
                                                            "пламенем", "в огне", "пламени распространиться по всей столице", "огонь",
                                                            "пожирая всё", "к жару", "дышать",
                                                            "тех испепеляющих пламён", "Огня",
                                                            "Жаровни", "Жаровня", "Огонь",
                                                            "горит",
                                                            "потушить", "Погасить",
                                                            "a", "потушив"
                                                        ]
                                                    },{
                                                        IT:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "il Signore del Gelo", "La stanza del Signore del Gelo", "L'influsso del Signore del Gelo",
                                                            "il Dominatore Gelido", "La stanza del Dominatore Gelido", "Il Dominio del Gelo",
                                                            "il Demone Gelido", "La stanza del Demone Gelido", "L'influsso Gelido",
                                                            "dal gelo", "nella morsa del ghiaccio", "il ghiaccio invada la capitale", "il ghiaccio",
                                                            "immobilizzando ogni cosa", "al gelo", "a muoversi",
                                                            "di quel gelo", "di Ghiaccio",
                                                            "Cumuli di Ghiaccio", "Cumulo di Ghiaccio", "il Ghiaccio",
                                                            "&egrave; Ghiacciato",
                                                            "frantumare", "Frantumare", "frantumando"
                                                        ],
                                                        EN:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "the Frost Lord", "the Frost Lord's Chamber", "The Frost Lord's Presence",
                                                            "the Frostbender", "The Frostbender's room", "Frostbending",
                                                            "the Frost Demon", "The Frost Demon's Room", "The Frosting Influence",
                                                            "by frost", "in the grip of the ice", "the ice invades the capital", "the ice",
                                                            "immobilizing everything", "to the freeze", "to move",
                                                            "of that frost", "Ice",
                                                            "Heaps of Ice", "Heap of Ice", "the Ice",
                                                            "is Frozen",
                                                            "shatter", "Shatter",
                                                            "an", "shattering"
                                                        ],
                                                        RU:[
                                                            "frost", "{symbol.frostToken}","",
                                                            "Владыка Мороза", "комната Владыки Мороза", "Присутствие Владыки Мороза",
                                                            "Повелитель Льда", "комната Повелителя Льда", "Власть Льда",
                                                            "Морозный Демон", "комната Морозного Демона", "Морозное Влияние",
                                                            "морозом", "в тисках льда", "льду вторгнуться в столицу", "лёд",
                                                            "сковывая всё", "к холоду", "двигаться",
                                                            "того мороза", "Льда",
                                                            "Глыбы Льда", "Глыба Льда", "Лёд",
                                                            "замёрзло",
                                                            "разбить", "Разрушить",
                                                            "an", "разбивая"
                                                        ]
                                                    }
                                                ],
                                                place:[
                                                    {
                                                        IT:[ "Gli angoli pi&ugrave; oscuri dell'Aldil&agrave; sono consumati {label.hazard@12}.", "Per continuare la loro incursione nell'Aldil&agrave;," ],
                                                        EN:[ "The darkest corners of Afterlife are consumed {label.hazard@12}.", "To continue their incursion on Afterlife," ],
                                                        RU:[ "Самые тёмные уголки Загробного Мира поглощены {label.hazard@12}.", "Чтобы продолжить вторжение в Загробный Мир," ]
                                                    },{
                                                        IT:[ "Il tempio al centro della citt&agrave; &egrave; {label.hazard@13}.", "Per evitare che {label.hazard@14}," ],
                                                        EN:[ "The temple in the center of the city is {label.hazard@13}.", "To prevent {label.hazard@14}," ],
                                                        RU:[ "Храм в центре города {label.hazard@13}.", "Чтобы не дать {label.hazard@14}," ]
                                                    },{
                                                        IT:[ "I rintocchi di una campana echeggiano per i corridoi. In un attimo, il dungeon &egrave; invaso {label.hazard@12}.", "Prima che gli Eroi possano fuggire," ],
                                                        EN:[ "The tolling of a bell echoes through the corridors. In an instant, the dungeon is engulfed {label.hazard@12}.", "Before the Heroes can escape," ],
                                                        RU:[ "Звон колокола эхом разносится по коридорам. В одно мгновение подземелье охвачено {label.hazard@12}.", "Прежде чем герои смогут сбежать," ]
                                                    }
                                                ],
                                                flames:[
                                                    {
                                                        IT:[ "{label.hazard:capital@15} corre lungo i corridoi e le pareti." ],
                                                        EN:[ "{label.hazard:capital@15} runs along the corridors and walls." ],
                                                        RU:[ "{label.hazard:capital@15} бежит вдоль коридоров и стен." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sembra serpeggiare ovunque, {label.hazard@16}." ],
                                                        EN:[ "{label.hazard:capital@15} seems to snake everywhere, {label.hazard@16}." ],
                                                        RU:[ "{label.hazard:capital@15} словно вьётся повсюду, {label.hazard@16}." ]
                                                    },{
                                                        IT:[ "{label.hazard:capital@15} sta inghiottendo ogni cosa senza piet&agrave;." ],
                                                        EN:[ "{label.hazard:capital@15} is consuming everything with no mercy." ],
                                                        RU:[ "{label.hazard:capital@15} поглощает всё без пощады." ]
                                                    }
                                                ],
                                                enemies:[
                                                    {
                                                        IT:[ "Le creature dell'Oscurit&agrave; sono abituate {label.hazard@17}," ],
                                                        EN:[ "Creatures from Darkness are used {label.hazard@17}," ],
                                                        RU:[ "Создания Тьмы привыкли {label.hazard@17}," ]
                                                    },{
                                                        IT:[ "Un incantesimo di protezione difende i mostri," ],
                                                        EN:[ "A protection spell defends the monsters," ],
                                                        RU:[ "Заклинание защиты бережёт монстров," ]
                                                    },{
                                                        IT:[ "I nemici sembrano non subire alcun effetto," ],
                                                        EN:[ "Enemies appear to be unaffected," ],
                                                        RU:[ "Враги, кажется, не страдают от эффектов," ]
                                                    }
                                                ],
                                                suffer:[
                                                    {
                                                        IT:[ "ma gli Eroi resistono a fatica." ],
                                                        EN:[ "but the Heroes barely resist." ],
                                                        RU:[ "но герои едва выдерживают." ]
                                                    },{
                                                        IT:[ "ma gli Eroi riescono a malapena {label.hazard@18}." ],
                                                        EN:[ "but the Heroes can barely {label.hazard@18}." ],
                                                        RU:[ "но герои едва могут {label.hazard@18}." ]
                                                    },{
                                                        IT:[ "ma gli Eroi sono invece in gran difficolt&agrave;." ],
                                                        EN:[ "but the Heroes are instead in great difficulty." ],
                                                        RU:[ "но герои, напротив, в большой беде." ]
                                                    }
                                                ],
                                                objective:[
                                                    {
                                                        IT:[ "gli Eroi devono sconfiggere la fonte {label.hazard@19}" ],
                                                        EN:[ "the Heroes must defeat the source {label.hazard@19}" ],
                                                        RU:[ "герои должны победить источник {label.hazard@19}" ]
                                                    },{
                                                        IT:[ "gli Eroi devono eliminare il responsabile" ],
                                                        EN:[ "the Heroes must eliminate the person responsible" ],
                                                        RU:[ "герои должны устранить виновного" ]
                                                    },{
                                                        IT:[ "gli Eroi devono affrontare chi ha causato tutto questo" ],
                                                        EN:[ "the Heroes must face who caused all this" ],
                                                        RU:[ "герои должны встретиться с тем, кто всё это вызвал" ]
                                                    }
                                                ],
                                                enemy:[
                                                    {
                                                        IT:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ],
                                                        EN:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ],
                                                        RU:[ "{label.hazard@3}", "{label.hazard@4}", "{label.hazard@5}" ]
                                                    },{
                                                        IT:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ],
                                                        EN:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ],
                                                        RU:[ "{label.hazard@6}", "{label.hazard@7}", "{label.hazard@8}" ]
                                                    },{
                                                        IT:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ],
                                                        EN:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ],
                                                        RU:[ "{label.hazard@9}", "{label.hazard@10}", "{label.hazard@11}" ]
                                                    }
                                                ],
                                                target:[
                                                    {
                                                        IT:[ "{label.hazard@21}", "{label.hazard@22}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@21}", "{label.hazard@22}", "the", "the", "all", "a", "that" ],
                                                        RU:[ "{label.hazard@21}", "{label.hazard@22}", "", "", "все", "", "то" ]
                                                    },{
                                                        IT:[ "Fontane {label.hazard@20}", "Fontana {label.hazard@20}", "le", "la", "tutte le", "una", "quella" ],
                                                        EN:[ "{label.hazard@20} Fountains", "{label.hazard@20} Fountain", "the", "the", "all", "{label.hazard@27}", "that" ],
                                                        RU:[ "Фонтаны {label.hazard@20}", "Фонтан {label.hazard@20}", "", "", "все", "{label.hazard@27}", "тот" ]
                                                    },{
                                                        IT:[ "Pozzi {label.hazard@20}", "Pozzo {label.hazard@20}", "i", "il", "tutti i", "un", "quel" ],
                                                        EN:[ "{label.hazard@20} Pits", "{label.hazard@20} Pit", "the", "the", "all", "{label.hazard@27}", "that" ],
                                                        RU:[ "Ямы {label.hazard@20}", "Яма {label.hazard@20}", "", "", "все", "{label.hazard@27}", "та" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a {label.hazard@25} {label.target@4} {label.target@0}", "{label.hazard@27} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}" ],
                                                        EN:[ "to {label.hazard@25} {label.target@4} {label.target@2} {label.target@0}", "{label.hazard@28} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}"],
                                                        RU:[ "{label.hazard@25} {label.target@4} {label.target@2} {label.target@0}", "{label.hazard@28} {label.collectOptionalItems@3} {label.target@0}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.target@2} {label.target@0}",
                                            RU:"{label.target@2} {label.target@0}"
                                        },{
                                            EN:"{label.enemy:capital@0}",
                                            RU:"{label.enemy:capital@0}"
                                        },{
                                            EN:"{label.target:capital@2} {tokensCount.objective} {label.target@0}",
                                            RU:"{label.target:capital@2} {tokensCount.objective} {label.target@0}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.place@0} {label.flames@0} {label.enemies@0} {label.suffer@0} {label.place@1} {label.objective@0}: {label.enemy@0}.",
                                            RU:"{label.place@0} {label.flames@0} {label.enemies@0} {label.suffer@0} {label.place@1} {label.objective@0}: {label.enemy@0}."
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
                                                        IT:"{label.hazard:capital@25} {label.target@2} {label.target@0}",
                                                        EN:"{label.hazard:capital@25} {label.target@2} {label.target@0}",
                                                        RU:"{label.hazard:capital@25} {label.target@2} {label.target@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"{label.hazard@26} {label.target@4} {label.target@0} nel Dungeon",
                                                        EN:"{label.hazard@26} {label.target@4} {label.target@0} in the Dungeon",
                                                        RU:"{label.hazard@26} {label.target@4} {label.target@0} в подземелье"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} nel Dungeon",
                                                        EN:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} in the Dungeon",
                                                        RU:"{label.hazard@26} {label.collectOptionalItems@2} {label.target@0} в подземелье"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Sconfiggere {label.enemy@0}",
                                                        EN:"Defeat {label.enemy@0}",
                                                        RU:"Победить {label.enemy@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Uccidere {label.enemy@0}",
                                                        EN:"Kill {label.enemy@0}",
                                                        RU:"Убить {label.enemy@0}"
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
                                                        RU:"Особая подготовка"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Evoca un Mostro Errante di livello 5 sul segnalino Corruzione {symbol.corruptionToken} e rimuovi il segnalino. Rimuovi le sue carte dagli altri mazzi dei Mostri Erranti.",
                                                        EN:"Spawn a Level 5 Roaming Monster on the Corruption token {symbol.corruptionToken} and remove the token. Remove its cards on the other Roaming Monster decks.",
                                                        RU:"Призовите блуждающего монстра 5 уровня на жетон Порчи {symbol.corruptionToken} и удалите жетон. Удалите его карты из других колод блуждающих монстров."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"Evoca {label.campaignBoss@0} sul segnalino Corruzione {symbol.corruptionToken} e rimuovi il segnalino. Rimuovi le sue carte dagli altri mazzi dei Mostri Erranti.",
                                                        EN:"Spawn {label.campaignBoss@0} on the Corruption token {symbol.corruptionToken} and remove the token. Remove its cards on the other Roaming Monster decks.",
                                                        RU:"Призовите {label.campaignBoss@0} на жетон Порчи {symbol.corruptionToken} и удалите жетон. Удалите его карты из других колод блуждающих монстров."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy:capital@1}",
                                                        RU:"{label.enemy:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.enemy:capital@0} non si attiva e non pu&ograve; essere bersaglio di alcun attacco, capacit&agrave; o abilit&agrave; e n&eacute; subire Ferite finch&eacute; la sua Camera non viene rivelata. Quando {label.enemy@0} viene sconfitto {label.questVictory@0}.",
                                                        EN:"{label.enemy:capital@0} does not activate and cannot be the target of any attack, skill, or ability, nor take Wounds until its Chamber has been revealed. When {label.enemy@0} is defeated, {label.questVictory@0}.",
                                                        RU:"{label.enemy:capital@0} не активируется и не может быть целью атак, умений или способностей, а также получать раны до тех пор, пока его комната не будет раскрыта. Когда {label.enemy@0} побеждён, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.enemy@2}",
                                                        RU:"{label.enemy@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I nemici non subiscono {label.hazard@1}. Se un nemico avrebbe dovuto prendere un segnalino {label.hazard@1}, scartalo.{label.hazard@2}",
                                                        EN:"Enemies don't take {label.hazard@1}. If an Enemy would take a {label.hazard@1} token, discard that token instead.{label.hazard@2}",
                                                        RU:"Враги не получают {label.hazard@1}. Если враг должен был получить жетон {label.hazard@1}, сбросьте этот жетон вместо этого.{label.hazard@2}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.hazard:capital@25} {label.hazard@23}",
                                                        EN:"{label.hazard:capital@25} {label.hazard@23}",
                                                        RU:"{label.hazard:capital@25} {label.hazard@23}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.target@2} {label.target@0}. Qualsiasi Eroe in una Zona con un segnalino Obiettivo pu&ograve; spendere un'azione per {label.hazard@25} {label.target@6} {label.target@1}, rimuovendo il segnalino dal Dungeon.",
                                                        EN:"Objective tokens represent {label.target@2} {label.target@0}. Any Hero in a Zone with an Objective token can spend one action to {label.hazard@25} {label.target@6} {label.target@1}, removing the token from the Dungeon.",
                                                        RU:"Жетоны цели представляют {label.target@2} {label.target@0}. Любой герой в зоне с жетоном цели может потратить действие, чтобы {label.hazard@25} {label.target@6} {label.target@1}, удалив жетон из подземелья."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.target@2} {label.target@0}. Qualsiasi Eroe in una Zona con un segnalino Obiettivo pu&ograve; spendere un'azione per {label.hazard@25} {label.target@6} {label.target@1}, rimuovendo il segnalino dal Dungeon e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"Objective tokens represent {label.target@2} {label.target@0}. Any Hero in a Zone with an Objective token can spend one action to {label.hazard@25} {label.target@6} {label.target@1}, removing the token from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        RU:"Жетоны цели представляют {label.target@2} {label.target@0}. Любой герой в зоне с жетоном цели может потратить действие, чтобы {label.hazard@25} {label.target@6} {label.target@1}, удалив жетон из подземелья, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Questo Dungeon {label.hazard@24}",
                                                        EN:"This Dungeon {label.hazard@24}",
                                                        RU:"Это подземелье {label.hazard@24}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni volta che un Eroe entra in una Zona con uno o pi&ugrave; segnalini {label.hazard@1}, rimuovete quei segnalini. Poi quell'Eroe prende un pari numero di segnalini {label.hazard@1}. Se un eroe termina il suo turno nel raggio di {symbol.rangeMagic} da {label.target@5} {label.target@1}, prende 1 {label.hazard@1}.",
                                                        EN:"Whenever a Hero enters a Zone with one or more {label.hazard@1} token, remove that tokens. Then that Hero takes the same amount of {label.hazard@1} tokens. If a Hero ends their turn in {symbol.rangeMagic} range from {label.target@5} {label.target@1}, they take 1 {label.hazard@1}.",
                                                        RU:"Каждый раз, когда герой входит в зону с одним или несколькими жетонами {label.hazard@1}, удалите эти жетоны. Затем этот герой получает столько же жетонов {label.hazard@1}. Если герой заканчивает ход в радиусе {symbol.rangeMagic} от {label.target@5} {label.target@1}, он получает 1 {label.hazard@1}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom-small" ],
                                            gameMode: [ "elementalLord" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elemental" ],
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Eliminare {boss.bossBadName@0} e porre fine al suo piano",
                                                    EN:"Eliminate {boss.bossBadName@0} and put an end to its plan",
                                                    RU:"Устранить {boss.bossBadName@0} и положить конец его плану"
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
                            forCampaign:[ ], // Uses large maps and one-shot level cap.
                            type:"collect",
                            objective:{
                                EN:"Reach the highest level and eliminate Roaming Monsters to win.",
                                RU:"Достигните наивысшего уровня и устраните блуждающих монстров, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Diabolic Challenge\"",
                                EN:"Inspired by the Web Quest \"Diabolic Challenge\"",
                                RU:"Вдохновлено Web Quest «Diabolic Challenge»"
                            },
                            suggestedTilesCount:6,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                discover:[
                                                    {
                                                        IT:[ "Dopo aver passato l'intera vita sul campo di battaglia abbiamo finalmente scoperto come porre fine a questa infinita spirale di violenza.", "L'Ultima Spira" ],
                                                        EN:[ "After spending our entire lives on the battlefield we have finally discovered how to put an end to this endless spiral of violence.", "The Last Spire" ],
                                                        RU:[ "Проведя всю жизнь на поле боя, мы наконец узнали, как положить конец этой бесконечной спирали насилия.", "Последний Виток" ],
                                                    },{
                                                        IT:[ "Abbiamo chiuso gli occhi alla verit&agrave; per troppo tempo, per paura di doverla affrontare.", "Aprire gli Occhi" ],
                                                        EN:[ "We have closed our eyes to the truth for too long, for fear of having to face it.", "Opened Eyes" ],
                                                        RU:[ "Мы слишком долго закрывали глаза на истину, боясь столкнуться с ней.", "Открытые глаза" ],
                                                    },{
                                                        IT:[ "Le parole dell'Oracolo continuavano a rimbalzarci per la testa. Ormai sapevamo la verit&agrave;.", "La Verit&agrave;" ],
                                                        EN:[ "The Oracle's words kept bouncing around our heads. By now we knew the truth.", "The Truth" ],
                                                        RU:[ "Слова Оракула продолжали звучать в наших головах. Теперь мы знали истину.", "Истина" ],
                                                    }
                                                ],
                                                event:[
                                                    {
                                                        IT:[
                                                            "Una dinastia millenaria di generali oscuri e sanguinari trama nell'ombra affinch&eacute; questa guerra non abbia mai fine, inviando senza sosta i loro eserciti nelle nostre citt&agrave; per piegarci al loro volere.",
                                                            "i", "Generali", "Stendardi del Sangue", "che indeboliscono i soldati alleati che combattono nelle citt&agrave;", "lo Stendardo"
                                                        ],
                                                        EN:[
                                                            "A thousand-year-old dynasty of dark and bloodthirsty generals plots in the shadows to ensure this war never ends, relentlessly sending their armies into our cities to bend us to their will.",
                                                            "the", "Generals", "Blood Banners", "which weaken allied soldiers fighting in the cities", "the Banner"
                                                        ],
                                                        RU:[
                                                            "Тысячелетняя династия тёмных и кровожадных генералов плетёт интриги в тенях, чтобы эта война никогда не кончалась, неустанно посылая свои армии в наши города, чтобы подчинить нас своей воле.",
                                                            "", "Генералы", "Кровавые Знамёна", "которые ослабляют союзных воинов, сражающихся в городах", "Знамя"
                                                        ],
                                                    },{
                                                        IT:[
                                                            "I nostri nemici si erano nascosti in una grotta naturale formatasi proprio vicino il villaggio, dal quale inviavano in un attimo e senza sosta le loro truppe di mostri sanguinari.",
                                                            "gli", "Strateghi", "Mappe dei Tunnel", "usate dai nemici per invadere il villaggio", "la Mappa"
                                                        ],
                                                        EN:[
                                                            "Our enemies were hiding in a natural cave formed right near the village, from which they sent their troops of bloodthirsty monsters in an instant and without stopping.",
                                                            "the", "Strategists", "Tunnel Maps", "used by enemies to invade the village", "the Map"
                                                        ],
                                                        RU:[
                                                            "Наши враги прятались в природной пещере, образовавшейся прямо возле деревни, откуда они мгновенно и без остановки посылали свои отряды кровожадных монстров.",
                                                            "", "Стратеги", "Карты Туннелей", "используемые врагами для вторжения в деревню", "Карта"
                                                        ],
                                                    },{
                                                        IT:[
                                                            "Alla nascita, siamo stati maledetti dalla setta degli Sciamani a una vita di sangue e metallo. Siamo stati derubati della pace e della felicit&agrave; e la vita ci ha trasformato in inarrestabili macchine da guerra.",
                                                            "i", "Gran Sciamani", "Radici del Male", "che si nutrono dell'ira degli Eroi", "la Radice"
                                                        ],
                                                        EN:[
                                                            "At birth, we were cursed by the Shamans to a life of blood and metal. We have been robbed of peace and happiness and life has turned us into unstoppable war machines.",
                                                            "the", "Great Shamans", "Roots of Evil", "who feed on the wrath of the Heroes", "the Root"
                                                        ],
                                                        RU:[
                                                            "При рождении мы были прокляты Шаманами на жизнь крови и металла. Нас лишили мира и счастья, и жизнь превратила нас в неудержимые машины войны.",
                                                            "", "Великие Шаманы", "Корни Зла", "которые питаются гневом героев", "Корень"
                                                        ],
                                                    }
                                                ],
                                                pray:[
                                                    {
                                                        IT:[ "Possa la Luce proteggerci," ],
                                                        EN:[ "May the Light protect us," ],
                                                        RU:[ "Да защитит нас Свет," ],
                                                    },{
                                                        IT:[ "Che la Giustizia guidi la nostra mano," ],
                                                        EN:[ "May Justice guide our hands," ],
                                                        RU:[ "Пусть Справедливость направляет наши руки," ],
                                                    },{
                                                        IT:[ "Per loro non ci sar&agrave; un nuovo giorno," ],
                                                        EN:[ "For them there will be no new day," ],
                                                        RU:[ "Для них не будет нового дня," ],
                                                    }
                                                ],
                                                plan:[
                                                    {
                                                        IT:[ "perch&eacute; oggi porremo fine a tutto questo" ],
                                                        EN:[ "because today we will put an end to all this" ],
                                                        RU:[ "потому что сегодня мы положим всему этому конец" ],
                                                    },{
                                                        IT:[ "perch&eacute; oggi risolveremo la questione una volta per tutte" ],
                                                        EN:[ "because today we will resolve the issue once and for all" ],
                                                        RU:[ "потому что сегодня мы решим вопрос раз и навсегда" ],
                                                    },{
                                                        IT:[ "perch&eacute; risolveremo il problema alla radice" ],
                                                        EN:[ "because we will solve the problem at the root" ],
                                                        RU:[ "потому что мы решим проблему в корне" ],
                                                    }
                                                ],
                                                action:[
                                                    {
                                                        IT:[ "cercando i responsabili e distruggendoli!" ],
                                                        EN:[ "seeking the leaders and destroying them!" ],
                                                        RU:[ "найдя предводителей и уничтожив их!" ],
                                                    },{
                                                        IT:[ "eliminandoli!" ],
                                                        EN:[ "eliminating them!" ],
                                                        RU:[ "устранив их!" ],
                                                    },{
                                                        IT:[ "spazzando via chiunque ci sia dietro!" ],
                                                        EN:[ "wiping out whoever is behind it!" ],
                                                        RU:[ "сметая всех, кто за этим стоит!" ],
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.event:capital@1} {label.event@2}",
                                            RU:"{label.event:capital@1} {label.event@2}"
                                        },{
                                            EN:"{label.event:capital@3}",
                                            RU:"{label.event:capital@3}"
                                        },{
                                            EN:"{label.discover@1}",
                                            RU:"{label.discover@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.discover@0} {label.event@0} {label.pray@0} {label.plan@0} {label.action@0}",
                                            RU:"{label.discover@0} {label.event@0} {label.pray@0} {label.plan@0} {label.action@0}"
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
                                                        IT:"Sconfiggere {label.event@1} {label.event@2}",
                                                        EN:"Defeat {label.event@1} {label.event@2}",
                                                        RU:"Победить {label.event@1} {label.event@2}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Eliminare 2 Mostri Erranti di livello 5",
                                                        EN:"Kill 2 Level 5 Roaming Monsters",
                                                        RU:"Убить 2 блуждающих монстров 5 уровня"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.event@3}",
                                                        RU:"{label.event@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo rappresentano {label.event@3} {label.event@4}. Qualsiasi Eroe che si trova nella Zona di un segnalino Obiettivo pu&ograve; spendere 1 azione per distruggere {label.event@5} (rimuovere il segnalino dal Dungeon), poi ogni Eroe guadagna 5 PE.",
                                                        EN:"Objective tokens represent {label.event@3} {label.event@4}. Any Hero standing in an Objective token's Zone may spend 1 action to destroy {label.event@5} (remove the token from the Dungeon), then each Hero gains 5 XP.",
                                                        RU:"Жетоны цели представляют {label.event@3} {label.event@4}. Любой герой, находящийся в зоне жетона цели, может потратить 1 действие, чтобы уничтожить {label.event@5} (удалите жетон из подземелья), затем каждый герой получает 5 ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.event:capital@1} {label.event@2}",
                                                        EN:"{label.event:capital@1} {label.event@2}",
                                                        RU:"{label.event:capital@1} {label.event@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta eliminati i 2 {label.event@2}, {label.questVictory@0}.",
                                                        EN:"When the 2 {label.event@2}, {label.questVictory@0}.",
                                                        RU:"Когда 2 {label.event@2}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "largeMaze" ],
                                            gameMode: [ "largeTargets" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "largeMaze" ],
                                        }
                                    ],
                                    boss:{
                                        rules:[
                                            {
                                                type:"objective",
                                                name:{
                                                    IT:"Sconfiggere {boss.bossBadName@0}",
                                                    EN:"Defeat {boss.bossBadName@0}",
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina il Signore del Labirinto, {boss.bossBadName@0}",
                                                    EN:"Eliminate the Lord of the Maze, {boss.bossBadName@0}",
                                                    RU:"Устраните Владыку Лабиринта, {boss.bossBadName@0}"
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
                            forMaps:[0,1],
                            forActs:[1,2],
                            type:"collect",
                            objective:{
                                EN:"Collect some items to unlock the exit. Reach the exit zone to win.",
                                RU:"Соберите предметы, чтобы открыть выход. Достигните зоны выхода, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Hardcore Trial\"",
                                EN:"Inspired by the Web Quest \"Hardcore Trial\"",
                                RU:"Вдохновлено Web Quest «Hardcore Trial»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                situation:[
                                                    {
                                                        IT: [ "Tutto &egrave; andato in malora." ],
                                                        EN: [ "Everything has gone to hell." ],
                                                        RU: [ "Всё пошло прахом." ]
                                                    },{
                                                        IT: [ "Ecco la nostra solita sfortuna." ],
                                                        EN: [ "That's our usual bad luck." ],
                                                        RU: [ "Вот наша обычная неудача." ]
                                                    },{
                                                        IT: [ "Maledizione!" ],
                                                        EN: [ "Damn!" ],
                                                        RU: [ "Проклятье!" ]
                                                    }
                                                ],
                                                encore1:[
                                                    {
                                                        IT:[ "Chi pensava che fosse finita avrebbe fatto meglio a ripensarci." ],
                                                        EN:[ "Anyone who thought it was over had better think again." ],
                                                        RU:[ "Тому, кто думал, что всё кончено, лучше передумать." ]
                                                    },{
                                                        IT:[ "Avremmo dovuto dare retta a quella Veggente!" ],
                                                        EN:[ "We should have listened to that Seer!" ],
                                                        RU:[ "Надо было послушать ту Провидицу!" ]
                                                    },{
                                                        IT:[ "Tutta colpa di quella vecchia Mappa Maledetta!" ],
                                                        EN:[ "It's all the fault of that old Cursed Map!" ],
                                                        RU:[ "Это всё из-за той старой Проклятой Карты!" ]
                                                    }
                                                ],
                                                blocked1:[
                                                    {
                                                        IT:[ "Siamo bloccati qui, nel profondo di questo luogo infernale,", "il domatore delle fiamme" ],
                                                        EN:[ "We're stuck here, deep down in this infernal place,", "the flame tamer" ],
                                                        RU:[ "Мы застряли здесь, глубоко в этом адском месте,", "укротитель пламени" ]
                                                    },{
                                                        IT:[ "Ci siamo persi in queste segrete,", "il Signore delle Segrete" ],
                                                        EN:[ "We got lost in these dungeons,", "the Lord of the Dungeons" ],
                                                        RU:[ "Мы заблудились в этих темницах,", "Владыка Темниц" ]
                                                    },{
                                                        IT:[ "Eccoci nel freddo e nel buio,", "che riposa nelle tenebre" ],
                                                        EN:[ "Here we are in the cold and in the dark,", "that rests in the darkness" ],
                                                        RU:[ "Вот мы в холоде и тьме,", "что покоится во мраке" ]
                                                    }
                                                ],
                                                blocked2:[
                                                    {
                                                        IT:[ "dove la nostra luce brilla a fatica e l'Oscurit&agrave; nasconde le sue bestie pi&ugrave; temibili." ],
                                                        EN:[ "where our light can hardly shine and the Darkness keeps its greatest beasts armed to the teeth." ],
                                                        RU:[ "где наш свет едва пробивается, а Тьма держит своих самых грозных зверей во всеоружии." ]
                                                    },{
                                                        IT:[ "pronti per diventare cibo per le bestie che si aggirano per questo labirinto." ],
                                                        EN:[ "ready to become food for the beasts that roam this labyrinth." ],
                                                        RU:[ "готовые стать пищей для зверей, бродящих по этому лабиринту." ]
                                                    },{
                                                        IT:[ "a combattere le nostre paure con le poche forze rimaste." ],
                                                        EN:[ "to fight our fears with the little strength left." ],
                                                        RU:[ "бороться со своими страхами оставшимися силами." ]
                                                    }
                                                ],
                                                encore2:[
                                                    {
                                                        IT:[ "Gi&agrave;... sta per mettersi male quaggi&ugrave;." ],
                                                        EN:[ "Yeah, it's about to get ugly down here." ],
                                                        RU:[ "Да... здесь скоро станет совсем плохо." ]
                                                    },{
                                                        IT:[ "Non eravamo pronti ad affrontare tutto questo..." ],
                                                        EN:[ "We weren't ready to face all this..." ],
                                                        RU:[ "Мы не были готовы столкнуться со всем этим..." ]
                                                    },{
                                                        IT:[ "Ma non c'&egrave; tempo per rimuginare." ],
                                                        EN:[ "But there's no time to brood." ],
                                                        RU:[ "Но нет времени размышлять." ]
                                                    }
                                                ],
                                                better:[
                                                    {
                                                        IT:[ "Sar&agrave; meglio {label.passage@0} {label.passage@1} {label.passage@2} che abbiamo trovato... e in fretta!" ],
                                                        EN:[ "We'd better {label.passage@0} {label.passage@1} {label.passage@2} we've found... and fast!" ],
                                                        RU:[ "Лучше {label.passage@0} {label.passage@1} {label.passage@2}, который мы нашли... и поскорее!" ]
                                                    },{
                                                        IT:[ "Dobbiamo sbrigarci a {label.passage@0} {label.passage@1} {label.passage@2}!" ],
                                                        EN:[ "We have to hurry to {label.passage@0} {label.passage@1} {label.passage@2}!" ],
                                                        RU:[ "Нам нужно поспешить {label.passage@0} {label.passage@1} {label.passage@2}!" ]
                                                    },{
                                                        IT:[ "Possiamo solo provare a {label.passage@0} {label.passage@1} {label.passage@2}... Non c'&egrave; tempo da perdere!" ],
                                                        EN:[ "We can only try to {label.passage@0} {label.passage@1} {label.passage@2}... There is no time to lose!" ],
                                                        RU:[ "Мы можем только попытаться {label.passage@0} {label.passage@1} {label.passage@2}... Нет времени терять!" ]
                                                    }
                                                ],
                                                passage:[
                                                    {
                                                        IT:[ "sbloccare", "quel", "passaggio segreto", "Passaggio Segreto", "il", "un", "nella Zona del Passaggio Segreto", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "secret passage", "Secret Passage", "the", "a", "in the Secret Passage Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        RU:[ "разблокировать", "тот", "секретный проход", "Секретный Проход", "", "", "в зоне Секретного Прохода", "заблокирован", "через него", "Чтобы открыть его", "открыт", "открыть", "расположен" ]
                                                    },{
                                                        IT:[ "sbloccare", "quella", "botola nascosta", "Botola Nascosta", "la", "una", "nella Zona della Botola Nascosta", "&egrave; bloccata", "attraverso di essa", "Per aprirla", "&egrave; aperta", "aprire", "situata" ],
                                                        EN:[ "unlock", "that", "hidden trap door", "Hidden Trap Door", "the", "a", "in the Hidden Trap Door Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        RU:[ "разблокировать", "тот", "скрытый люк", "Скрытый Люк", "", "", "в зоне Скрытого Люка", "заблокирован", "через него", "Чтобы открыть его", "открыт", "открыть", "расположен" ]
                                                    },{
                                                        IT:[ "sbloccare", "quel", "passaggio per le fogne", "Passaggio per le Fogne", "il", "un", "nella Zona del Passaggio per le Fogne", "&egrave; bloccato", "attraverso di esso", "Per aprirlo", "&egrave; aperto", "aprire", "situato" ],
                                                        EN:[ "unlock", "that", "passage through the sewers", "Passage through the Sewers", "the", "a", "in the Passage through the Sewers Zone", "it is locked", "through it", "To open it", "is open", "open", "located" ],
                                                        RU:[ "разблокировать", "тот", "проход через канализацию", "Проход через Канализацию", "", "", "в зоне Прохода через Канализацию", "заблокирован", "через него", "Чтобы открыть его", "открыт", "открыть", "расположен" ]
                                                    }
                                                ],
                                                door:[
                                                    {
                                                        IT:[ "Porta di Pietra", "Porte di Pietra", "la", "le", "vengono sbloccate", "sono bloccate", "e possono essere aperte", "sbloccare" ],
                                                        EN:[ "Stone Door", "Stone Doors", "the", "the", "get unlocked", "are locked", "and may be opened", "unlock" ],
                                                        RU:[ "Каменная Дверь", "Каменные Двери", "", "", "разблокируются", "заблокированы", "и могут быть открыты", "разблокировать" ]
                                                    },{
                                                        IT:[ "Muro di Fuoco", "Muri di Fuoco", "il", "i", "vengono disattivati", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Fire Wall", "Fire Walls", "the", "the", "get deactivated", "can't be passed", "become doors that can be opened", "deactivate" ],
                                                        RU:[ "Огненная Стена", "Огненные Стены", "", "", "деактивируются", "непроходимы", "становятся дверями, которые можно открыть", "деактивировать" ]
                                                    },{
                                                        IT:[ "Sbarre di Metallo", "Sbarre di Metallo", "le", "le", "vengono abbassate", "non possono essere attraversate", "diventando porte che possono essere aperte", "disattivare" ],
                                                        EN:[ "Metal Bars", "Metal Bars", "the", "the", "are lowered", "can't be passed", "become doors that can be opened", "deactivate" ],
                                                        RU:[ "Металлические Решётки", "Металлические Решётки", "", "", "опускаются", "непроходимы", "становятся дверями, которые можно открыть", "деактивировать" ]
                                                    }
                                                ],
                                                key:[
                                                    {
                                                        IT:[ "Chiave di Pietra", "Chiavi di Pietra", "la", "le", "in una zona con una Chiave di Pietra", "di una", "per usarla", "per raccoglierla", "tutte" ],
                                                        EN:[ "Keystone", "Keystones", "the", "the", "in a Zone with a Keystone", "a", "to use it", "", "all" ],
                                                        RU:[ "Каменный Ключ", "Каменные Ключи", "", "", "в зоне с Каменным Ключом", "", "чтобы использовать его", "", "все" ]
                                                    },{
                                                        IT:[ "Gemma Cromata", "Gemme Cromate", "la", "le", "in una zona con una Gemma Cromata", "di una", "per usarla", "per raccoglierla", "tutte" ],
                                                        EN:[ "Chrome Gem", "Chrome Gems", "the", "the", "in a Zone with a Chrome Gem", "a", "to use it", "", "all" ],
                                                        RU:[ "Хромированный Самоцвет", "Хромированные Самоцветы", "", "", "в зоне с Хромированным Самоцветом", "", "чтобы использовать его", "", "все" ]
                                                    },{
                                                        IT:[ "Pezzo del Puzzle", "Pezzi del Puzzle", "il", "i", "in una zona con un Pezzo del Puzzle", "di un", "per usarlo", "per raccoglierlo", "tutti" ],
                                                        EN:[ "Puzzle Piece", "Puzzle Pieces", "the", "the", "in a Zone with a Puzzle Piece", "a", "to use it", "", "all" ],
                                                        RU:[ "Кусок Головоломки", "Куски Головоломки", "", "", "в зоне с Куском Головоломки", "", "чтобы использовать его", "", "все" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                collectOptionalItems:[
                                                    {
                                                        IT:[ "a raccoggliere {label.key@8} {label.key@3} {label.key@1}", "raccogliendo {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}" ],
                                                        EN:[ "to collect {label.key@8} {label.key@3} {label.key@1}", "collecting {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}"],
                                                        RU:[ "собрать {label.key@8} {label.key@3} {label.key@1}", "собрав {label.collectOptionalItems@3} {label.key@1}", "{tokensCount.objective}" ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.key:capital@3} {label.key:capital@1}",
                                            RU:"{label.key:capital@3} {label.key:capital@1}"
                                        },{
                                            EN:"{label.passage:capital@1} {label.passage@3}",
                                            RU:"{label.passage:capital@1} {label.passage@3}"
                                        },{
                                            EN:"{label.door:capital@3} {label.door@1}",
                                            RU:"{label.door:capital@3} {label.door@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.situation@0} {label.encore1@0} {label.blocked1@0} {label.blocked2@0} {label.encore2@0} {label.better@0}",
                                            RU:"{label.situation@0} {label.encore1@0} {label.blocked1@0} {label.blocked2@0} {label.encore2@0} {label.better@0}"
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
                                                        IT:"{label.door:capital@7} {label.door@3} {label.door@1}",
                                                        EN:"{label.door:capital@7} {label.door@3} {label.door@1}",
                                                        RU:"{label.door:capital@7} {label.door@3} {label.door@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Rivelare tutte le Camere nella tessera iniziale ({tileLabel.first})",
                                                        EN:"Reveal all Chambers in the starting Tile ({tileLabel.first})",
                                                        RU:"Раскрыть все комнаты на стартовой плитке ({tileLabel.first})"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Collezionare {label.key@3} {label.key@1}",
                                                        EN:"Collect {label.key@3} {label.key@1}",
                                                        RU:"Собрать {label.key@3} {label.key@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere {label.key@3} {label.key@1}",
                                                        EN:"Pick up {label.key@3} {label.key@1}",
                                                        RU:"Подобрать {label.key@3} {label.key@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                        EN:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                        RU:"{label.passage:capital@11} {label.passage@4} {label.passage@3}",
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.key@3} {label.key@1} nei luoghi indicati",
                                                        EN:"Use {label.key@3} {label.key@1} in the indicated locations",
                                                        RU:"Использовать {label.key@3} {label.key@1} в указанных местах"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire",
                                                        EN:"Escape",
                                                        RU:"Бегство"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Scappare attraverso {label.passage@4} {label.passage@3}",
                                                        EN:"Escape through {label.passage@4} {label.passage@3}",
                                                        RU:"Сбежать через {label.passage@4} {label.passage@3}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Rinforzi dell'Oscurit&agrave;",
                                                        EN:"Reinforcements of Darkness",
                                                        RU:"Подкрепление Тьмы"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Ogni segnalino Corruzione {symbol.corruptionToken} rappresenta una Zona di generazione dei Mostri Erranti e non &egrave; influenzato dalle carte Porta. Quando la sua Camera viene rivelata, oltre alla generazione regolare, generare un Mostro Errante nella Zona dei segnalini Corruzione, quindi scartare il segnalino.",
                                                        EN:"Each Corruption token {symbol.corruptionToken} represents a Roaming Monster spawn Zone and is not affected by Door cards. When its Chamber is revealed, in addition to the regular spawn, spawn a Roaming Monster in the Corruption token Zone, then discard the token.",
                                                        RU:"Каждый жетон Порчи {symbol.corruptionToken} представляет зону появления блуждающего монстра и не зависит от карт Дверей. Когда его комната раскрыта, в дополнение к обычному появлению, призовите блуждающего монстра в зону жетона Порчи, затем сбросьте жетон."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.door:capital@3} {label.door@1}",
                                                        RU:"{label.door:capital@3} {label.door@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte contrassegnate da un contorno rosso rappresentano {label.door@3} {label.door@1}. Queste porte {label.door@5}. Non appena tutte le Camere con almeno 1 Zona nella Tessera iniziale ({tileLabel.first}) sono state rivelate, {label.door@3} {label.door@1} {label.door@4} {label.door@6} come solito.",
                                                        EN:"The doors marked with a red outline represent {label.door@3} {label.door@1}. These doors {label.door@5}. As soon as all Chambers with at least 1 Zone in the starting Tile ({tileLabel.first}) have been revealed, {label.door@3} {label.door@1} {label.door@4} and {label.door@6} as usual.",
                                                        RU:"Двери с красным контуром представляют {label.door@3} {label.door@1}. Эти двери {label.door@5}. Как только все комнаты, имеющие хотя бы 1 зону на стартовой плитке ({tileLabel.first}), будут раскрыты, {label.door@3} {label.door@1} {label.door@4} и {label.door@6} как обычно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.key:capital@3} {label.key@1}",
                                                        RU:"{label.key:capital@3} {label.key@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.key@3} {label.key@1}. Qualsiasi Eroe che si trova {label.key@4} pu&ograve; spendere 1 PM {label.key@7}.",
                                                        EN:"The color-side-up Objective tokens represent {label.key@3} {label.key@1}. Any Hero standing {label.key@4} may spend 1 MP to pick it up.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.key@3} {label.key@1}. Любой герой, находящийся {label.key@4}, может потратить 1 ОД, чтобы подобрать его."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato a faccia in su rappresentano {label.key@3} {label.key@1}. Qualsiasi Eroe che si trova {label.key@4} pu&ograve; spendere 1 PM {label.key@7} e tutti gli Eroi guadagnano {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.key@3} {label.key@1}. Any Hero standing {label.key@4} may spend 1 MP to pick it up and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.key@3} {label.key@1}. Любой герой, находящийся {label.key@4}, может потратить 1 ОД, чтобы подобрать его, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.passage:capital@4} {label.passage@3}",
                                                        RU:"{label.passage:capital@4} {label.passage@3}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"C'&egrave; {label.passage@5} {label.passage@3} che conduce fuori da questo Dungeon, {label.passage@12} nella Zona con il segnalino Tempo {symbol.timeToken} in una Camera della Tessera iniziale ({tileLabel.first}), ma {label.passage@7}. {label.passage@9}, gli Eroi devono usare {label.key@3} {label.key@1} nei posti corretti, indicate dai segnalini Obiettivo grigi. Per farlo, un qualsiasi Eroe in possesso {label.key@5} {label.key@0} e che si trova in una zona con un segnalino obiettivo grigio, pu&ograve; spendere 1 PM {label.key@6} (scartare sia il segnalino Obiettivo sul lato grigio che quello sul lato colorato). Non appena tutti i segnalini Obiettivo grigi sono stati rimossi, {label.passage@4} {label.passage@3} {label.passage@10}.",
                                                        EN:"There is {label.passage@5} {label.passage@3} that leads out of this Dungeon, {label.passage@12} in the Zone with the Time token {symbol.timeToken} of a Chamber of the starting Tile ({tileLabel.first}), but {label.passage@7}. {label.passage@9}, the Heroes must use {label.key@3} {label.key@1} in the correct locations, indicated by the gray Objective tokens. To do so, any Hero holding {label.key@5} {label.key@0} and standing in a gray Objective token Zone may spend 1 MP {label.key@6} (discard both gray and color-side-up Objective tokens). As soon as all gray Objective tokens have been removed, {label.passage@4} {label.passage@3} {label.passage@10}.",
                                                        RU:"Есть {label.passage@5} {label.passage@3}, ведущий из этого подземелья, {label.passage@12} в зоне с жетоном Времени {symbol.timeToken} в комнате стартовой плитки ({tileLabel.first}), но {label.passage@7}. {label.passage@9}, герои должны использовать {label.key@3} {label.key@1} в нужных местах, отмеченных серыми жетонами цели. Для этого любой герой, владеющий {label.key@5} {label.key@0} и находящийся в зоне с серым жетоном цели, может потратить 1 ОД {label.key@6} (сбросьте оба жетона цели: серый и цветной). Как только все серые жетоны цели удалены, {label.passage@4} {label.passage@3} {label.passage@10}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"La Fuga",
                                                        EN:"Escape",
                                                        RU:"Бегство"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Una volta che {label.passage@4} {label.passage@3} {label.passage@10}, qualsiasi Eroe che si trova {label.passage@6} pu&ograve; fuggire {label.passage@8} spendendo 1 PM. Una volta che tutti gli Eroi sono fuggiti, {label.questVictory@0}.",
                                                        EN:"Once {label.passage@4} {label.passage@3} {label.passage@10}, any Hero standing {label.passage@6} may escape {label.passage@8} by spending 1 MP. Once all Heroes have escaped, {label.questVictory@0}.",
                                                        RU:"Как только {label.passage@4} {label.passage@3} {label.passage@10}, любой герой, находящийся {label.passage@6}, может сбежать {label.passage@8}, потратив 1 ОД. Как только все герои сбежали, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "unlockAndEscape" ],
                                            gameMode: [ "unlockAndEscape" ],
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, {label.blocked1@1}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.blocked1@1}",
                                                    RU:"Устраните {boss.bossBadName@0}, {label.blocked1@1}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>Rimuovere tutti i segnalini Obiettivo dall'inventario degli Eroi.</p>",
                                            EN:"<p>Remove all Objective tokens from the Heroes' inventories.</p>",
                                            RU:"<p>Удалите все жетоны цели из инвентаря героев.</p>"
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
                            type:"defuse",
                            objective:{
                                EN:"Unlock the exit and reach it to win.",
                                RU:"Откройте выход и достигните его, чтобы победить."
                            },
                            variants:{
                                EN:"With custom fire/frost variants.",
                                RU:"С особыми вариантами огня/мороза."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Glacial Inferno\"",
                                EN:"Inspired by the Web Quest \"Glacial Inferno\"",
                                RU:"Вдохновлено Web Quest «Glacial Inferno»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                hazard:[
                                                    {
                                                        IT:[ "frost", "{symbol.frostToken}", "di ghiaccio...", "ghiacciato", "glaciale", "Trappole di Ghiaccio", "incubo ghiacciato", "Corruzione del Gelo", "scongelare", "ghiacciati", "rompere il ghiaccio", "ghiacciate", "glaciali" ],
                                                        EN:[ "frost", "{symbol.frostToken}", "of ice...", "frozen", "glacial", "Ice Traps", "frost nightmare", "Ice Corruption", "unfreeze", "frozen", "break the ice", "frozen", "glacial" ],
                                                        RU:[ "frost", "{symbol.frostToken}", "льда...", "замёрзший", "ледяной", "Ледяные Ловушки", "морозный кошмар", "Ледяная Порча", "разморозить", "замёрзшие", "разбить лёд", "замёрзшие", "ледяные" ]
                                                    },{
                                                        IT:[ "fire", "{symbol.fireToken}", "di fuoco...", "ardente", "fiammeggiante", "Trappole di Fuoco" , "incubo fiammeggiante", "Corruzione del Fuoco", "estinguere", "ardenti", "estinguere il fuoco", "ardenti", "fiammeggianti" ],
                                                        EN:[ "fire", "{symbol.fireToken}", "of fire...", "burning", "flaming", "Fire Traps" , "burning nightmare", "Fire Corruption", "extinguish", "burning", "extinguish the fire", "burning", "flaming" ],
                                                        RU:[ "fire", "{symbol.fireToken}", "огня...", "горящий", "пламенный", "Огненные Ловушки", "горящий кошмар", "Огненная Порча", "потушить", "горящие", "потушить огонь", "горящие", "пламенные" ]
                                                    }
                                                ],
                                                time:[
                                                    {
                                                        IT:[ "Ora che l'Oscurit&agrave; &egrave; stata contenuta e sconfitta,"],
                                                        EN:[ "With Darkness contained and defeated," ],
                                                        RU:[ "Когда Тьма сдержана и побеждена," ]
                                                    },{
                                                        IT:[ "La missione &egrave; compiuta e"],
                                                        EN:[ "The mission is accomplished and" ],
                                                        RU:[ "Миссия выполнена, и" ]
                                                    },{
                                                        IT:[ "Tutto &egrave; andato a rotoli e"],
                                                        EN:[ "Everything is gone to pieces and" ],
                                                        RU:[ "Всё пошло прахом, и" ]
                                                    }
                                                ],
                                                placeLeave:[
                                                    {
                                                        IT:[ "gli Eroi devono abbandonare l'Inferno", "Inferno", "Inferno", "dall'Inferno", "dell'Inferno" ],
                                                        EN:[ "the Heroes now must leave Hell", "Hell", "Inferno", "the Hell", "of the Hell" ],
                                                        RU:[ "герои теперь должны покинуть Ад", "Ад", "Преисподняя", "Ада", "Ада" ]
                                                    },{
                                                        IT:[ "gli Eroi devono fuggire dal Labirinto", "Labirinto", "Dedalo", "dal Labirinto", "del Labirinto" ],
                                                        EN:[ "the Heroes must escape from the Maze", "Maze", "Labyrinth", "the Labyrinth", "of the Labyrinth" ],
                                                        RU:[ "герои должны сбежать из Лабиринта", "Лабиринт", "Лабиринт", "Лабиринта", "Лабиринта" ]
                                                    },{
                                                        IT:[ "gli Eroi devono svignarsela dal Tempio", "Tempio", "Cattetrale", "dal Tempio", "del Tempio" ],
                                                        EN:[ "the Heroes must escape from the Temple", "Temple", "Cathedral", "the Temple", "of the Temple" ],
                                                        RU:[ "герои должны улизнуть из Храма", "Храм", "Собор", "Храма", "Храма" ]
                                                    }
                                                ],
                                                placeThrough:[
                                                    {
                                                        IT:[ "attraverso un angolo dimenticato e {label.hazard@4} di questo posto." ],
                                                        EN:[ "through a forgotten and {label.hazard@3} corner of this place." ],
                                                        RU:[ "через забытый и {label.hazard@3} угол этого места." ]
                                                    },{
                                                        IT:[ "attraversando i suoi corridoi, ora {label.hazard@9}." ],
                                                        EN:[ "crossing its corridors, now {label.hazard@9}." ],
                                                        RU:[ "пересекая его коридоры, теперь {label.hazard@9}." ]
                                                    },{
                                                        IT:[ "superando le sue {label.hazard@5}." ],
                                                        EN:[ "surpassing its {label.hazard@5}." ],
                                                        RU:[ "минуя его {label.hazard@5}." ]
                                                    }
                                                ],
                                                exitPlace:[
                                                    {
                                                        IT:[ "L'uscita si nasconde dietro" ],
                                                        EN:[ "The exit lies behind" ],
                                                        RU:[ "Выход скрыт за" ]
                                                    },{
                                                        IT:[ "Tra gli Eroi e la libert&agrave; si ergono" ],
                                                        EN:[ "Between the Heroes and freedom stands" ],
                                                        RU:[ "Между героями и свободой стоят" ]
                                                    },{
                                                        IT:[ "Ad attenderli ci sono" ],
                                                        EN:[ "Waiting for them, there are" ],
                                                        RU:[ "Их ждут" ]
                                                    }
                                                ],
                                                exitAppearance:[
                                                    {
                                                        IT:[ "decine e decine di strati" ],
                                                        EN:[ "dozen of layers" ],
                                                        RU:[ "десятки слоёв" ]
                                                    },{
                                                        IT:[ "muri invalicabili" ],
                                                        EN:[ "impassable walls" ],
                                                        RU:[ "непроходимые стены" ]
                                                    },{
                                                        IT:[ "imponenti colonne" ],
                                                        EN:[ "imposing columns" ],
                                                        RU:[ "величественные колонны" ]
                                                    }
                                                ],
                                                holes:[
                                                    {
                                                        IT:[ "i Geyser", "geyser", "il Geyser", "un Geyser", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Geysers", "geysers", "the Geyser", "a Geyser" ],
                                                        RU:[ "Гейзеры", "гейзеры", "Гейзер", "Гейзер" ]
                                                    },{
                                                        IT:[ "gli Interruttori", "interruttori", "l'Interruttore", "un Interruttore", "i", "{label.hazard@9}", "riattivato" ],
                                                        EN:[ "the Switches", "switches", "the Switch", "a Switch" ],
                                                        RU:[ "Переключатели", "переключатели", "Переключатель", "Переключатель" ]
                                                    },{
                                                        IT:[ "le Leve", "leve", "la Leva", "una Leva", "le", "{label.hazard@11}", "riattivata" ],
                                                        EN:[ "the Lever", "levers", "the Lever", "a Lever" ],
                                                        RU:[ "Рычаги", "рычаги", "Рычаг", "Рычаг" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                noTraps:[
                                                    {
                                                        IT:[ "eliminare tutte le {label.hazard@5}", "rimuovendo tutte le Trappole con Spuntoni" ],
                                                        EN:[ "clear all the {label.hazard@5}", "removing all the Spike Traps" ],
                                                        RU:[ "очистить все {label.hazard@5}", "убрав все шипастые ловушки" ],
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            IT:"{label.placeLeave@2} {label.hazard@4}",
                                            EN:"{label.hazard@4} {label.placeLeave@2}",
                                            RU:"{label.hazard@4} {label.placeLeave@2}"
                                        },{
                                            IT:"{label.holes:capital@0} {label.holes:capital@5}",
                                            EN:"{label.hazard@9} {label.holes:capital@1}",
                                            RU:"{label.hazard@9} {label.holes:capital@1}"
                                        },{
                                            IT:"Fuga {label.placeLeave:capital@3}",
                                            EN:"Escape From {label.placeLeave:capital@3}",
                                            RU:"Бегство из {label.placeLeave:capital@3}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.time@0} {label.placeLeave@0} {label.placeThrough@0} {label.exitPlace@0} {label.exitAppearance@0} {label.hazard@2}",
                                            RU:"{label.time@0} {label.placeLeave@0} {label.placeThrough@0} {label.exitPlace@0} {label.exitAppearance@0} {label.hazard@2}"
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
                                            RU:"Выполните цели в указанном порядке:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.hazard:capital@8} {label.holes@0}",
                                                        RU:"{label.hazard:capital@8} {label.holes@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Riattivare {label.holes@4} {tokensCount.objective} {label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"Activate the {tokensCount.objective} {label.hazard:capital@9} {label.holes:capital@1}",
                                                        RU:"Активировать {tokensCount.objective} {label.hazard:capital@9} {label.holes:capital@1}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        IT:"Fuggire {label.placeLeave@3} {label.hazard:capital@3}",
                                                        EN:"Escape the {label.hazard:capital@3} {label.placeLeave@1}",
                                                        RU:"Сбежать из {label.hazard:capital@3} {label.placeLeave@1}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Fuggire con tutti gli Eroi",
                                                        EN:"Escape with all Heroes",
                                                        RU:"Сбежать со всеми героями"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@5}",
                                                        RU:"{label.hazard@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Durante la preparazione, posiziona 1 segnalino {label.hazard@1} su ciascuna Trappola con Spuntoni nel Dungeon. Oltre all'effetto della Trappola con Spuntoni, l'Eroe che l'ha attivata prende il segnalino {label.hazard@1} (anche non ha subito alcuna ferita).",
                                                        EN:"During Setup, place 1 {label.hazard@1} token on each Spike Trap in the Dungeon. In addition to the Spike Trap effect, the Hero who activated it takes the {label.hazard@1} token (even if they took no Wounds).",
                                                        RU:"Во время подготовки поместите 1 жетон {label.hazard@1} на каждую шипастую ловушку в подземелье. Помимо эффекта шипастой ловушки, герой, активировавший её, получает жетон {label.hazard@1} (даже если он не получил ран)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"{label.holes:capital@1} {label.holes:capital@5}",
                                                        EN:"{label.hazard:capital@11} {label.holes:capital@1}",
                                                        RU:"{label.hazard:capital@11} {label.holes:capital@1}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon e ogni Eroe guadagna 5 PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon and each Hero gains 5 XP.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.hazard:capital@3} {label.holes:capital@1}. Любой герой, находящийся в зоне с этими жетонами цели, может потратить 1 действие, чтобы {label.hazard@10} и пробудить {label.holes@2}. Когда {label.holes@3} пробуждён, удалите жетон из подземелья, и каждый герой получает 5 ОО."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.hazard:capital@3} {label.holes:capital@1}. Любой герой, находящийся в зоне с этими жетонами цели, может потратить 1 действие, чтобы {label.hazard@10} и пробудить {label.holes@2}. Когда {label.holes@3} пробуждён, удалите жетон из подземелья."
                                                    }
                                                ],
                                                miniCampaignExplanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo con il lato colorato verso l'alto rappresentano {label.holes@3} {label.hazard:capital@3}. Qualsiasi Eroe che si trova in una Zona con questi segnalini Obiettivo pu&ograve; spendere 1 azione per {label.hazard@10} e riattivare {label.holes@2}. Quando {label.holes@3} viene {label.holes@6}, rimuovi il segnalino dal Dungeon e ogni eroe guadagna {label.miniCampaignObjectivesXp:split:tokensCount.objective} PE.",
                                                        EN:"The color-side-up Objective tokens represent {label.hazard:capital@3} {label.holes:capital@1}. Any Hero standing in a Zone with these Objective tokens may spend 1 action to {label.hazard@10} and awake {label.holes@2}. When {label.holes@3} is awakened, remove the token from the Dungeon and all Heroes gets {label.miniCampaignObjectivesXp:split:tokensCount.objective} XP.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.holes@3} {label.hazard:capital@3}. Любой герой, находящийся в зоне с этими жетонами цели, может потратить 1 действие, чтобы {label.hazard@10} и пробудить {label.holes@2}. Когда {label.holes@3} пробуждён, удалите жетон из подземелья, и все герои получают {label.miniCampaignObjectivesXp:split:tokensCount.objective} ОО."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Porte {label.hazard:capital@11}",
                                                        EN:"{label.hazard:capital@11} Doors",
                                                        RU:"{label.hazard:capital@11} двери"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Le porte con il bordo rosso non possono essere aperte finch&eacute; non rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto nel Dungeon. Non appena nel Dungeon rimane solo 1 segnalino Obiettivo con il lato colorato rivolto verso l'alto, le porte possono essere aperte normalmente.",
                                                        EN:"The doors with a red border can't be opened until there is just 1 color-side-up Objective token left on the Dungeon. As soon as there is just 1 color-side-up Objective token left on the Dungeon the doors can be opened as usual.",
                                                        RU:"Двери с красной каймой нельзя открыть, пока в подземелье не останется только 1 жетон цели цветной стороной вверх. Как только в подземелье останется только 1 жетон цели цветной стороной вверх, двери можно открывать как обычно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Mostri {label.hazard:capital@12}",
                                                        EN:"{label.hazard:capital@12} Monsters",
                                                        RU:"{label.hazard:capital@12} монстры"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I mostri sembrano essersi adattati a questo {label.hazard@6}. Durante questa Missione, segui queste regole speciali per i nemici:<ul>"+
                                                        "<li>I nemici non possono prendere segnalini {label.hazard@1}.</li>"+
                                                        "<li>Quando generi un Nemico, posiziona 1 segnalino {label.hazard@1} sulla sua arma o sulla sua statistica dei dadi di Attacco. La prima volta che un Nemico infligge 1 o pi&ugrave; Ferite a un Eroe, quell'Eroe prende il segnalino {label.hazard@1} di quel Nemico.</li>"+
                                                        "</ul>",
                                                        EN:"Monsters seem to have adapted themselves to this {label.hazard@6}. During this Mission, follow these special rules for Enemies:<ul>"+
                                                        "<li>Enemies can't take {label.hazard@1} tokens.</li>"+
                                                        "<li>When spawning an Enemy, place 1 {label.hazard@1} token on its weapon or Attack dice stat. The first time an Enemy deals 1 or more Wounds to a Hero, that Hero takes this Enemy's {label.hazard@1} token.</li>"+
                                                        "</ul>",
                                                        RU:"Монстры, похоже, приспособились к этому {label.hazard@6}. Во время этой миссии следуйте этим особым правилам для врагов:<ul>"+
                                                        "<li>Враги не могут получать жетоны {label.hazard@1}.</li>"+
                                                        "<li>При призыве врага поместите 1 жетон {label.hazard@1} на его оружие или статистику кубиков атаки. Когда враг впервые наносит 1 или более ран герою, этот герой получает жетон {label.hazard@1} этого врага.</li>"+
                                                        "</ul>"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.hazard@7}",
                                                        RU:"{label.hazard@7}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Quando la Camera con il token {symbol.corruptionToken} viene rivelata, genera un Mostro Errante nella Zona del segnalino {symbol.corruptionToken}, quindi rimuovi il segnalino dal Dungeon. Non pescare una carta Porta per questa Camera, ma genera le Orde come di solito.",
                                                        EN:"When the Chamber with the {symbol.corruptionToken} token is revealed, spawn a Roaming Monster in the {symbol.corruptionToken} token Zone, then remove the token from the Dungeon. Do not draw a Door card for this Chamber, but spawn Mobs as usual.",
                                                        RU:"Когда комната с жетоном {symbol.corruptionToken} раскрыта, призовите блуждающего монстра в зону жетона {symbol.corruptionToken}, затем удалите жетон из подземелья. Не тяните карту Двери для этой комнаты, но призывайте мобов как обычно."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        IT:"Fuga",
                                                        EN:"Escape",
                                                        RU:"Бегство"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Qualsiasi Eroe nella Zona del segnalino Obiettivo grigio pu&ograve; spendere 1 PM per uscire dal Dungeon. Una volta che tutti gli Eroi sono usciti, {label.questVictory@0}.",
                                                        EN:"Any Hero on the gray Objective token Zone may spend 1 MP to exit the Dungeon. Once all Heroes have exited, {label.questVictory@0}.",
                                                        RU:"Любой герой в зоне серого жетона цели может потратить 1 ОД, чтобы выйти из подземелья. Как только все герои вышли, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "adventureAndBoss" ],
                                            difficulty:[ "default" ],
                                            roomLimits:[ "default" ],
                                            roomsMerges:[ "default" ],
                                            skin:[ "default" ],
                                            size: [ "default" ],
                                            bridges:[ "default" ],
                                            lootRatio: [ "default" ],
                                            corridors: [ "elementalTrapExit" ],
                                        }
                                    ],
                                    campaign:[
                                        {
                                            forCampaign:[ "full", "mini" ],
                                            sideQuests:[
                                                { tags:[
                                                    [ "visitAllRooms", "noTraps" ]
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, guardia {label.placeLeave@4}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.placeLeave@3} guardian",
                                                    RU:"Устраните {boss.bossBadName@0}, стража {label.placeLeave@3}"
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
                            forMaps:[0,1],
                            type:"shards",
                            objective:{
                                EN:"Heroes gain resources for every Leader or Roaming Monster killed or collecting tokens. Reach a resource quota to win.",
                                RU:"Герои получают ресурсы за каждого убитого предводителя или блуждающего монстра либо за сбор жетонов. Наберите норму ресурсов, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Heaven's Secret Door\"",
                                EN:"Inspired by the Web Quest \"Heaven's Secret Door\"",
                                RU:"Вдохновлено Web Quest «Heaven's Secret Door»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                purpose:[
                                                    {
                                                        IT:[ "Gli eroi stavano cercando un modo per tornare in superficie quando" ],
                                                        EN:[ "As the heroes try to find their way to the surface," ],
                                                        RU:[ "Когда герои пытались найти путь на поверхность," ]
                                                    },{
                                                        IT:[ "Gli eroi erano caduti in trappola e non avevamo via di scampo, ma ad un tratto" ],
                                                        EN:[ "The heroes had fallen into a trap and they had no escape, but suddenly" ],
                                                        RU:[ "Герои попали в ловушку, и у них не было пути к спасению, но вдруг" ]
                                                    },{
                                                        IT:[ "Il ponte che dava verso l'uscita era crollato e per gli eroi non c'era via di scampo. Ma, d'improvviso," ],
                                                        EN:[ "The bridge leading to the exit had collapsed and there was no escape for the heroes. But, suddenly," ],
                                                        RU:[ "Мост, ведущий к выходу, обрушился, и для героев не было пути к спасению. Но вдруг," ]
                                                    }
                                                ],
                                                gate:[
                                                    {
                                                        IT:[ "un portale apparve di fronte a loro."],
                                                        EN:[ "a portal appeared in front of them." ],
                                                        RU:[ "перед ними появился портал." ]
                                                    },{
                                                        IT:[ "un'ombra apparve dietro una grata."],
                                                        EN:[ "a portal appeared in front of them." ],
                                                        RU:[ "за решёткой появилась тень." ]
                                                    },{
                                                        IT:[ "videro qualcosa muoversi dietro le macerie di un passaggio crollato."],
                                                        EN:[ "they saw something move behind the rubble of a collapsed passage." ],
                                                        RU:[ "они увидели, как что-то движется за обломками обрушившегося прохода." ]
                                                    }
                                                ],
                                                missionVoiceEvent:[
                                                    {
                                                        IT:[ "Presto! Non c'&egrave; tempo da perdere!"],
                                                        EN:[ "Quickly! There is no time!" ],
                                                        RU:[ "Быстрее! Нет времени!" ]
                                                    },{
                                                        IT:[ "Hey, voi! Ascoltatemi!"],
                                                        EN:[ "Hey, you! Listen to me!" ],
                                                        RU:[ "Эй, вы! Слушайте меня!" ]
                                                    },{
                                                        IT:[ "Vi ho trovato, finalmente! Ascoltate!"],
                                                        EN:[ "I found you, finally! Listen!" ],
                                                        RU:[ "Наконец-то я вас нашёл! Слушайте!" ]
                                                    }
                                                ],
                                                missionVoicePassage:[
                                                    {
                                                        IT:[ "Sto cercando di aprire questo passaggio perch&egrave; voi possiate raggiungerci!" ],
                                                        EN:[ "I'm trying to open this passage so you can reach us!" ],
                                                        RU:[ "Я пытаюсь открыть этот проход, чтобы вы могли добраться до нас!" ]
                                                    },{
                                                        IT:[ "Prover&ograve; ad aprire questo passaggio e farvi uscire da qui!" ],
                                                        EN:[ "I'll try to open this passage and get you out of here!" ],
                                                        RU:[ "Я попробую открыть этот проход и вытащить вас отсюда!" ]
                                                    },{
                                                        IT:[ "Cercher&ograve; di aprire questo passaggio per voi..." ],
                                                        EN:[ "I'll try to open this passage for you..." ],
                                                        RU:[ "Я попробую открыть этот проход для вас..." ]
                                                    }
                                                ],
                                                missionVoiceStory:[
                                                    {
                                                        IT:[ "Ma ho bisogno del vostro aiuto per ricomporre {label.artifact@1}, ora in frantumi." ],
                                                        EN:[ "But I will need your help to reforge {label.artifact@1} that has had {label.shard@6} and pieces scattered." ],
                                                        RU:[ "Но мне понадобится ваша помощь, чтобы перековать {label.artifact@1}, у которого {label.shard@6} и куски разбросаны." ]
                                                    },{
                                                        IT:[ "Ma non lo far&ograve; senza nulla in cambio. Portatemi {label.artifact@1}... dovrete ricostruirlo riunendo {label.shard@6}!" ],
                                                        EN:[ "But I won't do it with nothing in return. Bring me {label.artifact@1}... you'll have to rebuild it from {label.shard@6}!" ],
                                                        RU:[ "Но я не сделаю этого без ничего взамен. Принесите мне {label.artifact@1}... вам придётся собрать его из {label.shard@6}!" ]
                                                    },{
                                                        IT:[ "Ma ho bisogno che prima voi riuniate {label.shard@1} per ricomporre {label.artifact@1}!" ],
                                                        EN:[ "But I need you to collect {label.shard@1} to rebuild {label.artifact@1} first!" ],
                                                        RU:[ "Но сначала мне нужно, чтобы вы собрали {label.shard@1}, чтобы восстановить {label.artifact@1}!" ]
                                                    }
                                                ],
                                                missionVoice:[
                                                    {
                                                        IT:[ "Dall'altra parte sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "From the other side, they hear a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        RU:[ "С другой стороны они услышали голос: «{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}»" ]
                                                    },{
                                                        IT:[ "Qualcuno dall'altra parte bisbigli&ograve;: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "Someone on the other end whispered: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        RU:[ "Кто-то с другой стороны прошептал: «{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}»" ]
                                                    },{
                                                        IT:[ "Poco dopo, sentirono una voce: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\""],
                                                        EN:[ "Shortly after, they heard a voice: \"{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}\"" ],
                                                        RU:[ "Вскоре они услышали голос: «{label.missionVoiceEvent@0} {label.missionVoicePassage@0} {label.missionVoiceStory@0}»" ]
                                                    }
                                                ],
                                                mission:[
                                                    {
                                                        EN:[ "{label.missionVoice@0}" ],
                                                        RU:[ "{label.missionVoice@0}" ]
                                                    }
                                                ],
                                                artifact:[
                                                    {
                                                        IT:[ "l'Artefatto", "l'Artefatto Etereo", "l'artefatto", "dell'artefatto distrutto", "viene forgiato" ],
                                                        EN:[ "the Artifact", "the Ethereal Artifact", "the artifact", "of the destroyed artifact", "is forged" ],
                                                        RU:[ "Артефакт", "Эфирный Артефакт", "артефакт", "разрушенного артефакта", "выкован" ]
                                                    },{
                                                        IT:[ "il Pendente", "il Pendente di Giada", "il pendente", "del pendente distrutto", "viene forgiato" ],
                                                        EN:[ "the Pendant", "the Jade Pendant", "the pendant", "of the destroyed pendant", "is forged" ],
                                                        RU:[ "Подвеска", "Нефритовая Подвеска", "подвеска", "разрушенной подвески", "выкована" ]
                                                    },{
                                                        IT:[ "la Gemma", "la Gemma Scarlatta", "la gemma", "della gemma frantumata", "viene forgiata" ],
                                                        EN:[ "the Gem", "the Scarlet Gem", "the gem", "of the broken gem", "is forged" ],
                                                        RU:[ "Самоцвет", "Алый Самоцвет", "самоцвет", "разбитого самоцвета", "выкован" ]
                                                    }
                                                ],
                                                collectMoreItems:[
                                                    {
                                                        IT:[ 10, "{label.shard@0}", "{label.shard@0}" ],
                                                        EN:[ 10, "{label.shard@0}", "{label.shard@0}" ],
                                                        RU:[ 10, "{label.shard@0}", "{label.shard@0}" ]
                                                    }
                                                ],
                                                shard:[
                                                    {
                                                        IT:[ "Frammenti Arcani", "i Frammenti Arcani", "1 Frammento", "Frammenti", "Frammenti Arcani", "i Frammenti", "i suoi frammenti", "possono essere raccolti", "Frammenti Spezzati", "i Frammenti Spezzati" ],
                                                        EN:[ "Arcane Shards", "the Arcane Shards", "1 Shard", "Shards", "Sacred Shards", "the Shards", "its shards", "can be collected", "Broken Pieces", "the Broken Pieces" ],
                                                        RU:[ "Тайные Осколки", "Тайные Осколки", "1 Осколок", "Осколки", "Священные Осколки", "Осколки", "его осколки", "можно собрать", "Разбитые Куски", "Разбитые Куски" ]
                                                    },{
                                                        IT:[ "Schegge Solari", "le Schegge Solari", "1 Scheggia", "Schegge", "Schegge Solari", "le Schegge", "le sue schegge", "possono essere raccolte", "Schegge Cadute", "le Schegge Cadute" ],
                                                        EN:[ "Solar Shards", "the Solar Shards", "1 Shard", "Shards", "Solar Shards", "the Shards", "its shards", "can be collected", "Fallen Shards", "the Fallen Shards" ],
                                                        RU:[ "Солнечные Осколки", "Солнечные Осколки", "1 Осколок", "Осколки", "Солнечные Осколки", "Осколки", "его осколки", "можно собрать", "Падшие Осколки", "Падшие Осколки" ]
                                                    },{
                                                        IT:[ "Scaglie Ambrate", "le Scaglie Ambrate", "1 Scaglia", "Scaglie", "Scaglie Ambrate", "le Scaglie", "le sue scaglie", "possono essere raccolte", "Scaglie Perdute", "le Scaglie Perdute" ],
                                                        EN:[ "Amber Scales", "the Amber Scales", "1 Scale", "Scales", "Amber Scales", "the Scales", "its scales", "can be collected", "Lost Scales", "the Lost Scales" ],
                                                        RU:[ "Янтарные Чешуйки", "Янтарные Чешуйки", "1 Чешуйка", "Чешуйки", "Янтарные Чешуйки", "Чешуйки", "его чешуйки", "можно собрать", "Утерянные Чешуйки", "Утерянные Чешуйки" ]
                                                    }
                                                ],
                                                forge:[
                                                    {
                                                        IT:[ "Forgia Magica", "la Zona della Forgia Magica", "la Forgia Magica", "Forgia del Fuoco Magico", "sulla Zona della Forgia Magica", "sulla Forgia Magica" ],
                                                        EN:[ "Magic Forge", "the Magic Forge Zone", "the Magic Forge", "Forge with Magic Fire", "on the Magic Forge Zone", "on the Magic Forge" ],
                                                        RU:[ "Магическая Кузница", "зона Магической Кузницы", "Магическая Кузница", "Кузница с Магическим Огнём", "в зоне Магической Кузницы", "в Магической Кузнице" ]
                                                    },{
                                                        IT:[ "Forgia Leggendaria", "la Zona della Forgia Leggendaria", "la Forgia Leggendaria", "Forgia del Fuoco Leggendario", "sulla Zona della Forgia Leggendaria", "sulla Forgia Leggendaria" ],
                                                        EN:[ "Legendary Forge", "the Legendary Forge Zone", "the Legendary Forge", "Forge with the Fire of the Legends", "on the Legendary Forge Zone", "on the Legendary Forge" ],
                                                        RU:[ "Легендарная Кузница", "зона Легендарной Кузницы", "Легендарная Кузница", "Кузница с Огнём Легенд", "в зоне Легендарной Кузницы", "в Легендарной Кузнице" ]
                                                    },{
                                                        IT:[ "Forgia Dimenticata", "la Zona della Forgia Dimenticata", "la Forgia Dimenticata", "Forgia del Fuoco Dimenticato", "sulla Zona della Forgia Dimenticata", "sulla Forgia Dimenticata" ],
                                                        EN:[ "Forgotten Forge", "the Forgotten Forge Zone", "the Forgotten Forge", "Forge with the Forgotten Fire", "on the Forgotten Forge Zone", "on the Forgotten Forge" ],
                                                        RU:[ "Забытая Кузница", "зона Забытой Кузницы", "Забытая Кузница", "Кузница с Забытым Огнём", "в зоне Забытой Кузницы", "в Забытой Кузнице" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.shard:capital@1}",
                                            RU:"{label.shard:capital@1}"
                                        },{
                                            EN:"{label.forge:capital@2}",
                                            RU:"{label.forge:capital@2}"
                                        },{
                                            EN:"{label.artifact:capital@1}",
                                            RU:"{label.artifact:capital@1}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.purpose@0} {label.gate@0} {label.mission@0}",
                                            RU:"{label.purpose@0} {label.gate@0} {label.mission@0}"
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
                                            RU:"Выполните цели в указанном порядке:"
                                        }
                                    ],
                                    rules:[
                                        [
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.shard@0}",
                                                        RU:"{label.shard@0}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Raccogliere almeno 10 {label.shard@4}",
                                                        EN:"Collect at least 10 {label.shard@4}",
                                                        RU:"Собрать хотя бы 10 {label.shard@4}"
                                                    }
                                                ],
                                                campaignSummary:[
                                                    {
                                                        IT:"Raccogliere almeno 7 {label.shard@4}",
                                                        EN:"Collect at least 7 {label.shard@4}",
                                                        RU:"Собрать хотя бы 7 {label.shard@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"objective",
                                                name:[
                                                    {
                                                        EN:"{label.forge@3}",
                                                        RU:"{label.forge@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        IT:"Usare {label.shard@5} per forgiare {label.artifact@0} tramite {label.forge@2}",
                                                        EN:"Use {label.shard@5} to forge {label.artifact@0} at the {label.forge@0}",
                                                        RU:"Использовать {label.shard@5}, чтобы выковать {label.artifact@0} в {label.forge@0}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@0}",
                                                        RU:"{label.shard@0}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.shard:capital@1} {label.shard@7} dai nemici. Ogni volta che un Eroe uccide un Mostro Errante o un Generale, lancia 2 {symbol.blackDie}. Per ogni {symbol.fang} risultante, gli Eroi guadagnano {label.shard@2}. Posiziona dei segnalini Salute {label.forge@5} per tenere traccia dei frammenti raccolti.",
                                                        EN:"{label.shard:capital@1} {label.shard@7} from the Enemies. Every time a Hero kills a Roaming Monster or a Leader, they roll 2 {symbol.blackDie}. For each {symbol.fang} rolled, the Heroes gets {label.shard@2}. Place Health tokens {label.forge@5} to keep track of the collected Shards.",
                                                        RU:"{label.shard:capital@1} {label.shard@7} от врагов. Каждый раз, когда герой убивает блуждающего монстра или предводителя, он бросает 2 {symbol.blackDie}. За каждый выпавший {symbol.fang} герои получают {label.shard@2}. Поместите жетоны здоровья {label.forge@5}, чтобы отслеживать собранные осколки."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.shard@8}",
                                                        RU:"{label.shard@8}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"I segnalini Obiettivo sul lato colorato rappresentano {label.shard@9}, che sono le parti pi&ugrave; grandi {label.artifact@3}. Qualsiasi Eroe che si trova in una Zona con un segnalino Obiettivo sul lato colorato pu&ograve; spendere 1 azione per scartare il segnalino Obiettivo e raccogliere {label.shard@2}.",
                                                        EN:"Color-side-up Objective tokens represent {label.shard@9}, which are the biggest parts {label.artifact@3}. Any Hero standing on a color-side-up Objective token Zone may spend 1 action to discard the Objective token and collect {label.shard@2}.",
                                                        RU:"Жетоны цели цветной стороной вверх представляют {label.shard@9}, которые являются самыми крупными частями {label.artifact@3}. Любой герой, находящийся в зоне с жетоном цели цветной стороной вверх, может потратить 1 действие, чтобы сбросить жетон цели и собрать {label.shard@2}."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.forge:capital@2}",
                                                        RU:"{label.forge:capital@2}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"La Zona con un segnalino Obiettivo grigio &egrave; {label.forge@1}. Una volta che gli Eroi hanno raccolto collettivamente almeno 10 {label.shard@3}, qualsiasi Eroe {label.forge@4} pu&ograve; spendere 1 azione per Forgiare {label.artifact@1}. Non appena {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        EN:"The Zone with a gray Objective token is {label.forge@1}. Once the Heroes collectively gathered at least 10 {label.shard@3}, any Hero standing {label.forge@4} may spend 1 action to Forge {label.artifact@1}. As soon as {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        RU:"Зона с серым жетоном цели — это {label.forge@1}. Как только герои совместно собрали хотя бы 10 {label.shard@3}, любой герой, находящийся {label.forge@4}, может потратить 1 действие, чтобы выковать {label.artifact@1}. Как только {label.artifact@2} {label.artifact@4}, {label.questVictory@0}."
                                                    }
                                                ],
                                                campaignExplanation:[
                                                    {
                                                        IT:"La Zona con un segnalino Obiettivo grigio &egrave; {label.forge@1}. Una volta che gli Eroi hanno raccolto collettivamente almeno 7 {label.shard@3}, qualsiasi Eroe {label.forge@4} pu&ograve; spendere 1 azione per Forgiare {label.artifact@1}. Non appena {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        EN:"The Zone with a gray Objective token is {label.forge@1}. Once the Heroes collectively gathered at least 7 {label.shard@3}, any Hero standing {label.forge@4} may spend 1 action to Forge {label.artifact@1}. As soon as {label.artifact@2} {label.artifact@4}, {label.questVictory@0}.",
                                                        RU:"Зона с серым жетоном цели — это {label.forge@1}. Как только герои совместно собрали хотя бы 7 {label.shard@3}, любой герой, находящийся {label.forge@4}, может потратить 1 действие, чтобы выковать {label.artifact@1}. Как только {label.artifact@2} {label.artifact@4}, {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "roamingToRoom" ],
                                            gameMode: [ "collectAndForge" ],
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
                                            forCampaign:[ "full" ], // Not enough objectives for mini-campaign
                                            sideQuests:[
                                                { tags:[
                                                    [ "collectMoreItems", "visitAllRooms" ]
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, cacciatore di Eroi",
                                                    EN:"Eliminate {boss.bossBadName@0}, the Heroes hunter",
                                                    RU:"Устраните {boss.bossBadName@0}, охотника на героев"
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
                            forCampaign:[ "2shots", "full", "nomini" ], // Not enough objectives for mini-camapign
                            forMaps:[1],
                            type:"corruption",
                            objective:{
                                EN:"One hero takes wounds and gains a token for every Leader or Roaming Monster killed. Reach a token quota to win.",
                                RU:"Один герой получает раны и жетон за каждого убитого предводителя или блуждающего монстра. Наберите норму жетонов, чтобы победить."
                            },
                            by:{
                                IT:"Ispirato alla Web Quest \"Hello, Darkness!\"",
                                EN:"Inspired by the Web Quest \"Hello, Darkness!\"",
                                RU:"Вдохновлено Web Quest «Hello, Darkness!»"
                            },
                            suggestedTilesCount:4,
                            versions:[
                                {
                                    labels:[
                                        [
                                            {
                                                from:[
                                                    {
                                                        IT:[ "Gli Eroi hanno trovato un portale in grado di trasportarli", "i portali", "un portale come questo" ],
                                                        EN:[ "The Heroes have found a portal that leads", "portals", "such portals" ],
                                                        RU:[ "Герои нашли портал, ведущий", "порталы", "такие порталы" ]
                                                    },{
                                                        IT:[ "Gli Eroi stringevano in mano la Pergamena Arcana che li avrebbe portati", "le Pergamene Arcane", "una pergamena come questa" ],
                                                        EN:[ "The Heroes held in their hands the Arcane Scroll that would bring them", "Arcane Scrolls", "such scrolls" ],
                                                        RU:[ "Герои держали в руках Тайный Свиток, который привёл бы их", "Тайные Свитки", "такие свитки" ]
                                                    },{
                                                        IT:[ "La Mappa Oscura indicava il passaggio li avrebbe portati", "le Mappe Oscure", "una mappa come questa" ],
                                                        EN:[ "The Dark Map indicated the passage would take them", "Dark Maps", "such maps" ],
                                                        RU:[ "Тёмная Карта указывала, что проход приведёт их", "Тёмные Карты", "такие карты" ]
                                                    }
                                                ],
                                                to:[
                                                    {
                                                        IT:[ "all'interno del castello, direttamente dalle profondit&agrave; della foresta." ],
                                                        EN:[ "straight to the castle directly from the depths of the woods." ],
                                                        RU:[ "прямо в замок из глубин леса." ]
                                                    },{
                                                        IT:[ "nelle segrete della torre del mago." ],
                                                        EN:[ "to the dungeon of the wizard's tower." ],
                                                        RU:[ "в подземелье башни мага." ]
                                                    },{
                                                        IT:[ "alla loro ultima battaglia." ],
                                                        EN:[ "to their last battle." ],
                                                        RU:[ "к их последней битве." ]
                                                    }
                                                ],
                                                forWho:[
                                                    {
                                                        IT:[ "Ma gli uomini normali non potrebbero usare {label.from@2}," ],
                                                        EN:[ "An ordinary man could not use {label.from@2}," ],
                                                        RU:[ "Обычный человек не смог бы использовать {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma solo poche creature sono in grado di domare {label.from@2}," ],
                                                        EN:[ "But only a few creatures can tame {label.from@2}," ],
                                                        RU:[ "Но только немногие существа могут укротить {label.from@2}," ]
                                                    },{
                                                        IT:[ "Ma nessun essere umano riuscirebbe a resistere a {label.from@2}," ],
                                                        EN:[ "But no human being could resist {label.from@2}," ],
                                                        RU:[ "Но ни один человек не выдержал бы {label.from@2}," ]
                                                    }
                                                ],
                                                if:[
                                                    {
                                                        IT:[ "perch&eacute; riuscirebbe a corrompere la sua anima fino al midollo."],
                                                        EN:[ "for it would corrupt their soul to the core." ],
                                                        RU:[ "ибо это испортит их душу до самого нутра." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne risucchierebbe la vita in un attimo."],
                                                        EN:[ "for it would drain the life out of them in an instant." ],
                                                        RU:[ "ибо это вытянет из них жизнь в мгновение ока." ]
                                                    },{
                                                        IT:[ "perch&eacute; ne trasformerebbe il corpo in pietra."],
                                                        EN:[ "for it would turn his body into stone." ],
                                                        RU:[ "ибо это превратит его тело в камень." ]
                                                    }
                                                ],
                                                luck1:[
                                                    {
                                                        IT:[ "Fortunatamente, {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "Luckily, the party has {label.specialOne@1} amongst them," ],
                                                        RU:[ "К счастью, в отряде есть {label.specialOne@1}," ]
                                                    },{
                                                        IT:[ "Ma {label.specialOne@1} fa parte del gruppo," ],
                                                        EN:[ "But {label.specialOne@1} is part of the party," ],
                                                        RU:[ "Но {label.specialOne@1} входит в отряд," ]
                                                    },{
                                                        IT:[ "Alla spedizione partecipa anche {label.specialOne@1}," ],
                                                        EN:[ "{label.specialOne:capital@1} also participates in the expedition," ],
                                                        RU:[ "{label.specialOne:capital@1} также участвует в экспедиции," ]
                                                    }
                                                ],
                                                luck2:[
                                                    {
                                                        IT:[ "e {label.specialOne@0} sono in grado di manipolare e controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} can manipulate {label.from@1} to do their bidding." ],
                                                        RU:[ "и {label.specialOne@0} могут управлять {label.from@1}, заставляя их подчиняться." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} sanno molto bene come controllare {label.from@1}." ],
                                                        EN:[ "and {label.specialOne@0} know very well how to control {label.from@1}." ],
                                                        RU:[ "и {label.specialOne@0} очень хорошо знают, как управлять {label.from@1}." ]
                                                    },{
                                                        IT:[ "e {label.specialOne@0} studiano {label.from@1} da secoli." ],
                                                        EN:[ "and {label.specialOne@0} have been studying {label.from@1} for centuries." ],
                                                        RU:[ "и {label.specialOne@0} изучают {label.from@1} веками." ]
                                                    }
                                                ],
                                                specialOne:[
                                                    {
                                                        IT:[ "i Mezzi Demoni", "un Mezzo Demone", "l'Eroe Mezzo Demone", "Assorbire l'Oscurit&agrave;", "Portare a {label.tokensCount} il Potere Oscuro", "Potere Oscuro", "il \"Mezzo Demone\"", "dall'oscurit&agrave;", "il suo Potere Oscuro", "le fonti di Energia Oscura", "", "distruggerlo", "Assorbire l'Oscurit&agrave;", "Cumuli di Oscurit&agrave;", "il suo Potere Oscuro arriva a {label.tokensCount}", "rappresentate", "di Mezzi Demoni" ],
                                                        EN:[ "Half-Demons", "a Half-Demon", "the Half-Demon Hero", "Absorb Darkness", "Reach {label.tokensCount} Darkness Power", "Darkness Power", "the \"Half-Demon\"", "from the Darkness", "their Darkness Power", "sources of Dark Energy", "", "destroy it", "Absorbing Darkness", "Beacons of Darkness", "Darkness Power reaches {label.tokensCount}", "represented", "the Half-Demons" ],
                                                        RU:[ "Полу-Демоны", "Полу-Демон", "герой Полу-Демон", "Поглощение Тьмы", "Достичь {label.tokensCount} Силы Тьмы", "Сила Тьмы", "«Полу-Демон»", "из Тьмы", "его Сила Тьмы", "источники Тёмной Энергии", "", "уничтожить его", "Поглощение Тьмы", "Маяки Тьмы", "его Сила Тьмы достигает {label.tokensCount}", "представлены", "Полу-Демонов" ]
                                                    },{
                                                        IT:[ "i Figli del Bosco", "un Figlio del Bosco", "l'Eroe Figlio del Bosco", "Assorbire lo Spirito", "Portare a {label.tokensCount} lo Spirito Arboreo", "Spirito Arboreo", "il \"Figlio del Bosco\"", "dalle ombre", "il suo Spirito Arboreo", "le radici dello Spirito Arboreo", "", "raccoglierla", "Assorbire lo Spirito", "Radici dello Spirito", "il suo Spirito Arboreo arriva a {label.tokensCount}", "rappresentate", "dei Figli del Bosco" ],
                                                        EN:[ "the Children of the Woods", "a Child of the Woods", "the Child of the Woods Hero", "Absorb the Spirit", "Reach {label.tokensCount} Arboreal Spirit", "Arboreal Spirit", "the \"Child of the Woods \"", "from the shadows", "his Arboreal Spirit", "the roots of the Arboreal Spirit", "", "harvest it", "Absorb the Spirit", "Roots of the Spirit", "his Arboreal Spirit reaches {label.tokensCount}", "represented", "the Children of the Woods" ],
                                                        RU:[ "Дети Леса", "Дитя Леса", "герой Дитя Леса", "Поглощение Духа", "Достичь {label.tokensCount} Древесного Духа", "Древесный Дух", "«Дитя Леса»", "из теней", "его Древесный Дух", "корни Древесного Духа", "", "собрать его", "Поглощение Духа", "Корни Духа", "его Древесный Дух достигает {label.tokensCount}", "представлены", "Детей Леса" ]
                                                    },{
                                                        IT:[ "gli Adepti del Cielo", "un Adepto del Cielo", "l'Eroe Adepto del Cielo", "Assorbire l'Essenza", "Portare a {label.tokensCount} l'Essenza Notturna", "Essenza Notturna", "l'\"Adepto del Cielo\"", "della notte", "la sua Essenza Notturna", "i globi di Essenza Notturna", "", "frantumarlo", "Assorbire l'Essenza Notturna", "Globi di Essenza Notturna", "la sua Essenza Notturna arriva a {label.tokensCount}", "rappresentati", "degli Adepti del Cielo" ],
                                                        EN:[ "the Sky Adepts", "a Sky Adept", "the Sky Adept Hero", "Absorb the Essence", "Reach {label.tokensCount} Night Essence", "Night Essence", "the \"Sky Adept\"", "from the night", "his Night Essence", "the orbs of Night Essence", "", "shatter it", "Absorb the Night Essence", "Orbs of Night Essence", "Night Essence reaches {label.tokensCount}", "represented", "the Sky Adepts" ],
                                                        RU:[ "Адепты Неба", "Адепт Неба", "герой Адепт Неба", "Поглощение Сущности", "Достичь {label.tokensCount} Ночной Сущности", "Ночная Сущность", "«Адепт Неба»", "ночи", "его Ночная Сущность", "сферы Ночной Сущности", "", "разбить её", "Поглощение Ночной Сущности", "Сферы Ночной Сущности", "Ночная Сущность достигает {label.tokensCount}", "представлены", "Адептов Неба" ]
                                                    }
                                                ],
                                                bossBeat:BOSSBEAT,
                                                questVictory:QUESTVICTORY,
                                                tokensCount:[
                                                    {
                                                        EN:[ 7 ],
                                                        RU:[ 7 ]
                                                    }
                                                ],
                                                roundLimit:[
                                                    {
                                                        EN:[ 7 ],
                                                        RU:[ 7 ]
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    title:[
                                        {
                                            EN:"{label.from:capital@1}",
                                            RU:"{label.from:capital@1}"
                                        },{
                                            EN:"{label.specialOne:capital@0}",
                                            RU:"{label.specialOne:capital@0}"
                                        },{
                                            EN:"{label.specialOne:capital@5}",
                                            RU:"{label.specialOne:capital@5}"
                                        }
                                    ],
                                    story:[
                                        {
                                            EN:"{label.from@0} {label.to@0} {label.forWho@0} {label.if@0} {label.luck1@0} {label.luck2@0}",
                                            RU:"{label.from@0} {label.to@0} {label.forWho@0} {label.if@0} {label.luck1@0} {label.luck2@0}"
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
                                                        EN:"{label.specialOne@3}",
                                                        RU:"{label.specialOne@3}"
                                                    }
                                                ],
                                                summary:[
                                                    {
                                                        EN:"{label.specialOne@4}",
                                                        RU:"{label.specialOne@4}"
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@5}",
                                                        RU:"{label.specialOne@5}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Scegli un Eroe che sia {label.specialOne@6}. Sar&agrave; in grado di assorbire l'energia {label.specialOne@7}. Ogni volta che un Eroe elimina un Generale o un Mostro Errante che si trova in una Zona di Ombra, {label.specialOne@2} subisce 1 ferita e fa avanzare di 1 {label.specialOne@8} (posiziona 1 segnalino {symbol.corruptionToken} sulla sua carta Eroe).",
                                                        EN:"Choose a Hero to be {label.specialOne@6}. They can absorb the energy {label.specialOne@7}. Every time any Hero kills a Leader or a Roaming Monster that is in a Shadow Zone, {label.specialOne@2} takes 1 Wound and advances {label.specialOne@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        RU:"Выберите героя, который будет {label.specialOne@6}. Он сможет поглощать энергию {label.specialOne@7}. Каждый раз, когда любой герой убивает предводителя или блуждающего монстра в зоне тени, {label.specialOne@2} получает 1 рану и продвигает {label.specialOne@8} на 1 (поместите 1 жетон {symbol.corruptionToken} на его карту героя)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@13}",
                                                        RU:"{label.specialOne@13}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"{label.specialOne:capital@9} sono {label.specialOne@15} dai segnalini Obiettivo. Quando si trova in una Zona con un segnalino Obiettivo, {label.specialOne@2} pu&ograve; spendere 1 azione per {label.specialOne@11}. Rimuove il segnalino Obiettivo dal Dungeon, subisce 1 Ferita e aumenta {label.specialOne@8} di 1 (posiziona 1 segnalino {symbol.corruptionToken} sulla sua Carta Eroe).",
                                                        EN:"{label.specialOne:capital@9} are {label.specialOne@15} by Objective tokens. When standing in a Zone with an Objective token, {label.specialOne@2} may spend 1 action to {label.specialOne@11}. It removes the Objective token from the Dungeon, takes 1 Wound, and advances {label.specialOne@8} by 1 (place 1 {symbol.corruptionToken} token on their Hero Card).",
                                                        RU:"{label.specialOne:capital@9} {label.specialOne@15} жетонами цели. Находясь в зоне с жетоном цели, {label.specialOne@2} может потратить 1 действие, чтобы {label.specialOne@11}. Он удаляет жетон цели из подземелья, получает 1 рану и продвигает {label.specialOne@8} на 1 (поместите 1 жетон {symbol.corruptionToken} на его карту героя)."
                                                    }
                                                ]
                                            }
                                        ],[
                                            {
                                                type:"rule",
                                                name:[
                                                    {
                                                        EN:"{label.specialOne@12}",
                                                        RU:"{label.specialOne@12}"
                                                    }
                                                ],
                                                explanation:[
                                                    {
                                                        IT:"Non appena {label.specialOne@2} ha {label.tokensCount@0} segnalini {symbol.corruptionToken} ({label.specialOne@14}), {label.questVictory@0}.",
                                                        EN:"As soon as {label.specialOne@2} has {label.tokensCount@0} {symbol.corruptionToken} tokens ({label.specialOne@14}), {label.questVictory@0}.",
                                                        RU:"Как только {label.specialOne@2} имеет {label.tokensCount@0} жетонов {symbol.corruptionToken} ({label.specialOne@14}), {label.questVictory@0}."
                                                    }
                                                ]
                                            }
                                        ]
                                    ],
                                    map:[
                                        {
                                            structure:[ "maze" ],
                                            gameMode: [ "targetsSmall" ],
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
                                                    RU:"Победить {boss.bossBadName@0}",
                                                },
                                                summary:{
                                                    IT:"Elimina {boss.bossBadName@0}, a caccia {label.specialOne@16}",
                                                    EN:"Eliminate {boss.bossBadName@0}, {label.specialOne@16} hunter",
                                                    RU:"Устраните {boss.bossBadName@0}, охотника {label.specialOne@16}"
                                                }
                                            }
                                        ],
                                        preparation:{
                                            IT:"<p>{label.specialOne:capital@2} scarta tutti i segnalini {symbol.corruptionToken} e non assorbe pi&ugrave; l'energia {label.specialOne@7}.</p>",
                                            EN:"<p>{label.specialOne:capital@2} discards all the {symbol.corruptionToken} tokens  and no longer absorb the energy {label.specialOne@7}.</p>",
                                            RU:"<p>{label.specialOne:capital@2} сбрасывает все жетоны {symbol.corruptionToken} и больше не поглощает энергию {label.specialOne@7}.</p>"
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