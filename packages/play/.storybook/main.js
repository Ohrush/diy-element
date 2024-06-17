/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 09:00:27
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-16 09:07:11
 * @FilePath: \diy-element\packages\play\.storybook\main.js
 * @Version: 
 * @Description: 
 * 
 */
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
