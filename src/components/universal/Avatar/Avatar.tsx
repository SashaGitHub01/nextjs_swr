import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import Typography from "@components/universal/Typography/Typography";
import { CameraIcon } from "@src/assets/icons";
import s from "./Avatar.module.scss";

type AvatarVariants = "mini" | "big";

interface AvatarProps {
  className?: string;
  src?: string;
  name?: string;
  variant?: AvatarVariants;
  editable?: boolean;
}

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  src,
  name = "avatar",
  variant = "mini",
  editable = false,
  className,
}) => {
  const firstLetter = name.substring(0, 1);

  return (
    <div
      className={clsx(className, s.avatar, {
        [s.empty]: !src,
        [s.big]: variant === "big",
        [s.mini]: variant === "mini",
      })}
    >
      {editable && (
        <div className={s.overlay}>
          <CameraIcon />
        </div>
      )}
      {src ? <img src={src} alt="avatar" /> : <span className={s.letter}>{firstLetter}</span>}
    </div>
  );
};

export default Avatar;
