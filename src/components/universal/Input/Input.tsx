/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import clsx from "clsx";
import React, { InputHTMLAttributes, useMemo, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@src/assets/icons";
import s from "./Input.module.scss";
import Typography from "../Typography/Typography";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  error?: boolean;
  label?: React.ReactNode;
  startText?: string;
}

const Input: React.FC<InputProps> = ({
  children,
  iconStart,
  iconEnd,
  className,
  error,
  value,
  disabled,
  type,
  label,
  startText,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [currentIconEnd, currentType] = useMemo(() => {
    if (type === "password") {
      if (isVisible) {
        return [<EyeSlashIcon />, "text"];
      }

      return [<EyeIcon />, "password"];
    }

    return [iconEnd, type];
  }, [type, isVisible]);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const getClasses = () => {
    return clsx(s.input, className, {
      [s.error]: !!error,
      [s.disabled]: !!disabled,
    });
  };

  return (
    <div className={clsx(s.wrapper, className)}>
      {!!label && (
        <Typography className={s.label} variant="button_text">
          {label}
        </Typography>
      )}
      <div className={getClasses()}>
        {!!startText && (
          <Typography variant="p1" className={s.prefix}>
            {startText}
          </Typography>
        )}
        <div className={s.field_cont}>
          {!!iconStart && <div className={clsx(s.icon, s.icon_start)}>{iconStart}</div>}
          <input type={currentType} className={s.field} {...props} />
          {!!currentIconEnd && (
            <div onClick={toggleVisibility} className={clsx(s.icon, s.icon_end)}>
              {currentIconEnd}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
