<!--
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 02:15:03
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 06:38:19
 * @FilePath: \diy-element\packages\components\Button\Button.vue
 * @Version: 
 * @Description: 
 * 
-->
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { throttle } from 'lodash-es';
import ClIcon from '../Icon/Icon.vue';

defineOptions({
  name: 'ClButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: false,
  throttleDuration: 500,
});

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const emits = defineEmits<ButtonEmits>();

const iconStyle = computed(() => {
  console.log(slots.default)
  return {
    marginRight: slots.default ? "6px" : "0px",
  }
});

const handleBtnClick = (e: MouseEvent) => {
  emits('click', e)
};
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false});

defineExpose<ButtonInstance>({
  ref: _ref,
})

</script>

<template>
  <component :is="tag" ref="_ref" :autofocus="autofocus" :type="tag === 'button' ? nativeType : void 0"
    class="cl-button" :disabled="disabled || loading ? true : void 0" :class="{
      [`cl-button--${type}`]: type,
      [`cl-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <template v-if="loading">
      <slot name="loading">
        <cl-icon class="loading-icon" :style="iconStyle" :icon="loadingIcon ?? 'spinner'" size="1x" spin />
      </slot>
    </template>
    <cl-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle" />
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>