import React from "react";
import { GetStaticProps, NextPage } from "next";
import Users from "@src/components/UsersPage";
import { UserApi } from "@src/API/UserApi";
import { IUser } from "@src/types/User";

interface UsersPageProps {
  users: IUser[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return <Users users={users} />;
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users = await UserApi.getUsers();

  return {
    revalidate: 30,
    props: {
      users,
    },
  };
};
