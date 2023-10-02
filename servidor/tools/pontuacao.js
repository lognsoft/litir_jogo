module.exports = function pontuacao(statusTentativa, jogadorEncontrado, jogadorPalavra) {
    // jogadorEncontrado.pontos = jogadorPalavra.pontos
    let pontos = 0;
    let ganhou = statusTentativa.letrasCorretas.length == jogadorPalavra.palavra.length ? true : false;
    let jogoTerminou = jogadorPalavra.palavra == jogadorPalavra.tentativas;

    let acertos = statusTentativa.letrasCorretas.length;
    let acertosPosErrada = statusTentativa.letrasCorretasPosErrada.length;
    let erros = statusTentativa.letrasIncorretas.length;

    // console.log(jogadorEncontrado.pontos, jogadorPalavra.pontos);
    // if(pontos > 0){
        pontos += acertos * 2; //cada letra correta ganha 2 pontos
        pontos += acertosPosErrada * 1; //cada letra correta pos errada ganha 1 ponto /2, DARIA MEIO PONTO
        //pontos -= erros / 2; //cada acerto na posicao errada, recebe meio ponto;
    // }


    // console.log(pontos, jogadorEncontrado.pontos);
    //PONTOS TOTAIS
    // console.log('jogador: ',jogadorEncontrado.pontos)
    // jogadorEncontrado.pontos += pontos;

    //PONTOS PALAVRA ATUAL
    // console.log('palavras: ',jogadorEncontrado.pontos)
    jogadorPalavra.pontos += pontos;

    //ACERTOS POSICAO ERRADA E ERROS
    jogadorPalavra.acertos += acertos;
    jogadorPalavra.acertosPosErrada += acertosPosErrada;
    jogadorPalavra.erros += erros;

    if (ganhou) {
        pontos *= jogadorPalavra.palavra.length - jogadorPalavra.tentativas;
        jogoTerminou = true;

        //Ganha somente pontos das ultimas letras.
        if (jogadorPalavra.tentativas == jogadorPalavra.palavra.length) {
            pontos = jogadorPalavra.palavra.length;
        }
        jogadorEncontrado.pontos += pontos;

    } else if (jogadorPalavra.tentativas == jogadorPalavra.palavra.length) {
        //jogadorEncontrado.pontos -= jogadorPalavra.pontos;
        jogoTerminou = true;
        jogadorPalavra.tentativas = 0;
        jogadorPalavra.pontos = 0;
        

        //se errar, perde 15%
        jogadorEncontrado.pontos    -= jogadorEncontrado.pontos * 0.15;

    }

    // console.log(jogadorEncontrado.pontos, jogadorPalavra.pontos);
    //STATUS
    statusTentativa.pontosTotais = jogadorEncontrado.pontos;
    statusTentativa.pontos = jogadorPalavra.pontos;
    statusTentativa.ganhou = ganhou;
    statusTentativa.jogoTerminou = jogoTerminou;
    statusTentativa.tentativas = jogadorPalavra.tentativas;
    statusTentativa.acertos = jogadorPalavra.acertos;
    statusTentativa.acertosPosErrada = jogadorPalavra.acertosPosErrada;
    statusTentativa.erros = jogadorPalavra.erros;

    //se nao ganhar, perde todos os pontos
    // if(jogoTerminou && !ganhou){
    //     // jogadorPalavra.pontos -= statusTentativa.pontosTotais;
    //     // console.log("perdeu");
    //     // console.log(jogadorEncontrado);
    //     // console.log(statusTentativa);
    // }

    // console.log(statusTentativa.pontosTotais, statusTentativa.pontos);

}