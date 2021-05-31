if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'works',
        nav: true,
        auto: false,
        time: 5000
    });
}

if (window.SimpleAnime) {
    new SimpleAnime()
}

const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

function toogleMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

function toogleItemMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchStart', toogleMenu);
menu.addEventListener('click', toogleItemMenu);
menu.addEventListener('touchStart', toogleItemMenu);