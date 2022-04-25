export const carz = {
  brand: "Tesla", // key: value
  model: "S",
  speed: 250,
};

function Car(brand, model, speed) {
  // constructor function
  this.brand = brand;
  this.model = model;
  this.speed = speed;
}

Car.prototype.drive = function (destination) {
  //method
  return destination;
};

const mercedes = new Car("Mercedes", "S", 230);
const bmw = new Car("BMW", "M", 270);

console.log(mercedes);
console.log(bmw);

function x(num) {
  return num;
}

const y = function (num) {
  return num;
};

const z = (num) => num;

class CarClass2 {}

const CarClass = class {
  #location; // private field
  #radomnumber;
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  //   drive2: function (destination) {
  //       return destination;
  //   }

  drive(destination) {
    //method
    return destination + location;
  }
  get getBrand() {
    return this.brand;
  }

  set setBrand(brand) {
    this.brand = brand;
  }
};

//inheritence

const Truck = function (brand, model, speed, capacity) {
  Car.call(this, brand, model, speed);
  //   this.brand = brand;
  this.capacity = capacity;
};

const cybertruck = new Truck("tesla", "cybertruck", 200, 10000);

console.log(cybertruck);

class TruckClass extends CarClass {
  constructor(brand, model, speed, capacity) {
    super(brand, model, speed); //calls the cosmtructor of the parent class
    this.capacity = capacity;
  }
}

const kamaz = new TruckClass("Kamaz", "Z500", 100, 20000);

console.log(kamaz);
