'use client';

import { Message } from '../types/message';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export function ChatMessages({ messages, isLoading, messagesEndRef }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 bg-[#1e1e2e]">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-4">🤖</div>
          <h2 className="text-3xl font-bold text-[#cdd6f4] mb-2">How can I help?</h2>
          <p className="text-[#bac2de] max-w-md">
            Ask me anything and I will do my best to help. All conversations stay private on your
            machine.
          </p>
        </div>
      ) : (
        <div className="w-4/5 mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xl sm:max-w-2xl lg:max-w-4xl px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-[#89b4fa] text-[#1e1e2e] rounded-br-none shadow-lg'
                    : 'bg-[#313244] text-[#cdd6f4] rounded-bl-none border border-[#45475a]'
                }`}
              >
                {message.role === 'assistant' ? (
                  <div className="prose prose-invert text-sm sm:text-base leading-relaxed wrap-break-word overflow-hidden">
                    <MarkdownRenderer content={message.content} />
                  </div>
                ) : (
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap wrap-break-word overflow-hidden">
                    {message.content}
                  </p>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#313244] text-[#cdd6f4] px-4 py-2 rounded-lg rounded-bl-none border border-[#45475a]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-[#89b4fa] rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-[#89b4fa] rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[#89b4fa] rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}
