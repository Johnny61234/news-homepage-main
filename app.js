const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    nav.classList.remove('hide');
    console.log('menu')

    overlay.classList.add('show__overlay');
})

menuClose.addEventListener('click', () => {
    nav.classList.add('hide');

    overlay.classList.remove('show__overlay');
})

overlay.addEventListener('click', () => {
    nav.classList.add('hide');

    overlay.classList.remove('show__overlay');
})