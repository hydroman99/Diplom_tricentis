import { BasePage } from './base.page'

export class MainPage extends BasePage  {
    constructor(page) {
        super(page);
        this.registerButton = this.page.getByRole('link', { name: 'Register' });
        this.logoutButton = this.page.getByRole('link', { name: 'Log out' });
        this.booksTopic = this.page.getByRole('link', { name: 'Books' }).first()
        this.shoppingCart = this.page.locator('.cart-label').nth(0);
    }
    async register() {
        await this.registerButton.click();
}
    async books() {
        await this.booksTopic.click();
    }
    async logout() {
        await this.logoutButton.click();
    }
    async goToCart() {
        await this.shoppingCart.click();
    }
}