import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetAuthUser } from "./swr/useGetAuthUser";

export const useAuthRedirect = () => {
  const router = useRouter();
  const { data } = useGetAuthUser();

  useEffect(() => {
    if (!!data) {
      router.push(`/users/${data.slug}`);
    }
  }, [data]);
};
