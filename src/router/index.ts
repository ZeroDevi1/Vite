import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { websiteTitle } from "@/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// 调用导航守卫的钩子函数
router.beforeEach((to, from) => {
  // 设置页面标题
  const TITLE: string = to.meta.title as string;
  console.log('Title:',TITLE);
  document.title = TITLE || "默认Title";
});

router.afterEach((to) => {
  const { title } = to.meta;
  document.title = title ? `${title} - ${websiteTitle}` : websiteTitle;
});

export default router;
