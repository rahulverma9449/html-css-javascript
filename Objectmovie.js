// const movie = {
//     title: "The Avengers",
//     year: 2012,
//     genre: "Action, Sci-Fi, Thriller",
//     cast: {main_leader: 'Robert Avenger',
//             others: 'chris Evans',},
//     // cast: ["Robert Avenger, George Jr., dewyan"],
//     getDetails (){
//         console.log(`
//         Title: ${this.title}
//         Year: ${this.year}
//         Genre: ${this.genre}
//         Cast: ${this. cast}`
//         );

//     },
// };
// movie.getDetails();

// const movie1 = {
//     title: "The Hollywood Collection",
//     year: 2023,
//     genre: "powerfull, Scientist qde, awesome,",
//     cast: {main_leader: 'harison william',
//             others: 'chris Evans123344',},
    // cast: ["Robert Avenger, George Jr., dewyan"],

// function  movie(title, year) {
//     const movieObj = {
//         title: title,
//         year: year,
//         getDetails (){
//             console.log(`
//             Title: ${this.title}
//             Year: ${this.year}
//             `
//             );
//     },
// };
// return movieObj;
// }
//  const movie2 = movie('The avengers ', 2034);
//  console.log(movie2);
// movie2.getDetails();
//  const movie3 = movie('Hollywood ', 2035);
//  console.log(movie3);
//  movie2.getDetails();



//  //Construction functon

//  function Movie(title,year){
//     this.title = title;
//     this.year = year;

//     this.getDetails = function(){
//         console.log(`
//             Title: ${this.title}
//             Year: ${this.year}
//             `
//             );
//     };
//  }

//  // New Keyword

//  const movie5 = new Movie('avatar', 3949);
//  console.log(movie5);
//  movie5.getDetails();




// movie1.getDetails();
//     getMovieDetails (details) {
//         console.log(movie[details]);
//     },

// };
// console.log(movie.title);


// const detail = 'year';

// movie.getMovieDetails(detail);

// console.log(movie.cast.main_leader);

// function Movie(title){
//     this.title = title;
//     // this.getDetails = function() {
//     //     console.log(`Title: ${this.title}`);
//     // };

// }
// Movie.prototype.getDetails = function(){
//     console.log(`Title: ${this.title}`);
// };

// Movie.prototype.year = 20303;

// const Movie1 = new Movie('The hollywood');
// Movie1.year = 2012;
// console.log(Movie1);
// console.log(Movie1.__proto__);


// const movie2 = new Movie('Avantornxkshs');
// console.log(movie2);
// console.log(movie2.__proto__.__proto__.__proto__ );

// const car  = {
//     name: 'BMW',
// };
// console.log(car.__proto__);

// const inputs = [1,2,3,4,5];
// console.log(inputs.__proto__.__proto__);

// const car = {
//     getDetails(name) {
//         console.log(`Your car is ${name}`);
//     },
// };

// const car1 = Object.create(car);
// console.log(car1);
// car1.getDetails("Audi");
// const car = {
//     name:'car',
//     color: 'black',
//     getDetails(brand, seats){
//         console.log(
//             `This is a ${this.color} ${this.name} of ${brand} company. It has ${seats} seats`);

//         },
// };


// const bus = {
//     name: 'bus',
//     color: 'blue',
// };
// car.getDetails("Audi", 5);

// car.getDetails.call(bus, "Bmw start", 67);
// car.getDetails.apply(bus, ["Pink", 99]);
// car.getDetails.bind(bus, "gold", 54);

// const car5 = car.getDetails.bind(bus);
// car5('micro bus', 200);




// const fruits = [

//     'Apple',
//     'Mango',
//     'Kiwi',
//     'Berry',
//     'banana',
//     'lichi',

// ];

//Binding Patterns

// const  [a,,,,b]  = fruits;
// console.log(a, b);
// const  [a,b, ...f]  = fruits;
// console.log(f);

// const  [a,b, ...[, be, ba]]  = fruits;
// console.log(ba);

// class vehicleCl{

//     name;
//     color;
//     wheels;

//     constructor(name, color, wheels){

//         this.name = name;
//         this.color = color;
//         this.wheels = wheels;
//     }
//     //methods
//     getDetails(){

//     }
// }

// const veh1 = new vehicleCl("bike", "grey",2);
// console.log(veh1);
// veh1.getDetails();

//constructor function
// function Vehicle(name, color, wheels) {
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;
// }

//     Vehicle.prototype.getDetails = function () {
//         console.log(`
//           The ${this.name} is ${this.color} in color.
//           It has ${this.wheels} wheels
//     `);
//     };


// const car = new Vehicle('Car', 'blue', 4);
// console.log(car.hasOwnProperty('getDetails'));

// car.getDetails();

//class expressions
// const Vehicle = class{

// }

// Classes in JS.. Class declaration
class VehicleCl {

#regNumber;
    // name;
    // color;
    // wheels;
    //constructor
    constructor(name, color, wheels, number) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    // Private method
    #getNumber(number) {
        return number;
    }
    //methods
    getDetails() {
        console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    Registration Number is: ${this.#getNumber (this.#regNumber)}
    `);
    }
}

const veh1 = new VehicleCl(
    'Scooter',
    'Grey',
    2,
    8866
);
veh1.name = 'Car';
// console.log(veh1);
veh1.getDetails();
// veh1.#getNumber();
 //console.log(veh1.hasOwnProperty('getDetails'));


