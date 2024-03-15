import { test, expect } from 'playwright-ssr'

test('displays latest repos from GitHub', async ({ page, webServer }) => {
	await webServer.route('**/*', async (route) => {
		console.log('>>>>>>>>>>>>>>> hello request')
		console.log(route.request().method(), route.request().url())
		await route.continue()
		// await route.fulfill({
		// 	status: 200,
		// 	json: [
		// 		{ id: 1, full_name: 'maximilianschmitt/hello-world' },
		// 		{ id: 2, full_name: 'maximilianschmitt/maxschmitt.me' },
		// 		{ id: 3, full_name: 'maximilianschmitt/cakedesk' },
		// 	],
		// })
	})

	await page.goto('/')

	// Check that the correct title is displayed
	await expect(page.locator('h1')).toContainText('Latest repositories')

	// Check that we have exactly 3 repos
	await expect(page.locator('li')).toHaveCount(3)
	await expect(page.locator('li').nth(0)).toContainText('maximilianschmitt/nextjs-contact-form-app')
	await expect(page.locator('li').nth(1)).toContainText('maximilianschmitt/nextjs-contact-form-pages')
	await expect(page.locator('li').nth(2)).toContainText('maximilianschmitt/nextjs-contentful-typescript')
})
