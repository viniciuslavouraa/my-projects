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
    const personagemBox2 = document.querySelector('.perso2')
    const divImagens = document.createElement('div')
    const divSoloImage = document.createElement('div')
    const divSoloImage2 = document.createElement('div')
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
                img.addEventListener('click',(e) => {
                    img.classList.toggle('flip-card')
                    const backCard = document.createElement('div')
                    const imgkey = e.target.getAttribute('key')
                    const imgParent = e.target.parentNode
                    // Dar um jeito de adicionar as informações quando o card virar de forma clean
                    const keys ={} = e.target
                    console.log(`é o ${imgkey}`)
                    if (imgkey == 'Rick-Sanchez') {
                        console.log('é o rick')
                    }
                    if (img.classList.contains('flip-card')) {
                        console.log('teste')
                        setTimeout(() => {
                            backCard.classList.toggle('card')
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
                img.addEventListener('click',(e) => {
                    img.classList.toggle('flip-card')

                    const backCard = document.createElement('div')
                    const imgkey = e.target.getAttribute('key')
                    const imgParent = e.target.parentNode
                    const character = findCharacterByKey(imgkey)
                    if (character) {
                        const backCard = document.createElement('div');
                        backCard.innerHTML = `Created: ${character.created}<br>Gender: ${character.gender}`;
                        backCard.classList.add('card');
                        backCard.setAttribute('key', imgkey);
                        imgParent.replaceChild(backCard, e.target);
                        img.classList.toggle('flip-card');
                    }
                    function findCharacterByKey(key) {
                        for ( const personagens of Object.values(characters)){
                            for(const character of Object.values(personagens)) {
                                if (character.key === key) {
                                    return character
                                }
                            }
                        }
                        return null
                    }
                    console.log(imgkey)
                    if (img.classList.contains('flip-card')) {
                        setTimeout(() => {
                            backCard.classList.toggle('card')
                            backCard.setAttribute('key',imgkey)
                            imgParent.replaceChild(backCard, e.target)
                        }, 400);
                    }

                    backCard.addEventListener('click', () =>{
                        const imgkey = backCard.getAttribute('key');
                        const character = findCharacterByKey(imgkey);
                        if (character) {
                          imgParent.replaceChild(img, backCard);
                          img.classList.toggle('flip-card');
                        }
                        setTimeout(() => {
                            imgParent.replaceChild(e.target, backCard)
                            img.classList.toggle('flip-card')
                        }, 400);
                    })
                    console.log(`Clicked image with key ${e.target.getAttribute('key')}`)
                })

*/