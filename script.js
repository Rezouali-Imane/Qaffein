//swiper

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
    });





//ouverture du menu
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.navbar'); 
    menu.onclick = () => {
      menu.classList.toggle('move');
      navbar.classList.toggle('open-menu');
    }
    
//fermeture
window.onscroll = () => {
  menu.classList.remove('move');
  navbar.classList.remove('open-menu');
}

//animation :  scroll reveal
const animate= ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay:"400",
})

animate .reveal(".nav");
animate .reveal(".home-text"),{origin:"left"};
animate .reveal(".home-img"),{origin:"bottom"};
animate .reveal(".ser-box, product-box, .team-box, .book-data"),{interval:100};