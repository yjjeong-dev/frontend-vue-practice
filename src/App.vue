<template>
  <v-app>
    <v-main>
      <component
        :is="
          this.$route.meta.layout === 'LoginLayout'
            ? 'LoginLayout'
            : 'MainLayout'
        "
      >
        <router-view></router-view>
      </component>
    </v-main>
  </v-app>
</template>
<script>
import LoginLayout from "./views/layout/LoginLayout.vue";
import MainLayout from "./views/layout/MainLayout.vue";
export default {
  name: "App",
  components: {
    LoginLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "../node_modules/scss-reset/src/scss/_reset.scss";
</style>
