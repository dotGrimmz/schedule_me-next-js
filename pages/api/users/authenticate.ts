import { usersRepo } from "../../../helpers/api/users.repo";
import { NextApiRequest, NextApiResponse } from "next";

export default function authenticate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userName, password } = req.body;
  const user = usersRepo.findByUserName(userName);

  if (password !== user?.password) {
    return res.status(400).send({ message: "Incorrect Password" });
  }

  return res.status(200).send(user);
}
