import React from "react";
import "./PageTitle.scss";

export const PageTitle = (Props) => {
  const { text, alignment = "center" } = Props;

  return (
    <div className={`title-container align-${alignment}`}>
      <h1>{text}</h1>
    </div>
  );
};
