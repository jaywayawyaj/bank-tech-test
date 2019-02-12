describe("Statement", () => {
    let statement;
    let fakeTxn;
    let fakeTxnTwo;
    let fakeTxnThree;
    let fakeAccountTxns;

    beforeEach(() => {
        fakeTxn = { amount: 1000, date: "2012-1-14", balance: 1000 };
        fakeTxnTwo = { amount: 500, date: "2012-1-14", balance: 1500 };
        fakeTxnThree = { amount : -250, date: "2013-1-14", balance: 1250};
        fakeAccountTxns = [fakeTxn, fakeTxnTwo, fakeTxnThree];
        statement = new Statement(fakeAccountTxns);
    });

    it("has a transaction history", () => {
        expect(statement.txnHistory.length).toBe(3);
    });

    describe('#printStatement', () => {
      it('prints the statement header', () => {
        expect(statement.printStatement()).toContain("date || credit || debit || balance")
      })
    })
});
