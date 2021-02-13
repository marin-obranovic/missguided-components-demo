import React from "react";

import { DiscountBoxes } from "./index";

export default {
  title: "Patters/DiscountBoxes",
  component: DiscountBoxes,
  argTypes: {},
};

const Template = (args) => <DiscountBoxes {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  codes: [
    {
      text: "extra 10% student discount",
      description: "t&c's apply, Limited Time Only",
      backgroundColor: "#fff3f1",
      alignment: "center",
    },
    {
      text: "extra 10% student discount 2",
      description: "t&c's apply, Limited Time Only",
      backgroundColor: "#fff3f1",
      alignment: "center",
    },
    {
      text: "extra 10% student discount 3",
      description: "t&c's apply, Limited Time Only",
      backgroundColor: "#fff3f1",
      alignment: "center",
    },
  ],
};
