import { NextApiRequest, NextApiResponse } from "next";
import { availablePeriodsRepo } from "../../../helpers/api/availablePeriods.repo";
export default function getAvailablePeriods(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const userAvailablePeriods = availablePeriodsRepo.findById(id as string);
  if (!userAvailablePeriods) {
    return res
      .status(400)
      .send({ message: "Bad Request - User doesn't exist" });
  }
  return res.status(200).send(userAvailablePeriods);
}
