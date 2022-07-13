import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "loginLayout",
    component: () => import("@/views/layout/LoginLayout.vue"),
    meta: {
      layout: "LoginLayout",
    },
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/component/MainPage.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/test1",
    name: "test1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test1" */ "../views/component/TestComponent1.vue"
      ),
  },
  {
    path: "/test2",
    name: "test2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test2" */ "../views/component/TestComponent2.vue"
      ),
  },
  {
    path: "/test3",
    name: "test3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test3" */ "../views/component/TestComponent3.vue"
      ),
  },
  {
    path: "/test4",
    name: "test4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test4" */ "../views/component/TestComponent4.vue"
      ),
  },
  {
    path: "/test5",
    name: "test5",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test5" */ "../views/component/TestComponent5.vue"
      ),
  },
  {
    path: "/test6",
    name: "test6",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test6" */ "../views/component/TestComponent6.vue"
      ),
  },
  {
    path: "/dynamic",
    name: "dynamic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "test6" */ "../views/component/DynamicComponent.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
