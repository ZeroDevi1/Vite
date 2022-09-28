import type { RouteRecordRaw } from "vue-router";

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: "/",
    alias: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@views/Home.vue"),
  },
];

export default routes;
