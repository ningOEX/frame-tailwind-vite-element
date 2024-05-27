import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  build: {
    rollupOptions: {
      external: ['howler'],
      output: {
        globals: {
          howler: 'Howler',
        },
      },
    },
  },

  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },

  // 代理
  server: {
    proxy: {
      "/v1": {
        target: "https://api.pexels.com",
        changeOrigin: true,
      },
      "/api": {
        target: "https://api.52vmy.cn",
        changeOrigin: true,
      },
      "/Api": {
        target: "http://www.wudada.online",
        changeOrigin: true,
      },
      "/videos": {
        target: "https://api.pexels.com",
        changeOrigin: true,
      },
    }
  }
})
