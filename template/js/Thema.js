// const themaSelect = document.querySelector("#thema");
// const style = document.querySelector("#style");

// function trocarThema(e){
//    style.href = `css/${e.target.value}/style.css`;

//    localStorage.setItem("theme",JSON.stringify(e.target.value));
// }

// themaSelect.addEventListener("change", trocarThema)


// window.addEventListener('load', () => {
//    theme = JSON.parse(localStorage.getItem("theme"));
//    if(theme !== null){
//       style.href = `css/${theme}/style.css`;
//    }
// })



function loadApresentacao(){
   const apresentacao = document.querySelector("#apresentacao");
   const icone = document.querySelector("#apresentacao-icone");
   const regras = document.querySelector(".dicas-container");

   icone.style.transition = '.4s';
   icone.style.opacity = '1';

   setTimeout(() => {
      apresentacao.style.transition = '.5s'
      apresentacao.style.opacity = 0;
      
      setTimeout(() => {
         regras.style.transition = '.7s'
         regras.style.opacity = 1;
         apresentacao.style.display = 'none';
      },300);
   },1500);
}

window.addEventListener("load",loadApresentacao);