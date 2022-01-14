import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "styles/theme";
import Button from "components/_atoms/Button";

export default {
  title: "Atomics/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "default",
};
export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
