import { defineConfig } from '@playwright/test';
import { baseConfig } from './specs/e2e/playwright.base';

export default defineConfig({
  ...baseConfig,
  testDir: './specs/e2e',
  use: {
    ...baseConfig.use,
    // Use demo server or set own URL via BASE_URL env variable
    baseURL: process.env.BASE_URL || 'https://demo.realworld.show'
  },
});
