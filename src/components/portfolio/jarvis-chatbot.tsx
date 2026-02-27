'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const starter: ChatMessage = {
  role: 'assistant',
  content: 'Hello, I am Mbatshi AI. What do you want to know about Mbatshi?'
};

const quickPrompts = [
  "Tell me about Mbatshi's experience.",
  'What projects has Mbatshi completed?',
  'What certifications does he have?',
  'How can I contact Mbatshi?'
];

export function MbatshiAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([starter]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  useEffect(() => {
    const seenKey = 'mbatshi_ai_opened_once';
    try {
      if (sessionStorage.getItem(seenKey)) return;
      const timer = window.setTimeout(() => {
        if (window.innerWidth < 768) return;
        setIsOpen(true);
        sessionStorage.setItem(seenKey, '1');
      }, 2200);
      return () => window.clearTimeout(timer);
    } catch {
      const timer = window.setTimeout(() => {
        if (window.innerWidth < 768) return;
        setIsOpen(true);
      }, 2200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen, isLoading]);

  const askMbatshiAI = async (text: string) => {
    const userMessage: ChatMessage = { role: 'user', content: text };
    const nextHistory = [...messages, userMessage];

    setMessages(nextHistory);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/mbatshi-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextHistory })
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Mbatshi AI is temporarily unavailable.');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply! }]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Mbatshi AI is temporarily unavailable.';
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I could not answer right now. Please try again in a moment, or contact Mbatshi directly via email/WhatsApp.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSend) return;
    void askMbatshiAI(input.trim());
  };

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[90] sm:right-5">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[min(78vh,560px)] w-[min(94vw,380px)] flex-col overflow-hidden rounded-[12px] border border-[var(--primary)]/35 bg-[var(--card)]/95 shadow-2xl backdrop-blur-lg sm:h-[min(84vh,620px)] sm:w-[min(92vw,380px)]"
          >
            <header className="flex items-center justify-between border-b border-[var(--primary)]/24 px-4 py-3">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--secondary)]">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">Mbatshi AI</div>
                  <div className="text-[11px] text-[var(--muted-foreground)]">AI Assistant</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--primary)]/30 text-[var(--foreground)]/80 transition hover:text-[var(--secondary)]"
                aria-label="Close Mbatshi AI chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                  className={message.role === 'assistant' ? 'mr-3 sm:mr-6' : 'ml-3 sm:ml-6'}
                >
                  <div
                    className={
                      message.role === 'assistant'
                        ? 'max-h-52 overflow-y-auto whitespace-pre-wrap break-words rounded-xl border border-[var(--primary)]/24 bg-[var(--muted)]/78 px-3 py-2 text-sm leading-relaxed text-[var(--foreground)]/88'
                        : 'max-h-52 overflow-y-auto whitespace-pre-wrap break-words rounded-xl border border-[var(--secondary)]/35 bg-[var(--secondary)]/14 px-3 py-2 text-sm leading-relaxed text-[var(--foreground)]'
                    }
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading ? (
                <div className="mr-3 inline-flex items-center gap-2 rounded-xl border border-[var(--primary)]/24 bg-[var(--muted)]/78 px-3 py-2 text-sm text-[var(--muted-foreground)] sm:mr-6">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Mbatshi AI is thinking...
                </div>
              ) : null}

              <div ref={endRef} />
            </div>

            <div className="border-t border-[var(--primary)]/24 px-4 py-3">
              <div className="mb-3 hidden flex-wrap gap-2 sm:flex">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void askMbatshiAI(prompt)}
                    disabled={isLoading}
                    className="rounded-full border border-[var(--primary)]/35 px-3 py-1 text-[11px] text-[var(--foreground)]/86 transition hover:border-[var(--secondary)]/55 hover:text-[var(--secondary)] disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Mbatshi AI about Mbatshi..."
                  className="h-11 w-full rounded-md border border-[var(--primary)]/30 bg-[var(--muted)] px-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--secondary)]/65 sm:h-10"
                  aria-label="Ask Mbatshi AI"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--primary)] text-[var(--foreground)] transition hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-45 sm:h-10 sm:w-10"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {error ? <div className="mt-2 text-xs text-[var(--secondary)]">{error}</div> : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/45 bg-[var(--card)]/92 text-sm text-[var(--foreground)]/92 shadow-lg backdrop-blur-md transition hover:border-[var(--secondary)]/60 hover:text-[var(--secondary)] sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5"
        aria-label="Open Mbatshi AI chat"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Mbatshi AI</span>
      </button>
    </div>
  );
}
