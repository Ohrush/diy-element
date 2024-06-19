/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 09:00:27
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-19 19:54:14
 * @FilePath: \diy-element\packages\play\src\stories\Button.stories.ts
 * @Version: 
 * @Description: 
 * 
 */
import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect, clearAllMocks } from '@storybook/test'

import { ClButton } from 'diy-element';

type Story = StoryObj<typeof ClButton> & { argTypes: ArgTypes };


const meta: Meta<typeof ClButton> = {
  title: "Example/Button",
  component: ClButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};


const container = (val: string) => `
<div style='margin: 5px;'>
  ${val}
</div>
`;


const set = (obj: any, key: string, value: any) => {
  if (obj[key] !== undefined) {
    obj[key] = value;
  } else {
    obj[key] = value;
  }
}

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
    useThrottle: false,
    throttleDuration: 500,
  },
  render: (args) => ({
    components: { ClButton },
    setup() {
      return { args };
    },
    template: container(
      `<cl-button data-testid="story-test-btn" v-bind="args">{{args.content}}</cl-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId("story-test-btn")

    await step("when useThrottle is true, the onClick should be a called once", async () => {
      set(args, 'useThrottle', true);
      await userEvent.tripleClick(btn);

      expect(args.onClick).toHaveBeenCalledOnce();
      clearAllMocks();
    })

    await step("when useThrottle is false, the onClick should be a called three times", async () => {
      set(args, 'useThrottle', false);
      await userEvent.tripleClick(btn);

      expect(args.onClick).toHaveBeenCalledTimes(3);
      clearAllMocks();
    })

    await step("when disabled is set to false, the onClick should should not be called", async () => {
      set(args, 'disabled', true);
      await userEvent.click(btn);

      expect(args.onClick).toHaveBeenCalledTimes(0);
      clearAllMocks();

      set(args, 'disabled', false);
      clearAllMocks();
    })

    await step("when loading is set to true, the onClick should not be called", async () => {
      set(args, 'loading', true);
      await userEvent.click(btn);

      expect(args.onClick).toHaveBeenCalledTimes(0);
      clearAllMocks();
      
      set(args, 'loading', false);
      clearAllMocks();
    })
    
    // await step("click button", async () => {
    //   set(args, 'useThrottle', true);
    //   await userEvent.tripleClick(btn);
    // });

    // expect(args.onClick).toHaveBeenCalledTimes(3);
  },
}

export const Autofocus: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    content: "Button",
    autofocus: true,
  },
  render: (args) => ({
    components: { ClButton },
    setup() {
      return { args };
    },
    template: container(
      `
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <cl-button data-testid="story-test-btn" v-bind="args">{{args.content}}</cl-button>`
    ),
  })
}

export default meta;