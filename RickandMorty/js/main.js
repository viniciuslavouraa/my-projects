const portal = document.querySelector('#portal')
const enjoyTitle = document.querySelectorAll('.enjoy')

portal.addEventListener('mouseenter', () => {
    portal.classList.toggle('animation')
    enjoyTitle.forEach((title) => {
        title.style.display = 'none'
        setTimeout(() => {
            title.style.display = 'flex'
        }, 2000);
    })
})
