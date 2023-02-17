var btn_m = document.querySelector ('#btn-m')
var btn_f = document.querySelector ('#btn-f')
// config divs abaixo
var sexo_img = document.querySelector ('#sexo_img')
var img = document.createElement ('img')
btn_m.addEventListener ('click',homem)
btn_f.addEventListener ('click', mulher)
img.setAttribute ('id', 'img')
function homem () {
    btn_f.style.display = 'none'
    btn_m.style.display = 'none'
    img.setAttribute ('src','./images/homem-p.png')
    var genero = 'homem'
    sexo_img.innerHTML = `<p>Um ${genero}</p>`
    sexo_img.appendChild(img)
}
function mulher () {
    btn_f.style.display = 'none'
    btn_m.style.display = 'none'
    var genero = 'mulher'
    sexo_img.innerHTML = `Uma ${genero} <br>`
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
    var clas = document.body.getElementsByTagName ('ul')[0]
    var imc_res = document.querySelector ('#imc-result')
    var idade = document.querySelector ('#idade')
    var altura = document.querySelector ('#altura')
    var peso = document.querySelector ('#peso')
    const imc = peso.value / (altura.value * altura.value)
    imc_res.innerHTML += `Seu IMC é de ${imc.toFixed(2)}`
    if (imc < 18.5) {
        imc_res.innerHTML += `<p>Abaixo do peso</p>`
    } else if (imc < 24.9) {
        imc_res.innerHTML += `<p>Peso Normal</p>`
    } else if (imc >= 25.0 && imc <= 29.9) {
        imc_res.innerHTML += `<p>Pré-Obesidade</p>`
    } else if (imc >= 30.0 && imc <= 34.9){
        imc_res.innerHTML += `<p>Obesidade Grau 1</p>`
    } else if (imc >= 35.0 && imc <= 39.9) {
        imc_res.innerHTML += `<p>Obesidade Grau 2</p>`
    }else {
        imc_res.innerHTML += `<p>Obesidade Grau 3</p>`
    }
    imc_res.innerHTML += `<div id="dados">Dados informados: Idade:${idade.value}anos Altura:${altura.value}m Peso: ${peso.value}(kg)
    </div>`
}
