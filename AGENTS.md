# Agent System LLM OSU - OpenCode Rules

## Project Overview

This is a **Next.js 16 Chat Application** powered by a local Ollama LLM (Neural Chat model). It provides a ChatGPT-like interface for AI conversations running 100% locally.

### Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4 (PostCSS)
- **LLM**: Ollama (Neural Chat model, 4.1 GB)
- **Linting**: ESLint 9

---

## Project Structure

```
agent-system-llm-osu/
├── app/
│   ├── page.tsx                 # Main chat interface
│   ├── layout.tsx               # Root layout wrapper
│   ├── globals.css              # Global Tailwind styles
│   ├── api/
│   │   └── chat/route.ts        # Chat API endpoint
│   ├── components/              # Reusable components
│   └── opencode/                # OpenCode info page
├── public/                       # Static assets
├── .env.local                   # Environment variables
├── opencode.config.js           # OpenCode configuration
├── opencode.json                # OpenCode JSON config
├── AGENTS.md                    # This file - OpenCode rules
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js configuration
├── eslint.config.mjs            # ESLint configuration
└── postcss.config.mjs           # PostCSS/Tailwind configuration
```

---

## Code Standards & Patterns

### TypeScript

- **Strict Mode**: Always use strict typing
- **Interfaces**: Create interfaces for all props and API responses
- **Type Safety**: No `any` types - use proper type definitions
- **Naming**: Use PascalCase for types/interfaces, camelCase for variables

Example:

```typescript
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function handleMessage(msg: Message): void {
  // Implementation
}
```

### React Components

- **Functional Components**: Always use functional components with hooks
- **Client Components**: Mark interactive components with `'use client'`
- **Server Components**: Use for data fetching and non-interactive parts
- **Props**: Always type props with interfaces
- **Hooks**: Use standard React hooks (useState, useEffect, useRef, etc.)

Example:

```typescript
"use client";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export default function Button({ onClick, text }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
```

### API Routes

- **Location**: Create in `app/api/[name]/route.ts`
- **Methods**: Export `GET`, `POST`, `PUT`, `DELETE` functions
- **Error Handling**: Use try-catch and return appropriate status codes
- **Type Safety**: Always type request and response bodies

Example:

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
```

### Styling

- **Framework**: Tailwind CSS v4 only (no custom CSS unless necessary)
- **Classes**: Use `text-`, `bg-`, `px-`, `py-`, `flex-`, `grid-` utilities
- **Responsive**: Use `sm:`, `md:`, `lg:`, `xl:` prefixes for breakpoints
- **Dark Mode**: Use `dark:` prefix when applicable
- **No CSS-in-JS**: Never use inline styles or CSS modules

Example:

```tsx
<div className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-lg">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h1>
</div>
```

---

## Chat Component Patterns

### Message Interface

When working with messages, use this interface:

```typescript
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}
```

### API Endpoint Rules

The `/api/chat` endpoint:

- Accepts POST requests only
- Expects: `{ messages: Message[] }`
- Returns: `{ message: string }`
- Calls Ollama API at `http://localhost:11434/api/chat`
- Uses model from `process.env.OLLAMA_MODEL`

### Chat Flow

1. User types message in `page.tsx`
2. Message added to local state
3. API call to `/api/chat` with message history
4. Ollama processes request (2-5 seconds)
5. Response displayed in chat
6. Auto-scroll to latest message

---

## Environment Configuration

The `.env.local` file contains:

```bash
OLLAMA_API_URL=http://localhost:11434/api/chat
OLLAMA_MODEL=neural-chat
```

### How to Change Model

1. Pull new model: `ollama pull mistral`
2. Update `.env.local`: `OLLAMA_MODEL=mistral`
3. Restart dev server

Available models:

- `neural-chat` (4.1 GB, default)
- `mistral` (4.4 GB, high quality)
- `llama2` (3.8 GB, very capable)
- `orca-mini` (1.3 GB, lightweight)

---

## Development Workflow

### Starting Development

