var btn_m = document.querySelector ('#btn-m')
var btn_f = document.querySelector ('#btn-f')
// config divs abaixo
var sexo_img = document.querySelector ('#sexo_img')
var img = document.createElement ('img')
btn_m.addEventListener ('click',homem)
btn_f.addEventListener ('click', mulher)
img.setAttribute ('id', 'img')
function homem () {
    document.body.getElementsByTagName('section')[0].style.height = '470px'
    btn_f.style.display = 'none'
    btn_m.style.display = 'none'
    img.setAttribute ('src','./images/homem-p.png')
    var genero = 'homem'
    sexo_img.innerHTML = `<p>Um ${genero}</p>`
    sexo_img.appendChild(img)
}
function mulher () {
    document.body.getElementsByTagName('section')[0].style.height = '470px'
    btn_f.style.display = 'none'
    btn_m.style.display = 'none'
    var genero = 'mulher'
    sexo_img.innerHTML = `<p>Uma ${genero}</p> <br>`
    img.setAttribute ('src', './images/mulher-p.png')
    sexo_img.appendChild (img)
}

var btn_limpa = document.querySelector ('#limpar')
var btn_calc = document.querySelector ('#calcular')
btn_limpa.addEventListener ('clickL', limpar)
btn_calc.addEventListener ('click', calcular)

function limpar () {
    
}

function calcular () {
    document.body.getElementsByTagName('section')[0].style.height = '586px'
    var clas = document.body.getElementsByTagName ('ul')[0]
    var imc_res = document.querySelector ('#imc-result')
    var idade = document.querySelector ('#idade')
    var altura = document.querySelector ('#altura')
    var peso = document.querySelector ('#peso')
    const imc = peso.value / (altura.value * altura.value)
    var result = ''
    if (imc < 18.5) {
        result = `<p>Abaixo do peso</p>`
    } else if (imc < 24.9) {
        result = `<p>Peso Normal</p>`
    } else if (imc >= 25.0 && imc <= 29.9) {
        result = `<p>Pré-Obesidade</p>`
    } else if (imc >= 30.0 && imc <= 34.9){
        result+= `<p>Obesidade Grau 1</p>`
    } else if (imc >= 35.0 && imc <= 39.9) {
        result = `<p>Obesidade Grau 2</p>`
    }else {
        result = `<p>Obesidade Grau 3</p>`
    }
    imc_res.innerHTML += `<div id="dados">Seu IMC é de ${imc.toFixed(2)} ${result} Dados informados: <br> Idade:${idade.value} <br> anos Altura:${altura.value}m <br> Peso: ${peso.value}(kg)
    </div>`
}
