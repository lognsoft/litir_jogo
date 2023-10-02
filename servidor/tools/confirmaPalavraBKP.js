const unidecode = require('unidecode');

module.exports = function confirmarPalavra(jogadorPalavra, tentativaPalavra) {

    //console.log(tentativaPalavra);//AGORA A PALAVRA VEM COM ACENTO! BORA RESOLVER O RESTO.

    //let tentativaPalavraSemUnicode = tentativaPalavra.Palavra.toUpperCase();
    tentativaPalavra = unidecode(tentativaPalavra.Palavra.toUpperCase());

    //acento, nas certar
    let palavraCorreta = unidecode(jogadorPalavra.palavra);
    let palavraCorretaSemUnicode = jogadorPalavra.palavra;

    // palavraCorretaSemUnicode = "TÉDIO";
    // palavraCorreta = unidecode("TÉDIO");

    // palavraCorretaSemUnicode = "LOUÇA";
    // palavraCorreta = unidecode("LOUÇA");

    var letrasCorretas = [];
    var letrasCorretasPosErrada = [];
    var letrasIncorretas = [];

    if (jogadorPalavra) {   

        // letras certas
        for (var i = 0; i < tentativaPalavra.length; i++) {
            var letra = tentativaPalavra[i];
            var posicao = i;

            // Verifica se a letra está correta e na posição correta
            if (letra === palavraCorreta[i]) {
                letrasCorretas.push({ letra: letra, posicao: posicao });
            }
        }

        // errada pos certa
        for (var i = 0; i < tentativaPalavra.length; i++) {
            var letra = tentativaPalavra[i];
            var posicao = i;

            if (palavraCorreta.includes(letra) && letra !== palavraCorreta[i]) {
                letrasCorretasPosErrada.push({ letra: letra, posicao: posicao });
            }
        }

        // letras erradas
        for (var i = 0; i < tentativaPalavra.length; i++) {
            var letra = tentativaPalavra[i];
            var posicao = i;

            if (!palavraCorreta.includes(letra)) {
                letrasIncorretas.push({ letra: letra, posicao: i });
            }
        }


        let removerPosErrada = [];
        //localiza a letra que esta incorreta na pos errada
        for (let i = 0; i < letrasCorretasPosErrada.length; i++) {

            let countCorretas = 0;
            let countTentativa = 0;

            for (let t = 0; t < palavraCorreta.length; t++) {

                if (letrasCorretasPosErrada[i].letra == palavraCorreta[t]) {
                    countCorretas++;
                }

                if (letrasCorretasPosErrada[i].letra == tentativaPalavra[t]) {
                    countTentativa++;
                }
            }//regra


            //REMOVE A LETRA QUE ESTA NA LISTA DE LETRAS INCORRETAS, SE ELA ESTIVER NA POSICAO CORRETA
            //console.log(countTentativa - countCorretas, letrasCorretasPosErrada[i]);

            let qntRemover = countTentativa - countCorretas;

            removerPosErrada.push({ letra: letrasCorretasPosErrada[i].letra, qnt: qntRemover });
            if (countTentativa - countCorretas > countCorretas) {
                letrasIncorretas.push(letrasCorretasPosErrada[i]);
            }
        }


        let letrasUnicas = [];
        let removerPosCorreta = [];
        //remove valores repetidos do array
        for (let i = 0; i < removerPosErrada.length; i++) {
            let ocorr = removerPosErrada[i];
            if (!letrasUnicas.includes(ocorr.letra)) {
                letrasUnicas.push(ocorr.letra);
                removerPosCorreta.push(ocorr);
            }
        }

        //Remove letras amarelas do vetor de letrasCorretasPosErrada
        //e adicione em letrasCorretasPosErrada

        //console.log(removerPosCorreta);

        //console.log(removerPosCorreta.length);

        let remove = [];
        for (let i = 0; i < removerPosCorreta.length; i++) {

            if (removerPosCorreta[i].qnt > 0) {

                //console.log(removerPosCorreta[i]);
                remove.push(removerPosCorreta[i]);

                // for (let t = 0; t <= removerPosCorreta[t].qnt; t++) {
                //     remove.push(removerPosCorreta[i]);
                // }
            }
        }

        for (let i = 0; i < remove.length; i++) {
            for (let t = 0; t < remove[i].qnt; t++) {

                let letraEncontrada = letrasCorretasPosErrada.find(item => item.letra === remove[i].letra);
                letrasCorretasPosErrada = letrasCorretasPosErrada.filter(item => item !== letraEncontrada);
                letrasIncorretas.push(letraEncontrada);
                //console.log();
            }
        }

        //remove letras repetidas de letrasCorretas
        for (let i = 0; i < letrasCorretas.length; i++) {
            for (let j = i + 1; j < letrasCorretas.length; j++) {
                if (
                    letrasCorretas[i].letra === letrasCorretas[j].letra &&
                    letrasCorretas[i].posicao === letrasCorretas[j].posicao
                ) {
                    letrasCorretas.splice(j, 1);
                    j--;
                }
            }
        }

        //remove letras repetidas de letrasCorretasPosErrado
        for (let i = 0; i < letrasCorretasPosErrada.length; i++) {
            for (let j = i + 1; j < letrasCorretasPosErrada.length; j++) {
                if (
                    letrasCorretasPosErrada[i].letra === letrasCorretasPosErrada[j].letra &&
                    letrasCorretasPosErrada[i].posicao === letrasCorretasPosErrada[j].posicao
                ) {
                    letrasCorretasPosErrada.splice(j, 1);
                    j--;
                }
            }
        }

        //remove letras repetidas de letrasCorretasPosErrado
        for (let i = 0; i < letrasIncorretas.length; i++) {
            for (let j = i + 1; j < letrasIncorretas.length; j++) {
                if (
                    letrasIncorretas[i].letra === letrasIncorretas[j].letra &&
                    letrasIncorretas[i].posicao === letrasIncorretas[j].posicao
                ) {
                    letrasIncorretas.splice(j, 1);
                    j--;
                }
            }
        }

        //REMOVE VALORES REPETIDOS ENTRE LETRAS INCORRETAS E LETRAS CORRETAS POS ERRADA
        letrasIncorretas = letrasIncorretas.filter(function (elemento) {
            return !letrasCorretasPosErrada.some(function (e) {
                return e.letra === elemento.letra && e.posicao === elemento.posicao;
            });
        });


        jogadorPalavra.tentativas++;


        //COLOCA ACENTO NA LETRA CORRETA // ESTA COM BUG....
        // if(letrasCorretas.length > 0){
        //     for(let i = 0; i < letrasCorretas.length; i++){
        //         let TemAcento = hasAccent(palavraCorretaSemUnicode[letrasCorretas[i].posicao]);
        //         if(TemAcento){
        //             letrasCorretas[i].letra = palavraCorretaSemUnicode[letrasCorretas[i].posicao];
        //         }
        //     }
        // }

        statusTentativa = {
            letrasCorretas: letrasCorretas,
            letrasCorretasPosErrada: letrasCorretasPosErrada,
            letrasIncorretas: letrasIncorretas,
            palavraExiste: true
        }
        
        jogadorPalavra.vetPos = {
            palavrasTentadas: tentativaPalavra,
            letrasCorretas: letrasCorretas,
            letrasCorretasPosErrada: letrasCorretasPosErrada,
            letrasIncorretas: letrasIncorretas
        };

    } else
        statusTentativa = { palavraExiste: false }

    function hasAccent(letter) {
        const accentedRegex = /[áàãâäéèẽêëíìĩîïóòõôöúùũûüçÇ]/i;
        return accentedRegex.test(letter);
    }

    return statusTentativa;
}