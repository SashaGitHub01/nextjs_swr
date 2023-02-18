import { useField } from "formik";
import React, { PropsWithChildren } from "react";
import Textarea, { TextareaProps } from "../../Textarea/Textarea";

interface FormikTextareaProps extends TextareaProps {
  name: string;
}

const FormikTextarea: React.FC<PropsWithChildren<FormikTextareaProps>> = ({ ...props }) => {
  const [field, meta] = useField(props.name);
  console.log(meta);
  return (
    <Textarea
      {...props}
      {...field}
      helperText={!!meta.touched && meta.error}
      error={!!(meta.touched && meta.error)}
    />
  );
};

export default FormikTextarea;
