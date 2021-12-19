// This is the important part!

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
      element.style.height = 0 + 'px';
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
    plan.setAttribute('data-collapsed', 'true')
  } else {
    collapseSection(plan)
  }
  
  if(isPhotoCollapsed) {
    expandSection(photo)
    photo.setAttribute('data-collapsed', 'true')
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
