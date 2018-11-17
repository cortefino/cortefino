(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $('.navbar').removeClass('d-none');
  })

  /**
   * menu page
   */
  var menu = $.get('js/menu.json', (menu) => {
    for (var i in menu) {
      console.log(menu[i][0].title);
    };
    // title
    $('.title1').text(menu[i][0].title);
    $('.title2').text(menu[i][1].title);
    $('.title3').text(menu[i][2].title);
    $('.title4').text(menu[i][3].title);
    $('.title5').text(menu[i][4].title);
    $('.title6').text(menu[i][5].title);

    // price

    $('.price1').text(menu[i][0].price);
    $('.price2').text(menu[i][1].price);
    $('.price3').text(menu[i][2].price);
    $('.price4').text(menu[i][3].price);
    $('.price5').text(menu[i][4].price);
    $('.price6').text(menu[i][5].price);

    // desc
    $('.desc1').text(menu[i][0].desc);
    $('.desc2').text(menu[i][1].desc);
    $('.desc3').text(menu[i][2].desc);
    $('.desc4').text(menu[i][3].desc);
    $('.desc5').text(menu[i][3].desc);
    $('.desc6').text(menu[i][5].desc);

  })

})(jQuery); // End of use strict