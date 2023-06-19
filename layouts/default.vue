<template>
  <div>
    <div class="absolute width-screen px-8">
      <div class="d-flex justify-center float-sm-right mt-8">
        <p class="text-h5">Merge Calendar</p>

        <v-divider class="mx-3 border-opacity-100" inset vertical></v-divider>

        <v-btn
          density="comfortable"
          elevation="0"
          :ripple="false"
          icon
          @click="toggleTheme"
        >
          <font-awesome-icon
            :icon="
              theme.global.current.value.dark ? 'fas fa-moon' : 'fas fa-sun'
            "
            class="text-h3"
          />
        </v-btn>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "lightTheme"
          : "darkTheme"),
    };
  },
};
</script>
