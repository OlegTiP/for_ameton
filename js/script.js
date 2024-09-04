
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
      320: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      460: {
         slidesPerView: 2,
         spaceBetween: 15
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 15
      },
      1024: {
         slidesPerView: 2,
         spaceBetween: 24
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 24
      },

   },

});

document.querySelectorAll('button, a').forEach((element) => {
   element.addEventListener('click', function(event) {
     if (element.tagName === 'A' && element.getAttribute('href') === '#') {
       event.preventDefault();
     } else if (element.tagName === 'BUTTON') {
       event.preventDefault();
     }
   });
});

