import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, SquareTerminal } from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";
import { GITHUB_URL, PROFILE } from "../data/content";

const btn = "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition";

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-14">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-20 pt-20 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-sm text-accent">{PROFILE.name} / {PROFILE.role}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">I build systems that see, read and decide.</h1>
          <p className="mt-5 max-w-lg text-lg text-mist">Computer vision, language models and agentic AI, taken from notebook to something people can use. Six shipped projects, all with source code.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-ink shadow-glow hover:brightness-110`}><ArrowDown size={16} aria-hidden="true" />View projects</a>
            <a href="#terminal" className={`${btn} border border-line text-white hover:border-accent`}><SquareTerminal size={16} aria-hidden="true" />Open terminal</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={`${btn} border border-line text-white hover:border-accent`}><Github size={16} aria-hidden="true" />GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={`${btn} border border-line text-white hover:border-accent`}><Linkedin size={16} aria-hidden="true" />LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="card shadow-glow">
          <NeuralCanvas />
        </motion.div>
      </div>
    </header>
  );
}
