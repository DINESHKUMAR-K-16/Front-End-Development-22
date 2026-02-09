const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-4-line"
    );
  });

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
  });

const scrollRevealOption = {
  distance: "50px",
   origin: "bottom",
  duration: 1000,
  };

ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    stretch: 0,
  
  },

  ScrollReveal().reveal(".service__container .section__subheader", {
    ...scrollRevealOption,
    });
  ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
    });
ScrollReveal().reveal(".service__row:nth-child(2n-1) img" , {
  ...scrollRevealOption,
  origin: "left",
});
  ScrollReveal().reveal(".service__row:nth-child(2n) img", {
    ...scrollRevealOption,
    
});
    
  
                      

 
    
   

