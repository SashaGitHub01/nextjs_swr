import React, { PropsWithChildren } from "react";
import Container from "@components/universal/Container/Container";
import Layout from "../Layout/Layout";
import UsersList from "./UsersList/UsersList";
import s from "./UsersPage.module.scss";

interface UsersProps {}

const Users: React.FC<PropsWithChildren<UsersProps>> = () => {
  return (
    <Layout>
      <div className={s.wrapper}>
        <Container className={s.container}>
          <UsersList />
        </Container>
      </div>
    </Layout>
  );
};

export default Users;
