import React from "react";
import { MgCarousel } from "./index";

export default {
  title: "Components/MgCarousel",
  component: MgCarousel,
  argTypes: {},
};

const Template = (args) => <MgCarousel {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/New_season_17_05_desktop",
        mobile:
          "https://media.missguided.com/i/missguided/New_season_17_05_mobile",
      },
      title: "Title number one more incoming",
      button: "Button text",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/UK_UPTO70_13_05_desktop",
        mobile:
          "https://media.missguided.com/i/missguided/UK_UPTO70_13_05_mobile",
      },
      title: "Title number one more incoming",
      button: "Button text",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop: "https://media.missguided.com/i/missguided/Tops_17_05_desktop",
        mobile: "https://media.missguided.com/i/missguided/Tops_17_05_mobile",
      },
      title: "Title number one more incoming",
      button: "Button text",
    },
  ],
  rotationInterval: 5000,
  controls: true,
};
