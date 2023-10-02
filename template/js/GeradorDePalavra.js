var key;
var todasPalavras = [];
var dataUltimaAtualizacao;

async function GeradorDePalavras() {

    //criar animacao de carregando nova palavra
    let palavraGerada;

    //Gerando chave principal da criptografia
    // timestamp = new Date().getTime();
    // randonNumber = parseInt(Math.random() * 500);
    // key = Math.round(timestamp / randonNumber);

    // try {
    //     let jsonPalavras = atob(todasPalavras);
    //     todasPalavras = JSON.parse(jsonPalavras);
    // } catch (error) { }

    let jogador = JSON.parse(localStorage.getItem("jogador"));

    await axios.post(`${ROUT.URL}/gerarPalavra`, {
        id: jogador.id
    })
        .then(function (response) {
            palavraGerada = response.data;
        })
        .catch(function (error) {
            console.log(error);
        }).finally(() => {

            loadingFront.style.display = "none";
            jogo.style.display = "block";

        });

    //Chave principal da criptografia
    //decriptando chave principal
    //key = btoa(key);

    return palavraGerada;
}

function verificaSePreciaAtualizarPalavras() {

    const date = new Date();

    //var timestamp = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    var timestamp = date.getMinutes();

    return timestamp;
}