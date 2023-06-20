import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        catalogue: './pages/catalogue.html',
        book: './pages/book.html',
        cart: './pages/cart.html',
        about: './pages/about_us.html',
        'import-assets': '/path_to_image.js'
      }
    }
  }
})