const swiperWhatWeDo = new Swiper('.swiper-aaa-games-wwd', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 24,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1140: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--active',
  },
  navigation: {
    nextEl: '.wwd-card-btn.next',
    prevEl: '.wwd-card-btn.prev',
  },
});
