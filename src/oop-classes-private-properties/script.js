console.log("oop-classes-private-properties");

/*
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle("Rect", 10, 20);
const rect2 = new Rectangle("Rect 2", 30, 40);
console.log(rect, rect2);

class Rectangle2 {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log(`Rectangle Area ${this.area()}`);
  }
}

const square = new Rectangle2("square", 30, 30);
console.log(square.area());
console.log(square.isSquare());
square.logArea();
 */

class Vechicle {
  constructor(weight, owner) {
    this.weight = weight;
    this.owner = owner;
  }

  status() {
    return `This vechicle is owned by ${this.owner} and weigh ${this.weight}kg`;
  }
}

function status2(date) {
  return `Hello ${this.owner}! ${date}`;
}

const myV = new Vechicle(560, "Ken");

console.log(status2.apply(myV, [new Date()]));

/* console.log(myV);
console.log(myV.status()); */

class Car extends Vechicle {
  constructor(weight, owner, numOfDoors) {
    super(weight, owner);

    this.numOfDoors = numOfDoors;
  }

  status() {
    return `This car weigh ${this.weight}kg, own by ${this.owner} and has ${this.numOfDoors} door(s)`;
  }
}

const myCar = new Car(500, "Tom", 4);
console.log(status2.apply(myCar, [new Date("2024-01-25")]));

/* console.log(myCar);
console.log(myCar.status());

console.log(myCar instanceof Vechicle);
console.log(myCar instanceof Car);
 */

class Ship extends Vechicle {
  constructor(weight, owner, displacement) {
    super(weight, owner);

    this.displacement = displacement;
  }

  status() {
    return `This ship is owned by ${this.owner} and has ${this.weight} tons and has displacement ${this.displacement} tons`;
  }
}

const myArr = [myV, myCar, new Ship(300, "LN", 60900)];

myArr.forEach((i) => console.log(i.status()));

const myShip = new Ship(900, "Fin", 78942);
console.log(status2.call(myShip, new Date()));
