import { UserApi } from "@src/API/UserApi";
import User from "@src/components/UserPage";
import { IUser } from "@src/types/User";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { PropsWithChildren } from "react";

interface UserPageProps {
  user: IUser;
}

const UserPage: React.FC<PropsWithChildren<UserPageProps>> = ({ user }) => {
  return <User user={user} />;
};

export default UserPage;
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const users = await UserApi.getUsers();
    const paths = users.slice(0, 50).map((u) => ({
      params: { slug: u?.slug },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const user = await UserApi.getUser(ctx.params!.slug as string);

    return {
      revalidate: 1,
      props: {
        user,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
