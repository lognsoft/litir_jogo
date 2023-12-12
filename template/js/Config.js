// Definir uma variável de ambiente
// window.process = {
//   env: {
//     URL: 'https://king-prawn-app-sqq2t.ondigitalocean.app'
//   }
// };
window.process = {
  env: {
    URL: 'http://localhost:8080'
  }
};  
    
// Acessar uma variável de ambiente
const ROUT = window.process.env;
