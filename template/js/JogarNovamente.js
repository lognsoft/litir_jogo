function jogarNovamente() {
    reiniciarJogo();
}

function reiniciarJogo() {
    let botaoJogarNovamenteFront = document.querySelector(".BtnJogarNovamente");

    botaoJogarNovamenteFront.addEventListener("click", resetGame);

}

async function resetGame() {

    loadingFront.style.display = "block";
    jogo.style.display = "none";

    let botaoGerarDicaFront = document.querySelector("#gerarDicaText");
    let estatistica = document.querySelector(".estatistica");
    let linhasDoJogoFront = document.querySelectorAll("#box-ul-container ul");
    let pontuacaoFront = document.querySelector(".pontuacao");
    pontuacaoFront.innerHTML = "0.0";

    linhasDoJogoFront.forEach(linha => {
        linha.remove();
    });

    //botaoJogarNovamenteFront;
    estatistica.style.display = "none";
    botaoGerarDicaFront.style.display = "flex";
    botaoGerarDicaFront.innerHTML = "book";
    document.querySelector(".modalDicaTexto p").innerHTML = "";
    await resetarTodosOsEstatudsDoJogo();
    loadGame();
}

async function resetarTodosOsEstatudsDoJogo() {

    palavraDoDia = await GeradorDePalavras();

    let tecladoVirtualFront = document.querySelectorAll(".teclado span");
    JogoAtivoInativo = true;
    acertosTotais = 0;
    acertosPosErradaTotais = 0;
    erradasTotais = 0;

    tecladoVirtualFront.forEach(tecla => {

        tecla.classList.forEach(classe => {
            if (classe = "letraCorretaLugarCerto")
                tecla.classList.remove(classe);

            if (classe = "letraCorretaLugarErrado")
                tecla.classList.remove(classe);

            if (classe = "letraIncorreta")
                tecla.classList.remove(classe);
        })

    });
}

(function(){
    const desistirModal = document.getElementById("desistir-modal"),
        btnDesistir = document.querySelector(".desistir"),
        btnConfirmarDesisitir = document.querySelectorAll(".box-buttons span");


    btnDesistir.addEventListener("click", (e) => {
        desistirModal.style.display = "flex";

        btnConfirmarDesisitir[0].addEventListener("click", confirmaDesistencia);

        btnConfirmarDesisitir[1].addEventListener("click", (e) => {
            desistirModal.style.display = "none";
        });
    });

})();

async function confirmaDesistencia(){
    let jogador = JSON.parse(localStorage.getItem("jogador"));
    let gerarDicaTextFront = document.querySelector("#gerarDicaText");
    let meusPontosFront = document.querySelector(".meusPontos"); 
    await axios.patch(`${ROUT.URL}/desistencia`, { jogador: jogador }).then(async (response) => {
        let ranking = document.querySelectorAll('.ranking ul li');
        document.querySelector(".pontuacaoTotal").innerHTML = response.data.jogadorEncontrado.pontos.toFixed(1);
        for(let i = 0; i < ranking.length; i++){
            if(ranking[i].classList.contains('minhaPosicaoNoRank')){
                ranking[i].querySelector("b").innerHTML = response.data.jogadorEncontrado.pontos.toFixed(1);
                ranking[i].querySelector("b").innerHTML = response.data.jogadorEncontrado.pontos.toFixed(1);
                meusPontosFront.innerHTML = response.data.jogadorEncontrado.pontos.toFixed(1);
                break;
            }
        }
        document.querySelector("#gerarDicaText").classList.remove("active");
        document.querySelector("#gerarDica").classList.remove("active");
        gerarDicaTextFront.classList.remove("openModal");

        await resetGame();
    });
    document.getElementById("desistir-modal").style.display = "none";
}