import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
	readonly checkingAccount: Locator;
	readonly savingsAccount: Locator;

	constructor(page: Page) {
		this.checkingAccount = page.locator('[data-account="checking"]');
		this.savingsAccount = page.locator('[data-account="savings"]');
	}

	async checkingAccountIsVisible() {
		await expect(this.checkingAccount).toBeVisible();
		await expect(this.savingsAccount).toBeVisible();
	}
}
