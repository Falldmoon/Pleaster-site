document.body.onload = function () {
   setTimeout(function () {
      let preloader = document.getElementById('preloader');
      if (!preloader.classList.contains('preloader-done')) {
         preloader.classList.add('preloader-done');
      }
   }, 1000);
};
$(document).ready(function () {
   new WOW().init();
   $('.input-phone').mask('+7 (999) 99-99-999');
   $('.feedback-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      prevArrow: '<button class="arrow prev"></button>',
      nextArrow: '<button class="arrow next"></button>',
       responsive: [
          {
             breakpoint: 991,
             settings: {
                dots: true
             }
          }
       ]
   })
   $('.materials-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               prevArrow: '<button class="arrow prev"></button>',
               nextArrow: '<button class="arrow next"></button>'
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               prevArrow: '<button class="arrow prev"></button>',
               nextArrow: '<button class="arrow next"></button>'
            }
         }
      ]
   });
   $('.features-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint:991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               prevArrow: '<button class="arrow prev"></button>',
               nextArrow: '<button class="arrow next"></button>'
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               prevArrow: '<button class="arrow prev"></button>',
               nextArrow: '<button class="arrow next"></button>'
            }
         }
      ]
   });
});