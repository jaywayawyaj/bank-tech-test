class Transaction {
    constructor(amount, date = null, accBalance) {
        this.amount = amount;
        this.date = date ? new Date(date) : new Date();
        this.accBalance = accBalance;
    }
}
