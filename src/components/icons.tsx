import { BarChart3, Layers, ScanEye, Languages, Sparkles, Workflow, DatabaseZap, MessagesSquare, Filter, FlaskConical, Brain, Plug, Rocket, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const MAP: Record<string, ComponentType<LucideProps>> = { BarChart3, Layers, ScanEye, Languages, Sparkles, Workflow, DatabaseZap, MessagesSquare, Filter, FlaskConical, Brain, Plug, Rocket };
export function Icon({ name, ...p }: { name: string } & LucideProps) {
  const C = MAP[name] ?? Sparkles;
  return <C aria-hidden="true" {...p} />;
}
