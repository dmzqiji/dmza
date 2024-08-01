import { createRouter, createWebHashHistory  } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/ColorPath"
    },
    {
      path: "/ColorPath",
      component: () => import("@/views/ColorPath/ColorPath.vue"),
    },
    {
      path: "/TextPath",
      component: () => import("@/views/TextPath/TextPath.vue"),
    },
    {
      path: "/ShaowPath",
      component: () => import("@/views/ShaowPath/ShaowPath.vue"),
    },
    {
      path: "/FilterPath",
      component: () => import("@/views/FilterPath/FilterPath.vue"),
    },
    {
      path: "/ThreedPath",
      component: () => import("@/views/ThreedPath/ThreedPath.vue"),
    },
  ]
})

export default router