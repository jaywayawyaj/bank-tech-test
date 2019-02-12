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
        history.forEach((transaction) => {
            if (transaction.amount < 0) {
                this.newStatement += `${this.editDate(transaction)} || || ${this.editAmount(transaction)} || ${this.editBalance(transaction)}\n`;
            } else if (transaction.amount > 0) {
                this.newStatement += `${this.editDate(transaction)} || ${this.editAmount(transaction)} || || ${this.editBalance(transaction)}\n`;
            }
        });
    }
}
