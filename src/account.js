class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount, date = null) {
    let transaction = new Transaction(amount, date);
    return this.transactions.push(transaction);
  }

  withdraw(amount) {
    let transaction = new Transaction(-amount)
    return this.transactions.push(transaction);
  }

  updateBalance() {
    this.transactions.forEach((txn) => {
      this.balance += txn.amount
    })

    return this.balance;
  }

  printStatement() {
    return this.balance;
  }
}
