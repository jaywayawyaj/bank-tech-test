describe("Statement", () => {
    let statement;
    let fakeTxn = { amount: 1000, date: new Date("2000-6-1"), accBalance: 1000 };
    let fakeTxnTwo = { amount: 500, date: new Date("2000-6-1"), accBalance: 1500 };
    let fakeTxnThree = { amount : -250, date: new Date("2000-6-1"), accBalance: 1250 };
    let fakeAccTxns = [fakeTxn, fakeTxnTwo, fakeTxnThree];
    let output = ("date || credit || debit || balance",
    "01/06/2000 || 1000.00 || || 1000.00",
    "01/06/2000 || 500.00 || || 1500.00",
    "01/06/2000 || || 250.00 || 1250.00");

    beforeEach(() => {
        statement = new Statement(fakeAccTxns);
    });

    it("has a transaction history", () => {
        expect(statement.txnHistory.length).toBe(3);
    });

    describe("#printStatement", () => {
        it("returns a final statement with header", () => {
            expect(statement.printStatement()).toContain(output[0]);
            expect(statement.printStatement()).toContain(output[1]);
            expect(statement.printStatement()).toContain(output[2]);
            expect(statement.printStatement()).toContain(output[3]);
        });
    });

    describe("#parseTxnHistory", () => {
        it("adds transactions to the newStatement string", () => {
            statement.parseTxnHistory();
            expect(statement.newStatement).toContain(output[0]);
            expect(statement.newStatement).toContain(output[1]);
            expect(statement.newStatement).toContain(output[2]);
            expect(statement.newStatement).toContain(output[3]);
        });
    });

    describe("#editDate", () => {
        it("reformats date object to DD/MM/YYYY", () => {
            expect(statement.editDate(fakeTxn)).toEqual("01/06/2000");
        });
    });

    describe("#editAmount", () => {
      it("reformats txn.amount", () => {
        expect(statement.editAmount(fakeTxn)).toBe('1000.00');
      })
    })
});
