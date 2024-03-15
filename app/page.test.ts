import { test, expect } from 'playwright-ssr'

test('displays latest repos from GitHub', async ({ page, webServer }) => {
	// Intercept the request to https://api.github.com/users/maximilianschmitt/repos?sort=updated
	// and reply with our own list of repos
	await webServer.route('https://api.github.com/users/*/repos*', async (route) => {
		await route.fulfill({
			status: 200,
			json: [
				{ id: 1, full_name: 'maximilianschmitt/hello-world' },
				{ id: 2, full_name: 'maximilianschmitt/maxschmitt.me' },
				{ id: 3, full_name: 'maximilianschmitt/cakedesk' },
			],
		})
	})

	// Visit the homepage
	await page.goto('/')

	// Check that the correct title is displayed
	await expect(page.locator('h1')).toContainText('Latest repositories')

	// Check that we have exactly 3 repos
	await expect(page.locator('li')).toHaveCount(3)
	await expect(page.locator('li').nth(0)).toContainText('maximilianschmitt/hello-world')
	await expect(page.locator('li').nth(1)).toContainText('maximilianschmitt/maxschmitt.me')
	await expect(page.locator('li').nth(2)).toContainText('maximilianschmitt/cakedesk')
})
