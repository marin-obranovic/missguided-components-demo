import React, { useState } from "react";
import "./AccordionItem.scss";
// import Plus from "../../assets/plus-bold.svg";
import { ReactComponent as Plus } from "../../assets/plus-bold.svg";
// import Minus from "../../assets/minus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";

export const AccordionItem = (Props) => {
  const { text, children } = Props;

  const [opened, setOpened] = useState(false);
  const onOpen = () => {
    setOpened(!opened);
  };

  // tu sam stao https://www.missguided.co.uk/help

  console.log(Plus);
  return (
    <div className={`accordion-item`}>
      <h4 onClick={onOpen}>
        {opened && <Minus />}
        {!opened && <Plus />}
        {text}
      </h4>
      {opened && children}
    </div>
  );
};
