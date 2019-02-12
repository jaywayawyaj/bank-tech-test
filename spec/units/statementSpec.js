describe("Statement", () => {
    let statement;
    let fakeTransaction = { amount: 1000, date: new Date("2000-6-1"), accBalance: 1000 };
    let fakeTransactionTwo = { amount: 500, date: new Date("2000-6-1"), accBalance: 1500 };
    let fakeTransactionThree = { amount : -250, date: new Date("2000-6-1"), accBalance: 1250 };
    let fakeAccTransactions = [fakeTransaction, fakeTransactionTwo, fakeTransactionThree];
    let output = ("date || credit || debit || balance",
    "01/06/2000 || 1000.00 || || 1000.00",
    "01/06/2000 || 500.00 || || 1500.00",
    "01/06/2000 || || 250.00 || 1250.00");

    beforeEach(() => {
        statement = new Statement(fakeAccTransactions);
    });

    it("has a transaction history", () => {
        expect(statement.transactionHistory.length).toBe(3);
    });

    describe("#printStatement", () => {
        it("returns a final statement with header", () => {
            expect(statement.printStatement()).toContain(output[0]);
            expect(statement.printStatement()).toContain(output[1]);
            expect(statement.printStatement()).toContain(output[2]);
            expect(statement.printStatement()).toContain(output[3]);
        });
    });

    describe("#parseTransactionHistory", () => {
        it("adds transactions to the newStatement string", () => {
            statement.parseTransactionHistory();
            expect(statement.newStatement).toContain(output[0]);
            expect(statement.newStatement).toContain(output[1]);
            expect(statement.newStatement).toContain(output[2]);
            expect(statement.newStatement).toContain(output[3]);
        });
    });

    describe("#editDate", () => {
        it("reformats date object to DD/MM/YYYY", () => {
            expect(statement.editDate(fakeTransaction)).toEqual("01/06/2000");
        });
    });

    describe("#editAmount", () => {
        it("reformats transaction.amount", () => {
            expect(statement.editAmount(fakeTransaction)).toBe("1000.00");
        });
    });

    describe("#editBalance", () => {
        it("reformats transaction.accBalance", () => {
            expect(statement.editBalance(fakeTransaction)).toBe("1000.00");
        });
    });
});