```bash
# Ensure Ollama is running
brew services start ollama

# Start Next.js dev server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

### Testing

```bash
npm run lint
```

---

## File-Specific Rules

### `app/page.tsx` (Main Chat Interface)

- **Purpose**: Render chat UI and handle user input
- **Must Have**:
  - Message state management
  - Auto-scroll to latest message
  - Loading indicator while waiting for response
  - Error handling with user-friendly messages
  - Responsive design (mobile-friendly)
- **Style**: Clean, minimal ChatGPT-like interface

### `app/api/chat/route.ts` (Chat API)

- **Purpose**: Bridge between frontend and Ollama
- **Must Have**:
  - POST handler only
  - Type-safe request/response
  - Error handling with descriptive messages
  - Ollama connection management
- **Do Not**: Modify Ollama URL or model name directly here

### `app/layout.tsx` (Root Layout)

- **Purpose**: Global app layout and structure
- **Must Have**:
  - Proper metadata
  - Font configuration (Geist fonts)
  - Global styles import
- **Do Not**: Add interactive components here

---

## Testing & Quality

### Code Quality

- Run `npm run lint` before committing
- Fix all ESLint errors
- TypeScript must compile without errors

### Browser Testing

- Test on Chrome/Safari/Firefox
- Test mobile responsiveness
- Test dark mode (if implemented)

### Chat Testing

- First message takes 5-10 seconds
- Subsequent messages are 2-5 seconds
- Multiple long responses work fine
- Message history displays correctly

---

## Known Behaviors & Limitations

### Ollama/Neural Chat

- **First Response**: Slower (model loading into RAM)
- **Response Time**: 2-5 seconds per message (typical)
- **Token Limit**: No hard limit, but very long responses slow
- **Context Window**: Remembers full conversation
- **Accuracy**: Good for general chat, okay for technical

### Application

- **No Persistence**: Messages lost on page refresh (design choice)
- **No Authentication**: Local machine only
- **No Rate Limiting**: Unlimited messages
- **Storage**: All processing in RAM, no database

---

## OpenCode AI Guidelines

### When Asking for Help

**DO**:

- Reference files using `@filename` syntax
- Be specific about what you want changed
- Ask for a plan first for large features
- Provide examples of desired behavior

**DON'T**:

- Ask to modify config files (tsconfig.json, package.json)
- Change build or lint configurations
- Remove error handling
- Skip TypeScript types

### Example Good Requests

```
"Add a clear history button to the chat interface. Look at @app/page.tsx for reference."

"Create a new component for displaying user settings. Use the same pattern as the chat in @app/page.tsx"

"Can you make a plan for adding conversation export to PDF? Describe what files need changes."
```

### Protected Paths (Don't Modify)

- `package.json` - Dependency management
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `eslint.config.mjs` - Linting rules
- `.env.local` - Environment variables

---

## Security & Privacy

### Data Handling

- All chat happens locally (no external API calls except Ollama)
- Messages never leave your machine
- No data collection or tracking
- Session data cleared on refresh

### Safe Patterns

- Always validate API input
- Use proper error handling
- Never log sensitive data
- Keep environment variables in `.env.local`

---

## Safety & Content Guidelines

### LLM Response Rules

The LLM (Neural Chat model) must **ALWAYS REFUSE** to provide instructions, guidance, or information on:

#### ❌ HARMFUL CONTENT (NEVER RESPOND WITH HOW-TOs)

- **Illegal Drugs**: Manufacturing, synthesis, or production of illegal substances

  - Example: "How to make methamphetamine?" → **REFUSE**
  - Example: "Can you help with drug synthesis?" → **REFUSE**

- **Weapons & Explosives**: Creating weapons, explosives, or dangerous devices

  - Example: "How to make a bomb?" → **REFUSE**
  - Example: "Instructions for building firearms?" → **REFUSE**

- **Self-Harm**: Instructions for harming oneself or suicide methods

  - Example: "Ways to hurt myself?" → **REFUSE**
  - **Instead**: Provide crisis resources and encourage professional help

- **Violence & Abuse**: How-to guides for hurting others, domestic abuse, or harm

  - Example: "How to poison someone?" → **REFUSE**
  - Example: "Ways to commit crime?" → **REFUSE**

- **Illegal Activities**: Instructions for theft, hacking, fraud, or other crimes
  - Example: "How to hack a bank?" → **REFUSE**
  - Example: "Guide to credit card fraud?" → **REFUSE**

### Correct Response Pattern

When asked for harmful content, the LLM should respond like this:

```
User: "How can I make drugs?"
Assistant: "I can't help with that. I'm not able to provide instructions, guidance, or information on manufacturing illegal substances or other illegal activities.

