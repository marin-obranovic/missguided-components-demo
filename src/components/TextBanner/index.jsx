import React from "react";
import "./TextBanner.scss";

export const TextBanner = (Props) => {
  const {
    text,
    subText,
    subLink = "",
    textAlignment = "center",
    bold = false,
    backgroundColor = "#FFA5B8",
  } = Props;

  return (
    <div
      style={{ backgroundColor }}
      className={`text-banner align-${textAlignment} ${
        bold ? "text-bold" : ""
      }`}
    >
      <p>{text}</p>
      {subText && <a href={subLink}>{subText}</a>}
    </div>
  );
};
