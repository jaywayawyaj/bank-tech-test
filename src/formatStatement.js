class FormatStatement {
    constructor(
      display = new DisplayStatement,
      attributes = new FormatAttributes
    ) {
        this.display = display;
        this.attributes = attributes;
    }

    parseTransactionHistory(transactionHistory) {
        let history = transactionHistory.reverse();
        history.forEach((transaction) => {
            transaction.amount < 0 ? this.formatDebitString(transaction) :
             this.formatCreditString(transaction);
        });
        return this.display.printStatement();
    }

    formatCreditString(transaction) {
        let creditString = (
            `${this.attributes.formatDate(transaction)} ||` +
            ` ${this.attributes.formatAmount(transaction)} ||` +
            ` || ${this.attributes.formatBalance(transaction)}\n`
        );
        this.display.addCreditTransaction(creditString);
        return creditString;
    }

    formatDebitString(transaction) {
        let debitString = (
            `${this.attributes.formatDate(transaction)} || ` +
            `|| ${this.attributes.formatAmount(transaction)}` +
            ` || ${this.attributes.formatBalance(transaction)}\n`
        );
        this.display.addDebitTransaction(debitString);
        return debitString;
    }
}
