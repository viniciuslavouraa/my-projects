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
    //Create elemtns
    const personagemBox = document.querySelector('#personagens')
    const divImagens = document.createElement('div')
    const img = document.createElement('img')
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
    divImagens.classList.add('divImagens')
    img.classList.add('img')
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
    img.setAttribute('src', characters.ricks.Rick.image)
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
    divImagens.appendChild(imgBeth)
    divImagens.appendChild(imgJerry)
    divImagens.appendChild(imgMorty)
    divImagens.appendChild(imgSummer)
    divImagens.appendChild(img)
    divImagens.appendChild(imgAbradolf)
    divImagens.appendChild(imgAgency)
    divImagens.appendChild(imgAlan)
    divImagens.appendChild(imgAlbert)
    divImagens.appendChild(imgAlexander)
    divImagens.appendChild(imgAlien)
    divImagens.appendChild(imgAmish)
    divImagens.appendChild(imgAnnie)
    divImagens.appendChild(imgAnts)
    divImagens.appendChild(imgAbadango)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    personagemBox.appendChild(divImagens)
    console.log(characters)
    //Continuar ciração dos clicks nas imagens
    img.addEventListener('click', () => {
        const div = document.createElement('div')
        const stats = `Name: ${characters.ricks.Rick.name} <br>
                       Gender: ${characters.ricks.Rick.gender} <br>
                       Status: ${characters.ricks.Rick.status} <br>
                       Location: ${characters.ricks.Rick.location.name} <br>
                       Origin: ${characters.ricks.Rick.origin.name} <br>
                       Species: ${characters.ricks.Rick.species}`
        const statsParagraph = document.createElement('p')
        statsParagraph.innerHTML = stats
        div.appendChild(img)
        div.appendChild(statsParagraph)
        personagemBox.appendChild(div)
    })
}
getAllCharacters()
