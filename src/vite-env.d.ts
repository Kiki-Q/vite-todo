import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import reactRefresh from '@vitejs/plugin-react-refresh'

function resolve(relativePath: string) {
  return path.resolve(__dirname, relativePath)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    eslintPlugin({
      fix: true,
      include: ['./src/**/*.[tj]s?(x)'],
    }),
    viteStylelint({
      include: './src/**/*.(less|scss|css)',
    }),
    styleImport({ resolves: [AntdResolve()] })
  ],
  css: {
    preprocessorOptions: {
        less: {
        // 支持内联 javascript
        javascriptEnabled: true,
        },
    }
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})
