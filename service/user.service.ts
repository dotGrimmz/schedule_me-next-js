import { CreateUser } from "../types/user.types";

let requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
export const userService = {
  register: (user: CreateUser) => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };

    const res = fetch("http://localhost:3000/api/users/register", opts);
    return res;
  },

  authenticate: (user: CreateUser) => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };
    const res = fetch("http://localhost:3000/api/users/authenticate", opts);

    return res;
  },
};
