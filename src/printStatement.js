class PrintStatement {
    constructor() {
        this.newStatement = "date || credit || debit || balance\n";
    }

    printStatement() {
        return console.log(this.newStatement);
    }

    addCreditTransaction(string) {
        this.newStatement += string;
    }

    addDebitTransaction(string) {
        this.newStatement += string;
    }
}
