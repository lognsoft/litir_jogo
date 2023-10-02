//Efeito teclado virtual a digitar algo no teclado fisico
function efeitoTecladoVirtualDigitando(tecla) {

    let letras = document.querySelectorAll('.teclado span');
    ultimoClicado.parentNode.querySelectorAll("li").forEach(lis => { //O(N^3);
        lis.classList.forEach(classe => {
            if (classe == "active") {
                letras.forEach(letra => {
                    //sincroniza teclado fisico com analogiso para dar efeito de digitacao
                    if (letra.innerHTML == tecla.key.toUpperCase()) {
                        //ativa efeito no teclado
                        letra.classList.add("efeitoTeclaMecanica");
                        setTimeout(() => {
                            //desativa efeito no teclado
                            letra.classList.remove("efeitoTeclaMecanica");
                        }, 150);
                    }
                })
            }
        })
    })
}

function animacaoPerdeuOuErrouPalavra() {
    let linhaFront = ultimoClicado.parentNode;

    // linhaFront.classList.add("LetraAnimacaoErrou");
}

function animacaoGanhaJogo() {

    let letrasFront = ultimoClicado.parentNode.querySelectorAll("li");

    let count = 0;

    let interval = setInterval(() => {

        letrasFront[count].classList.add("LetraAnimacaoEnter");

        count++;
        if (count == palavraDoDia.qntLetras)
            clearInterval(interval);

    }, 120);

}

// //Efeito aumenta o tamanho da box ao digitar uma letra
// async function animacaoAumentaDiminuiTamanhoBox() {

//     let tamanhoLetra = 55;
//     let tamanhoCaixa = 90;
//     let proporcao = 1;//count
//     let velocidade = 1;//ms

//     async function aumentaBox() {

//         return await new Promise(resolve => {

//             const interval = setInterval(() => {

//                 ultimoClicado.style.setProperty('font-size', tamanhoLetra + 'px', 'important');
//                 ultimoClicado.style.transition = '.1s';
//                 ultimoClicado.style.transform = 'scale(1.2)';

//                 tamanhoLetra += proporcao;
//                 tamanhoCaixa += proporcao;

//                 if (tamanhoCaixa == 95) {
//                     resolve();
//                     clearInterval(interval);
//                 }

//             }, velocidade);
//         });

//     }

//     async function diminuiBox() {

//         return await new Promise(resolve => {

//             const interval = setInterval(() => {

//                 ultimoClicado.style.setProperty('font-size', tamanhoLetra + 'px', 'important');
//                 ultimoClicado.style.transform = 'scale(1)';

//                 tamanhoLetra -= proporcao;
//                 tamanhoCaixa -= proporcao;

//                 if (tamanhoCaixa == 90) {
//                     resolve();
//                     clearInterval(interval);
//                 }

//             }, velocidade);
//         });

//     }

//     await aumentaBox();
//     await diminuiBox();
// }

