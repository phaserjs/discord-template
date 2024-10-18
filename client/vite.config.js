import { defineConfig } from 'vite';

// https://vitejs.dev/config/

export default ({ mode }) => {
  return defineConfig({
    envDir: '../',
    server: {
      proxy: {
        '/.proxy/assets': {
          target: 'http://localhost:5173/assets',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/.proxy\/assets/, ''),
        },
        '/.proxy/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          ws: true,
          rewrite: (path) => path.replace(/^\/\.proxy/, ''),
        },
      },
      hmr: {
        clientPort: 5173,
      },
    },
  });
};
