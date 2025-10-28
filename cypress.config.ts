import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: false,
    video: true,
    screenshotOnRunFailure: true,
    retries: 1
  }
});
