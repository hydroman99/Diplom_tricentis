import { BasePage } from './base.page'
import { allure } from "allure-playwright"

export class ShoppingCartPage extends BasePage {
    constructor(page) {
        super(page)
        this.firstItem = this.page.getByRole('cell', { name: 'Computing and Internet', exact: true });
        this.itemCheckBox = this.page.locator('input[name="removefromcart"]');
        this.updateShoppingCart = this.page.getByRole('button', { name: 'Update shopping cart' });
        this.emptryCartMesserge = this.page.getByText('Your Shopping Cart is empty!');
    }
    async deleteItem(){
        await allure.step("Выделить чекбокс товара", async () => {
            await this.itemCheckBox.check()});
        await allure.step("Нажать 'Обновить корзину'", async () => {
            await this.updateShoppingCart.click()});
    }
}