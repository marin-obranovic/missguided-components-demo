import React from "react";
import { Carousel } from "react-bootstrap";
import { MgImage } from "../MgImage/index.tsx";
import { MgButton } from "../Button/index.tsx";
import "./styles.scss";

export const MgCarousel = (Props) => {
  const { items = [], rotationInterval = null, controls = false } = Props;

  return (
    <Carousel fade controls={controls} interval={rotationInterval}>
      {items.map(
        ({ url, imageSrc: { mobile, desktop }, title, subtitle, button }) => (
          <Carousel.Item>
            <a href={url}>
              <MgImage desktop={desktop} mobile={mobile} />
              <Carousel.Caption>
                {title && <h4>{title}</h4>}
                {button && <MgButton text={button} fullWidth={false} />}
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
};
