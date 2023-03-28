const url = 'https://rickandmortyapi.com/api/character'

async function getAllCharacters() {
    const response = await fetch(url)

    const data = await response.json()
    const totalPages = data.info.pages
    const characters = {
        familySmith: {
            mortys: {}
        },
        ricks: {},
        secondary: {

        }
    }
 
    for (let i = 1 ; i <= totalPages; i++) {
        const pageUrl = `https://rickandmortyapi.com/api/character?page=${i}`
        const pageResponse = await fetch(pageUrl)
        const pageData = await pageResponse.json()
        console.log(pageData)
        pageData.results.forEach((info) => {
            const {image,created, episode, id, name, gender, status, location, origin, species, type} = info

            const [firstName, lastName] = info.name.split(" ")
            
            if(firstName === "Rick" || lastName === "Rick") {
                characters.ricks[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type}
            }
            if (lastName === "Smith" && firstName !== "Morty") {
                characters.familySmith[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type}
            }
            if (firstName === "Morty" || lastName === "Morty") {
                characters.familySmith.mortys[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type}
            }
            if (firstName !== "Rick" && lastName !== "Rick"  && firstName !== "Morty" && lastName !== "Morty"  && lastName !== "Smith") {
                characters.secondary[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type}
            }
        })
    }
    // adicionar o resto dos personagens
    //Create elements
    const personagemBox = document.querySelector('#personagens')
    const divImagens = document.createElement('div')
    const divSoloImage = document.createElement('div')
    const image = document.createElement('div')
    // Ricks
    const imgRick = document.createElement('img')
    const imgRickAdjudicator = document.createElement('img')
    const imgRickAlien = document.createElement('img')
    const imgRickAntenna = document.createElement('img')
    const imgRickAqua = document.createElement('img')
    const imgRickBaby = document.createElement('img')
    const imgRickBald = document.createElement('img')
    const imgRickBlack = document.createElement('img')
    const imgRickColonial = document.createElement('img')
    const imgRickCommander = document.createElement('img')
    const imgRickCool = document.createElement('img')
    const imgRickCop = document.createElement('img')
    const imgRickCowboy = document.createElement('img')
    const imgRickCronenberg = document.createElement('img')
    const imgRickCyclops = document.createElement('img')
    const imgRickDoofus = document.createElement('img')
    const imgRickEvil = document.createElement('img')
    const imgRickFascist = document.createElement('img')
    const imgRickGlockenSpiel = document.createElement('img')
    const imgRickHairDresser = document.createElement('img')
    const imgRickHologram = document.createElement('img')
    const imgRickHotHead = document.createElement('img')
    const imgRickInsurance = document.createElement('img')
    const imgRickInvestigator = document.createElement('img')
    const imgRickJournalist = document.createElement('img')
    const imgRickJuggling = document.createElement('img')
    const imgRickMechanical = document.createElement('img')
    const imgRickMemory = document.createElement('img')
    const imgRickMetal = document.createElement('img')
    const imgRickModern = document.createElement('img')
    const imgRickMorty = document.createElement('img')
    const imgRickPcoat = document.createElement('img')
    const imgRickParty = document.createElement('img')
    const imgRickPickle = document.createElement('img')
    const imgRickPlumber = document.createElement('img')
    const imgRickPunk = document.createElement('img')
    const imgRickQuantum = document.createElement('img')
    const imgRickRedHead = document.createElement('img')
    const imgRickReverse = document.createElement('img')
    const imgRickRobot = document.createElement('img')
    const imgRickScar = document.createElement('img')
    const imgRickScareCrow = document.createElement('img')
    const imgRickSheik = document.createElement('img')
    const imgRickSimple = document.createElement('img')
    const imgRickSlow = document.createElement('img')
    const imgRickSolicitor = document.createElement('img')
    const imgRickTan = document.createElement('img')
    const imgRickTeacher = document.createElement('img')
    const imgRickTiny = document.createElement('img')
    const imgRickToxic = document.createElement('img')
    const imgRickTurkey = document.createElement('img')
    const imgRickUnknow = document.createElement('img')
    const imgRickVisor = document.createElement('img')
    const imgRickWasp = document.createElement('img')
    const imgRickWicker = document.createElement('img')
    const imgRickWoman = document.createElement('img')
    const imgRickYoYo = document.createElement('img')

    // Mortys
    const imgMorty = document.createElement('img')
    const imgMortyAlien = document.createElement('img')
    const imgMortyAqua = document.createElement('img')
    const imgMortyArtist = document.createElement('img')
    const imgMortyAntenna = document.createElement('img')
    const imgMortyBartender = document.createElement('img')
    const imgMortyBearded = document.createElement('img')
    const imgMortyBig = document.createElement('img')
    const imgMortyCop = document.createElement('img')
    const imgMortyCowboy = document.createElement('img')
    const imgMortyCronenberg = document.createElement('img')
    const imgMortyCyclops = document.createElement('img')
    const imgMortyDancer = document.createElement('img')
    const imgMortyDeformed = document.createElement('img')
    const imgMortyEvil = document.createElement('img')
    const imgMortyFascist = document.createElement('img')
    const imgMortyFat = document.createElement('img')
    const imgMortyFlower = document.createElement('img')
    const imgMortyGlasses = document.createElement('img')
    const imgMortyGlockenSpiel = document.createElement('img')
    const imgMortyHammerHead = document.createElement('img')
    const imgMortyLawyer = document.createElement('img')
    const imgMortyLizard = document.createElement('img')
    const imgMortyMechanical = document.createElement('img')
    const imgMortyPurple = document.createElement('img')
    const imgMortyReBuildaMorty = document.createElement('img')
    const imgMortyRedHead = document.createElement('img')
    const imgMortyRobot = document.createElement('img')
    const imgMortyScareCrow = document.createElement('img')
    const imgMortySlick = document.createElement('img')
    const imgMortyTortured = document.createElement('img')
    const imgMortyToxic = document.createElement('img')
    const imgMortyTrunk = document.createElement('img')
    const imgMortyTurkey = document.createElement('img')
    const imgMortyWasp = document.createElement('img')
    const imgMortyWicker = document.createElement('img')
    // Second characters
    const imgSummer = document.createElement('img')
    const imgBeth = document.createElement('img')
    const imgJerry = document.createElement('img')
    const imgAbadango = document.createElement('img')
    const imgAbradolf = document.createElement('img')
    const imgAgency = document.createElement('img')
    const imgAlan = document.createElement('img')
    const imgAlbert = document.createElement('img')
    const imgAlexander = document.createElement('img')
    const imgAlien = document.createElement('img')
    const imgAmish = document.createElement('img')
    const imgAnnie = document.createElement('img')
    const imgAnts = document.createElement('img')
    // object with all images
    const allImages = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickPcoat,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,imgRickYoYo, imgMorty,imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker, imgSummer, imgBeth, imgJerry, imgAbadango, imgAbradolf, imgAgency, imgAlan, imgAlbert, imgAlexander, imgAlien, imgAmish, imgAnnie, imgAnts}


    // Create characters information 
    const infoMorty = document.createElement('p')
    const infoMortyAlien = document.createElement('p')
    const infoMortyAntenna = document.createElement('p')
    const infoMortyBartender =document.createElement('p')
    const infoMortyBearded = document.createElement('p')
    const infoMortyBig = document.createElement('p')
    const infoMortyCop = document.createElement('p')
    const infoMortyCowboy = document.createElement('p')
    const infoMortyCronenberg = document.createElement('p')
    const infoMortyCyclops = document.createElement('p')
    const infoMortyDancer =document.createElement('p')
    const infoMortyDeformed = document.createElement('p')
    const infoMortyEvil = document.createElement('p')
    const allInfo = {infoMorty, infoMortyAlien,infoMortyAntenna, infoMortyBartender,infoMortyBearded, infoMortyBig, infoMortyCop, infoMortyCowboy, infoMortyCronenberg, infoMortyCyclops, infoMortyDancer, infoMortyDeformed, infoMortyEvil}
    Object.values(allInfo).forEach((infos) => {
        infos.classList.add('text')
        infos.innerHTML = `
        Gender: <br>
        id: <br>
        Location:<br> <br>
        Name: <br>
        Origin: <br
        Species: <br>
        Status: <br>
        `
    })
    //Add classList to elemnts
    divSoloImage.classList.add('divImagens')
    Object.values(allImages).forEach((img) => {
        img.classList.add('img')
    })

    // Set source to images
    // Rick images source
    imgRick.setAttribute('src', characters.ricks.Rick.image)
    imgRickAdjudicator.setAttribute('src', characters.ricks.Adjudicator.image)
    imgRickAlien.setAttribute('src', characters.ricks.Alien.image)
    imgRickAntenna.setAttribute('src', characters.ricks.Antenna.image)
    imgRickAqua.setAttribute('src', characters.ricks.Aqua.image)
    imgRickBaby.setAttribute('src', characters.ricks.Baby.image)
    imgRickBald.setAttribute('src', characters.ricks.Bald.image)
    imgRickBlack.setAttribute('src', characters.ricks.Black.image)
    imgRickColonial.setAttribute('src', characters.ricks.Black.image)
    imgRickCommander.setAttribute('src', characters.ricks.Commander.image)
    imgRickCool.setAttribute('src', characters.ricks.Cool.image)
    imgRickCop.setAttribute('src', characters.ricks.Cop.image)
    imgRickCowboy.setAttribute('src', characters.ricks.Cowboy.image)
    imgRickCronenberg.setAttribute('src', characters.ricks.Cronenberg.image)
    imgRickCyclops.setAttribute('src', characters.ricks.Cyclops.image)
    imgRickDoofus.setAttribute('src', characters.ricks.Doofus.image)
    imgRickEvil.setAttribute('src', characters.ricks.Evil.image)
    imgRickFascist.setAttribute('src', characters.ricks.Fascist.image)
    imgRickGlockenSpiel.setAttribute('src', characters.ricks.Glockenspiel.image)
    imgRickHairDresser.setAttribute('src', characters.ricks.Hairdresser.image)
    imgRickHologram.setAttribute('src', characters.ricks.Hologram.image)
    imgRickHotHead.setAttribute('src', characters.ricks.Hothead.image)
    imgRickInsurance.setAttribute('src', characters.ricks.Insurance.image)
    imgRickInvestigator.setAttribute('src', characters.ricks.Investigator.image)
    imgRickJournalist.setAttribute('src', characters.ricks.Journalist.image)
    imgRickJuggling.setAttribute('src', characters.ricks.Juggling.image)
    imgRickMechanical.setAttribute('src', characters.ricks.Mechanical.image)
    imgRickMemory.setAttribute('src', characters.ricks.Memory.image)
    imgRickMetal.setAttribute('src', characters.ricks.Metal.image)
    imgRickModern.setAttribute('src', characters.ricks.Modern.image)
    imgRickMorty.setAttribute('src', characters.ricks.Morty.image)
    imgRickParty.setAttribute('src', characters.ricks.Party.image)
    imgRickPickle.setAttribute('src', characters.ricks.Pickle.image)
    imgRickPlumber.setAttribute('src', characters.ricks.Plumber.image)
    imgRickPunk.setAttribute('src', characters.ricks.Punk.image)
    imgRickQuantum.setAttribute('src', characters.ricks.Quantum.image)
    imgRickRedHead.setAttribute('src', characters.ricks.Redhead.image)
    imgRickReverse.setAttribute('src', characters.ricks.Reverse.image)
    imgRickRobot.setAttribute('src', characters.ricks.Robot.image)
    imgRickScar.setAttribute('src', characters.ricks.Scar.image)
    imgRickScareCrow.setAttribute('src', characters.ricks.Scarecrow.image)
    imgRickSheik.setAttribute('src', characters.ricks.Sheik.image)
    imgRickSimple.setAttribute('src', characters.ricks.Simple.image)
    imgRickSlow.setAttribute('src', characters.ricks.Slow.image)
    imgRickSolicitor.setAttribute('src', characters.ricks.Solicitor.image)
    imgRickTan.setAttribute('src', characters.ricks.Tan.image)
    imgRickTeacher.setAttribute('src', characters.ricks.Teacher.image)
    imgRickTiny.setAttribute('src', characters.ricks.Tiny.image)
    imgRickToxic.setAttribute('src', characters.ricks.Toxic.image)
    imgRickTurkey.setAttribute('src', characters.ricks.Turkey.image)
    imgRickUnknow.setAttribute('src', characters.ricks.Unknown.image)
    imgRickVisor.setAttribute('src', characters.ricks.Visor.image)
    imgRickWasp.setAttribute('src', characters.ricks.Wasp.image)
    imgRickWicker.setAttribute('src', characters.ricks.Wicker.image)
    imgRickWoman.setAttribute('src', characters.ricks.Woman.image)
    // Morty images source
    imgMorty.setAttribute('src', characters.familySmith.mortys.Morty.image)
    imgMortyAlien.setAttribute('src', characters.familySmith.mortys.Alien.image)
    imgMortyAntenna.setAttribute('src', characters.familySmith.mortys.Antenna.image)
    
    imgSummer.setAttribute('src', characters.familySmith.Summer.image)
    imgBeth.setAttribute('src', characters.familySmith.Beth.image)
    imgJerry.setAttribute('src', characters.familySmith.Jerry.image)
    imgAbadango.setAttribute('src', characters.secondary.Abadango.image)
    imgAbradolf.setAttribute('src', characters.secondary.Abradolf.image)
    imgAgency.setAttribute('src',characters.secondary.Agency.image)
    imgAlan.setAttribute('src',characters.secondary.Alan.image)
    imgAlbert.setAttribute('src',characters.secondary.Albert.image)
    imgAlexander.setAttribute('src',characters.secondary.Alexander.image)
    imgAlien.setAttribute('src',characters.secondary.Alien.image)
    imgAmish.setAttribute('src',characters.secondary.Amish.image)
    imgAnnie.setAttribute('src',characters.secondary.Annie.image)
    imgAnts.setAttribute('src',characters.secondary.Ants.image)
    divSoloImage.appendChild(imgBeth)
    divSoloImage.appendChild(imgJerry)
    divSoloImage.appendChild(imgMorty)
    divSoloImage.appendChild(infoMorty).style.display = 'none'
    divSoloImage.appendChild(imgMortyAlien).style.display = 'none'
    divSoloImage.appendChild(infoMortyAlien).style.display = 'none'
    divSoloImage.appendChild(imgMortyAntenna).style.display = 'none'
    divSoloImage.appendChild(infoMortyAntenna).style.display = 'none'
    divSoloImage.appendChild(imgSummer)
    divSoloImage.appendChild(imgRick)
    divSoloImage.appendChild(imgRickAdjudicator).style.display = 'none'
    divSoloImage.appendChild(imgRickAlien).style.display = 'none' 
    divSoloImage.appendChild(imgRickAntenna).style.display = 'none'
    divSoloImage.appendChild(imgRickAqua).style.display = 'none'
    divSoloImage.appendChild(imgRickBaby).style.display = 'none'
    divSoloImage.appendChild(imgRickBald).style.display = 'none'
    divSoloImage.appendChild(imgRickBlack).style.display = 'none'
    divSoloImage.appendChild(imgRickColonial).style.display = 'none'
    divSoloImage.appendChild(imgRickCommander).style.display = 'none'
    divSoloImage.appendChild(imgRickCool).style.display = 'none'
    divSoloImage.appendChild(imgRickCop).style.display = 'none'
    // Containuar adicionando as imagens á divSoloImage
    divSoloImage.appendChild(imgAbradolf)
    divSoloImage.appendChild(imgAgency)
    divSoloImage.appendChild(imgAlan)
    divSoloImage.appendChild(imgAlbert)
    divSoloImage.appendChild(imgAlexander)
    divSoloImage.appendChild(imgAlien)
    divSoloImage.appendChild(imgAmish)
    divSoloImage.appendChild(imgAnnie)
    divSoloImage.appendChild(imgAnts)
    divSoloImage.appendChild(imgAbadango)
    divImagens.appendChild(divSoloImage)
    personagemBox.appendChild(divImagens)
    console.log(characters)

    const btnVoltar = document.createElement('button')
    btnVoltar.textContent = 'Voltar'
    btnVoltar.classList.add('btn-voltar')
    // Continuar a criação de cada imagem com suas informações
    // Array for all images
        const images = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickPcoat,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,imgRickYoYo, imgMorty,imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker, imgSummer, imgBeth, imgJerry, imgAbadango, imgAbradolf, imgAgency, imgAlan, imgAlbert, imgAlexander, imgAlien, imgAmish, imgAnnie, imgAnts}

        const mortyImages = {imgMorty,imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker}

        const rickImages = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickPcoat,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,imgRickYoYo}

        Object.values(images).forEach((imagem) => {
            imagem.addEventListener('click', () => {
                divSoloImage.classList.add('divImg')
                Object.values(images).forEach(outraImagem => {
                    if (outraImagem !== imagem) {
                        outraImagem.style.display = 'none'
                    }
                })
                if (imagem == imgMorty) {
                    if (characters.familySmith.mortys.Morty) {
                        infoMorty.innerHTML = `
                        Gender:${characters.familySmith.mortys.Morty.gender} <br>
                        id:${characters.familySmith.mortys.Morty.id} <br>
                        Location:<br>${characters.familySmith.mortys.Morty.location.name} <br>
                        Name:${characters.familySmith.mortys.Morty.name} <br>
                        Origin:${characters.familySmith.mortys.Morty.origin.name} <br
                        Species:${characters.familySmith.mortys.Morty.species} <br>
                        Status:${characters.familySmith.mortys.Morty.status} <br>
                        `
                        infoMorty.style.display = 'block'
                    }
                    if (characters.familySmith.mortys.Alien) {
                        infoMortyAlien.innerHTML =  `
                        Gender:  ${characters.familySmith.mortys.Alien.gender} <br>
                        id:  ${characters.familySmith.mortys.Alien.id} <br>
                        Location:<br>  ${characters.familySmith.mortys.Alien.location.name} <br>
                        Name: ${characters.familySmith.mortys.Alien.name} <br>
                        Origin:  ${characters.familySmith.mortys.Alien.origin.name} <br>
                        Species:  ${characters.familySmith.mortys.Alien.species} <br>
                        Status:  ${characters.familySmith.mortys.Alien.status} <br>
                        `
                        infoMortyAlien.style.display = 'block'
                    }
                    if (characters.familySmith.mortys.Antenna) {
                        infoMortyAntenna.innerHTML =  `
                        Gender:${characters.familySmith.mortys.Antenna.gender} <br>
                        id:${characters.familySmith.mortys.Antenna.id} <br>
                        Location:<br>${characters.familySmith.mortys.Antenna.location.name} <br>
                        Name: ${characters.familySmith.mortys.Antenna.name} <br>
                        Origin:${characters.familySmith.mortys.Antenna.origin.name} <br
                        Species:${characters.familySmith.mortys.Antenna.species} <br>
                        Status:${characters.familySmith.mortys.Antenna.status} <br>
                        `
                        infoMortyAntenna.style.display = 'block'
                    }
                    if (characters.familySmith.mortys.Aqua) {

                    }

                    Object.values(mortyImages).forEach((mortyImage) => {
                        mortyImage.style.display = 'block'
                    })
                } else if (imagem == imgRick) {
                    Object.values(rickImages).forEach((rickImage) => {
                        rickImage.style.display = 'block'
                    })
                }
                // Exibe apenas a imagem clicada
                imagem.style.display = 'block'
            })
        })
}
getAllCharacters()



/* 
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)
    const characters = {
        familySmith: {
            mortys: {}
        },
        ricks: {},
        secondary: {

        }
    }

    data.results.forEach((info) => {
        const {image, id, name, gender, status, location, origin, species} = info

        const [firstName, lastName] = info.name.split(" ")

        if(firstName === "Rick" || lastName === "Rick") {
            characters.ricks[firstName] = {image, id, name, gender, status, location, origin, species}
        }
        if (lastName === "Smith" && firstName !== "Morty") {
            characters.familySmith[firstName] = {image, id, name, gender, status, location, origin, species}
        }
        if (firstName === "Morty" || lastName === "Morty") {
            characters.familySmith.mortys[firstName] = {image, id, name, gender, status, location, origin, species}
        }
        if (firstName !== "Rick" && lastName !== "Rick"  && firstName !== "Morty" && lastName !== "Morty"  && lastName !== "Smith") {
            characters.secondary[firstName] = {image, id, name, gender, status, location, origin, species}
        }


    })
*/