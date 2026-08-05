import { test, expect } from '../../fixtures/test.fixture';

test.describe('Bouncie home page', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test('should display the main home page content', async ({ homePage, page }) => {
    await expect(page).toHaveURL(/bouncie\.com/);
    await expect(homePage.mainHeading).toBeVisible();
    await expect(homePage.pricingSection).toBeVisible();
    await expect(homePage.compatibilityButton).toBeVisible();
  });

  test('should have the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/bouncie/i);
  });
});