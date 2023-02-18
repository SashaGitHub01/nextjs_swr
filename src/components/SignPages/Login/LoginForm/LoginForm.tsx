import React from "react";
import Button from "@src/components/universal/Button/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { ILoginDto } from "@src/types/dtos/Login.dto";
import FormikInput from "@src/components/universal/Formik/FormikInput/FormikInput";
import { MailIcon, PassIcon } from "@src/assets/icons";
import { MESSAGES } from "@src/constants/messages";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import { AuthApi } from "@src/API/AuthApi";
import { KEYS } from "@src/constants/keys";
import { IUser } from "@src/types/User";
import { LocalStorageHelper } from "@src/utils/LocalStorageHelper";
import Spinner from "@src/components/universal/Spinner/Spinner";
import s from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(MESSAGES.email).required(MESSAGES.required),
    password: Yup.string().min(3, MESSAGES.minLength(3)).trim().required(MESSAGES.required),
  });

  const onSubmit = async (values: ILoginDto) => {
    try {
      const res = await AuthApi.login(values);
      LocalStorageHelper.setApiKey(res.value);
      const auth = await mutate<IUser>(KEYS.auth);
      router.push({
        pathname: "/users/[slug]",
        query: { slug: auth?.slug },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, dirty, isSubmitting }) => {
        return (
          <form className={s.col} onSubmit={handleSubmit}>
            <FormikInput iconStart={<MailIcon />} placeholder="E-mail" name="email" type="email" />
            <FormikInput
              iconStart={<PassIcon />}
              placeholder="Пароль"
              name="password"
              type="password"
            />
            <Button
              iconStart={!!isSubmitting && <Spinner size="small" />}
              type="submit"
              disabled={!dirty || isSubmitting}
            >
              Войти
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
