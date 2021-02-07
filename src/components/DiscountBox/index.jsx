import React from "react";
import "./DiscountBox.scss";

export const DiscountBox = (Props) => {
  const {
    text,
    alignment = "center",
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
