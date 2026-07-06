import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const prerender = require('vite-plugin-prerender')
const PuppeteerRenderer = prerender.PuppeteerRenderer

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  base: '/amrohi-site/',
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/services', '/projects', '/journal', '/contact'],
      renderer: new PuppeteerRenderer({
        renderAfterTime: 5000,
        injectProperty: '__PRERENDER_INJECTED',
        inject: {}
      })
    })
  ],
  build: {
    target: 'chrome78'
  }
})
