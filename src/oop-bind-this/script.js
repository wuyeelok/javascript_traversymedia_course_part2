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
  }

  getBrand() {
    return this.brand;
  }
}

const chair = new Chair("IEKA", 40);

console.log(chair.getBrand());

document.querySelector("button").addEventListener("click", () => {
  alert("Clicked");
});
