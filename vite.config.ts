import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const { PUBLIC_URL } = env;

  return {
    base: PUBLIC_URL,
    server: {
      port: 3000,
      open: true,
    },
    plugins: [react(), svgr()],
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: "/src/",
        },
      ],
    },
    define: {
      __PUBLIC_URL__: JSON.stringify(PUBLIC_URL),
    },
  };
});
