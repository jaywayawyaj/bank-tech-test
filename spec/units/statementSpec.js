describe("Statement", () => {
    let statement;
    let fakeTxn;
    let fakeTxnTwo;
    let fakeAccountTxns;

    beforeEach(() => {
        fakeTxn = { amount: 1000, date: "2012-1-14", balance: 1000 };
        fakeTxnTwo = { amount: 500, date: "2012-1-14", balance: 1500 };
        fakeAccountTxs = [fakeTxn, fakeTxnTwo];
        statement = new Statement(fakeAccountTxns);
    });

    it("has a transaction history", () => {
        expect(statement.txnHistory.length).toBeGreaterThan(0);
    });
});
