import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the output directory for the build
    outDir: 'dist',  // Default output folder, can be changed if needed
    rollupOptions: {
      input: {
        // Main app entry point
        app: path.resolve(__dirname, 'index.html'),
        // If you have a background script for the extension, you can include it here
        // background: path.resolve(__dirname, 'src/background.js'),
      },
      output: {
        // Customize the output file names if needed
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      }
    }
  },
  // Ensure Vite processes the `manifest.json` properly
  publicDir: 'public', // Ensure that files in `public` are copied as is
})
