console.log("bateu aqui");

const bars = document.getElementById("bars");
const nav = document.getElementById("nav");
const navItem = document.querySelectorAll("a");

function toggleMenu() {
  console.log("clicou no menu");
  bars.classList.toggle("active");
  nav.classList.toggle("active");
}

bars.addEventListener("click", toggleMenu);

navItem.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

const circulo = document.querySelector(".progresso-circular"); // o circular isolado (fora dos cards)
const circuloCards = document.querySelectorAll(".circular-progress");
const texto = document.querySelector(".porcentagem"); // texto fora dos cards
const porcentagens = document.querySelectorAll(".percentage");

let valor = 0;
const tempo = 10; // velocidade (ms)

const animar = setInterval(() => {
  valor++;

  // Atualiza o texto fora dos cards
  if (texto) {
    texto.textContent = `${valor}%`;
  }

  // Atualiza o texto dentro dos cards
  porcentagens.forEach((el) => {
    el.textContent = `${valor}%`;
  });

  // Atualiza o estilo de todos os progressos dos cards
  circuloCards.forEach((el) => {
    el.style.background = `conic-gradient(#128c7e 0% ${valor}%, #dcdcdc ${valor}% 100%)`;
  });

  // Atualiza o progresso isolado (fora dos cards)
  if (circulo) {
    circulo.style.background = `conic-gradient(#8e44ad 0% ${valor}%, #dcdcdc ${valor}% 100%)`;
  }

  // Interrompe a animação ao chegar em 100
  if (valor >= 100) clearInterval(animar);
}, tempo);

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const navItem = document.querySelectorAll(".nav-item");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    // nav.classList.add("scrolled");
    navItem.forEach((item) => {
      item.classList.add("scrolled");
    });
  } else {
    header.classList.remove("scrolled");
    navItem.forEach((item) => {
      item.classList.remove("scrolled");
    });
  }
});
