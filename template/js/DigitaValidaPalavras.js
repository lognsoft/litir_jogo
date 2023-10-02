//variaveis global
var palavraDoDia;
var ultimoClicado = null;
var contadorCamposPreenchidos = true;
var podedigitar = true;
var JogoAtivoInativo = true;
//estatistica de acertos e erros
var acertosTotais = 0;
var acertosPosErradaTotais = 0;
var erradasTotais = 0;
var loadingFront = document.querySelector(".analisandoPalavra");
let jogo = document.querySelector("#jogo");
let msgErro = document.querySelector(".msgErro");

document.querySelector("body").addEventListener("click", removeErrorMessage);
function removeErrorMessage(){

    let boxContainer = document.querySelector("#box-ul-container").offsetTop;
    msgErro.style.setProperty("height", (boxContainer-10) +"px", "important");

    if(msgErro.classList.contains("active"));
        msgErro.classList.remove("active");
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function loadGame() {
    criaCaixas();
    cliqueNaBoxDaletra();
    focusNaPrimeiraCaixa();
}

async function DigitaValidaPalavra() {

    palavraDoDia = await GeradorDePalavras();

    digitaTecladoVirtual();
    digitaTecladoFisico();
    loadGame();
    gerarDica();
    gerarDicaText();

    function apagaLetra(digito) {

        let caixasLinhaFocada = ultimoClicado.parentNode.querySelectorAll("li");
        let especiais = ['Backspace', 'ArrowLeft', 'ArrowRight'];
        //toda vez que clicar em uma box e todas estiverem preenchidas, sera permitido digitar uma letra substituta.
        podedigitar = true;

        //adiciona active sempre na ultima letra removida
        if (!JogoAtivoInativo)
            ultimoClicado.classList.add("active");

        //moveParaEsquerda
        if (digito == especiais[1]) {

            if (ultimoClicado.previousElementSibling != undefined) {

                ultimoClicado.classList.remove("active");
                ultimoClicado.classList.add("inative");
                ultimoClicado = ultimoClicado.previousElementSibling;
                // ultimoClicado.classList.remove("inative");
                // ultimoClicado.classList.add("active");

                //console.log(ultimoClicado);

                ultimoClicado.classList.add("active");

            }
        }

        // //moveParaDireita
        if (digito == especiais[2]) {

            if (ultimoClicado.nextSibling != undefined) {

                ultimoClicado.classList.remove("active");
                ultimoClicado.classList.add("inative");
                ultimoClicado = ultimoClicado.nextSibling;
                ultimoClicado.classList.add("active");
            }
        }

        //apaga
        if (digito == especiais[0]) {

            let existeDica = NaoPermiteApagarDica();

            if (existeDica)
                return;

            if (ultimoClicado.previousElementSibling != undefined) {
                ultimoClicado.previousElementSibling.classList.forEach(classe => {

                    if (classe == "dica")
                        existeDica = true;
                })
            }
            ultimoClicado.classList.forEach(classe => {
                if (classe == "dica")
                    existeDica = true;
            })

            if (existeDica)
                return;


            if (ultimoClicado.innerHTML != "") {

                if (ultimoClicado.previousElementSibling != null) {

                    ultimoClicado.innerHTML = "";
                    ultimoClicado.classList.remove("active");
                    ultimoClicado.classList.add("inative");
                    ultimoClicado = ultimoClicado.previousElementSibling;
                    ultimoClicado.classList.remove("inative");
                    ultimoClicado.classList.add("active");
                    return;
                } else {
                    ultimoClicado.innerHTML = "";
                }


            } else {

                caixasLinhaFocada.forEach((caixa, index) => {//O(n)

                    //apagando a letra do campo
                    if (ultimoClicado == caixa && index >= 1) {

                        caixa.classList.remove("active");
                        ultimoClicado = caixasLinhaFocada[index - 1];
                        ultimoClicado.classList.add("active");
                        ultimoClicado.innerHTML = "";
                        return;
                    }
                });
            }
        }

        function NaoPermiteApagarDica() {

            let existeDica = false;
            let caixas = ultimoClicado.parentNode.querySelectorAll("li");


            if (ultimoClicado.previousElementSibling != undefined) {

                ultimoClicado.previousElementSibling.classList.forEach(classe => {
                    if (classe == "letraCorretaLugarCerto") {
                        existeDica = true;
                        ultimoClicado.innerHTML = "";
                        selecionadoProximoElementoInativoPosPedidoDeDica();
                    }
                })
            }
            ultimoClicado.classList.forEach(classe => {
                if (classe == "letraCorretaLugarCerto") {
                    existeDica = true;
                    console.log("fae");
                }
            })

            return existeDica;
        }
    }
    
    function selecionadoProximoElementoInativoPosPedidoDeDica(){

        let caixas = ultimoClicado.parentNode.querySelectorAll("li");
    
        //Fazendo backspace para a posicao anterior 
        for(let i = 0; i < caixas.length; i++){
            
            if(caixas[i -1] != undefined){

                if(caixas[i].classList.contains("letraCorretaLugarCerto")){

                    ultimoClicado.classList.remove("active");


                    ultimoClicado = caixas[i -1];

                    ultimoClicado.classList.add("active");
                }

            }
        }

        //console.log(posicaLetraCorreta)

        // for(let i = 0; i < caixas.length; i++){

        //     if(!caixas[i].classList.contains("letraCorretaLugarCerto") && !caixas[i].classList.contains("active")){

        //         console.log(caixas[i], i);
    
        //         //Remove active da caixa atual
        //         ultimoClicado.classList.remove("active");
    
        //         //Recupera posicao da proxima caixa inativa
        //         ultimoClicado = caixas[i];
    
        //         //adiciona efeitos de ativo
        //         ultimoClicado.classList.add("active");
        //         break;
        //     }
        // }
    }

    async function confirmaPalavra(digito) {

        let especiais = ["Enter"];


        //confirma
        if (digito == especiais[0]) {
            if (verificaSeTodasLetrasForamPreenchidas()) {
                await validaPalavraDigitada();
            }
        }
    }

    async function verificaSeTodasLetrasForamPreenchidas() {
        let tentativas = document.querySelectorAll('.tentativas');
        let msgErroDigiteTodasAsLetras = document.querySelector(".msgErro");
        let contaCampoPreenchido = 0;
        ultimoClicado.parentNode.querySelectorAll("li").forEach(element => {
            if (element.innerHTML != "")
                contaCampoPreenchido++;
        });

        if (contaCampoPreenchido == palavraDoDia.qntLetras)
            return true;


        //alert("Digite todas as letras");
        // msgErroDigiteTodasAsLetras.style.display = 'block';
        // msgErroDigiteTodasAsLetras.classList.add("active");
        // msgErroDigiteTodasAsLetras.innerHTML = "Digite todas as letras";
        // console.log("bla")
        for(let i = 0; i < tentativas.length; i++){

            if(!tentativas[i].classList.contains('off')){
                tentativas[i].classList.remove('LetraAnimacaoErrou');
                await sleep(100);
                tentativas[i].classList.add('LetraAnimacaoErrou');
                break;
            }
        }

        return false;
    }

    function permitirEscrever() {

        let caixasLinhaFocada = ultimoClicado.parentNode.querySelectorAll("li");
        //identifica quantas caixas vazias existe na linha atual
        for (let i = 0; i < caixasLinhaFocada.length; i++) {
            if (caixasLinhaFocada[i].innerHTML == "") {
                contadorCamposPreenchidos = false;
            }
        }

        //valida se ainda existe espaco para ser digitado
        //pode digitar
        if (!contadorCamposPreenchidos) {
            
            contadorCamposPreenchidos = true;
            return true;
        }
        //nao pode digitar, ja atingiu todos os campos
        else if (ultimoClicado.nextSibling == null) {
            // ultimoClicado.classList.remove("active");
            // ultimoClicado.classList.add("inative");
            return false;
            //Caso todos os campos ja foram preenchidos,
            //se for clicado em uma box ja tem letra,
            //sera atualizada a letra, e a selecao da box sera removida
        } else {
            // ultimoClicado.classList.remove("active");
            // ultimoClicado.classList.add("inative");
        }
    }

    async function escreverLetra(digito) {

        let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let linhaAtual = ultimoClicado.parentNode.classList;

        //impede digitar uma letra caso nao esteja no campo permitido
        for (let i = 0; i < linhaAtual.length; i++) {
            if (linhaAtual[i] == "off")
                return;
        }

        //digita
        for (let i = 0; i < alfabeto.length; i++) { //O(n)
            if (alfabeto[i] == digito) {

                let existeDica = NaoPermiteEditarDica();

                if (existeDica)
                    return;

                ultimoClicado.innerHTML = digito;

                //existe um defeito feito pelo pollar
                //animacaoAumentaDiminuiTamanhoBox();
                avancaProximaLetra();
                return;
            }
        }

        function NaoPermiteEditarDica() {
            let existe = false;
            let msgErroEditarDica = document.querySelector(".msgErro");

            ultimoClicado.classList.forEach(element => {
                if (element == "letraCorretaLugarCerto") {
                    msgErroEditarDica.classList.add("active");
                    msgErroEditarDica.innerHTML = "Não e permitido editar a dica";
                    existe = true;
                }
            })

            return existe;
        }
    }

    //ideia ascender a tecla que foi digitada no fisico
    function digitaTecladoVirtual() {

        let letras = document.querySelectorAll('.teclado span');

        letras.forEach(letra => {
            letra.addEventListener("click", (tecla) => {

                controladorTeclados(tecla.target.title);
                tecla.target.blur();
            })

            letra.removeEventListener("click", e => { });
        });
    }

    async function digitaTecladoFisico() {

        let body = document.querySelector("body");

        body.addEventListener("keyup", async (tecla) => {
            //efeito teclado

            efeitoTecladoVirtualDigitando(tecla);
            await controladorTeclados(tecla.key);

        })
    }

    async function controladorTeclados(tecla) {

        //Control da mensagem de palavra nao permitida
        //Faz sumir a caixa toda vez que uma palavra nao permitida for digitada
        removeErrorMessage();
        if (!JogoAtivoInativo)
            return;

        apagaLetra(tecla);
        await confirmaPalavra(tecla);

        if (podedigitar) {
            escreverLetra(tecla);
        }
        podedigitar = permitirEscrever();
    }

    function avancaProximaLetra() {
        //CRIAR AMANHA 
        //SE ELE TENTAR AVANCAR E O PROXIMO JA EXISTIR LETRA, ELE PULA PARA O PROXIMO VAZIO.
        if (ultimoClicado.nextSibling != null) {

            if (ultimoClicado.nextSibling.innerHTML == "") {
                ultimoClicado.classList.remove("active");
                ultimoClicado.classList.add("inative");
                ultimoClicado.nextSibling.classList.remove("inative");
                ultimoClicado.nextSibling.classList.add("active");
                ultimoClicado = ultimoClicado.nextSibling;
                return;
            }
        } else {
            controleSelecaoProximaBox();
            return;
        }
        controleSelecaoProximaBox();

        function controleSelecaoProximaBox() {

            if (ultimoClicado.innerHTML != "") {

                let parentNode = ultimoClicado.parentNode.querySelectorAll("li");

                for (let i = 0; i < parentNode.length; i++) {

                    if (parentNode[i].innerHTML == "") {

                        ultimoClicado.classList.remove("active");

                        ultimoClicado = parentNode[i];
                        ultimoClicado.classList.add("active");
                        break;
                    }
                }
            }
        }

        //criaCaixas();
    }
}

function criaCaixas() {

    //for (let i = 0; i < palavraDoDia.tentativas; i++) {
    //palavraDoDia.tentativas = 6;
    for (let i = 0; i < palavraDoDia.qntLetras; i++) {

        const ulElement = document.createElement("ul");
        ulElement.classList.add(`tentativas`);
        ulElement.classList.add(`t${i}`)
        document.getElementById("box-ul-container").appendChild(ulElement);

        for (let t = 0; t < palavraDoDia.qntLetras; t++) {

            const liElement = document.createElement("li");
            liElement.classList.add(`inative`);
            document.querySelector(`.t${i}`).appendChild(liElement);
        }

        if (palavraDoDia.tentativas != i)
            document.querySelector(`.t${i}`).classList.add("off");
    }
}

function cliqueNaBoxDaletra() {

    //Elmentos HTML
    let caixas = document.querySelectorAll(".tentativas li")

    caixas.forEach(caixa => { //O(n)

        caixa.addEventListener("click", e => {

            
            if (!JogoAtivoInativo)
                return;

            //Se clicar fora da linha permitida, nao sera permitido digitar
            //e se clicar na caixa que ja tem letra correta, nao sera possivel digitar
            let campoOff = e.target.parentNode.classList.contains("off");
            let campoPreenchido = e.target.classList.contains("letraCorretaLugarCerto");

            if (campoOff || campoPreenchido) return;

            //console.log("fa");

            //toda vez que clicar em uma box e todas estiverem preenchidas, sera permitido digitar uma letra substituta.
            podedigitar = true;

            if (ultimoClicado != null) {
                ultimoClicado.classList.remove("active");
                ultimoClicado.classList.add("inative");
            }
            e.target.classList.add("active");
            e.target.classList.remove("inative");
            ultimoClicado = e.target;
        });
    });
}

async function validaPalavraDigitada() {

    let posTentativas = document.querySelectorAll(".tentativas");
    let palavraCompleta = "";

    for (let posTentativa of posTentativas) {


        if (posTentativa.classList[1].split("t")[1] == palavraDoDia.tentativas) {
            //console.log(palavraDoDia.tentado, posTentativa);

            let preenchidas = 0;
            //lista todas as letras para validar se existe mais que 5, para disparar o enter
            posTentativa.querySelectorAll("li").forEach(letra => {
                //conta++ toda vez que encontra um campo que nao seja vazio
                if (letra.innerHTML != "") {
                    preenchidas++;

                    palavraCompleta += letra.innerHTML.toUpperCase();
                }
            });
            //O(n);
            //dispara evento para validar se a palavra esta correta
            if (preenchidas == palavraDoDia.qntLetras) {

                await validaRegraDoJogo(palavraCompleta);
                break;
            }
        }
    }
}

function focusNaPrimeiraCaixa() {

    let caixas = document.querySelectorAll(".tentativas li")[0];

    caixas.click();

    caixas.classList.add("active");
    caixas.classList.remove("inative");
    ultimoClicado = caixas;
}