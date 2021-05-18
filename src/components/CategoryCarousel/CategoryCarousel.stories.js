import React from "react";
import { CategoryCarousel } from "./index";

export default {
  title: "Components/CategoryCarousel",
  component: CategoryCarousel,
  argTypes: {},
};

const Template = (args) => <CategoryCarousel {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/Dresses_17_05_categories",
        mobile:
          "https://media.missguided.com/i/missguided/Dresses_17_05_categories",
      },
      text: "dresses",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/Tops_17_05_categories",
        mobile:
          "https://media.missguided.com/i/missguided/Tops_17_05_categories",
      },
      text: "Tops",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/Trousers_17_05_categories",
        mobile:
          "https://media.missguided.com/i/missguided/Trousers_17_05_categories",
      },
      text: "Trousers",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/Jeans_17_05_categories",
        mobile:
          "https://media.missguided.com/i/missguided/Jeans_17_05_categories",
      },
      text: "jeans",
    },
    {
      url: "#dude",
      imageSrc: {
        desktop:
          "https://media.missguided.com/i/missguided/Summer_17_05_categories",
        mobile:
          "https://media.missguided.com/i/missguided/Summer_17_05_categories",
      },
      text: "summer outfits",
    },
  ],
};
