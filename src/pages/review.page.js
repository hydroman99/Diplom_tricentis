import { BasePage } from './base.page'

export class ReviewPage extends BasePage {
    constructor(page) {
        super(page)
        this.reviewTitleField = this.page.getByLabel('Review title:');
        this.reviewTextField = this.page.getByLabel('Review text:');
        this.submitReviewButton = this.page.getByRole('button', { name: 'Submit review' });
        this.successMesserge = this.page.getByText('Product review is');
}
   async makeAReview(reviewText = '', reviewTitle = ''){
        await allure.step("Заполнить поле 'Заголовок обзора'", async () => {
            await this.reviewTitleField.fill(reviewTitle)});
        await allure.step("Заполнить поле 'Текст обзора'", async () => {
            await this.reviewTextField.fill(reviewText)});
        await allure.step("Нажать 'Опубликовать обзор'", async () => {
            await this.submitReviewButton.click()});
    }
}
