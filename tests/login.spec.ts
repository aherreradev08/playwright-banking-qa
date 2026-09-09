import { test, expect } from '../fixtures/TestFixture';

test.describe('Login Page', () => {
	test('BANK-AUTH-01', async ({ loginPage, page }) => {
		await loginPage.login('apex_user', 'Password123!');
		await expect(page).toHaveURL(/banking/i);
	});

	test('BANK-AUTH-02', async ({ loginPage }) => {
		await loginPage.login('apex_user', 'WrongPass');
		await expect(loginPage.errorMessage).toHaveText(
			'Invalid username or password',
		);
	});

	test('BANK-AUTH-03', async ({ loginPage }) => {
		await loginPage.login('ghost_user', 'Password!');
		await expect(loginPage.errorMessage).toHaveText(
			'Invalid username or password',
		);
	});

	test('BANK-AUTH-04', async ({ loginPage }) => {
		await loginPage.forgotPassword('asdsdas@yahoo.com');
	});

	test('BANK-AUTH-05', async ({ loginPage }) => {
		await loginPage.login('apex_2fa', 'Password2FA!');
		await loginPage.otpInputLogin('123456');
	});
});
