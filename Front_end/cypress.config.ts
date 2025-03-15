import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200", // URL của ứng dụng Angular
    supportFile: "cypress/support/e2e.ts",
  },
});
