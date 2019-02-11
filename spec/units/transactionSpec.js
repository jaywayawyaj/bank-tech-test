describe("Transaction", () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction(10);
  })

  it('returns the transaction amount', () => {
    expect(transaction.amount).toBe(10);
  })
})
