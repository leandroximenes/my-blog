import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      ssr: ['resources/css/app.css', 'resources/js/ssr.js'],
      refresh: true
    }),
    vue(),
    WindiCSS(),
  ]
})
