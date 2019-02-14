class PrintStatement {
    constructor() {
        this.newStatement = "date || credit || debit || balance\n";
    }

    printStatement() {
        console.log(this.newStatement);
        return (this.newStatement);
    }

    addCreditTransaction(string) {
        this.newStatement += string;
    }

    addDebitTransaction(string) {
        this.newStatement += string;
    }
}
