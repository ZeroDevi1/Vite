import type { App } from "vue";

// 插件选项的类型
interface Options {
  // 文本高亮选项
  highlight?: {
    // 默认背景色
    backgroundColor: string;
  };
}

/**
 * 自定义指令插件
 * @description 保证插件单一职责，当前插件只用于添加自定义指令
 */
export default {
  install: (app: App, options?: Options) => {
    /**
     * 权限控制
     * @description 用于在功能按钮上绑定权限，没有权限时销毁或者隐藏
     * @tips 指令传入的值是管理员的组别 id
     * @example <div v-permission="1">按钮</div>
     */
    app.directive("permission", (el, binding) => {
      // 假设 1 是管理员组别的Id，则无需处理
      if (binding.value === 1) return;
      // 其他情况认为没有权限，需要隐藏掉 DOM 元素
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } else {
        el.style.display = "none";
      }
    });

    /**
     * 文本高亮
     * @description 用于在文本上绑定高亮颜色
     * @tips 指令传入的值是颜色值
     * @example <div v-highlight="'red'">文本</div>
     */
    app.directive("highlight", (el, binding) => {
      // 获取默认背景色
      let defaultColor = "unset";
      if (Object.prototype.toString.call(options) === "[object Object]"
        && options?.highlight?.backgroundColor) {
        defaultColor = options.highlight.backgroundColor;
      }
      // 设置背景色
      el.style.backgroundColor = typeof binding.value === "string" ? binding.value : defaultColor;
    });
  }
};
