const menuEmail = document.querySelector(".navbar-email"); /*el boton*/
const desktopMenu = document.querySelector(".desktop-menu");
const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const btnCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu); //le dedimos que queremos que ejecute la clase 'toggleDektopMenu' cuando le de un click
btnMenuMobile.addEventListener("click", toggleMobileMenu);

btnCarrito.addEventListener("click", toggleBtnCarrito);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleBtnCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
