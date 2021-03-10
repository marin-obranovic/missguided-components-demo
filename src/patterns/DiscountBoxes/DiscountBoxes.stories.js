import React from "react";

import { DiscountBoxes } from "./index";

export default {
  title: "Patterns/DiscountBoxes",
  component: DiscountBoxes,
  argTypes: {},
};

const Template = (_args) => (
  <DiscountBoxes
    codes={[
      {
        text: "extra 10% student discount",
        description: "t&c's apply, Limited Time Only",
      },
      {
        text: "extra 10% student discount 2",
        description: "t&c's apply, Limited Time Only",
      },
      {
        text: "extra 10% student discount 3",
        description: "t&c's apply, Limited Time Only",
      },
    ]}
  />
);

export const Primary = Template.bind({});
