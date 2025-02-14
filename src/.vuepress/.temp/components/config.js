import { hasGlobalComponent } from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_2u43drcq7hp37dtzq4nkbabkqm/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.71_2u43drcq7hp37dtzq4nkbabkqm/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/aimwhy/Desktop/工作文档/zy/vuepress/zy-vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.74_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
