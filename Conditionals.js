var combinedString = "";
function a() {
    combinedString = "Inside a";

    function b() {
        combinedString = combinedString + " Inside b";
    }

    b();
}

a();
console.log(combinedString);















// var a = 0;

// if(a) {
//     console.log("True");
// }else{
//     console.log("False");
// }

// console.log(j);
// hoistDemo();
// function hoistDemo(){

//     console.log(i);
//     var i = 10;

// }

// var j  = 10;

// var name = "global";
// function scopeDemo(){

//     console.log(name);

// }

// scopeDemo();
// console.log(name);