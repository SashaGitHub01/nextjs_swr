import clsx from "clsx";
import React from "react";
import s from "./Spinner.module.scss";

interface SpinnerProps {
  className?: string;
  size?: "small" | "normal";
}

const Spinner: React.FC<SpinnerProps> = ({ className, size = "normal" }) => {
  return (
    <div
      className={clsx(s.spinner, className, {
        [s.small]: size === "small",
        [s.normal]: size === "normal",
      })}
    />
  );
};

export default Spinner;
