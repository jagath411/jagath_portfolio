"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";
import { Arrow } from "./icons";

const headline = ["I build fintech", "platforms, data", "pipelines and AI", "agents for production."];

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  // Gentle parallax on the portrait
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () =>
      visualRef.current?.style.setProperty("--y", String(Math.min(window.scrollY * 0.12, 80)));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Full-stack software engineer</p>
          <h1>
            {headline.map((line, i) => (
              <span className="line" key={line}>
                <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
              </span>
            ))}
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
        <div className="hero__visual" ref={visualRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.webp" alt="Portrait of Jagath K R" width={1000} height={1264} />
          <div className="hero__badge">
            <strong>Currently at NashZero</strong>
            <span>Backend and AI integration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
