<!--
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-18 04:54:17
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 06:01:48
 * @FilePath: \diy-element\packages\components\Icon\Icon.vue
 * @Version: 
 * @Description: 
 * 
-->
<script setup lang="ts">
import type { IconProps } from './types';
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';
import { computed } from 'vue';

defineOptions({
    name: 'ClIcon',
    inheritAttrs: false,
})

const props = defineProps<IconProps>();

const filterProps = computed(() => {
    return omit(props, ['type', 'color']);
});

const customStyle = computed(() => ({color: props.color ?? void 0}));


</script>

<template>
    <i class="cl-icon" :class="{[`cl-icon-${type}`] : type}" :style="customStyle" v-bind="$attrs">
        <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
    </i>
</template>

<style scoped>
@import './style.css';
</style>
