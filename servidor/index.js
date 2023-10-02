const crypto = require('crypto')
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const { Buffer } = require("buffer");
const Palavras5DB = require("./db/Palavras5.js");
const Palavras6DB = require("./db/Palavras6.js");
const Palavras7DB = require("./db/Palavras7.js");
const axios = require('axios');
const filtroPalavrao = require("./tools/filtroPalavrao.js")

const confirmarPalavra = require('./tools/confirmaPalavra.js');
const pontuacao = require('./tools/pontuacao.js');
const gerarDica = require('./tools/gerarDica.js');
const gerarDicaTexto = require('./tools/gerarDicaTexto.js');
// const _ = require("./tools/_.js");
const lodash = require('lodash');
const cheerio = require('cheerio');
const unidecode = require('unidecode');
const { ok } = require('assert');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



//variaveis globais
let jogadores = [];
let palavrasGeradas = [];


let tempo = (3600 * 24) * 2;

let reset = tempo;
setInterval(() => {

    reset--;
    if (reset == 0) {
        console.log("SERVIDOR RESETADO");
        jogadores = [];
        reset = tempo;
        // _(jogadores);
    }

}, 1000);

// _(jogadores);

const allowTwoIPsAndURLMiddleware = (req, res, next) => {
    // //definir os endereços IP permitidos
    // const allowedIPs = ['45.234.55.192', '201.92.230.11'];
    // //obter o endereço IP do cliente que está consumindo a rota
    // const clientIP = req.headers['x-forwarded-for']?.split(',')[0].trim() || '::1';
    // //definir a URL permitida
    // const allowedURL = 'https://litir.com.br';

    // const allowedURL1 = 'https://litir.io';

    // const clientURL = req.headers.origin;

    // console.log(clientURL, allowedURL, clientIP, allowedURL1);

    // if (allowedIPs.includes(clientIP) || clientURL === allowedURL || clientURL ===  allowedURL1) {
    //     next();
    // } else {
    //     res.status(403).send('Acesso negado.');
    // }
    next();
}

app.post('/confirmarPalavra', allowTwoIPsAndURLMiddleware, async (req, res) => {
    

    let jogadorPalavra = palavrasGeradas.find(x => x.jogadorId === req.body.jogador.id);
    let jogadorEncontrado = jogadores.find(x => x.id === req.body.jogador.id);

    if (jogadorEncontrado) {

            //console.log(req.body.palavraTentada, "teste");

        let statusTentativa = confirmarPalavra(jogadorPalavra, req.body.palavraTentada);

        //let statusTentativa = confirmarPalavra(jogadorPalavra, "cabeca");
        
        //pontua a cada tentativa
        pontuacao(statusTentativa, jogadorEncontrado, jogadorPalavra);
        console.log(jogadorPalavra.palavra);

        const jogadoresOrdenados = lodash.orderBy(jogadores, 'pontos', 'desc');
        const posicao = jogadoresOrdenados.findIndex(jogador => jogador.id === req.body.jogador.id);

        //A CADA PONTUACAO O RANK E ATUALIZADO
        res.send({
            estatusTentativa: statusTentativa,
            top10Jogadores: jogadores.sort((a, b) => b.pontos - a.pontos).slice(0, 10),
            posicaoRank: posicao + 1
        });
    } else {
        res.sendStatus(403);
    }

});

app.patch("/desistencia", allowTwoIPsAndURLMiddleware, async (req, res) => {
    let jogadorPalavra = palavrasGeradas.find(x => x.jogadorId === req.body.jogador.id);
    let jogadorEncontrado = jogadores.find(x => x.id === req.body.jogador.id);

    //jogadorEncontrado.pontos -= jogadorPalavra.pontos;
    jogadorEncontrado.pontos -= jogadorEncontrado.pontos * 0.1;

    // console.log(jogadorEncontrado);
    // console.log(jogadorPalavra);

    res.json({jogadorEncontrado});
})

app.post('/pedirDica', allowTwoIPsAndURLMiddleware, async (req, res) => {

    let jogadorPalavra = palavrasGeradas.find(x => x.jogadorId === req.body.jogador.id);
    let jogadorEncontrado = jogadores.find(x => x.id === req.body.jogador.id);

    if (jogadorEncontrado) {

        let dica = gerarDica(jogadorPalavra, jogadorEncontrado);


        const jogadoresOrdenados = lodash.orderBy(jogadores, 'pontos', 'desc');
        const posicao = jogadoresOrdenados.findIndex(jogador => jogador.id === req.body.jogador.id);

        res.send({
            palavra: dica,
            top10Jogadores: jogadores.sort((a, b) => b.pontos - a.pontos).slice(0, 10),
            posicaoRank: posicao + 1
        });
    } else
        res.sendStatus(404);
})


