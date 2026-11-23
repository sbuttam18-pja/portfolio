import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { Icon } from "./icons";
import { STAGES } from "../data/content";

export function Architecture() {
  const [i, setI] = useState(0);
  const s = STAGES[i];
  return (
    <Section id="architecture" title="System architecture" intro="How an intelligent system moves from raw data to a monitored deployment. Select a stage to see what happens inside it.">
      <ol className="flex flex-wrap items-center gap-2" aria-label="Pipeline stages">
        {STAGES.map((st, n) => (
          <li key={st.id} className="flex items-center gap-2">
            <button aria-pressed={n === i} onClick={() => setI(n)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${n === i ? "border-accent bg-accent/10 text-white shadow-glow" : n < i ? "border-line text-slate-300" : "border-line text-mist hover:border-accent/50"}`}>
              <Icon name={st.icon} size={16} />{st.title}
            </button>
            {n < STAGES.length - 1 && <ChevronRight size={16} className="text-line" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="card mt-6 grid gap-6 p-6 md:grid-cols-[1fr_1.4fr]" aria-live="polite">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white"><Icon name={s.icon} size={20} className="text-accent" />{s.title}</h3>
          <p className="mt-2 text-mist">{s.summary}</p>
          <p className="mt-4 font-mono text-xs text-slate-400">{s.tools.join(", ")}</p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {s.steps.map((st, n) => (
            <li key={st} className="rounded-lg border border-line bg-ink/60 p-3 text-sm text-slate-300"><span className="mr-2 font-mono text-accent">{n + 1}</span>{st}</li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
