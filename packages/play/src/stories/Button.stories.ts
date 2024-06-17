/*
 * @Author: 陈超龙 <112032803@qq.com>
 * @Date: 2024-06-16 09:00:27
 * @LastEditors: 陈超龙
 * @LastEditTime: 2024-06-18 06:42:44
 * @FilePath: \diy-element\packages\play\src\stories\Button.stories.ts
 * @Version: 
 * @Description: 
 * 
 */
import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect } from '@storybook/test'

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
      `<cl-button v-bind="args">{{args.content}}</cl-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.tripleClick(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
}

export default meta;