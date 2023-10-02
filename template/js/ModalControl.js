const btnSettings = document.querySelectorAll(".btn-setting");
const janelaModalConfig = document.querySelector(".modalConfig");
const visualizarRegras = document.querySelector(".visualiza-regras");
const overlay = document.querySelector(".overlay");
const modalRegra = document.querySelector(".modalRegras");
const fecharModalRegras = document.querySelector(".fechar-regras");
const engrenagem = btnSettings[0];
const modalConfiguracaoVoltar = btnSettings[1];
const botaoDeRegras = document.querySelector(".btn-regras");

// visualizarRegras.addEventListener("click", modalRegras);
// toggleTema.addEventListener("click", trocarTema)


// engrenagem.addEventListener("click", (e) => {
//    janelaModalConfig.classList.add("active");
//    overlay.style.display = "block"

//    modalConfiguracaoVoltar.addEventListener("click", () => {

//       janelaModalConfig.classList.remove("active");

//       setTimeout(() => overlay.style.display = "none",300);

//    })

//    visualizarRegras.addEventListener("click", () => {
      
//       janelaModalConfig.classList.remove("active");
//       modalRegra.classList.add("active");

//       fecharModalRegras.addEventListener("click", () => {
//          modalRegra.classList.remove("active");
//          janelaModalConfig.classList.add("active");
//       })
//    })
//    // e.target.removeEventListener("click");
// })

function sleep(time){
   return new Promise(resolve => setTimeout(resolve,time));
}

async function abrirModalRegras(){
   modalRegra.classList.toggle("active");
   overlay.style.display = "block";

   if(!modalRegra.classList.contains("active")){
      fadeOut();
   }
   
}
botaoDeRegras.addEventListener("click", abrirModalRegras);
fecharModalRegras.addEventListener("click", abrirModalRegras);

function cliqueOverlay(e){
   janelaModalConfig.classList.remove("active");
   modalRegra.classList.remove("active");
   document.querySelector(".ranking").classList.remove("active");
   fadeOut();
}
overlay.addEventListener("click", cliqueOverlay);


async function fadeOut(){
   overlay.style.transition = '.3s';
   overlay.style.opacity = '0';
   await sleep(500);
   overlay.style.display = "none";
   overlay.style.opacity = '1';
}







// function modalSettings(e){
//    const janelaModalConfig = document.querySelector(".modalConfig");
   
//    if(e.target == btnSettings[0]){
//       janelaModalConfig.classList.add("active")
//    } else if(e.target == btnSettings[1]){
//       janelaModalConfig.classList.remove("active")
//    }
   
//    // overlay.style.display = "block";
// }

// function modalRegras(){
//    modalRegra.classList.toggle("active")
// }




// function trocarTema(e){
//    let tema = localStorage.getItem("theme");
//    if(tema == null || tema == "litir"){
//       e.target.classList.add("active");
//       aplicarTema(false)
//    } else {
//       e.target.classList.remove("active");
//       aplicarTema(true)
//    }
// }

// function aplicarTema(flag){
//    const style = document.querySelector("#style");
//    let folha = "";
//    if(flag){
//       folha = "minimalist";
//    } else {
//       folha = "litir";
//    }
//    localStorage.setItem("theme",folha);
//    style.href = `css/${folha}/style.css`
// }

// function identificaTema(){
//    let tema = localStorage.getItem("theme");
//    if(tema == null || tema == "litir"){
//       toggleTema.classList.remove("active");
//    } else {
//       toggleTema.classList.add("active");
//    }
// }




// identificaTema();