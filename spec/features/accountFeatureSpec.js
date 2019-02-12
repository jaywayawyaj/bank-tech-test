describe("First specs feature", () => {
  let account;

  let output = (
                `date || credit || debit || balance
                14/01/2012 || || 500.00 || 2500.00
                13/01/2012 || 2000.00 || || 3000.00
                10/01/2012 || 1000.00 || || 1000.00`
              );

  beforeEach(() => {
    account = new Account();
  });

  xit("A user can interact with their account and print a statement", () => {
    account.deposit(1000, '10/01/2012');
    account.deposit(2000, '13/01/2012');
    account.withdraw(500, '4/01/2012');
    expect(account.printStatement()).toEqual(output);
  });
});
