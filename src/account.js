class Account {
    constructor() {
        this.txns = [];
        this.balance = 0.00;
    }

    deposit(amount, date = null, txn = Transaction) {
        let newTxn = new txn(amount, date, (this.balance + amount));
        this.txns.push(newTxn);
        return this.updateBalance();
    }

    withdraw(amount, date = null, txn = Transaction) {
        let newTxn = new txn(-amount, date, (this.balance - amount));
        this.txns.push(newTxn);
        this.balance += amount;
        return this.updateBalance();
    }

    updateBalance() {
        this.balance = 0.00;
        this.txns.forEach((txn) => {
            this.balance += txn.amount;
        });
        return this.balance;
    }

    printStatement(statement = new Statement(this.txns)) {
        return statement.printStatement();
    }
}
