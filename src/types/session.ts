import { IUser } from "./user";

export interface SessionProps {
  user?: IUser;
  expires: string;
}