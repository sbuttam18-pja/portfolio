import { Section } from "./Section";
import { Icon } from "./icons";
import { CAPABILITIES } from "../data/content";

export function Capabilities() {
  return (
    <Section id="capabilities" title="AI engineering capabilities" intro="Eight working divisions. Each lists the tools I use and the projects where it shows up.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((c) => (
          <li key={c.id} className="card group p-5 transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-glow">
            <Icon name={c.icon} size={22} className="text-accent" />
            <h3 className="mt-3 font-semibold text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-mist">{c.summary}</p>
            <p className="mt-4 font-mono text-xs text-slate-400">{c.tools.join(", ")}</p>
            <p className="mt-3 border-t border-line pt-3 text-xs text-mist">Used in: {c.projects.join(", ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
