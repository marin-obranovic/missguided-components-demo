import React from "react";

import { PageTitle } from "./index";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["left", "right", "center"],
      },
    },
  },
};

const Template = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "this is page title",
};
