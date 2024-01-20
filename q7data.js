/*7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication 
year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' 
class and includes an additional property for book price. Override the display method to include the book price.
Create an instance of the 'Ebook' class and display its details.
*/
class Book {
    constructor(title, author, publicationYear) {
        this.title = title,
            this.author = author,
            this.publication = publicationYear
    }
    displayBookDetail() {
        return {
            titleOfBook: this.title,
            authorOfBook: this.author,
            publicationOfBook: this.publication
        }
    }
}
class Ebook extends Book {
    constructor(title, author, publicationYear, bookPrice) {
        super(title, author, publicationYear)
        this.bookPrice = bookPrice
    }
    displayBookDetail() {
        return {
            titleOfBook: this.title,
            authorOfBook: this.author,
            publicationYearOfBook: this.publication,
            priceOfBook: this.bookPrice
        }
    }
}
export { Ebook }
