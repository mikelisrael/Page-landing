// loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading");

  loader.className += " hidden";
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
};
