describe("PrintStatement", () => {
    let printStatement;
    let output = ("date || credit || debit || balance",
    "01/06/2000 || 1000.00 || || 1000.00",
    "01/06/2000 || 500.00 || || 1500.00",
    "01/06/2000 || || 250.00 || 1250.00");

    beforeEach(() => {
        printStatement = new PrintStatement;
    });

    describe("#addCreditTransaction", () => {
        it("adds credit string to the final statement", () => {
            printStatement.addCreditTransaction(output[2]);
            expect(printStatement.newStatement).toContain(output[2]);
        });
    });

    describe("#addDebitTransaction", () => {
        it("adds debit string to the final statement", () => {
            printStatement.addDebitTransaction(output[3]);
            expect(printStatement.newStatement).toContain(output[3]);
        });
    });

    describe("#printStatement", () => {
        it("returns a final statement with header", () => {
            printStatement.addCreditTransaction(output[1]);
            printStatement.addDebitTransaction(output[3]);
            printStatement.printStatement();
            let finalStatement = printStatement.newStatement;
            expect(finalStatement).toContain(output[0]);
            expect(finalStatement).toContain(output[1]);
            expect(finalStatement).toContain(output[3]);
        });
    });
});
