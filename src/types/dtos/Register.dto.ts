import { IUser } from "../User";

export interface IRegisterDto extends Pick<IUser, "email" | "name"> {
  password: string;
}
