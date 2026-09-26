import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Stamped in at build time so the "last updated" badge always reflects
    // the most recent `npm run build` / deploy, with no manual editing.
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
});
