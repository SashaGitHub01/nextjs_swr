import { IImage } from "./Image";

export interface IUser {
  name: string;
  email: string;
  slug: string;
  description?: string;
  image?: IImage;
  cover?: IImage;
}
