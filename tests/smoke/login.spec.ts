import { test, expect } from '../../fixtures/test.fixture';

test.describe('Bouncie login page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('should display the login form', async ({ loginPage, page }) => {
    await expect(page).toHaveURL(/bouncie\.app\/login\/?$/);

    await expect(loginPage.signInText).toBeVisible();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.resetPasswordButton).toBeVisible();
    await expect(loginPage.createAccountLink).toBeVisible();
  });

  test('should allow the user to enter login information', async ({
    loginPage,
  }) => {
    await loginPage.enterEmail('portfolio-test@example.com');
    await loginPage.enterPassword('ExamplePassword123!');

    await expect(loginPage.emailInput).toHaveValue(
      'portfolio-test@example.com',
    );

    await expect(loginPage.passwordInput).toHaveValue(
      'ExamplePassword123!',
    );
  });
});