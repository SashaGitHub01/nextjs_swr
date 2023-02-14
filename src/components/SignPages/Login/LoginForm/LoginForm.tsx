import React from "react";
import Input from "@src/components/universal/Input/Input";
import Button from "@src/components/universal/Button/Button";
import s from "./LoginForm.module.scss";

const LoginForm: React.FC = () => {
  return (
    <form className={s.col}>
      <Input placeholder="E-mail" type="email" />
      <Input placeholder="Пароль" type="password" />
      <Button>Войти</Button>
    </form>
  );
};

export default LoginForm;
