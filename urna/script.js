const teclados = document.querySelectorAll(".teclado--botao")
const numero = document.querySelectorAll(".numero")
const imagem = document.querySelector(".d-1-image img")
const escPresidente = document.querySelector(".d-1-2")
const nomePresidente = document.querySelector(".d-1-4")
const audio = document.querySelector('audio')
const confirmacao = document.querySelector(".confimacao")
const confirma = document.querySelector('.botao--confirma')
const tela = document.querySelector(".d-1-left")
const telaDireita = document.querySelector(".d-1-right")
const botaoCorrige = document.querySelector('.botao--corrige')
const botaoBranco = document.querySelector(".botao--branco")
const obrigado = document.querySelector(".obrigado")
const info = document.querySelector(".d-2")

let presidentes = [
    Bolsonaro = 17,
    lula = 13
]
let cliques = [];


teclados.forEach((item,index)=> {
    item.addEventListener("click", function digitaBotoes (e){
        cliques.push(item.innerHTML)
        escPresidente.innerHTML = 'PRESIDENTE'
        console.log(cliques)
        numero[0].innerHTML = cliques[0]
        if (cliques.length > 1) {
            numero[1].innerHTML = cliques[1]
        }
        if (cliques.length == '2') {
            numerosDigitados = numero[0].innerHTML + numero[1].innerHTML;
                if (numerosDigitados != presidentes[0] && numerosDigitados != presidentes[1]) {
                    escPresidente.innerHTML = 'PRESIDENTE INVALIDO'
                    cliques = []
                    numero[0].innerHTML = ''
                    numero[1].innerHTML = ''
                } 
                if (numerosDigitados == presidentes[0]) {
                    imagem.setAttribute('src', 'images/bolsonaro.jpg')
                    nomePresidente.innerHTML = ' Nome: JAIR BOLSONARO<br/> Partido: PSL</br>'
                    }
                if (numerosDigitados == presidentes[1]) {
                    imagem.setAttribute('src', 'images/lula.jpg')
                    nomePresidente.innerHTML = ' Nome: LULA<br/> Partido: PT</br>'
                    }
                    if (item.innerHTML == 'CONFIRMA') {
                        confirmacao()
                    }
                    if (item.innerHTML == 'CORRIGE') {
                        corrigeTela()
                    }
                }
        }
           
    )
})

confirma.addEventListener('click', function confirmacao (){
    if (cliques.length > 1) {
        audio.play()
        tela.style.display = 'none'
        obrigado.style.display = 'block'
        info.style.display = 'none'
    }
    setTimeout(reiniciar, 3000)
})

function reiniciar() {
    tela.classList.remove('aviso--grande')
    imagem.setAttribute('src', '')
    nomePresidente.innerHTML = ' Nome: <br/> Partido: </br>'
    tela.style.display = 'flex'
    numero[0].innerHTML = ''
    numero[1].innerHTML = ''
    cliques = []
    obrigado.style.display = 'none'
    info.style.display = 'flex'
}

botaoBranco.addEventListener('click', function votoBranco(){
        audio.play()
        tela.style.display = 'none'
        obrigado.style.display = 'block'
        info.style.display = 'none'
        setTimeout(reiniciar, 3000)
})

botaoCorrige.addEventListener("click", function corrigeTela (){
    escPresidente.innerHTML = 'PRESIDENTE'
    numero[0].innerHTML = ''
    numero[1].innerHTML = ''
    imagem.setAttribute('src', '')
    nomePresidente.innerHTML = ' Nome: <br/> Partido: </br>'
    cliques = []
})