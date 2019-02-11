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

    it("tells you the deposit amount", () => {
      account.deposit(1000);
      account.deposit(500);
      expect(account.deposits[0]).toBe(1000);
      expect(account.deposits[1]).toBe(500);
    })
  });
});
