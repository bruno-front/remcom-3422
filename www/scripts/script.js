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


  $('.js-filter-link').on('click', function(event) {
    event.preventDefault();

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');

    if (dataFilter === 'all') {
      $('.js-works-list > li').show();
      return;
    }

    $('.js-works-list > li').each(function() {
      let dataType = $(this).data('type');

      if (dataFilter === dataType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });


  $('.js-slider').slick({
    // autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });



  $('.js-reviews-btn').on('click', function() {

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        count: 2
      },
      success: function(res) {
        console.log(res);
      },
      error: function(err) {
        console.log('Error: ', err);
      }
    });

  });










});
