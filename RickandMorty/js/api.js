const url = 'https://rickandmortyapi.com/api/character'

async function getAllCharacters() {
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
    //Create elements
    const personagemBox = document.querySelector('#personagens')
    const divImagens = document.createElement('div')
    const divSoloImage = document.createElement('div')
    const image = document.createElement('div')
    const imgRick = document.createElement('img')
    const imgRickAdjudicator = document.createElement('img')
    const imgRickAlien = document.createElement('img')
    const imgRickAntenna = document.createElement('img')
    const imgMorty = document.createElement('img')
    const imgMortyAlien = document.createElement('img')
    const imgMortyAntenna = document.createElement('img')
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
    // Create characters information 
    const informationMorty = document.createElement('p')
    informationMorty.innerHTML = ``
    const informationMortyAlien = document.createElement('p')
    informationMorty.innerHTML = ``
    const informationMortyAntenna = document.createElement('p')
    informationMortyAntenna.innerHTML = ``
    const allInfo = {informationMorty, informationMortyAlien,informationMortyAntenna}
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
    imgRick.classList.add('img')
    imgRickAdjudicator.classList.add('img')
    imgRickAlien.classList.add('img')
    imgRickAntenna.classList.add('img')
    imgMorty.classList.add('img')
    imgMortyAlien.classList.add('img')
    imgMortyAntenna.classList.add('img')
    imgSummer.classList.add('img')
    imgBeth.classList.add('img')
    imgJerry.classList.add('img')
    imgAbadango.classList.add('img')
    imgAbradolf.classList.add('img')
    imgAgency.classList.add('img')
    imgAlan.classList.add('img')
    imgAlbert.classList.add('img')
    imgAlexander.classList.add('img')
    imgAlien.classList.add('img')
    imgAmish.classList.add('img')
    imgAnnie.classList.add('img')
    imgAnts.classList.add('img')
    // Set source to images
    imgRick.setAttribute('src', characters.ricks.Rick.image)
    imgRickAdjudicator.setAttribute('src', characters.ricks.Adjudicator.image)
    imgRickAlien.setAttribute('src', characters.ricks.Alien.image)
    imgRickAntenna.setAttribute('src', characters.ricks.Antenna.image)
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
    divSoloImage.appendChild(informationMorty).style.display = 'none'
    divSoloImage.appendChild(imgMortyAlien).style.display = 'none'
    divSoloImage.appendChild(informationMortyAlien).style.display = 'none'
    divSoloImage.appendChild(imgMortyAntenna).style.display = 'none'
    divSoloImage.appendChild(informationMortyAntenna).style.display = 'none'
    divSoloImage.appendChild(imgSummer)
    divSoloImage.appendChild(imgRick)
    divSoloImage.appendChild(imgRickAdjudicator).style.display = 'none'
    divSoloImage.appendChild(imgRickAlien).style.display = 'none' 
    divSoloImage.appendChild(imgRickAntenna).style.display = 'none'
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
        const images = { imgBeth, imgJerry, imgMorty, imgSummer, imgRick, imgAbradolf, imgAgency, imgAlan, imgAlbert, imgAlexander, imgAlien, imgAmish, imgAnnie, imgAnts, imgAbadango}
        const mortyImages = {imgMorty, imgMortyAlien, imgMortyAntenna}
        const rickImages = {imgRick, imgRickAdjudicator, imgRickAlien, imgRickAntenna}

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
                        informationMorty.innerHTML = `
                        Gender:${characters.familySmith.mortys.Morty.gender} <br>
                        id:${characters.familySmith.mortys.Morty.id} <br>
                        Location:<br>${characters.familySmith.mortys.Morty.location.name} <br>
                        Name:${characters.familySmith.mortys.Morty.name} <br>
                        Origin:${characters.familySmith.mortys.Morty.origin.name} <br
                        Species:${characters.familySmith.mortys.Morty.species} <br>
                        Status:${characters.familySmith.mortys.Morty.status} <br>
                        `
                        informationMorty.style.display = 'block'
                    }
                    if (characters.familySmith.mortys.Alien) {
                        informationMortyAlien.innerHTML =  `
                        Gender:  ${characters.familySmith.mortys.Alien.gender} <br>
                        id:  ${characters.familySmith.mortys.Alien.id} <br>
                        Location:<br>  ${characters.familySmith.mortys.Alien.location.name} <br>
                        Name: ${characters.familySmith.mortys.Alien.name} <br>
                        Origin:  ${characters.familySmith.mortys.Alien.origin.name} <br>
                        Species:  ${characters.familySmith.mortys.Alien.species} <br>
                        Status:  ${characters.familySmith.mortys.Alien.status} <br>
                        `
                        informationMortyAlien.style.display = 'block'
                    }
                    if (characters.familySmith.mortys.Antenna) {
                        informationMortyAntenna.innerHTML =  `
                        Gender:${characters.familySmith.mortys.Antenna.gender} <br>
                        id:${characters.familySmith.mortys.Antenna.id} <br>
                        Location:<br>${characters.familySmith.mortys.Antenna.location.name} <br>
                        Name: ${characters.familySmith.mortys.Antenna.name} <br>
                        Origin:${characters.familySmith.mortys.Antenna.origin.name} <br
                        Species:${characters.familySmith.mortys.Antenna.species} <br>
                        Status:${characters.familySmith.mortys.Antenna.status} <br>
                        `
                        informationMortyAntenna.style.display = 'block'
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


/*                // Esconde todas as outras imagens
                if (imgMorty) {
                    Object.values(rickImages).forEach((rickImage) => {
                        rickImage.style.display = 'none'
                    })
                    Object.values(mortyImages).forEach((mortyImage) => {
                        mortyImage.style.display = 'block'
                    })
                }
                if (imgRick) {
                    Object.values(mortyImages).forEach((mortyImage) => {
                        mortyImage.style.display = 'none'
                    })
                    Object.values(rickImages).forEach((rickImage) => {
                        rickImage.style.display = 'block'
                        
                    })
                }
'*/ 