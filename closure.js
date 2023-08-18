class car {
    constructor(numWheels, price, name){
        this.numWheels = numWheels;
        this.price = price;
        this.name = name;

    }
    getPrice(){
        return this.price;
    }
    printDescription(){
        console.log("car", this.numWheels, this.price);
    }
}
class bike extends car{
    constructor(numseat, speed){
        super(44, 4342, "bmw")
        this.numseat = numseat;
        this.speed = speed;
    }
}

const bike1 = new bike(22, 44);
console.log(bike1);
