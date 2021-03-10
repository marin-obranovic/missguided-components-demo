import React from "react";

import { AccordionItem } from "./index";

export default {
  title: "Components/AccordionItem",
  component: AccordionItem,
  argTypes: {},
};

const Template = (args) => (
  <AccordionItem {...args}>
    <p>This is text behind Accordion item</p>
  </AccordionItem>
);

export const Primary = Template.bind({});
Primary.args = {
  text: "What is the returns policy?",
};
