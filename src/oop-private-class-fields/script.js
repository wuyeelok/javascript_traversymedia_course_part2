console.log("Class Private!");

class Transaction {
  #previousBalance;
  #type;
  #amount;

  constructor(previousBalance, type, amount) {
    this.#previousBalance = previousBalance;
    this.#type = type;
    this.#amount = amount;
  }
}

class Wallet {
  #balance;
  #transactions;

  constructor() {
    this.#balance = 0;
    this.#transactions = [];
  }

  #processDeposit(amount) {
    this.#transactions.push(new Transaction(this.#balance, "deposite", amount));
  }

  #processWithdraw(amount) {
    this.#transactions.push(new Transaction(this.#balance, "withdraw", amount));
  }

  get balance() {
    return this.#balance.toLocaleString("en-US");
  }

  get transactions() {
    return this.#transactions;
  }

  deposite(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough funds!");
      return;
    }

    this.#processWithdraw(amount);
    this.#balance -= amount;
  }
}

const ali = new Wallet();
console.log(ali);

ali.deposite(10000);
ali.withdraw(500);
console.log(ali.balance, ali.transactions);
ali.withdraw(99999999);
console.log(ali.balance, ali.transactions);
