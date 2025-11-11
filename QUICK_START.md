# Quick Start Guide - Local AI Chat with Ollama

## ⚡ 5 Minute Setup

### Step 1: Ensure Ollama is Running

```bash
brew services start ollama
```

### Step 2: Wait for Model Download

The app will automatically use the `neural-chat` model. It's currently downloading (~4.1 GB).

Check progress:

```bash
# In a new terminal
ollama pull neural-chat
```

### Step 3: Start the App

```bash
npm run dev
```

Open browser: `http://localhost:3000`

### Step 4: Chat!

Start typing messages in the chat box. The AI will respond!

---

## 📋 What's Happening

✅ **Ollama** - Local LLM server running on port 11434
✅ **Neural Chat Model** - The AI powering your chat
✅ **Next.js App** - Your chat interface
✅ **API Route** - Connects the frontend to Ollama

---

## 🎯 Common Questions

**Q: How do I know Ollama is running?**

```bash
curl http://localhost:11434
# Should show some response
```

**Q: Can I use a different model?**
Yes! Pull another:

```bash
ollama pull mistral
# Then update OLLAMA_MODEL=mistral in .env.local
```

**Q: Why is it slow?**
First response takes longer as the model loads into memory. Subsequent messages are faster.

**Q: How much storage do I need?**

- neural-chat: 4.1 GB
- orca-mini: 1.3 GB
- mistral: 4.4 GB

---

## 🔧 Troubleshooting

### Chat not working?

1. Check Ollama is running: `brew services list`
2. Check model is downloaded: `ollama list`
3. Check port 11434: `lsof -i :11434`

### Need to reinstall Ollama?

```bash
brew uninstall ollama
brew install ollama
brew services start ollama
```

### Want to switch models?

```bash
ollama pull mistral
# Edit .env.local: OLLAMA_MODEL=mistral
# Restart dev server
```

---

## 📚 Next Steps

Once it's working, you can:

- Customize the chat UI further
- Add conversation persistence (save chats)
- Add typing indicators
- Add message reactions/voting
- Fine-tune the model for specific tasks

---

**You're all set!** 🚀 Enjoy your local, private AI chat!
