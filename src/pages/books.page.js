import { BasePage } from './base.page'
import { allure } from "allure-playwright"

export class BooksPage extends BasePage {
    constructor(page) {
        super(page);
        this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart' }).first();
        this.notification = this.page.locator('#bar-notification');
        this.firstBookPage = this.page.getByRole('link', { name: 'Computing and Internet', exact: true });
        this.reviewPage = this.page.getByRole('link', { name: 'review(s)' });
    }
    async buyFirstBook(){
        await allure.step("Нажать 'Купить' первую книгу", async () => {
            await this.addToCartButton.click();})
    }
    async goToFirstBookReviews(){
        await allure.step("Открыть карточку первой книги из списка", async () => {
            await this.firstBookPage.click();})
        await allure.step("Нажать на кнопку 'Отзывы'", async () => {
            await this.reviewPage.click();})
    }
}