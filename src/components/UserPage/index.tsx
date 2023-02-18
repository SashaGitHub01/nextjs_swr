import React, { PropsWithChildren, useCallback, useState } from "react";
import Modal from "@components/universal/Modal/Modal";
import Layout from "../Layout/Layout";
import s from "./UserPage.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import EditForm from "./EditForm/EditForm";

interface UserProps {}

const User: React.FC<PropsWithChildren<UserProps>> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Layout>
      <div className={s.wrapper}>
        <Modal title="Редактировать профиль" onClose={handleClose} open={isOpen}>
          <EditForm handleClose={handleClose} />
        </Modal>
        <UserInfo handleOpen={handleOpen} />
      </div>
    </Layout>
  );
};

export default User;
