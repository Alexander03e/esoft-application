import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            "@/Assets": path.resolve(__dirname, '/src/assets'),
            "@/Pages": path.resolve(__dirname, '/src/pages'),
            "@/Shared": path.resolve(__dirname, '/src/shared'),
            "@/Store": path.resolve(__dirname, '/src/store')
        },
    },
});
