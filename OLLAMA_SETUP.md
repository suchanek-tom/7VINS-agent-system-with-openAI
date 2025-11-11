# Chat Application with Local LLM (Ollama)

This is a simple ChatGPT-like chat interface powered by **Ollama** - a completely free, locally-running LLM.

## Setup Instructions

### Prerequisites

- macOS (or Linux/Windows with appropriate installation)
- Ollama installed via Homebrew

### 1. Start Ollama Service

```bash
brew services start ollama
```

Or if you prefer to run it manually:

```bash
OLLAMA_FLASH_ATTENTION="1" OLLAMA_KV_CACHE_TYPE="q8_0" /opt/homebrew/opt/ollama/bin/ollama serve
```

### 2. Pull a Model

The app uses **neural-chat** by default (lightweight and fast). To pull it:

```bash
ollama pull neural-chat
```

Or try these alternatives:

- `ollama pull mistral` - Excellent quality, larger
- `ollama pull llama2` - Very capable, larger
- `ollama pull orca-mini` - Very lightweight

### 3. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 4. Chat!

Start typing your messages and the local LLM will respond. No API keys needed, everything runs on your machine!

## Configuration

Edit `.env.local` to change:

```bash
OLLAMA_API_URL=http://localhost:11434/api/chat
OLLAMA_MODEL=neural-chat  # Change to your preferred model
```

## Features

✅ **Completely Free** - No API costs, no subscriptions
✅ **Runs Locally** - All data stays on your machine
✅ **Simple UI** - Clean, ChatGPT-like interface
✅ **Fast** - Neural Chat model is lightweight and responsive
✅ **Customizable** - Easy to swap between different models

## Troubleshooting

### "Failed to get response from Ollama"

- Make sure Ollama is running: `brew services start ollama`
- Check Ollama is on port 11434: `curl http://localhost:11434`

### Model not found

- Pull the model first: `ollama pull neural-chat`
- Check available models: `ollama list`

### Slow responses

- Neural Chat is lightweight but try `orca-mini` for even faster responses
- Check your CPU usage - LLMs can be CPU intensive

## Available Models

Quick comparison:

- **neural-chat** (4.1 GB) - Default, good balance
- **orca-mini** (1.3 GB) - Very fast, more limited
- **mistral** (4.4 GB) - High quality, slower
- **llama2** (3.8 GB) - Very capable

## Next Steps

- Customize the chat interface further
- Add conversation history persistence
- Integrate with other local services
- Fine-tune the model for your use case

Enjoy your local AI chat! 🚀
