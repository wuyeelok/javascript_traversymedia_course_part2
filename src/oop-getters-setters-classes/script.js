console.log(`Get Set`);

/* class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName);
console.log(person1);
 */

class Restaurant {
  #owner;
  #location;
  #foundOnYear;

  constructor(owner, location, year) {
    this.owner = owner;
    this.location = location;
    this.foundOnYear = year;
  }

  get owner() {
    return this.#owner;
  }

  get location() {
    return this.#location;
  }

  set owner(owner) {
    this.#owner = owner.toUpperCase();
  }

  set location(location) {
    this.#location = location.toLowerCase();
  }

  set foundOnYear(year) {
    console.log("Inside setter!");
    this.#foundOnYear = year;
  }

  get foundOnYear() {
    return this.#foundOnYear;
  }
}

function displayOwnerAndLocation() {
  console.log(
    `The owner is ${this.owner} and located in ${this.location}, found on ${this.foundOnYear}`
  );
}

const mac = new Restaurant("Ray", "ABC street", 1990);
displayOwnerAndLocation.call(mac);

function Teacher(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, "lastName", {
    get: function () {
      return this._lastName;
    },
    set: function (value) {
      this._lastName = value;
    },
  });
}

Teacher.prototype.capFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const t = new Teacher("JJ", "UU");
t.firstName = "ken";
console.log(t.firstName);
