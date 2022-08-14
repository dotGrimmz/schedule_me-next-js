import { NextApiRequest, NextApiResponse } from "next";
import { availablePeriodsRepo } from "../../../helpers/api/availablePeriods.repo";
export default function createAvailablePeriod(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { availablePeriod, id } = req.body;
  const userPeriods = availablePeriodsRepo.createPeriod(id, availablePeriod);
  console.log({ userPeriods });
  return res.status(201).send(userPeriods);
}
