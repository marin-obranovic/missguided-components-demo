import React from "react";
import "./styles.scss";

const addImageTransformations = (image, width, type, webp) => {
  let extension = image.split(".").pop();

  if (image.includes("https://media.missguided.com/i/missguided")) {
    if (type === "category")
      return webp === true
        ? `${image}.webp?w=${width}&fmt.jpeg.interlaced=true`
        : `${image}?w=${width}&fmt.jpeg.interlaced=true`;

    if (webp === true)
      return `${image}.webp?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`;

    if (webp === true)
      return `${image}.webp?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`;

    return `${image}?bg=rgb(254,245,240)&w=${width}&qlt=60&fmt.jpeg.interlaced=true&upscale=false`;
  }

  if (image.includes("https://media.missguided.co.uk")) {
    let transformImage = (transformation) => {
      return `${image.slice(0, 44)}${transformation}${image.slice(44)}`;
    };
    switch (extension) {
      case "jpeg":
      case "jpg": {
        return type === "lower"
          ? transformImage(`w_600,q_70/`)
          : transformImage(`w_${width},q_70/`);
      }
      case "png": {
        return type === "lower"
          ? transformImage(`w_600,q_70,b_rgb:FEF5F0/`).slice(0, -3) + "jpg"
          : transformImage(`w_${width},q_70/`).slice(0, -3) + "jpg";
      }
      case "gif": {
        return type === "lower"
          ? transformImage(`q_30,w_300/`)
          : transformImage(`q_30,w_300/`);
      }
      default: {
        return "";
      }
    }
  }
  return image;
};

export const MgImage = ({ desktop, mobile }) => {
  let mobileBreakPoints = [300, 402, 491, 569, 639, 711, 756, 767];
  let desktopBreakPoints = [
    768,
    937,
    1086,
    1226,
    1353,
    1474,
    1582,
    1686,
    1792,
    1905,
  ];

  const mobileImage = mobile ? mobile : desktop;

  if (!desktop || !mobileImage) {
    return <img />;
  }

  return (
    <picture className="mg-image">
      <source
        type="image/webp"
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset={mobileBreakPoints
          .map((width) => {
            return `${addImageTransformations(
              mobileImage,
              width,
              true
            )} ${width}w`;
          })
          .join(",\n              ")}
      />

      <source
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset={mobileBreakPoints
          .map((width) => {
            return `${addImageTransformations(mobileImage, width)} ${width}w`;
          })
          .join(",\n              ")}
      />

      <source
        type="image/webp"
        sizes="(min-width: 768px) 100vw"
        data-srcset={desktopBreakPoints
          .map((width) => {
            return `${addImageTransformations(
              desktop,
              width,
              "main",
              true
            )} ${width}w`;
          })
          .join(",\n              ")}
        alt="image failed"
      />

      <source
        media="(min-width: 768px)"
        sizes="(min-width: 768px) 100vw"
        data-srcset={desktopBreakPoints
          .map((width) => {
            return `${addImageTransformations(desktop, width)} ${width}w`;
          })
          .join(",\n              ")}
        alt="image failed"
      />

      <img
        className="lazyload"
        data-expand="-50"
        data-src={addImageTransformations(desktop, "1920")}
        alt="backup"
        src={`${addImageTransformations(desktop, "1920")}`}
      />
    </picture>
  );
};
