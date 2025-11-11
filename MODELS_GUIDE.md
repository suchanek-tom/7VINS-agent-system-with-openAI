# 🧠 AI Models Comparison Guide

This guide helps you choose the right model for your use case.

## Available Models for Ollama

### Neural Chat (Recommended - Default) ⭐

```
ollama pull neural-chat
```

- **Size**: 4.1 GB
- **Download Time**: 5-10 minutes
- **Response Time**: 2-5 seconds
- **Quality**: Good
- **Best For**: General chat, coding help, writing
- **Memory Usage**: ~6 GB RAM
- **Status**: Currently downloading for you!

### Orca Mini (Lightweight)

```
ollama pull orca-mini
```

- **Size**: 1.3 GB
- **Download Time**: 1-3 minutes
- **Response Time**: 1-2 seconds (Fast!)
- **Quality**: Good for simple tasks
- **Best For**: Quick responses, limited resources
- **Memory Usage**: ~2 GB RAM

### Mistral (High Quality)

```
ollama pull mistral
```

- **Size**: 4.4 GB
- **Download Time**: 5-10 minutes
- **Response Time**: 3-8 seconds
- **Quality**: Excellent
- **Best For**: Complex reasoning, detailed answers
- **Memory Usage**: ~8 GB RAM

### Llama2 (Most Capable)

```
ollama pull llama2
```

- **Size**: 3.8 GB
- **Download Time**: 5-10 minutes
- **Response Time**: 4-10 seconds
- **Quality**: Excellent
- **Best For**: Complex tasks, long conversations
- **Memory Usage**: ~7 GB RAM

---

## 📊 Quick Comparison Table

| Model       | Size   | Speed     | Quality   | RAM  | Best Use              |
| ----------- | ------ | --------- | --------- | ---- | --------------------- |
| orca-mini   | 1.3 GB | Very Fast | Fair      | 2 GB | Quick answers         |
| neural-chat | 4.1 GB | Fast      | Good      | 6 GB | General use (default) |
| mistral     | 4.4 GB | Normal    | Great     | 8 GB | Complex questions     |
| llama2      | 3.8 GB | Normal    | Excellent | 7 GB | Detailed responses    |

---

## 🎯 Which Should You Choose?

### 💨 "I want SPEED" → Use orca-mini

```bash
ollama pull orca-mini
# Then in .env.local: OLLAMA_MODEL=orca-mini
```

### ⚖️ "I want a good balance" → Use neural-chat (default)

Already downloading! Just wait.

### 🧠 "I want the BEST quality" → Use mistral or llama2

```bash
ollama pull mistral
# or
ollama pull llama2
# Then in .env.local: OLLAMA_MODEL=mistral
```

### 💾 "I have limited storage" → Use orca-mini

1.3 GB instead of 4 GB+

---

## 🔄 How to Switch Models

1. **Download the new model**:

```bash
ollama pull mistral
```

2. **Update `.env.local`**:

```bash
OLLAMA_MODEL=mistral
```

3. **Restart dev server**:

```bash
# Kill current server (Ctrl+C)
npm run dev
```

4. **Done!** The app will now use Mistral

---

## 💡 Pro Tips

### Keep Multiple Models

You can have several models installed:

```bash
ollama pull neural-chat
ollama pull orca-mini
ollama pull mistral

# See all installed:
ollama list

# They don't all run at once, just use disk space
```

### Free Up Space

```bash
# Remove a model
ollama rm mistral

# See what models are taking space
du -sh ~/.ollama/models/*
```

### Check What's Running

```bash
ps aux | grep ollama
```

---

## 📈 Performance Notes

### First Response

- First response is slower (model loading into RAM)
- Subsequent responses are faster
- After a few minutes of inactivity, model unloads

### Temperature Control

Higher = more creative, lower = more accurate
Currently set to 0.7 (balanced)

You can modify in `app/api/chat/route.ts`:

```typescript
const systemPrompt = "You are a helpful assistant.";
```

---

## 🚀 Optimization Tips

### Make Responses Faster

1. Use orca-mini (smaller model)
2. Upgrade your CPU (models run on CPU by default)
3. Add more RAM (models load into RAM)

### Make Responses Better Quality

1. Use mistral or llama2
2. Add system prompts to guide behavior
3. Ask clearer, more specific questions

### Reduce Disk Space

1. Use orca-mini (1.3 GB vs 4+ GB)
2. Remove unused models with `ollama rm`

---

## 🎓 Model Training Details

### Neural Chat

- Based on: Mistral 7B
- Fine-tuned for: Chat/conversation
- Strengths: General chat, friendly
- Weaknesses: Not as capable as full Mistral

### Orca Mini

- Based on: Phi 2
- Fine-tuned for: Efficiency
- Strengths: Very fast, small
- Weaknesses: Less capable

### Mistral

- Created by: Mistral AI
- Strengths: Intelligent, fast
- Weaknesses: Slightly larger

### Llama2

- Created by: Meta (Facebook)
- Strengths: Very capable, well-balanced
- Weaknesses: Slightly slower

---

## ❓ Frequently Asked Questions

**Q: Can I switch between models easily?**
A: Yes! Just update `.env.local` and restart. They're both just on disk until you use them.

**Q: What if my computer doesn't have enough RAM?**
A: Ollama can use disk as swap. It'll be slower but still work. Orca-mini is best for low-RAM systems.

**Q: Can I run multiple models at once?**
A: Not recommended - one will dominate your RAM. Switch between them instead.

**Q: Which model is best for coding?**
A: Mistral or Llama2 for complex code. Neural Chat is fine for simple code.

**Q: Can I fine-tune a model?**
A: Yes, but it's advanced. The default models are already great!

---

## 🎉 Ready to Start?

Your neural-chat model is downloading. Once done:

```bash
npm run dev
```

Then visit `http://localhost:3000` and start chatting!

Want to experiment later? Just switch models using the guide above. 🚀
