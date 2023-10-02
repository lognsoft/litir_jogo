const mongoose = require("mongoose");
require("dotenv").config();

module.exports = class MongoConnection {

    async Connection() {
        //mongoose.connect(`mongodb+srv://` + process.env.DB_USER + `:` + process.env.DB_PASS + process.env.URL_CONNECTION, {
        mongoose.connect(`mongodb+srv://jogopalavras:bajinhotroll@cluster0.yxc0f.mongodb.net/jogodepalavras`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}