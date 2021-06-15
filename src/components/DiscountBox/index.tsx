import React from "react";
import "./DiscountBox.scss";

enum Alignments {
  center = "center",
  left = "left",
  right = "right",
}

export interface DiscountBoxProps {
  text: string;
  alignment: Alignments;
  description: string;
  backgroundColor: string;
}

export const DiscountBox = (Props: DiscountBoxProps) => {
  const {
    text,
    alignment = Alignments.center,
    description,
    backgroundColor = "#fff3f1",
  } = Props;

  return (
    <div
      style={{ backgroundColor }}
      className={`discount-container align-${alignment}`}
    >
      <div className="firstPart">
        <p className="text">{text}</p>
        <p className="description">{description}</p>
      </div>
      <div className="secondPart">
        <div>ts&cs</div>
        <div>No code required</div>
      </div>
    </div>
  );
};
