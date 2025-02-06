// Définir les variables
var headerBg = document.querySelector(".header-bg");
var headerTitle = document.querySelector(".header-title");
var cards = document.querySelectorAll(".card-base");

// switcher la couleur
headerBg.addEventListener("click", () => {
  headerBg.classList.toggle("is-active");
  headerTitle.classList.toggle("is-active");
});
// switcher la couleur
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-active");
  });
});
