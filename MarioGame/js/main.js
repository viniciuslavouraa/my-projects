const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')
let points = document.querySelector('.points')
let score = 0

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
};
const loop = setInterval(() => {
    const cloudPosition = cloud.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPostion = +window.getComputedStyle(mario).bottom.replace('px', '')
    if (pipePosition <= 50 && pipePosition > 0 && marioPostion < 85) {
        clearInterval(loop)
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPostion}px`
        mario.src = './images/game-over.png'
        mario.style.width = '100px'
        mario.style.marginLeft = '30px'
    }
    if (pipePosition < -60 ) {
        score += 1
        points.innerHTML = score
    }
    // Resolver bug de numeros aleatorios

}, 10);
document.addEventListener('keydown', jump);
   