import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://github.com/frace-feng/moment-demo/',
  plugins: [vue()],
})
