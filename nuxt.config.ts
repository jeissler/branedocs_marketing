import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/styles/main.pcss"],
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxt/content"],
  svgo: {
    autoImportPath: false,
    defaultImport: "component",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "branedocs", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
