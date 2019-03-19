(function($) {
  "use strict"; // Start of use strict
	//NICE SCROLL
	 $('html').niceScroll({
		 cursorcolor:'#494949',
		 cursorwidth:8,
		 cursorborderradius:8,
		 cursorborder:'1px solid #494949'
	});
	
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
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
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })


})(jQuery); // End of use strict

 //count up the facts 
 var options = {
    useEasing: true, 
    useGrouping: true, 
    separator: '', 
    decimal: '', 
    };
    var demo = new CountUp('target-no1', 0, 24, 0, 2.5, options);
    if (!demo.error) {
    demo.start();
    } else {
    console.error(demo.error);
    }
    var demo1 = new CountUp('target-no2', 0,5000, 0, 2.5, options);
    if (!demo1.error) {
    demo1.start();
    } else {
    console.error(demo1.error);
    }
    var demo2 = new CountUp('target-no3', 0, 500, 0, 2.5, options);
    if (!demo2.error) {
    demo2.start();
    } else {
    console.error(demo2.error);
    }
    