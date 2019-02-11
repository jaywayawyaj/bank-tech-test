class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount) {
    let transaction = new Transaction(amount)
    return this.transactions.push(transaction);
  }

  withdraw(amount) {
    let transaction = new Transaction(-amount)
    return this.transactions.push(transaction);
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
