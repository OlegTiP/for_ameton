// menu2
$(document).ready(function(){
   $('.header__item').click(function(){
     var nav2 = $(this).next('.header__nav2');
     $('.header__nav2').not(nav2).slideUp();
     $('.header__item.active').not(this).removeClass('active');
     $(this).toggleClass('active');
     nav2.slideToggle();
   });
 
   $(document).mouseup(function(e) {
     var container = $(".header__item-inner");
 
     if (!container.is(e.target) && container.has(e.target).length === 0) {
       $('.header__item').removeClass('active');
       $('.header__nav2').slideUp();
     }
   });
 });
 
//  burger menu
 $(document).ready(function() {
   $('.header__burger').click(function() {
     $('.header__top-wrapper').toggleClass('active');
     $('body').toggleClass('stop-skroll');
   });
 });
 
 
// swiper cards
const swiperCards = new Swiper('.js-cards', {
   // Optional parameters
   loop: true,
   slidesPerView: 4,
   autoHeight: true,
   spaceBetween: 20,
   loop: true,
   autoplay: {
      delay: 5000, // Задержка между переключениями в миллисекундах (5 секунд)
    },

   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',
   },
   breakpoints: {
      390: {
         slidesPerView: 1
      },
      // 600: {
      //    slidesPerView: 2
      // },
      768: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 20
      },
   },

});

