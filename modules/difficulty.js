ModManager.modules.push(function(){

    return [
        {

            id:"difficulty-hard",
            needs:[ ],
            provides:[ "difficulty-hard" ],
            label:{
                EN:"Hard difficulty - bigger, tougher enemy Mobs",
                RU:"Сложная сложность - более многочисленные и живучие орды врагов"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        difficultyHard:[
                            {
                                priority:30,
                                type:"rule",
                                name:{
                                    IT:"Modalit&agrave; Difficile",
                                    EN:"Hard Mode",
                                    RU:"Сложный режим"
                                },
                                explanation:{
                                    IT:"Aggiungere 1 Gregario ad ogni Orda generata. I Gregari ed i Comandanti hanno +1 Salute.",
                                    EN:"Add 1 Minion to each spawned Mob. Minions and Leaders have +1 Health.",
                                    RU:"Добавьте 1 прислужника к каждой создаваемой орде. Прислужники и лидеры имеют +1 здоровья."
                                }
                            }
                        ]
                    }
                },
                {
                    type:"difficultyRules",
                    data:[ "difficultyHard" ]
                },
                {
                    type:"campaignProtectedNeeds",
                    data:[ "difficulty-hard" ]
                }
            ]
        },
        {

            id:"difficulty-nightmare",
            needs:[ ],
            provides:[ "difficulty-nightmare" ],
            label:{
                EN:"Nightmare difficulty - the ultimate challenge",
                RU:"Кошмарная сложность - максимальный вызов"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        difficultyNightmare:[
                            {
                                priority:30,
                                type:"rule",
                                name:{
                                    IT:"Modalit&agrave; Incubo",
                                    EN:"Nightmare Mode",
                                    RU:"Кошмарный режим"
                                },
                                explanation:{
                                    IT:"Genera le Orde ed i Mostri Erranti come se gli Eroi fossero di un Livello superiore (massimo Livello 5). Aggiungere 1 Gregario ad ogni Orda generata. I Nemici hanno <span class='phase'>Difesa:</span> +{symbol.blueDie}",
                                    EN:"Spawn Mobs and Roaming Monsters as if the Heroes were one Level higher (maximum Level 5). Add 1 Minion to each spawned Mob. Enemies have <span class='phase'>Defense:</span> +{symbol.blueDie}",
                                    RU:"Создавайте орды и блуждающих монстров так, будто герои на один уровень выше (максимум 5-й уровень). Добавьте 1 прислужника к каждой создаваемой орде. Враги имеют <span class='phase'>Защита:</span> +{symbol.blueDie}"
                                }
                            }
                        ]
                    }
                },
                {
                    type:"difficultyRules",
                    data:[ "difficultyNightmare" ]
                },
                {
                    type:"campaignProtectedNeeds",
                    data:[ "difficulty-nightmare" ]
                }
            ]
        }
    ]

});
