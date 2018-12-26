'use strict';

var owlConfig = {
  autoplay: true,
  autoplayTimeout: 7000,
  items: 3,
  margin: 20,
  loop: true,
  dots: true,
  nav: false
};

$(document).ready(function () {
  var tabsSwitcher = function tabsSwitcher() {
    var tabs = $('.tabs'),
        tabsEl = tabs.find('.tabs__el'),
        tabsContent = tabs.find('.tabs__content');

    var tabsToggle = function tabsToggle(tabsArray, contentArray) {
      tabsArray.map(function (i, el) {
        $(el).click(function () {
          var activeIndex = i;
          contentArray.map(function (contentIndex, content) {
            if (activeIndex === contentIndex) {
              $(content).addClass('is-visible');
            } else $(content).removeClass('is-visible');
          });
          tabsArray.map(function (i, tab) {
            $(this).removeClass('is-active');
          });
          $(this).addClass('is-active');
        });
      });
    };

    tabsToggle(tabsEl, tabsContent);
  };

  $('.owl-carousel').owlCarousel(owlConfig);

  $(window).scroll(function () {
    var sticky = $('.header'),
        body = $('body'),
        scroll = $(window).scrollTop();

    if (scroll >= 30) {
      sticky.addClass('fixed');
      body.addClass('without-header');
    } else {
      sticky.removeClass('fixed');
      body.removeClass('without-header');
    }
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
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

  var search = function search() {
    var $search = $('#search'),
        activeClass = 'opened';

    $($search).on('click', function () {
      var opened = $($search).hasClass(activeClass);
      if (opened) return;
      $($search).addClass(activeClass);
    });
  };

  $(window).on('click', function (e) {
    var $search = $('#search'),
        $target = $(e.target);
    var test = $($search).find($target);

    if (!test.length) {
      $($search).removeClass('opened');
    }
  });

  // INITIALISATION
  tabsSwitcher();
  search();
});