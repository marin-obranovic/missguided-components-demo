import React from "react";
import "./PageTitle.scss";

enum Alignments {
  center = "center",
  left = "left",
  right = "right",
}

export interface PageTitleProps {
  text: string;
  alignment: Alignments;
}

export const PageTitle = (Props: PageTitleProps) => {
  const { text, alignment = Alignments.center } = Props;

  return (
    <div className={`title-container align-${alignment}`}>
      <h1>{text}</h1>
    </div>
  );
};
