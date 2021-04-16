'use strict';

const swiper = new Swiper('.swiper-container', {
  speed: 400,
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
});
