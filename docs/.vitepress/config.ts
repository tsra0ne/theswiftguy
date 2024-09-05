import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "The Swift Guy",
  description: "Learn Swift, SwiftUI and UIKit",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  appearance: "dark",

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' }
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/tsr0ne/theswiftguy/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024 <a href="https://github.com/tsra0ne/theswiftguy">The Swift Guy</a>',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsra0ne/theswiftguy' }
    ],

    editLink: {
      pattern: 'https://github.com/tsra0ne/theswiftguy/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: "local",
    }
  }
})
