import classNames from "classnames";
import React from "react";

import "src/base-components/Checkbox/Checkbox.scss";

interface ICheckboxProps {
  id: string;
  name?: string;
  label?: string;

  errorMessage?: string;

  checkboxClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;

  disabled?: boolean;
  isChecked: boolean;

  children?: React.ReactNode;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/* 
  TO-DO: 
  1. Make the label clickable
  2. CSS changes to Checkbox
  -> Border radius and color
  -> Hover effect
  -> How to change the CSS of tick
*/

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const {
    id,
    name = "",
    label,

    errorMessage,

    checkboxClassName = "",
    containerClassName = "",
    wrapperClassName = "",
    labelClassName = "",
    errorClassName = "",

    disabled = false,
    isChecked = false,

    onChange,

    children,
  } = props;

  return (
    <div
      className={classNames("checkbox-container-wrapper", containerClassName)}
    >
      <div className={classNames("checkbox-label-container", wrapperClassName)}>
        <input
          id={id}
          name={name}
          type="checkbox"
          disabled={disabled}
          className={classNames(
            "checkbox-wrapper",
            {
              "field-input--invalid": !!errorMessage,
            },
            checkboxClassName
          )}
          checked={isChecked}
          onChange={onChange}
        />
        {label && (
          <label htmlFor={id} className={labelClassName}>
            {label}
          </label>
        )}
      </div>

      {errorMessage && (
        <div className={classNames("error-class", errorClassName)}>
          {errorMessage}
        </div>
      )}

      {children}
    </div>
  );
};

export default Checkbox;
