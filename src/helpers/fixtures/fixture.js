import { UserBuilder } from "../builders/user.builder";
import { App } from '../../pages/app.page';
import { test as base } from '@playwright/test'

const url = 'https://demowebshop.tricentis.com';

export const test = base.extend({
    
    registerFixture: async ({ page }, use) => {
      
      const newUser = new UserBuilder().addBio().addEmail().addFirstName().addPassword().addLastName().generate();
      const app = new App(page);
      
      await app.mainPage.open(url);
      await app.mainPage.register();
      await app.registerPage.register(newUser.userFirstName, newUser.userLastName, newUser.userEmail, newUser.userPassword);
      await use(app);
    }
  })