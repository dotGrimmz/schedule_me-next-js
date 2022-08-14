import { NextApiRequest, NextApiResponse } from "next";
import { availablePeriodsRepo } from "../../../helpers/api/availablePeriods.repo";
export default function getAvailablePeriods(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body.user;
  const userAvailablePeriods = availablePeriodsRepo.findById(id);
  if (!userAvailablePeriods) {
    return res
      .status(400)
      .send({ message: "Bad Request - User doesn't exist" });
  }
  console.log(userAvailablePeriods);
  return res.status(201).send(userAvailablePeriods);
}
