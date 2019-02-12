describe("First specs feature", () => {
  let account;

  let output = (`date || credit || debit || balance`,
                  `14/01/2012 || || 500.00 || 2500.00`,
                  `13/01/2012 || 2000.00 || || 3000.00`,
                  `10/01/2012 || 1000.00 || || 1000.00`
                );

  beforeEach(() => {
    account = new Account();
  });

  it("A user can interact with their account and print a statement", () => {
    account.deposit(1000, '2012-01-10');
    account.deposit(2000, '2012-01-13');
    account.withdraw(500, '2012-01-14');
    expect(account.printStatement()).toContain(output);
  });
});
