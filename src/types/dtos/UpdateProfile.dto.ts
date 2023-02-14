import { IUser } from "../User";

export interface IUpdateProfileDto extends Pick<IUser, "name" | "slug"> {
  description?: string;
  imageId?: string;
  coverId?: string;
  password?: string;
}
