import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

    /* Maximum time one test can run for.       => this block is copied from playwright.config.js */ 
    timeout: 30 * 1000,      // 30 seconds
    expect: { 
      /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in 'await expect(locator).toHaveText();'
       */
      timeout: 5000},                              // 19/02/2024 changed from 40 to 5; assertions shouldn't take more than that

      globalTimeout: 50 * 60 * 1000,               // 27/02/2024: Global timeout to 50 minutes
 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,  // workers a CI i en local. Undefined (en local a la config. per defecte) és tants com doni la CPU
  workers: process.env.CI ? 1 : 1,          // this way it'll use only one worker in local, so no  --workers=1 flag needed
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',            /*commented to avoid keeping opening new tabs to the browser
  // reporter: 'list',               // Choose a reporter: minimalist dot, concise line or detailed list. See reporters for more information.
   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    headless: true,  //use --headed flag on the CLI to get headed tests
     baseURL: 'http://127.0.0.1:3000',    
     screenshot: 'on',
    //  video: 'on',
    //  viewport: { width: 1920, height: 1080 },
    //  size: {width:1920, height: 1080},    
    
    // ### next section is a workaround for the bug https://github.com/microsoft/playwright/issues/7246 about video resolution.

    video: {
      mode: 'off',                        // 16/02/2024 setting video off to see if it helps with the GitHub runs. It improved a lot the local runs.
      size: {
        width: 1920,
        height: 1080,
      }
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',             
    // trace: 'off'          // 19/02/2024 setting the trace off until needed to improve performance
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },      
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});