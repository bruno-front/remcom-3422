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


  let prevAccordionBtn;

  $('.js-accordion-btn').on('click', function() {
    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevAccordionBtn = this;

  });




  const tabActiveClass = 'active';
  const $tabsLink = $('.js-tabs-link');
  const $tabsContent = $('.js-contact-card');

  $tabsLink.on('click', function(event) {
    event.preventDefault();

    const index = $(this).index('.js-tabs-link');
    console.log(index);

    $tabsLink.removeClass(tabActiveClass);
    $(this).addClass(tabActiveClass);

    $tabsContent.removeClass(tabActiveClass);
    $tabsContent.eq(index).addClass(tabActiveClass);
  });






















});
