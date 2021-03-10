import React from "react";

import { TextBanner } from "./index";

export default {
  title: "Components/TextBanner",
  component: TextBanner,
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
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <TextBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    "From April this year you will no longer receive a delivery note in your parcel. You can easily book your return online using your order number and email address or postcode.",
  subText: "Book your return online",
  subLink: "https://www.missguided.co.uk/help#help-returns-container",
  backgroundColor: "#FFA5B8",
};
