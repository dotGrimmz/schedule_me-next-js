export type User = {
  id: string;
  userName: string;
  password: string;
};

export type CreateUser = Omit<User, "id">;
