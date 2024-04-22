import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // 打包后去掉console，debugger
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    // 配置别名
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 开启局域网
    host: true,
    port: 1024,
    open: true
  }
});
