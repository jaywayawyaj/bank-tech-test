class FormatStatement {
    constructor(
      printStatement = new PrintStatement,
      attributes = new FormatAttributes
    ) {
        this.printStatement = printStatement;
        this.attributes = attributes;
    }

    parseTransactionHistory(transactionHistory) {
        let history = transactionHistory.reverse();
        history.forEach((transaction) => {
            transaction.amount < 0 ? this.formatDebitString(transaction) :
             this.formatCreditString(transaction);
        });
        this.printStatement.printStatement();
    }

    formatCreditString(transaction) {
        let creditString = (
            `${this.attributes.formatDate(transaction)} ||` +
            ` ${this.attributes.formatAmount(transaction)} ||` +
            ` || ${this.attributes.formatBalance(transaction)}\n`
        );
        this.printStatement.addCreditTransaction(creditString);
        return creditString;
    }

    formatDebitString(transaction) {
        let debitString = (
            `${this.attributes.formatDate(transaction)} || ` +
            `|| ${this.attributes.formatAmount(transaction)}` +
            ` || ${this.attributes.formatBalance(transaction)}\n`
        );
        this.printStatement.addDebitTransaction(debitString);
        return debitString;
    }
}
