class FormatStatement {
    constructor(printStatement = new PrintStatement) {
        this.printStatement = printStatement;
    }

    parseTransactionHistory(transactionHistory) {
        this.printStatement.addHeader();
        let history = transactionHistory.reverse();
        history.forEach((t) => {
            t.amount < 0 ? this.formatDebitString(t) : this.formatCreditString(t);
        });
        return this.printStatement.newStatement;
    }

    formatDate(transaction) {
        let newDate = transaction.date.toLocaleDateString();
        return newDate;
    }

    formatAmount(transaction) {
        let newAmount = Math.abs(transaction.amount).toFixed(2);
        return newAmount;
    }

    formatBalance(transaction) {
        let newBalance = Math.abs(transaction.accBalance).toFixed(2);
        return newBalance;
    }

    formatCreditString(t) {
        let creditString = (
            `${this.formatDate(t)} || ${this.formatAmount(t)} ||`
        + ` || ${this.formatBalance(t)}\n`
        );
        this.printStatement.addCreditTransaction(creditString);
        return creditString;
    }

    formatDebitString(t) {
        let debitString = (
            `${this.formatDate(t)} || || ${this.formatAmount(t)}`
        + ` || ${this.formatBalance(t)}\n`
        );
        this.printStatement.addDebitTransaction(debitString);
        return debitString;
    }
}
