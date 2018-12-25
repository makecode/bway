//=include libs/jquery.min.js
//=include libs/owl.carousel.min.js
'use strict';

$( document ).ready(() => {
  const tabsSwitcher = function(tabsArray, contentArray) {
    tabsArray.map(function (i, el) {
      $(el).click(function () {
        let activeIndex = i;
        contentArray.map(function(contentIndex, content) {
          if( activeIndex === contentIndex ) {
            $(content).addClass('is-visible')
          } else (
            $(content).removeClass('is-visible')
          )
        });
        tabsArray.map(function(i, tab) {
          $(this).removeClass('is-active');
        });
        $(this).addClass('is-active');
      });
    });
  };

  const tabs = $('.tabs'),
      tabsEl = tabs.find('.tabs__el'),
      tabsContent = tabs.find('.tabs__content');
  tabsSwitcher(tabsEl, tabsContent);

  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 7000,
    items: 3,
    margin: 20,
    loop: true,
    pagination: false,
    nav: true,
    // navigationText: ['<div class="left"></div>', '<div class="right"></div>']
    navText: ['<img class="btn-prev" src="../img/arrow-left.png" />','<img class="btn-next" src="../img/arrow-right.png" />']
  });

  // $('.aside__title').click(function () {
  //   $('.filter__list').addClass('is-open');
  // });

  $(window).scroll(function(){
    const sticky = $('.header'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  // TweenMax.fromTo('.header__left', 1, {x: -200, opacity: 0}, {x: 0, opacity: 1}, "-0.7");
  // TweenMax.fromTo('.header__center', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1});
  // TweenMax.fromTo('.header__right', 1, {x: 200, opacity: 0}, {x: 0, opacity: 1}, "-0.7");

  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

});
