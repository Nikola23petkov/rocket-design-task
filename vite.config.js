import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';


export default defineConfig({
  server: {
    open: '/',
  },
  plugins: [
    sassGlobImports(),
    handlebars({
		partialDirectory: resolve('./src/', 'partials'),
		reloadOnPartialChange: true
	})			
  ]
});
