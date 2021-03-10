import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    bold: {
      control: {
        type: "boolean",
      },
    },
    inverted: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Find my order",
  inverted: false,
  disabled: false,
  onAction: action("onAction"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Find my order",
  inverted: false,
  disabled: true,
  onAction: action("onAction"),
};

export const Inverted = Template.bind({});
Inverted.args = {
  text: "Find my order",
  inverted: true,
  disabled: false,
  onAction: action("onAction"),
};
