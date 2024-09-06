const plano = document.querySelectorAll('.plano')
const mapa = document.querySelector('.containerMapa')

function scroll() {
    plano.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
            e.classList.add('transition')
        }
    })

    if (mapa.getBoundingClientRect().top < 700) {
        mapa.classList.add('transition')
    }
}

window.addEventListener('scroll', scroll)
