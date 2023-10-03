import classNames from "classnames";
import React from "react";

import "src/base-components/Button/Button.scss";

type BUTTON_TYPE = "submit" | "button";

interface IButtonProps {
  id: string;
  name?: string;
  type?: BUTTON_TYPE;

  buttonClassName?: string;

  disabled?: boolean;
  isLoading?: boolean;

  children: React.ReactNode;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// !TO-DO: Add loader
const Button: React.FC<IButtonProps> = (props) => {
  const {
    id,
    name = "",
    type = "button",

    buttonClassName = "",

    disabled = false,
    isLoading = false,

    children,

    onClick,
  } = props;

  return (
    <button
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames("button-container-wrapper", buttonClassName)}
    >
      {children}
      {isLoading && <>...</>}
    </button>
  );
};

export default Button;
