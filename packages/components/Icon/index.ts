/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-18 05:11:39
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 05:20:35
 * @FilePath: \diy-element\packages\components\Icon\index.ts
 * @Version: 
 * @Description: icon组件入口
 * 
 */
import Icon from "./Icon.vue";
import { withInstall } from '@diy-element/utils';


export const ClIcon = withInstall(Icon);
export * from './types'; 