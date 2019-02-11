class Account {
  constructor() {
    this.deposits = [];
    this.withdrawals = [];
  }

  deposit(amount) {
    return this.deposits.push(amount);
  }

  withdraw(amount) {
    return this.withdrawals.push(amount);
  }

  updateBalance() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let positive = this.deposits.reduce(reducer);
    let negative = this.withdrawals.reduce(reducer);
    this.balance = (positive - negative);
    return this.balance;
  }
}
