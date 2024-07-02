$(document).ready(function() {

  let isOpen = false;

  $('.js-burger').on('click', function() {

    if (isOpen) {
      $('.js-main-nav').slideUp();
      isOpen = false;
    } else {
      $('.js-main-nav').slideDown();
      isOpen = true;
    }

  });

  // Простая альтернатива:
  // $('.js-burger').on('click', function() {

  //   $('.js-main-nav').slideToggle();

  // });

































});
