/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  test:{
     environment:'jsdom'
  },
  plugins: [vue()],
  // server: {
  //   port: 5173,
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:3000/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src")
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/var.scss";'
      }
    }
  }
})
