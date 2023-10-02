async function CadastrarJogador() {

    try {
        const nickFrontEnd = document.querySelector(".nomeUsuario").value;
        loadingFront.style.display = "block";

        const response = await axios.post(`${ROUT.URL}/startGame`, {
            nick: nickFrontEnd,
        });

        const jogador = JSON.stringify(response.data.jogador);
        localStorage.setItem("jogador", jogador);

        AtualizarRankingFrontEnd(response.data);
        resetRank(response.data.tempoReset);

        // await ListarRanking();
        //analisandoPalavra.style.display = "none";
        return response.data; // No está claro por qué se resuelve con EhPalavrao
    } catch (error) {
        return error.response.data;
    }
}

function resetRank(countdown) {

    let timer = setInterval(function () {
        // Converte o tempo restante em horas, minutos e segundos
        let hours = Math.floor(countdown / 3600);
        let minutes = Math.floor((countdown - (hours * 3600)) / 60);
        let seconds = countdown - (hours * 3600) - (minutes * 60);

        // Formata o tempo restante com o padrão HH:mm:ss
        let time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

        // Atualiza o relógio na tela
        document.querySelector('.clock').innerHTML = time;

        // Se o contador chegar a zero, para o temporizador
        if (countdown === 0) {


            let msgRankAtualizouFront = document.querySelector(".atualizacao-container");

            msgRankAtualizouFront.style.display = "flex";
            setTimeout(() => { msgRankAtualizouFront.style.display = "none"; window.location.reload(); }, 5000);

            clearInterval(timer);
        }

        // Decrementa o contador a cada segundo
        countdown--;


    }, 1000);
}


