const swiperBlogList = new Swiper('.swiper-blog-list', {
  loop: true,
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 24,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__btn',
    bulletActiveClass: 'pagination__btn--active',
  },
  navigation: {
    nextEl: '.blog-list-btn.next',
    prevEl: '.wwd-card-btn.prev',
  },
});
