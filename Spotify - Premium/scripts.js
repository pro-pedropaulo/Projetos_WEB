const btnHamburguer = document.getElementById('btn-hamburguer');
const btnCloses = document.getElementById('btn-closes');

function togglemenu () {
    const btnHamburguer = document.getElementById('nav');
    nav.classList.toggle('active');
}

function botaofecha () {
    const btnCloses = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnHamburguer.addEventListener('click', togglemenu);
btnCloses.addEventListener('click', togglemenu);