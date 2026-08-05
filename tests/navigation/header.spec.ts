import { test, expect } from '../../fixtures/test.fixture';

test.describe('Bouncie header navigation', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test('should navigate to the pricing page @navigation', async ({
    homePage,
    page,
  }) => {
    await homePage.header.openPricing();

    await expect(page).toHaveURL(/pricing/i);
  });

  test('should navigate to the family page @navigation', async ({
    homePage,
    page,
  }) => {
    await homePage.header.openFamily();

    await expect(page).toHaveURL(/family/i);
  });

  test('should navigate to the fleet page @navigation', async ({
    homePage,
    page,
  }) => {
    await homePage.header.openFleet();

    await expect(page).toHaveURL(/fleet/i);
  });
});