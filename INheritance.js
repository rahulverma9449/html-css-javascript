// const btn3 = document.getElementById('.color');

// color.addEventListener('click', function onclick(event){

//     document.body.style.backgroundColor = 'blue';

// });

// const btn5 = document.getElementById('.shape');
// shape.addEventListener('click', function onclick(event){

//     event.target.style.backgroundColor = 'blue';

// });

// const btn6 = document.getElementById('.shape');

// shape.addEventListener('click', function onClick(event) {
//   const backgroundColor = button.style.backgroundColor;

//   if (backgroundColor === 'salmon') {
//     shape.style.backgroundColor = 'green';

//     // 👇️ optionally change text color
//     // btn.style.color = 'white';
//   } else {
//     shape.style.backgroundColor = 'salmon';

//     // 👇️ optionally change text color
//     // btn.style.color = 'blue';
//   }
// });








const btn = document.createElement('button');
btn.textContent = ' Click Here';
btn.className = 'btn1';

const btn2 = document.querySelector('div');
btn2.appendChild(btn);


//Removing heading on the click of a button
btn.addEventListener('click', () =>
    document.querySelector('h1').remove()
);



// Event listener on Para
const p = document.querySelector('p');
p.addEventListener('mousedown', function (){
    p.style.backgroundColor = "yellow";
    // clickPara("Hello");
});
p.addEventListener('mouseup', function (){
    p.style.backgroundColor = "";
    // clickPara("Hello");
});

document.body.addEventListener('keydown', (event) =>
{
    console.log('keyPressed');
    console.log(event.key);

}
);





function clickPara(name){
    console.log(name +  'para clicked ');
}
// document.querySelector('#color').remove();











// const element = document.getElementById('myElement');
// const textContent = element.textContent;

// console.log('Initial text content:', textContent);

// element.textContent = "New text content";
// const updatedTextContent = element.textContent;
// console.log("Updated text content:", updatedTextContent);



// change color


// function changeBackgroundColor(selector) {
//     const elements = document.querySelectorAll(".color");


//       elements.forEach(color => {
//       color.style.backgroundColor = 'yellow';
//       color.style.color="black";

//     });







































//Inheritance
// class Vehicle {
//     static vName = 'static Name';

//     // construction
//     constructor(name, color, wheels ){
//         this.name = name;
//         this.color = color;
//         this.wheels = wheels;
//     }
//     //method

// getDetails(){
//     console.log(`
//     The ${this.name} is ${this.color} in color.
//         It has ${this.wheels} wheels
//         `);
//     }

//     //Static method
//     static showMsg(){
//         console.log("This is the static method od the class");
//     }
// }

// const v1  = new Vehicle('Car', 'Blue', 4);
// console.log(v1);
// Vehicle.showMsg();
// console.log(Vehicle.vName.__proto__);

// class Car extends Vehicle {
//     constructor(

//         color,
//         brand,
//         purpose
//         ){
//         super("car", color, 3);
//         this.brand = brand;
//         this.purpose = purpose;
//     }
//     getDetails(){
//         console.log(`
//         The ${this.name} is ${this.color} in color of ${this.brand} company.
//             It is for the ${this.purpose}
//             `);
//         }
// }

// const car1 = new Car("Red", "fortuner", "Luxury Traveling");


// car1.getDetails();
// console.log(car1.__proto__);




// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
// //Get the radius method
//     get daimeter(){
//         return this.radius * 2;
//     }

// // Get the radius method
//     set daimeter(newDiameter){
//         if(newDiameter >= 0){
//             this.radius = newDiameter /2;
//         } else{
//             console.log('Invalid Input');
//         }
//     }
//     // getDiameter(){
//     //     console.log(this.radius * 2);
//     // }
// }
// const circle = new Circle(5);
// console.log(circle.radius);
// console.log(circle.daimeter);
// circle.radius = 6;
// console.log(circle.daimeter);

// circle.daimeter = 20;
// console.log(circle.radius);

// circle.daimeter = -2;
// console.log(circle.radius);



///Date
// const today = new Date();
// console.log(today);

// const birthDate = new Date('1999-05-12');
// console.log(birthDate);

// const someDay = new Date(1990, 7);
// console.log(someDay);

// console.log(birthDate.getFullYear());
// console.log(birthDate.getMonth());
// console.log(birthDate.getDate());
// console.log(birthDate.toDateString());

// console.log(birthDate.getTime());


// const birthStr = birthDate.toString();
// console.log(birthStr.slice(11, 20));


//Deep copy and Shallow copy

// const user1 = {
//     username: 'Sara',
//     age: 12,
//     marks: {
//         maths: 20,
//         eng: 25,
//     },
//     getMark(){
//         console.log(this.marks);

//     },
// };

//Shallow Copy

// const user2 = {...user1};
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);


//Object.assign
// const user2 = Object.assign({}, user1);
// console.log(user2);
// console.log(user1);


// const user2 =JSON.parse(JSON.stringify(user1));
// user2.username = "harry verma";
// user2.marks.maths = 10;
// console.log(user2);
// console.log(user1);


// console.log(document.querySelectorAll("h1"));
// const firstHead = document.querySelectorAll("h1");
// console.log(firstHead);
// console.log(document.querySelector(".second"))
// console.log(document.querySelector("#para"))
// console.log(document.querySelector("#color"))

// const heading = document.querySelector('.second');
// const para = document.querySelector('#para');
// console.log(heading);
// console.log(para);

// console.log(document.getElementById('.second'));
// console.log(document.getElementsByClassName('.first'));

// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByTagName('color'));
// console.log(document.getElementsByTagName('shape'));
// heading.style.color = 'blue';
// para.style.backgroundColor = 'grey';
// color.style.backgroundColor = 'orange';
// shape.style.backgroundColor = 'green';
