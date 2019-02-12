describe("Statement", () => {
    let statement;
    let fakeTxn = { amount: 1000, date: new Date('2000-6-1'), balance: 1000 };
    let fakeTxnTwo = { amount: 500, date: new Date('2000-6-1'), balance: 1500 };
    let fakeTxnThree = { amount : -250, date: new Date('2000-6-1'), balance: 1250};
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

    describe('editDate', () => {
      it('reformats date object to DD/MM/YYYY', () => {
        expect(statement.editDate(fakeTxn)).toEqual("01/06/2000");
      })
    })


});
