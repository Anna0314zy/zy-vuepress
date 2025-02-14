import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  {
    text: "前端",
    prefix: "/zh/posts/",
    children: [
      {
        text: "css",
        icon: "pen-to-square",
        prefix: "css/",
        children: [
          { text: "10个css高频面试题", icon: "pen-to-square", link: "1" },
          { text: "10个css高频面试题", icon: "pen-to-square", link: "css" },
          { text: "10个css高频面试题", icon: "pen-to-square", link: "readme" },
          { text: "10个css高频面试题", icon: "pen-to-square", link: "render" },
        ],
      }
    ],
  },
]);
