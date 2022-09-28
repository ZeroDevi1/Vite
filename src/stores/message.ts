import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    message: "Hello World",
    storeMessage: "Hello World storeRef",
    refMessage: "Hello World ref",
    // 添加了一个随机消息数组
    randomMessages: [] as string[],
    randomMessage2: <string[]>[]
  }),
  getters: {
    fullMessage: (state) => `The message is "${state.message}".`,
    // 这个 getter 返回了另外一个 getter 的结果
    emojiMessage(): string {
      return `🎉🎉🎉 ${this.fullMessage}`;
    },
    // 定义一个接收入参的函数作为返回值
    signedMessage: (state) => {
      return (name: string) => `${name} say: "The message is ${state.message}"`;
    }
  },
  actions: {
    // 异步更新 message
    async updateMessage(newMessage: string): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.message = newMessage;
          resolve("Async done.");
        }, 1000);
      });
    },
    // 同步更新 message
    updateMessageSync(newMessage: string): string {
      this.message = newMessage;
      return "Sync done.";
    }
  },
  // 实例化 store
  persist: true
});
