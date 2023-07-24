// ChatGPT model...
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (req: Request) => {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API key not configured", {status: 500});
        }

        if (!messages) {
            return new NextResponse("Please enter a prompt", {status: 400});
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages
        });

        return NextResponse.json(response.data.choices[0].message);

    } catch (err) {
        console.log("[CONVERSATION ERROR]", err);
        return new NextResponse("Internal error", { status: 500 });
    }
}