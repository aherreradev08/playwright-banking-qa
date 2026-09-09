import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
	loginPage: LoginPage;
	authenticatedPage: LoginPage;
};

export const test = base.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto();
		await use(loginPage);
	},

	authenticatedPage: async ({ loginPage }, use) => {
		await loginPage.login('apex_user', 'Password123!');
		await use(loginPage);
	},
});

export { expect } from '@playwright/test';
