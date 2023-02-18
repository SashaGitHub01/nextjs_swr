import { useGetAuthUser } from "@src/hooks/swr/useGetAuthUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data } = useGetAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/users");
    } else {
      router.push("/login");
    }
  }, []);

  return "";
}
