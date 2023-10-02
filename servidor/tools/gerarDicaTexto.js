module.exports = function gerarDicaTexto(jogadorEncontrado, jogadorPalavra) {

    let pontosMinimo = 4;

    if (jogadorPalavra.dicaTexto == "none")
        return {
            dica: false,
            msg: "Essa palavra não contem nenhuma dica!"
        };


    let removerPontos = jogadorPalavra.pontos / 2;

    if (jogadorPalavra.pontos < pontosMinimo)
        return {
            dica: false,
            msg: "Para pedir dica você precisa no mínimo " + pontosMinimo + " pontos!"
        };

    if (!jogadorPalavra.dicaTextoSolicitada) {

        //remove pontos para pedir dica
        //jogadorEncontrado.pontos -= removerPontos;
        jogadorPalavra.pontos -= removerPontos;

        jogadorPalavra.dicaTextoSolicitada = true;
    }

    let palavra = {
        dicaSolicitada:jogadorPalavra.dicaTextoSolicitada,
        dica: jogadorPalavra.dicaTexto,
        pontos: jogadorPalavra.pontos,
        pontosTotais: jogadorEncontrado.pontos
    }

    return palavra;
}