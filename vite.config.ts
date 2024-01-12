import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
 build: {
   sourcemap: true,
   rollupOptions: {
     input: "src/colored-chat-borders.ts",
     output: {
       entryFileNames: "colored-chat-borders.js",
       format: "es",
     },
   },
 },
 plugins: [
   copy({
     targets: [{ src: "src/templates", dest: "dist" }],
     hook: "writeBundle",
   }),
 ],
});
