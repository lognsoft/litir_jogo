const unidecode = require('unidecode');

module.exports = function confirmarPalavra(jogadorPalavra, tentativaPalavra) {
    
    //console.log(tentativaPalavra.Palavra, "TENTATIVA");//AGORA A PALAVRA VEM COM ACENTO! BORA RESOLVER O RESTO.

    //let tentativaPalavraSemUnicode = tentativaPalavra.Palavra.toUpperCase();
    let tentativaPalavraSemUnicode = tentativaPalavra.Palavra.toUpperCase();
    tentativaPalavra = unidecode(tentativaPalavra.Palavra.toUpperCase());

    //acento, nas certar
    //let palavraCorreta = unidecode(jogadorPalavra.palavra);

    let palavraCorreta = unidecode(jogadorPalavra.palavra);
    let palavraCorretaSemUnicode = jogadorPalavra.palavra;
    // palavraCorretaSemUnicode = "ÇACEAÁ";
    // palavraCorreta = unidecode("ÇACEAÁ");

    //console.log(palavraCorreta);
    // palavraCorretaSemUnicode = "ÓRGÃO";//ESPÉCIE CLÉRIGO
    // palavraCorreta = unidecode("ÓRGÃO");//ESPÉCIE CLÉRIGO

    // console.log("CORRETA:",palavraCorretaSemUnicode);
    // console.log("DIGITAD:",tentativaPalavraSemUnicode);

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

        // certa pos errada
        for (var i = 0; i < tentativaPalavra.length; i++) {
            var letra = tentativaPalavra[i];
            // var letraAcento = tentativaPalavraSemUnicode[i];
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

        // if(hasAccent(letrasCorretasPosErrada[t])){
        //     console.log(palavraCorretaSemUnicode[t]);
        // }



        for (let i = 0; i < remove.length; i++) {
            for (let t = 0; t < remove[i].qnt; t++) {

                let letraEncontrada = letrasCorretasPosErrada.find(item => item.letra === remove[i].letra);
                letrasCorretasPosErrada = letrasCorretasPosErrada.filter(item => item !== letraEncontrada);
                letrasIncorretas.push(letraEncontrada);
            }
        }

        console.log(letrasCorretasPosErrada, "CERTAS POS ERRADA");

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

        //COLOCA ACENTO NA LETRA CORRETA
        if(letrasCorretas.length > 0){
            for(let i = 0; i < letrasCorretas.length; i++){
                let TemAcento = hasAccent(palavraCorretaSemUnicode[letrasCorretas[i].posicao]);
                if(TemAcento){
                    letrasCorretas[i].letra = palavraCorretaSemUnicode[letrasCorretas[i].posicao];
                }
            }
        }

        //CONTANDO QUANTAS LETRAS COM ACENTO EXISTE NA PALAVRA
        let letrasComAcento = [];

        for(let i = 0; i < letrasCorretasPosErrada.length; i++){
            let count_ = 0;

            for(let t = 0; t < palavraCorretaSemUnicode.length; t++)
            {
                let letrasCorretasPosErrada_ = letrasCorretasPosErrada[i].letra;     

                    if(hasAccent(palavraCorretaSemUnicode[t]) && unidecode(letrasCorretasPosErrada_) == unidecode(palavraCorretaSemUnicode[t])){
                    //console.log(hasAccent(letrasCorretasPosErrada_), letrasCorretasPosErrada_, palavraCorretaSemUnicode[t]);

                    //Adicionando um contador  de letras repetidas com acento
                    let found = false;
                    for(let lc = 0; lc < letrasComAcento.length; lc++){

                        if(letrasComAcento[lc][1] == palavraCorretaSemUnicode[t]){

                            letrasComAcento[lc][0]++;
                            found = true;
                            break;
                        }
                    }

                    if(!found) {
                        count_++;
                        letrasComAcento.push([count_, palavraCorretaSemUnicode[t]]);
                    }
                }
            }
        }

        //console.log(letrasComAcento);
        //AQUI
        // Verifica quantas letras com acento existe na variavel palavraCorretaSemUnicode
        //POLARIZADO
        for (let lc = 0; lc < letrasComAcento.length; lc++) {

            let temAcento = 0;

            //GAMBIARRA DO POLAAR
            for (let pc = 0; pc < palavraCorretaSemUnicode.length; pc++) {

                if (hasAccent(palavraCorretaSemUnicode[pc]) && palavraCorretaSemUnicode[pc] == letrasComAcento[lc][1]) {
                    // Diminua 1 da contagem em letrasComAcento
                    temAcento++;
                }
            }

            letrasComAcento[lc][0] = temAcento;
        }

        console.log(letrasComAcento);
        console.log(letrasCorretasPosErrada, "CERTAS POS ERRADA 2");


        // console.log(letrasComAcento, "letras coma cento");
        // console.log(letrasCorretasPosErrada, "correta pos errada");
        letrasComAcento = removerDuplicadosComAcento(letrasComAcento);

        //console.log(letrasComAcento);

        //ADICIONANDO ACENTOS NAS LETRAS DE POSICAO ERRADA
        for(let t = 0; t < letrasComAcento.length; t++){
            
            let qntLetrasComAcento = 0;
            let countCorretasComAcento = 0;

            //Quantidade de letras e qual letra tem acento
            for(let i = 0; i < letrasCorretasPosErrada.length; i++){

                if(hasAccent(letrasComAcento[t][1]) && unidecode(letrasCorretasPosErrada[i].letra) == unidecode(letrasComAcento[t][1])){

                    //console.log("qnt", countCorretasComAcento)
                    qntLetrasComAcento++;
                }
            }

            //CONTANDO QUANTAS LETRAS COM ACENTO EXISTEM NA POSICAO CERTA
            for(let z = 0; z < letrasCorretas.length; z++){

                for(let y = 0; y < letrasComAcento.length; y++){

                    //console.log(hasAccent(letrasComAcento[y][1]), unidecode(letrasCorretas[z].letra), unidecode(letrasComAcento[y][1]), "GRRRRR")

                    if(hasAccent(letrasCorretas[z].letra) && unidecode(letrasCorretas[z].letra) == unidecode(letrasComAcento[y][1])){
                        countCorretasComAcento++;
                    }
                }
            }

            if(letrasComAcento.length > 0){
                //Adicionando acento a letra subtraindo a quantidade de letras com acento existem

                //Verifica se precisa inserir acentos

                //console.log(letrasComAcento[t][1], (qntLetrasComAcento - letrasComAcento[t][0]), (qntLetrasComAcento - countCorretasComAcento), "BB");
                //console.log(qntLetrasComAcento, letrasComAcento[i][0], qntLetrasComAcento, countCorretasComAcento);
                if((qntLetrasComAcento - letrasComAcento[t][0]) < (qntLetrasComAcento - countCorretasComAcento)){

                    //Calcula a quantidade de letras que precisam inserir acentos
                    let qntInserir = (qntLetrasComAcento - countCorretasComAcento) - (qntLetrasComAcento - letrasComAcento[t][0]);

                    for(let la = 0; la < letrasCorretasPosErrada.length; la++){

                        //Adiciona acento na letra
                        let adicionou = 0;
                        
                        if(unidecode(letrasCorretasPosErrada[la].letra) == unidecode(letrasComAcento[t][1]) && letrasComAcento[t][0] > 0){

                            letrasCorretasPosErrada[la].letra = letrasComAcento[t][1];
                            adicionou++;

                            //console.log(adicionou, qntInserir);
                            //Se adicionar a quantidade de acentos correta, para a repeticao e procura a proxima letra
                            if(adicionou >= qntInserir)
                                break;

                            //console.log(letrasCorretasPosErrada[lp].letra, letrasComAcento[t][1], "AQUI")
                            
                        }
                    }
                }
            }

            //console.log(qntLetrasComAcento);
        }

        //console.log(letrasCorretasPosErrada, "CERTAS POS ERRADA 2");

        // console.log(letrasComAcento);
        // console.log(letrasCorretasPosErrada);

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

    //REMOVE DUPLICADOS COM ACENTO
    function removerDuplicadosComAcento(vetor) {
        const conjuntoUnico = new Set();
        
        const vetorSemDuplicatas = vetor.filter(item => {
            const segundoCaractere = item[1];
            if (!conjuntoUnico.has(segundoCaractere)) {
            conjuntoUnico.add(segundoCaractere);
            return true;
            }
            return false;
        });
        
        return vetorSemDuplicatas;
    }
            

    return statusTentativa;
}