class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount) {
    return this.transactions.push(amount);
  }

  withdraw(amount) {
    return this.transactions.push(-amount);
  }

  updateBalance() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.balance = this.transactions.reduce(reducer);
    return this.balance;
  }

  printStatement() {
    return this.balance;
  }
}
