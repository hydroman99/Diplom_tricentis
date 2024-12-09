import { BasePage } from './base.page'

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
    }
    async register (firstNameFill = '', lastNameFill = '', emailFill= '', passwordFill = '') {
        await this.maleCheckBox.check();
        await this.firstName.fill(firstNameFill);
        await this.lastName.fill(lastNameFill);
        await this.email.fill(emailFill);
        await this.password.fill(passwordFill);
        await this.confirmPassword.fill(passwordFill);
        await this.registerButton.click();
}
}