const nomeInput = document.querySelector(".name-input")
const alturaInput = document.querySelector(".altura-input")
const pesoInput = document.querySelector(".peso-input")
const calcular = document.querySelector(".div-calcular")
const resultado = document.querySelector(".resultado")
const textResultado = document.querySelector(".text-resultado")



function mostraNome() {
    const nomeDigitado = nomeInput.value
    const alturaDigitada = alturaInput.value
    const pesoDigitado = pesoInput.value
    if (nomeDigitado == '' || alturaDigitada == '' || pesoDigitado == '')  {
        textResultado.innerHTML = 'ALGUM CAMPO NÃO FOI DIGITADO'
    } else {
        const IMCtotal = pesoDigitado / (alturaDigitada * alturaDigitada)
        const IMC = IMCtotal.toFixed(2)
        if(IMC < 18.5) {
            textResultado.innerHTML = `Olá ${nomeDigitado}, Seu IMC é ${IMC}<br> Você está Abaixo do Peso</p>`
        } else if (IMC < 24.9) {
            textResultado.innerHTML = `Olá ${nomeDigitado}, Seu IMC é ${IMC}<br> Você está no peso ideal</p>`
        } else {
            textResultado.innerHTML = `Olá ${nomeDigitado}, Seu IMC é ${IMC}<br> Você está com Sobrepeso </p>`
        }
    }
}

calcular.addEventListener("click", mostraNome)
