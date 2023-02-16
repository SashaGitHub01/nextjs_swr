/* eslint-disable no-unused-vars */
import Avatar from "@src/components/universal/Avatar/Avatar";
import Typography from "@src/components/universal/Typography/Typography";
import { IUser } from "@src/types/User";
import React, { PropsWithChildren } from "react";
import Link from "next/link";
import s from "./UserItem.module.scss";

interface UserItemProps extends IUser {}

const UserItem: React.FC<PropsWithChildren<UserItemProps>> = ({
  name,
  email,
  slug,
  description,
  image,
}) => {
  return (
    <div className={s.item} key={slug}>
      <Avatar name={name} src={image?.url} className={s.avatar} />
      <div className={s.row}>
        <Link href={`/users${slug}`}>
          <Typography className={s.name} variant="button_text">
            {name}
          </Typography>
        </Link>
        <Typography variant="p1" className={s.email}>
          {email}
        </Typography>
      </div>
    </div>
  );
};

export default UserItem;
