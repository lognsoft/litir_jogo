var totalDicas = 0;

async function gerarDica() {

   
    let botaoGerarDicaFront = document.querySelector("#gerarDica");

    botaoGerarDicaFront.addEventListener("click", clickBtnDica);
}

async function clickBtnDica() {
 

    let jogador = JSON.parse(localStorage.getItem("jogador"));
    let gerarDicFront = document.querySelector("#gerarDica");
    let gerarDicTextoFront = document.querySelector("#gerarDicaText");

    JogoAtivoInativo = false;
    loadingFront.style.display = "block";
    gerarDicFront.style.pointerEvents = 'none';
    gerarDicFront.style.opacity = '0.5';

    await axios.post(`${ROUT.URL}/pedirDica`, { jogador: jogador }).then((response) => {

        let pontuacaoFront = document.querySelector(".pontuacao");
        let pontuacaoTotal = document.querySelector(".pontuacaoTotal");
        let msgErroFront = document.querySelector(".msgErro");
        let tecladoVirtualFront = document.querySelectorAll(".teclado span");

        let estatusDica = response.data.palavra;
        let pontos = estatusDica.pontos;
        let pontosTotais = estatusDica.pontosTotais;

     
        //console.log(response.data);
        tecladoVirtualFront.forEach(tecla => {
            if (response.data.palavra.dica.letra == tecla.innerHTML.toUpperCase()) {
                tecla.classList.add("letraCorretaLugarCerto");
                return;
            }
        });

        if (!estatusDica.dica) {

            msgErroFront.innerHTML = estatusDica.msg;
            msgErroFront.classList.add("active");

        } else {

            let lis = ultimoClicado.parentNode.querySelectorAll("li");
            pontuacaoFront.innerHTML = pontos.toFixed(1);
            pontuacaoTotal.innerHTML = pontosTotais.toFixed(1);

            gerarDicFront.classList.remove('active');
            // if(pontos.toFixed(1) < 2){
            //     gerarDicFront.classList.remove('active');
            // };

            if(pontos.toFixed(1) < 4){
                gerarDicTextoFront.classList.remove('active');
            }

            lis[estatusDica.dica.posicao].innerHTML = estatusDica.dica.letra;
            lis[estatusDica.dica.posicao].classList.add("letraCorretaLugarCerto");
            lis[estatusDica.dica.posicao].classList.remove("inative");  

            //mantem selecionado proxima caixa inativa ao adicionar uma dica.

            selecionadoProximoElementoInativoPosPedidoDeDica()

            AtualizarRankingFrontEnd(response.data);
        }

    }).finally(() => {
        JogoAtivoInativo = true;
        loadingFront.style.display = "none";
        gerarDicFront.style.pointerEvents = 'auto';
        gerarDicFront.style.opacity = '1';
    });
}

function selecionadoProximoElementoInativoPosPedidoDeDica(){

    let caixas = ultimoClicado.parentNode.querySelectorAll("li");

    //Se a letra que foi virada na dica, for da mesma posicao
    //que a box que esta selecionado, sera movimentado para outra box
    if(ultimoClicado.classList.contains("letraCorretaLugarCerto")){

        for(let i = 0; i < caixas.length; i++){

            if(caixas[i].classList.contains("inative")){

                //Remove active da caixa atual
                ultimoClicado.classList.remove("active");

                //Recupera posicao da proxima caixa inativa
                ultimoClicado = caixas[i];

                //adiciona efeitos de ativo
                ultimoClicado.classList.add("active");
                break;
            }
        }
    }
}

async function gerarDicaText() {

    let botaoGerarDicaFront = document.querySelector("#gerarDicaText");

    botaoGerarDicaFront.addEventListener("click", gerarDicaTextClick);
}

async function gerarDicaTextClick(e) {
    
    let msgErroFront = document.querySelector(".msgErro");
    let modalDicaTextoFront = document.querySelector(".modalDicaTexto");
    let gerarDicaTextFront = document.querySelector("#gerarDicaText");
    // let mostrarDica = document.querySelector(".btn-visu");
    const modal = document.querySelector(".modalDicaTexto");

    JogoAtivoInativo = false;
    // gerarDicaTextFront.style.pointerEvents = 'none';
    // gerarDicaTextFront.style.opacity = '0.5';


    let jogador = JSON.parse(localStorage.getItem("jogador"));
    loadingFront.style.display = "block";

    
    // if(pontos >= pontosTotais){
    //     console.log("fa");
    // }

    if(e.target.classList.contains("openModal")){
        modal.style.display = "flex";
        // return;
    }
    
    
    await axios.post(`${ROUT.URL}/pedirDicaTexto`, { jogador: jogador }).then((response) => {

        let estatusDica = response.data.palavra;
        // console.log(estatusDica);
        // console.log(gerarDicaTextFront.innerHTML);
        if (!estatusDica.dica) {
            msgErroFront.innerHTML = estatusDica.msg;
            if(gerarDicaTextFront.innerHTML !== "menu_book"){
                msgErroFront.classList.add("active");
            }
            
        } else {

            let pontuacaoFront = document.querySelector(".pontuacao");
            let pontuacaoTotal = document.querySelector(".pontuacaoTotal");

            let pontos = estatusDica.pontos;
            let pontosTotais = estatusDica.pontosTotais;
            let dicaTexto = estatusDica.dica;

 
            modalDicaTextoFront.style.display = "flex";
            modalDicaTextoFront.querySelector('p').innerHTML = `${dicaTexto}`;
            pontuacaoFront.innerHTML = pontos.toFixed(1);
            pontuacaoTotal.innerHTML = pontosTotais.toFixed(1);
            // mostrarDica.style.display = 'inline-block';
            e.target.innerHTML = "menu_book";
            e.target.classList.remove("active");
            e.target.classList.add("openModal")

        }

        AtualizarRankingFrontEnd(response.data);

    }).finally(() => {
        JogoAtivoInativo = true;
        loadingFront.style.display = "none";
        gerarDicaTextFront.style.pointerEvents = 'auto';
        gerarDicaTextFront.style.opacity = '1';
    });

}