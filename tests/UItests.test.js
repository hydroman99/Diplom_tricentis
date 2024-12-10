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
    test('Оставить отзыв o товаре', async ({ registerFixture }) => {
        await registerFixture.mainPage.books();
        await registerFixture.booksPage.goToFirstBookReviews();
        await registerFixture.reviewPage.makeAReview('I am an Title', 'I am a review Text');
        await expect(registerFixture.reviewPage.successMesserge).toBeVisible();
    })
    test('Сравнить 2 товара', async ({ registerFixture }) => {
        await registerFixture.mainPage.goToExpensiveComputerCard();
        await registerFixture.mainPage.addToCompareList();
        await registerFixture.mainPage.goToMainPage();
        await registerFixture.mainPage.goToCheapComputerCard();
        await registerFixture.mainPage.addToCompareList();
        await expect(registerFixture.comparisonPage.firstComputerPrice).toHaveText('800.00');
        await expect(registerFixture.comparisonPage.secondComputerPrice).toHaveText('1800.00');
    })
})