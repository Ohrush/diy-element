<!--
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 07:13:17
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-16 07:13:22
 * @FilePath: \diy-element\note.md
 * @Version: 
 * @Description: 
 * 
-->
# Eric's Wiki: Eric UI Button Component

## Vitest Configuration for Button Component

```typescript
// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from './Button.vue';

describe('Button.vue', () => {
  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(Button, { props: { type } });
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(Button, { props: { size } });
      expect(wrapper.classes()).toContain(`er-button--${size}`);
    });
  });

  // Props: plain, round, circle, disabled, loading
  it.each([
    ['plain', 'is-plain'],
    ['round', 'is-round'],
    ['circle', 'is-circle'],
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading'],
  ])('should has the correct class when prop %s is set to true', (prop, className) => {
    const wrapper = mount(Button, { props: { [prop]: true } });
    expect(wrapper.classes()).toContain(className);
  });

  it('should has the correct native type attribute when native-type prop is set', () => {
    const wrapper = mount(Button, { props: { nativeType: 'submit' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect(wrapper.element.type).toBe('submit');
  });

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Button, { props: { tag: 'a' } });
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
  });

  // Events: click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});