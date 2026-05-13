"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/use-language";
import { useAnalytics } from "@/hooks/use-posthog";
import { heroText } from "@/constants/hero-section-translations";
import Navbar from "@/components/navbar";
import "./hero.css";

// ─── Mouse tracker ─────────────────────────────────────────────────────────
type MouseState = { x: number; y: number; raw: { x: number; y: number } };

function useMouse() {
  const ref = useRef<MouseState>({ x: 0.5, y: 0.5, raw: { x: 0, y: 0 } });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ref.current.x = e.clientX / w;
      ref.current.y = e.clientY / h;
      ref.current.raw = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

function useRaf(cb: (t: number) => void) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  useEffect(() => {
    let id = 0;
    const tick = (t: number) => {
      cbRef.current(t);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
}

// ─── Custom cursor ─────────────────────────────────────────────────────────
function Cursor({ mouseRef }: { mouseRef: React.RefObject<MouseState> }) {
  const blobRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const state = useRef({ bx: 0, by: 0, dx: 0, dy: 0, hover: false });

  useEffect(() => {
    const onOver = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest(
        "[data-magnet], a, button"
      );
      state.current.hover = !!t;
    };
    window.addEventListener("pointerover", onOver);
    return () => window.removeEventListener("pointerover", onOver);
  }, []);

  useRaf(
    useCallback(() => {
      if (!blobRef.current || !dotRef.current || !mouseRef.current) return;
      const m = mouseRef.current.raw;
      const s = state.current;
      s.bx += (m.x - s.bx) * 0.12;
      s.by += (m.y - s.by) * 0.12;
      s.dx += (m.x - s.dx) * 0.35;
      s.dy += (m.y - s.dy) * 0.35;
      const scale = s.hover ? 1.6 : 1;
      blobRef.current.style.transform = `translate3d(${s.bx - 28}px, ${
        s.by - 28
      }px, 0) scale(${scale})`;
      dotRef.current.style.transform = `translate3d(${s.dx - 3}px, ${
        s.dy - 3
      }px, 0)`;
    }, [mouseRef])
  );

  return (
    <>
      <div ref={blobRef} className="cursor-blob" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

// ─── Reactive grid ────────────────────────────────────────────────────────
function ReactiveGrid({ mouseRef }: { mouseRef: React.RefObject<MouseState> }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let raf = 0;

    const resize = () => {
      const parent = cvs.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = w + "px";
      cvs.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const step = 36;
    const draw = () => {
      const parent = cvs.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      const rect = cvs.getBoundingClientRect();
      ctx.clearRect(0, 0, w, h);
      const mx = (mouseRef.current?.raw.x ?? 0) - rect.left;
      const my = (mouseRef.current?.raw.y ?? 0) - rect.top;
      for (let x = step / 2; x < w; x += step) {
        for (let y = step / 2; y < h; y += step) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / 260);
          const r = 0.8 + t * 2.2;
          const alpha = 0.05 + t * 0.85;
          ctx.fillStyle =
            t > 0.02
              ? `rgba(255,92,31,${alpha})`
              : "rgba(255,255,255,0.06)";
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [mouseRef]);

  return <canvas ref={canvasRef} className="reactive-grid" />;
}

// ─── Particles (embers) ────────────────────────────────────────────────────
function Particles({
  mouseRef,
  intensity = 1,
}: {
  mouseRef: React.RefObject<MouseState>;
  intensity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let raf = 0;

    const resize = () => {
      const parent = cvs.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = w + "px";
      cvs.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.floor(70 * intensity);
    const W = () =>
      (cvs.parentElement?.clientWidth ?? window.innerWidth) | 0;
    const H = () =>
      (cvs.parentElement?.clientHeight ?? window.innerHeight) | 0;

    const ps = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.4 - 0.05,
      r: Math.random() * 1.6 + 0.2,
      o: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.7 ? "orange" : "white",
    }));

    const draw = () => {
      const w = W();
      const h = H();
      const rect = cvs.getBoundingClientRect();
      ctx.clearRect(0, 0, w, h);
      const mx = (mouseRef.current?.raw.x ?? 0) - rect.left;
      const my = (mouseRef.current?.raw.y ?? 0) - rect.top;
      ps.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 18000) {
          const f = (18000 - d2) / 18000;
          const inv = 1 / Math.sqrt(d2 || 1);
          p.vx += dx * inv * f * 0.08;
          p.vy += dy * inv * f * 0.08;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.fillStyle =
          p.hue === "orange"
            ? `rgba(255,140,60,${p.o})`
            : `rgba(255,255,255,${p.o * 0.6})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [intensity, mouseRef]);

  return <canvas ref={canvasRef} className="particles" />;
}

// ─── Magnetic button ──────────────────────────────────────────────────────
function MagneticButton({
  children,
  primary,
  onClick,
}: {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    const txt = textRef.current;
    if (!el || !txt) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
      txt.style.transform = `translate(${dx * 0.12}px, ${dy * 0.2}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
      txt.style.transform = "";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return (
    <button
      ref={ref}
      className={`mag-btn ${primary ? "primary" : "ghost"}`}
      data-magnet="true"
      onClick={onClick}
      type="button"
    >
      <span ref={textRef} className="mag-btn-inner">
        {children}
        <span className="mag-btn-arrow">↗</span>
      </span>
    </button>
  );
}

// ─── Headline with letter-by-letter reveal ────────────────────────────────
function Headline({ lines }: { lines: { text: string; variant?: "accent" | "bold" }[] }) {
  return (
    <h1 className="headline">
      {lines.map((line, li) => (
        <span
          key={li}
          className={`hl-line${line.variant ? " " + line.variant : ""}`}
        >
          {[...line.text].map((ch, i) => (
            <span
              key={i}
              className="hl-ch"
              style={{ animationDelay: `${li * 0.15 + i * 0.025}s` }}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

// ─── Meta pills row ───────────────────────────────────────────────────────
function MetaPills({
  pills,
  livePill,
}: {
  pills: { num: string; label: string; href?: string }[];
  livePill: string;
}) {
  return (
    <div className="meta-row">
      {pills.map((p) => {
        const inner = (
          <>
            <span className="meta-num">{p.num}</span>
            <span className="meta-label">{p.label}</span>
          </>
        );
        return p.href ? (
          <a
            key={p.label}
            className="meta-pill meta-pill-link"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {inner}
          </a>
        ) : (
          <div className="meta-pill" key={p.label}>
            {inner}
          </div>
        );
      })}
      <div className="meta-pill live">
        <span className="meta-dot" />
        <span className="meta-label">{livePill}</span>
      </div>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────
export default function Hero() {
  const router = useRouter();
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();
  const mouseRef = useMouse();

  const t = heroText[language as keyof typeof heroText] ?? heroText.es;

  const headlineLines = useMemo(
    () => [
      { text: t.headlineLine1 },
      { text: t.headlineLine2, variant: "bold" as const },
      { text: t.headlineLine3 },
    ],
    [t]
  );

  return (
    <section className="fndrs-hero centered" data-cursor="on">
      <ReactiveGrid mouseRef={mouseRef} />
      <Particles mouseRef={mouseRef} intensity={1} />
      <Cursor mouseRef={mouseRef} />

      <Navbar />

      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>{t.eyebrow}</span>
          </div>

          <Headline lines={headlineLines} />

          <p
            className="sub"
            data-lcp
            dangerouslySetInnerHTML={{ __html: t.sub }}
          />

          <div className="cta-row">
            <MagneticButton
              primary
              onClick={() => {
                trackButtonClick("get_started", "hero_section");
                router.push(`/${language}/contact`);
              }}
            >
              {t.ctaPrimary}
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                trackButtonClick("view_services", "hero_section");
                router.push(`/${language}/#services`);
              }}
            >
              {t.ctaSecondary}
            </MagneticButton>
          </div>

          <MetaPills pills={t.metaPills} livePill={t.metaLive} />
        </div>
      </div>

      <div className="scroll-cue">
        <span className="sc-line" />
        <span className="sc-label">{t.scrollCue}</span>
      </div>
    </section>
  );
}
