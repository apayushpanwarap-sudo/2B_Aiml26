// 2. Bank Account Management 
// Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance(). Withdrawal should not be allowed when the requested amount is greater than the available balance. Create a static method bankInfo() that displays the bank name and general banking information. Create two account objects and perform different transactions on them.   Concepts Covered: Constructor, Objects, Instance Methods, Static Method, Object State

class BankAccount {

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }


    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
        console.log(`Current Balance: ₹${this.balance}`);
    }


    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal failed: Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
            console.log(`Current Balance: ₹${this.balance}`);
        }
    }

  
    displayBalance() {
        console.log(`Account No: ${this.accountNo}`);
        console.log(`Holder Name: ${this.holderName}`);
        console.log(`Balance: ₹${this.balance}`);
    }


    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Information: We provide secure banking,");
        console.log("deposits, withdrawals and account management services.");
    }
}


BankAccount.bankInfo();

console.log("\n--- Account 1 ---");


let account1 = new BankAccount("1001", "Ayush Panwar", 10000);

account1.displayBalance();

account1.deposit(5000);

account1.withdraw(3000);

account1.displayBalance();


console.log("\n--- Account 2 ---");


let account2 = new BankAccount("1002", "Rahul Sharma", 8000);

account2.displayBalance();

account2.deposit(2000);

account2.withdraw(12000);  

account2.withdraw(3000);

account2.displayBalance();