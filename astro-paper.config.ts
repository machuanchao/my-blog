import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://my-blog-p6go.vercel.app/",
    title: "超哥博客",
    description: "记录在奥克兰的徒步、海边、日常碎片与随想。",
    author: "chuanchao",
    profile: "",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Pacific/Auckland",
    dir: "ltr",
  },
  posts: {
    perPage: 100,
    perIndex: 20,
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
