/*11. Write a JavaScript program that creates a class called BankAccount with properties for account number, 
account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. 
Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and 
transferring money.
*/
class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber,
            this.accountHolderName = accountHolderName,
            this.balance = balance
    }
    depositMoney(amount) {
        this.balance = this.balance + amount;
        return this.balance
    }
    withdrawMoney(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount
            console.log(this.balance)
        }
        else {
            console.log("insufficient balance")
        }
    }
    transferMoney(amount, targetAccount) {
        let money = this.balance
        if (amount <= money) {
            this.withdrawMoney(amount)
            const deposit = targetAccount.depositMoney(amount)
            return deposit;
        }
        else {
            console.log("insufficient balance")
        }
    }

}
export { BankAccount }