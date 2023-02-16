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
      <Modal onClose={handleClose} open={isOpen}>
        <EditForm />
      </Modal>
      <UserInfo handleOpen={handleOpen} />
    </Layout>
  );
};

export default User;
