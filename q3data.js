/*3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, 
and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 
'Vehicle' class and includes an additional property for the number of doors. Override the display method 
to include the number of doors.
*/
class Vehicle {
    constructor(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year
    }
    displayVehicleDetails() {
        return {
            vehicleMaker: this.make,
            vehicleModel: this.model,
            vehicleYear: this.year
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
        super(make, model, year)
        this.numberOfDoors = numberOfDoors
    }
    displayVehicleDetails() {
        return {
            vehicleMaker: this.make,
            vehicleModel: this.model,
            vehicleYear: this.year,
            numberOfDoorsOfVehicle: this.numberOfDoors
        }
    }
}
export { Car }