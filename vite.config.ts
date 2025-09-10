import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// @ts-ignore
// @ts-ignore
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    svgr({
      svgrOptions: {
        // SVGR options
      },
      include: '**/*.svg?react',
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@atoms': resolve(__dirname, 'src/packages/ui/atoms'),
      '@molecules': resolve(__dirname, 'src/packages/ui/molecules'),
      '@organisms': resolve(__dirname, 'src/packages/ui/organisms'),
      '@uiTypes': resolve(__dirname, 'src/packages/ui/types'),
      '@uiUtils': resolve(__dirname, 'src/packages/utils'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@tokens': resolve(__dirname, 'src/tokens'),
      '@helpers': resolve(__dirname, 'src/helpers'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ASIDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    cssModules: false,
  },
})
