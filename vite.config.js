import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/test-task-tradeBlade/",
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/"),
    },
  },
});
