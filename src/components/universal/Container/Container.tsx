import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import s from "./Container.module.scss";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ className, children }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default Container;
