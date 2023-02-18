import React, { PropsWithChildren } from "react";
import s from "./ModalBody.module.scss";

interface ModalBodyProps {}

const ModalBody: React.FC<PropsWithChildren<ModalBodyProps>> = ({ children }) => {
  return <div className={s.body}>{children}</div>;
};

export default ModalBody;
