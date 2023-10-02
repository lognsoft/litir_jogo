const fs = require('fs');
const jsObfuscator = require('javascript-obfuscator');
const OutPutClassProd = "ClassProd";
const DataBaseProd = "jsO";
const Files = [
    {
        Input: "../template/js/ModalDica.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/CadastrarJogador.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/Config.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/ConfirmaPalavra.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/DigitaValidaPalavras.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/Efeitos.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/GeradorDePalavra.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/GerarDica.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/JogarNovamente.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/JogoTerminou.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/ModalControl.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/Palavras.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/AtualizaRank.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/StartGame.js",
        OutPut: DataBaseProd,
    },
    {
        Input: "../template/js/Thema.js",
        OutPut: DataBaseProd,
    },
]

async function obfuscator() {

    //let Files = await getFiles();

    // fs.rmSync(OutPut, { recursive: true, force: true });
    //fs.mkdirSync(OutPutClassProd, { recursive: true, force: true });
    fs.mkdirSync(DataBaseProd, { recursive: true, force: true });

    Files.forEach(element => {

        fs.readFile(element.Input, 'UTF-8', (err, code) => {

            if (err)
                throw err;

            var obfuscatorResult = jsObfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: true,
                deadCodeInjection: false,
                debugProtection: false,
                debugProtectionInterval: 0,
                disableConsoleOutput: false,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                selfDefending: false,
                simplify: false,
                splitStrings: true,
                stringArray: true,
                stringArrayCallsTransform: false,
                stringArrayCallsTransformThreshold: 0,
                stringArrayEncoding: [],
                stringArrayIndexShift: false,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 0,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0,
                unicodeEscapeSequence: true
            });


            let fileName = element.Input.split("/");

            fileName = fileName[fileName.length - 1];

            console.log(fileName);

            fs.writeFile(element.OutPut + "/" + fileName, obfuscatorResult.getObfuscatedCode(), (fsError) => {

                if (fsError) {
                    return console.log(fsError);
                }
                console.log("Arquivo:", element.Input.split("/")[1], "Obfuscado");
            })
        })

    })
}

obfuscator();



// async function getFiles() {

//     return new Promise((resolve, reject) => {
//         fs.readdir(Input, (err, arquivos) => {
//             arquivos.forEach(arquivo => {
//                 files.push(arquivo);
//             });

//             resolve(files);
//         });
//     });
// }




// minify();
