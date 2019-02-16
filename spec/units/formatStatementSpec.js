describe("FormatStatement", () => {
    let formatStatement;
    let printStatement;
    let fakeTransaction = {
        amount: 1000, date: new Date("2000-6-1"), accBalance: 1000
    };
    let fakeTransactionTwo = {
        amount: 500, date: new Date("2000-6-1"), accBalance: 1500
    };
    let fakeTransactionThree = {
        amount : -250, date: new Date("2000-6-1"), accBalance: 1250
    };
    let fakeAccTransactions = [
        fakeTransaction, fakeTransactionTwo, fakeTransactionThree
    ];

    let output = ["date || credit || debit || balance",
        "01/06/2000 || 1000.00 || || 1000.00",
        "01/06/2000 || 500.00 || || 1500.00",
        "01/06/2000 || || 250.00 || 1250.00"];

    beforeEach(() => {
        formatStatement = new FormatStatement();
        printStatement = { newStatement: "" };
    });

    describe("#parseTransactionHistory", () => {
        it("adds transactions to the newStatement string", () => {
            formatStatement.parseTransactionHistory(fakeAccTransactions);
            expect(
                formatStatement.formatCreditString(fakeTransaction)
            ).toContain(output[1]);
            expect(
                formatStatement.formatDebitString(fakeTransactionThree)
            ).toContain(output[3]);
        });
    });

    describe("#formatDebitString", () => {
        it("adds a debit string to the newStatement string", () => {
            expect(
                formatStatement.formatDebitString(fakeTransactionThree)
            ).toContain(output[3]);
        });
    });

    describe("#formatCreditString", () => {
        it("adds a credit string to the newStatement string", () => {
            expect(
                formatStatement.formatCreditString(fakeTransaction)
            ).toContain(output[1]);
        });
    });
});
