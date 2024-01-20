import { BankAccount } from "./q11data.js";
const bank1 = new BankAccount(987654321, "Ayush Singhi", 1200000)
const bank2 = new BankAccount(12345678, "ankita singh", 120000)
//  const deposit = bank1.depositMoney(10000)
//console.log(deposit)
//   const withdraw = bank1.withdrawMoney(9000)
//console.log(withdraw)
const transfer = bank1.transferMoney(1000, bank2)


console.log(transfer)