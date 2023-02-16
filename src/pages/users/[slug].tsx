import User from "@src/components/UserPage";
import React, { PropsWithChildren } from "react";

interface UserPageProps {}

const UserPage: React.FC<PropsWithChildren<UserPageProps>> = () => {
  return <User />;
};

export default UserPage;
