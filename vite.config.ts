import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { configDefaults } from "vitest/config";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    exclude: [...configDefaults.exclude, "e2e/*"],
    environment: "happy-dom",
  },
});
