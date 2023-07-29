import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API!
});

export async function POST(
    req: Request
) {

    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    try {
        if (!userId) {
            return new NextResponse("Unauthicated", { status: 403 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 })
        }

    } catch (err) {
        console.log("[VIDEO ERROR]", err)
        return new NextResponse("Internal Error", { status: 500 })
    }
}