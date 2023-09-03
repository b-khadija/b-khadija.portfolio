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

//Scroll GSAP
gsap.registerPlugin(ScrollTrigger);

function updateScrollTriggers() {
  ScrollTrigger.refresh();
}

// Ajoutez un événement de redimensionnement de la fenêtre
window.addEventListener("resize", updateScrollTriggers);

// Ajoutez un événement de défilement vers le haut (dézoom)
window.addEventListener("scroll", updateScrollTriggers);

gsap.to(".image-container",{
  scale: 52,
  ease: "ease",
  scrollTrigger:{
    trigger: ".video-section",
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true
  }
})

gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})

gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})

gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})

const tl = gsap.timeline();
tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})


ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})

gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})