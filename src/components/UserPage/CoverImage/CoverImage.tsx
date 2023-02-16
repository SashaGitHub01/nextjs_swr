import { IImage } from "@src/types/Image";
import React, { PropsWithChildren } from "react";
import Button from "@src/components/universal/Button/Button";
import { ImageIcon, TrashIcon, UploadIcon } from "@src/assets/icons";
import s from "./CoverImage.module.scss";

interface CoverImageProps extends Partial<IImage> {}

const CoverImage: React.FC<PropsWithChildren<CoverImageProps>> = ({ url }) => {
  return (
    <div className={s.cover}>
      <div className={s.overlay}>
        {!!url ? (
          <Button iconStart={<TrashIcon />} variant='secondary' iconEnd={<ImageIcon />}>
            Удалить
          </Button>
        ) : (
          <Button iconStart={<UploadIcon />} variant='secondary' iconEnd={<ImageIcon />}>
            Загрузить
          </Button>
        )}
      </div>
      {!!url && <img src={url} alt="cover" />}
    </div>
  );
};

export default CoverImage;
