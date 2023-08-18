var progressBars = document.querySelectorAll('.skill-progress > div');;

var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone =false;

function initialiseBars(){
  for(let bat of progressBars){
    bar.style.width = 0 + '%';
  }
}
initialiseBars();
  function fillBars(){
    for(let bar of progressBars){
      let targetWidth = bar.getAttribute('data-bar-width');
      let CurrentWidth = 0;
      let interval = setInterval(function(){
        if(CurrentWidth > targetWidth){
          clearInterval(interval);
          return;
        }
        CurrentWidth++;
        bar.style.width = CurrentWidth + '%';
      }, 3);
    }
  }

// for single bar
// finction fillBar(bar){

//}

function checkScroll(){
// you have to check whether skill container is visible
var coordinates = skillContainer.getBoundingClientRect();
if(!animationDone && coordinates.top < window.innerHeight){
  animationDone = true;
  console.log('skills Section Visible');
  fillBars();
}else if(coordinates.top > window.innerHeight){
  animationDone =false;
  initialiseBars();
}

}























var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


// for(var i = 0; i < navMenuAnchorTags.length; i++){
//   navMenuAnchorTags[i].addEventListener('click', function(event){
//     event.preventDefault();
//     var targetSectionID = this.textContent.trim().toLowerCase();
//     var targetSection = document.getElementById(targetSectionID);
//     console.log(targetSection);
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     interval =setInterval(scrollVertically, 20,targetSection);
//   });
// }

// function scrollVertically(targetSection) {
//       var targetSectionCoordinates = targetSection.getBoundingClientRect();
//       if (targetSectionCoordinates.top <= 0) {
//           clearInterval(interval);
//           return;
//       }
//       window.scrollBy(0, 50);
//   }



for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}














// var targetPos = 1500;
// var currentPos = 0;
// var scrollInterval =
//     setInterval(function(){
//       if(currentPos >= targetPos){
//        clearInterval(scrollInterval);
//       return;
//     }
//       currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 50);