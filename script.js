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

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader-wrapper');
  var imageWrapper = document.getElementById('image-wrapper-one');

  setTimeout(function () {
    // Réduire l'opacité du preloader
    preloader.style.opacity = 'fade-out 4s cubic-bezier(.6, .2, .1, 1)';
    preloader.addEventListener('transitionend', function () {
      // Cacher le preloader une fois la transition terminée
      preloader.style.display = 'none';
    });
     // Augmenter l'opacité de l'image de fond pour révéler le contenu
    imageWrapper.style.opacity = '1';
  }, 2000);
});

// Fonction pour animer le job title
document.addEventListener("DOMContentLoaded", function() {
  const jobElements = document.querySelectorAll(".job-animation");
  
  function animateElements() {
    jobElements.forEach(function(element, index) {
      setTimeout(function() {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 500);
    });
  }
  
  setTimeout(animateElements, 4500);
});

//Animation hover projects preview
// const items = document.querySelectorAll('.item');
// const image = document.querySelector('img.image-project');

// items.forEach((el) => {
//   const projectImage = el.querySelector('.image-project');

//   el.addEventListener('mouseover', (e) => {
//     projectImage.style.zIndex = 99;
//   });

//   el.addEventListener('mousemove', (e) => {
//     projectImage.style.top = e.clientY + 'px';
//     projectImage.style.left = e.clientX + 'px';
//   });

//   el.addEventListener('mouseleave', (e) => {
//     projectImage.style.zIndex = 1;
//   });
// });


//Animation hover projects preview
const link = document.querySelectorAll('.link');
const hoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    hoverReveal[i].style.opacity = 1;
    hoverReveal[i].style.transform = `translate(-100%, -50%) rotate(2deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    hoverReveal[i].style.left = e.clientX + "px";
  });
  link[i].addEventListener('mouseleave', (e) => {
    hoverReveal[i].style.opacity = 0;
    hoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-2deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
   
  });
}