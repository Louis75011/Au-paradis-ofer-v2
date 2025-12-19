// apps/web/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: { plugins: [["babel-plugin-react-compiler"]] },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/checkout": {                 // ✅ pour votre endpoint /checkout/gite
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
