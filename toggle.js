var boxes = document.getElementById("box");
var circle = document.getElementById("round");
var hero = document.getElementById("home");

boxes.addEventListener("click", function () {
  circle.classList.toggle("circles");
  hero.classList.toggle("dark-mode");

});





// window.onload= function (){
//     //Your entire JS code here
//     const button = document.getElementById('button');
//     const current = document.getElementById('current');
//     var colors = ["blue","white"];

//     button.addEventListener("click",clickChange);

//     function clickChange(){
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//     }
