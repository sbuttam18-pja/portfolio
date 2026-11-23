import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Projects } from "./components/Projects";
import { Architecture } from "./components/Architecture";
import { Terminal } from "./components/Terminal";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { PROFILE } from "./data/content";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      <Hero />
      <main>
        <About /><Capabilities /><Projects /><Architecture /><Terminal /><Research /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mist">{PROFILE.name} / {new Date().getFullYear()}</footer>
    </>
  );
}
