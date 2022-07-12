
<template>
  <div class="side-navi">
    <v-navigation-drawer app :value="show" v-click-outside="outside" v-bind:width="240">
      <div class="logo">
        <a href="/main">
          <img src="https://console.ncloud.com/public/img/console-logo-pub-ko.svg"></img>
        </a>
      </div>
      <v-list nav expand dense>
        <v-list-item-group v-model="model" mandatory>
          <div v-for="item in menus" :key="item.title">
            <v-list-item v-if="!item.items" :to="item.route" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon" size="20"></v-icon>
              </v-list-item-icon>

              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>

            <v-list-group v-else no-action :value="true">
              <template #activator>
                <v-list-item-icon>
                  <v-icon v-text="item.icon" size="20"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </template>

              <div v-for="item in item.items" :key="item.title">
                <v-list-group v-if="item.items" no-action sub-group>
                  <template #activator>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </template>

                  <v-list-item
                    v-for="item in item.items"
                    :key="item.title"
                    :to="item.route"
                    link
                    @click="changeTitle(item.title)"
                    @mouseenter="showIcon"
                    @mouseleave="hideIcon"
                  >
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item>
                </v-list-group>

                <v-list-item
                  v-else
                  :to="item.route"
                  link
                  @click="changeTitle(item.title)"
                >

                  <v-list-item-title>
                    {{ item.title }}
                    <v-badge
                      dot
                      color="error"
                      offset-y="-6px"
                      offset-x="-1px"
                      v-show="item.notice"
                    ></v-badge>
                  </v-list-item-title>
                </v-list-item>
              </div>
            </v-list-group>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: "LeftSideMenu",
  data: () => ({
    show: true,
    menus: [
      {
        id: 100,
        title: "관리",
        icon: "mdi-text-box-check-outline",
        items: [
          { id: 1001, title: "시스템 관리", route: "/system" },
          { id: 1002, title: "DBMS 관리", route: "/dynamic" },
          { id: 1003, title: "사용자 관리", route: "/dynamic" },
        ],
      },
      {
        id: 200,
        title: "보안 정책",
        icon: "mdi-server-security",
        items: [
          { id: 2001, title: "보안 정책 관리", route: "/test1" },
          { id: 2002, title: "통제 대상 관리", route: "/test2" },
          { id: 2003, title: "권한 검색 관리", route: "/test3" },
        ],
      },
      {
        id: 300,
        title: "운영",
        icon: "mdi-text-box-check-outline",
        items: [
          { id: 3001, title: "실시간 세션", route: "/test4" },
          { id: 3002, title: "경보 및 알람", route: "/test5" },
        ],
      },
      {
        id: 400,
        title: "감사 이력",
        icon: "mdi-newspaper",
        items: [
          { id: 4001, title: "DBMS 접속 이력", route: "/test6" },
          { id: 4002, title: "쿼리 수행 이력", route: "/dynamic" },
          { id: 4003, title: "차단 이력", route: "/dynamic" },
          { id: 4004, title: "관리자 이력", route: "/dynamic" },
        ],
      },
    ],
    model: 0,
  }),
  methods: {
    outside() {
      // if (
      //   !document.querySelector(
      //     ".v-navigation-drawer.v-navigation-drawer--open"
      //   )
      // ) {
      //   this.show = false;
      // }
    },
    showLeftNav() {
      this.show = !this.show;
    },
    changeTitle(title) {
      // this.$store.dispatch("setMenuTitle", title);
    },
  },
  created() {
    // this.$eventBus.$on(this.$eventCode.common.showNavigation, this.showLeftNav);
  },
  destroyed() {},
};
</script>
<style lang="scss" scoped>
.side-navi .v-navigation-drawer{
  background: #1e232e;

  .v-list-item__title, i.v-icon{
    color:white;
  }
  .v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle{
    font-size: 12px;
  }
  .logo a{
    height: 100px;
    text-align: center;
    background: #1e232e;
    display: block;
  }
  .logo a img{
    margin-top: 25px;
  }
}

</style>
