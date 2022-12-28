const secoes = document.querySelectorAll("[data-scroll]");
const metadeTela = window.innerHeight * 0.6;
const nav = document.querySelector(".navbar");

function animaScroll() {
  secoes.forEach((secao) => {
    const secaoTop = secao.getBoundingClientRect().top;
    const aparecer = secaoTop - metadeTela;
    if (aparecer < 0) {
      secao.classList.add("ativo");
    } else {
      secao.classList.remove("ativo");
    }
  });
}
animaScroll();

window.addEventListener("scroll", animaScroll);
