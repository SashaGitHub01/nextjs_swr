import clsx from "clsx";
import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";
import s from "./Button.module.scss";
import Typography from "../Typography/Typography";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  children,
  iconStart,
  iconEnd,
  className,
  ...props
}) => {
  const getClasses = () => {
    return clsx(s.button, className, {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
    });
  };

  return (
    <button className={getClasses()} {...props}>
      {!!iconStart && <span className={s.icon}>{iconStart}</span>}
      <Typography variant="button_text">{children}</Typography>
      {!!iconEnd && <span className={s.icon}>{iconEnd}</span>}
    </button>
  );
};

export default Button;
