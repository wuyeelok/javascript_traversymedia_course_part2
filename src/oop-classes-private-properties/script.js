console.log("oop-classes-private-properties");

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
