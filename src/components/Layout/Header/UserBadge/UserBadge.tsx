import Avatar from "@src/components/universal/Avatar/Avatar";
import Button from "@src/components/universal/Button/Button";
import Typography from "@src/components/universal/Typography/Typography";
import { useGetAuthUser } from "@src/hooks/swr/useGetAuthUser";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import s from "./UserBadge.module.scss";

interface UserBadgeProps {}

const UserBadge: React.FC<PropsWithChildren<UserBadgeProps>> = () => {
  const { data } = useGetAuthUser();
  const router = useRouter();

  const navToLogin = () => {
    router.push("/login");
  };

  return !data ? (
    <Button onClick={navToLogin} variant="secondary">
      Войти
    </Button>
  ) : (
    <div className={s.user_row}>
      <Link href={`/users/${data.slug}`}>
        <Typography variant="p1">{data.name}</Typography>
      </Link>
      <Avatar src={data.image?.url} name={data.name} variant="mini" />
    </div>
  );
};

export default UserBadge;
