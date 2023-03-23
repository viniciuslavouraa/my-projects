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
        if (info.name === "Rick Sanchez") {
            characters.rick.image = info.image
            characters.rick.id = info.id
            characters.rick.name = info.name
            characters.rick.gender = info.gender
            characters.rick.status = info.status
            characters.rick.location = info.location
            characters.rick.origin = info.origin
            characters.rick.specie = info.species 
        }
        if (info.name === "Morty Smith") {
            characters.morty.image = info.image
            characters.morty.id = info.id
            characters.morty.name = info.name
            characters.morty.gender = info.gender
            characters.morty.status = info.status
            characters.morty.location = info.location
            characters.morty.origin = info.origin
            characters.morty.specie = info.specie
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