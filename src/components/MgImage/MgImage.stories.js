import React from "react";
import { MgImage } from "./index";

export default {
  title: "Components/MgImage",
  component: MgImage,
  argTypes: {},
};

const Template = (args) => <MgImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  desktop: "https://media.missguided.com/i/missguided/UK_UPTO70_13_05_desktop",
  mobile: "https://media.missguided.com/i/missguided/UK_UPTO70_13_05_mobile",
};

// export const Disabled = Template.bind({});
// Disabled.args = {
//   text: "Find my order",
//   inverted: false,
//   disabled: true,
//   fullWidth: false,
//   onAction: action("onAction"),
// };

// export const Inverted = Template.bind({});
// Inverted.args = {
//   text: "Find my order",
//   inverted: true,
//   disabled: false,
//   fullWidth: true,
//   onAction: action("onAction"),
// };
