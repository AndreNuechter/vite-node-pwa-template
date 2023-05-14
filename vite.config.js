import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    plugins: [ViteMinifyPlugin({})],
    build: {
        emptyOutDir: true,
        outDir: './docs',
        assetsDir: './',
        // we dont want hashes on the output files
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
        /* We dont want a hash on the worker file, so that the service worker, that handles the cache, remains constant and be updated on new builds.
        Otherwise a new worker would be registered on each build, which would lock the cache, as the old one, that handled the files of the previous build, remained active. */
        rollupOptions: {
            output: {
                entryFileNames: '[name].js'
            }
        }
    },
    define: {
        // these vars are used to bust the browser cache after a new build
        'process.env.appName': JSON.stringify('#NAME#'),
        'process.env.appVersion': JSON.stringify(Date.now()),
    }
});