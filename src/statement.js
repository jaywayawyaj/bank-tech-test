class Statement {
  constructor(history) {
    this.txnHistory = history;
    this.header = "date || credit || debit || balance"
    this.newStatement = []
  }

  printStatement() {
    console.log(this.header)
    this.parseTxnHistory();
    // this.statement.forEach((txn) => {
    //   console.log(txn)
    // })
    // return (this.header + this.statement)
  }

  parseTxnHistory() {
    let history = this.txnHistory.reverse();
    history.forEach((txn) => {
      if (txn.amount < 0) {
        this.newStatement.push(`${txn.date} || || ${Math.abs(txn.amount)} || ${txn.accountBalance}`)
      } else if (txn.amount > 0) {
        this.newStatement.push(`${txn.date} || ${txn.amount} || || ${txn.accountBalance}`)
      }
    })
  }
}
