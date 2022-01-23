$(document).ready(() => {
  $('.header__burger').click(() => {
    $('.header__burger').toggleClass('open-menu');
    $('.header__burgermenu').toggleClass('open-menu');
  })

  $('.header__burgermenu-el').click(() => {
    $('.header__burger').removeClass('open-menu');
    $('.header__burgermenu').removeClass('open-menu');
  });
});
