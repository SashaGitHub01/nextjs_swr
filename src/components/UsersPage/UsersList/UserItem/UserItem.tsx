/* eslint-disable no-unused-vars */
import Avatar from "@src/components/universal/Avatar/Avatar";
import Typography from "@src/components/universal/Typography/Typography";
import { IUser } from "@src/types/User";
import React, { PropsWithChildren } from "react";
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
      <div className={s.left_row}>
        <Avatar name={name} src={image?.url} width={50} height={50} />
        <Typography variant="button_text">{name}</Typography>
      </div>
      <Typography variant="p1" className={s.email}>
        {email}
      </Typography>
    </div>
  );
};

export default UserItem;
