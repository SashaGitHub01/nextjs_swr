import React from "react";
import Button from "@src/components/universal/Button/Button";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import { Formik } from "formik";
import { IRegisterDto } from "@src/types/dtos/Register.dto";
import * as Yup from "yup";
import { MailIcon, PassIcon, UserIcon } from "@src/assets/icons";
import { MESSAGES } from "@src/constants/messages";
import s from "./RegisterForm.module.scss";

const RegisterForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, MESSAGES.minLength(2)).trim().required(MESSAGES.required),
    email: Yup.string().email(MESSAGES.email).required(MESSAGES.required),
    password: Yup.string().min(3, MESSAGES.minLength(3)).trim().required(MESSAGES.required),
  });

  const onSubmit = (values: IRegisterDto) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, dirty }) => {
        return (
          <form className={s.col} onSubmit={handleSubmit}>
            <FormikInput iconStart={<UserIcon />} name="name" placeholder="Имя" type="text" />
            <FormikInput iconStart={<MailIcon />} name="email" placeholder="E-mail" type="text" />
            <FormikInput
              iconStart={<PassIcon />}
              name="password"
              placeholder="Пароль"
              type="password"
            />
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
