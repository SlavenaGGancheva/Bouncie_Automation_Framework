import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly signInText: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly resetPasswordButton: Locator;
  readonly createAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signInText = page.getByText('Sign in to Bouncie', {
      exact: true,
    });

    this.emailInput = page.getByRole('textbox', {
      name: 'Email Address',
    });

    this.passwordInput = page.getByRole('textbox', {
      name: 'Password',
    });

    this.resetPasswordButton = page.getByRole('button', {
      name: 'Reset Password',
    });

    this.createAccountLink = page.getByRole('link', {
      name: 'Create Account',
    });
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.bouncie.app/login');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }
}