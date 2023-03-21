const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu); //le dedimos que queremos que ejecute la clase 'toggleDektopMenu' cuando le de un click

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
