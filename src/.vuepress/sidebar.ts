import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
   
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      expanded:false
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
