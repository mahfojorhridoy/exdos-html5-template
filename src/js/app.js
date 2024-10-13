var tsSlideThumb = new Swiper(".ts-testimonial-thumb-active", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  centeredSlides: true,
  allowTouchMove: false,
  watchSlidesProgress: true
});

let tsSliderContent = new Swiper(".ts-testimonial-content-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    freemode: true,
    centeredSlides: true,
    loop: true,
    navigation: {
    nextEl: `.ts-testimonial-btn-next`,
    prevEl: `.ts-testimonial-btn-prev`,
    },
    thumbs: {
      swiper: tsSlideThumb,
    }
});
let tsSlider = new Swiper(".ts-testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    freemode: true,
    centeredSlides: true,
    loop: true,
    navigation: {
    nextEl: `.ts-testimonial-btn-next`,
    prevEl: `.ts-testimonial-btn-prev`,
    }
});





let brandLogoAnimation = new Swiper(".ts-brand-animation-active", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  freemode: true,
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  speed: 2500,
  autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
});

let brandTitleAnimation = new Swiper(".ts-brand-title-animation-active", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  freemode: true,
  centeredSlides: true,
  loop: true,
  allowTouchMove: false,
  speed: 2500,
  autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
});


let team = new Swiper(".ts-team-active", {
  slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".ts-team-next",
      prevEl: ".ts-team-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });


  let showcase = new Swiper(".ts-showcase-active", {
    slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".ts-showcase-next",
        prevEl: ".ts-showcase-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });


    var slideTestimonial = new Swiper(".ts-testimonial-list", {
      slidesPerView: 4,
      spaceBetween: "30",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    });



  
//data - background
$("[data-background]").each(function () {
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

$("[data-bd-color]").each(function () {
  $(this).css("background", $(this).attr("data-bg-color"))
})


let $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: 1,
  }
})
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});