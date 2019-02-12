class Statement {
  constructor(history) {
    this.txnHistory = history;
    this.newStatement = "";
  }

  printStatement() {
    this.newStatement += "date || credit || debit || balance\n";
    this.parseTxnHistory();
    return (this.newStatement)
  }

  editDate(txn) {
    let newDate = txn.date.toLocaleDateString();
    return newDate;
  }

  parseTxnHistory() {
    let history = this.txnHistory.reverse();
    history.forEach((txn) => {
      if (txn.amount < 0) {
        this.newStatement += `${this.editDate(txn)} || || ${Math.abs(txn.amount).toFixed(2)} || ${Math.abs(txn.accBalance).toFixed(2)}\n`
      } else if (txn.amount > 0) {
        this.newStatement += `${this.editDate(txn)} || ${Math.abs(txn.amount).toFixed(2)} || || ${Math.abs(txn.accBalance).toFixed(2)}\n`
      }
    })
  }
}
