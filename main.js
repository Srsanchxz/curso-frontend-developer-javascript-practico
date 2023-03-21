const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
menuEmail.addEventListener("click", toggleDesktopMenu); //le dedimos que queremos que ejecute la clase 'toggleDektopMenu' cuando le de un click
btnMenuMobile.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
