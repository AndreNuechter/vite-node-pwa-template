import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    plugins: [ViteMinifyPlugin({})],
    build: {
        emptyOutDir: true,
        outDir: './docs',
        assetsDir: './',
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].[ext]',
                assetFileNames: '[name].[ext]'
            }
        }
    },
    base: './',
    worker: {
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
    define: {
        'process.env.appName': JSON.stringify('#NAME#'),
        'process.env.appVersion': JSON.stringify(Date.now()),
    }
});