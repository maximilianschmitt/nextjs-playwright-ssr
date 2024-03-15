# nextjs-playwright-ssr

This repo demonstrates server-side request mocking when testing a Next.js application with Playwright.

## Usage

```
npm install
npm run test
```

## Important files

-   `app/page.tsx`: A sample page that displays my 3 latest GitHub repos
-   `app/page.test.ts` A test file that includes server-side mocking
-   `playwright.config.ts` The Playwright config using `playwright-ssr`
