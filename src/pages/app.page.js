import { MainPage, RegisterPage, BooksPage, ShoppingCartPage, ReviewPage, ComparisonPage } from "./index";


export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.registerPage = new RegisterPage(page)
        this.booksPage = new BooksPage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);
        this.reviewPage = new ReviewPage(page);
        this.comparisonPage = new ComparisonPage(page);
    }
}