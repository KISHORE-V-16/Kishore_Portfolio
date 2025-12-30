import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Fix for resolving paths in ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Points "@" to "client/src" for imports
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  // Tells Vite your frontend source code is in "client"
  root: path.resolve(__dirname, "client"),
  build: {
    // Outputs build files to "dist" in the project root (Vercel standard)
    outDir: path.resolve(__dirname, "dist"), 
    emptyOutDir: true,
  },
});