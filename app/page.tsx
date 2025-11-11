'use client';

import { useState } from 'react';
import { useMessages } from './hooks/useMessages';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';

export default function HomePage() {
  const [input, setInput] = useState('');
  const { messages, isLoading, messagesEndRef, handleSendMessage } = useMessages();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSendMessage(input);
    setInput('');
  };

  return (
    <main className="h-screen flex flex-col bg-[#1e1e2e] dark:bg-[#1e1e2e]">
      <div className="border-b border-[#313244] px-4 py-3 sm:px-6 bg-[#1e1e2e]">
        <h1 className="text-2xl font-bold text-[#cdd6f4]">Neural Chat</h1>
        <p className="text-xs text-[#89b4fa] mt-1">Powered by Ollama Local LLM</p>
      </div>

      <ChatMessages messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />

      <ChatInput
        input={input}
        isLoading={isLoading}
        onInputChange={setInput}
        onSubmit={handleFormSubmit}
      />
    </main>
  );
}
