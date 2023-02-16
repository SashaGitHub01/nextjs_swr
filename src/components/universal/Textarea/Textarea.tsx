import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize";
import Typography from "../Typography/Typography";
import s from "./Textarea.module.scss";

export interface TextareaProps extends TextareaAutosizeProps {
  label?: string;
  error?: boolean;
}

const Textarea: React.FC<PropsWithChildren<TextareaProps>> = ({
  value,
  onChange,
  minRows = 1,
  maxRows = 5,
  name,
  className,
  label,
  error,
  ...props
}) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      {!!label && (
        <Typography className={s.label} variant="button_text">
          {label}
        </Typography>
      )}
      <TextareaAutosize
        className={clsx(s.input, !!error && s.error)}
        value={value}
        onChange={onChange}
        minRows={minRows}
        maxRows={maxRows}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Textarea;
