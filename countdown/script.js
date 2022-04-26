const title = document.querySelector('.title')
const divData = document.querySelector(".div-data")
const inputData = document.querySelector(".input-date")
const inputText = document.querySelector(".input-text")
const btn = document.querySelector(".btn")
const diasElement = document.querySelector('.dias .p-element')
const horasElement = document.querySelector('.horas .p-element')
const minutosElement = document.querySelector('.minutos .p-element')
const segundosElement = document.querySelector('.segundos .p-element')
const mostrarNomeData = document.querySelector(".mostrarNomeData")
const divCountdown = document.querySelector(".div-countdown")
const btnNovaData = document.querySelector(".btn-novaData")
const asteris = document.querySelector(".asteris")
const asterisD = document.querySelector(".asteris-D")
const erroData = document.querySelector(".erroData")
document.querySelector('.input-date').valueAsDate = new Date();
const dataInicial =  inputData.value
console.log(dataInicial)
function countDown () {
    if (inputData.value != '' && inputText.value != '' && inputData.value > dataInicial) {
        const pegarData = inputData.value;
        const pegarNomeData = inputText.value
        const anoRequerido = pegarData.slice(0,4);
        const mesRequerido = pegarData.slice(5,7);
        const diaRequerido = pegarData.slice(8,10);
        
        const meuInterval = setInterval( function() {

        const dataRequerida = `${anoRequerido} ${mesRequerido} ${diaRequerido}`;
        const dataRequeridaContagem = new Date (dataRequerida)
        const diaAtual = new Date(); 
        
        const totalSegundos = (dataRequeridaContagem - diaAtual) / 1000;
        const days = Math.floor(totalSegundos / 3600 / 24);
        const hours = Math.floor(totalSegundos / 3600) % 24;
        const minutes = Math.floor(totalSegundos / 60) % 60;
        const seconds = Math.floor(totalSegundos) % 60; 
        divData.style.display = 'none';
        divCountdown.style.display = 'block';
        diasElement.innerHTML = days;
        horasElement.innerHTML = hours;
        minutosElement.innerHTML = minutes;
        segundosElement.innerHTML = seconds;
        mostrarNomeData.innerHTML = `contagem para ${pegarNomeData}`
        },1000)

        btnNovaData.addEventListener("click", function(){
            divCountdown.style.display = 'none';
            divData.style.display = 'flex';
            clearInterval(meuInterval)
            inputData.value = ''
            inputText.value = ''
            asteris.style.display = 'none'
            asterisD.style.display = 'none'
            erroData.style.display = 'none'
        })
    } 
        if (inputText.value == '') {
            asteris.style.display = 'inline'
    }
        if (inputData.value == '') {
            asterisD.style.display = 'inline'
        }
        if (inputData.value < dataInicial) {
            erroData.style.display = 'inline'
        }
}



btn.addEventListener("click", countDown)