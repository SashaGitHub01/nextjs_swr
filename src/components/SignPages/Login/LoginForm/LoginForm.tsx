import React from "react";
import Button from "@src/components/universal/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { ILoginDto } from "@src/types/dtos/Login.dto";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import s from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(1).trim().required(),
  });

  const onSubmit = (values: ILoginDto) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, dirty }) => {
        return (
          <form className={s.col} onSubmit={handleSubmit}>
            <FormikInput placeholder="E-mail" name="email" type="email" />
            <FormikInput placeholder="Пароль" name="password" type="password" />
            <Button type="submit" disabled={!dirty}>
              Войти
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
