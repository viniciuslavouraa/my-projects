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
    const imgRick = document.createElement('img')
    const imgMorty = document.createElement('img')
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
    //Add classList to elemnts
    divSoloImage.classList.add('divImagens')
    imgRick.classList.add('img')
    imgMorty.classList.add('img')
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
    imgMorty.setAttribute('src', characters.familySmith.mortys.Morty.image)
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
    divSoloImage.appendChild(imgSummer)
    divSoloImage.appendChild(imgRick)
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

    Object.values(images).forEach((imagem) => {
        imagem.addEventListener('click', () => {
            // Esconde todas as outras imagens
            Object.values(images).forEach(outraImagem => {
            if (outraImagem !== imagem) {
                outraImagem.style.display = 'none'
            }
            })
            
            // Exibe apenas a imagem clicada
            imagem.style.display = 'block'
        })
        })

}
getAllCharacters()