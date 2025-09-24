import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Required for React tests!
    globals: true,
    setupFiles: ['./src/setupTests.js'], // if you have such a file
  },
});