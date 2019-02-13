describe("Account", () => {
    let account;
    let fakeTransaction;
    let fakeTransactionTwo;

    beforeEach(() => {
        account = new Account();
        fakeTransaction = { amount: 1000, date: "2012-1-14" };
        fakeTransactionTwo = { amount: 500, date: "2012-1-14" };
    });

    describe("#deposit/deposits", () => {

        it("a user can add a deposit", () => {
            account.deposit(fakeTransaction.amount);
            expect(account.transactions.length).toBeGreaterThan(0);
        });

        it("tells you the deposited amount", () => {
            account.deposit(fakeTransaction.amount);
            account.deposit(fakeTransactionTwo.amount);
            expect(account.transactions[0].amount).toBe(1000);
            expect(account.transactions[1].amount).toBe(500);
        });

        it("tells you the date of the deposit", () => {
            account.deposit(fakeTransaction.amount, fakeTransaction.date);
            expect(account.transactions[0].date).toEqual(
                new Date(
                  "Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)"
                )
            );
        });

        it("updates the transaction accountBalance", () => {
            account.deposit(fakeTransaction.amount);
            account.deposit(fakeTransactionTwo.amount);
            expect(account.transactions[0].accBalance).toBe(1000);
            expect(account.transactions[1].accBalance).toBe(1500);
        });
    });

    describe ("#withdraw/withdrawals", () => {

        it("a user make add a withdrawal", () => {
            account.withdraw(fakeTransaction.amount);
            expect(account.transactions.length).toBeGreaterThan(0);
        });

        it("tells you the withdraw amount", () => {
            account.withdraw(fakeTransaction.amount);
            account.withdraw(fakeTransactionTwo.amount);
            expect(account.transactions[0].amount).toBe(-1000);
            expect(account.transactions[1].amount).toBe(-500);
        });

        it("tells you the date of the withdrawal", () => {
            account.withdraw(fakeTransaction.amount, fakeTransaction.date);
            expect(account.transactions[0].date).toEqual(
                new Date(
                  "Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)"
                )
            );
        });

        it("updates the transaction accountBalance", () => {
            account.withdraw(fakeTransaction.amount);
            account.withdraw(fakeTransactionTwo.amount);
            expect(account.transactions[0].accBalance).toBe(-1000);
            expect(account.transactions[1].accBalance).toBe(-1500);
        });
    });

    describe("#updateBalance", () => {

        it("updates the balance of the account", () => {
            account.deposit(fakeTransaction.amount);
            account.withdraw(fakeTransactionTwo.amount);
            expect(account.updateBalance()).toBe(500);
        });
    });
});
