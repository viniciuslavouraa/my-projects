var veja_mais = document.querySelector ('#veja-mais')
veja_mais.addEventListener ('click',vermais)
veja_mais.addEventListener ('mouseleave',sair)
function vermais () {
    var mais = document.createElement ('div')
    mais.setAttribute ('id', 'mais')
    veja_mais.appendChild(mais)
    mais.style.display = 'block'
    mais.style.width = '100px'
    mais.style.height = '100px'
    mais.style.backgroundColor = 'white'
}
function sair () {
    mais.style.display = ''
    mais.style.width = '0'
    mais.style.height = '0'
    veja_mais.appendChild(mais)
}
