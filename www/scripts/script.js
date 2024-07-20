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
    $(this).addClass('loading');

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        count: 2
      },
      success: function(res) {
        const reviewsHtml = createReviewsHtml(res.reviews);
        addToPageHtml(reviewsHtml);
        $('.js-reviews-btn').removeClass('loading');
      },
      error: function(err) {
        console.log('Error: ', err);
        $('.js-reviews-btn').removeClass('loading');
      }
    });

  });

  function createReviewsHtml(dataArray) {
    let htmlString = '';

    dataArray.forEach(function(dataItem) {
      htmlString = htmlString + `<div class="reviews-item">
            <img src="${dataItem.avaUrl}" alt="${dataItem.avaAlt}" class="reviews-ava">
            <div class="reviews-text">
              <strong class="reviews-name">${dataItem.name}</strong>
              <blockquote class="reviews-quote">
                “${dataItem.text}”
              </blockquote>
            </div>
          </div>`;
    });

    return htmlString;
  }

  function addToPageHtml(html) {
    $('.js-reviews-wrap').append(html);
  }

});