app.post("/pedirDicaTexto", allowTwoIPsAndURLMiddleware, async (req, res) => {

    let jogadorPalavra = palavrasGeradas.find(x => x.jogadorId === req.body.jogador.id);
    let jogadorEncontrado = jogadores.find(x => x.id === req.body.jogador.id);

    if (jogadorEncontrado) {

        let dica = gerarDicaTexto(jogadorEncontrado, jogadorPalavra);

        const jogadoresOrdenados = lodash.orderBy(jogadores, 'pontos', 'desc');
        const posicao = jogadoresOrdenados.findIndex(jogador => jogador.id === req.body.jogador.id);

        res.send({
            palavra: dica,
            top10Jogadores: jogadores.sort((a, b) => b.pontos - a.pontos).slice(0, 10),
            posicaoRank: posicao + 1
        });
    } else
        res.sendStatus(404);
})

app.put('/aprenderPalavra', allowTwoIPsAndURLMiddleware, async (req, res) => {

    const dbPalavra5 = new Palavras5DB();
    const dbPalavra6 = new Palavras6DB();
    const dbPalavra7 = new Palavras7DB();
    const palavraTentada = req.body.palavraTentada.toLowerCase();

    let encontrouPalavra = await verificaSePalavraExiste();

    //let palavrao = piii.has(req.body.palavraTentada);

    let palavrao = filtroPalavrao(req.body.palavraTentada)

   
    if (palavrao) {
        res.send(false);

    } else if (encontrouPalavra == null) {

        // Código a ser executado se a palavra não for encontrada

        await axios.get(`https://www.dicio.com.br/${palavraTentada}`)
            .then(async (response) => {

                let dica;
                let html = response.data;
                const $ = cheerio.load(html);
                let palavra = $('h1[itemprop="name"]').html().split("<")[0].replace(/\s/g, '');
                
                //console.log("Singular: "+palavra.slice(0, palavra.length - 1));
                //Singular:<b><ahref="/ameixa/">ameixa</a>
                
                const EhPlural = html.includes(`Singular: `);
                const EhSingular = html.includes(`Plural: `);
                const NaoTemSignificado = html.includes(`Aindanãotemososignificado`);
                const existePlural = html.includes(`plural`);
                const existeSingular = html.includes(`singular`);
                const palavraCoerente = EhSingular || EhPlural || existePlural || existeSingular;
                const aprenderPalavra = false;
                //Verifica se a palavra é plural
                //verifica se a palavra tem significado
                if(EhPlural || NaoTemSignificado){
                    res.send(false);
                } else {
                    //verifica se existe dica
                    for (let i = 1; i < 10; i++) {
                        let dicaEQ = $('.significado span').eq(i).html();
                        //&& !dicaEQ.includes("substantivo") && !dicaEQ.includes("transitivo")
                        if (dicaEQ != undefined && dicaEQ.length > 25) {
                            //remove tags HTML
                            dica = dicaEQ.replace(/<[^>]*>/g, '').replace(/\[.*?\]/g, '');
                            //console.log(dica);
                            break;
                            //console.log(dica + "--------------------------------------");
                        }
                        else
                            dica = null;
                    }
                    //Verifica se existe dica na palavra, caso nao exista, vai ser adicionado como none no banco
                    dica = undefined || dica == null || dica == "" ? "none" : dica;

                    if(palavraCoerente && dica != "none" && aprenderPalavra)
                        insereNoBancoPorQntLetra(dica, palavra.toUpperCase());
                    else
                        //Palavra existente, aprovada, mas nao sera aprendida,
                        //nao tem muita coerencia a palavra
                        console.log("Palavra incoerente", palavra)

                    res.send({Palavra: palavra});
                }
            })
            .catch(function (error) {
                res.send(false);
            });
    } else {
        res.send({Palavra: encontrouPalavra.Palavra});
    }

    async function verificaSePalavraExiste() {

        let palavraEncontrada = "";

        switch (palavraTentada.length) {
            case 5:
                palavraEncontrada = await dbPalavra5.buscarPalavraPorNome(palavraTentada.toUpperCase());
                break;
            case 6:
                palavraEncontrada = await dbPalavra6.buscarPalavraPorNome(palavraTentada.toUpperCase());
                break;
            case 7:
                palavraEncontrada = await dbPalavra7.buscarPalavraPorNome(palavraTentada.toUpperCase());
                break;

            default:
                break;
        }

        return palavraEncontrada;
    }

    async function insereNoBancoPorQntLetra(dica, palavra) {

        //console.log(dica, palavra);

        // palavra = "penta";
        // dica = "pentacampeoanto"

        var DICA_censurada = dica.replace(new RegExp(palavra, 'gi'), '_'.repeat(palavra.length));

        DICA_censurada = DICA_censurada.replace(/\bplural\b/gi, '______');

        switch (palavraTentada.length) {
            case 5: 
                await dbPalavra5.CriarNovaPalavra(palavra, DICA_censurada);
                break;
            case 6:
                await dbPalavra6.CriarNovaPalavra(palavra, DICA_censurada);
                break;
            case 7:
                await dbPalavra7.CriarNovaPalavra(palavra, DICA_censurada);
                break;

            default:
                break;
        }
    }
});

