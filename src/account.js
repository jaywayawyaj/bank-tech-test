class Account {
  constructor() {
    this.deposits = []
  }

  deposit(amount) {
    return this.deposits.push(amount)
  }
}
