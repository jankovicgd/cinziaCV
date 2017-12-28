(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $(".slider").click(function() {
      var $this = $(this);
      $(".hider").toggle("slow")

      $this.toggleClass("expanded");

      if ($this.hasClass("expanded")) {
          $this.html("<h3><i class='fa fa-caret-down' aria-hidden='true'></i>Dolmetschungen einklappen</h3>");
      } else {
          $this.html("<h3><i class='fa fa-caret-right' aria-hidden='true'></i>Dolmetschungen aufklappen</h3>");
      }
  });

})(jQuery); // End of use strict
