ModManager.modules.push(function(){

    return [
            {

                id:"gamemodes",
                needs:[ ],
                provides:[ "gamemodes" ],
                label:{
                    EN:"Different ways you can play quests",
                    RU:"Разные способы играть в задания"
                },
                content:[
                    
                ]
            },
            {

            id:"gamemode-dungeoncrawling",
            needs:[ ],
            provides:[ "gamemode-dungeoncrawling" ],
            label:{
                EN:"Dungeon Crawling mode - hides the rooms token",
                RU:"Режим исследования подземелья - скрывает жетоны комнат"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        dungeonCrawlingMode:[
                            {
                                priority:20,
                                type:"rule",
                                classNames:[ "displayOnly" ],
                                name:{
                                    IT:"Modalit&agrave; Esplorazione",
                                    EN:"Dungeon Crawling Mode",
                                    RU:"Режим исследования подземелья"
                                },
                                explanation:{
                                    IT:"Quando una Camera viene rivelata, prima di pescare e risolvere una carta Porta, verificare sulla mappa a schermo se la Camera &egrave; colorata di verde. Se si, selezionarla e aggiungere i nuovi componenti mostrati.",
                                    EN:"When a Chamber is revealed, before drawing and resolving a Door card, check the on-screen map to see if the Chamber appears green-colored. If so, select it and add the new components shown.",
                                    RU:"Когда раскрывается комната, прежде чем тянуть и разыгрывать карту двери, проверьте на карте на экране, выделена ли эта комната зелёным цветом. Если да, выберите её и добавьте показанные новые компоненты."
                                }
                            }
                        ]
                    }
                },
                {
                    type:"gameMode",
                    data:{
                        specialRules:[ "dungeonCrawlingMode" ],
                        mapConfig:{
                            roomsHideTokens:true
                        }
                    }
                }
            ]
        }
    ]

});
