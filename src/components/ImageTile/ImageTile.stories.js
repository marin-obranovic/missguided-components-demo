import React from "react";

import { ImageTile } from "./index";

export default {
  title: "Components/ImageTile",
  component: ImageTile,
  argTypes: {
    // url:
    // alignment: {
    //   control: {
    //     type: "select",
    //     options: ["left", "right", "center"],
    //   },
    // },
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ImageTile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "#",
  buttonText: "Shop Petite",
  title: "Petite",
  imageUrl: "https://i1.adis.ws/i/missguided/PETITE",
};
