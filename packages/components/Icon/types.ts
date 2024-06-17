/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-18 04:35:51
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 05:34:22
 * @FilePath: \diy-element\packages\components\Icon\types.ts
 * @Version: 
 * @Description: 
 * 
 */
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconProps {
    /**
     * 边缘
     */
    border?: boolean;
    /**
     * 是否固定宽
     */
    fixedWidth?: boolean;
    /**
     * 翻转方式
     */
    flip?: 'horizontal' | 'vertical' | 'both';
    /**
     * 图标
     */
    icon: string | object | Array<string> | IconDefinition;
    /**
     * 遮罩
     */
    mask?: string | object;
    /**
     * listItem
     */
    listItem?: boolean;
    /**
     * pull
     */
    pull?: 'left' | 'right';
    /**
     * pulse
     */
    pulse?: boolean;
    /**
     * 旋转角度
     */
    rotate?: 90 | 180 | 270 | '90' | '180' | '270';
    /**
     * 交换颜色
     */
    swapOpacity?: boolean;
    /**
     * 图标大小
     */
    size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
    /**
     * 是否旋转
     */
    spin?: boolean;
    /**
     * 翻转
     */
    transform?: object | string;
    /**
     * symnol
     */
    symnol?: boolean | string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 反转
     */
    inverse?: boolean;
    /**
     * bounce
     */
    bounce?: boolean;
    /**
     * shake
     */
    shake?: boolean;
    beat?: boolean;
    fade?: boolean;
    beatFade?: boolean;
    spinPulse?: boolean;
    spinReverse?: boolean;
    type?: "primary" | "success" | "warning" | "danger" | "info";
    color?: string;
}