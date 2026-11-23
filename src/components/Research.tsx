import { Section } from "./Section";
import { EXPERIMENTS, FUTURE, MILESTONES } from "../data/content";

export function Research() {
  return (
    <Section id="research" title="Research and development" intro="How the work has progressed, what I am testing now and where I want to go next.">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <ol className="space-y-6 border-l border-line pl-6">
          {MILESTONES.map((m) => (
            <li key={m.phase} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" aria-hidden="true" />
              <h3 className="font-semibold text-white">{m.phase}</h3>
              <p className="text-sm text-mist">{m.text}</p>
            </li>
          ))}
        </ol>
        <div className="space-y-8">
          <div><h3 className="font-semibold text-white">Current experiments</h3><ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-mist">{EXPERIMENTS.map((e) => <li key={e}>{e}</li>)}</ul></div>
          <div><h3 className="font-semibold text-white">Next research interests</h3><ul className="mt-3 flex flex-wrap gap-2">{FUTURE.map((f) => <li key={f} className="rounded-md border border-line px-2.5 py-1 text-sm text-slate-300">{f}</li>)}</ul></div>
        </div>
      </div>
    </Section>
  );
}
