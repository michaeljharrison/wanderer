import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePluginFonts } from 'vite-plugin-fonts'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginFonts({
    google: {
      families: ['Arvo']
    },
    custom: {
      families: [{
        name: 'Colus',
        local: 'Colus',
        src: './src/assets/fonts/*.ttf'
      }],
      display: 'auto',
      preload: true,
    }
  }),
  svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
