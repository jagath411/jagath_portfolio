"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";
import { Arrow } from "./icons";
import { TechIcon, type TechLogo } from "./tech-logos";

// Skills wired to the portrait. x and y are percentages of the square stage; d is the parallax depth.
const nodes: { name: string; logo: TechLogo; x: number; y: number; d: number }[] = [
  { name: "AI agents", logo: "Ai", x: 50, y: 7, d: 6 },
  { name: "React", logo: "React", x: 14, y: 20, d: 11 },
  { name: "Next.js", logo: "Nextjs", x: 86, y: 20, d: 16 },
  { name: "Node.js", logo: "Nodejs", x: 10, y: 50, d: 6 },
  { name: "Python", logo: "Python", x: 90, y: 50, d: 11 },
  { name: "AWS", logo: "Aws", x: 14, y: 80, d: 16 },
  { name: "Docker", logo: "Docker", x: 86, y: 80, d: 6 },
  { name: "Kubernetes", logo: "Kubernetes", x: 50, y: 93, d: 11 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const section = sectionRef.current;
    if (reduce || !fine || !section) return;

    // Pointer-driven depth: each skill drifts by its own depth, eased each frame
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      section.style.setProperty("--mx", x.toFixed(3));
      section.style.setProperty("--my", y.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Jagath K R, full-stack software engineer</p>
          <h1>
            <span className="line">
              <span style={{ "--i": 0 } as React.CSSProperties}>Built from the</span>
            </span>
            <span className="line">
              <span style={{ "--i": 1 } as React.CSSProperties}>foundations up.</span>
            </span>
          </h1>
          <p className="lede">
            Cloud at the base, data and services in the middle, interfaces and AI agents on
            top. I build every floor, for trading, SaaS and climate products in India and
            Singapore.
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
          <div className="net">
            <svg className="net__wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {nodes.map((n, i) => (
                <g key={n.name} style={{ "--n": i } as React.CSSProperties}>
                  <path className="net__wire" d={`M50 50 L${n.x} ${n.y}`} pathLength={100} vectorEffect="non-scaling-stroke" />
                  <path className="net__pulse" d={`M50 50 L${n.x} ${n.y}`} pathLength={100} vectorEffect="non-scaling-stroke" />
                </g>
              ))}
            </svg>
            <div className="net__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.webp" alt="Portrait of Jagath K R" width={1000} height={1264} />
            </div>
            <ul className="net__nodes" aria-label="Core skills">
              {nodes.map((n, i) => (
                <li
                  key={n.name}
                  className="net__node"
                  style={{ "--x": `${n.x}%`, "--y": `${n.y}%`, "--n": i, "--d": n.d } as React.CSSProperties}
                >
                  <span className={`net__chip${n.logo === "Ai" ? " net__chip--hot" : ""}`}>
                    <TechIcon name={n.logo} />
                    {n.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
