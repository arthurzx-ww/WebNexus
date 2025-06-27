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
