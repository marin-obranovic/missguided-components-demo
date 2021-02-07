import React from "react";

import { DiscountBox } from "./index";

export default {
  title: "Components/DiscountBox",
  component: DiscountBox,
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["left", "right", "center"],
      },
    },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DiscountBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "extra 10% student discount",
  description: "t&c's apply, Limited Time Only",
  backgroundColor: "#fff3f1",
  alignment: "center",
};
