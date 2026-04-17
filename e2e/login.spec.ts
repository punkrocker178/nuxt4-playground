import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('Login page', () => {
  test('renders the login form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('shows validation errors when submitted empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.emailInput.focus();
    await loginPage.submit();

    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('shows validation error for invalid email format', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.emailInput.fill('not-an-email');
    await loginPage.passwordInput.fill('password123');
    await loginPage.submit();

    await expect(page.getByText('Email must be valid')).toBeVisible();
  });

  test('shows validation error for short password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.emailInput.fill('user@example.com');
    await loginPage.passwordInput.fill('short');
    await loginPage.submit();

    await expect(page.getByText('Password must be at least 8 characters')).toBeVisible();
  });

  test('navigates to home on valid submission', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login('user@example.com', 'password123');

    await page.waitForURL('/');
    await expect(page).toHaveURL('/');
  });
});
