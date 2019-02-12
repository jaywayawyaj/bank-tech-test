class Statement {
  constructor(history) {
    this.txnHistory = history;
    this.header = "date || credit || debit || balance"
    this.statement = []
  }

  printStatement() {
    console.log(this.header)
    this.parseTxnHistory();
    this.statement.forEach((txn) => {
      console.log(txn)
    })
    return (this.header + this.statement)
  }

  parseTxnHistory() {
    let history = this.txnHistory;
    history.forEach((txn) => {
      if (txn.amount < 0) {
        console.log(`${txn.date.toLocaleDateString()} || || ${Math.abs(txn.amount)} || ${txn.accountBalance}`)
      } else if (txn.amount > 0) {
        console.log(`${txn.date.toLocaleDateString()} || ${txn.amount} || || ${txn.accountBalance}`)
      }
    })
  }
}
