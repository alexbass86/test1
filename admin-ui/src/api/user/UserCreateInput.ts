export type UserCreateInput = {
  firstName?: number | null;
  lastName: string;
  password: string;
  roles: Array<string>;
  username: string;
};
