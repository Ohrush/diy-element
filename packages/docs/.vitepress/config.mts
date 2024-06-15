/*
 * @Author: 陈超龙
 * @Date: 2024-06-16 02:55:12
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-16 03:02:11
 * @FilePath: \diy-element\packages\docs\.vitepress\config.mts
 * @Version: 
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cl-Element",
  description: "个人diy组件库",
  base: '/diy-element/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
