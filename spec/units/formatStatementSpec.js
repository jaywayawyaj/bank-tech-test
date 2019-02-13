describe("FormatStatement", () => {
    let formatStatement;
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
    let output = ("date || credit || debit || balance",
    "01/06/2000 || 1000.00 || || 1000.00",
    "01/06/2000 || 500.00 || || 1500.00",
    "01/06/2000 || || 250.00 || 1250.00");

    beforeEach(() => {
        formatStatement = new FormatStatement();
        printStatement = { newStatement: "" }
        transaction = new Transaction(10, ("2012-1-14"), 10)
    });

    describe("#parseTransactionHistory", () => {
        it("adds transactions to the newStatement string", () => {
            formatStatement.parseTransactionHistory(fakeAccTransactions);
            expect(printStatement.newStatement).toContain(output[0]);
            expect(printStatement.newStatement).toContain(output[1]);
            expect(printStatement.newStatement).toContain(output[2]);
            expect(printStatement.newStatement).toContain(output[3]);
        });
    });

    describe("#formatDate", () => {
        it("reformats date object to DD/MM/YYYY", () => {
            expect(formatStatement.formatDate(fakeTransaction)).toEqual("01/06/2000");
        });
    });

    describe("#formatAmount", () => {
        it("reformats transaction.amount", () => {
            expect(formatStatement.formatAmount(fakeTransaction)).toBe("1000.00");
        });
    });

    describe("#formatBalance", () => {
        it("reformats transaction.accBalance", () => {
            expect(formatStatement.formatBalance(fakeTransaction)).toBe("1000.00");
        });
    });

    describe("#formatDebitString", () => {
      it("adds a debit string to the newStatement string", () => {
        formatStatement.formatDebitString(fakeTransaction);
        expect(printStatement.newStatement).toContain("1000.00")
      })
    })

    describe("#formatCreditString", () => {
      it("adds a credit string to the newStatement string", () => {
        formatStatement.formatCreditString(fakeTransaction);
        expect(formatStatement.newStatement).toContain("1000.00")
      })
    })
});
