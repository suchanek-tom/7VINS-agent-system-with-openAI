'use client';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
}: ChatInputProps) {
  return (
    <div className="border-t border-[#313244] px-4 py-4 sm:px-6 bg-[#1e1e2e]">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={onSubmit} className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Message..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-[#45475a] bg-[#313244] text-[#cdd6f4] placeholder-[#6c7086] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89b4fa] focus:border-transparent disabled:opacity-50 text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#89b4fa] hover:bg-[#a6d0ff] disabled:opacity-50 disabled:cursor-not-allowed text-[#1e1e2e] font-medium px-4 py-3 rounded-lg transition text-sm sm:text-base"
          >
            Send
          </button>
        </form>
        <p className="text-xs text-[#6c7086] mt-2 text-center">
          🔒 All conversations stay local on your machine. Powered by Ollama
          Neural Chat.
        </p>
      </div>
    </div>
  );
}
