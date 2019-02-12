class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount, date = null, transaction = Transaction) {
    let newTransaction = new transaction(amount, date, (this.balance + amount));
    this.transactions.push(newTransaction);
    return this.updateBalance();
  }

  withdraw(amount, date = null, transaction = Transaction) {
    let newTransaction = new transaction(-amount, date, (this.balance - amount));
    this.transactions.push(newTransaction);
    return this.updateBalance();
  }

  updateBalance() {
    this.balance = 0
    this.transactions.forEach((txn) => {
      this.balance += txn.amount
    })
    return this.balance;
  }

  printStatement() {
    return this.balance;
  }
}
