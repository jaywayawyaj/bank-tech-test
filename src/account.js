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
}
