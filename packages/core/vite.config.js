import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@vuecalendar/core/nav-transition.css': resolve(__dirname, './src/styles/nav-transition.css'),
            '@vuecalendar/core/tokens.css': resolve(__dirname, './src/styles/tokens.css'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'VueCalendarCore',
            fileName: (f) => `index.${f === 'es' ? 'es.js' : 'umd.cjs'}`,
        },
        rollupOptions: {
            external: ['vue', 'moment'],
            output: {
                globals: { vue: 'Vue', moment: 'moment' },
                exports: 'named',
            },
        },
    },
});

