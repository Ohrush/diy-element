/*
 * @Author: 陈超龙
 * @Date: 2024-06-16 02:24:27
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-16 03:07:17
 * @FilePath: \diy-element\packages\core\index.ts
 * @Version: 
 * @Description: 
 * 
 */
import {makeInstaller} from '@diy-element/utils';
import components from './components';
import '@diy-element/theme/index.css';
const installer = makeInstaller(components);

export * from '@diy-element/components';
export default installer;