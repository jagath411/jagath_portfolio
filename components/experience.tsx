"use client";

import { useMemo, useRef, useState } from "react";
import { experiencesData, type JobTag } from "@/lib/data";
import { Arrow, ArrowBack } from "./icons";

const FILTERS: ("All" | JobTag)[] = ["All", "Product", "Fintech", "Data"];

export default function Experience() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [page, setPage] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = useMemo(
    () => (filter === "All" ? experiencesData : experiencesData.filter((j) => j.tags.includes(filter))),
    [filter]
  );

  const go = (dir: number) => {
    const next = Math.min(Math.max(page + dir, 0), items.length - 1);
    setPage(next);
    const el = track.current;
    const card = el?.children[next] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    setPage(Math.round(el.scrollLeft / (first.getBoundingClientRect().width + 24)));
  };

  const choose = (f: (typeof FILTERS)[number]) => {
    setFilter(f);
    setPage(0);
    track.current?.scrollTo({ left: 0 });
  };

  // Arrow keys move between tabs, as screen-reader users expect
  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + FILTERS.length) % FILTERS.length;
    choose(FILTERS[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="eyebrow">Career</p>
            <h2>Where I've worked</h2>
          </div>
          <div className="tabs" role="tablist" aria-label="Filter roles">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                aria-selected={filter === f}
                tabIndex={filter === f ? 0 : -1}
                className={`tab ${filter === f ? "is-active" : ""}`}
                onClick={() => choose(f)}
                onKeyDown={(e) => onTabKey(e, i)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="cards" ref={track} onScroll={onScroll} key={filter}>
          {items.map((job, i) => (
            <article className="card" key={job.short} style={{ "--i": i } as React.CSSProperties}>
              <div className="card__top">
                <i />
                <small>{job.location}</small>
                <b>{job.short}</b>
              </div>
              <div className="card__body">
                <div className="card__meta">
                  <span className="pill">{job.pill}</span>
                  <time>{job.date}</time>
                </div>
                <h3>{job.role}</h3>
                <p>{job.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="slider-ctrl">
          <span className="counter">
            {Math.min(page + 1, items.length)} / {items.length}
          </span>
          <div className="slider-ctrl__btns">
            <button type="button" className="round-btn" aria-label="Previous role" onClick={() => go(-1)} disabled={page === 0}>
              <ArrowBack />
            </button>
            <button
              type="button"
              className="round-btn"
              aria-label="Next role"
              onClick={() => go(1)}
              disabled={page >= items.length - 1}
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
