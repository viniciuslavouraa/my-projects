let header = document.querySelector('header')
let btnHeader = document.querySelector('#btn1')
document.addEventListener('scroll', () => {
    let positionY = window.pageYOffset
    console.log(positionY)
    if(positionY !== 0) {
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