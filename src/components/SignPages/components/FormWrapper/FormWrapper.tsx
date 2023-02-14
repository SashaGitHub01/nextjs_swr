import React, { PropsWithChildren, ReactNode } from "react";
import Typography from "@src/components/universal/Typography/Typography";
import s from "./FormWrapper.module.scss";

interface FormWrapperProps {
  title: ReactNode;
}

const FormWrapper: React.FC<PropsWithChildren<FormWrapperProps>> = ({ children, title }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <Typography variant="title" className={s.title}>
          {title}
        </Typography>
        <div className={s.form}>{children}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
