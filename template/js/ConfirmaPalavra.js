function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function validaRegraDoJogo(palavraPreenchida) {
    let tentativas = document.querySelectorAll('.tentativas');
    // let tentaivaOn = null;

    //desativa o jogo nas requisicoes
    JogoAtivoInativo = false;
    loadingFront.style.display = "block";

    //espera essa birosca
    //await new Promise(r => setTimeout(r, 700));

    let estatusDoJogo = await verificaSePalavraExiste(palavraPreenchida);
    let palavraNaoPermitida = document.querySelector(".msgErro");

    //Se clicar na box de erro a msg some
    //document.querySelector("body").addEventListener("click", async () => palavraNaoPermitida.style.display = "none");

    if (estatusDoJogo)
        verificaPalavraSePalavraEstaCorreta(estatusDoJogo);
    else {
        // palavraNaoPermitida.style.display = "block";
        // palavraNaoPermitida.innerHTML = "Palavra não permitida";
        // console.log("será");
        for(let i = 0; i < tentativas.length; i++){

            if(!tentativas[i].classList.contains('off')){
                tentativas[i].classList.remove('LetraAnimacaoErrou');
                await sleep(100);
                tentativas[i].classList.add('LetraAnimacaoErrou');
                break;
            }
        }
    }

     //ao terminar todas as requisicoes o jogo volta a ficar ativo
    let tentativeElementHTML = parseInt(ultimoClicado.parentNode.classList[1].split("t")[1]);
    JogoAtivoInativo = tentativeElementHTML != palavraDoDia.tentativas ? false : true;  
    loadingFront.style.display = "none";

}
function calculoDePontos() {

    let resultado = (acertosTotais * 2) + (acertosPosErradaTotais / 2) - (erradasTotais / 2);

    return resultado;
}

async function verificaPalavraSePalavraEstaCorreta(estatusDoJogo) {
    AtualizarRankingFrontEnd(estatusDoJogo);

    let linhaFront = ultimoClicado.parentNode;
    let letraFront = linhaFront.querySelectorAll("li");
    let pontosFront = document.querySelector(".pontuacao");
    let pontosTotaisFront = document.querySelector(".pontuacaoTotal");
    let meusPontosFront = document.querySelector(".meusPontos"); 
    let pontuacaoFinal = document.querySelector(".pontuacaoFinal");
    let habilitarBotaoDica = document.querySelector("#gerarDica");
    let habiltaBotaoDicaText = document.querySelector("#gerarDicaText");
    let tentativasFront = "";


    palavraDoDia.tentativas = estatusDoJogo.estatusTentativa.tentativas;

    pontosFront.innerHTML = estatusDoJogo.estatusTentativa.pontos.toFixed(1);
    pontosTotaisFront.innerHTML = estatusDoJogo.estatusTentativa.pontosTotais.toFixed(1);
    meusPontosFront.innerHTML = pontosTotaisFront.innerHTML;
    pontuacaoFinal.innerHTML = estatusDoJogo.estatusTentativa.pontosTotais.toFixed(1);
    

    for (let i = 0; i < estatusDoJogo.estatusTentativa.letrasCorretas.length; i++) {
        if (estatusDoJogo.estatusTentativa.letrasCorretas.length > 0) {

            let VetTetrasEPos = estatusDoJogo.estatusTentativa.letrasCorretas[i];

            letraFront[VetTetrasEPos.posicao].classList.add("letraCorretaLugarCerto");
            letraFront[VetTetrasEPos.posicao].innerHTML = VetTetrasEPos.letra;
        }
    }

    for (let i = 0; i < estatusDoJogo.estatusTentativa.letrasCorretasPosErrada.length; i++) {
        if (estatusDoJogo.estatusTentativa.letrasCorretasPosErrada.length > 0) {

            let objLetras = estatusDoJogo.estatusTentativa.letrasCorretasPosErrada[i];

            letraFront[objLetras.posicao].innerHTML = objLetras.letra;  
            letraFront[objLetras.posicao].classList.add("letraCorretaLugarErrado");
        }
    }

    for (let i = 0; i < estatusDoJogo.estatusTentativa.letrasIncorretas.length; i++) {
        if (estatusDoJogo.estatusTentativa.letrasIncorretas.length > 0) {
            letraFront[estatusDoJogo.estatusTentativa.letrasIncorretas[i].posicao].classList.add("letraIncorreta");
        }
    }

    ascenteTecladoLetraCorreta();

    if (estatusDoJogo.estatusTentativa.jogoTerminou) {
        jogoTerminou(estatusDoJogo.estatusTentativa);
    }
    else {
        avancaProximaLinha();
    }


   
    // tentativasFront = document.querySelectorAll(".LetraAnimacaoErrou")[document.querySelectorAll(".LetraAnimacaoErrou").length -1].querySelector(".letraCorretaLugarErrado");
    // console.log(estatusDoJogo.estatusTentativa.pontos, estatusDoJogo.estatusTentativa.pontosTotais);
    if(estatusDoJogo.estatusTentativa.pontos.toFixed(1) >= 2 && tentativasFront != null){
        habilitarBotaoDica.classList.add("active");
    } else {
        habilitarBotaoDica.classList.remove("active");
    }

    if(habiltaBotaoDicaText.innerHTML != "menu_book"){
        if(estatusDoJogo.estatusTentativa.pontos.toFixed(1) >= 4){
            habiltaBotaoDicaText.classList.add("active");
        } else {
            habiltaBotaoDicaText.classList.remove("active");
        }
    }
}

