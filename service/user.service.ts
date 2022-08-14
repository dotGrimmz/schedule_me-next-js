import { CreateUser } from "../types/user.types";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
export const userService = {
  //TODO: make this handle response and headers into a wrapper component
  handleResponse: (res: any) => {
    return res.text().then((text: string) => {
      const data = JSON.parse(text);
      return data;
    });
  },
  register: (user: CreateUser) => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };

    const res = fetch("http://localhost:3000/api/users/register", opts).then(
      userService.handleResponse
    );
    return res;
  },

  authenticate: (user: CreateUser) => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(user),
    };
    const res = fetch(
      "http://localhost:3000/api/users/authenticate",
      opts
    ).then(userService.handleResponse);

    return res;
  },
};
