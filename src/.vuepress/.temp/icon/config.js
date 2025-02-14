import { hasGlobalComponent } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress-theme-hope/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress-theme-hope/node_modules/.pnpm/@vueuse+core@12.5.0/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress-theme-hope/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
