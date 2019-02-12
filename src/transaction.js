class Transaction {
  constructor(amount, date = null, accountBalance) {
    this.amount = amount;
    this.date = date ? new Date(date) : new Date();
    this.accountBalance = accountBalance;
  }
}
