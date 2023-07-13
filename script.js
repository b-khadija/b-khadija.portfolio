document.addEventListener("click", function(event) {
  const target = event.target;

  // Fermer le menu lorsqu'un lien est cliqué
  if (target.classList.contains("navigation__link")) {
    const menu = document.querySelector(".navigation");
    menu.classList.remove("open");
    // Votre code pour fermer le menu mobile
    closeMenuMobile();
  }

  // Fermer le menu lorsqu'on clique en dehors du menu
  if (!target.closest(".header-container")) {
    const menu = document.querySelector(".navigation");
    menu.classList.remove("open");
    // Votre code pour fermer le menu mobile
    closeMenuMobile();
  }
});

// Fonction pour ouvrir le menu mobile
function openMenuMobile() {
  document.querySelector(".navigation").classList.add("open");
  document.querySelector(".overlay_menu_mobile").classList.add("open");
}

// Fonction pour fermer le menu mobile
function closeMenuMobile() {
  document.querySelector(".navigation").classList.remove("open");
  document.querySelector(".overlay_menu_mobile").classList.remove("open");
}