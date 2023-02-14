import { IUser } from "../User";

export interface ILoginDto extends Pick<IUser, "email"> {
  password: string;
}
