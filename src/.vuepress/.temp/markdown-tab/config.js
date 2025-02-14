import { CodeTabs } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
