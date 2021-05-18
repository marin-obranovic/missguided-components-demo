import React from "react";
import { action } from "@storybook/addon-actions";

import { MgButton } from "./index";

export default {
  title: "Components/Button",
  component: MgButton,
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
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <MgButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Find my order",
  inverted: false,
  disabled: false,
  fullWidth: true,
  onAction: action("onAction"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Find my order",
  inverted: false,
  disabled: true,
  fullWidth: false,
  onAction: action("onAction"),
};

export const Inverted = Template.bind({});
Inverted.args = {
  text: "Find my order",
  inverted: true,
  disabled: false,
  fullWidth: true,
  onAction: action("onAction"),
};
