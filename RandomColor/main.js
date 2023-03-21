const btn = document.querySelector('#btn')
const hexBtn = document.querySelector('#btn2')
let color = document.querySelector('#codigoHex')
const aviso = document.querySelector('#aviso')
const simpleBox = document.querySelector('#simple')
const hexBox = document.querySelector('#hex')
hexBtn.style.display = 'none'
btn.style.display = 'none'
simpleBox.addEventListener('click',() => {
    aviso.style.display = 'none'
    document.body.style.backgroundColor = 'white'
    btn.style.display = 'block'
    hexBtn.style.display = 'none'
    color.textContent = `rgb(0, 0, 0)`
    // RGB code
    btn.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    color.textContent = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})
})
hexBox.addEventListener('click', () => {
    aviso.style.display = 'none'
    document.body.style.backgroundColor = 'white'
    hexBtn.style.display = 'block'
    btn.style.display = 'none'
    color.textContent =  `#000`
    // Hex code
    hexBtn.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    let colorHex = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2,'0')}${blue.toString(16).padStart(2, '0')}`
    color.textContent = colorHex
    document.body.style.backgroundColor = colorHex
})
})



