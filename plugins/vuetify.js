import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@/assets/settings.scss";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#606C5D",
    secondary: "#F1C376",
    "button-primary": "#1F6E8C",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: "#606C5D",
    secondary: "#F1C376",
    "button-primary": "#1F6E8C",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "lightTheme",
      themes: {
        lightTheme,
        darkTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
