import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "../data/content";

const H = ({ children }: { children: string }) => <h4 className="mb-2 mt-6 text-sm font-semibold text-white">{children}</h4>;

export function Projects() {
  const [id, setId] = useState(PROJECTS[0].id);
  const p = PROJECTS.find((x) => x.id === id)!;

  return (
    <Section id="projects" title="Project control center" intro="Six projects across vision, language, reinforcement learning and agents. Select one to read the case study.">
      <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
        <div role="tablist" aria-label="Projects" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col">
          {PROJECTS.map((x) => (
            <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={x.id === id} aria-controls="project-panel" onClick={() => setId(x.id)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left transition ${x.id === id ? "border-accent bg-accent/10 shadow-glow" : "border-line bg-panel/60 hover:border-accent/50"}`}>
              <span className="block font-medium text-white">{x.name}</span>
              <span className="block text-xs text-mist">{x.domain}</span>
            </button>
          ))}
        </div>

        <div id="project-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="card min-h-[28rem] p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={p.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
              <p className="text-accent">{p.tagline}</p>
              <p className="mt-4 text-mist">{p.description}</p>
              <H>Problem</H><p className="text-sm text-slate-300">{p.problem}</p>
              <H>Technologies</H>
              <ul className="flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-md border border-line px-2 py-1 font-mono text-xs text-slate-300">{s}</li>)}</ul>
              <div className="grid gap-x-8 md:grid-cols-2">
                <div><H>Key implementation</H><ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-300">{p.implementation.map((s) => <li key={s}>{s}</li>)}</ul></div>
                <div><H>Major features</H><ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-300">{p.features.map((s) => <li key={s}>{s}</li>)}</ul></div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink hover:brightness-110"><Github size={16} aria-hidden="true" />Source code</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-white hover:border-accent"><ExternalLink size={16} aria-hidden="true" />Live demo</a>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
