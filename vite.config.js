import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  base: "/javascript_traversymedia_course_part2/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        404: resolve(__dirname, "src/404.html"),
        home: resolve(__dirname, "src/index.html"),
        oop_con_pro: resolve(
          __dirname,
          "src/oop_constructors_prototypes/index.html"
        ),
        oop_game_challege: resolve(
          __dirname,
          "src/oop_game_challege/index.html"
        ),
      },
    },
  },
});
