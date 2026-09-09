import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
	readonly page: Page;
	readonly usernameInput: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;
	readonly errorMessage: Locator;
	readonly forgotPasswordButton: Locator;
	readonly forgotPasswordModal: Locator;
	readonly forgotPasswordInput: Locator;
	readonly sendOTPButton: Locator;
	readonly otpMessage: Locator;
	readonly otpInput: Locator;
	readonly verifyButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameInput = page.getByPlaceholder(/username/i);
		this.passwordInput = page.getByPlaceholder(/password/i);
		this.loginButton = page.getByRole('button', { name: /login/i });
		this.errorMessage = page.locator('[data-testid="error-alert"]');
		this.forgotPasswordButton = page.locator('#forgot-link');
		this.forgotPasswordModal = page.locator('.otp-dialog');
		this.forgotPasswordInput = page.locator('input[name="reset-email"]');
		this.sendOTPButton = page.getByRole('button', { name: 'Send OTP' });
		this.otpMessage = page.getByText('Simulated OTP sent:');
		this.otpInput = page.getByPlaceholder('Enter 6-digit OTP');
		this.verifyButton = page.getByRole('button', { name: 'Verify' });
	}

	async goto() {
		await this.page.goto('https://www.playwrightpad.com/sandbox/banking');
	}

	async login(username: string, password: string) {
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	async forgotPassword(email: string) {
		await this.forgotPasswordButton.click();
		await this.forgotPasswordInput.fill(email);
		await this.sendOTPButton.click();
		await expect(this.otpMessage).toBeVisible();
	}

	async otpInputLogin(otp: string) {
		await this.otpInput.fill(otp);
		await this.verifyButton.click();
	}
}
