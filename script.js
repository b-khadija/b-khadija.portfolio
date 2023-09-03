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

// Gsap => TweenMax

TweenMax.to('.block-1', 2, {
  x: '-180',
  y: '-100',
  scale: '2.4',
  ease: Expo.easeInOut,
});

TweenMax.to('.block-2', 2, {
  x: '-180',
  y: '60',
  scale: '1.2',
  ease: Expo.easeInOut,
});


TweenMax.to('.box', 2.4, {
  y: '-100%',
  ease: Expo.easeInOut,
});

TweenMax.from('.circle-shape', 2.4, {
  scale: '0',
  ease: Expo.easeInOut
});

TweenMax.from('.circle-shape-2', 2.4, {
  scale: '0',
  ease: Expo.easeInOut
});

TweenMax.from('.circle-shape-3', 2.4, {
  scale: '0',
  ease: Expo.easeInOut
});

TweenMax.from('.logo', 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6
})

TweenMax.from('.image-profile', 2, {
  opacity: 0.2,
  ease: Expo.easeInOut,
  delay: 2.4
});

//Media queries pour les animation en mobile
let isSmallScreen = false;

function handleTransform() {
  if (window.innerWidth < 60 * 16 && !isSmallScreen) {
    // L'écran est passé en dessous de 60rem, appliquer la transformation pour les petits écrans
    TweenMax.to('.block-1', 2, {
      x: '62',
      y: '-240',
      scale: '2.4',
      ease: Expo.easeInOut,
    });
    //-50px, -46px
    TweenMax.to('.block-2', 2, {
      x: '-30',
      y: '-160',
      scale: '1.2',
      ease: Expo.easeInOut,
    });

    TweenMax.to('.circle-shape-2', 2.4, {
      x: '-50',
      y: '-46',
    });

    TweenMax.to('.circle-shape-3', 2.4, {
      x: '-50',
      y: '-215',
    });

    isSmallScreen = true;
  }
}
handleTransform();
window.addEventListener('resize', handleTransform);