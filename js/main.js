(function() {
  $('.nav li a').click(function(e) {
    $('.nav li.active').removeClass('active');
    var $parent = $(this).parent();
    $parent.addClass('active');
  });

  // Scroll to elements
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  // Scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  $('.scroll-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 600);
  });

  // Animate navbar
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });
})();