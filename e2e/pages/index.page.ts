import type { Page } from '@playwright/test';

export class IndexPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}