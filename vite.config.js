import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/JHS-v01/',
    plugins: [react()],
})
// Trigger build to verify GitHub Actions deployment
