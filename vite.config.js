import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { _roots } from "@react-three/fiber";
import { Root, root } from "postcss";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    chunkSizeWarningLimit: 1500,
  },
  // base: import.meta.env === "production" ? "/portfolio/" : "/",
});
