/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 02:17:50
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 05:23:18
 * @FilePath: \diy-element\packages\components\Button\index.ts
 * @Version: 
 * @Description: Button组件入口
 * 
 */
import Button from './Button.vue'
import { withInstall } from '@diy-element/utils';

export const ClButton = withInstall(Button);
export * from './types'
export default withInstall(Button);