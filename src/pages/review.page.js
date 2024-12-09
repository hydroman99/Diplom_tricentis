import { BasePage } from './base.page'

export class ReviewPage extends BasePage {
    constructor(page) {
        super(page)
        this.reviewTitleField = this.page.getByLabel('Review title:');
        this.reviewTextField = this.page.getByLabel('Review text:');
        this.submitReviewButton = this.page.getByRole('button', { name: 'Submit review' });
        this.successfulReviewed = this.page.getByText('Product review is successfully added.');
}
   async makeAReview(reviewText = '', reviewTitle = ''){
        await this.reviewTitleField.fill(reviewTitle);
        await this.reviewTextField.fill(reviewText);
        await this.submitReviewButton.click();
        await expect(page.getByText('Product review is')).toBeVisible();
    }
}


////Починить ассерт