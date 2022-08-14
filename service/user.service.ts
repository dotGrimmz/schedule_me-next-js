import {CreateUser, User} from "../types/user.types";
import {handleResponse} from "../helpers/utils/handleResponse";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
export const userService = {
  register: (user: CreateUser): Promise<User> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };

    return fetch("http://localhost:3000/api/users/register", opts).then(
        handleResponse
    );
  },

  authenticate: (user: CreateUser): Promise<User> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };
    return fetch(
        "http://localhost:3000/api/users/authenticate",
        opts
    ).then(handleResponse);
  },
};
