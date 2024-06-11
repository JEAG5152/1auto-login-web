import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
      'process.env': process.env
    },    
    plugins: [vue()],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
            { find: '#', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            // {
            //     find: /^~.+/,
            //     replacement: (val) => {
            //         return val.replace(/^~/, "");
            //     },
            // },
        ],
    },
    server: {
        port: 4083
    }
})
