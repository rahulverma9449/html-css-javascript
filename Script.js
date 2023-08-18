// var onclick = document.getElementById('onclick');
// onclick.addEventListener('click', function(event){
//     console.log('Click Inner Div');
//     event.stopPropagation();

// });

// var outer  = document.getElementById('outer');
// outer .addEventListener('click', function(){
//     console.log('Click Outer Div');
// });

// document.addEventListener('click', function(){
//     console.log('Click Document');
// });





























// var outerDiv = document.getElementById('outer');

// outerDiv.addEventListener('mouseover', function(){
//     console.log('Mouse Over');
// });

// outerDiv.addEventListener('mouseout', function(){
//     console.log('Mouse Out');
// });

// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress', function(){
//     console.log('Key pressed');
// });

// document.addEventListener('keypress', function(){
//     console.log('Key pressed');
// })






var Box = document.getElementById("Box");
var Click_Button = document.getElementById("Click_Button");
    count = 0;
    Box.addEventListener("click", function () {
    count++;
    demo = 100
    console.log(count);


    Click_Button.innerText = count + "";

});








// function welcome_sir(){
//     alert("wrong button click!!");
// }
// function byesir(){
//     alert("Bye sir !");
// }


// var helloButton2 = document.getElementById('btn2');





// helloButton2.addEventListener('click', welcome_sir);
// helloButton2.addEventListener('click', byesir);