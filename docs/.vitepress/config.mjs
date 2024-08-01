import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lang: "en-US",
  title: "The Swift Guy",
  description: "Learn Swift, SwiftUI and UIKit",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  cleanUrls: true,
  appearance: "dark",
  lastUpdated: true,

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: "./schlogo.png",

    // Navbar
    nav: [
      {
        text: "Swift",
        items: [
          {
            text: "Swift Basics",
            link: "/swift/basics",
          },
          {
            text: "Basic Types",
            link: "/swift/basic-types",
          },
        ],
      },
      {
        text: "SwiftUI",
        items: [
          {
            text: "Introduction",
            link: "/swiftui/introduction",
          },
        ],
      },
      {
        text: "UIKit",
        items: [
          {
            text: "Integrating SwiftUI into UIKit",
            link: "/uikit/integrating-swiftui-into-uikit",
          },
        ],
      },
      {
        text: "Blog",
        link: "https://blog.theswiftguy.in/",
      },
    ],

    // Sidebar
    sidebar: {
      "/leetcode/": [
        {
          text: "Swift LeetCode",
          items: [
            {
              text: "27 Remove Element",
              link: "/leetcode/array/remove-element.md",
            },
          ],
        },
      ],

      "/swift/": [
        {
          text: "Swift",
          items: [
            {
              text: "Swift Basics",
              link: "/swift/basics",
            },
            {
              text: "Basic Types",
              link: "/swift/basic-types",
            },
            { text: "Developers", link: "/developers" },
          ],
        },
      ],

      "/swiftui/": [
        {
          text: "SwiftUI",
          items: [
            {
              text: "Introduction",
              link: "/swiftui/introduction",
            },
            { text: "Developers", link: "/developers" },
          ],
        },
      ],

      "/uikit/": [
        {
          text: "UIKit",
          items: [
            {
              text: "Integrating SwiftUI into UIKit",
              link: "/uikit/integrating-swiftui-into-uikit",
            },
            { text: "Developers", link: "/developers" },
          ],
        },
      ],

      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "Three", link: "/config/three" },
            { text: "Four", link: "/config/four" },
          ],
        },
      ],
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/tsra0ne/theswiftguy/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024 <a href="https://github.com/tsra0ne/theswiftguy">The Swift Guy</a>',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tsra0ne/theswiftguy" }
    ],

    editLink: {
      pattern: "https://github.com/tsra0ne/theswiftguy/blob/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
    },
  }
})
