// http://www.leopaulbilles.com/js/script.js

// $(window).load(function() {
// 	$(".loader").fadeOut("1000");
// })

$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('.cartel').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('.cartel').html($(this).find('.description').html());
            }
        });
    });

$(document).ready(function(){
    $(".show-info").click(function(){
        $(".info").slideToggle(450);
    });
});

$(document).ready(function () {
	$(window).trigger('scroll'); // init the value
    });

})

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});
