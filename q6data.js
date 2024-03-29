/*6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the
Employee' class and adds an additional property for department. Override the annual salary calculation 
method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their
annual salary.
*/
class Employee {
    constructor(name, salary) {
        this.name = name,
            this.salary = salary
    }
    annualSalary() {
        const salary = this.salary * 12;
        return salary;
    }
}
class Manager extends Employee {
    static BONUS = 90000;
    constructor(name, salary, department) {
        super(name, salary, department)
        this.department = department
    }
    annualSalary() {
        const salary = super.annualSalary() + Manager.BONUS
        return salary;
    }
}
export { Manager }