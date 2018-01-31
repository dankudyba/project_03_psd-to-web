$(window).scroll(function() {
    wHeight = $(window).height()
    if ($(document).scrollTop() > wHeight) {
        $('header').addClass('animated-header-act');
    } else {
        $('header').removeClass('animated-header-act');
  }
});


$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('body').animate({
	scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});
