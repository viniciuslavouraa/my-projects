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
        //console.log(pageData)
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
    
    
    const ricks = {}
    const hiddeRicks = {}
    // Ricks
    Object.values(characters.ricks).forEach((rick) => {
        let img = document.createElement('img')
        img.src = rick.image
        img.setAttribute('key', rick.name.replace(/\s+/g, '-'))

        if(rick.name !== 'Rick Sanchez') {
            hiddeRicks[rick.name] = img
        } else  {
            ricks[rick.name] = img
        }

        // Add the first name of rick after the tag img
        const rickName = rick.name.split(' ')[0]
        const span = document.createElement('span')
        span.textContent = rickName
        img.insertAdjacentElement('afterend',span)
    })

    console.log(ricks)
    console.log(hiddeRicks)

    const mortys = {}
    const hiddeMortys = {}
    // Mortys
    Object.values(characters.familySmith.mortys).forEach((morty => {
        let img = document.createElement('img')
        img.src = morty.image
        img.setAttribute('key', morty.name.replace(/\s+/g, '-'))
        if (morty.name !== 'Morty Smith') {
            hiddeMortys[morty.name] = img
        } else {
            mortys[morty.name] = img
        }
        

        //Add the firts name of morty after the tag img
        const mortyName = morty.name.split(' ')[0]
        const span = document.createElement('span')
        span.textContent = mortyName
        img.insertAdjacentElement('afterend',span)
   }))
   console.log(mortys)
   console.log(hiddeMortys)

   const secundaryCharacters = {}
   //Seconde Characters
   Object.values(characters.secondary).forEach((character) => {
        let img = document.createElement('img')
        img.src = character.image
        img.setAttribute('key', character.name.replace(/\s+/g, '-'))
        secundaryCharacters[character.name] = img

        // Add the first name of secondy character after tag img
        const characterName =  character.name.split(' ')[0]
        const span = document.createElement('span')
        span.textContent =  characterName
        img.insertAdjacentElement('afterend', span)
   })
   console.log(secundaryCharacters)
    // Object with all images
    const allImages = {ricks, mortys, secundaryCharacters}

    Object.values(allImages).forEach((imgObj) => {
        Object.values(imgObj).forEach((img) => {
            img.classList.add('img')
            divSoloImage.appendChild(img)
        })
    })

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
    divImagens.appendChild(divSoloImage)
    personagemBox.appendChild(divImagens)
    console.log(characters)

        
}
getAllCharacters()

/*
 Está quebrado nã consigo clicar nos personagens RESOLVER!!!!!
Object.values(allImages).forEach((imagem) => {
            imagem.addEventListener('click', () => {
                Object.values(allImages).forEach(outraImagem => {
                    if (outraImagem !== imagem) {
                        outraImagem.style.display = 'none'
                    }
                })
                if (imagem == imgMorty) {
                    if (characters.familySmith.mortys.Morty) {
                        imgMorty.appendChild(infoMorty)
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
 */