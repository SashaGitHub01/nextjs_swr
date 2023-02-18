import React, { PropsWithChildren } from "react";
import s from "./ModalFooter.module.scss";

interface ModalBodyProps {}

const ModalFooter: React.FC<PropsWithChildren<ModalBodyProps>> = ({ children }) => {
  return <div className={s.footer}>{children}</div>;
};

export default ModalFooter;
