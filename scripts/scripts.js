////////////////////////////////////////////////////////////////////////////////
// Desktop — Scrolling

// NEEDS CHANGING WHEN ADDING/REMOVING IMAGES
const fifteen = new Swiper(".fifteen", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  loopedSlides: 15,
  mousewheel: true
});

////////////////////////////////////////////////////////////////////////////////
// Desktop — Focus on details

function focusDetails() {
  document.getElementById("gallery").style.opacity = "0";
  document.querySelector("body").style.background = "rgb(255, 80, 0)";
}
function normalDetails() {
  document.getElementById("gallery").style.opacity = "1";
  document.querySelector("body").style.background = "";
}

////////////////////////////////////////////////////////////////////////////////
// Desktop — Flick between images and plans


function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 1 + 'px';
    });
  });
  
  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);
    
    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });
  
  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}

// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  //this.style.color = "#A5D9F3";
  var plan = this.querySelector('.plan');
  var photo = this.querySelector('.photo');
  var isPlanCollapsed = plan.getAttribute('data-collapsed') === 'true';
  var isPhotoCollapsed = photo.getAttribute('data-collapsed') === 'true';

  if(isPlanCollapsed) {
    expandSection(plan)
    plan.setAttribute('data-collapsed', 'false')
  } else {
    collapseSection(plan)
  }
  
  if(isPhotoCollapsed) {
    expandSection(photo)
    photo.setAttribute('data-collapsed', 'false')
  } else {
    collapseSection(photo)
  }
}

// Get a list of every element in the document
var elements = document.getElementsByClassName("carousel");

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}

////////////////////////////////////////////////////////////////////////////////
// Mobile — Footer Showing

function hideFooter() {
  document.querySelector("footer").style.bottom = "100%";
  document.getElementsByClassName("slideshow-container").style.opacity = "1";

}
function showFooter() {
  document.querySelector("footer").style.bottom = "";
  document.getElementsByClassName("slideshow-container").style.opacity = "0.5";
}

////////////////////////////////////////////////////////////////////////////////
// Mobile — Scrolling

const three = new Swiper(".three", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  loopedSlides: 3,
  centeredSlides: true,
  allowSlidePrev: true
});

const four = new Swiper(".four", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  loopedSlides: 0,
  centeredSlides: true,
  allowSlidePrev: true
});

const five = new Swiper(".five", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  loopedSlides: 0,
  centeredSlides: true,
  allowSlidePrev: true,
  height: "1000px",
  longSwipes: false
});


////////////////////////////////////////////////////////////////////////////////
// Mobile — Project nav/slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
