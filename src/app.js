const hamburger = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
