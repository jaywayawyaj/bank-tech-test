describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe("#deposit", () => {

    it("a user can add a deposit", () => {
      account.deposit(1000);
      expect(account.transactions.length).toBeGreaterThan(0);
    })

    it("tells you the deposit amount", () => {
      account.deposit(1000);
      account.deposit(500);
      expect(account.transactions[0]).toBe(1000);
      expect(account.transactions[1]).toBe(500);
    })

    xit("tells you the date of the deposit", () => {
      account.deposit(1000);
      expect(account.transactions[0].date).toBe(14/01/2012);
    })
  });

  describe ("#withdraw", () => {

    it("a user make add a withdrawal", () => {
      account.withdraw(100);
      expect(account.transactions.length).toBeGreaterThan(0);
    })

    it("tells you the withdraw amount", () => {
      account.withdraw(1000);
      account.withdraw(500);
      expect(account.transactions[0]).toBe(-1000);
      expect(account.transactions[1]).toBe(-500);
    })
  })

  describe("#updateBalance", () => {

    it("updates the balance of the account", () => {
      account.deposit(1000);
      account.withdraw(500);
      expect(account.updateBalance()).toBe(500)
    })
  })
});
