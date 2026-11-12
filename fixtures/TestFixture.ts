import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import type { Page } from '@playwright/test';

type Fixtures = {
	loginPage: LoginPage;
	authenticatedPage: Page;
	dashBoardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto();
		await use(loginPage);
	},

	authenticatedPage: async ({ loginPage, page }, use) => {
		await loginPage.login('apex_user', 'Password123!');
		await use(page);
	},

	dashBoardPage: async ({ authenticatedPage }, use) => {
		const dashBoardPage = new DashboardPage(authenticatedPage);
		await use(dashBoardPage);
	},
});

export { expect } from '@playwright/test';
