import { BasePage } from './base.page'
import { allure } from "allure-playwright"

export class RegisterPage extends BasePage {
    constructor(page) {
        super(page);
        this.maleCheckBox = this.page.getByLabel('Male', { exact: true });
        this.firstName = this.page.getByLabel('First name:');
        this.lastName = this.page.getByLabel('Last name:');
        this.email = this.page.getByLabel('Email:');
        this.password = this.page.locator('#Password');
        this.confirmPassword = this.page.locator('#ConfirmPassword');
        this.registerButton = this.page.getByRole('button', { name: 'Register' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue' })
    }
    async register (firstNameFill = '', lastNameFill = '', emailFill= '', passwordFill = '') {
        await allure.step("Выделить чекбокс 'Мужчина'", async () => {
            await this.maleCheckBox.check()});
        await allure.step("Заполнить поле 'Имя'", async () => {
            await this.firstName.fill(firstNameFill)});
        await allure.step("Заполнить поле 'Фамилия'", async () => {
            await this.lastName.fill(lastNameFill)});
        await allure.step("Заполнит поле 'Почта'", async () => {
            await this.email.fill(emailFill)});
        await allure.step("Заполнить поле 'Пароль'", async () => {
            await this.password.fill(passwordFill)});
        await allure.step("Заполнить поле 'Подтверждение пароля'", async () => {
            await this.confirmPassword.fill(passwordFill)});
        await allure.step("Нажать на кнопку 'Зарегистрироваться'", async () => {
            await this.registerButton.click()});
        await allure.step("Нажать на кнопку 'Продолжить'", async () => {
            await this.continueButton.click()});
}
}