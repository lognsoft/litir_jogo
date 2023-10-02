const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = new Piii({
    filters: [
        ...Object.values(piiiFilters)
    ]
});

module.exports = function filtroPalavrao(palavra) {

    validacao1 = piii.has(palavra);
    validacao2 = verificarPalavrasOfensivas(palavra);
    //validacao3 = verificarQuantidadeDeCedilhas(palavra);

    if (validacao1 || validacao2)
        return true;
    else
        return false;


    function verificarQuantidadeDeCedilhas(palavra) {

        let cedilha = "Ç";
        let countCedilha = 0;

        for(let i = 0; i < palavra.length; i++){

            if(palavra[i] == cedilha)
                countCedilha++;
        }
        
        return countCedilha <= 1 ? false : true;

        // const cedilha = "Ç";
        // const ocorrencias = (palavra.match(new RegExp(cedilha, "gi")) || []).length;
        // return ocorrencias !== 2;
    }

    function verificarPalavrasOfensivas(texto) {

        const palavrasTeste = [
            'BICHA',
            'BUCETA',
            'BOSTA',
            'CAGAR',
            'CARALHO',
            'FODA',
            'FODER',
            'FODA-SE',
            'PORRA',
            'PUTA',
            'MERDA',
            'VIADO',
            'PORRA',
            'BOSTA',
            'BOQUETE',
            'CARALHO',
            'DO CARALHO',
            'FODER',
            'PRA CARALHO',
            'PUTA',
            'MERDA',
            'PUNHETA',
            'TREPAR',
            'BUCETA',
            'XOXOTA',
            'SACANAGEM',
            'FIMOSE',
            'SIRIRICA',
            'CACETE',
            'CACETA',
            'BABACA',
            'BROCHA',
            'BICHA',
            'BOIOLA',
            'CRACUDO',
            'VAGABUNDO',
            'VAGABUNDA',
            'CORNO',
            'FODIDO',
            'FUDIDO',
            'TROUXA',
            'CANALHA',
            'MIJAR',
            'PEIDO',
            'CAGAR',
            'PEIDO',
            ////palavras no plural proibidas///
            'ESTADOS',
        ];

        for (const palavra of palavrasTeste) {
            if (texto.toUpperCase().includes(palavra)) {
                return true;
            }
        }
        return false;
    }

}