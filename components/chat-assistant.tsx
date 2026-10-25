"use client";

import { useEffect, useRef, useState } from "react";
import { assistantKnowledge, assistantSuggestions } from "@/lib/data";
import { BuildingIcon } from "./icons";

type Message = { from: "bot" | "me"; text: string };

const GREETING = "Hi, I'm a small assistant that knows Jagath's CV. What would you like to know?";
const FALLBACK =
  "I can only answer from Jagath's CV. Try asking about his current role, experience, skills, projects, education or how to contact him.";

// Picks the entry whose keywords appear most often in the question
function answer(question: string) {
  const q = question.toLowerCase();
  let best: string = FALLBACK;
  let score = 0;
  for (const entry of assistantKnowledge) {
    const hits = entry.keys.filter((k) => q.includes(k)).length;
    if (hits > score) {
      score = hits;
      best = entry.answer;
    }
  }
  return best;
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const show = () => {
    setOpen(true);
    if (messages.length === 0) setMessages([{ from: "bot", text: GREETING }]);
  };

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => launchRef.current?.focus());
  };

  const ask = (q: string) => {
    const text = q.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "me", text }]);
    setInput("");
    setTyping(true);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650;
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: answer(text) }]);
    }, delay);
  };

  return (
    <>
      {!open && (
        <button type="button" className="bot-launch" ref={launchRef} aria-label="Ask about Jagath" onClick={show}>
          <BuildingIcon />
          <span>Ask about me</span>
        </button>
      )}
      {open && (
        <div className="bot" role="dialog" aria-modal="false" aria-label="Chat about Jagath">
          <div className="bot__head">
            <BuildingIcon style={{ color: "var(--inv-fg)" }} />
            <div>
              <h3>Ask about Jagath</h3>
              <p>Answers come from his CV</p>
            </div>
            <button type="button" className="icon-btn bot__close" aria-label="Close chat" onClick={close}>
              ×
            </button>
            <span className="bot__skyline" />
          </div>
          <div className="bot__log" ref={logRef} aria-live="polite">
            {messages.map((m, i) => (
              <div className={`msg msg--${m.from}`} key={i}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="typing" aria-label="Typing">
                <i />
                <i />
                <i />
              </div>
            )}
          </div>
          <div className="bot__chips">
            {assistantSuggestions.map((s) => (
              <button type="button" key={s} onClick={() => ask(s)}>
                {s}
              </button>
            ))}
          </div>
          <form
            className="bot__form"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <label htmlFor="bot-input" className="sr-only">
              Your question
            </label>
            <input
              id="bot-input"
              ref={inputRef}
              autoComplete="off"
              placeholder="Ask about experience, skills, Germany…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
