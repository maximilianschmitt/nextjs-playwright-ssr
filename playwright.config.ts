import { defineConfig, devices } from '@playwright/test'
import { WorkerConfigOptions } from 'playwright-ssr'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<WorkerConfigOptions>({
	testDir: '.',
	testMatch: '**/*.test.ts',
	use: {
		baseURL: 'http://127.0.0.1:3000',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				webServer: {
					command: 'npm',
					args: ['run', 'dev'],
					url: 'http://localhost:3000',
					cwd: __dirname,
				},
			},
		},
	],
})
