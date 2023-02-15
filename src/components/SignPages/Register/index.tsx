import Layout from "@src/components/Layout/Layout";
import React from "react";
import Footer from "../components/Footer/Footer";
import FormWrapper from "../components/FormWrapper/FormWrapper";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register: React.FC = () => {
  return (
    <Layout footer={<Footer />}>
      <FormWrapper title={"Регистрация в Yoldi Agency"}>
        <RegisterForm />
      </FormWrapper>
    </Layout>
  );
};

export default Register;
