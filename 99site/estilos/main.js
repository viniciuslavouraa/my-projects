let header = document.querySelector('header')
let btnHeader = document.querySelector('#btn1')
document.addEventListener('scroll', () => {
    let positionY = window.pageYOffset
    console.log(positionY)
    if(positionY !== 0  && document.body.clientWidth > 988) {
        header.style.transitionDelay = '100ms'
        header.style.backgroundColor = 'white'
        header.style.boxShadow = '0 2px 3px #00000081'
        btnHeader.classList.add('buttonJs')
    } else {
        header.style.transitionDelay = '100ms'
        header.style.backgroundColor = ''
        header.style.boxShadow = ''
        btnHeader.classList.remove('buttonJs')
    }
    

})
// Navegação responsiva 

const btnNav = document.querySelector('#btn-nav')
const navItems = document.querySelector('#nav-itens')
let img = document.querySelector('#btn-nav img')
btnNav.addEventListener('click', () => {
    if (navItems.style.display == 'none' && document.body.clientWidth < 1000) {
        navItems.style.display = 'flex'
        navItems.style.position = 'absolute'
        img.src = './images/x-fechar.png'
        img.style.width = '30px'
        img.style.height = '30px'
    }else{
        navItems.style.display = 'none'
        img.src = './images/3-barras-img.png'
    }
    

        
})

//Resolver o mistério do código que para de funcionar do nada
// Carrossel de beneficios para motoristas 

const leftBtn = document.querySelector('#btnLeft')
const rightBtn = document.querySelector('#btnRight')
const items = document.querySelectorAll('.item-box')
const carouselContainer = document.querySelector('#carrosel-container')

let currentItemIndex = 0

function showCurrentItem() {
    items.forEach(item => {
        item.style.display = 'none'
        item.style.flexDirection = 'column'
    })

    items[currentItemIndex].style.display = 'block';
    items[currentItemIndex].style.alignItems = 'center'
    items[currentItemIndex].style.transition = '500ms'

      // Verifica se o item atual está dentro do contêiner
  if (items[currentItemIndex].offsetParent == carouselContainer) {
    return
  }
  // Caso contrário, rola o contêiner até o item atual
  items[currentItemIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
}

leftBtn.addEventListener('click', () => {
    currentItemIndex = (currentItemIndex == 0) ? items.length -1 : currentItemIndex -1
    showCurrentItem()
})

rightBtn.addEventListener('click', () => {
    currentItemIndex  = (currentItemIndex == items.length -1 ) ? 0 : currentItemIndex + 1 
    showCurrentItem()
})
showCurrentItem()


//How to create a simple carousel in JavaScript?