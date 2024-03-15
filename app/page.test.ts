import { test, expect } from '@playwright/test'

test('displays latest repos from GitHub', async ({ page }) => {
	await page.goto('/')

	// Check that the correct title is displayed
	await expect(page.locator('h1')).toContainText('Latest repositories')

	// Check that we have exactly 3 repos
	await expect(page.locator('li')).toHaveCount(3)
	await expect(page.locator('li').nth(0)).toContainText('maximilianschmitt/nextjs-contact-form-app')
	await expect(page.locator('li').nth(1)).toContainText('maximilianschmitt/nextjs-contact-form-pages')
	await expect(page.locator('li').nth(2)).toContainText('maximilianschmitt/nextjs-contentful-typescript')
})
