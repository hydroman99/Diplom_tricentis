import { BasePage } from './base.page'

export class BooksPage extends BasePage {
    constructor(page) {
        super(page);
        this.addToCartButton = this.page.getByRole('button', { name: 'Add to cart' }).first();
        this.notification = this.page.locator('#bar-notification');
        this.firstBookPage = this.page.getByRole('link', { name: 'Computing and Internet', exact: true });
        this.reviewPage = this.page.getByRole('link', { name: 'review(s)' });
    }
    async buyFirstBook(){
        await this.addToCartButton.click();
    }
    async goToFirstBookReviews(){
        await this.firstBookPage.click();
        await this.reviewPage.click();
    }
}