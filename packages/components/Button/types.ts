import type { Component, Ref } from 'vue';

export type ButtonType = 'primary' | 'success' | 'warning' | 'info' | 'danger';
export type ButtonSize = 'large' | 'default' | 'small';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    /** 设置 Button 的类型 */
    tag?: string | Component;
    /** 设置 Button 的禁用 */
    disabled?: boolean;
    /** 设置 Button 的尺寸 */
    size?: ButtonSize;
    /** 设置 Button 的类型 */
    type?: ButtonType;
    /** 设置 Button 的原生 type 值 */
    nativeType?: NativeType;
    /** 设置 Button 的loading */
    loading?: boolean;
    /** 设置 Button 的图标类型 */
    icon?: string;
    /** 设置 Button 是否圆角 */
    round?: boolean;
    /** 设置 Button 是否平 */
    plain?: boolean;
    /** 设置 Button 是否圆 */
    circle?: boolean;
    /** 设置 Button 是否自动聚焦 */
    autofocus?: boolean;
    /** 设置 Button 的loading图标 */
    loadingIcon?: string;
    /** 设置 Button 是否节流 */
    useThrottle?: boolean;
    /** 设置 Button 的持续时间 */
    throttleDuration?: number;
}

export interface ButtonEmits {
    /** 点击事件 */
    (e: 'click', value: MouseEvent): void;
    // click: (event: MouseEvent) => void;
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
}