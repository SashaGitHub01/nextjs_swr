import React, { PropsWithChildren } from "react";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import { Formik } from "formik";
import FormikTextarea from "@src/components/universal/Formik/FormikTextarea/FormikTextarea";
import Button from "@src/components/universal/Button/Button";
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
            <FormikInput label="Имя" name="name" />
            <FormikInput startText="example.com/" label="Адрес профиля" name="slug" />
            <FormikTextarea minRows={3} label="Описание" name="description" />
            <div className={s.row}>
              <Button type="button" variant="secondary">
                Отмена
              </Button>
              <Button type="submit" variant="primary">
                Сохранить
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default EditForm;
