import { IUpdateProfileDto } from "@src/types/dtos/UpdateProfile.dto";
import { IUser } from "@src/types/User";
import { LocalStorageHelper } from "@src/utils/LocalStorageHelper";
import { instance } from ".";

export class ProfileApi {
  static getProfile = async (key: string) => {
    const { data } = await instance.get<IUser>("/profile", {
      headers: {
        "X-API-KEY": key,
      },
    });

    return data;
  };

  static updateProfile = async (dto: IUpdateProfileDto, key: string) => {
    const { data } = await instance.patch<IUser>("/profile", dto, {
      headers: {
        "X-API-KEY": key,
      },
    });
    return data;
  };
}
