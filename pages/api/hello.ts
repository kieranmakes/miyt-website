// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "John Doe" });
};

// one metallica
// one love
// andy c heartbeat loud
// wow post malone
