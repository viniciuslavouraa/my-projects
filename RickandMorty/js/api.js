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
    const imgAdam = document.createElement('img')
    const imgAir = document.createElement('img')
    const imgAccountant = document.createElement('img')
    const imgAlyson = document.createElement('img')
    const imgAmazing = document.createElement('img')
    const imgAmy = document.createElement('img')
    const imgAnchor = document.createElement('img')
    const imgAnchorMan = document.createElement('img')
    const imgAnchorWoman = document.createElement('img')
    const imgAnchorSnake = document.createElement('img')
    const imgAndy = document.createElement('img')
    const imgAngie = document.createElement('img')
    const imgAngry = document.createElement('img')
    // Continuar a adicionar imagens de forma mais clean pq tiltei
    // object with all images
    const allImages = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickPcoat,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,imgRickYoYo, imgMorty,imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker, imgSummer, imgBeth, imgJerry, imgAbadango, imgAbradolf, imgAgency, imgAlan, imgAlbert, imgAlexander, imgAlien, imgAmish, imgAnnie, imgAnts, imgAdam, imgAir, imgAccountant, imgAlyson, imgAmazing, imgAmy, imgAnchor, imgAnchorMan, imgAnchorWoman, imgAnchorSnake, imgAndy, imgAngie, imgAngry}

    // Images of page 1
    const imagesPag1 = {imgBeth, imgJerry, imgMorty, imgSummer, imgRick, imgAbadango, imgAbradolf, imgAgency, imgAlan, imgAlbert, imgAlexander, imgAlien, imgAmish, imgAnnie, imgAnts, imgAdam, imgAir, imgAccountant,imgAlyson, imgAmazing, imgAmy, imgAnchor, imgAnchorMan, imgAnchorWoman, imgAnchorSnake, imgAndy, imgAngie, imgAngry}

    const hiddeRicks = { imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickPcoat,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,imgRickYoYo}

    const hiddeMortys = {imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker}

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
    Object.values(imagesPag1).forEach((img1) => {
        divSoloImage.appendChild(img1)
        img1.style.display = 'block'
    })
    // Hidde all secondary Ricks
    Object.values(hiddeRicks).forEach((hiddeRick) => {
        divSoloImage.appendChild(hiddeRick)
        hiddeRick.style.display = 'none'
    })
    // Hidde all secondary mortys
    Object.values(hiddeMortys).forEach((hiddeMorty) => {
        divSoloImage.appendChild(hiddeMorty)
        hiddeMorty.style.display = 'none'
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
    imgMortyAqua.setAttribute('src', characters.familySmith.mortys.Aqua.image)
    imgMortyArtist.setAttribute('src', characters.familySmith.mortys.Artist.image)
    imgMortyBartender.setAttribute('src', characters.familySmith.mortys.Bartender.image)
    imgMortyBearded.setAttribute('src', characters.familySmith.mortys.Bearded)
    imgMortyBig.setAttribute('src', characters.familySmith.mortys.Big.image)
    imgMortyCop.setAttribute('src', characters.familySmith.mortys.Cop.image)
    imgMortyCowboy.setAttribute('src', characters.familySmith.mortys.Cowboy.image)
    imgMortyCronenberg.setAttribute('src', characters.familySmith.mortys.Cronenberg.image)
    imgMortyCyclops.setAttribute('src', characters.familySmith.mortys.Cyclops.image)
    imgMortyDancer.setAttribute('src', characters.familySmith.mortys.Dancer.image)
    imgMortyDeformed.setAttribute('src', characters.familySmith.mortys.Deformed.image)
    imgMortyEvil.setAttribute('src', characters.familySmith.mortys.Evil.image)
    imgMortyFascist.setAttribute('src', characters.familySmith.mortys.Fascist.image)
    imgMortyFat.setAttribute('src', characters.familySmith.mortys.Fat.image)
    imgMortyFlower.setAttribute('src', characters.familySmith.mortys.Flower.image)
    imgMortyGlasses.setAttribute('src', characters.familySmith.mortys.Glasses.image)
    imgMortyGlockenSpiel.setAttribute('src', characters.familySmith.mortys.Glockenspiel.image)
    imgMortyHammerHead.setAttribute('src', characters.familySmith.mortys.Hammerhead.image)
    imgMortyLawyer.setAttribute('src', characters.familySmith.mortys.Lawyer.image)
    imgMortyLizard.setAttribute('src', characters.familySmith.mortys.Lizard.image)
    imgMortyMechanical.setAttribute('src', characters.familySmith.mortys.Mechanical.image)
    imgMortyPurple.setAttribute('src', characters.familySmith.mortys.Purple.image)
    imgMortyRedHead.setAttribute('src', characters.familySmith.mortys.Redhead.image)
    imgMortyRobot.setAttribute('src', characters.familySmith.mortys.Robot.image)
    imgMortyScareCrow.setAttribute('src', characters.familySmith.mortys.Scarecrow.image)
    imgMortySlick.setAttribute('src', characters.familySmith.mortys.Slick.image)
    imgMortyTortured.setAttribute('src', characters.familySmith.mortys.Tortured.image)
    imgMortyToxic.setAttribute('src', characters.familySmith.mortys.Toxic.image)
    imgMortyTrunk.setAttribute('src', characters.familySmith.mortys.Trunk.image)
    imgMortyTurkey.setAttribute('src', characters.familySmith.mortys.Turkey.image)
    imgMortyWasp.setAttribute('src', characters.familySmith.mortys.Wasp.image)
    imgMortyWicker.setAttribute('src', characters.familySmith.mortys.Wicker.image)
    // Secondary images source
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
    imgAdam.setAttribute('src', characters.secondary.Adam.image)
    imgAir.setAttribute('src', characters.secondary.Air.image)
    imgAccountant.setAttribute('src', characters.secondary.Accountant.image)
    imgAlyson.setAttribute('src',characters.secondary.Alyson.image)
    imgAmazing.setAttribute('src',characters.secondary.Amazing.image)
    imgAmy.setAttribute('src',characters.secondary.Amy.image)
    imgAnchor.setAttribute('src',characters.secondary.Anchor.image)
    imgAnchorMan.setAttribute('src',characters.secondary.Anchorman.image)
    imgAnchorWoman.setAttribute('src',characters.secondary.Anchorwoman.image)
    imgAnchorSnake.setAttribute('src',characters.secondary.Anchosnake.image)
    imgAndy.setAttribute('src',characters.secondary.Andy.image)
    imgAngie.setAttribute('src',characters.secondary.Angie.image)
    imgAngry.setAttribute('src',characters.secondary.Angry.image)

    divImagens.appendChild(divSoloImage)
    personagemBox.appendChild(divImagens)
    console.log(characters)

    const btnVoltar = document.createElement('button')
    btnVoltar.textContent = 'Voltar'
    btnVoltar.classList.add('btn-voltar')

        const mortyImages = {imgMorty,imgMortyAlien, imgMortyAqua, imgMortyArtist, imgMortyAntenna, imgMortyBartender, imgMortyBearded, imgMortyBig, imgMortyCop, imgMortyCowboy, imgMortyCronenberg, imgMortyCyclops, imgMortyDancer, imgMortyDeformed, imgMortyEvil, imgMortyFascist, imgMortyFat, imgMortyFlower,imgMortyGlasses, imgMortyGlockenSpiel, imgMortyHammerHead, imgMortyLawyer, imgMortyLizard, imgMortyMechanical, imgMortyPurple, imgMortyReBuildaMorty, imgMortyRedHead, imgMortyRobot, imgMortyScareCrow, imgMortySlick, imgMortyTortured, imgMortyToxic, imgMortyTrunk, imgMortyTurkey, imgMortyWasp, imgMortyWicker}

        const rickImages = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna,imgRickAqua, imgRickBaby,imgRickBald,imgRickBlack,imgRickColonial,imgRickCommander,imgRickCool,imgRickCop,imgRickCowboy,imgRickCronenberg,imgRickCyclops,imgRickDoofus,imgRickEvil,imgRickFascist,imgRickGlockenSpiel,imgRickHairDresser,imgRickHologram,imgRickHotHead,imgRickInsurance,imgRickInvestigator,imgRickJournalist,imgRickJuggling,imgRickMechanical,imgRickMemory,imgRickMetal,imgRickModern,imgRickMorty,imgRickParty,imgRickPickle,imgRickPlumber,imgRickPunk,imgRickQuantum,imgRickRedHead,imgRickReverse,imgRickRobot,imgRickScar,imgRickScareCrow,imgRickSheik,imgRickSimple,imgRickSlow,imgRickSolicitor,imgRickTan,imgRickTeacher,imgRickTiny,imgRickToxic,imgRickTurkey,imgRickUnknow,imgRickVisor,imgRickWasp,imgRickWicker,imgRickWoman,}

        Object.values(allImages).forEach((imagem) => {
            imagem.addEventListener('click', () => {
                Object.values(allImages).forEach(outraImagem => {
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
    divSoloImage.appendChild(imgRickCowboy).style.display = 'none'
    divSoloImage.appendChild(imgRickCronenberg).style.display = 'none'
    divSoloImage.appendChild(imgRickCyclops).style.display = 'none'
    divSoloImage.appendChild(imgRickDoofus).style.display = 'none'
    divSoloImage.appendChild(imgRickEvil).style.display = 'none'
    divSoloImage.appendChild(imgRickFascist).style.display = 'none'
    divSoloImage.appendChild(imgRickGlockenSpiel).style.display = 'none'
    divSoloImage.appendChild(imgRickHairDresser).style.display = 'none'
    divSoloImage.appendChild(imgRickHologram).style.display = 'none'
    divSoloImage.appendChild(imgRickHotHead).style.display = 'none'
    divSoloImage.appendChild(imgRickInsurance).style.display = 'none'
    divSoloImage.appendChild(imgRickInvestigator).style.display = 'none'
    divSoloImage.appendChild(imgRickJournalist).style.display = 'none'
    divSoloImage.appendChild(imgRickJuggling).style.display = 'none'
    divSoloImage.appendChild(imgRickMechanical).style.display = 'none'
    divSoloImage.appendChild(imgRickMemory).style.display = 'none'
    divSoloImage.appendChild(imgRickMetal).style.display = 'none'
    divSoloImage.appendChild(imgRickModern).style.display = 'none'
    divSoloImage.appendChild(imgRickMorty).style.display = 'none'
    divSoloImage.appendChild(imgRickParty).style.display = 'none'
    divSoloImage.appendChild(imgRickPickle).style.display = 'none'
    divSoloImage.appendChild(imgRickPlumber).style.display = 'none'
    divSoloImage.appendChild(imgRickPunk).style.display = 'none'
    divSoloImage.appendChild(imgRickQuantum).style.display = 'none'
    divSoloImage.appendChild(imgRickRedHead).style.display = 'none'
    */