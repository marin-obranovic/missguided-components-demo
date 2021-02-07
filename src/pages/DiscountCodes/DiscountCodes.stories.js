import React from "react";

import { DiscountCodes } from "./index";

export default {
  title: "Pages/DiscountCodes",
  component: DiscountCodes,
  argTypes: {},
};

const Template = (args) => <DiscountCodes {...args} />;

export const Primary = Template.bind({});
