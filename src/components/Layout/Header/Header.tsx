import Image from "next/image";
import React, { PropsWithChildren } from "react";
import logo from "@assets/images/logo.png";
import Typography from "@src/components/universal/Typography/Typography";
import Button from "@src/components/universal/Button/Button";
import Link from "next/link";
import s from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<PropsWithChildren<HeaderProps>> = () => {
  return (
    <header className={s.header}>
      <div className={s.row}>
        <div className={s.logo_row}>
          <Link href={'/'} className={s.logo}>
            <Image width={80} height={50} alt="logo" src={logo.src} />
          </Link>
          <Typography as={'p'} className={s.text} variant="p1">
            Разрабатываем и запускаем
            <br />
            сложные веб проекты
          </Typography>
        </div>
        {true ? <Button variant="secondary">Войти</Button> : <div className={s.user_info}></div>}
      </div>
    </header>
  );
};

export default Header;
