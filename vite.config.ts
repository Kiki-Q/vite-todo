import { defineConfig } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
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
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})