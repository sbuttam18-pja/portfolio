import { useEffect, useRef } from "react";

const LAYERS = [4, 6, 6, 3];

/** A small feed-forward network. Signals pulse through it and nodes lean toward the cursor. */
export function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, t = 0;
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const pos = (l: number, i: number) => ({
      x: w * (0.1 + (0.8 * l) / (LAYERS.length - 1)),
      y: h * (0.15 + (0.7 * (i + 0.5)) / LAYERS[l]),
    });
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let l = 0; l < LAYERS.length - 1; l++)
        for (let i = 0; i < LAYERS[l]; i++)
          for (let j = 0; j < LAYERS[l + 1]; j++) {
            const a = pos(l, i), b = pos(l + 1, j);
            const p = (t * 0.6 + l * 0.25 + (i * 7 + j * 3) * 0.05) % 1;
            ctx.strokeStyle = "rgba(124,156,255,0.12)";
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            ctx.fillStyle = "rgba(160,190,255,0.9)";
            ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * p, a.y + (b.y - a.y) * p, 1.6, 0, 7); ctx.fill();
          }
      LAYERS.forEach((n, l) => {
        for (let i = 0; i < n; i++) {
          const p = pos(l, i);
          const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
          const pull = d < 140 ? (1 - d / 140) * 10 : 0;
          const x = p.x + (dx / (d || 1)) * pull, y = p.y + (dy / (d || 1)) * pull;
          ctx.fillStyle = pull > 0 ? "#ffd43b" : "#7c9cff";
          ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 10 + pull;
          ctx.beginPath(); ctx.arc(x, y, 5, 0, 7); ctx.fill();
        }
      });
      ctx.shadowBlur = 0;
    };
    const loop = () => { t += 0.004; draw(); raf = requestAnimationFrame(loop); };
    const move = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const leave = () => { mouse.x = mouse.y = -999; };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    reduce ? draw() : (raf = requestAnimationFrame(loop));
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); };
  }, []);

  return <canvas ref={ref} role="img" aria-label="Animated neural network. Nodes move toward your cursor." className="h-72 w-full md:h-96" />;
}
