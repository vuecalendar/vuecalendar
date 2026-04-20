import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function injectCssPlugin() {
    return {
        name: 'inject-core-css-into-js',
        apply: 'build',
        enforce: 'post',
        generateBundle(_options, bundle) {
            const cssChunks = Object.keys(bundle).filter((key) => key.endsWith('.css'));
            const jsChunks = Object.keys(bundle).filter((key) => key.endsWith('.js') || key.endsWith('.cjs'));

            if (!cssChunks.length || !jsChunks.length) {
                return;
            }

            const cssCode = cssChunks
                .map((key) => bundle[key]?.source)
                .filter(Boolean)
                .join('\n');

            if (!cssCode) {
                return;
            }

            const inject = `(function(){if(typeof document==='undefined')return;var s=document.createElement('style');s.setAttribute('data-vuecalendar-core','');s.textContent=${JSON.stringify(cssCode)};document.head.appendChild(s);}());\n`;

            for (const key of jsChunks) {
                bundle[key].code = inject + bundle[key].code;
            }

            cssChunks.forEach((key) => delete bundle[key]);
        },
    };
}

export default defineConfig({
    plugins: [vue(), injectCssPlugin()],
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

