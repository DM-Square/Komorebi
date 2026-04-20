import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/Komorebi/" : "/",
    plugins: [react(), tailwindcss()],
    test: {
      environment: "jsdom",
      globals: true,
    },
  };
});
