import React from "react";
import "./TextBanner.scss";

enum Alignments {
  center = "center",
  left = "left",
  right = "right",
}

export interface TextBannerProps {
  text: string;
  subText: string;
  subLink: string;
  textAlignment: Alignments;
  bold: boolean;
  backgroundColor: string;
}

export const TextBanner = (Props: TextBannerProps) => {
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
