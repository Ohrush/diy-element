/*
 * @Author: 陈超龙
 * @Date: 2024-06-16 02:24:27
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 06:08:48
 * @FilePath: \diy-element\packages\core\index.ts
 * @Version: 
 * @Description: 
 * 
 */
import { makeInstaller } from '@diy-element/utils';
import components from './components';
import '@diy-element/theme/index.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas);
const installer = makeInstaller(components);

export * from '@diy-element/components';
export * from '@diy-element/theme/index.css';
export default installer;