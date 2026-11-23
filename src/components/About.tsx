import { Section } from "./Section";
import { PROFILE } from "../data/content";

const code: [string, string][] = [
  ["kw", "class "], ["fn", "Engineer"], ["", ":\n"],
  ["", "    "], ["kw", "def "], ["fn", "__init__"], ["", "(self):\n"],
  ["", "        self.role = "], ["str", `"${PROFILE.role}"`], ["\n", ""],
  ["", "        self.focus = ["], ["str", `"vision"`], ["", ", "], ["str", `"nlp"`], ["", ", "], ["str", `"agents"`], ["", "]\n"],
  ["", "        self.habit = "], ["str", `"baseline first, then improve"`], ["\n", ""],
  ["", "\n    "], ["kw", "def "], ["fn", "ship"], ["", "(self, idea):\n"],
  ["", "        "], ["kw", "return "], ["", "idea.train().evaluate().deploy()"],
];
const color: Record<string, string> = { kw: "text-py", fn: "text-accent", str: "text-emerald-300", "": "text-slate-300", "\n": "" };

export function About() {
  return (
    <Section id="about" title="The engineer behind the intelligence" intro="I like problems where a model has to work outside the notebook: on a webcam, a noisy document or a long task.">
      <div className="grid gap-6 md:grid-cols-5">
        <div className="space-y-4 text-mist md:col-span-3">
          <p>My path started with Python and statistics, then moved through classical ML into deep learning. Each project added one new constraint: real-time video, long text, sparse reward, tool use.</p>
          <p>I work in loops. Build the simplest baseline, measure it honestly, find where it fails, then fix that. It keeps models explainable and the codebase small.</p>
          <p>I am drawn to agentic systems and retrieval, where the engineering around the model decides whether the product is reliable.</p>
        </div>
        <figure className="card overflow-hidden md:col-span-2">
          <figcaption className="flex items-center gap-2 border-b border-line px-4 py-2 font-mono text-xs text-mist"><span className="h-2.5 w-2.5 rounded-full bg-py" aria-hidden="true" />engineer.py</figcaption>
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed"><code>
            {code.map(([k, t], i) => <span key={i} className={color[k] ?? ""}>{k === "\n" ? "\n" : t}</span>)}
          </code></pre>
        </figure>
      </div>
    </Section>
  );
}
