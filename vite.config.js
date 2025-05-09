import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(), svgLoader()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
