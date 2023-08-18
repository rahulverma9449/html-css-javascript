// function squared(number){
//     return number * number;
//     console.log(number * number);
// }
// const a = squared(5);
// console.log(a);
// squared(5);
// squared(15);
// squared(19);

// const students = ['Alexa', 'Google', 'Sony'];
// console.log(students);

// const cars = new Array('Volvo', 'BMW');
// console.log(cars);

// const arr = ["Apple", "Rahul", 10, true]
// console.log(arr);


// console.log(students[2]);

// const cities = [
//     'Mumbai',
//     'Delhi',
//     'Calcutta',
//     'jaipur',
//     'Chennai',
// ];

// console.log(cities.length);

// cities[2] = 'kolkata';
// console.log(cities);
// cities[0] = 'bombay';
// console.log(cities);

// const teams = ["CSK", "RCB", "MI", "LSG"];
// teams.push('GT');
// console.log(teams);

// teams.unshift('KKR');
// console.log(teams.length);
// // teams.pop();
// // teams.pop();
// // console.log(teams);


// teams.shift();
// console.log(teams);

// const RCbIndex = teams.indexOf('RCB');
// console.log(RCbIndex);
// const gtIndex = teams.indexOf('GT');
// console.log(gtIndex);
// const KKIndex = teams.includes('GT');
// console.log(KKIndex);


// console.log(teams);
// console.log(teams.slice(2));
// console.log(teams);


// teams.splice(2, 0, "GT");
// console.log(teams);

// teams.pop("GT");
// console.log(teams);

// teams.splice(2, 1, "GT", "LSG");
// console.log(teams);


// const teams2 = [
//     'India',
//     'Indonesia',
//     'Pakistan',
//     'Australia',
//     'Canada',

// ];

// const mergeteams = teams.concat(teams2);
// console.log(mergeteams);

// const arr = Array.from("cosingninja");
// console.log(arr);

// const Student3 = [
//     'Tiina',
//     'rahul',
//     'Alaska',
//     'ram',
//     'Alex'
// ];

// for (let i = 0; i < Student3.length; i++) {
//     console.log(`Roll No ${i + 1}: ${Student3[i]}`);
// }


// for (let i in Student3) {

//     console.log(`Roll ${i + 1}: ${Student3[i]}`);

// }

// for (let students in Student3) {
//     console.log(students);
// }


// const inputs = [
//     11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53
// ];

// const evenNumbers = [];

// for (let i in inputs) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     evenNumbers.push(i);

//     if (evenNumbers.length === 5) {
//         break;

//     }
//     console.log(evenNumbers);
// }
// console.log(evenNumbers);

// const aprilBatch = ['Tina', 'Madhur'];
// const mayBatch = ['Ritik', 'rahul', 'shalini'];
// const juneBatch = ['siba', 'shivani'];

// const julyBatch = [];

// // function addstudent(batch, student) {
// //     batch.push(student);
// //     console.log(batch);
// // }
// // addstudent(aprilBatch, 'Ritu');
// // addstudent(mayBatch, 'sunny');


// function addstudent(batch, ...student) {
//     for (let i of student) {
//         batch.push(i);
//     }
//     console.log(batch);
// }

// addstudent(
//     aprilBatch, 'sunny',
//     'Ritu',
//     'sheena'
// );

// //spread

// const newBatch = [...mayBatch];
// console.log(newBatch);

// mayBatch.push('newStudent');
// console.log(mayBatch);
// console.log(newBatch);

// //Concatenate

// const mergeBatch = [...mayBatch, ...juneBatch];
// console.log(mergeBatch);

// const student4 = {
//     name: "Rahul",
//     age: 34,
//     hobby: "dancing",
//     100: "hundred",
//     show: function () {
//         console.log("This is the student details ");
//     },
// };
// console.log(student4);
// console.log(student4.name);
// console.log(student4.show);


// const fruits = [{
//     Apple : 4, orange : 7, grape : 3
// },
// {Gavava : 6, Lemon: 4, banana: 8},
// {Honeycomb : 7, Apple : 8, mango : 9}
// ];

// const countfruits = {};
// fruits.forEach(element => {
//     console.log(element);
//     for (each in element){
//         if (countfruits[each]) {
//             countfruits[each] = countfruits[each] + element[each]
//         }else{
//             countfruits[each] = element[each]
//         }
//     }
// });
// console.log("countfruits");




// console.log(`userName: ${userName}`);
// console.log(`userAge: ${userAge}`);

// greetUser(userName);

// var userName = 'Tom';
// var userAge = 10;

// console.log(`userName: ${userName}`);
// console.log(`userAge: ${userAge}`);

// function greetUser(name){
//     var greet = 'I ho[e you are doing well';
//     console.log(`hello ${name}, ${greet}`);
//     var currentYear = 2030;
//     const year = currentYear - userAge;
    /**return year birth year is ${year};*/
// // }
// var birthYear = greetUser(userName);
// console.log(birthYear);

// var varnum = 10;
// let letnum = 20;
// const constNum = 30;


// function print() {
//     var varLocal = 10;
//     let letLocal =  20;
//     const constLocal = 30;


//     console.log(varLocal, letLocal, constLocal);
// }
// console.log(varnum,letnum, constNum);

// print();

// var a = 10;
// let b = 20;
// const c = 30;

// function print() {
//     var a = 'ten';
//     let b = 'twenty';

//     console.log('***** Inside print Function ******');
//     console.log(a, b, c);
//     console.log('***** *****');


