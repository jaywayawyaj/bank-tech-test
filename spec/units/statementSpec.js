describe('Statement', () => {
  let statement;
  let fakeTransaction;
  let fakeTransactionTwo;
  let fakeAccountTransactions;

  beforeEach(() => {
    fakeTransaction = { amount: 1000, date: '2012-1-14', balance: 1000 };
    fakeTransactionTwo = { amount: 500, date: '2012-1-14', balance: 1500 };
    fakeAccountTransactions = [fakeTransaction, fakeTransactionTwo];
    statement = new Statement(fakeAccountTransactions);
  })

  it('has a transaction history', () => {
    expect(statement.transactionHistory.length).toBeGreaterThan(0);
  })
})
