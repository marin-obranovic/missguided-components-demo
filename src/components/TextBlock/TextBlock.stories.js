import React from "react";

import { TextBlock } from "./index";

export default {
  title: "Components/TextBlock",
  component: TextBlock,
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["left", "right", "center"],
      },
    },
    bold: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <TextBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "simply copy the code you want to apply and enter it at checkout...",
};
