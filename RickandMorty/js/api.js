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
    console.log(data)
    for (let i = 1 ; i <= totalPages; i++) {
        const pageUrl = `https://rickandmortyapi.com/api/character?page=${i}`
        const pageResponse = await fetch(pageUrl)
        const pageData = await pageResponse.json()
        //console.log(pageData)
        pageData.results.forEach((info) => {
            const {image,created, episode, id, name, gender, status, location, origin, species, type} = info
            key = info.name.replace(/\s+/g, '-')
            const [firstName, lastName] = info.name.split(" ")
            
            if(firstName === "Rick" || lastName === "Rick") {
                characters.ricks[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type, key}
            }
            if (lastName === "Smith" && firstName !== "Morty") {
                characters.familySmith[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type, key}
            }
            if (firstName === "Morty" || lastName === "Morty") {
                characters.familySmith.mortys[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type, key}
            }
            if (firstName !== "Rick" && lastName !== "Rick"  && firstName !== "Morty" && lastName !== "Morty"  && lastName !== "Smith") {
                characters.secondary[firstName] = {image,created, episode, id, name, gender, status, location, origin, species, type, key}
            }
        })
    }
    //Create elements
    const personagemBox = document.querySelector('#personagens')
    const divImagens = document.createElement('div')
    const divSoloImage = document.createElement('div')
    const image = document.createElement('div')
    
    
    const ricks = {}
    // Ricks
    Object.values(characters.ricks).forEach((rick) => {
        let img = document.createElement('img')
        img.src = rick.image
        img.setAttribute('key', rick.name.replace(/\s+/g, '-'))
        ricks[rick.name] = img

        // Add the first name of rick after the tag img
        const rickName = rick.name.split(' ')[0]
        const span = document.createElement('span')
        span.textContent = rickName
        img.insertAdjacentElement('afterend',span)
    })

    console.log(ricks)

    const mortys = {}
    // Mortys
    Object.values(characters.familySmith.mortys).forEach((morty => {
        let img = document.createElement('img')
        img.src = morty.image
        img.setAttribute('key', morty.name.replace(/\s+/g, '-'))
        mortys[morty.name] = img
        
        //Add the firts name of morty after the tag img
        const mortyName = morty.name.split(' ')[0]
        const span = document.createElement('span')
        span.textContent = mortyName
        img.insertAdjacentElement('afterend',span)
   }))
   console.log(mortys)

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

   // Get all infos
   let allInfos = {} 
   Object.values(characters).forEach((character) => {
        Object.values(character).forEach((charInfo) => {
            allInfos[charInfo.name] = {
                created: charInfo.created, gender: charInfo.gender, id: charInfo.id,
                key: charInfo.key, location:charInfo.location, name: charInfo.name, 
                origin: charInfo.origin, species: charInfo.species, status: charInfo.status,
                type: charInfo.type
            }
        })
   })
   console.log(allInfos)

    // Object with all images
    const allImages = {ricks, mortys, secundaryCharacters}

    Object.values(allImages).forEach((imgObj) => {
        Object.values(imgObj).forEach((img) => {
            img.classList.add('img')
            divSoloImage.appendChild(img)

            img.addEventListener('click',(e) => {
                img.classList.toggle('flip-card')
                const backCard = document.createElement('div')
                const imgkey = e.target.getAttribute('key')
                const imgParent = e.target.parentNode
                if (img.classList.contains('flip-card')) {
                    setTimeout(() => {
                        const p = document.createElement('p')
                        
                        backCard.classList.toggle('card')
                        if (imgkey == 'Rick-Sanchez') {
                            p.innerHTML = `
                            ${allInfos['Rick Sanchez'].created}<br>
                            ${allInfos['Rick Sanchez'].gender} <br>
                            ${allInfos['Rick Sanchez'].id} <br>
                            ${allInfos['Rick Sanchez'].location.name} <br>
                            ${allInfos['Rick Sanchez'].name} <br>
                            ${allInfos['Rick Sanchez'].origin.name} <br>
                            ${allInfos['Rick Sanchez'].species} <br>
                            ${allInfos['Rick Sanchez'].status} <br>
                            ${allInfos['Rick Sanchez'].type}
                            `
                            backCard.appendChild(p)
                        }
                        backCard.setAttribute('key',imgkey)
                        imgParent.replaceChild(backCard, e.target)
                    }, 400);
                }

                backCard.addEventListener('click', () =>{
                    setTimeout(() => {
                        imgParent.replaceChild(e.target, backCard)
                        img.classList.toggle('flip-card')
                    }, 400);
                })
                console.log(`Clicked image with key ${e.target.getAttribute('key')}`)
            })
        })

    }) 
    //Add classList to elemnts
    divSoloImage.classList.add('divImagens')
    divImagens.appendChild(divSoloImage)
    personagemBox.appendChild(divImagens)
    console.log(characters)    
}
getAllCharacters()


/*
   // Get all infos
   let allInfos = {} 
   Object.values(characters).forEach((character) => {
        Object.values(character).forEach((charInfo) => {
            allInfos[charInfo.name] = {
                created: charInfo.created, gender: charInfo.gender, id: charInfo.id,
                key: charInfo.key, location:charInfo.location, name: charInfo.name, 
                origin: charInfo.origin, species: charInfo.species, status: charInfo.status,
                type: charInfo.type
            }
        })
   })
    */