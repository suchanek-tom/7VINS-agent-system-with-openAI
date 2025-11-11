import { NextRequest, NextResponse } from 'next/server';

interface MessageType {
  role: 'user' | 'assistant';
  content: string;
}

const OLLAMA_API_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434/api/chat';
const MODEL = process.env.OLLAMA_MODEL || 'mistral';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const response = await fetch(OLLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages.map((msg: MessageType) => ({
          role: msg.role,
          content: msg.content,
        })),
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json({
      message: data.message.content,
    });
  } catch (error) {
    console.error('Ollama API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to get response from Ollama. Make sure Ollama is running with: ollama serve',
      },
      { status: 500 }
    );
  }
}
