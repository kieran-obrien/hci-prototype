import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Use root base during development to avoid cross-origin requests
  base: 'hci-prototype',
});
