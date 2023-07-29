import Replicate from "replicate"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API!
})

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, transition_x, transition_y } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if(!prompt) {
            return new NextResponse("Prompt is required", { status: 400 })
        }

        const response = await replicate.run(
            "deforum/deforum_stable_diffusion:e22e77495f2fb83c34d5fae2ad8ab63c0a87b6b573b6208e1535b23b89ea66d6",
            {
                input: {
                    animation_prompts: prompt,
                    transition_x,
                    transition_y
                }
            }
        )

        return NextResponse.json(response);

    } catch (err) {
        console.log("[VIDEO ERROR]", err)
        return new NextResponse("Internal Error", { status: 500 });
    }
}