import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { GITHUB_URL, PROFILE } from "../data/content";

const field = "w-full rounded-lg border border-line bg-ink px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-accent";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\nReply to: ${d.get("email")}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const links = [[Mail, PROFILE.email, `mailto:${PROFILE.email}`], [Github, "GitHub", GITHUB_URL], [Linkedin, "LinkedIn", PROFILE.linkedin]] as const;
  return (
    <Section id="contact" title="Let's build something" intro="Open to internships, research collaborations and AI engineering roles.">
      <div className="grid gap-8 md:grid-cols-2">
        <ul className="space-y-3">
          {links.map(([I, label, href]) => (
            <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card flex items-center gap-3 p-4 transition hover:border-accent/60"><I size={18} className="text-accent" aria-hidden="true" />{label}</a></li>
          ))}
        </ul>
        <form onSubmit={submit} className="card space-y-4 p-6">
          <div><label htmlFor="c-name" className="mb-1 block text-sm text-mist">Name</label><input id="c-name" name="name" required className={field} /></div>
          <div><label htmlFor="c-email" className="mb-1 block text-sm text-mist">Email</label><input id="c-email" name="email" type="email" required className={field} /></div>
          <div><label htmlFor="c-msg" className="mb-1 block text-sm text-mist">Message</label><textarea id="c-msg" name="message" rows={4} required className={field} /></div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink hover:brightness-110"><Send size={16} aria-hidden="true" />Send message</button>
          <p role="status" className="text-sm text-mist">{sent ? "Your email app should open with the message ready to send." : ""}</p>
        </form>
      </div>
    </Section>
  );
}
