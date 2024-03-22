console.log("OOP - Constructors & Prototypes");

const strLit = "Hi";
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
