import React from "react";
import checkIcon from "../../assets/check.svg";
import "./PersonalInfo.css";

type InputMixProps = {
  label: string;
  showLabel?: boolean;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
};

export const InputMix: React.FC<InputMixProps> = (props) => {
  const { showLabel = true, type = "text" } = props;
  const [showLeftIcon, setLetIconVisibility] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isValidEmail = React.useCallback((email: string) => {
    const regExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regExp.test(email.trim());
  }, []);
  React.useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.value = props.defaultValue ?? "";
      const match = isValidEmail(inputRef.current.value);
      setLetIconVisibility(match);
    }
  }, [isValidEmail, props.defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (type === "email") {
      const match = isValidEmail(event.target.value);
      setLetIconVisibility(match);
    }
  };

  return (
    <fieldset className="form-field">
      {showLabel && <legend>{props.label}</legend>}
      <div className="content">
        <input
          type={type}
          ref={inputRef}
          onChange={handleChange}
          placeholder={props.label}
        />
        {showLeftIcon && <img src={checkIcon} />}
      </div>
    </fieldset>
  );
};
