console.log("OOP - Constructors & Prototypes");

/* const strLit = "Hi";
const strObj = new String("Yo");

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

const myNum = 1;
console.log(myNum, myNum instanceof Number);

const myNumObj = new Number(2);
console.log(myNumObj, myNumObj instanceof Number);
 */

function Circle(name, radius) {
  this.name = name;
  this.radius = radius;
  /* this.area = function () {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  };
  this.circumference = function () {
    return (2 * Math.PI * this.radius).toFixed(2);
  }; */
}

Circle.prototype.area = function () {
  return (Math.PI * this.radius * this.radius).toFixed(2);
};

Circle.prototype.circumference = function () {
  return (2 * Math.PI * this.radius).toFixed(2);
};

const myCircle = new Circle("ken", 6);
/* console.log(myCircle.area(), myCircle.circumference());

delete myCircle.name;

console.log(myCircle.hasOwnProperty("name"));

console.log(Object.entries(myCircle));

for (const [key, value] of Object.entries(myCircle)) {
  console.log(`Key: ${key}, Value: ${value}`);
}
 */
console.log(myCircle);
console.log(Object.getPrototypeOf(myCircle));
console.log(myCircle.area());
console.log(myCircle.circumference());
