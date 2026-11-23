import type { ReactNode } from "react";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-24">
      <h2 id={`${id}-h`} className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-mist">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
