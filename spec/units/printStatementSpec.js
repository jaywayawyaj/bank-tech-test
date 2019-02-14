describe("PrintStatement", () => {
    let printStatement;
    let output = ("date || credit || debit || balance",
    "01/06/2000 || 1000.00 || || 1000.00",
    "01/06/2000 || 500.00 || || 1500.00",
    "01/06/2000 || || 250.00 || 1250.00");

    beforeEach(() => {
        printStatement = new PrintStatement;
    });

    describe("#addHeader", () => {
        xit("adds a header to the final statement", () => {
            printStatement.addHeader();
            expect(printStatement.newStatement).toContain(
                "date || credit || debit || balance"
            );
        });
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
            // printStatement.addHeader();
            printStatement.addCreditTransaction(output[1]);
            printStatement.addDebitTransaction(output[3]);
            expect(printStatement.printStatement()).toContain(output[0]);
            expect(printStatement.printStatement()).toContain(output[1]);
            expect(printStatement.printStatement()).toContain(output[3]);
        });
    });
});
