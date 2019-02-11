describe("Transaction", () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction(10, ('2012-1-14'));
  })

  it('returns the transaction amount', () => {
    expect(transaction.amount).toBe(10);
  })

  it('returns the transaction date', () => {
    expect(transaction.date).toEqual(
      new Date('Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)')
    );
  })
})
