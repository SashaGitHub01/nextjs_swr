import React from "react";
import Button from "@src/components/universal/Button/Button";
import FormikInput from "@src/components/universal/FormikInput/FormikInput";
import { Formik } from "formik";
import { IRegisterDto } from "@src/types/dtos/Register.dto";
import * as Yup from "yup";
import s from "./RegisterForm.module.scss";

const RegisterForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(1).trim().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(1).trim().required(),
  });

  const onSubmit = (values: IRegisterDto) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, dirty }) => {
        return (
          <form className={s.col} onSubmit={handleSubmit}>
            <FormikInput name="name" placeholder="Имя" type="text" />
            <FormikInput name="email" placeholder="E-mail" type="text" />
            <FormikInput name="password" placeholder="Пароль" type="password" />
            <Button type="submit" disabled={!dirty}>
              Создать аккаунт
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
