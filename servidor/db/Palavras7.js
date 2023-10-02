const MongoConnection = require("./MongoConnection");
const mongoose = require("mongoose");

let DataBasePalavras = new mongoose.Schema({

    Palavra: {
        type: String,
        required: false,
    },
    Dica: {
        type: String,
        required: false,
    },
});

DataBasePalavras.index({ Palavra: 1 });

module.exports = class Palavras7 {

    constructor() {

        this.mongoconnect = new MongoConnection();

        this.mongoconnect.Connection();
        this.dbPalavra = mongoose.model('palavras7', DataBasePalavras);
        // Cria um índice na coleção dbPalavra no campo Palavra
        //this.dbPalavra.createIndex({ Palavra: 1 });
    }

    async CriarNovaPalavra(palavra, dica) {

        const existePalavra = await this.dbPalavra.findOne({ Palavra: palavra }).exec();

        if (existePalavra == null) {

            return new Promise((resolve, reject) => {

                this.dbPalavra.create({ Palavra: palavra, Dica: dica }).then((callBack) => {
                    console.log("Nova palavra foi aprendida", palavra);
                    console.log(palavra, dica);
                    resolve(201);
                }).catch((err) => {
                    reject(401);
                });
            });
        }
        return 200;
    }

    async buscarUmaPalavraPorPosicao(posPalavra) {

        return new Promise((resolve, reject) => {

            this.dbPalavra.findOne().skip(posPalavra).then((callBack) => {
                resolve(callBack);
            })

        }).catch((err) => {
            reject(400);
        })
    }

    async buscarPalavraPorNome(palavra) {
        return new Promise((resolve, reject) => {
            this.dbPalavra.findOne({ Palavra: palavra }).then((callBack) => {
                resolve(callBack);
            }).catch((err) => {
                reject(err);
            });
        });
    }


    async TotalDePalavras() {
        return await this.dbPalavra.countDocuments();
    }
}
