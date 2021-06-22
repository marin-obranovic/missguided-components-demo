import React from "react";
import "./Button.scss";
import classNames from "classnames";

export interface MgButtonProps {
  text: string;
  onAction: () => void;
  inverted: boolean;
  disabled: boolean;
  fullWidth: boolean;
}

export const MgButton = (Props: MgButtonProps) => {
  const {
    text,
    onAction = () => {},
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
