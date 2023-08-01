import { getApiLimitCount } from "@/lib/api-limit";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
    try {
        const count = await getApiLimitCount();
        if (!count) {
            return new NextResponse("cannot access API limit", { status: 400 });
        }

        return NextResponse.json(count);
    } catch (err) {
        console.log("[API LIMIT ERROR]",err);
        return new NextResponse("Interal error", { status: 500 });
    }
}