class Account {
    constructor() {
        this.transactions = [];
        this.balance = 0.00;
    }

    deposit(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(amount, date, (this.balance + amount));
        this.transactions.push(newTransaction);
        return this.updateBalance();
    }

    withdraw(amount, date = null, transaction = Transaction) {
        let newTransaction = new transaction(-amount, date, (this.balance - amount));
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

    printStatement(statement = new Statement(this.transactions)) {
        return statement.printStatement();
    }
}
