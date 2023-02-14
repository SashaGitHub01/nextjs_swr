import { IUser } from "@src/types/User";
import { instance } from ".";

export class UserApi {
  static getUsers = async () => {
    const { data } = await instance.get<IUser[]>("/user");

    return data;
  };

  static getUser = async (slug: string) => {
    const { data } = await instance.get<IUser>(`/user/${slug}`);

    return data;
  };
}
