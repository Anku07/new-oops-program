/*12. Write a JavaScript program that creates a class called University with properties 
for university name and departments. Include methods to add a department, remove a 
department, and display all departments. Create an instance of the University class and 
add and remove departments.
*/
class University {
    constructor(universityName) {
        this.universityName = universityName,
            this.universityDepartment = []
    }
    additionOfDepartment(department) {
        const departmentAddition = this.universityDepartment.push(department)
        return departmentAddition
        
    }
    removalOfDepartment(department) {
        const departmentRemoval = this.universityDepartment.pop(department)
        return departmentRemoval
    }
    displayAllDepartment() {
        return {
            allDepartment: this.universityDepartment
        }
    }
}
export { University }