const menuBtn = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
