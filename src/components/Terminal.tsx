import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Section } from "./Section";
import { CAPABILITIES, GITHUB_URL, PROFILE, PROJECTS } from "../data/content";

type Line = { kind: "in" | "out"; text: string };

const COMMANDS: Record<string, () => string[]> = {
  help: () => ["Available commands:", "  help      list commands", "  about     who I am", "  projects  list projects", "  skills    capability divisions", "  contact   how to reach me", "  github    open my GitHub", "  clear     clear the screen"],
  about: () => [`${PROFILE.name}, ${PROFILE.role}.`, "I build vision, language and agentic systems, and I measure before I tune."],
  projects: () => PROJECTS.map((p, i) => `  ${i + 1}. ${p.name} - ${p.tagline}`),
  skills: () => CAPABILITIES.map((c) => `  ${c.title.padEnd(28)} ${c.tools.slice(0, 3).join(", ")}`),
  contact: () => [`  email     ${PROFILE.email}`, `  github    ${GITHUB_URL}`, `  linkedin  ${PROFILE.linkedin}`],
};

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([{ kind: "out", text: "AI HQ terminal. Type 'help' to list commands." }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => { const el = end.current?.parentElement; if (el) el.scrollTop = el.scrollHeight; }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h, raw]); setCursor(-1);
    if (cmd === "clear") return setLines([]);
    const echo: Line = { kind: "in", text: raw };
    if (cmd === "github") { window.open(GITHUB_URL, "_blank", "noopener"); return setLines((l) => [...l, echo, { kind: "out", text: `Opening ${GITHUB_URL}` }]); }
    const out = COMMANDS[cmd]?.() ?? [`command not found: ${cmd}. Type 'help' to list commands.`];
    setLines((l) => [...l, echo, ...out.map((text) => ({ kind: "out" as const, text }))]);
  };
  const submit = (e: FormEvent) => { e.preventDefault(); run(value); setValue(""); };
  const keys = (e: KeyboardEvent) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    const n = e.key === "ArrowUp" ? Math.min(cursor + 1, history.length - 1) : Math.max(cursor - 1, -1);
    setCursor(n); setValue(n < 0 ? "" : history[history.length - 1 - n]);
  };

  return (
    <Section id="terminal" title="Interactive engineering terminal" intro="Ask the portfolio directly. Arrow keys recall earlier commands.">
      <div className="card overflow-hidden shadow-glow" onClick={() => input.current?.focus()}>
        <div className="flex items-center gap-2 border-b border-line px-4 py-2 font-mono text-xs text-mist">
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />ai-hq: ~/portfolio
        </div>
        <div className="h-80 overflow-y-auto p-4 font-mono text-sm" role="log" aria-live="polite" aria-label="Terminal output">
          {lines.map((l, i) => <pre key={i} className={`whitespace-pre-wrap ${l.kind === "in" ? "text-white" : "text-slate-400"}`}>{l.kind === "in" ? `$ ${l.text}` : l.text}</pre>)}
          <form onSubmit={submit} className="flex items-center gap-2 text-white">
            <label htmlFor="term-input" className="text-accent">$</label>
            <input id="term-input" ref={input} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={keys} autoComplete="off" spellCheck={false} aria-label="Terminal command" className="flex-1 bg-transparent outline-none placeholder:text-slate-600" placeholder="help" />
          </form>
          <div ref={end} />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {Object.keys(COMMANDS).concat("github").map((c) => <button key={c} onClick={() => run(c)} className="rounded-md border border-line px-3 py-1 font-mono text-xs text-mist hover:border-accent hover:text-white">{c}</button>)}
      </div>
    </Section>
  );
}
