class Account {
    constructor() {
        this.txns = [];
        this.balance = 0;
    }

    deposit(amount, date = null, txn = Transaction) {
        let newTxn = new txn(amount, date, (this.balance + amount));
        this.txns.push(newTxn);
        return this.updateBalance();
    }

    withdraw(amount, date = null, txn = Transaction) {
        let newTxn = new txn(-amount, date, (this.balance - amount));
        this.txns.push(newTxn);
        return this.updateBalance();
    }

    updateBalance() {
        this.balance = 0;
        this.txns.forEach((txn) => {
            this.balance += txn.amount;
        });
        return this.balance;
    }

    printStatement() {
        return this.balance;
    }
}
