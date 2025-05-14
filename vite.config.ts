import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://frace-feng.github.io/moment-demo/dist',
  plugins: [vue()],
})
