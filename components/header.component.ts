import { type Locator, type Page } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly navigation: Locator;
  readonly logoLink: Locator;
  readonly pricingLink: Locator;
  readonly familyLink: Locator;
  readonly fleetLink: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
      
    this.navigation = page.getByRole('navigation');

    this.logoLink = page.getByRole('link', {
      name: /bouncie/i,
    });

    this.pricingLink = this.navigation.getByRole('link', {
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

  async openHome(): Promise<void> {
    await this.logoLink.click();
  }

  async openPricing(): Promise<void> {
    await this.pricingLink.click();
  }

  async openFamily(): Promise<void> {
    await this.familyLink.click();
  }

  async openFleet(): Promise<void> {
    await this.fleetLink.click();
  }

  async openLogin(): Promise<void> {
    await this.loginLink.click();
  }
}