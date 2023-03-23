const url = 'https://rickandmortyapi.com/api/character'

async function getAllCharacters() {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)
    const characters = {
        rick: {},
        morty:{}
    }

    data.results.forEach((info) => {

        const {image, id, name, gender, status, location, origin, species} = info
            

        if (info.name === "Rick Sanchez") {
            characters.rick = {image, id, name, gender, status, location, origin, species}
        }
        if (info.name === "Morty Smith") {
            characters.morty = {image, id, name, gender, status, location, origin, species}
        }

    })
    const img = document.createElement('img')
    const imgMorty = document.createElement('img')
    img.setAttribute('src', characters.rick.image)
    imgMorty.setAttribute('src', characters.morty.image)
    document.body.appendChild(img)
    document.body.appendChild(imgMorty)
    console.log(characters)
}
getAllCharacters()


/*        const familySmith = [names.filter((e) => e.endsWith("Smith"))]
        nome.innerText = familySmith
        console.log(familySmith)
        document.body.appendChild(nome)*/ 