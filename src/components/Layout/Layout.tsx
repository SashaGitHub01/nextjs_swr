import React, { PropsWithChildren, ReactNode } from "react";
import s from "./Layout.module.scss";
import Header from "./Header/Header";

interface LayoutProps {
  footer?: ReactNode;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, footer }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      {!!footer && <footer className={s.footer}>{footer}</footer>}
    </div>
  );
};

export default Layout;
