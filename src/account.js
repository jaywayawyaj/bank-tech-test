class Account {
    constructor(statement = new FormatStatement()) {
        this.transactions = [];
        this.statement = statement;
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
        this.balance += amount;
        return this.calculateBalance();
    }

    calculateBalance() {
        this.balance = 0.00;
        this.transactions.forEach((transaction) => {
            this.balance += transaction.amount;
        });
        return this.balance;
    }

    printStatement() {
        this.statement.parseTransactionHistory(this.transactions);
    }
}
