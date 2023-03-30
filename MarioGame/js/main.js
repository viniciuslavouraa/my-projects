const gameOverTela = document.querySelector('.game-over-tela')
let tryAgain = document.querySelector('.try-again')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')
const gameOver = document.querySelector('.game-over')
let points = document.querySelector('.points')
let score = 0
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
};
const jumpCell = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}
tryAgain.addEventListener('click',() => {
    location.reload()
})
const loop = setInterval(() => {
    const cloudPosition = cloud.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '')
    if (pipePosition <= 50 && pipePosition > 0 && marioPostion < 85) {
        clearInterval(loop)
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`
        gameOverTela.style.display = 'block'

        if (gameOverTela.style.display = 'block') {
            points.style.display = 'none'
            tryAgain.style.display = 'block'
        }
        gameOver.classList.add('game-over-animation')

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPostion}px`
        mario.src = './images/game-over.png'
        mario.style.width = '100px'
        mario.style.marginLeft = '30px'

        points.innerHTML = '0'
    }
    if (pipePosition < -50 ) {
        score += 1
        points.innerHTML = score
    }
}, 10);
document.addEventListener('keydown', jump);
document.addEventListener('touchstart',jumpCell)

   