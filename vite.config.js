import { defineConfig } from "vite"
import vitePugPlugin from "vite-plugin-pug-transformer"

export default defineConfig({
	css: {
		devSourcemap: true
	},
	plugins: [vitePugPlugin()]
})