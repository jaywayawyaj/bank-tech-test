class Statement {
    constructor(history) {
        this.txnHistory = history;
        this.newStatement = "";
    }

    printStatement() {
        this.newStatement += "date || credit || debit || balance\n";
        this.parseTxnHistory();
        return (this.newStatement);
    }

    editDate(txn) {
        let newDate = txn.date.toLocaleDateString();
        return newDate;
    }

    editAmount(txn) {
        let newAmount = Math.abs(txn.amount).toFixed(2);
        return newAmount;
    }

    editBalance(txn) {
        let newBalance = Math.abs(txn.accBalance).toFixed(2);
        return newBalance;
    }

    parseTxnHistory() {
        let history = this.txnHistory.reverse();
        history.forEach((txn) => {
            if (txn.amount < 0) {
                this.newStatement += `${this.editDate(txn)} || || ${this.editAmount(txn)} || ${this.editBalance(txn)}\n`;
            } else if (txn.amount > 0) {
                this.newStatement += `${this.editDate(txn)} || ${this.editAmount(txn)} || || ${this.editBalance(txn)}\n`;
            }
        });
    }
}
