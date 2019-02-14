class FormatStatement {
    constructor(printStatement = new PrintStatement) {
        this.printStatement = printStatement;
    }

    parseTransactionHistory(transactionHistory) {
        let history = transactionHistory.reverse();
        history.forEach((transaction) => {
            transaction.amount < 0 ? this.formatDebitString(transaction) :
             this.formatCreditString(transaction);
        });
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

    formatCreditString(transaction) {
        let creditString = (
            `${this.formatDate(transaction)} ||` +
            ` ${this.formatAmount(transaction)} ||` +
            ` || ${this.formatBalance(transaction)}\n`
        );
        this.printStatement.addCreditTransaction(creditString);
        return creditString;
    }

    formatDebitString(transaction) {
        let debitString = (
            `${this.formatDate(transaction)} || ` +
            `|| ${this.formatAmount(transaction)}` +
            ` || ${this.formatBalance(transaction)}\n`
        );
        this.printStatement.addDebitTransaction(debitString);
        return debitString;
    }
}
