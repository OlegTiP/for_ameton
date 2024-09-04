
// swiper faqs
const swiperFaqs = new Swiper('.js-faqs', {
   loop: true,
   watchSlidesProgress: true,
   slidesPerView: 4,
   autoHeight: true,
   spaceBetween: 24,
   loop: false,
   // autoplay: {
   //    delay: 5000, // Задержка между переключениями в миллисекундах (5 секунд)
   //  },

   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
         slidesPerView: 4,
         spaceBetween: 24
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 20
      },
   },

});

document.querySelectorAll('button, a').forEach((element) => {
   element.addEventListener('click', function(event) {
     event.preventDefault(); 
   });
 });

