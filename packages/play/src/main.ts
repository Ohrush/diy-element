/*
 * @Author: 陈超龙
 * @Date: 2024-06-16 01:20:55
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 06:09:01
 * @FilePath: \diy-element\packages\play\src\main.ts
 * @Version: 
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'
import ClElement from 'diy-element';
import '@diy-element/theme/index.css'


createApp(App).use(ClElement).mount('#app')
