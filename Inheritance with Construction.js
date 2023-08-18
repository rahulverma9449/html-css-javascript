// function Vehicle(name, color, wheels){
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;
// }

// Vehicle.prototype.getVehDetails = function (){
//     console.log(
//         `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
//         );

// };
// function Car(color, brand, seats) {
//     Vehicle.call(this, 'car','blue', 4);
//     this.brand = brand;
//     this.seats = seats;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.getDetails = function () {
//     console.log(`
//     The ${this.color} ${this.name} is of ${this.brand} comapny.
//     It has seating for ${this.seats} people`);

// };

// const c1 = new Car("Blue", "Audi", 4);
// c1.getDetails();
// console.log(c1);
// console.log(c1.__proto__);
// c1.getVehDetails();


//Do not alter the starter code
function main(){

    //Create Character constructor function
    function Character(health, strength, agility) {
  this.health = health;
  this.strength = strength;
  this.agility = agility;
}
    
    
    //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
    
    
    function Warrior(health, strength, agility, weaponType){
        Character.call(this, health, strength, agility);
        this.weaponType = weaponType;
    }
 
   Warrior.prototype = Object.create(Character.prototype);

// Mage constructor function inheriting from Character
 function Mage(health, strength, agility, spellType) {
  Character.call(this, health, strength, agility);
  this.spellType = spellType;
}
Mage.prototype = Object.create(Character.prototype);
    
function Archer(health, strength, agility, arrowType) {
  Character.call(this, health, strength, agility);
  this.arrowType = arrowType;
}
Archer.prototype = Object.create(Character.prototype);
    function Hero(health, strength, agility, weaponType, spellType, specialAbility) {
  Warrior.call(this, health, strength, agility, weaponType);
  Mage.call(this, health, strength, agility, spellType);
  this.specialAbility = specialAbility;
}
 Hero.prototype = Object.create(Warrior.prototype);
    function Enemy(health, strength, agility, enemyType) {
  Character.call(this, health, strength, agility);
  this.enemyType = enemyType;
}
Enemy.prototype = Object.create(Character.prototype);
    
    //Create constructor function for Hero inheriting Hero and Mage
    
    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");

    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);
    
    return {Character,Hero,Warrior,Mage,Archer,Enemy};
    }