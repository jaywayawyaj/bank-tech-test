class Account {
    constructor(statement = new FormatStatement()) {
        this.transactions = [];
        this.statement = statement;
    }

    deposit(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(
            amount, date, (this.updateBalance() + amount)
        );
        this.transactions.push(newTransaction);
        return this.updateBalance();
    }

    withdraw(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(
            -amount, date, (this.updateBalance() - amount)
        );
        this.transactions.push(newTransaction);
        this.balance += amount;
        return this.updateBalance();
    }

    updateBalance() {
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
