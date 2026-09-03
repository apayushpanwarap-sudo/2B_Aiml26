let bankAccount = {
    accountHolderName: "Ayush",
    accountNumber: 123456,
    accountBalance: 5000,

    deposit: function(amount) {
        this.accountBalance += amount;
        console.log("Amount Deposited:", amount);
    },

    withdraw: function(amount) {
        if (amount > this.accountBalance) {
            console.log("Insufficient Balance");
        } else {
            this.accountBalance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    },

    displayBalance: function() {
        console.log("Current Balance:", this.accountBalance);
    }
};


bankAccount.deposit(2000);
bankAccount.displayBalance();

bankAccount.withdraw(3000);
bankAccount.displayBalance();

bankAccount.withdraw(10000);