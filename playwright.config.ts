import { defineConfig, devices } from '@playwright/test'
import { WorkerConfigOptions } from 'playwright-ssr'

export default defineConfig<WorkerConfigOptions>({
	testMatch: '**/*.test.ts',
	use: {
		baseURL: 'http://127.0.0.1:3000',
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
