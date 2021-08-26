// God save the Dev

'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('./assets/templates/layouts/index.html');
    require('./assets/templates/layouts/about-why.html');
    require('./assets/templates/layouts/about-team.html');
    require('./assets/templates/layouts/about-mission.html');
    require('./assets/templates/layouts/services.html');
    require('./assets/templates/layouts/services-palliative.html');
    require('./assets/templates/layouts/services-personal.html');
    require('./assets/templates/layouts/services-health.html');
    require('./assets/templates/layouts/services-skilled-nursing.html');
    require('./assets/templates/layouts/services-transitional.html');
    require('./assets/templates/layouts/services-assisted.html');
    require('./assets/templates/layouts/career.html');
    require('./assets/templates/layouts/career-details.html');
    require('./assets/templates/layouts/news.html');
    require('./assets/templates/layouts/article.html');
    require('./assets/templates/layouts/article-fill.html');
}

// Depends
var $ = require('jquery');
require('bootstrap-sass');

// Modules
var Forms = require('_modules/forms');
var Slider = require('_modules/slider');
var Popup = require('_modules/popup');
var Fancy_select = require('_modules/fancyselect');
var Jscrollpane = require('_modules/jscrollpane');
var LightGallery = require('_modules/lightgallery');
var Jslider = require('_modules/jslider');
var Fancybox = require('_modules/fancybox');
require('_modules/succinct/succinct');
require('../node_modules/sumoselect/jquery.sumoselect.min');
import Typed from 'typed.js';

// Stylesheet entrypoint
require('_stylesheets/app.scss');

// Are you ready?
$(function () {
    new Forms();
    new Popup();
    new Fancy_select();
    new Jscrollpane();
    new LightGallery();
    new Slider();
    new Jslider();
    new Fancybox();

    setTimeout(function () {
        $('body').trigger('scroll');
    }, 100);

    // fixed header

    if ($(window).width() >= 768) {
        var header = $('.header'),
            scrollPrev = 0;

        $(window).scroll(function () {
            var scrolled = $(window).scrollTop();

            if (scrolled > 180 && scrolled > scrollPrev) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
            scrollPrev = scrolled;
        });
    }

    // typed text

    var typed_main = new Typed('.typed-main', {
        strings: ['Exceptional Care, in the comfort of your loved one’s home'],
        typeSpeed: 60,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
    });

    // mobile menu

    var touch = $('.mobile-menu__btn');
    var menu = $('.mobile-menu__wrapper');

<<<<<<< HEAD
    var toggles = document.querySelectorAll('.mobile-menu__btn');
=======
  var typed_lang = new Typed('.lang-typing__text', {
    strings: ['English', 'Russian', 'Korean', 'Chinese', 'Vietnames', 'Arabic', 'Farsi', 'Uzbek', 'Spanish'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
  });

  // animations

  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animate');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
      var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animate').addClass('animated');
      }
    });
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

  // mobile menu
>>>>>>> 1dda3e60a1db165445165517703df49559eee155

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
        });
    }

<<<<<<< HEAD
    $(touch).click(function (e) {
        e.preventDefault();
        menu.toggle();
        $('body').toggleClass('active');
        return false;
=======
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener( 'click', function(e) {
      e.preventDefault();
      (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');
    });
  }

  $(touch).click(function(e) {
    e.preventDefault();
    menu.toggle();
    $('body').toggleClass('opened-menu');
    return false;
  });

  $('.mobile-menu li.has-children span').click(function() {
    $(this).closest('li').toggleClass('active').find('ul').slideToggle();
  });

  // lazy load
  var lazyload = function() {
    var scroll = $(window).scrollTop() + $(window).height() * 3;

    $('.lazy').each(function() {
      var $this = $(this);
      if ($this.offset().top < scroll) {
        $this.attr('src', $(this).data('original'));
      }
>>>>>>> 1dda3e60a1db165445165517703df49559eee155
    });

    // lazy load
    var lazyload = function () {
        var scroll = $(window).scrollTop() + $(window).height() * 3;

        $('.lazy').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('src', $(this).data('original'));
            }
        });
        $('.lazy-web').each(function () {
            var $this = $(this);
            if ($this.offset().top < scroll) {
                $this.attr('srcset', $(this).data('original'));
            }
        });
    };
    $(window).scroll(lazyload);
});
