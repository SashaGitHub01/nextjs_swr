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
      url: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
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
      url: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
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
      url: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
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
