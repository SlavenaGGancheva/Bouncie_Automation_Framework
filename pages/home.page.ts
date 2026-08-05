import { type Locator, type Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderComponent;
  readonly mainHeading: Locator;
  readonly pricingSection: Locator;
  readonly compatibilityButton: Locator;

  constructor(page: Page) {
    this.page = page;
      
    this.header = new HeaderComponent(page);

    this.mainHeading = page.getByRole('heading', {
      name: /stay connected to/i,
    });

    this.pricingSection = page.getByText(/simple pricing/i);

    this.compatibilityButton = page.getByRole('button', {
      name: /confirm compatibility/i,
    });
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }
}