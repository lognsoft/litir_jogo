module.exports = function confirmarPalavra(jogadores) {
    const crypto = require('crypto')

    // Função para gerar nomes aleatórios
    function gerarNomeAleatorio() {
        const nomes = ['jebinha', 'U_TWtich', 'Fafafa', 'queroquero', 'estonks', 'girodablaze', 'patoassado', 'quemdisse', 'nadegas', 'X_sucata__', 'rabopreso', 'tobasujo', 'forri', 'kgp', 'tomAeino...', 'tomadavFrde', 'loFErin'];

        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];

        return nomeAleatorio;
    }

    // Função para atualizar os pontos dos jogadores
    function atualizarPontos() {
        for (let i = 0; i < jogadores.length; i++) {
            const incrementoPontos = Math.floor(Math.random() * 20); // Gera um número aleatório entre 0 e 5

            const numeroAleatorio = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
            // Gera um número aleatório entre 0 e 5

            
            if(jogadores[i].bot){
                jogadores[i].pontos += incrementoPontos / numeroAleatorio;
            }
            
        }

        //console.log('Pontos atualizados:', jogadores);
    }

    // Inserir 20 jogadores
    for (let i = 0; i < 20; i++) {
        let uid = crypto.randomUUID({ disableEntropyCache: true });

        let jogador = {
            id: uid,
            nick: gerarNomeAleatorio(),
            pontos: 0,
            bot: true
        };

        jogadores.push(jogador);
    }

    //console.log('Jogadores:', jogadores);

    // Definir intervalo de tempo para atualizar os pontos (a cada 5 segundos neste exemplo)
    const intervaloAtualizacaoPontos = 5000; // 5 segundos

    setInterval(atualizarPontos, intervaloAtualizacaoPontos);
}