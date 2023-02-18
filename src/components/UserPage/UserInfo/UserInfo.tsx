/* eslint-disable react/display-name */
import React, { PropsWithChildren } from "react";
import Container from "@components/universal/Container/Container";
import Typography from "@components/universal/Typography/Typography";
import Avatar from "@components/universal/Avatar/Avatar";
import Button from "@components/universal/Button/Button";
import { useSWRConfig } from "swr";
import { EditIcon, ExitIcon } from "@src/assets/icons";
import { KEYS } from "@src/constants/keys";
import { useRouter } from "next/router";
import { LocalStorageHelper } from "@src/utils/LocalStorageHelper";
import { IUser } from "@src/types/User";
import { useGetAuthUser } from "@src/hooks/swr/useGetAuthUser";
import CoverImage from "../CoverImage/CoverImage";
import s from "./UserInfo.module.scss";

interface UserInfoProps {
  handleOpen: () => void;
  user: IUser;
}

const UserInfo: React.FC<PropsWithChildren<UserInfoProps>> = React.memo(({ handleOpen, user }) => {
  const router = useRouter();
  const { mutate: mutateAuth, data } = useGetAuthUser();
  const isAuthUser = !!data?.slug && data?.slug === user.slug;

  const logout = () => {
    mutateAuth(
      () => {
        LocalStorageHelper.deleteApiKey();
        router.push("/login");
        return undefined;
      },
      { revalidate: false },
    );
  };

  return (
    <div className={s.user}>
      <CoverImage editable={isAuthUser} url={user.cover?.url} />
      <Container>
        <Avatar
          src={user.image?.url}
          editable={isAuthUser}
          className={s.avatar}
          name="Namer"
          variant="big"
        />
        <div className={s.row}>
          <div className={s.info}>
            <div className={s.info_col}>
              <Typography variant="title" as={"h1"}>
                {user.name}
              </Typography>
              <Typography className={s.mail} variant="p1">
                {user.email}
              </Typography>
              {isAuthUser && (
                <span className={s.btn_mob}>
                  <Button iconStart={<EditIcon />} variant="secondary" onClick={handleOpen}>
                    Редактировать
                  </Button>
                </span>
              )}
            </div>
            {!!user.description && (
              <div className={s.description}>
                <Typography variant="p1">
                  <pre>{user.description}</pre>
                </Typography>
              </div>
            )}
            {isAuthUser && (
              <div className={s.exit}>
                <Button onClick={logout} variant="secondary" iconStart={<ExitIcon />}>
                  Выйти
                </Button>
              </div>
            )}
          </div>
          {isAuthUser && (
            <Button
              className={s.btn}
              iconStart={<EditIcon />}
              variant="secondary"
              onClick={handleOpen}
            >
              Редактировать
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
});

export default UserInfo;
