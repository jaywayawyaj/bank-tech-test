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

    editDate(txn) {
      let newDate = txn.date.toLocaleDateString();
      return newDate;
    }

  parseTxnHistory() {
    let history = this.txnHistory.reverse();
    history.forEach((txn) => {
      if (txn.amount < 0) {
        this.newStatement.push(`${this.editDate(txn)} || || ${Math.abs(txn.amount)} || ${txn.accountBalance}`)
      } else if (txn.amount > 0) {
        this.newStatement.push(`${this.editDate(txn)} || ${txn.amount} || || ${txn.accountBalance}`)
      }
    })
  }
}
