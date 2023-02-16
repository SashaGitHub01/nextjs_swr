import { useField } from "formik";
import React, { PropsWithChildren } from "react";
import Input, { InputProps } from "../../Input/Input";

interface FormikInputProps extends InputProps {
  name: string;
}

const FormikInput: React.FC<PropsWithChildren<FormikInputProps>> = ({ ...props }) => {
  const [field, meta] = useField(props.name);

  return <Input {...props} {...field} error={!!(meta.touched && meta.error)} />;
};

export default FormikInput;