app.post('/gerarPalavra', allowTwoIPsAndURLMiddleware, async (req, res) => {
    const dbPalavra5 = new Palavras5DB();
    const dbPalavra6 = new Palavras6DB();
    const dbPalavra7 = new Palavras7DB();
    const jogador = req.body;

    let jogadorEncontrado = jogadores.find(x => x.id === jogador.id);

    if (jogadorEncontrado) {

        //atualiza a palavra em memoria.
        let atualizarPalavraGerada = palavrasGeradas.find(x => x.jogadorId === jogador.id);

        //console.log(atualizarPalavraGerada, "FA");

        let palavraGerada = await selecionaPalavraDB();
        //busca nova palavra no banco de dados
        //let palavraGerada = await dbPalavra4.buscarUmaPalavraPorPosicao(posPalavra);

        let palavra = {
            jogadorId: jogadorEncontrado.id,
            palavra: palavraGerada.Palavra,
            dicaTexto: palavraGerada.Dica,
            qntLetras: palavraGerada.Palavra.length,
            posPalavra: palavraGerada.posPalavra,
            pontos: 0,
            tentativas: 0,
            acertos: 0,
            acertosPosErrada: 0,
            erros: 0,
            pedidosDica: 0,
            tentativaDica: -1,
            dicaTextoSolicitada: false,
        };
        if (atualizarPalavraGerada) {
            //deleta a palavra caso exista
            const index = palavrasGeradas.findIndex(x => x.jogadorId === jogador.id);
            if (index !== -1) {
                palavrasGeradas.splice(index, 1);
            }
            palavrasGeradas.push(palavra);
        } else {
            //cria uma nova palavra caso nao exista
            palavrasGeradas.push(palavra);
        }

        res.send(
            {
                qntLetras: palavraGerada.Palavra.length,
                tentativas: 0
            }
        );
    } else {
        res.sendStatus(403);
    }

    async function selecionaPalavraDB() {

        let vetQntLetras = [5, 6, 7];
        //let vetQntLetras = [6];
        let qntLetras = parseInt(Math.random() * vetQntLetras.length);
        let palavra = "";
        let posPalavra = 0;

        switch (vetQntLetras[qntLetras]) {
            case 5:
                posPalavra = parseInt(Math.random() * await dbPalavra5.TotalDePalavras());
                palavra = await dbPalavra5.buscarUmaPalavraPorPosicao(posPalavra);
                palavra.posPalavra = posPalavra;
                break;
            case 6:
                posPalavra = parseInt(Math.random() * await dbPalavra6.TotalDePalavras());
                palavra = await dbPalavra6.buscarUmaPalavraPorPosicao(posPalavra);
                palavra.posPalavra = posPalavra;
                break;
            case 7:
                posPalavra = parseInt(Math.random() * await dbPalavra7.TotalDePalavras());
                palavra = await dbPalavra7.buscarUmaPalavraPorPosicao(posPalavra);
                palavra.posPalavra = posPalavra;
                break;
            default:
                break;
        }
        return palavra;

    }
});

app.post('/startGame', async (req, res) => { // aqui
    
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    let nick = req.body.nick;

    let palavrao_ = filtroPalavrao(nick)
    
    if(palavrao_ || specialChars.test(nick) || nick.trim().length === 0){

        let err = "";

        if(palavrao_)
            err = "Proibido nomes ofensivos";
        else if(specialChars.test(nick))
            err = "Proibido caracteres especiais";
        else if(nick.trim().length === 0)
            err = "Por favor digite um nome";

        res.status(403).json({msg: err, fail: true});

    } else {

    let uid = crypto.randomUUID({ disableEntropyCache: true });

    let jogador = {
        id: uid,
        nick: nick,
        pontos: 0
    }
    jogadores.push(jogador);
    // console.log(jogador);

    const jogadoresOrdenados = jogadores.sort((a, b) => b.pontos - a.pontos);
    const top10Jogadores = jogadoresOrdenados.slice(0, 10);

    res.send(
        {
            jogador: jogador,
            top10Jogadores: top10Jogadores,
            posicaoRank: jogadores.length,
            tempoReset: reset
        });
    }
});

app.post('/fimDeJogo', allowTwoIPsAndURLMiddleware, async (req, res) => {

    let jogadorEncontrado = palavrasGeradas.find(x => x.jogadorId === req.body.jogador.id);

    if (jogadorEncontrado) {
        res.send(jogadorEncontrado.palavra);
    } else
        res.sendStatus(404);

});
//insereNoBancoPorQntLetra

