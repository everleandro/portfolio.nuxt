// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/styles/app.scss"],
  vite: {
    build: {
      sourcemap: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "assets/styles/_global.scss";`,
        },
      },
    },
  },
});
