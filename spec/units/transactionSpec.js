describe("Transaction", () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction(10, '14/01/2012');
  })

  it('returns the transaction amount', () => {
    expect(transaction.amount).toBe(10);
  })

  it('returns the transaction date', () => {
    expect(transaction.date).toBe('14/01/2012');
  })
})
