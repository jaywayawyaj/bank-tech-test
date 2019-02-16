class FormatAttributes {

    formatDate(transaction) {
        let newDate = transaction.date.toLocaleDateString();
        return newDate;
    }

    formatAmount(transaction) {
        let newAmount = Math.abs(transaction.amount).toFixed(2);
        return newAmount;
    }

    formatBalance(transaction) {
        let newBalance = Math.abs(transaction.accBalance).toFixed(2);
        return newBalance;
    }
}
