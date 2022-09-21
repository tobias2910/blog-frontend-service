// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'test/e2e/**/*.cy.{js,jsx,ts,tsx}',
    fixturesFolder: 'test/e2e/fixtures',
    supportFile: false,
    video: false,
    baseUrl: 'http://localhost:3000',
  },
})
