import CodeDemo from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.71_2u43drcq7hp37dtzq4nkbabkqm/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.71_2u43drcq7hp37dtzq4nkbabkqm/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
