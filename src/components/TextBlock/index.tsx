import React from "react";
import "./TextBlock.scss";

enum Alignments {
  center = "center",
  left = "left",
  right = "right",
}

export interface TextBlockProps {
  text: string;
  alignment: Alignments;
  bold: false;
}

export const TextBlock = (Props: TextBlockProps) => {
  const { text, alignment = "center", bold = false } = Props;

  return (
    <div
      className={`text-container align-${alignment} ${bold ? "text-bold" : ""}`}
    >
      <p>{text}</p>
    </div>
  );
};
