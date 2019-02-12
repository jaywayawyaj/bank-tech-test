describe("Statement", () => {
    let statement;
    let fakeTxn = { amount: 1000, date: "2012-1-14", balance: 1000 };
    let fakeTxnTwo = { amount: 500, date: "2012-1-14", balance: 1500 };
    let fakeTxnThree = { amount : -250, date: "2013-1-14", balance: 1250};
    let fakeAccountTxns = [fakeTxn, fakeTxnTwo, fakeTxnThree];

    beforeEach(() => {
        statement = new Statement(fakeAccountTxns);
    });

    it("has a transaction history", () => {
        expect(statement.txnHistory.length).toBe(3);
    });

    describe('#parseTxnHistory', () => {
      it('adds transactions to the newStatement array', () => {
        statement.parseTxnHistory();
        expect(statement.newStatement.length).toEqual(3);
      })
    })


});
