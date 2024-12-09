import { BasePage } from './base.page'

export class ShoppingCartPage extends BasePage {
    constructor(page) {
        super(page)
        this.firstItem = this.page.getByRole('cell', { name: 'Computing and Internet', exact: true });
        this.itemCheckBox = this.page.locator('input[name="removefromcart"]');
        this.updateShoppingCart = this.page.getByRole('button', { name: 'Update shopping cart' });
        this.emptryCartMesserge = this.page.getByText('Your Shopping Cart is empty!');
    }
    async deleteItem(){
        await this.itemCheckBox.check();
        await this.updateShoppingCart.click();
    }
}