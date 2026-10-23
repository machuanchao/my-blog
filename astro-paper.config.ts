import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://xxx.vercel.app/", // 等Vercel部署好，把这里换成你的线上域名
    title: "我的随笔小站",
    description: "记录在奥克兰的徒步、海边、日常碎片与随想。",
    author: "你",
    profile: "",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Pacific/Auckland", // 奥克兰时区
    dir: "ltr",
  },
  nav: [
    { text: "文章", link: "/posts" },
    { text: "标签", link: "/tags" },
    { text: "关于", link: "/about" },
  ],
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false, // 关掉编辑按钮，你不需要
      url: "",
    },
    search: "pagefind",
  },
  socials: [
    // 不需要社交链接可以全部清空，删掉里面内容，写成 socials: [],
  ],
  shareLinks: [
    // 不需要分享按钮也可以清空 shareLinks: [],
  ],
});
