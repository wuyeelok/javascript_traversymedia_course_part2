console.log("Prototypical Inheritance & call");

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.logName = function () {
  console.log(`Name: ${this.name}`);
};

function Male(name, age, sex) {
  Human.call(this, name, age);
  this.sex = sex;
}
Male.prototype = Object.create(Human.prototype);
Male.prototype.constructor = Male;
Male.prototype.logName = function () {
  console.log(`Name: ${this.name} !!!!!`);
};

function Female(name, age, sex) {
  Human.call(this, name, age);
  this.sex = sex;
}
Female.prototype = Object.create(Human.prototype);
Female.prototype.constructor = Female;
Female.prototype.logName = function () {
  console.log(`Name: ${this.name} XXXX`);
};

const tom = new Male("Tom", 23, "Male");
console.log(tom, typeof tom, tom instanceof Human);
tom.logName();

const mary = new Female("Mary", 28, "Female");
mary.logName();
