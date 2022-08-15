import { NextApiRequest, NextApiResponse } from "next";
import { usersRepo } from "../../../helpers/api/users.repo";

export default function register(req: NextApiRequest, res: NextApiResponse) {
  const { userName } = req.body;

  if (usersRepo.findByUserName(userName)) {
    return res.status(400).send({ message: `User ${userName} already Exists` });
  }
  const savedUser = usersRepo.createUser(req.body);
  return res.status(201).send(savedUser);
}
