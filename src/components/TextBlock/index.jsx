import React from "react";
import "./TextBlock.scss";

export const TextBlock = (Props) => {
  const { text, alignment = "center", bold = false } = Props;

  return (
    <div
      className={`text-container align-${alignment} ${bold ? "text-bold" : ""}`}
    >
      <p>{text}</p>
    </div>
  );
};
