import classNames from "classnames";
import React from "react";

import "src/base-components/Input/Input.scss";

type INPUT_TYPES = "text" | "password" | "number";

interface IInputProps {
  id: string;
  name?: string;
  type?: INPUT_TYPES;
  label?: string;
  value: string;
  placeholder?: string;

  errorMessage?: string;

  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  autoComplete?: "on" | "off";

  disabled?: boolean;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  children?: React.ReactNode;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    id,
    name = "",
    type = "text",
    label,
    value,
    placeholder,

    errorMessage,

    inputClassName = "",
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",

    disabled = false,

    autoComplete = "on",

    onBlur,
    onChange,

    children,
  } = props;

  return (
    <div className={classNames("input-container-wrapper", containerClassName)}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(
          "input-wrapper",
          {
            "field-input--invalid": !!errorMessage,
          },
          inputClassName
        )}
        onBlur={onBlur}
        onChange={onChange}
        autoComplete={autoComplete}
      />

      {errorMessage && (
        <div className={classNames("error-class", errorClassName)}>
          {errorMessage}
        </div>
      )}

      {children}
    </div>
  );
};

export default Input;
