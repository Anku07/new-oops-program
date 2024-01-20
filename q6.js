import { Manager } from "./q6data.js"
const salary = new Manager("Ayush", 1000000, "Software Engineer");
const annualSalary = salary.annualSalary();
console.log("Annual salary of employees with Bonus = " + annualSalary)