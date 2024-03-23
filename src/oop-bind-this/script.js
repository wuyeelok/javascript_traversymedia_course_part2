console.log("function bind this example!");
/* class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App(); */

class Chair {
  constructor(brand, weight) {
    this.brand = brand;
    this.weight = weight;

    document
      .querySelector("button")
      .addEventListener("click", this.getBrand.bind(this));
  }

  getBrand() {
    alert(this.brand);
  }
}

const chair = new Chair("IEKA", 40);

// console.log(chair.getBrand());

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const c1 = new Coordinate(5, 10);
const c2 = new Coordinate(74, 235);
console.log(c1, c2);

function printXY() {
  console.log(`X is ${this.x}, Y is ${this.y}!`);
}

const coordinates = [c1, c2];

for (const coor of coordinates) {
  const bindedPrintXYFunc = printXY.bind(coor);
  bindedPrintXYFunc();
}
