import { Message } from '../types/message';

interface ChatRequest {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

interface ChatResponse {
  message: string;
}

export async function sendMessage(messages: Message[]): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    } as ChatRequest),
  });

  const data: ChatResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to get response');
  }

  return data.message;
}
