import { test } from '../fixtures/TestFixture';

test.describe('Dashboard', () => {
	test('BANK-DASH-01', async ({ dashBoardPage }) => {
		await dashBoardPage.checkingAccountIsVisible();
	});
});
