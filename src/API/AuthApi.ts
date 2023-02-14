import { ILoginDto } from "@src/types/dtos/Login.dto";
import { instance } from ".";

export class AuthApi {
  static login = async (dto: ILoginDto) => {
    const { data } = await instance.post("/auth/login", dto);
    return data;
  };

  static register = async (dto: ILoginDto) => {
    const { data } = await instance.post("/auth/sign-up", dto);
    return data;
  };
}
