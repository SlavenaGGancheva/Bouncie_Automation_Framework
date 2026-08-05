import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly mainHeading: Locator;
  readonly pricingSection: Locator;
  readonly compatibilityButton: Locator;

  readonly homeLink: Locator;
  readonly pricingLink: Locator;
  readonly familyLink: Locator;
  readonly fleetLink: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mainHeading = page.getByRole('heading', {
      name: /stay connected to/i,
    });

    this.pricingSection = page.getByText(/simple pricing/i);

    this.compatibilityButton = page.getByRole('button', {
      name: /confirm compatibility/i,
    });

    this.homeLink = page.getByRole('link', {
      name: /^home$/i,
    });

    this.pricingLink = page.getByRole('link', {
      name: /^pricing$/i,
    });

    this.familyLink = page.getByRole('link', {
      name: /^family$/i,
    });

    this.fleetLink = page.getByRole('link', {
      name: /^fleet$/i,
    });

    this.loginLink = page.getByRole('link', {
      name: /login|sign in/i,
    });
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async clickPricing(): Promise<void> {
    await this.pricingLink.click();
  }

  async clickFamily(): Promise<void> {
    await this.familyLink.click();
  }

  async clickFleet(): Promise<void> {
    await this.fleetLink.click();
  }

  async clickLogin(): Promise<void> {
    await this.loginLink.click();
  }
}