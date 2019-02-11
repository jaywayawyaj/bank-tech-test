describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe("#deposit", () => {

  it("a user can add a deposit", () => {
    account.deposit(1000);
    expect(account.deposits).toBeGreaterThan(0);
    })

});
