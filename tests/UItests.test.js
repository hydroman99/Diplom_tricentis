import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixtures/fixture'

test.describe('UI test',() => {
    test('Пользователь успешно залогинился', async ({ registerFixture }) => {
        await expect(registerFixture.mainPage.logoutButton).toBeVisible()
    })
    test('Добавление товар в корзину', async ({ registerFixture }) => {
        await registerFixture.mainPage.books();
        await registerFixture.booksPage.buyFirstBook();
        await expect(registerFixture.booksPage.notification).toBeVisible();
        await registerFixture.mainPage.goToCart();
        await expect(registerFixture.shoppingCartPage.firstItem).toBeVisible();
    })
    test('Удаление товара из корзины', async ({ registerFixture }) => {
        await registerFixture.mainPage.books();
        await registerFixture.booksPage.buyFirstBook();
        await expect(registerFixture.booksPage.notification).toBeVisible();
        await registerFixture.mainPage.goToCart();
        await registerFixture.shoppingCartPage.deleteItem();
        await expect(registerFixture.shoppingCartPage.emptryCartMesserge).toBeVisible();
    })
    test('Оставить отзыв о товаре', async ({ registerFixture }) => {
        await registerFixture.mainPage.books();
        await registerFixture.booksPage.goToFirstBookReviews();
        await registerFixture.reviewPage.makeAReview('I am an Title', 'I am a review Text');
    })
})