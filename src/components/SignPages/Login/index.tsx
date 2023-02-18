import React, { PropsWithChildren } from "react";
import Layout from "@src/components/Layout/Layout";
import { useAuthRedirect } from "@src/hooks/useAuthRedirect";
import Footer from "../components/Footer/Footer";
import FormWrapper from "../components/FormWrapper/FormWrapper";
import LoginForm from "./LoginForm/LoginForm";

const Login: React.FC<PropsWithChildren> = () => {
  useAuthRedirect();

  return (
    <Layout footer={<Footer isLogin />}>
      <FormWrapper title={"Вход в Yoldi Agency"}>
        <LoginForm />
      </FormWrapper>
    </Layout>
  );
};

export default Login;
