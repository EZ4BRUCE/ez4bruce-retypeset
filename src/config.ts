import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    // site title
    title: '弘毅求索',
    // site subtitle
    subtitle: '不可急于求成，但要大胆尝试',
    // site description
    description: '弘毅求索-布鲁斯猫的中文博客，讨论编程、投资、生活等话题，分享个人经验和见解。',
    // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
    i18nTitle: false, // true, false
    // author name
    author: '布鲁斯猫',
    // site url
    url: 'https://www.ez4bruce.com',
    // favicon url
    // recommended formats: svg, png or ico
    favicon: '/icons/bruce-working.png', // or https://example.com/favicon.svg
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    // default theme mode
    mode: 'light', // light, dark, auto
    // 米黄
    // light: {
    //   primary: 'oklch(0.25 0 0)',
    //   secondary: 'oklch(0.41 0 0)',
    //   background: 'oklch(0.95 0.0237 59.39)',
    //   highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)',
    // },
    // dark: {
    //   primary: 'oklch(0.93 0.019 59.39)',
    //   secondary: 'oklch(0.80 0.017 59.39)',
    //   background: 'oklch(0.23 0 0)',
    //   highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)',
    // },
    light: {
      // primary color
      // used for title, hover, etc
      // oklch color picker: https://oklch.com/
      primary: 'oklch(25% 0.005 298)',
      // secondary color
      // used for post text
      secondary: 'oklch(40% 0.005 298)',
      // background color
      background: 'oklch(96% 0.005 298)',
      // highlight color
      // used for navbar, selected text, etc
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)', // rgba(255,235,0,0.5)
    },
    dark: {
      // primary color
      primary: 'oklch(92% 0.005 298)',
      // secondary color
      secondary: 'oklch(77% 0.005 298)',
      // background color
      background: 'oklch(22% 0.005 298)',
      // highlight color
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)', // rgba(255,235,0,0.2)
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    // default language
    locale: 'zh', // de, en, es, fr, ja, ko, pl, pt, ru, zh, zh-tw
    // more languages
    // not fill in the locale code above again, can be an empty array []
    moreLocales: [], // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
    // font styles for post text
    fontStyle: 'sans', // sans, serif
    // date format for posts
    dateFormat: 'YYYY-MM-DD', // YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    // table of contents for posts
    toc: true, // true, false
    // KaTeX math rendering
    katex: true, // true, false
    // reduce motion
    reduceMotion: false, // true, false
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    // enable comment system
    enabled: true, // true, false
    // giscus
    // https://giscus.app/
    giscus: {
      repo: 'EZ4BRUCE/blog',
      repoId: 'R_kgDOPLzDSg',
      category: 'General',
      categoryId: 'DIC_kwDOPLzDSs4CtD3d',
      mapping: 'title',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
    },
    // twikoo
    // https://twikoo.js.org/
    // twikoo: {
    //   envId: '',
    //   // version: frontend version can be changed in package.json
    // },
    // waline
    // https://waline.js.org/en/
    // waline: {
    //   // server url
    //   serverURL: 'https://retypeset-comment.radishzz.cc',
    //   // emoji url
    //   emoji: [
    //     'https://unpkg.com/@waline/emojis@1.2.0/tw-emoji',
    //     // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
    //     // more emojis: https://waline.js.org/en/guide/features/emoji.html
    //   ],
    //   // gif search
    //   search: false, // true, false
    //   // image uploader
    //   imageUploader: false, // true, false
    // },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  // seo: {
  //   // @twitter ID
  //   twitterID: '@radishzz_',
  //   // site verification
  //   verification: {
  //     // google search console
  //     // https://search.google.com/search-console
  //     google: 'AUCrz5F1e5qbnmKKDXl2Sf8u6y0kOpEO1wLs6HMMmlM',
  //     // bing webmaster tools
  //     // https://www.bing.com/webmasters
  //     bing: '64708CD514011A7965C84DDE1D169F87',
  //     // yandex webmaster
  //     // https://webmaster.yandex.com
  //     yandex: '',
  //     // baidu search
  //     // https://ziyuan.baidu.com
  //     baidu: '',
  //   },
  //   // google analytics
  //   // https://analytics.google.com
  //   googleAnalyticsID: '',
  //   // umami analytics
  //   // https://cloud.umami.is
  //   umamiAnalyticsID: '520af332-bfb7-4e7c-9386-5f273ee3d697',
  //   // follow verification
  //   // https://follow.is/
  //   follow: {
  //     // feed ID
  //     feedID: '',
  //     // user ID
  //     userID: '',
  //   },
  //   // apiflash access key
  //   // automatically generate website screenshots for open graph images
  //   // get your access key at: https://apiflash.com/
  //   apiflashKey: '',
  // },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    // social links
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/EZ4BRUCE',
      },
      {
        name: 'Email',
        url: 'ez4bruce@gmail.com',
      },
      {
        name: 'X',
        url: 'https://x.com/ez4bruce0',
      },
    ],
    // year of website start
    startYear: 2025,
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  // preload: {
  //   // image hosting url
  //   // optimize remote images in Markdown files to avoid cumulative layout shift
  //   imageHostURL: 'image.radishzz.cc',
  //   // custom google analytics js
  //   // for users who route analytics javascript to a customized domain
  //   // see https://gist.github.com/xiaopc/0602f06ca465d76bd9efd3dda9393738
  //   customGoogleAnalyticsJS: '',
  //   // custom umami analytics js
  //   // for users who deploy umami on their own, or route analytics javascript to a customized domain
  //   // see https://github.com/umami-software/umami/discussions/1026
  //   customUmamiAnalyticsJS: 'https://js.radishzz.cc/jquery.min.js',
  // },
  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export default themeConfig

export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
