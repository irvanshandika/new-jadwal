import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

let faviconURL = "/favicon.svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [faviconURL],
      manifest: {
        theme_color: "#ffffff",
        icons: [
          {
            src: faviconURL,
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: faviconURL,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL("./src/components", import.meta.url)) },
      { find: "@images", replacement: fileURLToPath(new URL("./src/images", import.meta.url)) },
    ],
  },
  server: {
    port: 3000
  }
});
