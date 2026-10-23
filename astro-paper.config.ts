import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://xxx.vercel.app/",
    title: "我的随笔小站",
    description: "记录在奥克兰的徒步、海边、日常碎片与随想。",
    author: "你",
    profile: "",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Pacific/Auckland",
    dir: "ltr",
  },
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
      enabled: false
    },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [],
});
