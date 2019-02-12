describe("Transaction", () => {
    let txn;

    beforeEach(() => {
        txn = new Transaction(10, ("2012-1-14"), 10);
    });

    it("returns the transaction amount", () => {
        expect(txn.amount).toBe(10);
    });

    it("returns the transaction date", () => {
        expect(txn.date).toEqual(
            new Date("Sat Jan 14 2012 00:00:00 GMT+0000 (Greenwich Mean Time)")
        );
    });

    it("returns account balance at time of transaction", () => {
        expect(txn.accBalance).toEqual(10);
    });
});
