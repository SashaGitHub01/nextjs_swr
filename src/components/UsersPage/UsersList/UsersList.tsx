import { UserApi } from "@src/API/UserApi";
import Typography from "@src/components/universal/Typography/Typography";
import { KEYS } from "@src/constants/keys";
import { IUser } from "@src/types/User";
import React, { PropsWithChildren } from "react";
import useSWR from "swr";
import UserItem from "./UserItem/UserItem";
import s from "./UsersList.module.scss";

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<PropsWithChildren<UsersListProps>> = ({ users }) => {
  const { data } = useSWR(KEYS.user, UserApi.getUsers, {
    fallbackData: users,
  });

  return (
    <div className={s.wrapper}>
      <Typography as={"h1"} variant="title" className={s.title}>
        Список аккаунтов
      </Typography>
      <div className={s.list}>
        {!!data &&
          data.map((user) => {
            return <UserItem {...user} key={user.slug} />;
          })}
      </div>
    </div>
  );
};

export default UsersList;
