async function jogoTerminou(estatusDoJogo) {

    desativarRecursosControlesDoJogo();


    estatistica(estatusDoJogo);

    jogarNovamente();
    if (estatusDoJogo.ganhou)
        ganhou()
    else if (estatusDoJogo.ganhou)
        perdeu();
}

async function estatistica(estatusDoJogo) {

    let jogador = JSON.parse(localStorage.getItem("jogador"));
    let palavraCorreta = "";

    await axios.post(`${ROUT.URL}/fimDeJogo`, { jogador: jogador }).then((response) => {
        palavraCorreta = response;
    });

    let palavraCorretaFront = document.querySelector(".palavraCorreta");
    let ganhouPerdeuFront = document.querySelector("#ganhouPerdeu");
    let letrasCertasFront = document.querySelector("#letrasCertas");
    let letrasCertasPosErrada = document.querySelector("#letrasCertasPosErrada");
    let letrasErradas = document.querySelector("#letrasErradas");
    let meusPontosTotais = document.querySelector(".meusPontos");
    let modalDicaTextoFront = document.querySelector(".modalDicaTexto");
    let gerarDicaTextFront = document.querySelector("#gerarDicaText");
    let gerarDicaFront = document.querySelector("#gerarDica");

    gerarDicaTextFront.classList.remove("openModal")

    ganhouPerdeuFront.innerHTML = estatusDoJogo.ganhou == true ? "Acertou a palavra!" : "Errou a palavra!";

    gerarDicaTextFront.classList.remove("active");
    gerarDicaFront.classList.remove("active");
    letrasCertasFront.innerHTML = estatusDoJogo.acertos;
    letrasCertasPosErrada.innerHTML = estatusDoJogo.acertosPosErrada;
    letrasErradas.innerHTML = estatusDoJogo.erros;
    meusPontosTotais.innerHTML = estatusDoJogo.pontosTotais.toFixed(1);
    modalDicaTextoFront.style.display = "none";
    palavraCorretaFront.innerHTML = palavraCorreta.data;

    animacaoFinalizacaoJogo(estatusDoJogo);
}

function animacaoFinalizacaoJogo(estatusDoJogo) {

    let estatisticaFront = document.querySelector(".estatistica");

    if (estatusDoJogo.ganhou) {
        let interval = setInterval(() => {

            let ultimaPos = ultimoClicado.parentNode.querySelectorAll("li")[ultimoClicado.parentNode.querySelectorAll("li").length - 1];
            for (let i = 0; i < ultimaPos.classList.length; i++) {
                if (ultimaPos.classList[i] == "LetraAnimacaoEnter") {
                    clearInterval(interval);
                    setTimeout(() => {
                        estatisticaFront.style.display = "flex";
                    }, 1300);
                }
            }
        }, 10);

    } else
        estatisticaFront.style.display = "flex";
}

function perdeu() {
    animacaoPerdeuOuErrouPalavra();
}

function ganhou() {
    animacaoGanhaJogo();
}


function desativarRecursosControlesDoJogo() {   
    let linhaFrontAtual = ultimoClicado.parentNode;
    linhaFrontAtual.classList.add("off");
    JogoAtivoInativo = false;
}