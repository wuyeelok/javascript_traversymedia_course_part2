// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

console.log("Test");

const desc = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(desc, typeof desc);

const myObj = {
  abc: "ddd",
  age: 34,
};

const desc2 = Object.getOwnPropertyDescriptors(myObj);
console.log(desc2);

Object.defineProperty(myObj, "age", {
  writable: false,
  configurable: false,
  enumerable: false,
});

const desc3 = Object.getOwnPropertyDescriptors(myObj);
console.log(desc3);
console.log(Object.isFrozen(myObj), Object.isSealed(myObj));

class Shape {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

class Rectangle extends Shape {
  #width;
  #height;

  constructor(name, width, height) {
    super(name);
    this.#width = width;
    this.#height = height;
  }

  log() {
    console.log(
      `name: ${this.name}, width: ${this.#width}, height: ${this.#height}`
    );
  }
}

const rr = new Rectangle("Rect", 4, 8);
rr.log();
console.log(rr.name);
