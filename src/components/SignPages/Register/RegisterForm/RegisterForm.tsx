import React from "react";
import Button from "@src/components/universal/Button/Button";
import FormikInput from "@src/components/universal/FormikInput/FormikInput";
import { Formik } from "formik";
import { IRegisterDto } from "@src/types/dtos/Register.dto";
import s from "./RegisterForm.module.scss";

const RegisterForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: IRegisterDto) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, dirty }) => {
        return (
          <form className={s.col} onSubmit={handleSubmit}>
            <FormikInput name="name" placeholder="Имя" type="text" />
            <FormikInput name="email" placeholder="E-mail" type="text" />
            <FormikInput name="password" placeholder="Пароль" type="password" />
            <Button disabled={!dirty}>Создать аккаунт</Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
