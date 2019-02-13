class Statement {
    constructor(history) {
        this.transactionHistory = history;
        this.newStatement = "";
    }

    printStatement() {
        this.newStatement += "date || credit || debit || balance\n";
        this.parseTransactionHistory();
        console.log(this.newStatement);
        return (this.newStatement);
    }

    editDate(transaction) {
        let newDate = transaction.date.toLocaleDateString();
        return newDate;
    }

    editAmount(transaction) {
        let newAmount = Math.abs(transaction.amount).toFixed(2);
        return newAmount;
    }

    editBalance(transaction) {
        let newBalance = Math.abs(transaction.accBalance).toFixed(2);
        return newBalance;
    }

    parseTransactionHistory() {
        let history = this.transactionHistory.reverse();
        history.forEach((t) => {
            t < 0 ? this.addDebitTransaction(t) : this.addCreditTransaction(t)
        });
    }

    addCreditTransaction(t) {
        this.newStatement += (
          `${this.editDate(t)} || ${this.editAmount(t)} ||`
          + ` || ${this.editBalance(t)}\n`
          );
    }

    addDebitTransaction(t) {
        this.newStatement += (
          `${this.editDate(t)} || || ${this.editAmount(t)}`
          + `|| ${this.editBalance(t)}\n`
        );
    }
}
