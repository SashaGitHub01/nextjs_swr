import { useField } from "formik";
import React, { PropsWithChildren } from "react";
import Textarea, { TextareaProps } from "../../Textarea/Textarea";

interface FormikTextareaProps extends TextareaProps {
  name: string;
}

const FormikTextarea: React.FC<PropsWithChildren<FormikTextareaProps>> = ({ ...props }) => {
  const [field, meta] = useField(props.name);

  return <Textarea {...props} {...field} error={!!(meta.touched && meta.error)} />;
};

export default FormikTextarea;
