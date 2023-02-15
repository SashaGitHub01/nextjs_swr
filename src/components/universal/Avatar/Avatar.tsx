import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import Typography from "@components/universal/Typography/Typography";
import s from "./Avatar.module.scss";

interface AvatarProps {
  width?: number;
  height?: number;
  src?: string;
  name?: string;
}

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  width = 50,
  height = 50,
  src,
  name = "avatar",
}) => {
  const firstLetter = name.substring(0, 1);

  return (
    <div className={clsx(s.avatar, !src && s.empty)} style={{ width, height }}>
      {src ? (
        <img src={src} alt="avatar" />
      ) : (
        <Typography variant="subtitle">{firstLetter}</Typography>
      )}
    </div>
  );
};

export default Avatar;
