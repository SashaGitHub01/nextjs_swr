import clsx from "clsx";
import React, { PropsWithChildren, HTMLAttributes, ElementType } from "react";
import s from "./Typography.module.scss";

type TypoVariants = "title" | "subtitle" | "p1" | "p2" | "button_text";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypoVariants;
  as?: ElementType;
}

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant = "p1",
  as = "div",
  className,
  ...props
}) => {
  const TypoComponent = as;

  const getClasses = () => {
    return clsx(s.typo, className, {
      [s.title]: variant === "title",
      [s.subtitle]: variant === "subtitle",
      [s.btn]: variant === "button_text",
      [s.p1]: variant === "p1",
      [s.p2]: variant === "p2",
    });
  };

  return (
    <TypoComponent className={getClasses()} {...props}>
      {children}
    </TypoComponent>
  );
};

export default Typography;
