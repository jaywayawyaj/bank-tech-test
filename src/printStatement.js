class PrintStatement {
    constructor() {
        this.newStatement = "";
    }

    printStatement() {
        console.log(this.newStatement);
        return (this.newStatement);
    }

    addHeader() {
      this.newStatement += "date || credit || debit || balance\n";
    }

    addCreditTransaction(string) {
        this.newStatement += string;
    }

    addDebitTransaction(string) {
        this.newStatement += string;
    }
}
