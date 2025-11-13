# 🤖 Agent System LLM OSU

## 📝 Krátký Popis

**Agent System LLM OSU** je AI chat aplikace, která běží **100% lokálně** bez cloudových služeb. Postavena na Next.js s integrací místního LLM modelu (Ollama).

**Klíčová výhoda**: ChatGPT-like prostředí • **$0 náklady** • **100% soukromí** • Bez internetu

---

## 🎯 Základní Údaje

| Vlastnost | Hodnota                              |
| --------- | ------------------------------------ |
| Framework | Next.js 16 + React 19 + TypeScript 5 |
| Styling   | Tailwind CSS 4                       |
| LLM       | Ollama (Neural Chat / Mistral)       |
| Cena      | $0 (zdarma)                          |
| Soukromí  | 100% lokální                         |
| Stav      | ✅ Hotovo                            |

---

## ✨ Hlavní Vlastnosti

- ✅ ChatGPT-like rozhraní
- ✅ Markdown rendering s kopírováním
- ✅ Real-time odpovědi (2-5 sekund)
- ✅ 100% TypeScript (type-safe)
- ✅ Responsive design (mobilní + desktop)
- ✅ Offline funkce (bez internetu)

---

## 🏗️ Architektura

```
React Frontend
    ↓
Next.js API (/api/chat)
    ↓
Ollama Server (localhost:11434)
    ↓
LLM Model (Neural Chat 4.1 GB)
```

---

## ⚡ Rychlý Start

### Předpoklady

- Node.js 18+
- Ollama (https://ollama.ai)
- `ollama pull neural-chat`

### Instalace

```bash
npm install
npm run dev
# Otevřít http://localhost:3000
```

### Nastavení

Vytvořit `.env.local`:

```
OLLAMA_API_URL=http://localhost:11434/api/chat
OLLAMA_MODEL=neural-chat
```

---

## 📊 Porovnání: LLM Modely

| Faktor         | Neural Chat | Mistral   |
| -------------- | ----------- | --------- |
| Kvalita        | 40/100 ❌   | 95/100 ✅ |
| Čas            | 4.2s        | 5.8s      |
| Programování   | Špatně      | Výborně   |
| **Doporučení** | **Učení**   | **Vývoj** |

---

## 💰 Porovnání: Cursor AI vs Místní Řešení

| Faktor   | Cursor       | Agent System |
| -------- | ------------ | ------------ |
| Cena     | $240/rok     | $0           |
| Soukromí | Cloud        | 100% lokální |
| Internet | Vyžadován    | Volitelný    |
| Offline  | ❌           | ✅           |
| Kvalita  | Velmi vysoká | Dobrá        |

**Doporučení**: Místní model na denní úkoly, Cursor na komplexní problémy.

---

## 📂 Struktura Projektu

```
app/
├── components/
│   ├── ChatMessages.tsx
│   ├── ChatInput.tsx
│   └── MarkdownRenderer.tsx
├── hooks/
│   └── useMessages.ts
├── api/
│   └── chat/route.ts
└── page.tsx
```

---

## 🎓 Cíle Projektu

✅ Funkční AI chat aplikace  
✅ Místní alternativa k Cursor AI  
✅ Porovnání LLM modelů (Neural Chat vs Mistral)  
✅ Best practices s TypeScript/React  
✅ Kompletní dokumentace

---

## 📖 Dokumentace

- **AGENTS.md** - Pravidla projektu, bezpečnost
- **SEMESTRAL_PROJECT_INTRO.md** - Detailní dokumentace
- **Srovnění modelů** - Analýza Neural Chat vs Mistral

---

## 🔐 Bezpečnost

- ✅ Žádná externí API
- ✅ Data zůstávají lokálně
- ✅ Bez cloudových služeb
- ✅ GDPR-compliant

---

## 📝 Příkazy

```bash
npm run dev      # Vývojový server
npm run build    # Build pro produkci
npm run lint     # Kontrola kódu
npm run format   # Formátování
```

---

## 🎯 Použití

### Vhodné pro

- 💻 Učení se AI/ML
- 🔒 Privátní AI asistent
- 💰 Bez nákladů
- 🎓 Vzdělávací projekty

### Nevhodné pro

- ⚡ Vysokorychlostní chatboty
- 🌍 Multi-user aplikace

---

## 🔄 Výběr Modelu

### Neural Chat (Aktuální)

- 📦 4.1 GB
- ⏱️ 2-5 sekund
- 🎯 Obecný chat

### Mistral (Doporučeno)

- 📦 4.4 GB
- ⏱️ 3-7 sekund
- 🎯 Programování

Přepnout:

```bash
ollama pull mistral
# V .env.local: OLLAMA_MODEL=mistral
```

---

## 📊 Metriky

- **Komponenty**: 5
- **Hooks**: 1
- **API endpointy**: 1
- **TypeScript**: 100%
- **Kód**: ~1000 řádků

---

## 🎉 Závěr

Projekt dokazuje, že kvalitní AI aplikace lze vytvořit lokálně, zdarma a bez omezení soukromí.

---

**Projekt**: Agent System LLM OSU  
**Kurz**: 7VINS  
**Datum**: Listopad 2025  
**Tech**: Next.js, React, TypeScript, Tailwind, Ollama
