import Typography from "@src/components/universal/Typography/Typography";
import { IUser } from "@src/types/User";
import React, { PropsWithChildren } from "react";
import UserItem from "./UserItem/UserItem";
import s from "./UsersList.module.scss";

const users: IUser[] = [
  {
    name: "test",
    email: "test@mail.ry",
    slug: "/tester123",
    description: "hey",
    image: {
      id: "string",
      url: "https://kartinkin.net/uploads/posts/2022-03/1646961333_52-kartinkin-net-p-kartinki-dlya-profilya-stim-57.jpg",
      width: "string",
      height: "string",
    },
  },

  {
    name: "test",
    email: "test@mail.ry",
    slug: "/tester12323",
    description: "hey",
    image: {
      id: "string",
      url: "https://kartinkin.net/uploads/posts/2022-03/1646961333_52-kartinkin-net-p-kartinki-dlya-profilya-stim-57.jpg",
      width: "string",
      height: "string",
    },
  },

  {
    name: "test",
    email: "test@mail.ry",
    slug: "/tester12323",
    description: "hey",
  },

  {
    name: "test",
    email: "test@mail.ry",
    slug: "/test55r123",
    description: "hey",
    image: {
      id: "string",
      url: "https://kartinkin.net/uploads/posts/2022-03/1646961333_52-kartinkin-net-p-kartinki-dlya-profilya-stim-57.jpg",
      width: "string",
      height: "string",
    },
  },
];

interface UsersListProps {}

const UsersList: React.FC<PropsWithChildren<UsersListProps>> = () => {
  return (
    <div className={s.wrapper}>
      <Typography as={"h1"} variant="title" className={s.title}>
        Список аккаунтов
      </Typography>
      <div className={s.list}>
        {!!users &&
          users.map((user) => {
            return <UserItem {...user} key={user.slug} />;
          })}
      </div>
    </div>
  );
};

export default UsersList;
