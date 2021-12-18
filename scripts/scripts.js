$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    //vertical: true,
    lazyLoad: 'progressive',
    adaptiveHeight: true
  });
});

function focusDetails() {
  document.getElementById("gallery").style.opacity = "0";
  document.querySelector("body").style.background = "rgb(255, 80, 0)";
}
function normalDetails() {
  document.getElementById("gallery").style.opacity = "1";
  document.querySelector("body").style.background = "";
}
