const setaLeft = document.querySelector(".seta-left")
const setaright = document.querySelector(".seta-right")
const slider1 = document.querySelector(".slider1")
const slider2 = document.querySelector(".slider2")
const slider3 = document.querySelector(".slider3")


function alterarSliderLeft() {
    if (slider1.classList.contains('ativo')) {
        slider1.classList.remove('ativo')
        slider2.classList.add('ativo')
    }
    else if (slider2.classList.contains('ativo')) {
        slider2.classList.remove('ativo')
        slider3.classList.add('ativo')
    }
    else if (slider3.classList.contains('ativo')) {
        slider3.classList.remove('ativo')
        slider1.classList.add('ativo')
    }
}

function alterarSliderRight() {
    if (slider1.classList.contains('ativo')) {
        slider1.classList.remove('ativo')
        slider3.classList.add('ativo')
    }
    else if (slider2.classList.contains('ativo')) {
        slider2.classList.remove('ativo')
        slider1.classList.add('ativo')
    }
    else if (slider3.classList.contains('ativo')) {
        slider3.classList.remove('ativo')
        slider2.classList.add('ativo')
    }
}

setInterval(alterarSliderLeft, 5000)
setaLeft.addEventListener('click', alterarSliderLeft)
setaright.addEventListener('click', alterarSliderRight)