let btn = document.querySelector('#btn')
let menu_open = document.querySelector('#content-menu')

btn.addEventListener('click', function() {
    if (menu_open.style.display == 'none') {
        menu_open.style.display = 'flex'
        menu_open.style.position = 'absolute'
        btn.style.transform = 'rotate(90deg)'
        btn.style.transition = '600ms'
    } else {
        menu_open.style.display = 'none'
        btn.style.transform = ''
    }
})

function mudarContent(index) {
    let content = document.querySelectorAll('.content')[index]
    if (content.style.top == '0px' || content.style.top == '') {
        content.style.top = '-100px'
        content.style.boxShadow = '4px 8px 3px #00000070'
    } else {
        content.style.top = '0px'
        content.style.boxShadow = '2px 3px 3px #00000070'
    }
}
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
btn1.addEventListener('click', function() {mudarContent(0)})
btn2.addEventListener('click', function() {mudarContent(1)})
btn3.addEventListener('click', function() {mudarContent(2)})

let talk = document.querySelector('#talk')
let interview = document.querySelector('#inter')
let exib = document.querySelector('exib')
talk.addEventListener('click',showTalk)
interview.addEventListener ('click', interV)
let paises = document.querySelector('#paises')

function showTalk() {
    if (paises.style.visibility == 'hidden') {
        paises.style.visibility = 'visible' 
        talk.style.backgroundColor = 'white'
        talk.style.color = '#f5523c'
        interview.style.backgroundColor = ''
        interview.style.color = ''
    } else {
        paises.style.visibility = 'hidden'
        talk.style.backgroundColor = ''
        talk.style.color = ''
    }
}
function interV() {
    interview.style.backgroundColor = 'white'
    interview.style.color = '#f5523c'
    talk.style.backgroundColor = ''
    talk.style.color = ''
}
// Código para o carrosel
let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')
let awards = document.querySelectorAll('.awards')

//Defube um índice para controlar qual prêmio está sendo exibdo
let currentAwardIndex = 0
//Função para exibir o prêmio atual
function showCurrentAward() {
        awards.forEach(award => {
            award.style.display = 'block';
            award.style.border = 'none';
            award.style.boxShadow = 'none'
            award.style.padding = '0';
            award.style.borderRadius = '0';
            award.style.top = ''
        });
        
        // Adiciona os estilos ao prêmio atual
        awards[currentAwardIndex].style.display = 'block';
        awards[currentAwardIndex].style.border = '2px solid white';
        awards[currentAwardIndex].style.boxShadow = '2px 4px 3px #00000070'
        awards[currentAwardIndex].style.padding = '15px';
        awards[currentAwardIndex].style.borderRadius = '8px';
        awards[currentAwardIndex].style.transition = '500ms'
    }

//Adiciona um listner de clique ao botão da esquerda
leftBtn.addEventListener('click',() => {
    //retrocede para o prêmio anterios, mas volta para o final se chegar no inicio
    currentAwardIndex = (currentAwardIndex == 0) ? awards.length -1 : currentAwardIndex -1
    showCurrentAward()
})

//Adiciona um listner de clique ao botão da direita
rightBtn.addEventListener('click', () => {
    //Avança para o proxmio prêmio, mas volta para o ínicio se chegar no final
    currentAwardIndex = (currentAwardIndex == awards.length - 1)  ? 0 : currentAwardIndex + 1
    showCurrentAward()
})

showCurrentAward()