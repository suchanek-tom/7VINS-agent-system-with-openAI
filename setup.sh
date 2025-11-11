#!/bin/bash

# Chat App Initialization Script for macOS

echo "🚀 Chat App Setup Script"
echo "========================"
echo ""

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "❌ Ollama is not installed"
    echo "📥 Installing Ollama via Homebrew..."
    brew install ollama
    echo "✅ Ollama installed!"
else
    echo "✅ Ollama is already installed"
fi

echo ""
echo "🔧 Starting Ollama service..."
brew services start ollama
echo "✅ Ollama service started!"

echo ""
echo "📦 Pulling neural-chat model (this may take a few minutes)..."
ollama pull neural-chat

if [ $? -eq 0 ]; then
    echo "✅ neural-chat model downloaded!"
else
    echo "⚠️  Model download failed. Try manually: ollama pull neural-chat"
fi

echo ""
echo "📚 Installing npm dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the app, run:"
echo "   npm run dev"
echo ""
echo "📱 Then open: http://localhost:3000"
echo ""
echo "ℹ️  If you see errors, make sure Ollama is running:"
echo "   brew services start ollama"
