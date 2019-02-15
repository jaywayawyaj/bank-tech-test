describe("First specs feature", () => {
    let account;
    let printStatement;

    let fakeTransaction = {
        amount: 1000, date: new Date("2000-6-1"), accBalance: 1000
    };
    let fakeTransactionTwo = {
        amount: 500, date: new Date("2000-6-1"), accBalance: 1500
    };
    let fakeTransactionThree = {
        amount : -250, date: new Date("2000-6-1"), accBalance: 1250
    };
    let fakeAccTransactions = [
        fakeTransaction, fakeTransactionTwo, fakeTransactionThree
    ];

    let output = ["date || credit || debit || balance",
    "14/01/2012 || || 500.00 || 2500.00",
    "13/01/2012 || 2000.00 || || 3000.00",
    "10/01/2012 || 1000.00 || || 1000.00"
  ];

    beforeEach(() => {
      account = new Account();
    });

    it("A user can interact with their account and print a statement", () => {
        account.deposit(1000, "2012-01-10");
        account.deposit(2000, "2012-01-13");
        account.withdraw(500, "2012-01-14");
        account.printStatement();
        let finalStatement = account.statement.printStatement.newStatement;
        expect(finalStatement).toContain(output[0]);
        expect(finalStatement).toContain(output[1]);
        expect(finalStatement).toContain(output[2]);
        expect(finalStatement).toContain(output[3]);
    });
});
