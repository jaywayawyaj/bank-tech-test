class Statement {
  constructor(history) {
    this.txnHistory = history;
    this.header = "date || credit || debit || balance"
  }

  printStatement() {
    console.log(this.header)
    let history = this.txnHistory;
    history.forEach((txn) => {
      if (txn.amount < 0) {
        console.log(`${txn.date.toLocaleDateString()} || || ${txn.amount} || ${txn.accountBalance}`)
      }
      if (txn.amount > 0) {
        console.log(`${txn.date.toLocaleDateString()} || ${txn.amount} || || ${txn.accountBalance}`)
      }
    })
  }
}
