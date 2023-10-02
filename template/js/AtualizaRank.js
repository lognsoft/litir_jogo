function AtualizarRankingFrontEnd(response) {

    let jogador = JSON.parse(localStorage.getItem("jogador"));
    let meuRankFront = document.querySelector(".meuRank");
    meuRankFront.innerHTML = response.posicaoRank;

    let ul = document.querySelectorAll(".ranking ul li");
    ul.forEach(li => { li.remove(); });

    for (let i = 0; i < response.top10Jogadores.length; i++) {

        const element = document.createElement("li");
        element.setAttribute("id", response.top10Jogadores[i].id);
        let usuario = response.top10Jogadores[i].nick.length > 8 ? response.top10Jogadores[i].nick.substr(0, 8) + "..." : response.top10Jogadores[i].nick
        if(i < 3){
            element.setAttribute("style","display: flex; align-items:center")
            element.innerHTML = `<img src="public/guess-the-word-game-gui-assets/PNG/profile-levels${i}.gif" alt=""/> - ${usuario} - <b>${response.top10Jogadores[i].pontos.toFixed(1)}</b>`;
        } else {
            element.innerHTML = `${i + 1} - ${usuario} - <b>${response.top10Jogadores[i].pontos.toFixed(1)}</b>`;
            element.setAttribute("class","alinhado");
        }

        document.querySelector(".ranking ul").appendChild(element);

        if (response.top10Jogadores[i].id == jogador.id) {
            element.classList.add("minhaPosicaoNoRank");
        }
    }
}