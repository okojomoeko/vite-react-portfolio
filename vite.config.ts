/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-react-portfolio/",
  build: {
    outDir: "./dist",
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    // setupFiles: "./src/test/setup.ts",
  },
});
