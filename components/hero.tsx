"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import { Arrow } from "./icons";

const rotating = ["fintech platforms", "data pipelines", "AI agents", "cloud systems"];

// A price-chart style line that runs behind the hero
const SIGNAL =
  "M0 300 C 80 290, 120 250, 190 262 S 300 300, 360 240 S 470 170, 540 205 S 650 250, 720 180 S 840 90, 900 130 S 1010 170, 1080 100 S 1200 40, 1280 70 S 1380 60, 1440 30";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState(0);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotion(!reduce);
    if (reduce) return;

    // Rotate the highlighted phrase in the headline
    const timer = window.setInterval(() => setWord((w) => (w + 1) % rotating.length), 2600);

    // Parallax on scroll for the portrait
    const onScroll = () =>
      visualRef.current?.style.setProperty("--y", String(Math.min(window.scrollY * 0.12, 80)));
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pointer-driven tilt and depth, eased each frame (skipped on touch screens)
    const section = sectionRef.current;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      section?.style.setProperty("--mx", x.toFixed(3));
      section?.style.setProperty("--my", y.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    if (fine && section) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <svg className="hero__signal" viewBox="0 0 1440 340" preserveAspectRatio="none" aria-hidden="true">
        <path className="hero__signal-area" d={`${SIGNAL} L1440 340 L0 340 Z`} />
        <path id="hero-signal" className="hero__signal-line" d={SIGNAL} />
        {motion && (
          <circle className="hero__signal-dot" r="6">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#hero-signal" />
            </animateMotion>
          </circle>
        )}
      </svg>

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Full-stack software engineer</p>
          <h1>
            <span className="sr-only">I build fintech platforms, data pipelines and AI agents for production.</span>
            <span aria-hidden="true">
              <span className="line">
                <span style={{ "--i": 0 } as React.CSSProperties}>I build</span>
              </span>
              <span className="line">
                <span className="rotator" style={{ "--i": 1 } as React.CSSProperties}>
                  {rotating.map((w, i) => (
                    <span key={w} className={`rotator__word ${i === word ? "is-on" : ""} ${i === (word + rotating.length - 1) % rotating.length ? "is-off" : ""}`}>
                      {w}
                    </span>
                  ))}
                </span>
              </span>
              <span className="line">
                <span style={{ "--i": 2 } as React.CSSProperties}>for production.</span>
              </span>
            </span>
          </h1>
          <p className="lede">
            Three years shipping React front ends, Node.js and Python services, and AWS
            infrastructure for trading, SaaS and climate products in India and Singapore.
          </p>
          <div className="btn-row">
            <a href="#experience" className="btn btn--primary">
              View experience <Arrow />
            </a>
            <a href={profile.cv} className="btn btn--line" download>
              Download CV
            </a>
          </div>
          <dl className="facts">
            <div>
              <dt>Based in</dt>
              <dd>Bengaluru, India</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>3+ years</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>BE Computer Science</dd>
            </div>
          </dl>
        </div>

        <div className="hero__stage">
          <div className="hero__visual" ref={visualRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.webp" alt="Portrait of Jagath K R" width={1000} height={1264} />
            <div className="hero__badge">
              <strong>Currently at NashZero</strong>
              <span>Backend and AI integration</span>
            </div>
          </div>

          <div className="float float--a" style={{ "--d": 1.6 } as React.CSSProperties} aria-hidden="true">
            <span className="float__label">Deploy time</span>
            <span className="float__value">−30%</span>
            <svg viewBox="0 0 80 24" className="float__spark">
              <polyline points="0,4 14,7 28,6 42,12 56,15 70,19 80,21" />
            </svg>
          </div>
          <div className="float float--b" style={{ "--d": 2.4 } as React.CSSProperties} aria-hidden="true">
            <i className="float__pulse" />
            <span className="float__label">AI agents</span>
            <span className="float__text">running in production</span>
          </div>
          <div className="float float--c" style={{ "--d": 1.1 } as React.CSSProperties} aria-hidden="true">
            <span className="float__chip">React</span>
            <span className="float__chip">Node.js</span>
            <span className="float__chip">AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
