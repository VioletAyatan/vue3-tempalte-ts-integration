import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages'; //See: https://github.com/hannoeru/vite-plugin-pages
import AutoImport from 'unplugin-auto-import/vite'; //See: https://github.com/unplugin/unplugin-auto-import

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia'],
			dts: true,
		}),
		Pages(),
	],
});
