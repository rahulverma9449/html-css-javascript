// //Number (64 bit)
// let num = 10;
// console.log(typeof num);

// //String

// const firstName = "falak";
// const lastName = 'rahul';
// const nickName = `honey`;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof nickName);

// // Boolean
// let bool = false;
// console.log(typeof bool);

// //Undefined
// let a;
// console.log(typeof a);


// let num1 = 10n;
// console.log(typeof num1);

// //Interesting things

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// constructor(Number.MAX_VALUE * 10);

// let num3 = Infinity;

// console.log(12 / 0);
// console.log(188/Infinity);
// console.log(5 && 6);

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;
// console.log(result);




// let x = 5 + '5';
// let y = '10' - 5;
// let z = x / y;

// console.log(typeof z);
// console.log(z);

// console.log(Boolean("false"));

// console.log(parseFloat("3.14.15"));



// let num2  = 3;

// if (num2 < 10){
//   console.log('Number is lesser than 10');
// console.log('number is 30');
// } else {
//   console.log('Number is greater');

// }

// const email = prompt('Enter the email address');

// const emailLen = email.length;

// const dotIndex =  email.lastIndexOf('.');

// const atIndex  = email.lastIndexOf("@");

// const lastIndex = emailLen - 1;

// if(emailLen < 11  ||
//   lastIndex - dotIndex < 2 ||
//   lastIndex - dotIndex >3 ||
//   dotIndex - atIndex < 3
//   )
//   {
//  console.log('invalid Email');
//   }

// function main(email) {
//   let result;

//   if (email.length >= 3 && /^[a-z A-Z 0-9._-]+@[a-z A-Z 0-9.-]+\.[a-z A-Z] {2,4}$/.test(email)) {
//     result = `${email} is valid`;
//   } else {
//     result = `invalid email`;
//   }
//   return result;
// }

// const email1 = 'rahulverma@gmail.com';
// const email2 = 'abc@gmail.com';

// console.log(main(email1));
// console.log(main(email2));

// c
// let num =6 ;

// num % 2 === 0
// console.log('Even')
// : console.log('Odd');

// let a = "4";
// let b  = "6";

// const result =  ++a + b--;
// console.log(typeof result);
// console.log(result);
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const num = 17; // You can replace this with any number you want to check
// if (isPrime(num)) {
//   console.log(`${num} is a prime number.`);
// } else {
//   console.log(`${num} is not a prime number.`);
// }


/** do while loop **/
//do {} while(Condition);

// let num;
// do{
//   num =  prompt("Enter a number");

// } while (num <= 50);

// function greetUser(username){
//   console.log("Hello" +
//   username +
//   'welcome to the session!');

// }
// greetUser('Falak');
// greetUser('Alexa');

// function sum(num1 = 0, num2 = 0){

//   console.log(`sum of the numbers is: ${num1 + num2}`
// );
// }














// var userLoggedIn = true;

// function checkUserLoggedIn() {
//  var promise = new Promise((resolve, reject) => {

//   setTimeout( () => {
//     if(userLoggedIn){
//       resolve("User logged in");
//     }else{
//       reject();
//     }
//   }, 1000);
//  });
//  return promise
// }


//  setTimeout( () => {
//   userLoggedIn =false;
//  }, 500);

//  checkUserLoggedIn().then((successMsg) => {
//   console.log(succesMsg);
// }).catch(() => { console.log("User Not logged In"); });











// var cur = "square";

// var shape = [
//   "square",
//   "rectangle",
//   "circle",
//   "oval",
//   "triangle-up",
//   "triangle-down",
//   "triangle-topleft",
//   "triangle-bottomleft",
//   "triangle-bottomright",
//   "triangle-right"
// ];

// var color = ["red", "orange", "green", "maroon", "pink", "violet"];

// document.getElementById("shape").onclick = function () {
//   var rand = shape[Math.floor(Math.random() * shape.length)];
//   document.getElementById(cur).setAttribute("id", rand);
//   cur = rand;
// };

// document.getElementById("color").onclick = function () {
//   var randColor = color[Math.floor(Math.random() * color.length)];
//   document.getElementById("block").style.backgroundColor = randColor;
// };
