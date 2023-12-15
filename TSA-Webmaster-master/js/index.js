$(document).scroll(function() {
    navbarScroll();
  });
  
  function navbarScroll() {
    var y = window.scrollY;
    if (y > 10) {
      $('.header').addClass('small');
    } else if (y < 10) {
      $('.header').removeClass('small');
    }
  }