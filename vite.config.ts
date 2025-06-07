import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Giovanna Prasser | People Operations',
          description: 'People Operations professional specializing in HR, talent management, and organizational development. Explore my portfolio of HR initiatives and people operations strategies.',
          keywords: 'People Operations, HR, Talent Management, Organizational Development, Human Resources, HR Portfolio, People Ops',
          author: 'Giovanna Prasser',
          ogImage: '/android-chrome-512x512.png', 
          url: 'http://localhost:5173/',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
