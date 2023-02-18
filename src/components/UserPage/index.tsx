import React, { PropsWithChildren, useCallback, useState } from "react";
import Modal from "@components/universal/Modal/Modal";
import { IUser } from "@src/types/User";
import useSWR from "swr";
import { useRouter } from "next/router";
import { KEYS } from "@src/constants/keys";
import { UserApi } from "@src/API/UserApi";
import Layout from "../Layout/Layout";
import s from "./UserPage.module.scss";
import UserInfo from "./UserInfo/UserInfo";
import EditForm from "./EditForm/EditForm";

interface UserProps {
  user: IUser;
}

const User: React.FC<PropsWithChildren<UserProps>> = ({ user }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data, mutate } = useSWR(
    [KEYS.user, router.query?.slug],
    () => {
      if (!!router.query?.slug) {
        return UserApi.getUser(router.query?.slug as string);
      }
    },
    { fallbackData: user },
  );

  const updateProfile = useCallback(async () => {
    const mutationRes = await mutate();
    return mutationRes;
  }, [router.query?.slug]);

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
          <EditForm updateProfile={updateProfile} handleClose={handleClose} />
        </Modal>
        {!!data && <UserInfo user={data} handleOpen={handleOpen} />}
      </div>
    </Layout>
  );
};

export default User;
