import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/spotify-dg/", // This ensures all assets load correctly on GitHub Pages
});
