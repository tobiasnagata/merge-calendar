<template>
  <div class="container">
    <client-only>
      <Vue3Lottie :animationData="lottie_json" :width="500" :height="500" />
    </client-only>
  </div>
</template>

<script>
import lottie_json from "~/assets/json/lottie_error.json";
export default {
  data() {
    return {
      lottie_json,
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>