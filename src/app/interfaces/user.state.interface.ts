import { UserI } from './user.interface';

export interface UserState {
  loading: boolean;
  data: ReadonlyArray<UserI>;
}
