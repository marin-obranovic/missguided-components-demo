import React from "react";
import { DiscountBox } from "../../components/DiscountBox/index.jsx";
import "./DiscountBoxes.scss";

export const DiscountBoxes = (Props) => {
  const { codes } = Props;

  return (
    <div>
      {codes.map((code) => {
        return <DiscountBox {...code} />;
      })}
    </div>
  );
};
