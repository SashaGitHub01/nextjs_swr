import React, { PropsWithChildren } from "react";
import FormikInput from "@src/components/universal/FormikInput/FormikInput";
import { Formik } from "formik";
import s from "./EditForm.module.scss";

interface EditFormProps {}

const EditForm: React.FC<PropsWithChildren<EditFormProps>> = () => {
  const initialValues = {};

  const onSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className={s.form}>
            <FormikInput label='Имя' name="1" />
          </form>
        );
      }}
    </Formik>
  );
};

export default EditForm;
