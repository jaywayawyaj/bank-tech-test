class DisplayStatement {
    constructor() {
        this.newStatement = "date || credit || debit || balance\n";
    }

    printStatement() {
        return this.newStatement;
    }

    addCreditTransaction(string) {
        this.newStatement += string;
    }

    addDebitTransaction(string) {
        this.newStatement += string;
    }
}
