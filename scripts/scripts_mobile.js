////////////////////////////////////////////////////////////////////////////////
// Mobile — Footer Showing

function hideFooter() {
  document.querySelector("footer").style.bottom = "100%";

}
function showFooter() {
  document.querySelector("footer").style.bottom = "";
}

////////////////////////////////////////////////////////////////////////////////
// Mobile — Scrolling

const vertical = new Swiper(".vertical", {
  // styling
  direction: "vertical",
  centeredSlides: false,
  //loop
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 3,
  allowSlidePrev: true, // can scroll backwards?
  // speed
  freeMode: true, // allow/stop scroll momentum
  longSwipes: true // stop 
  // setWrapperSize: true
});

