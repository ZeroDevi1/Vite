import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import directive from "@plugins/directive";
import md5 from 'md5';
// 全局样式
import "@less/global.less";
// import mitt from "@libs/bus";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";


const app = createApp(App);
// 把插件的 API 挂载到全局变量到实例上
app.config.globalProperties.$md5 = md5;

// 自定义全局函数
app.config.globalProperties.$log = (msg: string) => {
  console.log(msg);
};
const pinia = createPinia() // 初始化pinia
pinia.use(piniaPluginPersistedstate)
app.use(pinia) // 启用 Pinia
  .use(router)
  // 自定义插件
  .use(directive, {
    highlight: {
      backgroundColor: "#ddd"
    }
  })
  // .use(mitt)
  .mount("#app");
