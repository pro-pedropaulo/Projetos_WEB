const tela = document.querySelector(".tela")
const ac = document.querySelector('.ac')
const apaga = document.querySelector(".apaga")
const confirma = document.querySelector(".igual")

function insere(e) {
    if (tela.innerHTML.length < 16) {
        tela.innerHTML += e
    }
}

function zeraTela() {
    tela.innerHTML = ''
}

function apagarUltimo() {
   if (tela.textContent) {
       tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1)
   }
}

function realizaConta () {
    if(tela.textContent && tela.innerHTML.length < 16) {
        let result = parseFloat(eval(tela.innerHTML))
        tela.innerHTML = result.toFixed()
    }
    
}
ac.addEventListener('click', zeraTela)
apaga.addEventListener('click', apagarUltimo)
confirma.addEventListener("click", realizaConta)