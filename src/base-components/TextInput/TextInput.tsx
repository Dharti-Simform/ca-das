import classNames from "classnames";
import React from "react";

import "src/base-components/TextInput/TextInput.scss";

interface ITextInputProps {
  id: string;
  name?: string;
  label?: string;
  value: string;
  placeholder?: string;

  errorMessage?: string;

  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  disabled?: boolean;

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  children?: React.ReactNode;
}

const TextInput: React.FC<ITextInputProps> = (props) => {
  const {
    id,
    name = "",
    label,
    value,
    placeholder,

    errorMessage,

    inputClassName = "",
    containerClassName = "",
    labelClassName = "",
    errorClassName = "",

    disabled = false,

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

export default TextInput;
