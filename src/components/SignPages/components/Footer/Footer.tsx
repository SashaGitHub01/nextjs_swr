import React, { PropsWithChildren } from "react";
import Link from "next/link";
import Typography from "@src/components/universal/Typography/Typography";
import s from "./Footer.module.scss";

interface FooterProps {
  isLogin?: boolean;
}

const Footer: React.FC<PropsWithChildren<FooterProps>> = ({ isLogin }) => {
  return (
    <div className={s.footer}>
      <Typography as={"span"} className={s.row}>
        {!isLogin ? (
          <>
            Уже есть аккаунт? <Link href={"/login"}>Войти</Link>
          </>
        ) : (
          <>
            Еще нет аккаунта? <Link href={"/register"}>Зарегистрироваться</Link>
          </>
        )}
      </Typography>
    </div>
  );
};

export default Footer;
