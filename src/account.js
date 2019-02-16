class Account {
    constructor() {
        this.transactions = [];
    }

    deposit(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(
            amount, date, (this.calculateBalance() + amount)
        );
        this.transactions.push(newTransaction);
        return this.calculateBalance();
    }

    withdraw(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(
            -amount, date, (this.calculateBalance() - amount)
        );
        this.transactions.push(newTransaction);
        return this.calculateBalance();
    }

    calculateBalance() {
        let balance = 0.00;
        this.transactions.forEach((transaction) => {
            balance += transaction.amount;
        });
        return balance;
    }

    printStatement(statement = new FormatStatement()) {
        statement.parseTransactionHistory(this.transactions);
    }
}
