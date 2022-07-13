<template>
  <div>
    <LeftSideMenu></LeftSideMenu>
    <slot></slot>
  </div>
</template>

<script>
import LeftSideMenu from "@/views/component/LeftSideMenu.vue";
export default {
  name: "MainLayout",
  components: {
    LeftSideMenu,
  },
};
</script>

<style></style>
