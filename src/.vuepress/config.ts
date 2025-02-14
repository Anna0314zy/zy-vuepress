import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  base: "/zy-vuepress/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "我的博客",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme
  // Enable it with pwa
  // shouldPrefetch: false,
});
