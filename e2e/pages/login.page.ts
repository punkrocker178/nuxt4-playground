import { type Page, type Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorAlert: Locator
  readonly passwordToggle: Locator

  constructor(page: Page) {
    this.page = page
    this.emailInput = page.locator('input[name="email"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.submitButton = page.getByTestId('login-submit')
    this.errorAlert = page.getByRole('alert')
    this.passwordToggle = page.getByTestId('password-toggle')
  }

  async goto() {
    await this.page.goto('/login')
  }

  async submit() {
    await this.submitButton.click()
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submit()
  }
}
