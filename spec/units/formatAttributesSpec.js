describe("FormatStatement", () => {
    let formatAttributes;
    let fakeTransaction = {
        amount: 1000, date: new Date("2000-6-1"), accBalance: 1000
    };

    beforeEach() {
      formatAttributes = new FormatAttributes;
    }

    describe("#formatDate", () => {
        it("reformats date object to DD/MM/YYYY", () => {
            expect(formatStatement.formatDate(fakeTransaction)).toEqual(
                "01/06/2000"
            );
        });
    });

    describe("#formatAmount", () => {
        it("reformats transaction.amount", () => {
            expect(formatStatement.formatAmount(fakeTransaction)).toBe(
                "1000.00"
            );
        });
    });

    describe("#formatBalance", () => {
        it("reformats transaction.accBalance", () => {
            expect(formatStatement.formatBalance(fakeTransaction)).toBe(
                "1000.00"
            );
        });
    });

  })
