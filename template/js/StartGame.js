document.querySelector(".botaoIniciarJogo").addEventListener("click", iniciarJogo);

async function iniciarJogo(event) {

    let jogoAtivoFront = document.querySelector(".jogoAtivo");
    let inciarJogoFront = document.querySelector(".inciarJogo");

    event.preventDefault();

    let err = await CadastrarJogador();

    if (err.fail){
        desativaAlerta(err.msg);
        return;
    }

    jogoAtivoFront.style.display = "block";
    inciarJogoFront.style.display = "none";

    //loadGame
    DigitaValidaPalavra();
}

async function desativaAlerta(err){
    
    let msgErro = document.querySelector(".alerta-usuario");

    loadingFront.style.display = "none";
    msgErro.innerText = err;
    msgErro.classList.add("active");
    await sleep(3500);
    msgErro.classList.remove("active");
}

function sleep(time){
    return new Promise(resolve => setTimeout(() => resolve,time));
}