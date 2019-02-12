describe("Account", () => {
  let account;
  let fakeTxn;
  let fakeTxnTwo;

  beforeEach(() => {
    account = new Account();
    fakeTxn = { amount: 1000, date: '2012-1-14' };
    fakeTxnTwo = { amount: 500, date: '2012-1-14' };
  });

  describe("#deposit/deposits", () => {

    it("a user can add a deposit", () => {
      account.deposit(fakeTxn.amount);
      expect(account.txns.length).toBeGreaterThan(0);
    })

    it("tells you the deposited amount", () => {
      account.deposit(fakeTxn.amount);
      account.deposit(fakeTxnTwo.amount);
      expect(account.txns[0].amount).toBe(1000);
      expect(account.txns[1].amount).toBe(500);
    })

    it("tells you the date of the deposit", () => {
      account.deposit(fakeTxn.amount, fakeTxn.date);
      expect(account.txns[0].date).toEqual(
        new Date('Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)')
      );
    })

    it("updates the transaction accountBalance", () => {
      account.deposit(fakeTxn.amount);
      account.deposit(fakeTxnTwo.amount);
      expect(account.txns[0].accountBalance).toBe(1000);
      expect(account.txns[1].accountBalance).toBe(1500);
    })
  });

  describe ("#withdraw/withdrawals", () => {

    it("a user make add a withdrawal", () => {
      account.withdraw(fakeTxn.amount);
      expect(account.txns.length).toBeGreaterThan(0);
    })

    it("tells you the withdraw amount", () => {
      account.withdraw(fakeTxn.amount);
      account.withdraw(fakeTxnTwo.amount);
      expect(account.txns[0].amount).toBe(-1000);
      expect(account.txns[1].amount).toBe(-500);
    })

    it("tells you the date of the withdrawal", () => {
      account.withdraw(fakeTxn.amount, fakeTxn.date);
      expect(account.txns[0].date).toEqual(
        new Date('Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)')
      );
    })

    it("updates the transaction accountBalance", () => {
      account.withdraw(fakeTxn.amount);
      account.withdraw(fakeTxnTwo.amount);
      expect(account.txns[0].accountBalance).toBe(-1000);
      expect(account.txns[1].accountBalance).toBe(-1500);
    })
  })

  describe("#updateBalance", () => {

    it("updates the balance of the account", () => {
      account.deposit(fakeTxn.amount);
      account.withdraw(fakeTxnTwo.amount);
      expect(account.updateBalance()).toBe(500)
    })
  })
});
