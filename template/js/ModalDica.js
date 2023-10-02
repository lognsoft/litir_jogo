const btnRanking = document.querySelectorAll(".btn-ranking");
const rankingList = document.querySelector(".ranking");
const closeModal = document.querySelector(".close-modal");
const idStyle = document.querySelector("#style");
const modal = document.querySelector(".modalDicaTexto");
const overlayMobile = document.querySelector(".overlay");

const container = document.querySelector(".modalDicaTexto div");
btnRanking.forEach(element => {
   element.addEventListener("click", panelRanking);
});
// btnRanking.addEventListener("click", panelRanking);

function panelRanking(e) {
   let resolucao = 870;
   let controleDisplay = null;
   e.target.classList.toggle("active");
   rankingList.classList.toggle("active");
   controleDisplay = (window.innerWidth < resolucao && rankingList.classList.contains("active")) ? "block" : "none";
   
   overlayMobile.style.display = controleDisplay;

   window.addEventListener("resize", () => {
      overlayMobile.style.display = (window.innerWidth < resolucao && rankingList.classList.contains("active")) ? "block" : "none";
   });
}

function openModal(e){
   e.stopPropagation();
   if(e.target.classList.contains("openModal")){
      modal.style.display = "none";
   }
}

// closeModal.addEventListener("click", openModal);
modal.addEventListener("click", openModal);

