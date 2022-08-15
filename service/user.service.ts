import { CreateUser, User } from "../types/user.types";
import { handleResponse } from "../helpers/utils/handleResponse";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
export const userService = {
  register: async (user: CreateUser): Promise<User> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };

    return await fetch("http://localhost:3000/api/users/register", opts).then(
      handleResponse
    );
  },

  authenticate: async (user: CreateUser): Promise<User> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };
    return await fetch(
      "http://localhost:3000/api/users/authenticate",
      opts
    ).then(handleResponse);
  },
};
