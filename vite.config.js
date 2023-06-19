import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        catalogue: './pages/catalogue.html',
        book: './pages/book.html',
        cart: './pages/cart.html',
        'import-assets': '/dynamic_to_static.js'
      }
    }
  }
})