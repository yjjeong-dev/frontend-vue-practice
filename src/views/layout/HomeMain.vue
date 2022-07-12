<template>
  <div>
    테스트
    <LeftSideMenu></LeftSideMenu>
     <router-view></router-view>
  </div>
</template>

<script>
import LeftSideMenu from '../component/LeftSideMenu.vue'

export default {
  name: "HomeMain",
  components: {
    LeftSideMenu
  },
};
</script>
