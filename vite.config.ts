/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/posts": {
        changeOrigin: true,
        target: "https://jsonplaceholder.typicode.com",
      },
    },
  },
  test: {
    environment: "jsdom",
    // setupFiles: ["./vitest.setup.ts"],
  },
});
