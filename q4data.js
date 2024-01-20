4. /*Write a JavaScript program that creates a class called "BankAccount" with properties for account number 
and balance. Include methods to deposit and withdraw money from the account. Create some instances of the 
"BankAccount" class, deposit some money, and withdraw a portion of it.
*/
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber,
            this.balance = balance
    }
    depositMoney(amount) {
        this.balance = this.balance + amount;
        return this.balance
    }
    withdrawMoney(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return this.balance
        }
        else {
            console.log("insufficient balance")
        }
    }
}
export { BankAccount }