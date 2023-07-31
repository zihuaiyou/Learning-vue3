import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: "@import './src/style/bem.scss';" //全局导入bem sass
      }
    }
  }
})
