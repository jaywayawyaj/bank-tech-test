describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe("#deposit/deposits", () => {

    it("a user can add a deposit", () => {
      account.deposit(1000);
      expect(account.transactions.length).toBeGreaterThan(0);
    })

    it("tells you the deposited amount", () => {
      account.deposit(1000);
      account.deposit(500);
      expect(account.transactions[0].amount).toBe(1000);
      expect(account.transactions[1].amount).toBe(500);
    })

    it("tells you the date of the deposit", () => {
      account.deposit(1000, ('2012-1-14'));
      expect(account.transactions[0].date).toEqual(
        new Date('Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)')
      );
    })

    it("updates the transaction accountBalance", () => {
      account.deposit(1000);
      account.deposit(500);
      expect(account.transactions[0].accountBalance).toBe(1000);
      expect(account.transactions[1].accountBalance).toBe(1500);
    })
  });

  describe ("#withdraw/withdrawals", () => {

    it("a user make add a withdrawal", () => {
      account.withdraw(100);
      expect(account.transactions.length).toBeGreaterThan(0);
    })

    it("tells you the withdraw amount", () => {
      account.withdraw(1000);
      account.withdraw(500);
      expect(account.transactions[0].amount).toBe(-1000);
      expect(account.transactions[1].amount).toBe(-500);
    })

    it("tells you the date of the withdrawal", () => {
      account.withdraw(1000, ('2012-1-14'));
      expect(account.transactions[0].date).toEqual(
        new Date('Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)')
      );
    })

    it("updates the transaction accountBalance", () => {
      account.withdraw(1000);
      account.withdraw(500);
      expect(account.transactions[0].accountBalance).toBe(-1000);
      expect(account.transactions[1].accountBalance).toBe(-1500);
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
