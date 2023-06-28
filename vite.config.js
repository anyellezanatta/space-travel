import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        destination: resolve(__dirname, "src/destination/destination.html"),
        crew: resolve(__dirname, "src/crew/crew.html"),
        technology: resolve(__dirname, "src/technology/technology.html"),
        navigation: resolve(__dirname, "src/js/navigation.js"),
        tabs: resolve(__dirname, "src/js/tabs.js"),
      },
    },
  },
  base: "/space-travel/",
});
