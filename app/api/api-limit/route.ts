import { NextApiRequest, NextApiResponse } from "next";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const count = await getApiLimitCount();
        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err });
    }
}