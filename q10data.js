/*10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and 
price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass
called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty
period. Override the total price calculation method to include the warranty period. Create an instance of the 
PersonalCareProduct class and calculate its total price.
*/
class Product {
    constructor(productId, name, price) {
        this.productid = productId,
            this.name = name,
            this.productPrice = price
    }
    totalprice(quantity) {
        const price = this.productPrice * quantity
        return price;
    }
}
class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price)
        this.warranty = warrantyPeriod
    }
    totalprice(quantity) {
        console.log("warrenty period of this product is " + this.warranty)
        console.log("total price of " + quantity + " product is :")
        const price = this.productPrice * quantity
        return price;
    }
}
export { PersonalCareProduct }