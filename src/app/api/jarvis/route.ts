import { NextResponse } from 'next/server';
import { person, titles } from '@/lib/content';

export const runtime = 'nodejs';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const configuredModel = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const fallbackModels = ['gemini-2.5-flash', 'gemini-flash-latest'];

const profileContext = [
  `Name: ${person.name}`,
  `Headline: ${person.headline}`,
  `Location: ${person.location}`,
  `Phone: ${person.phone}`,
  `Email: ${person.email}`,
  `LinkedIn: ${person.links.linkedin || 'Not provided'}`,
  `Portfolio: ${person.portfolioUrl}`,
  `Open to: ${person.openTo}`,
  '',
  'Projects:',
  ...titles
    .filter((item) => item.kind === 'project')
    .map(
      (project) =>
        `- ${project.name}: ${project.subtitle || ''} ${project.status ? `[${project.status}]` : ''}. ${project.description.split('\n')[0]}`
    ),
  '',
  'Experience:',
  ...titles
    .filter((item) => item.kind === 'experience')
    .map((exp) => `- ${exp.name} (${exp.year || 'No year'}) at ${exp.subtitle || ''}: ${exp.description.split('\n')[0]}`),
  '',
  'Certifications/Education:',
  ...titles
    .filter((item) => item.kind === 'education' || item.kind === 'certification')
    .map((cert) => `- ${cert.name} (${cert.year || 'No year'})`)
].join('\n');

const systemPrompt = `
You are Mbatshi AI, an AI assistant for ${person.name}'s portfolio website.
Your job is to answer questions about Mbatshi clearly, accurately, and concisely.

Rules:
- Only provide information grounded in the portfolio context below.
- If something is not in context, say you do not have that detail yet.
- For contact requests, include email (${person.email}) and WhatsApp (${person.links.whatsapp}).
- Keep answers practical, professional, and easy to scan.
- Do not invent work history, certifications, or links.

Portfolio Context:
${profileContext}
`.trim();

function extractResponseText(data: any): string {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    const text = parts
      .filter((part: any) => typeof part?.text === 'string')
      .map((part: any) => part.text)
      .join('\n')
      .trim();

    if (text) return text;
  }

  return "I'm sorry, I couldn't generate a response right now.";
}

function getCandidateModels(): string[] {
  return [configuredModel, ...fallbackModels].filter(
    (modelName, index, all) => Boolean(modelName) && all.indexOf(modelName) === index
  );
}

function parseGeminiError(data: any): string {
  if (typeof data?.error?.message === 'string' && data.error.message.trim()) {
    return data.error.message;
  }
  return 'Mbatshi AI could not process the request.';
}

async function callGeminiModel(
  apiKey: string,
  modelName: string,
  contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }>
) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelName)}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }]
        },
        contents,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 500
        }
      })
    }
  );

  const data = await response.json();
  return { response, data };
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Mbatshi AI is not configured. Set GEMINI_API_KEY in your environment to enable real AI responses.'
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { messages?: ChatMessage[] };
    const incoming = Array.isArray(body?.messages) ? body.messages : [];

    const history = incoming
      .filter(
        (msg) =>
          (msg.role === 'user' || msg.role === 'assistant') &&
          typeof msg.content === 'string' &&
          msg.content.trim()
      )
      .slice(-12);

    if (!history.length) {
      return NextResponse.json(
        { error: 'Please send a message to Mbatshi AI.' },
        { status: 400 }
      );
    }

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = history.map((msg) => ({
      role: (msg.role === 'assistant' ? 'model' : 'user') as 'user' | 'model',
      parts: [{ text: msg.content }]
    }));

    const candidateModels = getCandidateModels();
    let lastError = 'Mbatshi AI could not process the request.';
    let lastStatus = 500;

    for (const modelName of candidateModels) {
      const { response, data } = await callGeminiModel(apiKey, modelName, contents);

      if (response.ok) {
        const reply = extractResponseText(data);
        return NextResponse.json({ reply });
      }

      lastError = parseGeminiError(data);
      lastStatus = response.status;

      if (response.status === 429 || response.status === 404) {
        continue;
      }

      break;
    }

    return NextResponse.json({ error: lastError }, { status: lastStatus });
  } catch {
    return NextResponse.json(
      { error: 'Mbatshi AI encountered an unexpected error. Please try again.' },
      { status: 500 }
    );
  }
}
