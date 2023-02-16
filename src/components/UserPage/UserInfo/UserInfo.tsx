/* eslint-disable react/display-name */
import React, { PropsWithChildren } from "react";
import Container from "@components/universal/Container/Container";
import Typography from "@components/universal/Typography/Typography";
import Avatar from "@components/universal/Avatar/Avatar";
import Button from "@components/universal/Button/Button";
import { EditIcon, ExitIcon } from "@src/assets/icons";
import CoverImage from "../CoverImage/CoverImage";
import s from "./UserInfo.module.scss";

interface UserInfoProps {
  handleOpen: () => void;
}

const UserInfo: React.FC<PropsWithChildren<UserInfoProps>> = React.memo(({ handleOpen }) => {
  return (
    <div className={s.wrapper}>
      <CoverImage url="https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg" />
      <Container>
        <Avatar editable className={s.avatar} name="Namer" variant="big" />
        <div className={s.row}>
          <div className={s.name}>
            <Typography variant="title" as={"h1"}>
              Namemee mameemrrrrrrrrrrrrrrrrrrefweeeeewrmameemrrrrrrrrrrrrrrrrrrefweeeeewr
            </Typography>
            <Typography className={s.mail} variant="p1">
              Namemeemameemrrrrrr@mr.ru
            </Typography>
            <div className={s.description}>
              <Typography variant="p1">
                <pre>
                  Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно
                  быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не
                  должен нести никакого смысла, лишь показать наличие самого текста или
                  продемонстрировать типографику в деле.
                </pre>
              </Typography>
            </div>
            <div className={s.exit}>
              <Button variant="secondary" iconStart={<ExitIcon />}>
                Выйти
              </Button>
            </div>
          </div>
          <div className={s.btn}>
            <Button iconStart={<EditIcon />} variant="secondary" onClick={handleOpen}>
              Редактировать
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default UserInfo;
