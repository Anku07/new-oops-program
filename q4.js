import { BankAccount } from "./q4data.js"
const acount1 = new BankAccount(987654321, 8000)
const deposit = acount1.depositMoney(2000)
console.log(deposit)
const withdraw = acount1.withdrawMoney(90000)
console.log(withdraw)