function avancaProximaLinha() {

    animacaoPerdeuOuErrouPalavra();

    let linhaFrontAtual = ultimoClicado.parentNode;
    let arr = linhaFrontAtual.children;
    let proximaLinha = linhaFrontAtual.nextElementSibling;

    linhaFrontAtual.classList.add("off");

    if (proximaLinha != null) {
        proximaLinha.classList.remove("off");

        ultimoClicado = proximaLinha.children[0];
        ultimoClicado.classList.add("active");
    }

    //deixa inativa todas as boxes da lileira atual
    for(i in arr){
        if(arr[i].classList.contains("active")){
            arr[i].classList.remove("active");
            arr[i].classList.add("inative");
            break;
        }
    }
}

function ascenteTecladoLetraCorreta() {

    let tecladoVirtualFront = document.querySelectorAll(".teclado span");
    let teclasPorLetra = {};

    tecladoVirtualFront.forEach(tecla => {
        const letra = tecla.innerHTML.toUpperCase();
        teclasPorLetra[letra] = tecla;
    });

    let letrasIncorreta = document.querySelectorAll("#box-ul-container li.letraIncorreta");
    let letrasPosErrada = document.querySelectorAll("#box-ul-container li.letraCorretaLugarErrado");
    let letrasPosCerta = document.querySelectorAll("#box-ul-container li.letraCorretaLugarCerto");

    for (let letra of letrasIncorreta) {
        const tecla = teclasPorLetra[letra.innerHTML.toUpperCase()];
        if (tecla) {
            tecla.classList.add("letraIncorreta");
        }
    }

    for (let letra of letrasPosErrada) {
        const tecla = teclasPorLetra[letra.innerHTML.toUpperCase()];
        if (tecla) {
            tecla.classList.remove("letraIncorreta");
            tecla.classList.add("letraCorretaLugarErrado");
        }
    }

    for (let letra of letrasPosCerta) {
        const tecla = teclasPorLetra[letra.innerHTML.toUpperCase()];
        if (tecla) {
            tecla.classList.remove("letraIncorreta");
            tecla.classList.remove("letraCorretaLugarErrado");
            tecla.classList.add("letraCorretaLugarCerto");
        }
    }

}

async function verificaSePalavraExiste(palavraPreenchida) {
    ////////////
    //se a palavra estiver correta

    //console.log(palavraPreenchida);
    let jogador = JSON.parse(localStorage.getItem("jogador"));
    let palavraExiste;
    let statusTentativa;
    let msgRankAtualizouFront = document.querySelector(".msgRankAtualizou");

    await axios.put(`${ROUT.URL}/aprenderPalavra`, { palavraTentada: palavraPreenchida }).then((response) => {
        palavraExiste = response.data;
    });

    if (!palavraExiste)
        return false;


    //console.log(statusTentativa)

    await axios.post(`${ROUT.URL}/confirmarPalavra`, { jogador: jogador, palavraTentada: palavraExiste }).then((response) => {
        statusTentativa = response;

       
    }).catch((error) => {

        //reinicia o jogo!
        msgRankAtualizouFront.style.display = "block";
        setTimeout(() => { msgRankAtualizouFront.style.display = "none"; window.location.reload(); }, 5000);

    });

    return (statusTentativa.data);

    // if (todasPalavras[decriptarPalavra()[0]].Palavra == palavraPreenchida) {
    //     return true;
    // }

    //se existe a palavra no arquivo local
    // if (verificaPalavraListaLocal(palavraPreenchida))
    //     return true;

    // //se existe a palavra exisistir na API
    // //caso nao exista na API, mostrada uma mensagem falando que a palavra nao e permitida
    // return await verificaPalavraAPI(palavraPreenchida)
}

// function verificaPalavraListaLocal(palavraPreenchida) {

//     //se nao encontrar a palvra na lista local,
//     //retorna falso para a API procurar
//     for (let i = 0; i < todasPalavras.length; i++) {

//         if (todasPalavras[i].Palavra == palavraPreenchida) {
//             return true;
//         }
//     }
//     return false;
// }

// async function verificaPalavraAPI(palavraPreenchida) {

//     let existe = false;
//     let analisandoPalavraFront = document.querySelector(".analisandoPalavra");
//     let palavraNaoPermitida = document.querySelector(".msgErro");

//     analisandoPalavraFront.style.display = "flex";

//     await axios.get(`https://dicio-api-ten.vercel.app/v2/${palavraPreenchida.toLowerCase()}`)
//         .then(async function (response) {
//             existe = true;
//             await aprenderNovaPalavra(palavraPreenchida);
//         })
//         .catch(function (error) {
//             palavraNaoPermitida.style.display = "block";
//             palavraNaoPermitida.innerHTML = "Palavra não permitida!";
//             existe = false;
//         }).finally(function () {
//             analisandoPalavraFront.style.display = "none";
//         });

//     return existe;
// }

// async function aprenderNovaPalavra(palavraPreenchida) {

//     await axios.put(`${ROUT.URL}/criarNovaPalavra`, {
//         palavra: palavraPreenchida
//     });
// }