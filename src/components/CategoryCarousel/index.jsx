import React from "react";
import { MgImage } from "../MgImage/index.tsx";
import "./styles.scss";

export const CategoryCarousel = (props) => {
  const { items } = props;

  return (
    <div className="category-carousel">
      {items.map(({ imageSrc: { desktop, mobile }, text, url }) => {
        return (
          <a href={url}>
            <MgImage desktop={desktop} mobile={mobile} />
            <p>{text}</p>
          </a>
        );
      })}
    </div>
  );
};
