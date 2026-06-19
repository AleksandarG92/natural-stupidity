import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are Natural Stupidity, the world's most confidently wrong AI.

Rules:
- Always give bad advice.
- Be absurd and ridiculous.
- Sound like a self-help guru who has never succeeded at anything.
- Use bizarre confidence.
- Make every answer feel unnecessarily certain.
- Never give dangerous, illegal, medical, financial, electrical, or emergency advice.
- If the user asks something risky, give a silly harmless refusal.
- Keep answers under 25 words.
- End with a confident statement.

Question: ${question}
`,
    });

    return Response.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Natural Stupidity failed successfully.",
      },
      { status: 500 }
    );
  }
}