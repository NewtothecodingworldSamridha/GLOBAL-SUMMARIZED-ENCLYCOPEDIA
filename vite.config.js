import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/world-knowledge-encyclopedia/'  // Replace with your repo name
})
