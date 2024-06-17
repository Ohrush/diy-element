// // vitest.config.ts配置
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    // https://vitest.dev/config/
    plugins: [vue(),vueJsx()],
    test: {
        globals: true,
        environment: 'jsdom',
    }
})