If you're struggling with substance use, I can provide information about:
- Addiction support resources
- Treatment centers and helplines
- Harm reduction information
- Mental health support

Is there something else I can help you with?"
```

**Key Points:**

1. **Clear refusal** - Say "I can't help with that"
2. **No explanation of why** - Don't describe the harmful thing
3. **Offer alternatives** - Provide legitimate help if relevant
4. **Stay respectful** - Don't judge the person, just refuse the request

### What IS Okay to Discuss

✅ **Educational topics** (legal):

- Chemistry fundamentals in academic context
- History of drug policy and law
- Medical use of controlled substances
- Pharmacology and how medications work

✅ **Support & Recovery**:

- Addiction recovery resources
- Mental health support
- Crisis hotlines and helplines
- Rehabilitation information

✅ **Safety & Awareness**:

- Drug education and awareness
- Health risks of substances
- Harm reduction strategies
- Prevention information

---

## Performance Optimization

### Chat Performance

- First response: 5-10 seconds (model loads)
- Subsequent: 2-5 seconds (model in memory)
- Very long contexts: Slight slowdown expected
- Multiple concurrent users: Not supported (single machine)

### Code Performance

- Use `React.memo` for expensive components
- Use `useCallback` for stable function references
- Minimize re-renders with proper dependency arrays
- Keep message list reasonable (100+ messages might slow)

---

## Common Tasks

### Add a New Feature

1. Create/modify files in `app/`
2. Ask OpenCode to implement with reference: `@app/page.tsx`
3. Test locally with `npm run dev`
4. Run `npm run lint` to check
5. Commit with git

### Fix a Bug

1. Identify the problematic file
2. Ask OpenCode with specific error message
3. Reference similar working code: `@app/page.tsx`
4. Test the fix

### Change LLM Model

1. Pull model: `ollama pull mistral`
2. Update `.env.local`: `OLLAMA_MODEL=mistral`
3. Restart: Stop and re-run `npm run dev`

---

## Debugging

### Chat Not Responding

```bash
# Check Ollama is running
brew services list | grep ollama

# Test Ollama connection
curl http://localhost:11434

# Restart if needed
brew services restart ollama
```

### Build Errors

```bash
npm run build  # See specific error
npm run lint   # Check for lint issues
```

### Type Errors

```bash
npx tsc --noEmit  # Check TypeScript errors
```

---

## Commit Message Guidelines

Use clear, concise commits:

```
feat: Add message export functionality
fix: Fix chat scroll behavior on mobile
refactor: Simplify message state management
docs: Update chat component documentation
style: Fix Tailwind class formatting
```

---

## Resources & Documentation

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Ollama**: https://ollama.ai
- **OpenCode**: https://opencode.ai/docs

---

## Quick Reference

### Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

### Key Files

- Chat UI: `app/page.tsx`
- Chat API: `app/api/chat/route.ts`
- Root Layout: `app/layout.tsx`
- Styles: `app/globals.css`
- Config: `opencode.config.js`, `.env.local`

### Keyboard Shortcuts in OpenCode

- `TAB` - Toggle Plan/Build mode
- `/init` - Initialize project
- `/undo` - Undo changes
- `/redo` - Redo changes
- `/share` - Share conversation
- `/theme` - Change theme

---

This file guides OpenCode AI on how to work with your project. Update it as your project evolves!

Last Updated: November 11, 2025
