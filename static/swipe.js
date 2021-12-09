
function slide1() {
    const swiper = new Swiper('.mySwiper', {
        // Disable preloading of all images
        preloadImages: false,
    // Enable lazy loading
        lazy: true,
        spaceBetween: 10,
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: {
        //reverseDirection:true,
          delay: 3000,
          disableOnInteraction: false,
        },

          breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },

    620: {
      slidesPerView: 2,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },
                  // when window width is >= 480px
    820: {
      slidesPerView: 2,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },
    // when window width is >= 640px
    1052: {
      slidesPerView: 3,
      spaceBetween: 0,
      CenteredSlidesBounds:true
    },
    // when window width is >= 480px
    1700: {
      slidesPerView: 4,
      spaceBetween: 0,
      CenteredSlidesBounds:true
    },

  }
      });

}

function slide2() {
    const swiper2 = new Swiper('.mySwiper2', {
        preloadImages: false,
    // Enable lazy loading
        lazy: true,

        spaceBetween: 10,
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        autoplay: {
        reverseDirection:true,
          delay: 3000,
          disableOnInteraction: false,      
        },

          breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },

    620: {
      slidesPerView: 2,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },
                  // when window width is >= 480px
    820: {
      slidesPerView: 3,
      spaceBetween: 0,
      CenteredSlidesBounds:true,
      watchSlidesVisibility: true
    },
    // when window width is >= 640px
    1052: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    // when window width is >= 480px
    1700: {
      slidesPerView: 5,
      spaceBetween: 0,
      CenteredSlidesBounds:true
    },

  }

      });
}