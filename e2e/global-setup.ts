import { chromium } from '@playwright/test'

export default async function globalSetup() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  try {
    const response = await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })

    if (!response || !response.ok()) {
      throw new Error(`Server responded with status ${response?.status()}`)
    }
  } catch (error) {
    throw new Error(`Failed to connect to preview server: ${error}`)
  } finally {
    await browser.close()
  }
}
