import React, { PropsWithChildren } from "react";
import Container from "@components/universal/Container/Container";
import { IUser } from "@src/types/User";
import Layout from "../Layout/Layout";
import UsersList from "./UsersList/UsersList";
import s from "./UsersPage.module.scss";

interface UsersProps {
  users: IUser[];
}

const Users: React.FC<PropsWithChildren<UsersProps>> = ({ users }) => {
  return (
    <Layout>
      <div className={s.wrapper}>
        <Container className={s.container}>
          <UsersList users={users} />
        </Container>
      </div>
    </Layout>
  );
};

export default Users;
