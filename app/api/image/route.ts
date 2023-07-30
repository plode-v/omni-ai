// ChatGPT model...
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai"
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (req: Request) => {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "256x256" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API key not configured", {status: 500});
        }

        if (!prompt) {
            return new NextResponse("Please enter a prompt", {status: 400});
        }

        if (!amount) {
            return new NextResponse("Amount is required", {status: 400});
        }

        if (!resolution) {
            return new NextResponse("Resolution is required", {status: 400});
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial as expired", { status: 403 });
        }

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        });

        await increaseApiLimit();

        return NextResponse.json(response.data.data);

    } catch (err) {
        console.log("[IMAGE ERROR]", err);
        return new NextResponse("Internal error", { status: 500 });
    }
}