import { BasePage } from './base.page'
import { allure } from "allure-playwright"

export class MainPage extends BasePage  {
    constructor(page) {
        super(page);
        this.registerButton = this.page.getByRole('link', { name: 'Register' });
        this.logoutButton = this.page.getByRole('link', { name: 'Log out' });
        this.booksTopic = this.page.getByRole('link', { name: 'Books' }).first()
        this.shoppingCart = this.page.locator('.cart-label').nth(0);
        this.cheapComputerCard = this.page.getByRole('link', { name: 'Build your own cheap computer', exact: true });
        this.expensiveComputerCard = this.page.getByRole('link', { name: 'Build your own expensive computer', exact: true });
        this.comparisonButton = this.page.getByRole('button', { name: 'Add to compare list' });
        this.mainPageReturn = this.page.getByRole('link', { name: 'Tricentis Demo Web Shop' })
    }
    async register() {
        await allure.step("Нажать на кнопку 'Регистрация' в шапке страницы", async () => {
            await this.registerButton.click()});
}
    async books() {
        await allure.step("Нажать на раздел 'Книги'", async () => {
            await this.booksTopic.click()});
    }
    async logout() {
        await allure.step("Нажать выйти из аккаунта в шапке страницы", async () => {
            await this.logoutButton.click()});
    }
    async goToCart() {
        await allure.step("Перейти в корзину", async () => {
            await this.shoppingCart.click()});
    }
    async goToExpensiveComputerCard() {
        await allure.step("Перейти в карточку дорогого компьютера", async () => {
            await this.expensiveComputerCard.click()});
    }
    async goToCheapComputerCard() {
        await allure.step("Перейти в карточку дешевого компьютера", async () => {
            await this.cheapComputerCard.click()});
    }
    async addToCompareList() {
        await allure.step("Нажать 'добавить в сравнение'", async () => {
            await this.comparisonButton.click()});
    }
    async goToMainPage() {
        await allure.step("Перейти на главную страницу", async () => {
            await this.mainPageReturn.click()});
    }
}