import { University } from "./q12data.js";
const department = new University("Galgotias unversity")
const department1 = department.additionOfDepartment("computer science")
const department2 = department.additionOfDepartment("Electrical")
console.log(department1)
console.log(department2)
const remove = department.removalOfDepartment(department2)
console.log(remove)
console.log(department.displayAllDepartment())