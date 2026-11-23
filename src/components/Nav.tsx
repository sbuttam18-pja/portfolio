import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

const LINKS = [["about", "About"], ["capabilities", "Capabilities"], ["projects", "Projects"], ["architecture", "Architecture"], ["terminal", "Terminal"], ["research", "R&D"], ["contact", "Contact"]];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-semibold text-white"><Cpu size={18} className="text-accent" aria-hidden="true" />AI HQ</a>
        <ul className="hidden gap-1 md:flex">
          {LINKS.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined} className={`rounded-md px-3 py-1.5 text-sm transition-colors hover:text-white ${active === id ? "bg-line text-white" : "text-mist"}`}>{label}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {LINKS.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-mist hover:text-white">{label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
