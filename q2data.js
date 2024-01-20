/*2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class 
and calculate its area and perimeter.
*/
class Rectangle {
    constructor(width, height) {
        this.width = width,
            this.height = height
    }
    areaOfRectangle() {
        const rectangleArea = this.width * this.height;
        return rectangleArea;
    }
    perimetreOfRetangle() {
        const rectanglePerimeter = 2 * (this.width + this.height)
        return rectanglePerimeter
    }
}
export { Rectangle }