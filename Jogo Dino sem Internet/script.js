const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let estapulando = false;
let position = 0

function pressSpace (event) {
    if (event.keyCode == 38) {
        if (!estapulando) {
        jump()
        }
    }
}
function jump () {

    estapulando = true;

    let pulo = setInterval(() => {
        if(position >= 150) {
            clearInterval(pulo)

            //descendo
            let descer = setInterval(() => {
                if (position <= 0) {
                    clearInterval(descer)
                    estapulando = false;
                } else 
                position -= 20
                dino.style.bottom = position + "px";
            }, 20)
        } 
        else {
            //subindo
        position += 20;
        dino.style.bottom = position + "px";
        }
    }, 20);
}
    

function criarcactus() {
    const cactus = document.createElement("div")
    let cactusposition = 1000;
    let RandomTime = Math.random() * 5500;

    cactus.classList.add("cactus")
    cactus.style.left = 1000 + "px"
    background.appendChild(cactus)

    let IntervaloEsquerda = setInterval(() => {
        if(cactusposition < -60) {
            clearInterval(IntervaloEsquerda);
            background.removeChild(cactus);
        } else if(cactusposition > 0 && cactusposition < 60 && position < 60) {
            clearInterval(IntervaloEsquerda)
            document.body.innerHTML = '<h1 class="game-over">GAME OVER</h1>'
        } else {
            cactusposition -= 10;
            cactus.style.left = cactusposition + "px"
        }
    }, 20);

        setTimeout(criarcactus, RandomTime);
}
criarcactus();
document.addEventListener("keydown", pressSpace);