import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Fix React Router refresh issue in dev
    historyApiFallback: true
  },
  build: {
    // Optional: ensure SPA routing works in production
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  }
})
