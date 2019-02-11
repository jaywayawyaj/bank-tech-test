class Transaction {
  constructor(amount, date = null) {
    this.amount = amount;
    this.date = date ? new Date(date) : new Date();
  }
}
