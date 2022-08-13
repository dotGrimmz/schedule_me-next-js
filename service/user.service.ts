import { CreateUser } from "../types/user.types";

export const userService = {
  register: (user: CreateUser) => {
    const requestOpts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    const res = fetch("http://localhost:3000/api/users/register", requestOpts);

    return res;
  },
};
