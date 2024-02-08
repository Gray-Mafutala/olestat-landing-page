import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/olestat-landing-page",
  plugins: [react()],
});
