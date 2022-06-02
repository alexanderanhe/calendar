import { NextApiRequest, NextApiResponse } from "next";

export default function getMettingId(req: NextApiRequest, res: NextApiResponse) {
  res.json({ byId: req.query.id, message: 'getMettingId' });
}