import { NextApiResponse } from "next";

export const handleResponse = (res: NextApiResponse) => {
  return res.text().then((text: any) => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};
