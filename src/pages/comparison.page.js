import { BasePage } from './base.page'

export class ComparisonPage extends BasePage {
    constructor(page) {
        super(page);
        this.firstComputerPrice = this.page.locator('.a-center').nth(8)
        this.secondComputerPrice = this.page.locator('.a-center').nth(9)
    }
}