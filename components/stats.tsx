"use client";

import { useEffect, useRef } from "react";
import { regionsData, statsData } from "@/lib/data";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  // Count up once the numbers come into view; the final values are already rendered
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-to]");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = Number(el.dataset.to);
          const suffix = el.dataset.suffix ?? "";
          const t0 = performance.now();
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / 1200);
            el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suffix;
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="wrap" ref={ref}>
        <div className="section__head">
          <div>
            <p className="eyebrow">In numbers</p>
            <h2>Results from my work so far</h2>
          </div>
        </div>
        <div className="stats">
          {statsData.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__value" data-to={s.value} data-suffix={s.suffix}>
                {s.value}
                {s.suffix}
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="regions">
          {regionsData.map((r) => (
            <div className="region" key={r.city}>
              <h3>{r.city}</h3>
              <ul>
                {r.places.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