app.post('/criarNovaPalavra', allowTwoIPsAndURLMiddleware, async (req, res) => {

    const dbPalavra5 = new Palavras5DB();
    const dbPalavra6 = new Palavras6DB();
    const dbPalavra7 = new Palavras7DB();
    const { promisify } = require('util');
    const readFileAsync = promisify(fs.readFile);
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"];

    for(let i = 0; i < alfabeto.length; i++)
    {
        let caminhoDoArquivo = `palavras/${alfabeto[i]}.json`; // Substitua pelo caminho real do arquivo que você deseja ler

        let arquivoJSON = await lerArquivo(caminhoDoArquivo);

        let totalPalavras = arquivoJSON.palavras_e_dicas.length;

        for(let count = 0; count < totalPalavras; count++){
            await insereNoBancoPorQntLetra(arquivoJSON, count);
        }
    }

    async function insereNoBancoPorQntLetra(arquivoJSON, count) {
        
        let palavra = arquivoJSON.palavras_e_dicas[count].palavra.toUpperCase();
        let dica = arquivoJSON.palavras_e_dicas[count].dica

        var DICA_censurada = dica.replace(new RegExp(palavra.toLowerCase(), 'gi'), '_'.repeat(palavra.length));

        console.log(palavra, palavra.toLowerCase());
        console.log(DICA_censurada);

        //DICA_censurada = DICA_censurada.replace(/\bplural\b/gi, '______');

        console.log('----------------------');
        // console.log(palavra, DICA_censurada);

        switch (palavra.length) {
            case 5: 
                await dbPalavra5.CriarNovaPalavra(palavra, DICA_censurada);
                break;
            case 6:
                await dbPalavra6.CriarNovaPalavra(palavra, DICA_censurada);
                //console.log(palavra, DICA_censurada, count);
                break;
            case 7:
                await dbPalavra7.CriarNovaPalavra(palavra, DICA_censurada);
                break;

            default:
                break;
        }
    }

    async function lerArquivo(caminhoDoArquivo) {
        try {
            const data = await readFileAsync(caminhoDoArquivo, 'utf8');
            const objetoJSON = JSON.parse(data);
           
            return objetoJSON;

        } catch (err) {
            console.error('Erro ao ler o arquivo:', err);
        }
    }



    // console.log(":FA");
    //console.log(req.body.palavra);
    //INSERIR PALAVRAS
   //var dbPalavra = new PalavrasDB();
    // for (const element of arquivoJSON) {
    //     console.log(element);
    //     await dbPalavra.CriarNovaPalavra(element);
    // }

    //console.log(req.body.palavra);

    // var dbPalavra5 = new Palavras5DB();
    // code = await dbPalavra5.CriarNovaPalavra(req.body.palavra);

    // var dbPalavra6 = new Palavras6DB();
    // code = await dbPalavra6.CriarNovaPalavra(req.body.palavra);
    


    // var dbPalavra7 = new Palavras7DB();
    // code = await dbPalavra7.CriarNovaPalavra(req.body.palavra);
    // res.sendStatus(code);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



app.get("/politica", async (req,res) =>{

    res.send(`Política de Privacidade

    Data de Vigência: 22/08/2023
    
    Bem-vindo ao Litir! Esta Política de Privacidade descreve como tratamos as informações no nosso jogo disponível na plataforma Google Play.
    
    Informações Coletadas
    Não coletamos informações pessoais identificáveis de usuários neste jogo. Não solicitamos, coletamos, nem armazenamos quaisquer dados pessoais, como nome, endereço de e-mail ou informações de contato.
    
    Uso do Jogo
    O Litir é projetado para ser uma experiência de entretenimento, e não coleta informações pessoais dos usuários. Não há dados pessoais armazenados ou usados para qualquer finalidade.
    
    Cookies e Tecnologias de Rastreamento
    Não usamos cookies ou tecnologias de rastreamento para coletar informações dos usuários.
    
    Compartilhamento de Informações
    Dado que não coletamos informações pessoais dos usuários, não compartilhamos informações com terceiros.
    
    Segurança
    Apesar de não coletarmos informações pessoais, adotamos medidas de segurança razoáveis para proteger os dados que não são coletados contra acessos não autorizados ou uso indevido.
    
    Alterações na Política de Privacidade
    Reservamo-nos o direito de atualizar esta política de privacidade conforme necessário. Quaisquer alterações serão efetivas após a publicação da versão atualizada.
    
    Contato
    Se você tiver dúvidas ou preocupações relacionadas a esta política de privacidade, fique à vontade para entrar em contato conosco pelo seguinte endereço de e-mail: contato@litir.com.br
    
    Ao continuar usando o jogo Litir, você concorda com os termos desta Política de Privacidade.`);

});
