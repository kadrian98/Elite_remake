const elementHome = document.querySelector(".home");
const popupHome = document.querySelector(".popup_home");
const elementLocation = document.querySelector(".location");
const popup = document.querySelector(".popup_location");
const elementKontakt = document.querySelector(".kontakt");
const popupKontakt = document.querySelector(".popup_kontakt");

const closeHome = document.querySelector(".home-close");
const close = document.querySelector(".popup_location i");
const closeKontakt = document.querySelector(".kontakt-close");

elementHome.addEventListener("click", () => {
  popupHome.classList.add("active");
});

elementLocation.addEventListener("click", () => {
  popup.classList.add("active");
});

elementKontakt.addEventListener("click", () => {
  popupKontakt.classList.add("active");
});

closeHome.addEventListener("click", () => {
  popupHome.classList.remove("active");
});

close.addEventListener("click", () => {
  popup.classList.remove("active");
});

closeKontakt.addEventListener("click", () => {
  console.log("chojuho");
  popupKontakt.classList.remove("active");
});
