module.exports = function gerarDica(jogadorPalavra, jogadorEncontrado) {

    let pontosMinimo = 2;

    if (jogadorPalavra.vetPos == undefined)
        return {
            dica: false,
            msg: "Nenhuma letra encontrada!"
        };

    let tentativaAtual = jogadorPalavra.tentativas - 1;
    let letrasCorretasPosErrada = jogadorPalavra.vetPos.letrasCorretasPosErrada;
    let letrasCorretas = jogadorPalavra.vetPos.letrasCorretas;
    let letras_pos_errada_existentes_na_palavra = [];
    let novoVetor = [];

    if (jogadorPalavra.tentativaDica == tentativaAtual)
        return {
            dica: false,
            msg: "Só pode uma letra por tentativa"
        };

    if (letrasCorretasPosErrada.length == 0)
        return {
            dica: false,
            msg: "Nenhuma letra encontrada!"
        };


    if (jogadorPalavra.pontos < pontosMinimo)
        return {
            dica: false,
            msg: "Para pedir letra você precisa no mínimo " + pontosMinimo + " pontos!"
        };

        
    jogadorPalavra.tentativaDica = tentativaAtual;
    jogadorPalavra.pedidosDica += 1;

    // jogadorPalavra.pontos /= 2;

    let removerPontos = jogadorPalavra.pontos / 2;

    //jogadorPalavra.palavra = "EEAEEE";

    //recalcula pontos;
    //console.log(statusTentativa.pontos, jogadorPalavra.pedidosDica);

    for (let le = 0; le < letrasCorretasPosErrada.length; le++) {
        for (let pl = 0; pl < jogadorPalavra.palavra.length; pl++) {

            //console.log(letrasCorretasPosErrada[le].letra, jogadorPalavra.palavra[pl]);

            if (letrasCorretasPosErrada[le].letra == jogadorPalavra.palavra[pl]) {
                //console.log(letrasCorretasPosErrada[le].letra, pl)

                letras_pos_errada_existentes_na_palavra.push({ letra: letrasCorretasPosErrada[le].letra, posicao: pl });
            }
        }
    }

    // Percorre cada elemento do vetor letras_pos_errada_existentes_na_palavra
    letras_pos_errada_existentes_na_palavra.forEach(elemento => {

        // Verifica se o elemento não está presente no vetor letrasCorretas
        if (!letrasCorretas.some(e => e.letra === elemento.letra && e.posicao === elemento.posicao)) {
            // Verifica se o elemento não está presente no novo vetor
            if (!novoVetor.some(e => e.letra === elemento.letra && e.posicao === elemento.posicao)) {
                // Adiciona o elemento ao novo vetor
                novoVetor.push(elemento);
            }
        }
    });

  


    //remove pontos para pedir dica
    //jogadorEncontrado.pontos -= removerPontos;
    jogadorPalavra.pontos -= removerPontos;

    let indiceAleatorio = Math.floor(Math.random() * novoVetor.length);

    let palavra = {
        dica: novoVetor[indiceAleatorio],
        pontos: jogadorPalavra.pontos,
        pontosTotais: jogadorEncontrado.pontos
    };

    return (letras_pos_errada_existentes_na_palavra.length > 0) ? palavra : 403;
}