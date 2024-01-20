/*1. Write a JavaScript program to create a class called "Person" with properties for name,
 age and country. Include a method to display the person's details.Create two instances 
 of the 'Person' class and display their details.
*/
class Person {
    constructor (name, age, country) {
        this.name = name,
        this.age = age,
        this.country = country
    }
    personDetail(){
        return {
            nameOfPerson : this.name,
            ageOfPerson : this.age,
            countryOfPersonWhereHeLive : this.country
        }
    }
}
export {Person}
