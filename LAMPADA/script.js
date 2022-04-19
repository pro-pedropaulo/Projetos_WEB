const btnacender = document.querySelector(".btn-acender")
const titulo = document.querySelector(".titulo")
const btnapagar = document.querySelector(".btn-apagar")
const lampada = document.querySelector(".lampada-img")
const avisoClique = document.querySelector(".aviso-clique")
const avisoClicou = document.querySelector(".aviso-clicou")

function acenderluz() {
    lampada.setAttribute('src', 'img/ligada.jpg')
}

function apagaluz() {
    lampada.setAttribute("src", 'img/desligada.jpg')
}
function quebralampada() {
    lampada.setAttribute("src", 'img/quebrada.jpg')
    avisoClique.style.display = 'none'
    avisoClicou.style.display = 'block'
    titulo.innerHTML = 'PROJETO CRIADO POR PEDRO PAULO'
}
 
btnacender.addEventListener('click', acenderluz)
btnapagar.addEventListener('click', apagaluz)
lampada.addEventListener("dblclick", quebralampada)