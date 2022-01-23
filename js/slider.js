$(document).ready(() => {
  $('.benefits__slider').slick(({
    arrows: false,
    dots: true,
    rows: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }));

  $('.reviews__slider').slick(({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }));
});
