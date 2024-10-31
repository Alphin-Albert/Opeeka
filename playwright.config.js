// // @ts-check
// const { defineConfig, devices } = require('@playwright/test');

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// module.exports = defineConfig({
//   testDir: './tests/WEB',
//   // maximum time
//   timeout: 100000,
//   expect: {
//     timeout: 8000,
//   },
//   /* Run tests in files in parallel */
//   fullyParallel: false,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: [
//     ['list'],
//     ['allure-playwright']
//   ],
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     headless: true,
//     trace: 'on-first-retry',
//     video: 'on-first-retry',
//   },
//   projects: [
//     {
//       name: 'stage',
//       use: {
//         baseURL: 'https://stage-login.p-cis.com/',
//         ...devices['Desktop Chrome'],
//         channel: 'chrome',
//       },
//     },
//     {
//       name: 'QA',
//       use: {
//         baseURL: 'https://qa-login.p-cis.com/',
//         ...devices['Desktop Chrome'],
//         channel: 'chrome',
//       },
//     },
//   ],
// });



// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

const LT_USERNAME = process.env.LT_USERNAME || 'alphin.albert';
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || 'MoW0fsOEPaWGiKnpPht4VWdWPIoApVpym6ynFI92ZrE6jVa3OM'; // Replace with your default access key if needed

// Define LambdaTest capabilities
const capabilities = {
  browserName: 'chrome',
  browserVersion: 'latest',
  platform: 'Windows 10', // You can modify this based on what OS you want to test
  name: 'Playwright LambdaTest Example',
  build: 'playwright-build-1',
  user: LT_USERNAME,
  accessKey: LT_ACCESS_KEY,
  console: true,  // To capture console logs
  network: true,  // To capture network logs
};

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests/WEB',
  // Maximum time for each test
  timeout: 100000,
  expect: {
    timeout: 8000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],
  use: {
    headless: true,
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'stage',
      use: {
        baseURL: 'https://stage-login.p-cis.com/',
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        },
      },
    },
    {
      name: 'QA',
      use: {
        baseURL: 'https://qa-login.p-cis.com/',
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        },
      },
    },
  ],
});

