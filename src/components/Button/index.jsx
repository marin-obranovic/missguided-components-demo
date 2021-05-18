import React from "react";
import "./Button.scss";
import classNames from "classnames";

export const MgButton = (Props) => {
  const {
    text,
    onAction = () => {},
    bold = false,
    inverted = false,
    disabled = false,
    fullWidth = true,
  } = Props;

  return (
    <button
      onClick={onAction}
      className={classNames({
        "mg-button": true,
        inverted,
        disabled,
        "full-width": fullWidth,
      })}
    >
      {text}
    </button>
  );
};