//     function innerPrint() {
//         var a = 'inner10';
//         console.log('***** Inside print Function===== ******');
//         console.log(a, b, c);
//     }
//     innerPrint();
// }
// console.log(a, b, c);
// pr;int()


// "use strict";
// let value =10;

// if(value){
//     value =20;
// }
// console.log(value);

// var a = 10;
// let b = 20;
// console.log(`a: ${a}, b: ${b}`);

// var a =55;
// console.log(`a: ${a}`);

// let a  = 'Global';

// function outerPrint(){
//     let b = 'OuterPrint';

//     return function innerPrint() {
//         let c = 'innerPrint';
//         return `${a} -> ${b} -> ${c}`;

//     };
// }
// const show = outerPrint();
// console.log(show);
// const printInner = show();
// console.log(printInner);


// const sum1  = sum(5, 6);
// console.log(sum1);

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum2);

// var sum2  = function (a, b) {
//     return a + b;
// };

//Function Expression

// var sum2 =  function (a, b) {
//     return a + b;
// };
// // console.log(sum2(1, 8));

// var prod  = (num1, num2) => num1 * num2;
// console.log(prod(2, 4));

// IIFE (Immediately Invoked Functions Expression)

// (function (a, b){
//     console.log(a ** b);
// })(4,2);

//  const user = (function (){
//     const userData = {
//           userName: 'john',
//           userAge: 20,
//     }
//     function getName(){
//         console.log(userData.userName);
//     }
//     function upadteAge(age){
//         console.log(userData.userAge + age);

//     }
//     return {getName, upadteAge}
// }) ();

// console.log(user);
// console.log(user.userData);
// user.getName();
// user.upadteAge(3);

/** PURE Function */

// function Calculate(num1, num2) {

//     return num1 *  num2;
// }
// console.log(Calculate(4,6));
// const discount  =  25;

// function calcdis(price){
//     discount = discount -5;
//     return price - discount;

// }


function greet(wish){
    console.log(`${wish()}, Welcome to the javascript Course`);
}

function sayHi(){
    return 'Hi!';
}

function sayHello(){
    return "sayHello";
}
function goodmorning() {
    return 'Good Morning ';

}
greet(sayHi);
greet(sayHello);
greet(goodmorning);


// function great(message){
//     return function(wishes) {
//         console.log(`${wishes}, ${message}`);
//     };
// }
// const greeting = great('I hope you are doing well');
// console.log(great('Hello,'));
// greeting('I hope you are doing');

const input = [2,3,4,5,6,7,8,12,1,4,16];

function operation(input, fn){
    const output = [];
    for (let num of input){
        output.push(fn(num));
    }
    return output;
}
function square(number){
    return number * number;

}

function cubic(number){
    return number * number * number;
}

console.log(operation(input, square));
console.log(operation(input, cubic));
// function square(input){
//     const squared = [];
//     for (let num of input){
//         squared.push(num * num);
//     }
//     return squared;
// }

// function cubic(input){
//     const cubes = [];
//     for (let num of input){
//         cubes.push(num * num);
//     }
// return cubes;
// }

// console.log(square(input));
// console.log(cubic(input));

// function add1(a,b,c){
//     return a + b+ c;
// }
// console.log(add1(2,3,4));

// function add2(a) {
// return function (b){
//     return function (c){
//         return a * b * c;
// };
// };
// }
// console.log(add2(2)(3)(4));

// const inputs  = [2, 4,6,8,7];
// const squaredArray = inputs.map(function (
//  currentElement
// ){
//     return currentElement * currentElement;
// });

// const squaredArray = inputs.map((num) => num * num);
// console.log(squaredArray);

// const inputt = [2,3,4,5,6];
// const sum = inputt.reduce((total, num, index, number ) => {
//     console.log(total, index, number);
//     return total + num
// },0)
// console.log(sum);

// const inputs = [4, 10, 2,-3, -2, 5, 9, -1];
// const positives = inputs.filter(noNegative);

// function noNegative(num){
//     return num > 0;
// }
// console.log(`orginal array: ${inputs}`);
// console.log(` only positives number: ${positives}`);

// const negatives =  inputs.filter((num) => num < 0);

// console.log(`orginal array: ${inputs}`);
// console.log(` only negatives number: ${negatives}`);
// console.log(` only positives number: ${positives}`);
// const inputs = [22,44,33,65,78,66,67,55];

// const find1 = inputs.find((num) => num == 65);
// console.log(find1);

// const find2 = inputs.findIndex((num) => num == 65);
// console.log(find2);
// const find3 = inputs.every((num) => num == 65);
// console.log(find3);
// const find4= inputs.fill((num) => num == 65);
// console.log(find4);
// const find5= inputs.findlast((num) => num == 65);
// console.log(find5);
// const find6= inputs.findlastIndex((num) => num == 65);
// console.log(find6);
// const find7= inputs.forEach(element => {

// });((num) => num == 65);
// console.log(find7);

"use strict";
console.log(this);

function checkThis() {
    console.log(this);
}
 checkThis();

 const checkArrow = () => {
    console.log(this);
 };
 checkArrow();

//  const user1 = {
//     username: 'john',
//     userage: 12,

//     work: function () {
//         console.log(this);
//     },
//  };
//  user1.work();

//  const user2 = {
//     username: "harry",
//     userAge: '33'
//  };

//  user2.work = user1.work;

//  console.log(user2);