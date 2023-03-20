let counter = document.querySelector('#counter')
const btnDecrease = document.querySelector('#btn-diminuir')
const btnReset = document.querySelector('#btn-reset')
const btnIncrease = document.querySelector('#btn-aumentar')
let currentNumber = 0
counter.textContent = currentNumber
let timeoutId

btnDecrease.addEventListener('click',decreaseNumbers)
btnReset.addEventListener('click', resetNumbers)
btnIncrease.addEventListener('click', increaseNumbers)

function decreaseNumbers() {
    let decrease = currentNumber -1
    currentNumber = decrease
    counter.textContent = currentNumber
    if (currentNumber < 0 ) {
        counter.style.color = 'red'
    } else if (currentNumber == 0) {
        counter.style.color = 'black'
    }
    startTimer()
} 
function resetNumbers() {
    currentNumber = 0
    counter.textContent = 0
    counter.style.color = 'black'
}
function startTimer() {
    clearInterval(timeoutId)
    timeoutId = setInterval(resetNumbers, 5000)
}
startTimer()

function increaseNumbers() {
    let increase = currentNumber + 1
    currentNumber = increase
    counter.textContent = currentNumber
    if (currentNumber > 0) {
        counter.style.color = 'green'
    } else if (currentNumber == 0) {
        counter.style.color = 'black'
    }
    startTimer()
}


